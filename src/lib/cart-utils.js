export function loadCart() {
  if (typeof window !== "undefined") {
    const savedCart = localStorage.getItem("myCart");
    return savedCart ? JSON.parse(savedCart) : [];
  }
  return [];
}

export function saveCart(cartItems) {
  if (typeof window !== "undefined") {
    localStorage.setItem("myCart", JSON.stringify(cartItems));
  }
}
