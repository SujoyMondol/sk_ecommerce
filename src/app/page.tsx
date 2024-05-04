import ProductCard from '@/components/ProductCard';
import { prisma } from '@/lib/db/prisma'
import Image from "next/image";


export default async function Home() {
  
  const prdoducts = await prisma.product.findMany({
    orderBy: {id: "desc"}
  })
  return(
    <div>
      <div className='hero rounded-xl'>

      </div>
    </div>
  )
}