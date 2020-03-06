/* export organization query by id */
// eslint-disable-next-line import/prefer-default-export
export const organizationQuery = `query {
    organization {
        name
        site_title
        site_address
        mediaLogo {
            url
            alt_text
        }
        mediaMobileLogo {
            url
            alt_text
        }
        mediaFavicon {
            url
            alt_text
        }
        mediaMobileIcon {
            url
            alt_text
        }
    }
}`;
