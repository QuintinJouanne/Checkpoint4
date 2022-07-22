import Card from '../../Card/Card';
import Navbar from '../../navbar/Navbar';
import styles from './Buy.module.scss';
import { useQuery } from '@apollo/client';
import { BUY_CARDS } from '../../../utils/Queries';

const Buy = () => {
  const { loading, data, error } = useQuery(BUY_CARDS);
  return (
    <main>
      <Navbar />
      <div className={styles.content}>
        <h1>Demeures à vendre</h1>
        {/* CARDS */}
        <div className={styles.card}>
          {loading || error ? (
            <h1 style={{ color: '#333' }}>Chargement...</h1>
          ) : (
            <div className={styles.cards}>
              {data.houses.data.map((house, index) => (
                <Card
                  key={index}
                  secondClass={styles.card}
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
              ))}{' '}
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default Buy;
