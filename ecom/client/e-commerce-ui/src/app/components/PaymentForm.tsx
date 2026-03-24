import { paymentFormSChema, PaymentFormInputs } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight, ShoppingCart } from "lucide-react";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import  Image  from "next/image"

const PaymentForm = () => {

const { register, handleSubmit, formState:{
  errors
}} = useForm<PaymentFormInputs>({
  resolver: zodResolver(paymentFormSChema)
})

const router = useRouter();

const handlePaymentForm:SubmitHandler<PaymentFormInputs> = (data: PaymentFormInputs) => {
  
}
  return (
       <form className="flex flex-col gap-4" onSubmit = {handleSubmit(handlePaymentForm)} >
            <div className="flex flex-col gap-1">
                <label htmlFor="cardHolder" className="text-sm text-gray-500 font-medium">Card Holder's Name</label>
                <input type="text" id="cardHolder" placeholder = "John Doe" {...register("cardHolder")} className="border border-gray-300 text-sm outline-none rounded-md p-2" />
                {errors.cardHolder && <p className="text-red-500 text-sm">{errors.cardHolder.message}</p>}
            </div>
            <div className="flex flex-col gap-1">
                <label htmlFor="cardNumber" className="text-sm text-gray-500 font-medium">Card Number</label>
                <input type="cardNumber" id="cardNumber" placeholder = "4444 4444 4444 4444" {...register("cardNumber")} className="border border-gray-300 text-sm outline-none rounded-md p-2" />
                {errors.cardNumber && <p className="text-red-500 text-sm">{errors.cardNumber.message}</p>}
            </div>
            <div className="flex flex-col gap-1">
                <label htmlFor="expirationDate" className="text-sm text-gray-500 font-medium">Expiry</label>
                <input type="text" id="expirationDate" placeholder = "MM/YY" {...register("expirationDate")} className="border border-gray-300 text-sm outline-none rounded-md p-2" />
                {errors.expirationDate && <p className="text-red-500 text-sm">{errors.expirationDate.message}</p>}
            </div>
            <div className="flex flex-col gap-1">
                <label htmlFor="cvv" className="text-sm text-gray-500 font-medium">CVV</label>
                <input type="text" id="cvv" placeholder = "111" {...register("cvv")} className="border border-gray-300 text-sm outline-none rounded-md p-2" />
                {errors.cvv && <p className="text-red-500 text-sm">{errors.cvv.message}</p>}
            </div>
            <div className="flex items-center gap-2 mt-4">
              <Image src="/klarna.png" alt="klarna" width={50} height = {25} className="rounded-md"/>
              <Image src="/cards.png" alt="card" width={50} height = {25} className="rounded-md"/>
              <Image src="/stripe.png" alt="stripe" width={50} height = {25} className="rounded-md"/>
              </div>
            <button className=" w-full bg-gray-800 text-white py-2 px-4 rounded-lg hover:bg-gray-900 cursor-pointer transition-all duration-300" >
              <p className="flex items-center justify-center gap-2"><span>Checkout</span>
                <ShoppingCart className="w-3.5 h-3.5" />
              </p>
            </button>
       </form>
  )
}

export default PaymentForm