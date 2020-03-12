const factcheck = `
    _id
    title
    excerpt
    introduction
    published_date
    slug
    updates
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
    }
    claims {
        claim
        description
        review
        claimant {
            name
            media {
                url
                alt_text
            }
        }
        rating {
            numeric_value
            media {
                url
                alt_text
            }
        }
    }
    _class
`;

/* export factcheck query by id */
export const factcheckQuery = `
query factcheckById($id: String!) {
    factcheck(id: $id) {
        ${factcheck}
    }
}
`;

/* export factchecks query */
export const factchecksQuery = `
factchecks(
    limit: $limit
    page: $page
    categories: $category
    tags: $tag
    users: $user
    sortBy: $sortBy
    sortOrder: $sortOrder 
) {
    nodes {
        ${factcheck}
    }
    total
}

`;
