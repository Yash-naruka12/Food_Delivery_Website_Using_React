import {BsArrowRight} from "react-icons/bs";

function Hero() {
  return (
    <div className="container pt-8">
      <div className="grid xl:grid-cols-3 xl:grid-rows-2 gap-8">
        <div className="relative xl:col-span-2 xl:row-start-1 xl:row-end-[-1]">
            <img src="/assets/hero__1.webp" alt="hero_image" className="w-full h-full object-cover rounded-lg" />
            <div className="absolute max-w-[470px] sm-ml-16 ml-8 top-[50%] -translate-y-[50%] sm:space-y-4">
                <p className="text-2xl hidden sm:block">100% Original Dry Fruits</p>
                <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold">Dried Fruits Best Quality</h2>
                <p className="text-gray-500 text-xl pt-4 sm:pt-8"> Starting At</p>
                <div className="font-bold  text-red-600 pb-4 text-2xl sm:text-2xl sm:pb-8">Rs500</div>
                <div className="bg-accentDark hover:bg-accent text-white rounded-full w-fit items-center gap-4 px-4 py-2 text-[14px] sm:px-6 sm:py-3 cursor-pointer flex font-medium">Shop Now <BsArrowRight/>
                </div>
            </div>
        </div>
      <div className="relative">
        <img src="/assets/hero__2.webp" alt="hero_image" className="w-full h-full object-cover rounded-lg" />
        <div className="absolute max-w-[470px] sm:sm-16 ml-8 top-[50%] -translate-y-[50%] sm:space-y-2">
            <h2 className="text-2xl sm:text-3xl font-bold">Best Yummy Pizza</h2>
            <p className="text-gray-500 text-xl pt-2 sm:pt-8"> Starting At</p>
            <div className="font-bold text-red-600 text-xl sm:text-3xl pb-2">
                Rs199
            </div>
            <div className="bg-accentDark hover:bg-accent text-white rounded-full w-fit items-center gap-4 px-4 py-2 text-[14px] sm:px-6 sm:py-3 cursor-pointer flex font-medium">Shop Now <BsArrowRight/></div>
        </div>
      </div>
      <div className="relative">
        <img src="/assets/hero__3.webp" alt="hero_image" className="w-full h-full object-cover rounded-lg" />
        <div className="absolute max-w-[470px] sm:sm-16 ml-8 top-[50%] -translate-y-[50%] sm:space-y-2">
            <h2 className="text-2xl sm:text-3xl font-bold">Best Yummy Chips</h2>
            <p className="text-gray-500 text-xl pt-4 sm:pt-8"> Starting At</p>
            <div className="font-bold text-red-600 text-xl sm:text-3xl pb-2">
                Rs99
            </div>
            <div className="bg-accentDark hover:bg-accent text-white rounded-full w-fit items-center gap-4 px-4 py-2 text-[14px] sm:px-6 sm:py-3 cursor-pointer flex font-medium">Shop Now <BsArrowRight/></div>
        </div>
      </div>
      </div>

    </div>
  )
}

export default Hero
