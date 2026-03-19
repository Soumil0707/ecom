"use client";

import { useRouter } from "next/navigation";

type CartClientProps = {
  activeStep: number;
};

const steps = [
  { id: 1, title: "Shopping Cart" },
  { id: 2, title: "Shipping Details" },
  { id: 3, title: "Payment" }
];

export default function CartClient({ activeStep }: CartClientProps) {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center mt-12 gap-8">
      <h1 className="text-2xl font-medium">Your Cart</h1>

      <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-14">
        {steps.map((step) => (
          <div
            key={step.id}
            className={`flex items-center gap-2 border-b-2 pb-4 
            ${step.id === activeStep ? "border-gray-800" : "border-gray-200"}`}
          >
            <div className="w-6 h-6 rounded-full bg-gray-300 flex items-center justify-center text-xs text-white">
              {step.id}
            </div>
            <p className="text-sm text-gray-500">{step.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}