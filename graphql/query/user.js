/* export user query by id */
// eslint-disable-next-line import/prefer-default-export
export const user = `
user(id: $id) {
  display_name
  slug
  email
  description
  media {
    url
    alt_text
  }
}`;
