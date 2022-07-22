import { ArrowButton } from '../../Button/Buttons';
import styles from './Section2.module.scss';
import maison2 from '../../../images/maison2.jpg';

const Section2 = () => {
  return (
    <section>
      {/* IMAGE */}
      <div className={styles.section_2_image_container}>
        <img src={maison2} alt="maison2" />
      </div>

      {/* SLOGAN */}
      <div className={styles.section_2_slogan}>
        <h1>
          Vous souhaitez acheter, vendre ou louer, nous pouvons vous aider dans
          vos demarches.
        </h1>
      </div>

      {/* SELECTION */}
      {/* BUY */}
      <div className={styles.selection}>
        <div className={styles.buy}>
          <h3>Acheter</h3>
          <p>
            Trouver votre habitation de rêve avec une experience photo
            immersive.
          </p>
          <ArrowButton text={"Biens à l'achat"} path="buy" />
        </div>

        {/* RENT */}
        <div className={styles.rent}>
          <h3>Louer</h3>
          <p>
            Nous avons crée une experience en ligne transparente de la reception
            de votre dossier jusqu'au paiement du loyer.
          </p>
          <ArrowButton text={'Biens à la location'} path="rent" />
        </div>

        {/* SELL */}
        <div className={styles.sell}>
          <h3>Vendre</h3>
          <p>Nous pouvons vous accompagner dans la vente de votre bien.</p>
          <ArrowButton text={'Voir les filtres'} path="search" />
        </div>
      </div>
    </section>
  );
};

export default Section2;
