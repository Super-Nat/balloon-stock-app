import { create } from "zustand";
import { TProduct } from "@/types/product";

type StockState = {
  product: TProduct | null;
  setProduct: (p: TProduct) => void;
  increase: () => void;
  decrease: () => void;
};

export const useStockStore = create<StockState>((set) => ({
  product: {
    id: "1",
    sku: "B-1001",
    qty: 2,
  },

  setProduct: (product) => set({ product }),

  increase: () =>
    set((state) =>
      state.product
        ? { product: { ...state.product, qty: state.product.qty + 1 } }
        : state
    ),

  decrease: () =>
    set((state) =>
      state.product && state.product.qty > 0
        ? { product: { ...state.product, qty: state.product.qty - 1 } }
        : state
    ),
}));
