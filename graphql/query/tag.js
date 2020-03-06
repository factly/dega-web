/* export tag query by id */
// eslint-disable-next-line import/prefer-default-export
export const tag = `
tag(id: $id) {
  _id
  name
  slug
}`;
