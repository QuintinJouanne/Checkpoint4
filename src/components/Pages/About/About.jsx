import Navbar from '../../navbar/Navbar';
import styles from './About.module.scss';
import { AiFillYoutube, AiFillBook } from 'react-icons/ai';

const About = () => {
  return (
    <div>
      <Navbar />
      <h1 className={styles.title}>
        Site template crée dans le cadre du Checkpoint 4 de la Wild Code School.
      </h1>

      <h3 className={styles.titleh3}> Sources : </h3>
      <div className={styles.sources}>
        <AiFillYoutube />
        <p className={styles.para}>WebDesignTuts</p>
        <AiFillYoutube />
        <p className={styles.para}>Classsed</p>
        <AiFillYoutube />
        <p className={styles.para}>The Net Ninja</p>
        <AiFillBook />
        <p className={styles.para}>GraphQL docs</p>
        <AiFillBook />
        <p className={styles.para}>Strapi doc</p>
        <AiFillBook />
        <p className={styles.para}>Apollo doc</p>
      </div>

      <h3 className={styles.titleh3}>A venir</h3>
      <div className={styles.sources}>
        <div className={styles.featuresIncoming}>
          <p>- Rechercher des biens par tranche de prix</p>
          <p>- Rechercher des biens par localité</p>
          <p>- Espace Admin</p>
          <p>- Possibilité de rajouter et de supprimer des annonces</p>
          <p>- Traduction des pages</p>
        </div>
      </div>
    </div>
  );
};

export default About;
