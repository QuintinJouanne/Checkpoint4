import Navbar from '../../navbar/Navbar';
import styles from './Section1.module.scss';
// import { Link } from 'react-router-dom';
// import { useState } from 'react';
import maison1 from '../../../images/maison1.jpg';

const Section1 = () => {
  // const [price, setPrice] = useState('<100k');
  // const [location, setLocation] = useState('');
  return (
    <section className={styles.section_1}>
      {/* NAVBAR */}
      <div className={styles.Navbar}>
        <Navbar BurgerColor={'whitesmoke'} />
      </div>

      {/* BACKGROUND IMAGE */}
      <div className={styles.img}></div>

      {/* SECTION 1 CONTENT */}
      <div className={styles.section_1_content}>
        {/* SLOGAN */}
        <div className={styles.slogan}>
          <h1>La solution pour toutes vos envies</h1>
          <p>
            Trouver la maison ou l’appartement de vos reves rapidement et
            facilement grâce a nos experts
          </p>

          {/* SEARCH BOX */}
          {/* <div className={styles.search_container}> */}
          {/* LIEU */}
          {/* <div className={styles.location_container}>
              <span>Lieu</span>
              <input
                type="text"
                placeholder="Rentrer le lieu"
                onChange={(e) => setLocation(e.target.value)}
              />
            </div> */}
          {/* PRICE RANGE */}
          {/* <div className={styles.price_container}>
              <span>Prix</span>
              <select
                name="prix"
                id="prix"
                onChange={(e) => setPrice(e.target.value)}
              >
                <option value="<100k">{`<100k`}</option>
                <option value="100k-200k">100k-200k</option>
                <option value="200k-500k">200k-500k</option>
                <option value=">500k">{`<500k`}</option>
              </select>
            </div> */}

          {/* SEARCH BUTTON */}
          {/* <button className={styles.btn_search}>
              <Link to="search">Rechercher</Link>
            </button>
          </div> */}
        </div>

        {/* BUILDING IMAGE */}
        <div className={styles.slogan_image}>
          <img src={maison1} alt="maison" />
        </div>
      </div>
    </section>
  );
};

export default Section1;
