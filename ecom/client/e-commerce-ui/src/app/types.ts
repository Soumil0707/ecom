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