import { Language, Translation } from '../types';

export const translations: Record<Language, Translation> = {
  en: {
    nav: {
      work: 'Work',
      writing: 'Writing',
      experience: 'Experience',
    },
    home: {
      byline: 'Saidjamol Ikramov · Senior Software Engineer',
      location: 'Tashkent · UTC+5',
      headline:
        'I build backend systems where a dropped event costs someone money: call routing, payments, trading.',
      intro:
        'Eight years of backend work across telephony, fintech and SaaS: payment infrastructure at Multicard, a trading engine at Jett, a dealership ERP at Indewal, and now call routing, ping/post and AI voice agents at Equate Media. Full-stack by title, backend by habit.',
      certification: 'aws certified developer, associate',
      sections: {
        pinned: 'Pinned',
        writing: 'Writing',
        experience: 'Experience',
        education: 'Education and certification',
        contact: 'Contact',
      },
      badges: {
        private: 'Private',
        caseStudy: 'Case study',
      },
      pinned: [
        {
          title: 'Ping/post and call routing',
          description:
            'Equate Media. Leads offered to buyers in real time and posted to the winner. 10,000+ calls a day, qualified by AI agents or sent to hundreds of dispatchers monitored live.',
          meta: '2023 to now',
          linkLabel: 'Case study',
        },
        {
          title: 'Real-time order execution engine',
          description:
            'Jett. Stock trades in ACID-compliant transactions with latency under 100 ms, on a microservices backend that held 99.95% uptime.',
          meta: '2020 to 2022',
          linkLabel: 'Case study',
        },
        {
          title: 'Credit scoring API and payments',
          description:
            'Multicard. Real-time creditworthiness checks for 50+ business clients, 20% fewer loan defaults, and payment microservices behind an Istio mesh.',
          meta: '2018 to 2020',
        },
        {
          title: 'Answer, match and transfer in one call',
          description:
            'Side project. A voice agent qualifies the caller, matches by service and postal code, and transfers live. Billing from a prepaid wallet.',
          meta: 'Personal project',
          linkLabel: 'Case study',
        },
      ],
      writing: {
        all: 'All posts',
        types: {
          'case-studies': 'case study',
          architecture: 'architecture',
          articles: 'article',
        },
      },
      experience: [
        { title: 'Full-stack Software Engineer', org: 'at Equate Media', meta: '2023 to now · Las Vegas, remote' },
        { title: 'Full-stack Software Engineer', org: 'at Indewal', meta: '2022 to 2023 · Amsterdam' },
        { title: 'Software Engineer', org: 'at Jett', meta: '2020 to 2022 · Tashkent' },
        { title: 'Software Engineer', org: 'at Multicard', meta: '2018 to 2020 · Tashkent' },
      ],
      education: [
        { title: 'AWS Certified Developer, Associate', meta: '2026 · Amazon Web Services' },
        { title: 'Full Stack Web Development', meta: '2016 to 2017 · Coding Dojo, San Jose' },
        { title: 'Management and Information Systems', meta: '2012 to 2015 · Lincoln University, Oakland' },
      ],
    },
    footer: {
      copyright: '© 2026 Saidjamol Ikramov',
    },
  },
  ru: {
    nav: {
      work: 'Проекты',
      writing: 'Блог',
      experience: 'Опыт',
    },
    home: {
      byline: 'Саиджамол Икрамов · Senior Software Engineer',
      location: 'Ташкент · UTC+5',
      headline:
        'Я строю бэкенд-системы, где потерянное событие стоит кому-то денег: маршрутизация звонков, платежи, трейдинг.',
      intro:
        'Восемь лет бэкенд-разработки в телефонии, финтехе и SaaS: платёжная инфраструктура в Multicard, торговый движок в Jett, ERP для автодилера в Indewal, а сейчас маршрутизация звонков, ping/post и голосовые ИИ-агенты в Equate Media. Full-stack по должности, бэкенд по привычке.',
      certification: 'aws certified developer, associate',
      sections: {
        pinned: 'Закреплено',
        writing: 'Блог',
        experience: 'Опыт',
        education: 'Образование и сертификация',
        contact: 'Контакты',
      },
      badges: {
        private: 'Закрытый код',
        caseStudy: 'Кейс',
      },
      pinned: [
        {
          title: 'Ping/post и маршрутизация звонков',
          description:
            'Equate Media. Лиды в реальном времени предлагаются покупателям и передаются победителю. Более 10 000 звонков в день: их квалифицируют ИИ-агенты или принимают сотни диспетчеров, за работой которых следят в реальном времени.',
          meta: '2023 — сейчас',
          linkLabel: 'Кейс',
        },
        {
          title: 'Движок исполнения ордеров в реальном времени',
          description:
            'Jett. Биржевые сделки в ACID-транзакциях с задержкой менее 100 мс на микросервисном бэкенде с аптаймом 99,95%.',
          meta: '2020 — 2022',
          linkLabel: 'Кейс',
        },
        {
          title: 'API кредитного скоринга и платежи',
          description:
            'Multicard. Проверка кредитоспособности в реальном времени для 50+ бизнес-клиентов, на 20% меньше дефолтов по кредитам и платёжные микросервисы за сервисной сеткой Istio.',
          meta: '2018 — 2020',
        },
        {
          title: 'Ответить, подобрать и перевести за один звонок',
          description:
            'Личный проект. Голосовой агент квалифицирует звонящего, подбирает исполнителя по услуге и почтовому индексу и переводит звонок вживую. Оплата с предоплаченного кошелька.',
          meta: 'Личный проект',
          linkLabel: 'Кейс',
        },
      ],
      writing: {
        all: 'Все записи',
        types: {
          'case-studies': 'кейс',
          architecture: 'архитектура',
          articles: 'статья',
        },
      },
      experience: [
        { title: 'Full-stack инженер-программист', org: 'в Equate Media', meta: '2023 — сейчас · Лас-Вегас, удалённо' },
        { title: 'Full-stack инженер-программист', org: 'в Indewal', meta: '2022 — 2023 · Амстердам' },
        { title: 'Инженер-программист', org: 'в Jett', meta: '2020 — 2022 · Ташкент' },
        { title: 'Инженер-программист', org: 'в Multicard', meta: '2018 — 2020 · Ташкент' },
      ],
      education: [
        { title: 'AWS Certified Developer, Associate', meta: '2026 · Amazon Web Services' },
        { title: 'Full Stack Web Development', meta: '2016 — 2017 · Coding Dojo, Сан-Хосе' },
        { title: 'Management and Information Systems', meta: '2012 — 2015 · Lincoln University, Окленд' },
      ],
    },
    footer: {
      copyright: '© 2026 Саиджамол Икрамов',
    },
  },
  uz: {
    nav: {
      work: 'Loyihalar',
      writing: 'Blog',
      experience: 'Tajriba',
    },
    home: {
      byline: 'Saidjamol Ikramov · Senior Software Engineer',
      location: 'Toshkent · UTC+5',
      headline:
        'Men yoʻqolgan bitta hodisa kimgadir pulga tushadigan backend tizimlarini quraman: qoʻngʻiroqlarni yoʻnaltirish, toʻlovlar, treyding.',
      intro:
        'Telefoniya, fintex va SaaS sohalarida sakkiz yillik backend tajribasi: Multicardda toʻlov infratuzilmasi, Jettda savdo dvigateli, Indewalda avtodiler uchun ERP, hozir esa Equate Mediada qoʻngʻiroqlarni yoʻnaltirish, ping/post va ovozli AI agentlar. Lavozim boʻyicha full-stack, odat boʻyicha backend.',
      certification: 'aws certified developer, associate',
      sections: {
        pinned: 'Tanlangan',
        writing: 'Blog',
        experience: 'Tajriba',
        education: 'Taʼlim va sertifikat',
        contact: 'Aloqa',
      },
      badges: {
        private: 'Yopiq kod',
        caseStudy: 'Keys',
      },
      pinned: [
        {
          title: 'Ping/post va qoʻngʻiroqlarni yoʻnaltirish',
          description:
            'Equate Media. Lidlar real vaqtda xaridorlarga taklif qilinadi va gʻolibga uzatiladi. Kuniga 10 000 dan ortiq qoʻngʻiroq: ularni AI agentlar saralaydi yoki jonli kuzatuv ostidagi yuzlab dispetcherlar qabul qiladi.',
          meta: '2023 — hozir',
          linkLabel: 'Keys',
        },
        {
          title: 'Real vaqtda orderlarni bajarish dvigateli',
          description:
            'Jett. Birja bitimlari ACID tranzaksiyalarida, 100 ms dan kam kechikish bilan, 99,95% uptime koʻrsatgan mikroservis backendida bajariladi.',
          meta: '2020 — 2022',
          linkLabel: 'Keys',
        },
        {
          title: 'Kredit skoring API va toʻlovlar',
          description:
            'Multicard. 50 dan ortiq biznes mijoz uchun real vaqtda kreditga layoqatlilikni tekshirish, kredit defoltlari 20% ga kamaygan, toʻlov mikroservislari Istio service mesh ortida.',
          meta: '2018 — 2020',
        },
        {
          title: 'Bitta qoʻngʻiroqda: javob, moslash va ulash',
          description:
            'Shaxsiy loyiha. Ovozli agent qoʻngʻiroq qiluvchini saralaydi, xizmat turi va pochta indeksi boʻyicha ijrochini topadi va qoʻngʻiroqni jonli ulaydi. Toʻlov oldindan toʻldirilgan hamyondan.',
          meta: 'Shaxsiy loyiha',
          linkLabel: 'Keys',
        },
      ],
      writing: {
        all: 'Barcha yozuvlar',
        types: {
          'case-studies': 'keys',
          architecture: 'arxitektura',
          articles: 'maqola',
        },
      },
      experience: [
        { title: 'Full-stack dasturiy taʼminot muhandisi', org: '· Equate Media', meta: '2023 — hozir · Las-Vegas, masofadan' },
        { title: 'Full-stack dasturiy taʼminot muhandisi', org: '· Indewal', meta: '2022 — 2023 · Amsterdam' },
        { title: 'Dasturiy taʼminot muhandisi', org: '· Jett', meta: '2020 — 2022 · Toshkent' },
        { title: 'Dasturiy taʼminot muhandisi', org: '· Multicard', meta: '2018 — 2020 · Toshkent' },
      ],
      education: [
        { title: 'AWS Certified Developer, Associate', meta: '2026 · Amazon Web Services' },
        { title: 'Full Stack Web Development', meta: '2016 — 2017 · Coding Dojo, San-Xose' },
        { title: 'Management and Information Systems', meta: '2012 — 2015 · Lincoln University, Oklend' },
      ],
    },
    footer: {
      copyright: '© 2026 Saidjamol Ikramov',
    },
  },
};
