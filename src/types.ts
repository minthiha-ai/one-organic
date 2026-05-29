export interface Product {
  id: string;
  name: string;
  price: number;
  priceStr: string;
  category: 'oil' | 'pantry';
  description: string;
  longDescription: string;
  benefits: string[];
  usage: string[];
  image: string;
  badge?: string;
  rating: number;
  size: string;
  ingredients: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface SendMessageFormData {
  name: string;
  email: string;
  message: string;
}
