import { ReactComponent as ErrorIcon } from '../../../../../../../assets/images/icons/errorIcon.svg';
import styles from './ErrorMessage.module.scss';

export function ErrorMessage() {
  return (
    <div className={styles.container}>
      <ErrorIcon />
      <p>Помилка при відправці даних</p>
      <p>Спробуйте, будь ласка, ще раз</p>
    </div>
  );
}
