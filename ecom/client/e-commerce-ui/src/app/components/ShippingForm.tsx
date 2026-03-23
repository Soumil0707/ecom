import { shippingFormSChema, ShippingFormInputs } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";


const ShippingForm = ({ setShippingForm }: { setShippingForm: (data: ShippingFormInputs) => void }) => {

const { register, handleSubmit, formState:{
  errors
}} = useForm<ShippingFormInputs>({
  resolver: zodResolver(shippingFormSChema)
})

const router = useRouter();

const handleShippingForm:SubmitHandler<ShippingFormInputs> = (data: ShippingFormInputs) => {
  setShippingForm(data);
  router.push("/cart?step=3", {scroll: false});
}
  return (
       <form className="flex flex-col gap-4" onSubmit = {handleSubmit(handleShippingForm)} >
            <div className="flex flex-col gap-1">
                <label htmlFor="name" className="text-sm text-gray-500 font-medium">Name</label>
                <input type="text" id="name" placeholder = "John Doe" {...register("name")} className="border border-gray-300 text-sm outline-none rounded-md p-2" />
                {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
            </div>
            <div className="flex flex-col gap-1">
                <label htmlFor="email" className="text-sm text-gray-500 font-medium">Email</label>
                <input type="email" id="email" placeholder = "john.doe@example.com" {...register("email")} className="border border-gray-300 text-sm outline-none rounded-md p-2" />
                {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
            </div>
            <div className="flex flex-col gap-1">
                <label htmlFor="phone" className="text-sm text-gray-500 font-medium">Phone Number</label>
                <input type="text" id="phone" placeholder = "1234567890" {...register("phone")} className="border border-gray-300 text-sm outline-none rounded-md p-2" />
                {errors.phone && <p className="text-red-500 text-sm">{errors.phone.message}</p>}
            </div>
            <div className="flex flex-col gap-1">
                <label htmlFor="address" className="text-sm text-gray-500 font-medium">Address</label>
                <input type="text" id="address" placeholder = "Wz-10 Asalatpur" {...register("address")} className="border border-gray-300 text-sm outline-none rounded-md p-2" />
                {errors.address && <p className="text-red-500 text-sm">{errors.address.message}</p>}
            </div>
            <div className="flex flex-col gap-1">
                <label htmlFor="city" className="text-sm text-gray-500 font-medium">City</label>
                <input type="text" id="city" placeholder = "New Delhi" {...register("city")} className="border border-gray-300 text-sm outline-none rounded-md p-2" />
                {errors.city && <p className="text-red-500 text-sm">{errors.city.message}</p>}
            </div>
            <div className="flex flex-col gap-1">
                <label htmlFor="pincode" className="text-sm text-gray-500 font-medium">Pin Code</label>
                <input type="text" id="pincode" placeholder = "100001" {...register("pincode")} className="border border-gray-300 text-sm outline-none rounded-md p-2" />
                {errors.pincode && <p className="text-red-500 text-sm">{errors.pincode.message}</p>}
            </div>
            <button className=" w-full bg-gray-800 text-white py-2 px-4 rounded-lg hover:bg-gray-900 cursor-pointer transition-all duration-300" >
              <p className="flex items-center justify-center gap-2"><span>Continue</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </p>
            </button>
       </form>
  )
}

export default ShippingForm