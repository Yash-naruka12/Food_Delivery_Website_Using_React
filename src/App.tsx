import Navbar from "./components/Navbar"
import Hero from "./components/Hero.tsx"
import Category from "./components/Category.tsx"
import FeatureSectionFruits from "./components/FeatureSectionFruits.tsx"
import FeatureSectionBreakFast from "./components/FeatureSectionBreakFast.tsx"
import BannerSection from "./components/BannerSection.tsx"
import BlogSection from "./components/BlogSection.tsx"

const App = () => {
  return (
    <>
      <main>
        <Navbar/>
        <Hero/>
        <Category/>
        <FeatureSectionFruits/>
        <FeatureSectionBreakFast/>
        <BannerSection/>
        <BlogSection/>
      </main>
    </>
  )
}

export default App
