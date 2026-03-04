import { create } from "zustand";

export interface Product {
    _id: string;
    name: string;
    description: string;
    price: string;
    image: string;
}

export interface CartItem extends Product {
    quantity: number;
}

interface CartStore {
    items: CartItem[];
    isOpen: boolean;
    addItem: (product: Product) => void;
    removeItem: (productId: string) => void;
    updateQuantity: (productId: string, quantity: number) => void;
    toggleCart: () => void;
    clearCart: () => void;
    getTotalItems: () => number;
    getTotalPrice: () => number;
}

export const useCartStore = create<CartStore>((set, get) => ({
    items: [],
    isOpen: false,

    addItem: (product) => {
        const items = get().items;
        const existingItem = items.find((item) => item._id === product._id);

        if (existingItem) {
            set({
                items: items.map((item) =>
                    item._id === product._id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                ),
            });
        } else {
            set({ items: [...items, { ...product, quantity: 1 }] });
        }
    },

    removeItem: (productId) => {
        set({ items: get().items.filter((item) => item._id !== productId) });
    },

    updateQuantity: (productId, quantity) => {
        if (quantity === 0) {
            get().removeItem(productId);
            return;
        }

        set({
            items: get().items.map((item) =>
                item._id === productId ? { ...item, quantity } : item
            ),
        });
    },

    toggleCart: () => set({ isOpen: !get().isOpen }),

    clearCart: () => set({ items: [] }),

    getTotalItems: () => get().items.reduce((total, item) => total + item.quantity, 0),

    getTotalPrice: () => {
        return get().items.reduce((total, item) => {
            // Assuming price is a string like "$4.50"
            const priceVal = parseFloat(item.price.replace(/[^0-9.-]+/g, ""));
            return total + priceVal * item.quantity;
        }, 0);
    },
}));
