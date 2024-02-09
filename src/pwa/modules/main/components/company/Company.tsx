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
      {/* <div className={styles.about}> */}
      {/* <h2>About us</h2>
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, delectus animi natus libero
          magnam consequuntur ipsa perferendis dicta cumque iure?
        </span>
        <div className={styles.divider} />
        <span>
          Lorem ipsum dolor <strong>"sit amet"</strong> consectetur adipisicing elit. Tempore animi
          esse laudantium? Dolor quidem nulla molestiae fuga ea. Facilis deleniti explicabo,
          assumenda quam ab natus ea ipsum. Fuga obcaecati reiciendis minima hic placeat officiis!
          Nulla quia esse in suscipit recusandae, similique accusamus quidem tempora sunt,
          voluptatem debitis nesciunt adipisci non.
        </span> */}
      {/* </div> */}
    </div>
  );
}
