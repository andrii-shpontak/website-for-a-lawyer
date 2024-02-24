import { ReactComponent as Arrow } from '../../../../../assets/images/icons/tallArrow.svg';
import { ReactComponent as Facebook } from '../../../../../assets/images/icons/facebook.svg';
import { ReactComponent as Instagram } from '../../../../../assets/images/icons/instagram.svg';
import { ReactComponent as Viber } from '../../../../../assets/images/icons/viber.svg';
import { ReactComponent as WhatsApp } from '../../../../../assets/images/icons/whatsapp.svg';
import styles from './Footer.module.scss';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.wrapper}>
          <h2>Наші контакти</h2>
          <p>
            Робочий графік:
            <br />З 9:00 до 19:00
          </p>

          <div className={styles.cred}>
            <a href="tel:+380509136672">
              <p>
                <strong>Телефон:</strong> +380 50 913 66 72
              </p>
            </a>
            <a href="mailto: violetakryvanych@gmail.com">
              <p>
                <strong>Email:</strong> violetakryvanych@gmail.com
              </p>
            </a>
          </div>
        </div>
      </div>
      <footer className={styles.links}>
        <div className={styles.wrapper}>
          <div className={styles.icons}>
            <a href="https://t.me/Violeta_kryvanych07" target="_blank" rel="noreferrer">
              <Viber />
            </a>
            <a href="https://wa.me/380509136672" target="_blank" rel="noreferrer">
              <WhatsApp />
            </a>
            <a
              href="https://www.instagram.com/violeta_kryvanych_law/"
              target="_blank"
              rel="noreferrer">
              <Instagram />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61555717203608&locale=uk_UA"
              target="_blank"
              rel="noreferrer">
              <Facebook />
            </a>
          </div>
          <button onClick={scrollToTop}>
            Нагору <Arrow />
          </button>
        </div>
      </footer>
    </div>
  );
}
