import BannerSlider from "@/components/BannerSlider";
import ProductList from "./components/ProductList";
import { Suspense } from "react";

export const dynamic = "force-dynamic";

const Homepage = () => {
  return (
    <div>
      <div className="mt-4 mb-12">
        <BannerSlider />
      </div>

      <Suspense fallback={<div>Loading...</div>}>
        <ProductList />
      </Suspense>
    </div>
  );
};

export default Homepage;