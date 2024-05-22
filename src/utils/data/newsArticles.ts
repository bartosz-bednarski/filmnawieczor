export type ArticleSection = {
  title: string;
  image: string;
  content: { paragraph: string }[];
};
export type ArticleContent = ArticleSection[];
export type CoverContent = {
  coverTitle: string;
  coverContent: { paragraph: string }[];
  coverImage: string;
};

export type NewsArticles = {
  id: string;
  url: string;
  title: string;
  type: "list-article";

  coverContent: CoverContent;
  articleContent: ArticleContent;
}[];

export const NEWS_ARTICLES: NewsArticles = [
  {
    id: "art1",
    url: "5-filmow-wojennych-z-lat-90-1",
    title: "5 filmów wojennych z lat 90, które warto zobaczyć",
    type: "list-article",

    coverContent: {
      coverTitle: "5 filmów wojennych z lat 90, które warto zobaczyć",
      coverContent: [
        {
          paragraph:
            "Pamiętacie te czasy gdy w salonie całą rodziną przy obiedzie oglądało się stare filmy z lat 90?",
        },
        {
          paragraph:
            "Dzisiaj przedstawimy wam 5 filmów wojennych z XX wieku, które naszym zdaniem warto zobaczyć.",
        },
      ],
      coverImage: "5-filmow-wojennych-z-lat-90.webp",
    },
    articleContent: [
      {
        title: "1. Wielka ucieczka",
        image: "wielka-ucieczka.webp",
        content: [
          {
            paragraph:
              'To klasyczne kino wyprodukowane w 1963 roku i wyreżyserowane przez Johna Sturgesa opowiada o ucieczce grupy alianckich jeńców wojennych z niemieckiego obozu jenieckiego Stalag Luft III położonego w zachodniej Polsce, podczas II wojny światowej.Film jest oparty na prawdziwych wydarzeniach i książce autorstwa Paula Brickhilla. Fabuła skupia się na skomplikowanym planie ucieczki, który obejmuje wykopanie trzech tuneli ("Tom", "Dick" i "Harry"), zdobycie fałszywych dokumentów i przemycenie cywilnych ubrań. Jeńcy, będący specjalistami w różnych dziedzinach, łączą siły, aby zrealizować ten śmiały plan.',
          },
          {
            paragraph:
              "Film ten cechuje się ciekawym przedstawieniem codziennego życia obozowego żołnierzy alianckich, gdzie możemy znaleźć zarówno  wątki dramatyczne jak i momenty humorystyczne.Pomimo iż Wielka ucieczka ma już 61 lat, dalej pozostaje bardzo chętnie oglądanym filmem z gatunku wojennych, który zdobył uznanie zarówno krytyków jak i publiczności zyskując tytuł filmu kultowego, który każdy choć raz powinien zobaczyć.",
          },
        ],
      },
      {
        title: "2. Patton",
        image: "patton.webp",
        content: [
          {
            paragraph: `Akcja filmu skupia się wokół postaci generała armii USA George'a S. Pattona, który uznawany jest za jednego z najlepszych generałów II wojny światowej.  Scenariusz został napisany przez Francisa Forda Coppolę i Edmunda H. Northa, oparty na biografiach "Patton: Ordeal and Triumph" autorstwa Ladislasa Farago oraz "A Soldier's Story" generała Omara N. Bradleya.`,
          },
          {
            paragraph:
              "Fabuła przedstawia kluczowe momenty kariery generała czyli: walki w kampanii północnoafrykańskiej z Africa Corps, lądowanie na Sycylii, operacja Fortitude oraz walki w Europie od lądowania w Normandii aż do końca wojny.",
          },
          {
            paragraph: `Co czyni ten film wyjątkowym jest wspaniała gra aktorska George'a C. Scotta, który wcielił się idealnie w postać Pattona, bardzo dobrze odwzorowując jego charakter i zachowania. W filmie zobaczymy także takie postacie historyczne jak generał Omar N. Bradley, marszałek Bernard Law Montgomery czy feldmarszałek Erwin Rommel i poznamy jaki stosunek miał do nich Patton. Zachęcamy do obejrzenia tego hitu kinowego, który pozwoli wam lepiej poznać postać Georga S. Pattona, który naszym zdaniem był postacią z charakterem i duszą do walki i właśnie taki został przedstawiony w tym filmie.`,
          },
        ],
      },
      {
        title: "3. Bitwa o Anglię",
        image: "bitwa-o-anglie.webp",
        content: [
          {
            paragraph: `Film przedstawia jedną z kluczowych kampanii II wojny światowej, w której niemieckie Luftwaffe próbowało zdominować brytyjską Royal Air Force (RAF) w 1940 roku, co miało być wstępem do niemieckiej inwazji na Wielką Brytanię. Produkcja powstała w roku 1969 pod reżyserią Guya Hamiltona.`,
          },
          {
            paragraph:
              "Co jest wyjątkowym w tym filmie to bardzo dobre połączenie wielowątkowości akcji, gdzie z jednej strony możemy zobaczyć heroizm i determinację pilotów alianckich, ich zmagania prywatne i emocjonalne oraz jak duży wpływ miał wywiad i praca sztabu brytyjskiego na planowanie i wyniki bitew. Ujrzymy także jak zmieniał się stosunek niemieckich pilotów Luftwaffe w tych walkach wraz z upływem czasu.",
          },
          {
            paragraph: `Sceny walk powietrznych kręcono z użyciem prawdziwych myśliwców  Spitfire, Hurricane oraz Messerschmitt co dodaje wspaniały klimat realizmu. Film pokazuję również jak dużą rolę odegrali piloci alianccy jak Polacy, Czesi, Słowacy, Kanadyjczycy i inni w kluczowych walkach o Anglię. `,
          },
          {
            paragraph: `Podsumowując - jest to dzieło kinowe uważane zarówno przez krytyków jak i widzów za jeden z najlepszych filmów wojennych oferujący realistyczne sceny batalistyczne oraz rzetelne informacje historyczne.`,
          },
        ],
      },
      {
        title: "4. Lista Schindlera",
        image: "lista-schindlera.webp",
        content: [
          {
            paragraph: `Film ten został wyreżyserowany przez Stevena Spielberga i miał swoją premierę w 1993 roku. Akcja  rozgrywa się w czasie II wojny światowej w Polsce i przedstawia historię Oskara Schindlera - niemieckiego przedsiębiorcy prowadzącego fabrykę Emalia w Krakowie.`,
          },
          {
            paragraph: `Film bardzo dobrze przedstawia przemianę głównego bohatera, który początkowo wykorzystuje Żydów jako tanią siłę roboczą do pracy w swojej fabryce, lecz z upływem czasu zauważa brutalność i okrucieństwo nazistowskiego reżimu i podejmuje decyzję uratowania od holokaustu jak największej liczby istnień.`,
          },
          {
            paragraph:
              "Oskar Schindler zagrany przez Liama Neesona jest postacią autentyczną, która podczas II wojny światowej uratowała od deportacji do niemieckich obozów zagłady ponad 1000 Żydów.",
          },
          {
            paragraph: `Film bardzo dobrze przedstawia realia jakie panowały w tamtych czasach i jest uznawany za bardzo dobry film edukacyjny przedstawiający jak okropną machinę śmierci stworzyli Niemcy i jak straszne było życie ludności Żydowskiej w tamtych czasach. `,
          },
        ],
      },
      {
        title: "5. Złoto dla zuchwałych",
        image: "zloto-dla-zuchwalych.webp",
        content: [
          {
            paragraph: `Amerykański film wyreżyserowany przez Briana G. Huttona, będący połączeniem komedii i filmu wojennego. Akcja toczy się we Francji w roku 1944, gdzie główny bohater porucznik Kelly (grany przez Clinta Eastwooda) zbiera grupę żołnierzy w celu zdobycia niemieckiego złota znajdującego się za linią frontu. `,
          },

          {
            paragraph:
              "Film zdobył popularność i uznanie za świetne połączenie elementów komedii z poważnym tematem wojny, dostarczając rozrywki, a jednocześnie skłaniając do refleksji nad ludzką naturą i absurdem konfliktów zbrojnych.",
          },
          {
            paragraph: `Jest to film lekki, który nie wymaga ciągłego skupienia widza na akcji, cechujący się swoją niekonwencjonalną fabułą, dobrą grą aktorską i wykonaniem.`,
          },
        ],
      },
    ],
  },
];
