import styles from './Footer.module.scss';
import { Link } from 'react-router-dom';
// import { BsArrowRight } from 'react-icons/bs';
import {
  AiOutlineFacebook,
  AiOutlineTwitter,
  AiOutlineInstagram,
} from 'react-icons/ai';

const Footer = () => {
  return (
    <footer>
      <ul className={styles.brand}>
        <li>
          <span>Centurion 21</span>
        </li>
        {/* <li>
          <span>Ou sommes-nous?</span>
        </li> */}
        <li>
          <span>Contact : 06 66 66 66 66</span>
        </li>
        <li>
          <div className={styles.socials}>
            <Link to="/">
              <AiOutlineFacebook />
            </Link>
            <Link to="/">
              <AiOutlineInstagram />
            </Link>
            <Link to="/">
              <AiOutlineTwitter />
            </Link>
          </div>
        </li>
      </ul>

      <ul className={styles.services}>
        <li>
          <span>Services</span>
        </li>
        <li>
          <Link to="/aboutus">A propos</Link>
        </li>
        <li>
          <Link to="/contactus">Contactez-nous</Link>
        </li>
        {/* <li>
          <Link to="/about">L'équipe</Link>
        </li> */}
      </ul>

      {/* <ul className={styles.support}>
        <li>
          <span>Support</span>
        </li>
        <li>
          <Link to="/">FAQ</Link>
        </li>
        <li>
          <Link to="/">Recrutement</Link>
        </li>
        <li>
          <Link to="/">Blog</Link>
        </li>
      </ul> */}

      {/* <ul className={styles.subscribe}>
        <li>
          <span>Suivez-nous</span>
        </li>
        <li>
          <p>Suivez-nous pour ne pas rater les dernieres nouveautées</p>
        </li>
        <li>
          <div className={styles.subscribe_input}>
            <input type="text" placeholder="Adresse mail" />
            <button>
              <BsArrowRight />
            </button>
          </div>
        </li>
      </ul> */}
    </footer>
  );
};

export default Footer;
