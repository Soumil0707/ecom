import { regex, z } from "zod";

export type ProductTypes = {
  id: number | number;
  name: string;
  shortDescription: string;
  description: string;
    price: number;
    sizes: string[];
    colors: string[];
    images: Record<string, string>;
};


export type ProductsType = ProductTypes[]

export type CartItemType = ProductTypes & {
  quantity: number;
  selectedSize: string;
  selectedColor: string;
}

export type CartItemsType = CartItemType[]

export const shippingFormSChema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.email().min(1, "Email is required"),
  phone: z.string().min(10, "Phone number must be 10 digits").max(10, "Not valid phone number").regex(/^\d+$/, "Phone number must contain only digits" ),
  address: z.string().min(1, "Address is required"),
  city: z.string().min(1, "City is required"),
  pincode: z.string().min(1, "Postal code is required").min(6, "Postal code must be 6 digits").max(6, "Postal code must be 6 digits").regex(/^\d+$/, "Postal code must contain only digits")
});

export type ShippingFormInputs = z.infer<typeof shippingFormSChema>;