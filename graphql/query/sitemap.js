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
            formats{
                ${sitemap}
            }
            statuses{
                ${sitemap}
            }
            posts{
                ${sitemap}
            }
            factchecks{
                ${sitemap}
            }
            claims{
                ${sitemap}
            }
            claimants{
                ${sitemap}
            }
            ratings{
                ${sitemap}
            }
        }
    }
`;
