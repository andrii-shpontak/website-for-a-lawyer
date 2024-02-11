import './index.scss';

import {
  About,
  Company,
  Consultation,
  Contacts,
  Footer,
  Header,
  Info,
  PhoneForm,
  Services,
} from '../../components';

export function MainPage() {
  return (
    <>
      <Header />
      <main>
        <Contacts />
        <About />
        <Company />
        <Services />
        <Consultation />
        <Info />
        <PhoneForm />
      </main>
      <Footer />
    </>
  );
}
