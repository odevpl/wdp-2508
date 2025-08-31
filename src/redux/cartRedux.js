/* selectors */
export const getAll = ({ cart }) => cart.products;
export const getCount = ({ cart }) =>
  cart.products.reduce((total, product) => total + product.quantity, 0);
export const getTotalPrice = ({ cart }) =>
  cart.products.reduce((sum, product) => sum + product.totalPrice, 0);

/* action name creator */
const reducerName = 'cart';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const ADD_PRODUCT = createActionName('ADD_PRODUCT');
const REMOVE_PRODUCT = createActionName('REMOVE_PRODUCT');
const RESET_CART = createActionName('RESET_CART');
const REMOVE_ONE = createActionName('REMOVE_ONE');

/* action creators */
export const addProduct = payload => ({ payload, type: ADD_PRODUCT });
export const removeProduct = payload => ({ payload, type: REMOVE_PRODUCT });
export const removeOne = payload => ({ type: REMOVE_ONE, payload });
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
            ? {
                ...product,
                quantity: (product.quantity || 0) + 1,
                totalPrice: ((product.quantity || 0) + 1) * product.price,
              }
            : product
        );
      } else {
        updatedProducts = [
          ...statePart.products,
          { ...action.payload, quantity: 1, totalPrice: action.payload.price },
        ];
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
    case REMOVE_ONE: {
      const existingProduct = statePart.products.find(
        product => product.id === action.payload.id
      );
      if (existingProduct.quantity > 1) {
        return {
          ...statePart,
          products: statePart.products.map(product =>
            product.id === action.payload.id
              ? {
                  ...product,
                  quantity: product.quantity - 1,
                  totalPrice: (product.quantity - 1) * product.price,
                }
              : product
          ),
        };
      } else {
        return {
          ...statePart,
          products: statePart.products.filter(
            product => product.id !== action.payload.id
          ),
        };
      }
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
