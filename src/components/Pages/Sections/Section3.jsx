import styles from './Section3.module.scss';
import { ArrowButton } from '../../Button/Buttons';
import Carousel from '../../Carousel/Carousel';
import { SwiperSlide } from 'swiper/react';
import Card from '../../Card/Card';
import { useQuery, gql } from '@apollo/client';

const CARD_DATA = gql`
  query GET_CARDS {
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

const Section3 = () => {
  const { loading, data, error } = useQuery(CARD_DATA);
  return (
    <section className={styles.section_3}>
      <div className={styles.section_3_title}>
        <h1>Plus belles demeures</h1>
        <ArrowButton text="Voir plus" path="buy" />
      </div>

      {/* CARD/CAROUSEL */}
      <div className={styles.cards}>
        <Carousel>
          {loading || error ? (
            <>
              <SwiperSlide>
                <Card />
              </SwiperSlide>
            </>
          ) : (
            <>
              {data.houses.data.map((house, index) => (
                <SwiperSlide key={index}>
                  <Card
                    info={{
                      id: house.id,
                      category: 'Acheter',
                      imageSource: `http://localhost:1337${house.attributes.Preview_Image.data.attributes.url}`,
                      city: `${house.attributes.location.data.attributes.City}`,
                      neighborhood: `${house.attributes.Neighborhood}`,
                      street: `${house.attributes.Street}`,
                      rooms: `${house.attributes.Rooms}`,
                      bedrooms: `${house.attributes.Bedrooms}`,
                      bathrooms: `${house.attributes.Bathrooms}`,
                      shortAndress: `${house.attributes.Short_Andress}`,
                      price: `${house.attributes.Price}`,
                    }}
                  />
                </SwiperSlide>
              ))}
            </>
          )}
        </Carousel>
      </div>
    </section>
  );
};

export default Section3;
