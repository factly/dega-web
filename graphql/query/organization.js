/* export organization query by id */
// eslint-disable-next-line import/prefer-default-export
export const organizationQuery = `query {
    organization {
        name
        site_title
        site_address
        mediaLogo {
            source_url
            alt_text
        }
        mediaMobileLogo {
            source_url
            alt_text
        }
        mediaFavicon {
            source_url
            alt_text
        }
        mediaMobileIcon {
            source_url
            alt_text
        }
    }
}`;
