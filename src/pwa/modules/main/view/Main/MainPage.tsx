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
    <div>
      <Header />
      <Contacts />
      <About />
      <Company />
      <Services />
      <Consultation />
      <Info />
      <PhoneForm />
      <Footer />
    </div>
  );
}
