import BannerSlider from "@/components/BannerSlider"
import ProductList from "./components/ProductList"
import Categories from "./components/Categories"
import { Suspense } from "react"

const Homepage = () => {
  return (
    <div>
      <div className="mt-4 mb-12">
        <BannerSlider />
      </div>

      <Suspense fallback={<div>Loading categories...</div>}>
        <Categories />
      </Suspense>

      <ProductList />
    </div>
  )
}

export default Homepage