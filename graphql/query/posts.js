const post = `
    _id
    title
    content
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
    tags {
        _id
        name
        slug
    }
    degaUsers {
        _id
        display_name
        slug
        media {
        url
        alt_text
        }
        email
        _class
    }
    _class
`;

/* export post query by id */
export const postQuery = `
query postById($id: String!) {
    post(id: $id) {
        ${post}
    }
}
`;

/* export posts query */
export const postsQuery = `
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
    }
    total
}
`;
