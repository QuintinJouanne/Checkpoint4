import { useState } from 'react';
import styles from './Admin.module.scss';
// import { useQuery } from '@apollo/client';
// import { CREATE_CARDS } from '../../../utils/Queries';
import Navbar from '../../navbar/Navbar';

const Admin = () => {
  const [category, setCategory] = useState('');
  const [city, setCity] = useState('');
  const [neighborhood, setNeighborhood] = useState('');
  const [rooms, setRooms] = useState('');
  const [bedrooms, setBedrooms] = useState('');
  const [bathrooms, setBathrooms] = useState('');
  const [shortAndress, setShortAndress] = useState('');
  const [price, setPrice] = useState('');
  const [rent, setRent] = useState('');

  // const { loading, data, error } = useQuery(CREATE_CARDS, {
  //   variables: {
  //     category: 'Categorie',
  //     city: 'Ville',
  //     neighborhood: 'Rue',
  //     rooms: 'Pieces',
  //     bedrooms: 'Chambres',
  //     bathrooms: 'Salle de bain',
  //     shortAndress: 'Code postal',
  //     price: 'Prix',
  //     rent: 'Location,',
  //   },
  // });

  return (
    <div>
      <Navbar />
      <form>
        <div className={styles.customerDuoLabel}>
          <label htmlFor="nom" className={styles.labelPopUp}>
            Category
          </label>
          <input
            className={styles.inputPopUp}
            id="category"
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          ></input>
          <label htmlFor="city" className={styles.labelPopUp}>
            Prénom
          </label>
          <input
            className={styles.inputPopUp}
            id="city"
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          ></input>
        </div>
        <div className={styles.customerDuoLabel}>
          <label htmlFor="neighborhood" className={styles.labelPopUp}>
            Rue
          </label>
          <input
            className={styles.inputPopUp}
            id="rue"
            type="text"
            value={neighborhood}
            onChange={(e) => setNeighborhood(e.target.value)}
          ></input>
          <label htmlFor="rooms" className={styles.labelPopUp}>
            Pieces
          </label>
          <input
            className={styles.inputPopUp}
            id="pieces"
            type="text"
            value={rooms}
            onChange={(e) => setRooms(e.target.value)}
          ></input>
        </div>
        <div className={styles.customerDuoLabel}>
          <label htmlFor="bedrooms" className={styles.labelPopUp}>
            Chambre
          </label>
          <input
            className={styles.inputPopUp}
            id="piece"
            type="text"
            value={bedrooms}
            onChange={(e) => setBedrooms(e.target.value)}
          ></input>
          <label htmlFor="bathrooms" className={styles.labellabelPopUp}>
            Salle de bain
          </label>
          <input
            className={styles.inputPopUp}
            id="salle de bain"
            type="text"
            value={bathrooms}
            onChange={(e) => setBathrooms(e.target.value)}
          ></input>
        </div>
        <div>
          <label htmlFor="shortAndress" className={styles.labelPopUp}>
            Code postal
          </label>
          <input
            className={styles.inputPopUp}
            id="cp"
            type="text"
            value={shortAndress}
            onChange={(e) => setShortAndress(e.target.value)}
          ></input>

          <label htmlFor="price" className={styles.labelPopUp}>
            Prix
          </label>
          <input
            className={styles.inputPopUp}
            id="prix"
            type="text"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          ></input>
          <label htmlFor="rent" className={styles.labelPopUp}>
            Location
          </label>
          <input
            className={styles.inputPopUp}
            id="location"
            type="text"
            value={rent}
            onChange={(e) => setRent(e.target.value)}
          ></input>
        </div>
        <div className={styles.btnPopupDiv}>
          <button type="submit" className={styles.buttonPopUp}>
            Ajouter
          </button>
        </div>
      </form>
    </div>
  );
};

export default Admin;
