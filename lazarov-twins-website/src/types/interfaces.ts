import { RatingData } from '../utils/ratingUtils';

export interface TrainingProgram {
  id: number;
  title: string;
  body: string;
  image: string;
  experienceLevel: string;
  goal: string;
  price: number;
  ratings: RatingData;
  new: boolean;
  salesCount: number;
}

export interface ProgramCardProps {
  program: TrainingProgram;
  className?: string;
}

// Cart interfaces
export interface CartItem {
  id: number;
  title: string;
  price: number;
  image: string;
  quantity: number;
  experienceLevel: string;
  goal: string;
}

export interface CartState {
  items: CartItem[];
}

export interface CartContextType {
  items: CartItem[];
  addToCart: (program: TrainingProgram) => void;
  removeFromCart: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
  clearCart: () => void;
  getCartTotal: () => number;
  getCartItemCount: () => number;
} 