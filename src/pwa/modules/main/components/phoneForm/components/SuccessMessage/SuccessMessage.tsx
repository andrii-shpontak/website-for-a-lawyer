import { ReactComponent as SuccessIcon } from '../../../../../../../assets/images/icons/listIcon.svg';
import styles from './SuccessMessage.module.scss';

export function SuccessMessage() {
  return (
    <div className={styles.container}>
      <SuccessIcon />
      <p>
        Ваш запит отримано
        <br />
        Скоро з Вами зв'яжуться
      </p>
    </div>
  );
}
