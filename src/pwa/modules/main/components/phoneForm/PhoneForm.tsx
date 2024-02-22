import * as Yup from 'yup';

import { ErrorMessage } from './components/ErrorMessage/ErrorMessage';
import { Formik } from 'formik';
import { Loader } from './components/Loader/Loader';
import { MyForm } from './components/MyForm/MyForm';
import { SuccessMessage } from './components/SuccessMessage/SuccessMessage';
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

  return (
    <div id="form" className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.title}>
          <h2>Юрист надає консультації на платній основі та за попереднім записом!</h2>
          <p>
            Для отримання консультації введіть Ваше ім'я, номер телефону та ваш запит і натисніть
            кнопку "Відправити"
          </p>
        </div>
        <div className={styles.formWrapper}>
          {requestStatus === 'idle' && (
            <Formik
              initialValues={initialFormValues}
              validationSchema={formValidationScheme}
              validateOnBlur={false}
              validateOnChange={false}
              onSubmit={handleSubmit}>
              <MyForm />
            </Formik>
          )}
          {requestStatus === 'pending' && <Loader />}
          {requestStatus === 'fail' && <ErrorMessage />}
          {requestStatus === 'success' && <SuccessMessage />}
        </div>
      </div>
    </div>
  );
}
