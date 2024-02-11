import { ReactComponent as ArrowDown } from '../../../../../assets/images/icons/arrowDown.svg';
import styles from './About.module.scss';

export function About() {
  const handleCall = () => {
    window.location.href = 'https://t.me/Violeta_kryvanych07';
  };

  const onScrollToForm = () => {
    const targetElement = document.getElementById('form');
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: 'smooth',
      });
    }
  };

  const onScrollToCompany = () => {
    const targetElement = document.getElementById('company');
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.btnWrapper}>
          <button onClick={onScrollToForm} className={styles.freeConversation}>
            Замовити консультацію
          </button>
          <button
            onClick={handleCall}
            className={`${styles.freeConversation} ${styles.phoneButton}`}>
            Зателефонувати: +380 77 777 77 77
          </button>
          <div onClick={onScrollToCompany} className={styles.arrowWrapper}>
            <ArrowDown className={styles.arrowDown} />
          </div>
        </div>
      </div>
    </section>
  );
}
