import { client } from "@/sanity/lib/client"

export const getProductData = async () => {
   const res = await client.fetch(
    `*[_type == "product" ]{
  _id,
  "slug":slug.current,
  description,
  title,
  "image":image.asset._ref,
  price,
  "category":category[]->{name,_id},
  }[]`
    
   )
   return res
}