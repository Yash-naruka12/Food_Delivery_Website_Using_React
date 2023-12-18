import BlogCard from "./BlogCard"

const data = [
    {
        img:"/assets/post__1.webp",
        title : "Healthy Food Healthy Life",
        date : "Aug 27 2023",
        comment : 8
    },
    {
        img:"/assets/post__2.webp",
        title : "Healthy Food Healthy Life",
        date : "Aug 25 2023",
        comment : 15
    },
    {
        img:"/assets/post__3.webp",
        title : "Healthy Food Healthy Life",
        date : "Aug 30 2023",
        comment : 4
    },
]
const BlogSection = () => {
  return (
    <div className="container pt-16">
      <div className="font-bold text-2xl">Latest News</div>
      <p className="text-gray-500">Present Posts in a Way To Highlight Interesting Moments Of Your Blog.</p>

      <div className="grid sm:grid-cols-3 gap-8 pt-8">
        {data.map(el => <BlogCard key={el.date} img={el.img} date={el.date}  title={el.title} comment={el.comment}/>)}
      </div>
    </div>
  )
}

export default BlogSection
