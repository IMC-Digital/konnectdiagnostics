export const removeFromCart = (itemToRemove, cartKey, toastMessage) => {
    const prevCartItems = JSON.parse(localStorage.getItem(cartKey)) || [];
    const updatedCartItems = prevCartItems.filter(item => {
      if (itemToRemove.type === "test") {
        return item.test_id !== itemToRemove.test_id;
      } else if (itemToRemove.type === "package") {
        return item.package_id !== itemToRemove.package_id;
      }
      return true;
    });
    localStorage.setItem(cartKey, JSON.stringify(updatedCartItems));
    return updatedCartItems;
  };