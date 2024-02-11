import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { useRef, useState } from 'react';

import { ReactComponent as MainIcon } from '../../../../../assets/images/icons/headerIcon.svg';
import { ReactComponent as PhoneIcon } from '../../../../../assets/images/icons/phoneIcon.svg';
import styles from './Header.module.scss';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const dropDownLayerRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles.menuContainer} onClick={toggleMenu}>
        <span />
        <div className={`${styles.burgerMenu} ${isOpen ? styles.open : ''}`}>
          <div className={styles.burgerLine} />
          <div className={styles.burgerLine} />
          <div className={styles.burgerLine} />
        </div>
      </div>
      <TransitionGroup>
        {isOpen && (
          <CSSTransition
            nodeRef={dropDownLayerRef}
            classNames={{
              enter: styles.optionEnter,
              enterActive: styles.optionEnterActive,
              exit: styles.optionExit,
              exitActive: styles.optionExitActive,
            }}
            timeout={500}>
            <div ref={dropDownLayerRef} className={styles.dropDownLayer}>
              <MainIcon className={styles.mainIcon} />
              <span className={styles.title}>Криванич Віолета</span>
              <span className={styles.subtitle}>Військовий юрист</span>
              <div className={styles.phoneContainer}>
                <PhoneIcon />
                <span className={styles.phoneNumber}>
                  <a href="tel:+380777777777">+380 77 777 77 77</a>
                </span>
              </div>
              <span className={styles.messengers}>ЗВЕРТАЙТЕСЬ: TELEGRAM, WHATSAPP, VIBER</span>
            </div>
          </CSSTransition>
        )}
      </TransitionGroup>
    </header>
  );
}
