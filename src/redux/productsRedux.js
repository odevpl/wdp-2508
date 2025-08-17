/* selectors */
export const getAll = ({ products }) => products;
export const getCount = ({ products }) => products.length;

export const getNew = ({ products }) =>
  products.filter(item => item.newFurniture === true);

/* actions */
const createActionName = actionName => `app/products/${actionName}`;
export const TOGGLE_FAVOURITE = createActionName('TOGGLE_FAVOURITE');

/* action creators */
export const toggleFavourite = payload => ({ type: TOGGLE_FAVOURITE, payload });

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case TOGGLE_FAVOURITE: {
      return statePart.map(product =>
        product.id === action.payload
          ? { ...product, isFavourite: !product.isFavourite }
          : product
      );
    }
    default:
      return statePart;
  }
}
