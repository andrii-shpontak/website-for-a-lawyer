import { ReactComponent as ArrowDown } from '../../../../../assets/images/icons/arrowDown.svg';
import styles from './About.module.scss';

export function About() {
  const handleCall = () => {
    window.location.href = 'tel:+380777777777';
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
      <h1>
        Юридична компанія
        <br />
        Private Lawyer
      </h1>
      <p>
        <strong>Військові юристи</strong> юридичної компанії <strong>Private Lawyer</strong> мають
        великий досвід з вирішення проблематичних питань військовослужбовців та допоможуть відновити
        Ваші порушені права.
      </p>
      <div className={styles.btnWrapper}>
        <button onClick={onScrollToForm} className={styles.freeConversation}>
          Замовити консультацію
        </button>
        <button onClick={handleCall} className={`${styles.freeConversation} ${styles.phoneButton}`}>
          Зателефонувати: +380 77 777 77 77
        </button>
        <div onClick={onScrollToCompany} className={styles.arrowWrapper}>
          <ArrowDown className={styles.arrowDown} />
        </div>
      </div>
    </section>
  );
}
