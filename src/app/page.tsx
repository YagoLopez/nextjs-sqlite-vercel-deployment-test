import prisma from "../../prisma/db"
import { unstable_noStore as noStore } from 'next/cache';

export default async function Home() {
  noStore()

  const products = await prisma.product.findMany()
  console.log('products', products)

  const onCreateProduct = async ()=>{
    "use server"
    const productId = Date.now()
    const res = await prisma.product.create({data: {
        "name": "Product" + productId ,
        "description": "Description product " + productId,
        "price": "200",
        "created_at": "2023-12-07T18:40:57.233Z",
        "updated_at": "1970-01-01T00:00:00.001Z",
        "created_by_id": 1,
        "updated_by_id": 1
      }})
    console.log('res', res)
  }

  onCreateProduct()

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-12">
      <form action={onCreateProduct}>
        <button type="submit" className="bg-blue-400 hover:bg-blue-500 p-3 rounded">
          Create product
        </button>
      </form>
      <pre>
        {JSON.stringify(products, null, 2)}
      </pre>
    </main>
  )
}
