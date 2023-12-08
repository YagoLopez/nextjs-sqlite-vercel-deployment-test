import prisma from "../../prisma/db"

export default async function Home() {

  const products = await prisma.product.findMany()
  console.log('products', products)

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <pre>
        {JSON.stringify(products, null, 2)}
      </pre>
    </main>
  )
}
