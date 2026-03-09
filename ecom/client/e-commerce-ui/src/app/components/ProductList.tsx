import { ProductsType } from "@/types"
import ProductCard from "./ProductCard"
import Link from "next/dist/client/link";
import Categories from "./Categories";

const products: ProductsType = [
{
  id: 1,
  name: "Product 1",
  shortDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit lorem ipsum dolor sit.",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consectetur adipisicing elit lorem ipsum dolor sit.",
  price: 39.9,
  sizes: ["s", "m", "l", "xl"],
  colors: ["gray", "purple", "green"],
  images: {
    gray: "/products/1g.png",
    purple: "/products/1p.png",
    green: "/products/1gr.png"
  }
},
{
  id: 2,
  name: "Product 2",
  shortDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit lorem ipsum dolor sit.",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consectetur adipisicing elit lorem ipsum dolor sit.",
  price: 59.9,
  sizes: ["s", "m", "l", "xl"],
  colors: ["gray", "green"],
  images: {
    gray: "/products/2g.png",
    green: "/products/2gr.png"
  }
},
{
  id: 3,
  name: "Product 3",
  shortDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit lorem ipsum dolor sit.",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consectetur adipisicing elit lorem ipsum dolor sit.",
  price: 49.9,
  sizes: ["s", "m", "l", "xl"],
  colors: ["blue", "black","green"],
  images: {
    blue: "/products/3b.png",
    black: "/products/3bl.png",
    green: "/products/3gr.png"
  }
},
{
  id: 4,
  name: "Product 4",
  shortDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit lorem ipsum dolor sit.",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consectetur adipisicing elit lorem ipsum dolor sit.",
  price: 44.9,
  sizes: ["s", "m", "l", "xl"],
  colors: ["pink", "white"],
  images: {
    pink: "/products/4p.png",
    white: "/products/4w.png"
  }
},
{
  id: 5,
  name: "Product 5",
  shortDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit lorem ipsum dolor sit.",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consectetur adipisicing elit lorem ipsum dolor sit.",
  price: 39.9,
  sizes: ["s", "m", "l", "xl"],
  colors: ["blue", "orange", "red"],
  images: {
    blue: "/products/5bl.png",
    orange: "/products/5o.png",
    red: "/products/5r.png"
  }
},
{
  id: 6,
  name: "Product 6",
  shortDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit lorem ipsum dolor sit.",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consectetur adipisicing elit lorem ipsum dolor sit.",
  price: 42.9,
  sizes: ["s", "m", "l", "xl"],
  colors: ["gray", "white"],
  images: {
    gray: "/products/6g.png",
    white: "/products/6w.png"
  }
},
{
  id: 7,
  name: "Product 7",
  shortDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit lorem ipsum dolor sit.",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consectetur adipisicing elit lorem ipsum dolor sit.",
  price: 54.9,
  sizes: ["s", "m", "l", "xl"],
  colors: ["gray", "pink"],
  images: {
    gray: "/products/7g.png",
    pink: "/products/7p.png"
  }
},
{
  id: 8,
  name: "Product 8",
  shortDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit lorem ipsum dolor sit.",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consectetur adipisicing elit lorem ipsum dolor sit.",
  price: 48.9,
  sizes: ["s", "m", "l", "xl"],
  colors: ["blue", "green"],
  images: {
    blue: "/products/8b.png",
    green: "/products/8gr.png"
  }
}
];


const ProductList = ({category}:{ category: string }) => {
  return (
    <div className="w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-12">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <Link href={`${category ? `/products?category=${category}` : "/products"}`} className="mt-12 flex item-center justify-center text-sm font-medium text-gray-500 hover:text-gray-900 transition-all duration-300">
        View All Products
      </Link>
    </div>
  )
}

export default ProductList
