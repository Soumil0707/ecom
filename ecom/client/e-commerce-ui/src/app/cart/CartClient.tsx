"use client";

import PaymentForm from "@/components/PaymentForm";
import ShippingForm from "@/components/ShippingForm";
import { CartItemsType, ShippingFormInputs } from "@/types";
import { ArrowRight, Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import Image from "next/image";
import useCartStore from "../../stores/cartStore";



const steps = [
  { id: 1, title: "Shopping Cart" },
  { id: 2, title: "Shipping Details" },
  { id: 3, title: "Payment" }
];
// const cartItems: CartItemsType = [
//   {
//     id: 1,
//     name: "Product 1",
//     shortDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit lorem ipsum dolor sit.",
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consectetur adipisicing elit lorem ipsum dolor sit.",
//     price: 39.9,
//     sizes: ["s", "m", "l", "xl"],
//     colors: ["gray", "purple", "green"],
//     images: {
//       gray: "/products/1g.png",
//       purple: "/products/1p.png",
//       green: "/products/1gr.png"
//     },
//     quantity: 1,
//     selectedSize: "m",
//     selectedColor: "purple"
//   },
//   {
//     id: 2,
//     name: "Product 2",
//     shortDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit lorem ipsum dolor sit.",
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consectetur adipisicing elit lorem ipsum dolor sit.",
//     price: 59.9,
//     sizes: ["s", "m", "l", "xl"],
//     colors: ["gray", "green"],
//     images: {
//       gray: "/products/2g.png",
//       green: "/products/2gr.png"
//     },
//     quantity: 1,
//     selectedSize: "m",
//     selectedColor: "gray"
//   },
//   {
//     id: 3,
//     name: "Product 3",
//     shortDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit lorem ipsum dolor sit.",
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consectetur adipisicing elit lorem ipsum dolor sit.",
//     price: 49.9,
//     sizes: ["s", "m", "l", "xl"],
//     colors: ["blue", "black", "green"],
//     images: {
//       blue: "/products/3b.png",
//       black: "/products/3bl.png",
//       green: "/products/3gr.png"
//     },
//     quantity: 1,
//     selectedSize: "l",
//     selectedColor: "blue"
//   }
// ]


export default function CartClient() {
  const searchParams = useSearchParams();
  const activeStep = parseInt(searchParams.get("step") || "1");
  const router = useRouter();
  const [shippingForm, setShippingForm] = useState<ShippingFormInputs | null>(null);
  const {cart , removeFromCart} = useCartStore()
  return (
    <div className="flex flex-col items-center justify-center mt-12 gap-8">
      <h1 className="text-2xl font-medium">Your Cart</h1>

      <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-14">
        {steps.map((step) => (
          <div
            key={step.id}
            className={`flex items-center gap-2 border-b-2 pb-4 
            ${step.id === activeStep ? "border-gray-800" : "border-gray-400"}`}
          >
            <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs text-white ${step.id === activeStep ? "bg-gray-800" : "bg-gray-400"}`}>
              {step.id}
            </div>
            <p className={`text-sm text-gray-500 ${step.id === activeStep ? "text-gray-800" : "text-gray-400"}`}>{step.title}</p>
          </div>
        ))}
      </div>
      <div className="w-full flex flex-col lg:flex-row gap-16">
        <div className="w-full lg:w-7/12 max-h-125 overflow-y-auto shadow-lg border-1 border-gray-100 p-8 rounded-lg flex flex-col gap-8">
          {activeStep === 1 ? (
            cart.map(item=>(
              <div className="flex items-center justify-between" key={item.id + item.selectedSize + item.selectedColor}>
                {/* image */}
                <div className="flex gap-8">
                 
                  <div className="relative w-32 h-32 bg-gray-100 rounded-lg overflow-hidden">
                    <Image className="object-contain" src={item.images[item.selectedColor]} alt={item.name} fill />
                  </div>
                   <div className="flex flex-col justify-between">
                        <div className="flex flex-col gap-1">
                          <p className="text-sm font-medium">{item.name}</p>
                          <p className="text-xs text-gray-500">Quantity: {item.quantity}</p>
                          <p className="text-sm text-gray-500">Size: {item.selectedSize.toUpperCase()}</p>
                          <p className="text-sm text-gray-500">Color: {item.selectedColor.charAt(0).toUpperCase() + item.selectedColor.slice(1)}</p>
                        </div>
                        <div className="font-medium">${item.price.toFixed(2)}</div>
                  </div>
                </div>
                {/* delete button */}
                <button onClick = {()=> {removeFromCart(item)}} className="w-8 h-8 rounded-full bg-red-100 text-red-500 flex items-center justify-center hover:bg-red-200 transition-all duration-300">
                  <Trash2 className="w-4 h-4"/>
                </button>
              </div>
            ))
          ) : activeStep === 2 ? (<ShippingForm setShippingForm = {setShippingForm} />) : ( activeStep === 3 && shippingForm ? <PaymentForm /> : <p>Please fill out the shipping form first.</p>)}
        </div>
        <div className="w-full h-max lg:w-5/12 shadow-lg border-1 border-gray-100 p-8 rounded-lg flex flex-col gap-8">
          <h2 className="font-semibold">
            Cart Details
          </h2>
          <div className=" flex flex-col gap-4">
            <div className=" flex justify-between text-sm">
              <p className=" text-gray-500">Subtotal</p>
              <p className="font-medium text-gray-800">${cart.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2)}</p>
            </div>
            <div className=" flex justify-between text-sm">
              <p className=" text-gray-500">Discount(10%)</p>
              <p className="font-medium text-gray-800">${(cart.reduce((total, item) => total + (item.price * item.quantity), 0) * 0.1).toFixed(2)}</p>
            </div>
            <div className=" flex justify-between text-sm">
              <p className=" text-gray-500">Shipping Fees</p>
              <p className="font-medium text-gray-800">$10.00</p>
            </div>
            <div className=" flex justify-between text-lg font-bold border-t-2 pt-4 border-gray-300">
              <p className="  text-gray-800">Total</p>
              <p className=" text-gray-800">${(cart.reduce((total, item) => total + (item.price * item.quantity), 0) - (cart.reduce((total, item) => total + (item.price * item.quantity), 0) * 0.1) + 10.00).toFixed(2)}</p>
            </div>

          </div>
          {activeStep === 1 &&
            <button className=" w-full bg-gray-800 text-white py-2 px-4 rounded-lg hover:bg-gray-900 cursor-pointer transition-all duration-300" onClick={() => router.push("/cart?step=2", { scroll: false })}>
              <p className="flex items-center justify-center gap-2"><span>Continue</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </p>
            </button>}
        </div>
      </div>
    </div>
  );
}