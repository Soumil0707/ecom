import BannerSlider from "@/components/BannerSlider"
import Categories from "@/components/Categories"
import ProductList from "@/components/ProductList"

const ProductsPage = async ({searchParams}: {searchParams: Promise<{category:string}>}) => {
  const category = (await searchParams).category
  return (
       <div className="">
            <Categories />
            <ProductList category={category} params="products" />
       </div>
  )
}           

export default ProductsPage