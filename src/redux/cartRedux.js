/* selectors */
export const getAll = ({ cart }) => cart.products;
export const getCount = ({ cart }) =>
  cart.products.reduce((total, product) => total + product.quantity, 0);

/* action name creator */
const reducerName = 'cart';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const ADD_PRODUCT = createActionName('ADD_PRODUCT');
const REMOVE_PRODUCT = createActionName('REMOVE_PRODUCT');
const RESET_CART = createActionName('RESET_CART');

/* action creators */
export const addProduct = payload => ({ payload, type: ADD_PRODUCT });
export const removeProduct = payload => ({ payload, type: REMOVE_PRODUCT });
export const resetCart = () => ({ type: RESET_CART });

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case ADD_PRODUCT: {
      const existingProduct = statePart.products.find(
        product => product.id === action.payload.id
      );

      let updatedProducts;

      if (existingProduct) {
        updatedProducts = statePart.products.map(product =>
          product.id === action.payload.id
            ? { ...product, quantity: product.quantity + 1 }
            : product
        );
      } else {
        updatedProducts = [...statePart.products, { ...action.payload, quantity: 1 }];
      }

      return {
        ...statePart,
        products: updatedProducts,
      };
    }
    case REMOVE_PRODUCT: {
      const updatedProducts = statePart.products
        .map(product =>
          product.id === action.payload.id
            ? { ...product, quantity: product.quantity - 1 }
            : product
        )
        .filter(product => product.quantity > 0);

      return {
        ...statePart,
        products: updatedProducts,
      };
    }
    case RESET_CART: {
      return {
        ...statePart,
        products: [],
      };
    }
    default:
      return statePart;
  }
}
