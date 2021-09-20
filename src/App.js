import ContactForm from './components/ContactForm/ContactForm.jsx';
import ContactList from './components/ContactList/ContactList.jsx';
import Filter from './components/Filter/Filter.jsx';
import Contact from './components/ContactList/Contact.jsx';
import s from './App.module.css';

export default function App() {
  return (
    <>
      <section className={s.section}>
        <ContactForm />
        <Contact />
        <Filter />
        <ContactList />
      </section>
    </>
  );
}
