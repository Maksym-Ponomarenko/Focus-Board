"use client"

import { useEffect, useRef, useState } from "react"
import styles from "./Timer.module.scss"

interface ITimerProps {
    duration: number
    size?: number
    strokeWidth?: number
}

export default function Timer({
                                  duration,
                                  size = 350,
                                  strokeWidth = 16,
                              }: ITimerProps) {
    const radius = (size - strokeWidth) / 2
    const circumference = 2 * Math.PI * radius
    const [timeLeft, setTimeLeft] = useState(duration)
    const [progress, setProgress] = useState(0)
    const startTimeRef = useRef<number | null>(null)
    const animationRef = useRef<number | null>(null)

    useEffect(() => {
        const animate = (timestamp: number) => {
            if (!startTimeRef.current) {
                startTimeRef.current = timestamp
            }

            const elapsed = (timestamp - startTimeRef.current) / 1000
            const remaining = Math.max(duration - elapsed, 0)

            setTimeLeft(remaining)
            setProgress(elapsed / duration)

            if (remaining > 0) {
                animationRef.current = requestAnimationFrame(animate)
            } else {
                console.log("completed")
            }
        }

        animationRef.current = requestAnimationFrame(animate)

        return () => {
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current)
            }
        }
    }, [duration])

    const strokeDashoffset = circumference * progress

    const formatTime = (time: number) => {
        const minutes = Math.floor(time / 60)
        const seconds = Math.floor(time % 60)
        return `${minutes}:${seconds.toString().padStart(2, "0")}`
    }

    return (
        <div className={styles.timer} style={{zIndex: -1}}>
            <svg width={size} height={size} className={styles.svg} style={{zIndex: -1}} >
                <circle
                    className={styles.background}
                    strokeWidth={strokeWidth}
                    r={radius}
                    cx={size / 2}
                    cy={size / 2}
                />

                <circle
                    className={styles.progress}
                    strokeWidth={strokeWidth}
                    strokeDasharray={circumference}
                    strokeDashoffset={strokeDashoffset}
                    r={radius}
                    cx={size / 2}
                    cy={size / 2}
                    style={{zIndex: -1}}
                />
            </svg>

            <div className={styles.time}>
                {formatTime(timeLeft)}
            </div>
        </div>
    )
}
