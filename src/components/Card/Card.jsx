import styles from './Card.module.scss';
import { BsFillDoorOpenFill } from 'react-icons/bs';
import { IoIosBed } from 'react-icons/io';
import { IoLocationSharp } from 'react-icons/io5';
import { FaBath } from 'react-icons/fa';
import maison3 from '../../images/maison3.jpeg';
import { Link } from 'react-router-dom';

const Card = ({ info, showInfo, secondClass }) => {
  // CONVERT PRICE
  const convertPrice = (price) => {
    if (price >= 1000 && price < 999999) return `${price / 1000}k`;
    if (price >= 1000000) return `${price / 1000000}m`;
    return price;
  };

  //   CONVERT RENT
  const convertRent = (rent) => {
    if (rent >= 1000) return `${rent / 1000}k`;
    return rent;
  };
  return (
    <div className={`${styles.card_container} ${secondClass}`}>
      {/* IMAGE */}
      <div className={styles.image_container}>
        <div className={styles.image_buy_btn}>
          <Link to="/">{info.category}</Link>
        </div>
        <img src={info.imageSource} alt="maison3" />
        {/* CITY */}
        <h3>{info.city}</h3>
        <h4>
          <p className={styles.neighborhood}>{info.neighborhood}</p>
          <p className={styles.street}>{info.street}</p>
        </h4>
        {/* ROOM... */}
        <div className={styles.info}>
          {/* ROW1 */}
          <div className={styles.row1}>
            {/* ROOMS */}
            <div className={styles.rooms}>
              <BsFillDoorOpenFill />
              <span>{`${info.rooms} Pièces`}</span>
            </div>
            {/* BEDROOMS */}
            <div className={styles.bedrooms}>
              <IoIosBed />
              <span>{`${info.bedrooms} Chambres`}</span>
            </div>
          </div>
          {/* ROW2 */}
          <div className={styles.row2}>
            <div className={styles.bathrooms}>
              <FaBath />
              <span>{`${info.bathrooms} Salles de bain`}</span>
            </div>
            {/* ANDRESS */}
            <div className={styles.shortAndress}>
              <IoLocationSharp />
              <span>{`${info.shortAndress}`}</span>
            </div>
          </div>
        </div>
        <div className={styles.card_buy}>
          {/* PRIX */}
          <div className={styles.prices}>
            <h2
              style={showInfo.price ? {} : { display: 'none' }}
            >{`${convertPrice(info.price)}€`}</h2>
            <h2
              style={showInfo.rent ? {} : { display: 'none' }}
            >{`${convertRent(info.rent)}€ /m`}</h2>
          </div>
          {/* SEE MORE BUTTON */}
          <div className={styles.card_btn}>
            <Link to={`/property/${info.id}`}>Voir plus</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

//defaultProps
Card.defaultProps = {
  info: {
    id: undefined,
    imageSource: maison3,
    category: 'Acheter',
    city: 'Lyon',
    neighborhood: '12 rue des Iguanes',
    rooms: '9',
    bedrooms: '7',
    bathrooms: '3',
    shortAndress: '69002',
    price: 800000,
    rent: 0,
  },
  showInfo: {
    price: true,
    rent: false,
  },
  secondClass: 'undefined',
};

export default Card;
