'use client'

import YouTube from 'react-youtube'
import CreatorInfo from './CreatorInfo'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

interface MainContentProps {
  title: string
  videoId: string
  concept: string
  subtitle: string
}

export default function MainContent({ title, videoId, concept, subtitle }: MainContentProps) {
  const [randomizedCreators, setRandomizedCreators] = useState([
    { name: '岡空来', role: 'パシャパシャ', website: 'https://example.com/oka' },
    { name: '金澤政宜', role: 'プカプカ', website: 'https://kanassi.info/' },
    { name: '中田裕紀', role: 'グワグワ', website: 'https://yuki-nakata.org/' },
    { name: '南田桂吾', role: 'カタカタ', website: 'https://keigominamida.com/' },
  ])

  useEffect(() => {
    const shuffledCreators = [...randomizedCreators].sort(() => Math.random() - 0.5)
    setRandomizedCreators(shuffledCreators)
  }, [])

  const opts = {
    height: '390',
    width: '640',
    playerVars: {
      autoplay: 0,
    },
  }

  return (
    <div className="flex flex-col items-center text-black">
      {/* ヒーローセクション */}
      <section className="min-h-screen w-full flex flex-col items-center justify-center p-8">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">{title}</h1>
        <p className="text-xl md:text-2xl mb-16 flex flex-wrap justify-center gap-x-2">
          <motion.span
            initial={{ y: 0, opacity: 0 }}
            animate={{
              y: [0, 40, 0],
              scale: [1, 0.8, 1],
              opacity: 1,
            }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
          >
            ドスン，
          </motion.span>
          <motion.span
            initial={{ y: 50, opacity: 0, scale: 0.8 }}
            animate={{
              y: 0,
              scale: 1,
              opacity: 1,
            }}
            transition={{
              duration: 0.6,
              ease: "easeOut",
              delay: 0.3,
            }}
          >
            ビュン，
          </motion.span>
          <motion.span
            initial={{ y: -50, opacity: 0 }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            transition={{
              duration: 0.7,
              ease: "easeIn",
              delay: 0.6,
            }}
          >
            ストン，
          </motion.span>
          <motion.span
            initial={{ y: 0, opacity: 0, scale: 0.8 }}
            animate={{
              y: [0, -15, 0],
              x: [-10, 10, -5, 5, 0],
              scale: [0.8, 1.2, 1],
              opacity: 1,
              rotate: [-2, 2, -1, 1, 0],
            }}
            transition={{
              duration: 1.2,
              ease: "easeInOut",
              delay: 0.9,
            }}
          >
            プカプカ．
          </motion.span>
        </p>
      </section>

      {/* 動画セクション */}
      <section className="min-h-screen w-full flex flex-col items-center justify-center p-8">
        <div className="w-full max-w-3xl mx-auto aspect-video">
          <div className="relative h-0 pb-[56.25%]">
            <YouTube
              videoId={videoId}
              opts={{
                ...opts,
                width: '100%',
                height: '100%',
              }}
              className="absolute top-0 left-0 w-full h-full"
            />
          </div>
        </div>
      </section>

      {/* コンセプトセクション */}
      <section className="min-h-screen w-full flex flex-col items-center justify-center p-8">
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">コンセプト</h2>
          <p className="text-lg md:text-xl leading-relaxed text-center whitespace-pre-wrap">
            {concept}
          </p>
        </div>
      </section>

      {/* 制作者セクション */}
      <section className="min-h-screen w-full flex flex-col items-center justify-center p-8">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <h2 className="text-3xl md:text-5xl font-bold">制作者</h2>
          <div className="flex flex-col space-y-24">
            {randomizedCreators.map((creator) => (
              <div key={creator.name} className="w-full">
                <CreatorInfo creators={[creator]} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* スペーサーセクション */}
      <section className="min-h-screen w-full flex flex-col items-center justify-center p-8">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl md:text-5xl font-bold">Puflica</h2>
          <p className="text-lg md:text-xl">4ZIGEN</p>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-md md:text-lg mb-2">本作品は東京大学大学院学際情報学府先端表現情報学コースの入試説明会（2026年度4月入学、夏季入試）のティザー画像として使用されました。</p>
            <a
              href="https://www.iii.u-tokyo.ac.jp/event/20250418event2"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block relative group"
            >
              <span className="text-md md:text-lg font-medium transition-colors duration-300 group-hover:text-gray-600">
                詳細はこちら
              </span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

