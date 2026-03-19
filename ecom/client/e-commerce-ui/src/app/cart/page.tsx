// "use client"

// import { CartItemsType } from "../types"

// import { useSearchParams, useRouter } from "next/navigation"

// const steps = [
//     {
//         id: 1,
//         title: "Shopping Cart"
//     },
//     {
//         id: 2,
//         title: "Shipping Details"
//     },
//     {
//         id: 3,
//         title: "Payment"
//     }
// ]

// const cartItems:CartItemsType =[
//     {
//   id: 1,
//   name: "Product 1",
//   shortDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit lorem ipsum dolor sit.",
//   description:
//     "Lorem ipsum dolor sit amet consectetur adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consectetur adipisicing elit lorem ipsum dolor sit.",
//   price: 39.9,
//   sizes: ["s", "m", "l", "xl"],
//   colors: ["gray", "purple", "green"],
//   images: {
//     gray: "/products/1g.png",
//     purple: "/products/1p.png",
//     green: "/products/1gr.png"
//   },
//     quantity: 1,
//     selectedSize: "m",
//     selectedColor: "purple"
// },
// {
//   id: 2,
//   name: "Product 2",
//   shortDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit lorem ipsum dolor sit.",
//   description:
//     "Lorem ipsum dolor sit amet consectetur adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consectetur adipisicing elit lorem ipsum dolor sit.",
//   price: 59.9,
//   sizes: ["s", "m", "l", "xl"],
//   colors: ["gray", "green"],
//   images: {
//     gray: "/products/2g.png",
//     green: "/products/2gr.png"
//   },
//   quantity: 1,
//   selectedSize: "m",
//   selectedColor: "gray"
// },
// {
//   id: 3,
//   name: "Product 3",
//   shortDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit lorem ipsum dolor sit.",
//   description:
//     "Lorem ipsum dolor sit amet consectetur adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consectetur adipisicing elit lorem ipsum dolor sit.",
//   price: 49.9,
//   sizes: ["s", "m", "l", "xl"],
//   colors: ["blue", "black","green"],
//   images: {
//     blue: "/products/3b.png",
//     black: "/products/3bl.png",
//     green: "/products/3gr.png"
//   },
//     quantity: 1,
//     selectedSize: "l",
//     selectedColor: "blue"
// }
// ]

// const CartPage = () => {
//     const searchParams = useSearchParams()
//     const router = useRouter()

//     const activeStep= parseInt(searchParams.get("step") || "1")
//   return (
//        <div className="flex flex-col items-center justify-center mt-12 gap-8">
//         <h1 className="text-2xl font-medium">Your Cart</h1>
//         <div className={`flex flex-col lg:flex-row items-center gap-8 lg:gap-14`}>

//             {steps.map((step) => (
//                 <div key={step.id} className={`flex items-center gap-2 border-b-2 pb-4 
//                 ${step.id === activeStep ? "border-gray-800" : "border-gray-200"}`}>
//                     <div className="w-6 h-6 rounded-full bg-gray-300 flex items-center justify-center text-xs text-white">{step.id}</div>
//                     <p className="text-sm text-gray-500">{step.title}</p>
//                 </div>
//             ))}

//             </div>
//        </div>
//   )
// }

// export default CartPage

// app/cart/page.tsx

import CartClient from "./CartClient";

type CartPageProps = {
  searchParams: { step?: string };
};

export default function CartPage({ searchParams }: CartPageProps) {
  const activeStep = parseInt(searchParams.step || "1");

  return <CartClient activeStep={activeStep} />;
}