import { ReactComponent as Logo } from '../../../../../assets/images/icons/headerIcon.svg';
import styles from './Company.module.scss';

export function Company() {
  return (
    <div id="company" className={styles.container}>
      <div className={styles.logoWrapper}>
        <Logo className={styles.logo} />
        <p>Криванич Віолета</p>
        <span>Військовий юрист</span>
      </div>
    </div>
  );
}
