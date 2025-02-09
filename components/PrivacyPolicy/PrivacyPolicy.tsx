'use client';
import React from 'react';
import styles from './privacyPolicy.module.scss';
import H1SideBoxes from '../Ui/Headers/H1SideBoxes/H1SideBoxes';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className={styles.privacyPolicy}>
      <div className={styles.contentBox}>
        <H1SideBoxes title="Polityka Prywatności" />
        <h2>Wprowadzenie</h2>
        <p>
          Twoja prywatność jest dla nas ważna. Niniejsza polityka prywatności
          wyjaśnia, jakie dane osobowe mogą być gromadzone podczas korzystania z
          naszej strony internetowej i w jaki sposób są one wykorzystywane oraz
          chronione.
        </p>
        <h2>Gromadzenie Danych</h2>
        <p>
          Nie zbieramy żadnych danych osobowych od użytkowników odwiedzających
          naszą stronę.
        </p>
        <h2>Pliki Cookies</h2>
        <p>
          Nasza strona internetowa może używać plików cookies do celów
          technicznych, takich jak utrzymanie sesji użytkownika, poprawa
          funkcjonalności strony, czy analizowanie ruchu na stronie przy pomocy
          narzędzi analitycznych.
        </p>
        <h2>Pliki Cookies Stron Trzecich</h2>
        <p>
          Nasza strona może korzystać z zewnętrznych usług, takich jak Google
          Analytics, które mogą również używać plików cookies. Informacje
          zbierane przez te pliki cookies są anonimowe i nie pozwalają na
          identyfikację użytkowników.
        </p>
        <h2>Twoje Prawa</h2>
        <p>
          Ponieważ nie zbieramy danych osobowych, nie przechowujemy żadnych
          informacji, które mogłyby zostać udostępnione, zmienione lub usunięte
          na Twoje żądanie.
        </p>
        <h2>Zmiany w Polityce Prywatności</h2>
        <p>
          Zastrzegamy sobie prawo do wprowadzania zmian w niniejszej polityce
          prywatności. Wszelkie zmiany będą publikowane na tej stronie.
          Zachęcamy do regularnego sprawdzania naszej polityki prywatności, aby
          być na bieżąco z wszelkimi aktualizacjami.
        </p>
        <h2>Kontakt</h2>
        <p>
          Jeśli masz jakiekolwiek pytania dotyczące naszej polityki prywatności,
          skontaktuj się z nami pod adresem email: bednarski.webdev@gmail.com.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
