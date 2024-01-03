import styles from './page.module.scss';
import ContactForm from '@/components/Organisms/ContactForm/ContactForm';

export default function Home() {
  return (
    <main className={styles.main}>
      <ContactForm />
    </main>
  );
}
