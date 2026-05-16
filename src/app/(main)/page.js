async function getCatgories() {
  const res = await fetch("https://openapi.programming-hero.com/api/news/categories");
  const info = await res.json();
  const data = info.data.news_category;
  return data;
}

export default async function Home() {
  const categories = await getCatgories();

  return (
    <div className="w-full max-w-285 mx-auto grid grid-cols-4 gap-6 mt-19">
      <div>
        <h2 className="text-xl font-semibold text-[#403F3F] mb-5">All Caterogy</h2>
        <ul className="text-xl font-medium text-[#9F9F9F] ">
          {
            categories.map(category => {
              return <li key={category.category_id} className="pl-12 mb-7.5">{category.category_name}</li>
            })
          }
        </ul>
      </div>
      <div className="border col-span-2">
        <h2 className="text-xl font-semibold text-[#403F3F] mb-5">Dragon News Home</h2>
      </div>
      <div className="border">
        <h2 className="text-xl font-semibold text-[#403F3F] mb-5">Login With</h2>
      </div>
    </div>
  );
}
