"use client"
import { ShoppingCart } from "lucide-react"
import Link from "next/link"
import { useCallback } from "react"
import { useStore } from "zustand"
import useCartStore from "../../stores/cartStore"

const ShoppingCartIcon = () => {
  const {cart} = useCartStore()
  return (
       <div className="relative">
        <Link href="/cart">
          <ShoppingCart className="w-4 h-4 text-gray-600"/>
          <span className="absolute -top-3 -right-3 bg-amber-400 text-white rounded-full w-4 h-4 flex items-center justify-center">{cart.length}</span>
        </Link>
       </div>
  )
}

export default ShoppingCartIcon