/* selectors */
export const getAll = ({ marketingTags }) => marketingTags;
//export const getCount = ({ categories }) => categories.length;

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    default:
      return statePart;
  }
}
