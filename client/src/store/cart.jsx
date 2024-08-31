import { createSlice } from "@reduxjs/toolkit";

// Helper function to safely get data from localStorage
const getLocalStorageData = (key, defaultValue) => {
  try {
    const storedData = localStorage.getItem(key);
    return storedData ? JSON.parse(storedData) : defaultValue;
  } catch (error) {
    console.error(`Error reading from localStorage: ${error}`);
    return defaultValue;
  }
};

// Helper function to safely set data to localStorage
const setLocalStorageData = (key, value) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error(`Error writing to localStorage: ${error}`);
  }
};

const initialState = {
  items: getLocalStorageData("carts", []),
  statusTab: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const { productId, quantity } = action.payload;

      // Data validation
      if (typeof productId !== 'number' || typeof quantity !== 'number' || quantity <= 0) {
        console.error('Invalid payload data for addToCart:', action.payload);
        return;
      }

      const indexProductId = state.items.findIndex(
        (item) => item.productId === productId
      );

      if (indexProductId !== -1) {
        state.items[indexProductId].quantity += quantity;
      } else {
        state.items.push({ productId, quantity });
      }
      
      setLocalStorageData("carts", state.items);
    },
    changeQuantity(state, action) {
      const { productId, quantity } = action.payload;

      // Data validation
      if (typeof productId !== 'number' || typeof quantity !== 'number' || quantity < 0) {
        console.error('Invalid payload data for changeQuantity:', action.payload);
        return;
      }

      const indexProductId = state.items.findIndex(
        (item) => item.productId === productId
      );

      if (indexProductId !== -1) {
        if (quantity > 0) {
          state.items[indexProductId].quantity = quantity;
        } else {
          state.items = state.items.filter(
            (item) => item.productId !== productId
          );
        }
      }

      setLocalStorageData("carts", state.items);
    },
    toggleStatusTab(state) {
      state.statusTab = !state.statusTab;
    },
  },
});

export const { addToCart, changeQuantity, toggleStatusTab } = cartSlice.actions;
export default cartSlice.reducer;
