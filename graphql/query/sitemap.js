const sitemap = `
    _id
    slug
    created_date
`;
// eslint-disable-next-line import/prefer-default-export
export const sitemapsQuery = `
    query {
        sitemap {
            categories{
                ${sitemap}
            }
            tags{
                ${sitemap}
            }
            users{
                ${sitemap}
            }
            posts{
                ${sitemap}
            }
            factchecks{
                ${sitemap}
            }
        }
    }
`;
