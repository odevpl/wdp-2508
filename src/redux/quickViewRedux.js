/* selectors */
export const getQuickView = ({ quickView }) => quickView;

/* action name creator */
const reducerName = 'quickView';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const UPDATE_QUICK_VIEW = createActionName('UPDATE_QUICK_VIEW');

/* action creators */
export const updateQuickView = payload => ({ payload, type: UPDATE_QUICK_VIEW });

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case UPDATE_QUICK_VIEW:
      return { ...statePart, ...action.payload };
    default:
      return statePart;
  }
}
