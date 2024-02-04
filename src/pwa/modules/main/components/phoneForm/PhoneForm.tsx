import * as Yup from 'yup';

import { Formik } from 'formik';
import { MyForm } from './components/MyForm';
import styles from './PhoneForm.module.scss';
import { useHandlers } from './hooks/useHanglers';

const initialFormValues = {
  name: '',
  phone: '',
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
  return (
    <div id="form" className={styles.container}>
      <div className={styles.title}>
        <h2>Отримати консультацію військового юриста по телефону</h2>
        <p>
          Для отримання консультації введіть Ваше ім'я та номер телефону далі натисніть кнопку
          "Відправити"
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
    </div>
  );
}
