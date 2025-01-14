import { getProductData } from "@/lib/getProductData";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import { JSX } from "react";

interface Product {
  _id: string;
  slug: string; // `slug.current` maps to a string
  description: string;
  title: string;
  image: string; // `image.asset._ref` is a string reference
  price: number;
  category: {
    map(arg0: (category: { name: string; _id: string }) => JSX.Element): import("react").ReactNode | Iterable<import("react").ReactNode>;
    name: string;
    _id: string;
  }; // Array of categories
}

export default async function Home() {
  
  const data:Product[] = await getProductData()
  console.log(data)
  return (
    <div>
      <div className="grid grid-cols-4  gap-x-5 justify-center items-center">
      {data.map((product) => {
        return(
          <div key={(product._id)} className="w-[250px]  h-fit shadow-lg border-2  bg-slate-50 rounded-lg flex flex-col gap-y-2 py-4 px-5">
            <div className="flex items-center w-full justify-center">
              <Image
              src={urlFor(product.image).url()}
              alt={product.title}
              width={200}
              height={200}
              className="max-w-[200px] max-h-[200px] object-cover rounded-lg "
              />
            </div>
            <h1 className="font-extrabold text-xl line-clamp-1 text-slate-700 tracking-wide">{product.title}</h1>
            <p className="text-slate-400 text-pretty line-clamp-2 font-semibold text-sm tracking-wide leading-snug">{product.description}</p>
            <div >
            <h4 className="font-bold text-lg underline underline-offset-3">Categories</h4>
              {product.category.map((category) =>{
                return (
                    <ul key={category._id} className="list-disc list-inside text-slate-600 text-sm font-semibold tracking-wide">
                      <li>{category.name}</li>
                    </ul>
                )
              })}
            </div>
            <button className=" text-white bg-blue-500 py-3 rounded-lg font-bold">Add to Cart</button>

          </div>
        )
      })}
    </div>
    </div>
  );
}
