import { ErrorMessage, Field, Form, useField, useFormikContext } from 'formik';

import InputMask from 'react-input-mask';
import { ReactComponent as UaFlag } from '../../../../../../assets/images/icons/ua.svg';
import styles from './MyForm.module.scss';

type TPhoneForm = {
  name: string;
  phone: string;
};

const PhoneInput = ({ ...props }) => {
  const [field] = useField(props.name);
  return (
    <>
      <InputMask {...field} mask="-(99)-999-99-99" maskChar="" placeholder="(12)-345-67-89" />
    </>
  );
};

export function MyForm({ status }: { status: string }) {
  const { errors } = useFormikContext<TPhoneForm>();
  console.log(status);

  return (
    <Form noValidate className={styles.form}>
      <div className={styles.nameFieldWrapper}>
        <Field type="text" name="name" placeholder="Ім'я" />
      </div>
      <div className={styles.phoneFieldWrapper}>
        <UaFlag className={styles.flag} />
        <span>+380</span>
        <PhoneInput name="phone" />
      </div>
      {(errors.name || errors.phone) && (
        <div className={styles.errors}>
          <ErrorMessage name="name" component="div" />
          <ErrorMessage name="phone" component="div" />
        </div>
      )}
      <button type="submit">Відправити</button>
    </Form>
  );
}
