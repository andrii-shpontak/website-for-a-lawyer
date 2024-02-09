import * as Yup from 'yup';

import { Formik } from 'formik';
import { MyForm } from './components/MyForm';
import styles from './PhoneForm.module.scss';
import { useHandlers } from './hooks/useHanglers';

const initialFormValues = {
  name: '',
  phone: '',
  message: '',
};

const formValidationScheme = Yup.object({
  name: Yup.string()
    .min(2, 'Мінімум 2 літери')
    .max(30, 'Максимум 30 літер')
    .required("Поле 'Ім'я' є обов'язковим"),
  phone: Yup.string()
    .min(15, 'Потрібно 9 цифр, наприклад: 12 345 67 89')
    .max(15, 'Потрібно 9 цифр, наприклад: 12 345 67 89')
    .required("Номер телефону є обов'язковим"),
});

export function PhoneForm() {
  const { handleSubmit, requestStatus } = useHandlers();
  const handleDownloadClick = () => {
    window.open(
      'https://drive.google.com/file/d/14DarPIJjNSdaln7EBaUgpZEIRnHP91yI/view?usp=sharing',
      '_blank',
    );
  };
  return (
    <div id="form" className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.title}>
          <h2>
            Для того, щоб отримати консультацію юриста, напишіть нам в один із зручних для вас
            месенджерів
          </h2>
          <p>
            Для отримання консультації введіть Ваше ім'я, номер телефону та ваш запит і натисніть
            кнопку "Відправити"
          </p>
        </div>
        <Formik
          initialValues={initialFormValues}
          validationSchema={formValidationScheme}
          validateOnBlur={false}
          validateOnChange={false}
          onSubmit={handleSubmit}>
          <MyForm status={requestStatus} />
        </Formik>
        <button onClick={handleDownloadClick}>Завантажити файл</button>
      </div>
    </div>
  );
}
