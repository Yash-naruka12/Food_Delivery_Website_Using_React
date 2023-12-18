
const BannerSection = () => {
  return (
    <div className="container pt-16">
      <div className="grid sm:grid-cols-2 gap-4 sm:gap-8">
        <div className="overflow-hidden rounded-lg">
            <img src="/assets/banner__1.webp" alt="banner" className="hover:scale-105 transition-transform" />
        </div>
        <div className="overflow-hidden rounded-lg">
            <img src="/assets/banner__2.webp" alt="banner" className="hover:scale-105 transition-transform" />
        </div>
      </div>
    </div>
  )
}

export default BannerSection
