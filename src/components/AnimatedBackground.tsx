'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function AnimatedBackground() {
  const { scrollYProgress } = useScroll()
  const [currentFrame, setCurrentFrame] = useState(0)
  const [preloadedImages, setPreloadedImages] = useState<HTMLImageElement[]>([])
  const totalFrames = 116 // フレーム総数 - 1

  useEffect(() => {
    // 画像のプリロード
    const preloadImages = async () => {
      const images = await Promise.all(
        Array.from({ length: totalFrames + 1 }, (_, i) => {
          return new Promise<HTMLImageElement>((resolve) => {
            const img = new Image()
            img.src = getTitleImageUrl(i)
            img.onload = () => resolve(img)
          })
        })
      )
      setPreloadedImages(images)
    }

    preloadImages()
  }, [])

  useEffect(() => {
    const unsubscribe = scrollYProgress.on('change', (latest) => {
      const frame = Math.round(latest * totalFrames)
      setCurrentFrame(frame)
    })

    return () => unsubscribe()
  }, [scrollYProgress])

  const getTitleImageUrl = (frame: number) => {
    return `/images_reduce/image_${frame.toString().padStart(4, '0')}.png`
  }

  return (
    <div className="fixed inset-0 w-full h-full -z-10">
      <div className="relative w-full h-full">
        <div className="absolute inset-0 opacity-40">
          <img
            src={getTitleImageUrl(currentFrame)}
            alt=""
            className="w-full h-full object-cover"
            aria-hidden="true"
          />
        </div>
      </div>
    </div>
  )
}

