import BannerSlider from '@/components/BannerSlider'
import ProductList from './components/ProductList'
import { Suspense } from "react";
const Homepage = () => {
  return (
    <div className=''>
      <div className='mt-4 mb-12'> 
        <BannerSlider />
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <ProductList />
      </Suspense>
    </div>
  )
}

export default Homepage