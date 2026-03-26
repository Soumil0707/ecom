"use client"

import { ProductTypes } from "@/types"
import Link from "next/link"
import Image from "next/image"
import { ShoppingCart } from "lucide-react"
import { useState } from "react"
import useCartStore from "../../stores/cartStore"
import { ToastContainer, toast } from "react-toastify"

const ProductCard = ({ product }: { product: ProductTypes }) => {
  const [productTypes, setProductsType] = useState({
    size: product.sizes[0],
    color: product.colors[0]
  })
  const handleProductType = ({ type, value }: { type: "size" | "color", value: string }) => {
    setProductsType(prev => ({ ...prev, [type]: value }))
  }

  const {addToCart} = useCartStore()

  const handleAddToCart = ()=>{
    addToCart({
      ...product,
      quantity : 1,
      selectedSize : productTypes.size,
      selectedColor : productTypes.color
    });
    toast.success(`${product.name} added to cart`)

  }

    
  return (
    <div className="shadow-lg rounded-lg overflow-hidden">
      <Link className="" href={`/products/${product.id}`}>
        <div className="relative aspect-[2/3]">
          <Image src={product.images[`${productTypes.color}`]} alt={product.name} fill className="object-cover hover:scale-105 transition-all duration-300" />
        </div>
        <div className="flex flex-col gap-4 p-4">
          <h3 className="font-medium">{product.name}</h3>
          <p className="text-sm text-gray-500">{product.shortDescription}</p>
        </div>
      </Link>
      <div className="flex flex-col gap-4 p-4">

        <div className="flex item-center justify-between text-xs">
          <div className="flex flex-col gap-1">
            <span className="text-gray-500">Size</span>
            <select name="size" id="size" className=" ring ring-gray-300 rounded-md px-2 py-1"
              onChange={e => handleProductType({ type: "size", value: e.target.value })}>
              {product.sizes.map((size) => (
                <option key={size} value={size}>{size.toUpperCase()}</option>
              ))}
            </select>
          </div>
          <div className="flex  flex-col gap-1">
            <span className="text-gray-500">Colour</span>
            <div className="flex item-center gap-2">
              {product.colors.map((color) => (
                <div className={`cursor-pointer border-2 rounded-full p-[1px] ${
  productTypes.color === color ? "border-gray-900" : "border-gray-200"
}`}
                onClick={() => 
                  handleProductType({ type: "color", value: color })
                }
                key={color}>
                  <div className={`w-[14px] h-[14px] rounded-full ring ring-gray-300`} style={{ backgroundColor: color }}/>
                 
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <p className="font-medium text-[1.15rem]">${product.price.toFixed(2)}</p>
          <button onClick = {handleAddToCart} className=" flex item-center gap-2 ring-1 ring-gray-200 shadow-lg rounded-md px-3 py-2 text-sm font-medium cursor-pointer hover:text-white hover:bg-black transition-all duration-300">
            <ShoppingCart className="w-4 h-4" />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard