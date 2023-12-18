import ProductCard from "./ProductCard"

const data = [
{ id:0,img:"/assets/product__5.webp",name:"Fresh Tomato",price :"Rs400" },
{ id:1,img:"/assets/product__2.webp",name:"Crunchy Crips",price :"Rs300" },
{ id:2,img:"/assets/product__3.webp",name:"Jewel Cranberries",price :"Rs200" },
{ id:3,img:"/assets/product__4.webp",name:"Almond Organic",price :"Rs100" },
]

const FeatureSectionBreakFast = () => {
  return (
    <div className="container pt-16">
      <div className="lg:flex justify-between items-center">
        <div>
          <h3 className="font-medium text-2xl">BreakFast & Dairy</h3>
          <p className="text-gray-600 mt-2">Buy Best Quality  Breakfast Online From Big-Basket Shop Near You.</p>
        </div>
        <div className="space-x-4 lg:mt-0">
          <button className="feature_btn">Eggs & Dairy</button>
          <button className="text-gray-600 hover:text-accent">Pizza</button>
          <button className="text-gray-600 hover:text-accent">Snacks</button>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 pt-8 gap-2">
        <div>
          <img src="/assets/feature__2.webp" alt="banner" className="w-full h-full object-cover" />
        </div> 

        {data.map(el => <ProductCard key={el.id} img={el.img} name={el.name} price={el.price}/>)}
      </div>
    </div>
  )
}

export default FeatureSectionBreakFast
