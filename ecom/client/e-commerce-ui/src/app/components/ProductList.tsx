import { ProductsType } from "@/types"
import Categories from "./Categories";
import ProductCard from "./ProductCard";

const products: ProductsType = [
{
  id: 1,
  name: "Product 1",
  shortDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit lorem ipsum dolor sit.",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consectetur adipisicing elit lorem ipsum dolor sit.",
  price: 39.9,
  sizes: ["s", "m", "l", "xl"],
  colors: ["gray", "purple", "red"],
  images: {
    gray: "/products/1g.png",
    purple: "/products/1p.png",
    red: "/products/1r.png"
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
  colors: ["gray", "red"],
  images: {
    gray: "/products/2g.png",
    red: "/products/2r.png"
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
  colors: ["blue", "red"],
  images: {
    blue: "/products/3b.png",
    red: "/products/3r.png"
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
  colors: ["red", "white"],
  images: {
    red: "/products/4r.png",
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
  colors: ["blue", "orange"],
  images: {
    blue: "/products/5b.png",
    orange: "/products/5o.png"
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
  colors: ["gray", "purple"],
  images: {
    gray: "/products/7g.png",
    purple: "/products/7p.png"
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
  colors: ["gray", "purple"],
  images: {
    gray: "/products/8g.png",
    purple: "/products/8p.png"
  }
}
];


const ProductList = () => {
  return (
       <div className="w-full">
            <Categories />
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-12">
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
       </div>
  )
}

export default ProductList
