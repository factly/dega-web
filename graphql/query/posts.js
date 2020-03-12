const post = `
    _id
    title
    excerpt
    published_date
    updates
    slug
    media {
        url
        alt_text
    }
    categories {
        _id
        name
        slug
    }
    _class
`;

const tags = `
    tags {
        _id
        name
        slug
    }
`;

/* export post query by id */
export const postQuery = `
query postById($id: String!) {
    post(id: $id) {
        ${post}
        content
        degaUsers {
            _id
            display_name
            slug
            media {
                url
                alt_text
            }
        }
        ${tags}
    }
}
`;

/* export posts query  for list page */
export const pagingQuery = `
posts(
    limit: $limit
    page: $page
    categories: $category
    tags: $tag
    users: $user
    sortBy: $sortBy
    sortOrder: $sortOrder
) {
    nodes {
        ${post}
        degaUsers {
            _id
            display_name
            slug
        }
    }
    total
}
`;

/* export posts query for single page */
export const singlePageQuery = `
posts(
    limit: $limit
    page: $page
    categories: $category
    tags: $tag
    users: $user
    sortBy: $sortBy
    sortOrder: $sortOrder
) {
    nodes {
        ${post}
        content
        degaUsers {
            _id
            display_name
            slug
            media {
                url
                alt_text
            }
        }
        ${tags}
    }
    total
}
`;
