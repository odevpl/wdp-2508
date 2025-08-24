/* selectors */
export const getAll = ({ products }) => products;
export const getCount = ({ products }) => products.length;

export const getProductById = ({ products }, productId) =>
  products.find(item => item.id === productId);

export const getNew = ({ products }) =>
  products.filter(item => item.newFurniture === true);

/* actions */
const createActionName = actionName => `app/products/${actionName}`;
export const TOGGLE_FAVOURITE = createActionName('TOGGLE_FAVOURITE');
export const STAR_RATING = createActionName('STAR_RATING');

/* action creators */
export const toggleFavourite = payload => ({ type: TOGGLE_FAVOURITE, payload });
export const starRating = (id, userStars) => ({
  type: STAR_RATING,
  payload: { id, userStars },
});

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
    case STAR_RATING: {
      return statePart.map(product =>
        product.id === action.payload.id
          ? { ...product, userStars: action.payload.userStars }
          : product
      );
    }
    default:
      return statePart;
  }
}
