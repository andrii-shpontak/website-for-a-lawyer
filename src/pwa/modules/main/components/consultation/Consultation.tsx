import { ReactComponent as ArrowDown } from '../../../../../assets/images/icons/tallArrow.svg';
import styles from './Consultation.module.scss';

export function Consultation() {
  const onScrollToForm = () => {
    const targetElement = document.getElementById('form');
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: 'smooth',
      });
    }
  };
  return (
    <div className={styles.container}>
      <h2>Отримати консультацію з військових справ</h2>
      <span>
        Для отримання консультації - натисніть кнопку та Заповніть форму, і ми Вам зателефонуємо
      </span>
      <ArrowDown className={styles.arrowDown} />
      <button onClick={onScrollToForm} className={styles.getBtn}>
        Отримати консультацію
      </button>
    </div>
  );
}
