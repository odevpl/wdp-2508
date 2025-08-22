/* selectors */
export const getViewport = ({ viewport }) => viewport;

/* actions */
const createActionName = name => `app/viewport/${name}`;
const SET_VIEWPORT_MODE = createActionName('SET_VIEWPORT_MODE');
export const setViewportMode = ({ width, mode }) => ({
  type: SET_VIEWPORT_MODE,
  payload: { width, mode },
});

/* reducer */
export default function reducer(statePart = { mode: 'desktop' }, action = {}) {
  switch (action.type) {
    case SET_VIEWPORT_MODE:
      return { ...statePart, width: action.payload.width, mode: action.payload.mode };
    default:
      return statePart;
  }
}
