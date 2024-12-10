import AnimatedBackground from '../components/AnimatedBackground'
import MainContent from '../components/MainContent'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <main>
      <AnimatedBackground />
      <MainContent
        title="Puflica"
        subtitle="ドスン，ビュン，ストン，プカプカ．"
        videoId="https://www.youtube.com/embed/RtaOnVdCqcU?si=hUaegbv18TR0Y0t7"
        concept={`膜によって実体を持った空気が様々な重力感をもって上下に揺れ動き，\n\n独立した振る舞いはあるとき突然揃いはじめる．\n\nそんな付いて離れていく不思議な様子を体感してほしい．`}
      />
      <Footer />
    </main>
  )
}