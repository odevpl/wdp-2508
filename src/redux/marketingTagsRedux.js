/* selectors */
export const getAll = ({ marketingTags }) => marketingTags;

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    default:
      return statePart;
  }
}
