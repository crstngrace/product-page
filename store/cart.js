export const state = () => ({
  items: [],
  total: 0,
});

export const getters = {
  getCartItems: (state) => state.items,
  getCartTotal: (state) => state.total,
};

export const mutations = {
  ADD_CART_ITEMS(state, value) {
    // Check if item with same id and size already exist
    // If found, increment total; Else just add to the items
    const index = state.items.findIndex(
      (item) => item.id == value.id && item.size == value.size
    );

    if (index !== -1) {
      state.items[index].total += 1;
    } else {
      state.items.push({ ...value });
    }

    state.total++;
  },
};
