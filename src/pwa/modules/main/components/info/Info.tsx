import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material';

import { ReactComponent as CloseIcon } from '../../../../../assets/images/icons/close.svg';
import styles from './Info.module.scss';

const tabs = [
  {
    title: 'Question',
    subtitle: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim, fugit!',
    steps: [
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae vel unde,voluptates adipisci nostrum quae tenetur harum corrupti est nemo!',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae vel unde,voluptates adipisci nostrum quae tenetur harum corrupti est nemo!',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae vel unde,voluptates adipisci nostrum quae tenetur harum corrupti est nemo!',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae vel unde,voluptates adipisci nostrum quae tenetur harum corrupti est nemo!',
    ],
  },
  {
    title: 'Question',
    subtitle: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim, fugit!',
    steps: [
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae vel unde,voluptates adipisci nostrum quae tenetur harum corrupti est nemo!',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae vel unde,voluptates adipisci nostrum quae tenetur harum corrupti est nemo!',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae vel unde,voluptates adipisci nostrum quae tenetur harum corrupti est nemo!',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae vel unde,voluptates adipisci nostrum quae tenetur harum corrupti est nemo!',
    ],
  },
  {
    title: 'Question',
    subtitle: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim, fugit!',
    steps: [
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae vel unde,voluptates adipisci nostrum quae tenetur harum corrupti est nemo!',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae vel unde,voluptates adipisci nostrum quae tenetur harum corrupti est nemo!',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae vel unde,voluptates adipisci nostrum quae tenetur harum corrupti est nemo!',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae vel unde,voluptates adipisci nostrum quae tenetur harum corrupti est nemo!',
    ],
  },
  {
    title: 'Question',
    subtitle: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim, fugit!',
    steps: [
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae vel unde,voluptates adipisci nostrum quae tenetur harum corrupti est nemo!',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae vel unde,voluptates adipisci nostrum quae tenetur harum corrupti est nemo!',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae vel unde,voluptates adipisci nostrum quae tenetur harum corrupti est nemo!',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae vel unde,voluptates adipisci nostrum quae tenetur harum corrupti est nemo!',
    ],
  },
  {
    title: 'Question',
    subtitle: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim, fugit!',
    steps: [
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae vel unde,voluptates adipisci nostrum quae tenetur harum corrupti est nemo!',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae vel unde,voluptates adipisci nostrum quae tenetur harum corrupti est nemo!',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae vel unde,voluptates adipisci nostrum quae tenetur harum corrupti est nemo!',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae vel unde,voluptates adipisci nostrum quae tenetur harum corrupti est nemo!',
    ],
  },
  {
    title: 'Question',
    subtitle: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim, fugit!',
    steps: [
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae vel unde,voluptates adipisci nostrum quae tenetur harum corrupti est nemo!',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae vel unde,voluptates adipisci nostrum quae tenetur harum corrupti est nemo!',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae vel unde,voluptates adipisci nostrum quae tenetur harum corrupti est nemo!',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae vel unde,voluptates adipisci nostrum quae tenetur harum corrupti est nemo!',
    ],
  },
];

export function Info() {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h2>Актуальні питання</h2>
        <span>Наші військові юристи найчастіше отримують наступні питання від клієнтів:</span>
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
              </div>
            </AccordionDetails>
          </Accordion>
        ))}
      </div>
    </div>
  );
}
