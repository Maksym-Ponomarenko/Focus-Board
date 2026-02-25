"use client"

import {useEffect, useRef, useState} from "react"
import styles from "./Timer.module.scss"

interface ITimerProps {
    duration: number
    strokeWidth?: number
}

export default function Timer({duration, strokeWidth = 16}: ITimerProps) {
    const [size, setSize] = useState<number>(0)
    const [radius, setRadius] = useState<number>(0)

    const circumference = 2 * Math.PI * radius

    const [timeLeft, setTimeLeft] = useState(duration)
    const [progress, setProgress] = useState(0)

    const startTimeRef = useRef<number | null>(null)
    const animationRef = useRef<number | null>(null)

    const [width, setWidth] = useState(0)

    useEffect(() => {
        const handleResize = () => {
            const w = window.innerWidth
            setWidth(w)

            const newSize = w > 750 ? 650 : Math.max(w - 50, 200)
            setSize(newSize)
            setRadius((newSize - strokeWidth) / 2)
        }

        handleResize() // важно: выставить сразу при маунте
        window.addEventListener("resize", handleResize)

        return () => window.removeEventListener("resize", handleResize)
    }, [strokeWidth])

    useEffect(() => {
        startTimeRef.current = null

        const animate = (timestamp: number) => {
            if (!startTimeRef.current) startTimeRef.current = timestamp

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
            if (animationRef.current) cancelAnimationFrame(animationRef.current)
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
            <svg width={size} height={size} className={styles.svg} style={{zIndex: -1}}>
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
                />
            </svg>

            <div className={styles.time}>
                {formatTime(timeLeft)}
            </div>
        </div>
    )
}