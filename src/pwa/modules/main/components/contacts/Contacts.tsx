import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { useRef, useState } from 'react';

import { ReactComponent as Insta } from '../../../../../assets/images/icons/insta.svg';
import { ReactComponent as Phone } from '../../../../../assets/images/icons/phoneCircle.svg';
import { ReactComponent as Telegram } from '../../../../../assets/images/icons/telegram.svg';
import styles from './Contacts.module.scss';

export function Contacts() {
  const [isActive, setIsActive] = useState(false);
  const contactsRef = useRef(null);

  const handleClick = () => {
    setIsActive(!isActive);
  };
  return (
    <div className={styles.animatedIconsContainer}>
      <button
        onClick={handleClick}
        className={`${styles.iconComponent} ${isActive ? styles.active : ''}`}
      />
      <TransitionGroup>
        {isActive && (
          <CSSTransition
            nodeRef={contactsRef}
            classNames={{
              enter: styles.optionEnter,
              enterActive: styles.optionEnterActive,
              exit: styles.optionExit,
              exitActive: styles.optionExitActive,
            }}
            timeout={500}>
            <div ref={contactsRef} className={styles.smallIconsContainer}>
              <a href="tel:+380777777777">
                <Phone />
              </a>
              <a href="https://t.me/Violeta_kryvanych07" target="_blank" rel="noreferrer">
                <Telegram />
              </a>
              <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
                <Insta />
              </a>
            </div>
          </CSSTransition>
        )}
      </TransitionGroup>
    </div>
  );
}
