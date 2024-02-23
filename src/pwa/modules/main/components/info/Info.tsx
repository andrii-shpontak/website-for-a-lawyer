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
                  {tab.title}
                </AccordionSummary>
                <AccordionDetails>
                  <div className={styles.context}>
                    {tab.subtitle && <p>{tab.subtitle}</p>}
                    {tab.description && (
                      <span className={styles.description}>{tab.description}</span>
                    )}
                    {tab.textLink && (
                      <a
                        className={styles.description}
                        href={tab.textLink}
                        target="_blank"
                        rel="noreferrer">
                        {tab.textLink}
                      </a>
                    )}
                    {tab.descrContinue && (
                      <span className={styles.description}>{tab.descrContinue}</span>
                    )}
                    <ul>
                      {tab.steps?.map((step, indexStep) => (
                        <li key={`${index} ${indexStep}`}>{step}</li>
                      ))}
                      {tab.extraSteps && (
                        <ol>
                          {tab.extraSteps.map((step, indexExtra) => (
                            <li key={`${index} ${indexExtra}`}>{step}</li>
                          ))}
                        </ol>
                      )}
                    </ul>

                    {tab.docs &&
                      tab.docs.map((doc, i) => (
                        <a key={i} href={doc.docLink} download={doc.docName}>
                          <DocIcon />
                          {doc.docTitle}
                        </a>
                      ))}
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
