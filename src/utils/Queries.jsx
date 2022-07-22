import { gql } from '@apollo/client';
const BUY_CARDS = gql`
  query GET_BUY_CARDS {
    houses(
      filters: { categories: { Category: { contains: "Buy" } } }
      pagination: { limit: 6 }
    ) {
      data {
        id
        attributes {
          location {
            data {
              attributes {
                City
              }
            }
          }
          Preview_Image {
            data {
              attributes {
                url
              }
            }
          }
          categories {
            data {
              attributes {
                Category
              }
            }
          }
          Street
          Rooms
          Bedrooms
          Bathrooms
          Price
          Rent
          Short_Andress
          Neighborhood
        }
      }
    }
  }
`;

const RENT_CARDS = gql`
  query GET_RENT_CARDS {
    houses(
      filters: { categories: { Category: { contains: "Rent" } } }
      pagination: { limit: 6 }
    ) {
      data {
        id
        attributes {
          location {
            data {
              attributes {
                City
              }
            }
          }
          Preview_Image {
            data {
              attributes {
                url
              }
            }
          }
          categories {
            data {
              attributes {
                Category
              }
            }
          }
          Street
          Rooms
          Bedrooms
          Bathrooms
          Rent
          Short_Andress
          Neighborhood
        }
      }
    }
  }
`;

const ID_CARD = gql`
  query GET_ID_CARDS($id: ID) {
    houses(filters: { id: { eq: $id } }) {
      data {
        id
        attributes {
          categories {
            data {
              attributes {
                Category
              }
            }
          }
          Neighborhood
          Preview_Image {
            data {
              attributes {
                url
              }
            }
          }
          location {
            data {
              attributes {
                City
              }
            }
          }
          Rooms
          Bedrooms
          Bathrooms
          Price
          Street
          Rent
          Description
          Short_Andress
        }
      }
    }
  }
`;

// const CREATE_CARDS = gql`
//   mutation (
//     $category: String
//     $city: String
//     $neighborhood: String
//     $street: String
//     $rooms: String
//     $bedrooms: String
//     $bathrooms: String
//     $shortAndress: String
//     $price: String
//     $rent: String
//   ) {
//     createHouse(
//       category: $category
//       street: $street
//       city: $city
//       neighborhood: $neighborhood
//       rooms: $rooms
//       bedrooms: $bedrooms
//       bathrooms: $bathrooms
//       shortAndress: $shortAndress
//       price: $price
//       rent: $rent
//     )
//   }
// `;

export { BUY_CARDS, RENT_CARDS, ID_CARD };
