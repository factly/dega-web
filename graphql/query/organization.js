/* export organization query by id */
// eslint-disable-next-line import/prefer-default-export
export const organizationQuery = `query {
    organization {
        name
        site_title
        site_address
        description
        google_verification_code
        facebook_url
        twitter_url
        instagram_url
        linked_in_url
        pinterest_url
        youTube_url
        github_url
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
