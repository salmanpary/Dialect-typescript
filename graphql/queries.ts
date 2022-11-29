import { gql } from "@apollo/client";
export const courseListingInHomePageQuery = gql`
  query courseListingInHomePageQuery {
    coursesCollection {
      items {
        coursename
        instructor
        hours
        minutes
        numberofsections
        rating
        originalprice
        discountprice
        homepageButtontext
        slug
        homepageImage {
          url
        }
      }
    }
  }
`;
export const NavbarLogoQuery = gql`
  query NavbarLogoQuery {
    homePageCollection {
      items {
        logo {
          url
        }
      }
    }
  }
`;
export const HeroQuery = gql`
  query HeroQuery {
    homePageCollection {
      items {
        headerdetails {
          tagline1
          tagline2
          points
          buttontext
          redirectUrl
          image {
            url
            description
          }
        }
      }
    }
  }
`;
export const WhyDialectQuery = gql`
  query WhyDialectQuery {
    whyDialectCardCollection {
      items {
        title
        content
        icon {
          url
        }
      }
    }
  }
`;
export const faqHomePageQuery = gql`
  query faqHomePageQuery {
    faqSectionHomePageCollection {
      items {
        title
        subtitle
        faqCollection {
          items {
            question
            answer
          }
        }
      }
    }
  }
`;
export const getCriticalHomePageQuery = gql`
  query getCriticalHomePageQuery {
    getCriticalSectionHomePageCollection {
      items {
        title
        subtitle
        buttontext
        buttonRedirectUrl
      }
    }
  }
`;
export const footerSectionQuery = gql`
  query footerSectionEntryQuery {
    footerSection(id: "21fa9Se3i17gMvhMLGSOMR") {
      title
      footerDescription
      socialMediaCollection {
        items {
          socialIcon {
            url
          }
          redirecturl
        }
      }
    }
  }
`;
export const faqPageQuery = gql`
  query faqPageQuery {
    faqPageFullDataCollection {
      items {
        title
        subtitle
        faqsCollection {
          items {
            question
            answer
          }
        }
      }
    }
  }
`;
export const coursePathsQuery = gql`
  query coursePathsQuery {
    coursesCollection {
      items {
        slug
      }
    }
  }
`;
export const coursePageHeaderQuery = gql`
  query coursePageQuery($slug: String!) {
    coursesCollection(where: { slug: $slug }) {
      items {
        bannerimage {
          url
        }
        coursename
        smallDescription
        hours
        minutes
        numberofsections
        rating
        instructor
        language
      }
    }
  }
`;
export const coursePagePriceCardQuery = gql`
  query coursePagePriceCardQuery($slug: String!) {
    coursesCollection(where: { slug: $slug }) {
      items {
        homepageImage {
          url
        }
        originalprice
        discountprice
        hours
        minutes
        numberofsections
        pricecardButtontext
        pricecardButtonredirecturl
      }
    }
  }
`;
export const coursePagePriceCardThisIncludesQuery = gql`
  query coursePagePriceCardThisIncludesQuery($slug: String!) {
    includesCoursesCollection(where: { slug: $slug }) {
      items {
        icon {
          url
        }
        shortText
      }
    }
  }
`;
export const coursePageDescriptionQuery = gql`
  query coursePageDescriptionQuery($slug: String!) {
    coursesCollection(where: { slug: $slug },limit:1) {
      items {
        description {
          json
        }
      }
    }
  }
`;