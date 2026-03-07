import BannerSlider from '@/components/BannerSlider'
import ProductList from './components/ProductList'

const Homepage = () => {
  return (
    <div className=''>
      <div className='mt-4 mb-12'> 
        <BannerSlider />
      </div>
      <ProductList />
    </div>
  )
}

export default Homepage