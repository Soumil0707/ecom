import ProductInteraction from "@/components/ProductInteraction";
import { ProductTypes } from "@/types";
import Image from "next/image";
import { describe } from "zod/v4/core";

const product: ProductTypes = {
  id: 8,
  name: "Product 8",
  shortDescription:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit lorem ipsum dolor sit.",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consectetur adipisicing elit lorem ipsum dolor sit.",
  price: 48.9,
  sizes: ["s", "m", "l", "xl"],
  colors: ["blue", "green"],
  images: {
    blue: "/products/8b.png",
    green: "/products/8gr.png",
  },
};

export const generateMetadata = async ({params} : {params:{id:String}})=>{
        // TODO:"get the products from db"
        // temp
        return {
            title:product.name,
            describe: product.description
        }
}

const ProductPage = async ({
  params,
  searchParams,
}: {
  params: { id: string };
  searchParams: { color?: string; size?: string };
}) => {
  const { size, color } = await searchParams;

  const selectedSize = size || product.sizes[0];
  const selectedColor = color || product.colors[0];

  return (
    <div className="flex flex-col lg:flex-row md:gap-12 mt-12">
      <div className="w-full lg:w-5/12 relative aspect-[2/3]">
        <Image
          src={product.images[selectedColor as keyof typeof product.images]}
          alt={product.name}
          fill
          className="object-contain rounded-md"
        />
      </div>
      <div className="w-full lg:w-7/12 flex flex-col gap-4">
        <h1 className="text-2xl font-medium">{product.name}</h1>
        <p className="text-gray-500">{product.description}</p>
        <h2 className="text-2xl font-semibold">${product.price.toFixed(2)}</h2>
        <ProductInteraction product={product} selectedSize = {selectedSize} selectedColor = {selectedColor}/>
        <div className="flex items-center gap-2">
            <Image src="/klarna.png" alt="klarna" width={50} height = {25} className="rounded-md"/>
            <Image src="/cards.png" alt="card" width={50} height = {25} className="rounded-md"/>
            <Image src="/stripe.png" alt="stripe" width={50} height = {25} className="rounded-md"/>
        </div>
        <p className="text-gray-500 text-xs">
            By clicking Pay Now, you agree to our{" "}
            <span className="underline hover:text-black">Terms & Conditions</span>
            {" "}and <span className="underline hover:text-black">Privacy Policies</span>. 
            You authorize us to charge your selected payment method for the total amount shown. All sales are subject to our return and{" "}
            <span className="underline hover:text-black">Refund Policies</span>
        </p>
      </div>
    </div>
  );
};

export default ProductPage;