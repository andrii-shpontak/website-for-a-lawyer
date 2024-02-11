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
        {' '}
        <div className={styles.wrapper}>
          <h2>Наші контакти</h2>
          <p>
            Працюємо кожного дня з 08:00 до 20:00. Просто зателефонуйте і ми допоможемо вирішити
            будь-які Ваші питання.
          </p>

          <div className={styles.cred}>
            <p>
              <strong>Телефон:</strong> +380-77-777-77-77
            </p>
            <p>
              <strong>Email:</strong> example@domain.com
            </p>
          </div>
        </div>
      </div>
      <footer className={styles.links}>
        <div className={styles.wrapper}>
          <div className={styles.icons}>
            <Viber />
            <WhatsApp />
            <Instagram />
            <Facebook />
          </div>
          <button onClick={scrollToTop}>
            Нагору <Arrow />
          </button>
        </div>
      </footer>
    </div>
  );
}
