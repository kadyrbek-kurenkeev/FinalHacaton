export const API_AUTH = "http://34.159.20.148/api/v1/account";

export const API_PRODUCTS = "http://34.159.20.148/api/v1/product";

// export const API_REVIEWS = "http://34.173.115.25/api/v1/reviews";

export const API_CATEGORY = "http://34.159.20.148/api/v1/category";

export const API_FAVORITES = "http://34.159.20.148/api/v1/favorites";

export function getCountProductsInCart() {
  const cart = JSON.parse(localStorage.getItem("cart"));
  return cart ? cart.products.length : 0;
}

export function getCountProductsInLike() {
  const like = JSON.parse(localStorage.getItem("like"));
  return like ? like.products.length : 0;
}

export function calcSubPrice(product) {
  return +product.count * product.item.price;
}

export function calcTotalPrice(products) {
  return products.reduce((acc, cur) => {
    return (acc += cur.subPrice);
  }, 0);
}
