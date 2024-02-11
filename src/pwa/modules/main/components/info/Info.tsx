import { Accordion, AccordionDetails, AccordionSummary, ThemeProvider } from '@mui/material';

import { AccordionTheme } from 'MUITheme';
import { ReactComponent as CloseIcon } from '../../../../../assets/images/icons/close.svg';
import { ReactComponent as DocIcon } from '../../../../../assets/images/icons/docIcon.svg';
import styles from './Info.module.scss';
import { tabs } from './constants/tabs';

export function Info() {
  return (
    <div className={styles.container}>
      <ThemeProvider theme={AccordionTheme}>
        <div className={styles.wrapper}>
          <div className={styles.title}>
            <span>Найчастіші питання які ми отримуємо від наших клієнтів:</span>
          </div>
          <div className={styles.tabs}>
            {tabs.map((tab, index) => (
              <Accordion key={index} className={styles.tab}>
                <AccordionSummary
                  expandIcon={<CloseIcon />}
                  aria-controls={`panel${index}-content`}
                  id={`panel${index}-header`}
                  className={styles.accordionTitle}>
                  {tab.title} {index + 1}
                </AccordionSummary>
                <AccordionDetails>
                  <div className={styles.context}>
                    <p>{tab.subtitle}</p>
                    <ul>
                      {tab.steps.map((step, indexStep) => (
                        <li key={`${index} ${indexStep}`}>{step}</li>
                      ))}
                    </ul>
                    <a href={tab.document} download={tab.docName}>
                      <DocIcon />
                      Отримати зразок заяви
                    </a>
                  </div>
                </AccordionDetails>
              </Accordion>
            ))}
          </div>
        </div>
      </ThemeProvider>
    </div>
  );
}
