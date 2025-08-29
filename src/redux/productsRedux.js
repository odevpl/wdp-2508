/* selectors */
export const getAll = ({ products }) => products;
export const getCount = ({ products }) => products.length;

export const getProductById = ({ products }, productId) =>
  products.find(item => item.id === productId);

export const getNew = ({ products }) =>
  products.filter(item => item.newFurniture === true);

export const getByMarketingTag = ({ products }, tag) =>
  products.filter(product => product.marketingTags.includes(tag));

/* actions */
const createActionName = actionName => `app/products/${actionName}`;
export const SET_PRODUCTS = createActionName('SET_PRODUCTS');
export const TOGGLE_FAVOURITE = createActionName('TOGGLE_FAVOURITE');
export const STAR_RATING = createActionName('STAR_RATING');

export const loadProducts = () => (dispatch, getState) => {
  const products = getState().products;
  const data = localStorage.getItem('favourites');
  let favouriteIds = [];

  try {
    favouriteIds = data ? JSON.parse(data) : [];
  } catch (e) {
    console.error('Parsing error from localStorage:', e);
  }

  const updatedProducts = products.map(p => ({
    ...p,
    isFavourite: favouriteIds.includes(p.id),
  }));

  dispatch({ type: SET_PRODUCTS, payload: updatedProducts });
};

export const toggleFavouriteThunk = id => (dispatch, getState) => {
  dispatch(toggleFavourite(id));

  const { products } = getState();
  const favouriteIds = products.filter(p => p.isFavourite).map(p => p.id);

  localStorage.setItem('favourites', JSON.stringify(favouriteIds));
};

/* action creators */
export const setProducts = payload => ({ type: SET_PRODUCTS, payload });
export const toggleFavourite = payload => ({ type: TOGGLE_FAVOURITE, payload });
export const starRating = (id, userStars) => ({
  type: STAR_RATING,
  payload: { id, userStars },
});

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case SET_PRODUCTS:
      return action.payload;
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
