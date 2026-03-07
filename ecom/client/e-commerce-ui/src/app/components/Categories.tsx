"use client"

import{
    Footprints,
    Glasses,
    Briefcase,
    Shirt,
    ShoppingBasket,
    Hand,
    Venus,
    Search
} from "lucide-react"
import { usePathname, useRouter, useSearchParams } from "next/navigation"

const categories = [
    {
        name: 'All',
        icon: <ShoppingBasket className= "w-4 h-4" />,
        slug : "all"
    },
    {
        name: 'Shoes',
        icon: <Footprints className= "w-4 h-4" />,
        slug : "shoes"
    },
    {
        name: 'Accessories',
        icon: <Glasses className= "w-4 h-4" />,
        slug : "accessories"
    },
    {
        name: 'Bags',
        icon: <Briefcase className= "w-4 h-4" />,
        slug : "bags"
    },
    {
        name: 'T-shirts',
        icon: <Shirt className= "w-4 h-4" />,
        slug : "t-shirts"
    },
    {
        name: 'Dresses',
        icon: <Venus className= "w-4 h-4" />,
        slug : "dresses"
    },
    {
        name: 'Gloves',
        icon: <Hand className= "w-4 h-4" />,
        slug : "gloves"
    },
    {
        name: 'Jackets',
        icon: <Shirt className= "w-4 h-4" />,
        slug : "jackets"
    }
]

const Categories = () => {
    const searchParams = useSearchParams()
    const router = useRouter()
    const pathName = usePathname()
    const selectedCategory = searchParams.get("category")
    const handleChange = (category: string) => {
        const params = new URLSearchParams(searchParams)
        params.set("category", category)
        router.push(`${pathName}?${params.toString()}`, {scroll: false})
    }
  return (
       <div className="grid  grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8  gap-2 bg-gray-100 p-2 rounded-lg mb-4 text-sm">
            {categories.map((category) => (
                <div key={category.slug}
                 className={`flex items-center gap-2 cursor-pointer justify-center rounded-md px-2 py-1 ${selectedCategory?.toLowerCase() === category.slug ? 'bg-white' : 'text-gray-500'}`}
                 onClick={()=> handleChange(category.slug)}>
                    {category.icon}
                    <span>{category.name}</span>
                </div>
            ))}
       </div>
  )
}

export default Categories