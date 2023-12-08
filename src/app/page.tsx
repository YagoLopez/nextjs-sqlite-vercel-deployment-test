import prisma from "../../prisma/db"

export default async function Home() {

  const products = await prisma.product.findMany()
  console.log('products', products)
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

  // const onCreateProduct = async ()=>{
  //   "use server"
  //   const res = await prisma.product.create({data: {
  //     "name": "Product2",
  //     "description": "Description product 2",
  //     "price": "200",
  //     "created_at": "2023-12-07T18:40:57.233Z",
  //     "updated_at": "1970-01-01T00:00:00.001Z",
  //     "created_by_id": 1,
  //     "updated_by_id": 1
  //   }})
  //   console.log('res', res)
  // }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <pre>
        {JSON.stringify(products, null, 2)}
      </pre>
{/*
      <button onClick={onCreateProduct}>
        Create product
      </button>
*/}
    </main>
  )
}
