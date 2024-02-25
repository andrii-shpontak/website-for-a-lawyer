import styles from './Company.module.scss';

const logo = require('../../../../../assets/images/icons/new_logo.png');
export function Company() {
  return (
    <div id="company" className={styles.container}>
      <div className={styles.logoWrapper}>
        <img src={logo} alt="logo" className={styles.logo} />
        <h1>Військовий юрист</h1>
        <p>Криванич Віолета</p>
      </div>
    </div>
  );
}
