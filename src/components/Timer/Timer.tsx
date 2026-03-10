'use client'

import {useEffect, useRef, useState} from "react";
import styles from "./Timer.module.scss";
import {useAppDispatch, useAppSelector} from "@/store";
import {tasksActions} from "@/store/taskSlice";
import {statsActions} from "@/store/statsSlice";

type Mode = "focus" | "break";
type Status = "idle" | "running" | "paused";

const FOCUS_DURATION = 25 * 60;
const BREAK_DURATION = 5 * 60;

const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
};

export const Timer = () => {
    const [mode, setMode] = useState<Mode>("focus");
    const [status, setStatus] = useState<Status>("idle");
    const [timeLeft, setTimeLeft] = useState(FOCUS_DURATION);

    const dispatch = useAppDispatch();
    const focusedTask = useAppSelector((state) => state.tasks.focusedTask);

    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    const duration = mode === "focus" ? FOCUS_DURATION : BREAK_DURATION;

    const finishCycle = () => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        }

        if (mode === "focus") {
            if (focusedTask) {
                dispatch(tasksActions.focusDecrement(focusedTask));
            }

            dispatch(statsActions.addFocus(new Date().toISOString()));

            setMode("break");
            setTimeLeft(BREAK_DURATION);
        } else {
            setMode("focus");
            setTimeLeft(FOCUS_DURATION);
        }

        setStatus("idle");
    };

    const skip = () => {
        finishCycle();
    };

    useEffect(() => {
        if (status !== "running") return;

        intervalRef.current = setInterval(() => {
            setTimeLeft((prev) => {
                if (prev <= 1) {
                    return 0;
                }

                return prev - 1;
            });
        }, 1000);

        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
                intervalRef.current = null;
            }
        };
    }, [status]);

    useEffect(() => {
        if (timeLeft !== 0 || status !== "running") return;

        () => finishCycle();
    }, [timeLeft, status, mode, focusedTask, dispatch]);

    const start = () => {
        if (status === "running") return;
        setStatus("running");
    };

    const pause = () => {
        setStatus("paused");

        if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        }
    };

    const reset = () => {
        setStatus("idle");

        if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        }

        setTimeLeft(mode === "focus" ? FOCUS_DURATION : BREAK_DURATION);
    };

    const progress = (timeLeft / duration) * 100;

    return (
        <div className={styles.timerCard}>
            <div className={styles.circleWrapper}>
                <div
                    className={styles.circle}
                    style={{
                        background: `conic-gradient(
                            #1ac0ff ${progress}%,
                            rgba(255,255,255,0.05) ${progress}%
                        )`,
                    }}
                >
                    <div className={styles.innerCircle}>
                        <p className={styles.label}>TIME LEFT</p>
                        <h1 className={styles.time}>{formatTime(timeLeft)}</h1>
                        <div className={styles.label}
                             style={{border: '1px solid lightblue', borderRadius: '10px', padding: '5px'}}
                             onClick={skip}>SKIP
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.buttons}>
                <button onClick={start} className={styles.start}>
                    Start
                </button>

                <button onClick={pause} className={styles.pause}>
                    Pause
                </button>

                <button onClick={reset} className={styles.reset}>
                    Reset
                </button>
            </div>
        </div>
    );
};