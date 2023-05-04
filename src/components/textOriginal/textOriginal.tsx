'use client'

import { useRef, useEffect } from 'react'
import styles from './textOriginal.module.css'

export const TextOriginal: React.FC = () => {
  const textAreaRef = useRef<HTMLTextAreaElement>(null)

  useEffect(() => {
    textAreaRef?.current?.focus()
  }, [])

  return (
    <section className={styles.content}>
      <textarea
        className="text-element"
        ref={textAreaRef}
        cols={30}
        rows={10}
      ></textarea>
    </section>
  )
}
