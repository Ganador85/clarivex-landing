const LAST_UPDATED = '2026-03-19';

export const siteConfig = {
  name: 'Clarivex',
  /** Vienodas prekės ženklas JSON-LD / Organization schemoje */
  schemaBrandName: 'Clarivex AI',
  url: 'https://www.clarivex.ai',
  language: 'lt-LT',
  socialImage: 'https://www.clarivex.ai/og.svg',
  logo: 'https://www.clarivex.ai/logo.svg',
  supportEmail: 'info@clarivex.ai',
  appUrl: 'https://app.clarivex.ai/auth',
  sameAs: [
    'https://www.facebook.com/Clarivex/',
    'https://t.me/clarivex_support_bot',
  ],
  organizationDescription:
    'Clarivex AI – lietuvių kalbą suprantanti AI platforma verslui: socialiniai tinklai, atsakymai klientams, el. paštas, prekių katalogas su AI paruošimu ir svetainė su savu domenu. Lanksti kreditų sistema be abonemento.',
  softwareApplicationDescription:
    'Clarivex AI – lietuviškai suprantanti AI platforma verslui. Kuria socialinių tinklų turinį, atsako klientams, tvarko el. paštą, paruošia prekių katalogą atsakymams ir paieškai bei sukuria svetainę su savu domenu. Kreditų sistema be fiksuoto mėnesinio plano.',
};

/** Tas pats @id visuose puslapiuose – paieškos sistemos sujungia į vieną objektą */
export const SCHEMA_IDS = {
  organization: `${siteConfig.url}/#organization`,
  website: `${siteConfig.url}/#website`,
  softwareApplication: `${siteConfig.url}/#softwareapplication`,
};

/** Minimali „nuo 1 € už 1000 kr“ pasiūlymo struktūra (sutampa su DUK / kainos puslapiu) */
export function buildCreditStarterOffer(offerUrl) {
  return {
    '@type': 'Offer',
    url: offerUrl,
    priceCurrency: 'EUR',
    price: '1.00',
    availability: 'https://schema.org/InStock',
    description: 'Mokate tik už kreditus: nuo 1 € už 1000 kreditų (detalės puslapyje).',
    priceSpecification: {
      '@type': 'UnitPriceSpecification',
      priceCurrency: 'EUR',
      price: '1.00',
      unitText: '1000 kreditų',
    },
  };
}

export const resourceHubPath = '/resursai';

export const clusterDefinitions = [
  {
    id: 'solutions',
    label: 'Komerciniai landing puslapiai',
    shortLabel: 'Solutions',
    description: 'Puslapiai žmonėms, kurie jau ieško AI asistento, automatizavimo ar konkretaus Clarivex panaudojimo.',
  },
  {
    id: 'knowledge',
    label: 'Evergreen žinių bazė',
    shortLabel: 'Knowledge',
    description: 'Aiškūs atsakymai į klausimus, kuriuos gali cituoti Google ir AI sistemos.',
  },
  {
    id: 'comparisons',
    label: 'Use-case ir palyginimai',
    shortLabel: 'Comparisons',
    description: 'Turinys pagal realią problemą: kaip veikia AI workflow, ką rinktis ir kam tinka Clarivex.',
  },
  {
    id: 'authority',
    label: 'Brand ir reputacijos signalai',
    shortLabel: 'Authority',
    description: 'Puslapiai ir signalai, kurie padeda žiniasklaidai, partneriams ir AI sistemoms tiksliai suprasti Clarivex.',
  },
];

export const existingPageMetadata = [
  {
    path: '/',
    title: 'Clarivex AI – asistentas verslui ir kreditai',
    description:
      'AI platforma lietuvių kalba: postai, atsakymai klientams, el. paštas, prekių katalogas ir svetainė. Mokate tik už tai, ką naudojate — be abonemento. 1 000 kreditų startui.',
    priority: '1.0',
    changefreq: 'weekly',
  },
  {
    path: '/features',
    title: 'Clarivex AI funkcijos: paštas, social, balsas',
    description:
      'Viena platforma: AI paštas, Instagram ir Facebook, balso komandos, Telegram, dokumentai. Sužinokite galimybes ir integracijas.',
    priority: '0.9',
    changefreq: 'weekly',
  },
  {
    path: '/kaip-veikia',
    title: 'Kaip veikia Clarivex AI: žingsniai ir kreditai',
    description:
      'Nuo užklausos iki rezultato: kreditai, el. paštas, socialiniai tinklai ir Telegram vienoje vietoje. Trumpa veikimo eiga lietuviškai.',
    priority: '0.9',
    changefreq: 'weekly',
  },
  {
    path: '/nauda',
    title: 'Clarivex AI nauda: mažiau rutinos, daugiau laiko',
    description:
      'Greitesnė komunikacija ir mažiau rutinos: el. paštas, socialiniai tinklai lietuvių kalba vienoje Clarivex sistemoje. Sužinokite naudą smulkioms įmonėms.',
    priority: '0.8',
    changefreq: 'weekly',
  },
  {
    path: '/prekiu-katalogas',
    title: 'Prekių katalogas su AI: atsakymai klientams ir paieška',
    description:
      'Clarivex importuoja prekes iš Shopify, WooCommerce ar lentelės, aprašo jas AI, apžiūri nuotraukas ir paruošia paieškai. Klientas gauna konkretų atsakymą su kaina ir dydžiu.',
    priority: '0.9',
    changefreq: 'weekly',
  },
  {
    path: '/telegram',
    title: 'Clarivex Telegram botas – balsas ir priminimai',
    description:
      'Telegram ir Clarivex: balso komandos lietuviškai, užrašai, priminimai ir trumpi tekstai telefone. Greitas būdas valdyti AI, kai esate kelyje ar užimtas darbas.',
    priority: '0.8',
    changefreq: 'weekly',
  },
  {
    path: '/atsakiklis',
    title: 'Clarivex atsakiklis: DM ir Messenger 24/7',
    description:
      'Nepraraskite klientų dėl vėluojančių atsakymų. Clarivex automatiškai atsako į Messenger, Instagram DM ir komentarus lietuviškai — net kai ilsitės.',
    priority: '0.85',
    changefreq: 'weekly',
  },
  {
    path: '/svetainiu-kurejas',
    title: 'Clarivex AI svetainių kūrėjas – svetainė per kelias minutes',
    description:
      'Sukurkite profesionalią svetainę su AI: tekstai, nuotraukos, dizainas, galerijos ir redagavimas pokalbiu. Nemokamas talpinimas adresu jūsų-vardas.clarivex.ai.',
    priority: '0.85',
    changefreq: 'weekly',
  },
  {
    path: '/kainos',
    title: 'Clarivex AI kainos – kreditai be abonemento',
    description:
      'Clarivex kainos — kreditai be abonemento (apie 1 € už 1000 kr). Peržiūrėkite tipinių veiksmų sąnaudas ir patarimus, kaip mažinti išlaidas kasdienėje veikloje.',
    priority: '0.8',
    changefreq: 'weekly',
  },
  {
    path: '/duk',
    title: 'Clarivex DUK – kreditai, kalba, saugumas',
    description:
      'Atsakymai apie Clarivex AI: kreditų sistema, lietuvių kalba, Instagram ir Facebook, Telegram, mokėjimai ir BDAR. Peržiūrėkite visą DUK.',
    priority: '0.7',
    changefreq: 'weekly',
  },
  {
    path: '/statusas',
    title: 'Clarivex statusas: ar visos sistemos veikia?',
    description:
      'Clarivex sistemos statusas realiu laiku: platforma, AI, socialinių tinklų publikavimas, el. paštas ir Telegram. Incidentus praneškite palaikymui.',
    priority: '0.5',
    changefreq: 'daily',
  },
  {
    path: '/privatumas',
    title: 'Privatumo politika — Clarivex',
    description:
      'Privatumo politika Clarivex AI: duomenų rinkimas svetainėje ir paslaugose, slapukai, saugumas, BDAR teisės ir kaip kreiptis dėl prieigos ar ištrynimo.',
    priority: '0.3',
    changefreq: 'monthly',
  },
  {
    path: '/salygos',
    title: 'Naudojimosi sąlygos — Clarivex',
    description:
      'Clarivex AI naudojimosi sąlygos: paslaugų aprašymas, kreditų ir mokėjimų taisyklės, paskyros naudojimas, turinio politika, atsakomybė ir BDAR nuorodos.',
    priority: '0.3',
    changefreq: 'monthly',
  },
  {
    path: '/duomenu-istrynimas',
    title: 'Duomenų ištrynimas — Clarivex',
    description:
      'Duomenų ištrynimas Clarivex AI: BDAR prašymo forma, nagrinėjimo eiga ir terminai, kas ištrinama ir kaip susisiekti su palaikymu dėl paskyros duomenų.',
    priority: '0.3',
    changefreq: 'monthly',
  },
  {
    path: resourceHubPath,
    title: 'AI resursai verslui — Clarivex',
    description:
      'Clarivex AI resursų centras: straipsniai apie AI asistentą lietuviškai, socialinių tinklų ir pašto automatizavimą bei workflow smulkiems verslams.',
    priority: '0.9',
    changefreq: 'weekly',
  },
];

/** Primary marketing routes only (subset of existingPageMetadata). */
export function getPrimaryPageMeta(path) {
  return existingPageMetadata.find((p) => p.path === path) ?? null;
}

export const contentPages = [
  {
    path: '/ai-asistentas-lietuviu-kalba',
    cluster: 'solutions',
    type: 'solution',
    title: 'AI asistentas lietuvių kalba verslui',
    description: 'AI asistentas lietuvių kalba padeda kurti turinį, atsakyti į laiškus, valdyti priminimus ir atlikti kasdienius verslo veiksmus vienoje vietoje.',
    intro: 'Jei ieškote AI asistento lietuvių kalba, svarbiausia ne vien tekstų generavimas, o gebėjimas suprasti kontekstą ir atlikti realius veiksmus. Clarivex jungia pokalbius, automatizavimą, socialinius tinklus, el. paštą ir balso komandas į vieną darbo aplinką.',
    highlights: [
      'Veikia lietuviškai tekstu ir balsu.',
      'Vienoje vietoje sujungia el. paštą, socialinius tinklus ir priminimus.',
      'Tinka smulkiam verslui, freelanceriams ir komandoms.',
    ],
    sections: [
      {
        title: 'Ką turi gebėti geras AI asistentas verslui',
        paragraphs: [
          'Verslui svarbu, kad AI ne tik parašytų tekstą, bet ir padėtų užbaigti darbą: paruoštų atsakymą, suplanuotų publikaciją, išsaugotų idėją ar primintų apie užduotį.',
          'Dėl to Clarivex yra artimesnis darbo asistento platformai nei vien pokalbių langui. Viena užklausa gali pereiti į konkretų veiksmą, o ne likti tik idėjos lygyje.',
        ],
        bullets: [
          'Turinio kūrimas ir publikavimas',
          'AI laiškų juodraščiai ir atsakymai',
          'Balso komandos lietuviškai',
          'Atmintis, užrašai ir priminimai',
        ],
      },
      {
        title: 'Kam toks sprendimas naudingiausias',
        paragraphs: [
          'Didžiausią vertę gauna tie verslai, kuriems nuolat reikia daug mažų veiksmų: bendrauti su klientais, kurti postus, reaguoti į laiškus ir nepamesti vidinės informacijos.',
        ],
        bullets: [
          'E. parduotuvėms ir paslaugų verslams',
          'Marketingo specialistams ir agentūroms',
          'Freelanceriams, kurie nori vieno AI darbo centro',
        ],
      },
    ],
    faq: [
      {
        question: 'Ar AI asistentas gali dirbti tik lietuviškai?',
        answer: 'Taip, Clarivex skirtas darbui lietuvių kalba, bet prireikus gali padėti ir su kitomis kalbomis, pavyzdžiui vertimais ar daugiakalbiu turiniu.',
      },
      {
        question: 'Kuo Clarivex skiriasi nuo bendro AI chat įrankio?',
        answer: 'Bendras AI chat dažniausiai tik atsako tekstu. Clarivex papildomai turi workflow sluoksnį: socialinių tinklų publikavimą, el. paštą, Telegram, priminimus ir kitus veiksmus vienoje sistemoje.',
      },
    ],
    relatedPaths: ['/features', '/ai-el-pastui', '/telegram-ai-botas', '/resursai'],
  },
  {
    path: '/ai-socialiniu-tinklu-valdymui',
    cluster: 'solutions',
    type: 'solution',
    title: 'AI socialinių tinklų valdymui ir publikavimui',
    description: 'Clarivex padeda planuoti, generuoti ir publikuoti socialinių tinklų turinį su AI: nuo idėjos iki paruošto įrašo Instagram ir Facebook.',
    intro: 'AI socialinių tinklų valdymui vertas dėmesio tada, kai sutrumpina visą kelią nuo idėjos iki publikacijos. Clarivex leidžia generuoti postų tekstus, vizualus, suplanuoti laiką ir iš to paties darbo lango publikuoti į skirtingus kanalus.',
    highlights: [
      'AI padeda su idėjomis, tekstu ir vizualais.',
      'Galima planuoti ir publikuoti į Instagram bei Facebook.',
      'Tinka ir pavieniams verslams, ir kelių klientų agentūroms.',
    ],
    sections: [
      {
        title: 'Kur AI sutaupo daugiausia laiko',
        paragraphs: [
          'Didžiausias sutaupymas ateina ne iš vieno gero posto, o iš nuoseklumo. Kai AI padeda kasdienėje planavimo ir publikavimo rutinoje, komanda mažiau stringa ties pradžia.',
        ],
        bullets: [
          'Postų idėjos pagal kampaniją ar sezoną',
          'Antraštės, captions ir hashtagų siūlymai',
          'Karuselių ar reels temų ruošimas',
          'Turinio kalendorius ir publikavimo ritmas',
        ],
      },
      {
        title: 'Ką verta matuoti',
        paragraphs: [
          'Jei tikslas yra ne turėti daugiau tekstų, o daugiau rezultato, reikėtų sekti kiek sutaupoma laiko ir kiek greičiau turinys pereina nuo juodraščio iki publikacijos.',
        ],
        bullets: [
          'Kiek postų paruošiama per savaitę',
          'Kiek trumpėja publikavimo ciklas',
          'Kiek mažiau rankinio derinimo reikia komandai',
        ],
      },
    ],
    faq: [
      {
        question: 'Ar Clarivex tinka Instagram ir Facebook valdymui?',
        answer: 'Taip, platforma orientuota į realų darbą su Instagram ir Facebook: teksto ruošimą, vizualų generavimą, planavimą ir publikavimą.',
      },
      {
        question: 'Ar AI gali padėti laikytis prekės ženklo tono?',
        answer: 'Taip, jei aiškiai aprašysite savo toną, produktą ir auditoriją, Clarivex gali padėti išlaikyti nuoseklų komunikacijos stilių tarp skirtingų postų.',
      },
    ],
    relatedPaths: ['/features', '/kaip-suplanuoti-instagram-postus-su-ai', '/workflow-ai-socialiniams-tinklams-ir-pardavimams', '/resursai'],
  },
  {
    path: '/ai-el-pastui',
    cluster: 'solutions',
    type: 'solution',
    title: 'AI el. paštui, atsakymams ir laiškų rutinai',
    description: 'AI el. paštui padeda greičiau ruošti atsakymus, tvarkyti korespondenciją ir sumažinti pasikartojančių laiškų rutiną lietuvių kalba.',
    intro: 'AI el. paštui vertingiausias ten, kur komanda kasdien kartoja tuos pačius veiksmus: atrašo klientams, tikslina informaciją, ruošia follow-up ar vidinius juodraščius. Clarivex leidžia tas užduotis perkelti į vieną AI darbo eigą.',
    highlights: [
      'Padeda greičiau ruošti atsakymus ir follow-up laiškus.',
      'Tinka klientų aptarnavimui, pardavimams ir vidinei komunikacijai.',
      'Svarbiausi laiškai lieka žmogaus kontrolėje, o AI sutrumpina ruošimą.',
    ],
    sections: [
      {
        title: 'Kaip AI padeda su laiškais',
        paragraphs: [
          'Dažniausiai AI nereikia atiduoti viso siuntimo proceso. Didesnė vertė atsiranda tada, kai jis paruošia geresnį pirmą juodraštį ir sutrumpina laiką iki išsiuntimo.',
        ],
        bullets: [
          'Atsakymo juodraštis pagal gautą laišką',
          'Trumpesnis ar oficialesnis tono variantas',
          'Follow-up laiškai po skambučio ar pasiūlymo',
          'Dažnų klausimų atsakymų ruošimas',
        ],
      },
      {
        title: 'Kada tai veikia geriausiai',
        paragraphs: [
          'Didžiausia nauda yra tada, kai komanda dirba su panašaus pobūdžio laiškais ir gali AI pateikti aiškią struktūrą: kas yra klientas, koks tonas, kokie pasiūlymai ir kokios ribos.',
        ],
        bullets: [
          'Užklausų atsakymai',
          'Pasiūlymų siuntimas',
          'Paslaugų pristatymas',
          'Pirminis klientų aptarnavimas',
        ],
      },
    ],
    faq: [
      {
        question: 'Ar AI gali išsiųsti laišką už mane?',
        answer: 'Clarivex gali padėti paruošti ir valdyti laiškų eigą, tačiau kritiniams laiškams rekomenduojama palikti žmogaus patvirtinimą prieš išsiunčiant.',
      },
      {
        question: 'Ar saugu prijungti el. paštą prie AI platformos?',
        answer: 'Taip, jei naudojamas saugus prisijungimas ir ribotos prieigos principas. Clarivex puslapiuose aiškiai aprašoma, kaip jungiamas paštas ir kokie duomenys naudojami.',
      },
    ],
    relatedPaths: ['/kainos', '/kaip-ai-padeda-atsakyti-i-el-laiskus-lietuviskai', '/kaip-saugiai-prijungti-el-pasta-prie-ai', '/resursai'],
  },
  {
    path: '/ai-verslui-lietuvoje',
    cluster: 'solutions',
    type: 'solution',
    title: 'AI verslui Lietuvoje: kur realiai atsiperka',
    description: 'AI verslui Lietuvoje labiausiai atsiperka ten, kur mažina rutiną: socialiniai tinklai, el. paštas, klientų aptarnavimas ir pasikartojančios operacijos.',
    intro: 'AI verslui Lietuvoje dažnai vertinamas per bendrą hype, bet reali grąža ateina iš konkrečių procesų. Clarivex orientuojasi į tas vietas, kur smulkus ir vidutinis verslas jau šiandien gali sutaupyti laiką ir greičiau reaguoti į klientus.',
    highlights: [
      'Padeda mažoms komandoms padaryti daugiau be papildomo etato.',
      'Naudinga ten, kur daug pasikartojančios komunikacijos.',
      'Svarbiausia vertinti ne hype, o sutaupytas valandas ir greitį.',
    ],
    sections: [
      {
        title: 'Kur AI duoda greičiausią efektą',
        paragraphs: [
          'Smulkiame versle AI greičiausiai atsiperka procesuose, kuriems nereikia sudėtingų IT integracijų ir kuriuos galima pradėti naudoti greitai.',
        ],
        bullets: [
          'Socialinių tinklų planavimas',
          'Klientų atsakymų ruošimas',
          'Pasiūlymų ir dokumentų juodraščiai',
          'Vidiniai priminimai ir žinių kaupimas',
        ],
      },
      {
        title: 'Kaip pradėti be didelės rizikos',
        paragraphs: [
          'Geriau pradėti nuo vieno komandos skausmo taško ir jį matuoti. Kai procesas aiškus, daug lengviau suprasti, ar AI tikrai padeda ir kokį rezultatą duoda.',
        ],
        bullets: [
          'Pasirinkti vieną procesą pirmam mėnesiui',
          'Matuoti laiką iki rezultato',
          'Palyginti rankinį ir AI padedamą darbą',
        ],
      },
    ],
    faq: [
      {
        question: 'Ar AI tinka tik didelėms įmonėms?',
        answer: 'Ne, dažnai kaip tik mažoms komandoms AI padeda labiausiai, nes leidžia be papildomo žmogaus greičiau atlikti pasikartojantį darbą.',
      },
      {
        question: 'Nuo ko pradėti diegiant AI versle?',
        answer: 'Pradėkite nuo vieno aiškiai apibrėžto proceso, pavyzdžiui, socialinių tinklų ar el. pašto, ir tik tada plėskite naudojimą į kitas sritis.',
      },
    ],
    relatedPaths: ['/nauda', '/geriausi-ai-irankiai-smulkiam-verslui-lietuvoje', '/clarivex-ar-chatgpt-smulkiam-verslui', '/resursai'],
  },
  {
    path: '/naudojimo-scenarijai',
    cluster: 'solutions',
    type: 'solution',
    title: 'AI naudojimo scenarijai verslui',
    description:
      'Tipiniai Clarivex AI naudojimo atvejai smulkioms įmonėms, agentūroms ir freelanceriams: paštas, socialiniai tinklai, balsas ir rutinos mažinimas lietuvių kalba.',
    intro:
      'Šis puslapis padeda greitai suprasti, kam Clarivex labiausiai tinka praktikoje. Vietoj abstrakčių pažadų čia surinkti tipiniai naudojimo scenarijai: nuo kasdienės komunikacijos iki turinio planavimo ir greito aptarnavimo.',
    highlights: [
      'Mažoms komandoms, kurioms trūksta laiko, bet ne ambicijų.',
      'Agentūroms ir freelanceriams, dirbantiems su keliais klientais.',
      'Verslams, kurie nori mažiau rutinos el. pašte ir socialiniuose tinkluose.',
    ],
    sections: [
      {
        title: 'Smulkus verslas ir komandos be atskiros rinkodaros tarnybos',
        paragraphs: [
          'Dažnas scenarijus: turite produktą ar paslaugą, bet kasdienė komunikacija suvalgo laiką. Clarivex padeda paruošti įrašų juodraščius, atsakymų gaires ir priminimus apie publikacijas.',
          'Pradėti galima nuo vieno kanalo – pavyzdžiui Instagram – ir tik vėliau prijungti el. paštą ar Telegram.',
        ],
        bullets: [
          'Socialinių tinklų įrašų ruošimas ir planavimas',
          'Trumpi atsakymai klientams ir follow-up šablonus',
          'Vidinės užduotys ir priminimai balsu',
        ],
      },
      {
        title: 'Agentūros ir freelanceriai',
        paragraphs: [
          'Kai dirbate su keliais klientais, svarbu greitai perjungti kontekstą ir neišsibarstyti tarp įrankių. Vienoje vietoje lengviau išlaikyti toną ir nepamesti rutininių veiksmų.',
        ],
        bullets: [
          'Turinio juodraščiai pagal skirtingus prekės ženklus',
          'El. laiškų ruošimas ir santraukos po susitikimų',
          'Telefonu užfiksuotos idėjos ir užduotys per Telegram',
        ],
      },
      {
        title: 'Kaip pasirinkti pirmą žingsnį',
        paragraphs: [
          'Praktika rodo, kad geriausia pradeda nuo vienos aiškios savaitės užduoties: pvz., „trys įrašai ir vienas el. laiško šablonas“. Kai procesas veikia, plėsti paprasčiau nei bandyti viską iš karto.',
        ],
        bullets: [
          'Peržiūrėkite funkcijas ir kainodarą',
          'Pasirinkite vieną kanalą pilotui',
          'Matuokite sutaupytą laiką, ne tik „kokybės pojūtį“',
        ],
      },
    ],
    faq: [
      {
        question: 'Ar Clarivex tinka tik rinkodarai?',
        answer:
          'Ne. Dažnai didžiausią naudą duoda kryžminis naudojimas: rinkodara, klientų laiškai, vidinės užduotys ir greitos užrašų idėjos.',
      },
      {
        question: 'Ar šie scenarijai galioja ir pradedantiesiems?',
        answer:
          'Taip. Clarivex galima pradėti nuo nemokamų kreditų ir vienos paprastos užduoties, o sudėtingesnius workflow įjungti vėliau.',
      },
    ],
    relatedPaths: ['/features', '/kainos', '/ai-verslui-lietuvoje', '/resursai'],
  },
  {
    path: '/telegram-ai-botas',
    cluster: 'solutions',
    type: 'solution',
    title: 'Telegram AI botas lietuviškai',
    description: 'Telegram AI botas leidžia naudoti Clarivex telefone: diktuoti užduotis, kurti užrašus, gauti priminimus ir vykdyti kasdienius veiksmus balsu.',
    intro: 'Telegram AI botas ypač patogus tiems, kas daug juda ir nenori kiekvieną užduotį atsidaryti atskiroje sistemoje. Clarivex per Telegram leidžia greitai įrašyti mintį, nustatyti priminimą ar inicijuoti kitą veiksmą tiesiai iš telefono.',
    highlights: [
      'Veikia telefone be papildomos programėlės.',
      'Tinka balso komandoms, užrašams ir priminimams.',
      'Padeda nepamesti idėjų ir veiksmų kelionėje ar tarp susitikimų.',
    ],
    sections: [
      {
        title: 'Kodėl Telegram formatas patogus',
        paragraphs: [
          'Daugeliui komandų paprasčiausia pradėti ten, kur darbuotojai jau praleidžia laiką. Telegram sąsaja sumažina trintį ir leidžia išbandyti AI beveik be mokymosi kreivės.',
        ],
        bullets: [
          'Balso žinutės vietoje rankinio rašymo',
          'Greitas užduočių ir pirkinių sąrašų fiksavimas',
          'Priminimai be papildomos sistemos',
          'AI pagalba kelionėje ar tarp susitikimų',
        ],
      },
      {
        title: 'Kur tai naudinga versle',
        paragraphs: [
          'Telegram AI botas naudingas vadovams, pardavėjams, marketingo specialistams ir visiems, kam svarbu greitai fiksuoti informaciją iš karto ją turint.',
        ],
        bullets: [
          'Susitikimų follow-up',
          'Greitos social media idėjos',
          'Vidiniai priminimai komandai',
        ],
      },
    ],
    faq: [
      {
        question: 'Ar Clarivex Telegram botas supranta lietuviškas balso žinutes?',
        answer: 'Taip, Telegram integracija orientuota į lietuviškas balso komandas ir kasdienius veiksmus, tokius kaip priminimai, užrašai ar trumpi nurodymai.',
      },
      {
        question: 'Ar Telegram botas pakeičia visą platformą?',
        answer: 'Telegram patogu naudoti greitiems veiksmams, bet pilnesniems workflow, kainodarai ar socialinių tinklų valdymui verta naudoti ir pagrindinę Clarivex platformą.',
      },
    ],
    relatedPaths: ['/telegram', '/kaip-veikia-balso-komandos', '/workflow-ai-klientu-aptarnavimui-lietuviskai', '/resursai'],
  },
  {
    path: '/kas-yra-ai-asistentas',
    cluster: 'knowledge',
    type: 'guide',
    title: 'Kas yra AI asistentas ir kuo skiriasi nuo chat įrankio',
    description: 'AI asistentas yra sistema, kuri ne tik atsako į klausimus, bet padeda atlikti veiksmus, išlaikyti kontekstą ir valdyti darbo eigą.',
    intro: 'AI asistentas yra daugiau nei pokalbių langas. Jis supranta užklausą, prisimena kontekstą ir, geriausiu atveju, padeda pereiti nuo atsakymo prie realaus veiksmo: laiško, užrašo, priminimo ar publikacijos.',
    highlights: [
      'AI asistentas orientuotas į veiksmą, ne tik į atsakymą.',
      'Jis naudingiausias, kai turi kontekstą ir darbo eigą.',
      'Verslui svarbiausia, kad jis taupytų laiką, o ne tik generuotų tekstą.',
    ],
    sections: [
      {
        title: 'Pagrindinis skirtumas',
        paragraphs: [
          'Chat įrankis dažniausiai generuoja tekstą pagal vieną klausimą. AI asistentas dirba plačiau: prisimena informaciją, naudoja istoriją ir gali būti susietas su kitomis darbo sistemomis.',
        ],
        bullets: [
          'Atsakymai ir paaiškinimai',
          'Veiksmų inicijavimas',
          'Atmintis ir žinių kaupimas',
          'Integracijos su kitais kanalais',
        ],
      },
      {
        title: 'Kada verta rinktis AI asistentą',
        paragraphs: [
          'Jei jūsų komanda nuolat kartoja tas pačias komunikacijos ir planavimo užduotis, AI asistentas dažniausiai duoda daugiau vertės nei atskiras text generation įrankis.',
        ],
      },
    ],
    faq: [
      {
        question: 'Ar kiekvienas chatbot yra AI asistentas?',
        answer: 'Ne. Chatbot gali atsakyti į klausimus, bet AI asistentas paprastai turi daugiau konteksto, platesnį panaudojimą ir dažnai geba padėti su realiais veiksmais.',
      },
      {
        question: 'Ar AI asistentas pakeičia žmogų komandoje?',
        answer: 'Dažniausiai ne. Jis sumažina rutinos kiekį ir leidžia žmogui daugiau laiko skirti sprendimams, ryšiui su klientais ir kokybei.',
      },
    ],
    relatedPaths: ['/ai-asistentas-lietuviu-kalba', '/ai-asistentas-ar-chatbot', '/features', '/resursai'],
  },
  {
    path: '/ar-ai-supranta-lietuviskai',
    cluster: 'knowledge',
    type: 'guide',
    title: 'Ar AI supranta lietuviškai ir kada to neužtenka',
    description: 'AI gali suprasti lietuviškai, bet verslui svarbu ne tik kalba, o ir kontekstas, tono kontrolė bei gebėjimas dirbti su realiomis užduotimis.',
    intro: 'Taip, šiuolaikiniai AI modeliai gali suprasti lietuviškai. Tačiau verslui vien to neužtenka. Svarbu, ar sistema išlaiko kontekstą, ar padeda parinkti toną, ar geba susitvarkyti su kasdienėmis užduotimis be papildomos rankinės korekcijos.',
    highlights: [
      'Lietuvių kalbos palaikymas jau yra pakankamai geras kasdieniams darbams.',
      'Svarbiausias skirtumas atsiranda ne kalboje, o workflow kokybėje.',
      'Aiškios instrukcijos ir pavyzdžiai smarkiai pagerina rezultatą.',
    ],
    sections: [
      {
        title: 'Kur AI lietuviškai veikia geriausiai',
        paragraphs: [
          'Geriausiai AI veikia tada, kai užduotis turi aiškų tikslą: laiško juodraštis, social media įrašas, santrauka, priminimas ar trumpas atsakymas klientui.',
        ],
        bullets: [
          'El. laiškai ir atsakymai',
          'Social media tekstai',
          'Santraukos ir vertimai',
          'Balso komandų transkripcija',
        ],
      },
      {
        title: 'Kas daro didžiausią skirtumą',
        paragraphs: [
          'Didžiausią įtaką turi ne vien modelis, o aiškus kontekstas: kas yra klientas, koks jūsų tonas, kokių pažadų negalima duoti ir ką sistema turi pasiekti.',
        ],
      },
    ],
    faq: [
      {
        question: 'Ar AI gali rašyti natūralia lietuvių kalba?',
        answer: 'Taip, tačiau kokybė geriausia tada, kai pateikiate aiškią užduotį, auditoriją, toną ir norimą struktūrą.',
      },
      {
        question: 'Ar lietuvių kalbai reikia specialaus AI modelio?',
        answer: 'Ne visada, bet svarbu, kad pasirinkta sistema būtų testuota realiame lietuviškame kontekste ir pritaikyta kasdieniams verslo workflow.',
      },
    ],
    relatedPaths: ['/ai-asistentas-lietuviu-kalba', '/kaip-veikia-balso-komandos', '/telegram-ai-botas', '/resursai'],
  },
  {
    path: '/kaip-veikia-balso-komandos',
    cluster: 'knowledge',
    type: 'guide',
    title: 'Kaip veikia balso komandos AI sistemoje',
    description: 'Balso komandos AI sistemoje pirmiausia paverčiamos tekstu, tada interpretuojamos kaip intencija ir nukreipiamos į konkretų veiksmą ar atsakymą.',
    intro: 'Balso komandos AI sistemoje veikia trimis sluoksniais: transkripcija, intencijos atpažinimas ir veiksmo vykdymas. Dėl to svarbu ne tik gerai atpažinti žodžius, bet ir teisingai suprasti, ko žmogus nori pasiekti.',
    highlights: [
      'Pirma AI iš balso padaro tekstą.',
      'Tuomet atpažįsta, ar tai priminimas, užrašas, klausimas ar kita užduotis.',
      'Galiausiai sistema grąžina atsakymą arba atlieka veiksmą.',
    ],
    sections: [
      {
        title: 'Trys pagrindiniai žingsniai',
        paragraphs: [
          'Pirma balso žinutė transkribuojama į tekstą. Tada sistema nustato, ar žmogus nori gauti atsakymą, ar atlikti konkretų veiksmą. Po to įsijungia atitinkamas workflow.',
        ],
        bullets: [
          'Transkripcija',
          'Intencijos klasifikavimas',
          'Atsakymas arba veiksmas',
        ],
      },
      {
        title: 'Kodėl tai patogu versle',
        paragraphs: [
          'Balsas sutaupo laiko tada, kai ranka užimta, kai esate kelyje ar kai svarbu greitai užfiksuoti idėją. Tai ypač naudinga vadovams ir specialistams, kurie daug juda tarp susitikimų.',
        ],
      },
    ],
    faq: [
      {
        question: 'Ar balso komandos tinka tik priminimams?',
        answer: 'Ne, jos gali būti naudojamos ir užrašams, idėjoms, pirkinių sąrašams, klausimams AI ar kitoms trumpoms užduotims.',
      },
      {
        question: 'Ar lietuvių kalbos transkripcija pakankamai tiksli?',
        answer: 'Kasdieniams workflow ji pakankamai gera, ypač kai komandos formuluojamos aiškiai ir trumpai.',
      },
    ],
    relatedPaths: ['/telegram-ai-botas', '/telegram', '/ar-ai-supranta-lietuviskai', '/resursai'],
  },
  {
    path: '/ai-asistentas-ar-chatbot',
    cluster: 'knowledge',
    type: 'guide',
    title: 'AI asistentas ar chatbot: kuo skiriasi praktikoje',
    description: 'Chatbot dažniausiai atsako į klausimus, o AI asistentas padeda valdyti platesnį darbo kontekstą, prisimena informaciją ir gali inicijuoti veiksmus.',
    intro: 'Praktikoje skirtumas tarp AI asistento ir chatbot atsiranda tada, kai reikia ne tik atsakyti, bet ir padaryti. Chatbot dažniau orientuotas į vieną dialogą, o AI asistentas apima platesnę darbo eigą, istoriją ir veiksmus tarp skirtingų kanalų.',
    highlights: [
      'Chatbot orientuotas į atsakymą viename dialoge.',
      'AI asistentas dažniau turi atmintį ir veiksmų logiką.',
      'Verslui AI asistentas paprastai duoda daugiau grąžos, jei procesai kartojasi.',
    ],
    sections: [
      {
        title: 'Kaip atpažinti skirtumą',
        paragraphs: [
          'Jei įrankis gali atsakyti, bet negali padėti tęsti darbo kituose kanaluose, dažniau tai yra chatbot. Jei jis gali padėti tęsti procesą, prisiminti kontekstą ir veikti tarp skirtingų įrankių, tai jau artėja prie AI asistento.',
        ],
      },
      {
        title: 'Kada verslui to reikia',
        paragraphs: [
          'Kai komanda nori ne vien „paklausti AI“, o įtraukti AI į kasdienę komunikaciją, planavimą ir turinio gamybą, AI asistento modelis yra praktiškesnis.',
        ],
      },
    ],
    faq: [
      {
        question: 'Ar chatbot gali būti pakankamas?',
        answer: 'Taip, jei jums reikia tik greitų atsakymų ar informacijos paieškos. Bet jei tikslas yra sumažinti rutiną, dažnai verta žiūrėti į AI asistento kryptį.',
      },
      {
        question: 'Ar Clarivex labiau chatbot ar AI asistentas?',
        answer: 'Clarivex pozicionuojamas kaip AI asistentų platforma, nes be pokalbių turi el. pašto, socialinių tinklų, balso ir kitus darbo sluoksnius.',
      },
    ],
    relatedPaths: ['/kas-yra-ai-asistentas', '/clarivex-ar-chatgpt-smulkiam-verslui', '/ai-asistentas-lietuviu-kalba', '/resursai'],
  },
  {
    path: '/kaip-saugiai-prijungti-el-pasta-prie-ai',
    cluster: 'knowledge',
    type: 'guide',
    title: 'Kaip saugiai prijungti el. paštą prie AI',
    description: 'Saugiam el. pašto prijungimui prie AI svarbu OAuth ar App Password, aiškios prieigos ir sistema, kuri nenaudoja jūsų laiškų modelių mokymui.',
    intro: 'Saugus el. pašto prijungimas prie AI platformos prasideda nuo tinkamo autentifikavimo ir aiškaus prieigų supratimo. Reikia žinoti, kokius duomenis sistema pasiekia, kaip jie saugomi ir ar jie naudojami tik paslaugos teikimui.',
    highlights: [
      'Saugiausia naudoti OAuth ar App Password mechanizmus.',
      'Svarbu žinoti, kokios prieigos suteikiamos.',
      'Reikia rinktis sistemą, kuri aiškiai komunikuoja duomenų naudojimą.',
    ],
    sections: [
      {
        title: 'Saugumo kontrolinis sąrašas',
        paragraphs: [
          'Prieš jungiant el. paštą, verta peržiūrėti, ar sistema aiškiai aprašo autentifikavimo būdą, saugojimo principus ir duomenų tvarkymo taisykles.',
        ],
        bullets: [
          'Naudojamas OAuth arba App Password',
          'Aiškus privatumo ir duomenų tvarkymo aprašymas',
          'Galimybė atjungti paskyrą',
          'Minimalios būtinos prieigos',
        ],
      },
      {
        title: 'Ką svarbu žinoti apie AI apdorojimą',
        paragraphs: [
          'Reikia suprasti, ar jūsų laiškai naudojami tik atsakymų ruošimui ir klasifikacijai, ar taip pat modelių mokymui. Patikimos sistemos šiuos dalykus aprašo labai aiškiai.',
        ],
      },
    ],
    faq: [
      {
        question: 'Ar galima prijungti paštą nesidalinant pagrindiniu slaptažodžiu?',
        answer: 'Taip, tam ir naudojami OAuth arba App Password mechanizmai, kurie leidžia saugiau suteikti ribotą prieigą.',
      },
      {
        question: 'Ar reikia prijungti visą el. paštą, kad AI padėtų su laiškais?',
        answer: 'Nebūtinai. Priklauso nuo workflow, bet dažnai pakanka aiškiai valdomos prieigos tik reikalingoms funkcijoms.',
      },
    ],
    relatedPaths: ['/ai-el-pastui', '/privatumas', '/duk', '/resursai'],
  },
  {
    path: '/kaip-ai-padeda-atsakyti-i-el-laiskus-lietuviskai',
    cluster: 'comparisons',
    type: 'comparison',
    title: 'Kaip AI padeda atsakyti į el. laiškus lietuviškai',
    description: 'AI padeda lietuviškai atsakyti į el. laiškus greičiau, nuosekliau ir su mažiau rankinio perrašinėjimo, ypač kai daug pasikartojančių užklausų.',
    intro: 'AI laiškų atsakymams labiausiai pasiteisina tada, kai reikia greitai paruošti pirmą versiją, o žmogus gali ją peržiūrėti ir patvirtinti. Lietuvių kalboje tai ypač naudinga verslams, kurie kasdien gauna panašaus tipo užklausas.',
    highlights: [
      'AI greitina pirmo juodraščio ruošimą.',
      'Padeda išlaikyti toną ir struktūrą.',
      'Didžiausia vertė atsiranda pasikartojančių laiškų sraute.',
    ],
    sections: [
      {
        title: 'Kur AI padeda labiausiai',
        paragraphs: [
          'Kai užklausos kartojasi, AI gali daug greičiau išskaityti kontekstą ir pasiūlyti atsakymo kryptį. Taip komanda skiria laiką ne nuo nulio rašymui, o tik patikrinimui ir korekcijai.',
        ],
        bullets: [
          'Kainos ir paslaugų užklausos',
          'Dėl terminų ar prieinamumo',
          'Follow-up po skambučių',
          'Pirminiai klientų aptarnavimo atsakymai',
        ],
      },
      {
        title: 'Ką verta palikti žmogui',
        paragraphs: [
          'Jautrius komercinius, teisinius ar santykių valdymo laiškus verta palikti žmogaus patvirtinimui. AI turi būti pagalbininkas, ne aklas siuntėjas.',
        ],
      },
    ],
    faq: [
      {
        question: 'Ar AI gali išlaikyti mano komunikacijos toną?',
        answer: 'Taip, jei pateikiate pavyzdžių ir aiškiai aprašote norimą toną, AI gali gana nuosekliai jo laikytis.',
      },
      {
        question: 'Ar tai naudinga mažam verslui?',
        answer: 'Taip, nes mažos komandos dažnai neturi atskiro žmogaus vien laiškams, todėl kiekviena sutaupyta minutė yra labai verta.',
      },
    ],
    relatedPaths: ['/ai-el-pastui', '/kaip-saugiai-prijungti-el-pasta-prie-ai', '/workflow-ai-klientu-aptarnavimui-lietuviskai', '/resursai'],
  },
  {
    path: '/kaip-suplanuoti-instagram-postus-su-ai',
    cluster: 'comparisons',
    type: 'comparison',
    title: 'Kaip suplanuoti Instagram postus su AI',
    description: 'Instagram postų planavimas su AI leidžia greičiau sugeneruoti turinio temas, captions, vizualų kryptį ir suplanuoti publikavimo ritmą pagal kampaniją.',
    intro: 'Instagram postų planavimas su AI veikia geriausiai tada, kai AI naudojamas ne vien tekstui, o visam ciklui: temų sąrašui, caption juodraščiams, kūrybinei krypčiai ir publikavimo kalendoriui.',
    highlights: [
      'AI padeda greitai surinkti temų backlogą.',
      'Galima vienu metu ruoštis kelioms savaitėms į priekį.',
      'Gerai veikia, kai turite aiškią auditoriją ir pasiūlymą.',
    ],
    sections: [
      {
        title: 'Paprastas planavimo modelis',
        paragraphs: [
          'Pirmiausia nusistatykite 3-5 pagrindines turinio temas. Tada AI padeda kiekvienai temai sugeneruoti idėjas, kampus, pavadinimus ir galutinį caption juodraštį.',
        ],
        bullets: [
          'Turinio temos ir kampanijos',
          'Postų idėjos pagal savaitę',
          'Caption ir CTA juodraščiai',
          'Vizualų briefai ar paveikslėliai',
        ],
      },
      {
        title: 'Ko nepamiršti',
        paragraphs: [
          'AI sutaupo daug laiko, bet stipriausi rezultatai būna tada, kai išlieka aiškus brand tonas, aiškus pasiūlymas ir konkretūs CTA.',
        ],
      },
    ],
    faq: [
      {
        question: 'Ar AI gali suplanuoti visą mėnesio turinį?',
        answer: 'Taip, AI gali padėti susidėlioti viso mėnesio temų ir postų struktūrą, tačiau galutinei kokybei vis tiek verta įtraukti žmogaus peržiūrą.',
      },
      {
        question: 'Ar tai tinka tik dideliems brandams?',
        answer: 'Ne, būtent mažesniems verslams tai dažnai duoda didžiausią naudą, nes leidžia iš anksto pasiruošti turinį ir mažina paskutinės minutės chaosą.',
      },
    ],
    relatedPaths: ['/ai-socialiniu-tinklu-valdymui', '/features', '/workflow-ai-socialiniams-tinklams-ir-pardavimams', '/resursai'],
  },
  {
    path: '/clarivex-ar-chatgpt-smulkiam-verslui',
    cluster: 'comparisons',
    type: 'comparison',
    title: 'Clarivex ar ChatGPT smulkiam verslui Lietuvoje',
    description: 'ChatGPT tinka bendroms užklausoms, Clarivex – smulkaus verslo workflow: el. paštas, socialiniai tinklai, Telegram ir lietuviška kasdienė rutina.',
    intro: 'Renkantis tarp Clarivex ir ChatGPT svarbu suprasti, ko tiksliai reikia verslui. Jei reikia universalaus pokalbių AI, ChatGPT yra stiprus pasirinkimas. Jei reikia AI, kuris labiau orientuotas į lietuvišką kasdienę verslo rutiną ir susietus workflow, Clarivex gali būti praktiškesnis.',
    highlights: [
      'ChatGPT stiprus kaip universalus AI pokalbių įrankis.',
      'Clarivex stiprus ten, kur reikia workflow ir veiksmų.',
      'Smulkiam verslui dažnai svarbiau ne modelis, o visos darbo eigos patogumas.',
    ],
    sections: [
      {
        title: 'Kurį rinktis pagal poreikį',
        paragraphs: [
          'Jei daug eksperimentuojate su tekstais, analize ar bendromis užklausomis, ChatGPT gali būti pakankamas. Jei prioritetas yra konkretūs verslo veiksmai vienoje vietoje, Clarivex turi aiškesnį fokusą.',
        ],
        bullets: [
          'ChatGPT: universalūs klausimai ir kūryba',
          'Clarivex: AI + workflow + LT kasdieniai use-case',
          'Clarivex: Telegram, el. paštas, social media vienoje sistemoje',
        ],
      },
      {
        title: 'Kas svarbiausia sprendžiant',
        paragraphs: [
          'Svarbiausia ne „kuris AI protingesnis“, o kur jūsų komanda mažiau blaškysis tarp skirtingų įrankių ir greičiau atliks darbą.',
        ],
      },
    ],
    faq: [
      {
        question: 'Ar Clarivex naudoja OpenAI modelius?',
        answer: 'Taip, Clarivex naudoja pažangius AI modelius, tačiau jo vertė verslui yra platesnė nei vien modelio pasirinkimas, nes jis pritaikytas realiems workflow.',
      },
      {
        question: 'Ar Clarivex gali pakeisti ChatGPT?',
        answer: 'Daliai verslo užduočių taip, ypač jei tikslas yra vienoje vietoje valdyti komunikacijos ir automatizavimo workflow. Kai kuriems vartotojams abu įrankiai gali būti papildantys vienas kitą.',
      },
    ],
    relatedPaths: ['/ai-verslui-lietuvoje', '/ai-asistentas-ar-chatbot', '/features', '/resursai'],
  },
  {
    path: '/geriausi-ai-irankiai-smulkiam-verslui-lietuvoje',
    cluster: 'comparisons',
    type: 'comparison',
    title: 'Geriausi AI įrankiai smulkiam verslui Lietuvoje',
    description: 'Geriausi AI įrankiai smulkiam verslui yra tie, kurie realiai trumpina laiką iki rezultato: turinio kūrimas, el. paštas, žinių kaupimas ir klientų komunikacija.',
    intro: 'Smulkiam verslui AI įrankiai naudingi ne tada, kai jų daug, o kai jie uždengia svarbiausius procesus. Vertingiausi sprendimai paprastai padeda su komunikacija, turinio gamyba, el. paštu, paieška ir pasikartojančia klientų rutina.',
    highlights: [
      'Reikia rinktis pagal procesą, ne pagal trendą.',
      'Daugiausia vertės duoda komunikaciją ir rutiną trumpinantys įrankiai.',
      'Vienoje vietoje sujungti įrankiai dažnai laimi prieš atskirus fragmentus.',
    ],
    sections: [
      {
        title: 'Kaip vertinti AI įrankį',
        paragraphs: [
          'Vertinant AI įrankį, verta žiūrėti į tris dalykus: kiek jis taupo laiko, ar tinka jūsų kalbai ir ar mažina įrankių skaičių komandos kasdienybėje.',
        ],
        bullets: [
          'Kiek laiko sutaupoma per savaitę',
          'Ar patogus naudojimas lietuviškai',
          'Ar yra workflow, o ne vien tekstų generavimas',
          'Ar turi aiškų kainodaros modelį',
        ],
      },
      {
        title: 'Kur čia įsipaišo Clarivex',
        paragraphs: [
          'Clarivex stiprus ten, kur reikia vienoje vietoje turėti AI asistentą, turinio gamybą, Telegram, el. paštą ir kasdienes užduotis be sudėtingo diegimo.',
        ],
      },
    ],
    faq: [
      {
        question: 'Ar verta turėti daug skirtingų AI įrankių?',
        answer: 'Kartais taip, bet mažoms komandoms dažnai didesnė vertė ateina iš mažesnio įrankių skaičiaus ir aiškesnės darbo eigos.',
      },
      {
        question: 'Ar lietuviškai dirbantiems verslams reikia atskiro sprendimo?',
        answer: 'Dažnai taip, nes svarbu ne tik modelio gebėjimas suprasti kalbą, bet ir tai, kaip sistema pritaikyta lietuviškai komunikacijai bei vietiniams workflow.',
      },
    ],
    relatedPaths: ['/ai-verslui-lietuvoje', '/clarivex-ar-chatgpt-smulkiam-verslui', '/kainos', '/resursai'],
  },
  {
    path: '/workflow-ai-socialiniams-tinklams-ir-pardavimams',
    cluster: 'comparisons',
    type: 'case-study',
    title: 'AI workflow socialiniams tinklams ir pardavimams',
    description: 'Praktiškas AI workflow, kaip iš vienos idėjos pereiti į socialinių tinklų turinį, follow-up laišką ir pardaviminį veiksmą vienoje sistemoje.',
    intro: 'Vienas naudingiausių AI workflow smulkiame versle yra grandinė nuo idėjos iki pardavimo kontakto. Clarivex gali būti naudojamas tam, kad ta pati informacija virstų postu, follow-up laišku ir priminimu neprarandant konteksto.',
    highlights: [
      'Vienas input gali maitinti kelis kanalus.',
      'Social media ir pardavimų veiksmai gali būti sujungti.',
      'Didžiausia vertė atsiranda iš mažiau rankinio dubliavimo.',
    ],
    sections: [
      {
        title: 'Pavyzdinė eiga',
        paragraphs: [
          'Pirmiausia užrašoma produkto ar pasiūlymo idėja. Iš jos AI paruošia Instagram/Facebook postą, tada paruošia trumpą follow-up laišką potencialiam klientui ir galiausiai sukuria priminimą, kada grįžti su pasiūlymu.',
        ],
        bullets: [
          'Idėja ar pasiūlymo kampas',
          'Posto juodraštis ir CTA',
          'Pardaviminio laiško juodraštis',
          'Priminimas tolimesniam veiksmui',
        ],
      },
      {
        title: 'Kodėl tai veikia',
        paragraphs: [
          'Komanda nenaudoja trijų skirtingų įrankių tam pačiam kontekstui. Tas pats brand tonas ir ta pati žinutė keliauja per kelis kanalus be papildomo perrašymo.',
        ],
      },
    ],
    faq: [
      {
        question: 'Ar toks workflow tinka tik agentūroms?',
        answer: 'Ne, jis tinka ir vienam verslo savininkui, kuris pats valdo ir komunikaciją, ir pardavimus.',
      },
      {
        question: 'Ar reikia daug pasiruošimo?',
        answer: 'Pakanka aiškios pasiūlymo krypties, auditorijos ir kelių brand tono gairių. Nuo to galima pradėti ir workflow nuosekliai gerinti.',
      },
    ],
    relatedPaths: ['/ai-socialiniu-tinklu-valdymui', '/ai-el-pastui', '/kainos', '/resursai'],
  },
  {
    path: '/workflow-ai-klientu-aptarnavimui-lietuviskai',
    cluster: 'comparisons',
    type: 'case-study',
    title: 'AI workflow klientų aptarnavimui lietuviškai',
    description: 'AI klientų aptarnavimo workflow lietuviškai padeda greičiau paruošti atsakymus, išlaikyti toną ir nepamesti pasikartojančių užklausų istorijos.',
    intro: 'Klientų aptarnavimo workflow su AI geriausiai veikia tada, kai AI padeda ne improvizuoti, o laikytis aiškių atsakymo gairių. Clarivex gali būti naudojamas pirmo atsakymo ruošimui, dažnų temų santraukoms ir vidiniam konteksto kaupimui.',
    highlights: [
      'Trumpina laiką iki pirmo atsakymo.',
      'Padeda išlaikyti vienodesnį komunikacijos toną.',
      'Naudinga, kai daug pasikartojančių klausimų lietuviškai.',
    ],
    sections: [
      {
        title: 'Kur workflow duoda daugiausia naudos',
        paragraphs: [
          'AI ypač naudingas tada, kai kasdien kartojasi klausimai apie kainas, terminus, procesą ar produkto veikimą. Tokiais atvejais jis tampa greitu pirmo atsakymo sluoksniu.',
        ],
        bullets: [
          'Dažnų klausimų atsakymai',
          'Atsakymo tono derinimas',
          'Santraukos komandos viduje',
          'Follow-up po neišspręstų užklausų',
        ],
      },
      {
        title: 'Kas lieka žmogui',
        paragraphs: [
          'Žmogui svarbu palikti galutinį sprendimą sudėtingais ar jautriais atvejais. Taip AI tampa produktyvumo, o ne reputacijos rizikos įrankiu.',
        ],
      },
    ],
    faq: [
      {
        question: 'Ar AI gali visiškai pakeisti support žmogų?',
        answer: 'Dažniausiai ne. Geriausias modelis yra mišrus: AI paruošia ir pagreitina, žmogus priima galutinį sprendimą sudėtingesniuose atvejuose.',
      },
      {
        question: 'Ar lietuviškame supporte tai veikia pakankamai gerai?',
        answer: 'Taip, ypač jei atsakymai remiasi aiškiais FAQ, tono gairėmis ir realiais jūsų verslo pavyzdžiais.',
      },
    ],
    relatedPaths: ['/duk', '/ai-el-pastui', '/kaip-ai-padeda-atsakyti-i-el-laiskus-lietuviskai', '/resursai'],
  },
  {
    path: '/partneriams-ir-ziniasklaidai',
    cluster: 'authority',
    type: 'authority',
    title: 'Partneriams ir žiniasklaidai – AI Lietuvoje',
    description:
      'Oficiali Clarivex informacija žiniasklaidai ir partneriams: AI platforma lietuvių kalba, socialiniai tinklai, el. paštas ir lanksti kreditų sistema.',
    intro: 'Jei rašote apie Clarivex, dedate mus į AI įrankių katalogą, ruošiat interviu ar partnerystės puslapį, svarbu naudoti nuoseklų produkto aprašymą. Šis puslapis padeda greitai suprasti, ką Clarivex daro ir kokius signalus verta išlaikyti nuoseklius internete.',
    highlights: [
      'Clarivex yra AI asistentų platforma lietuvių kalba.',
      'Pagrindinės temos: social media, el. paštas, Telegram, priminimai ir workflow.',
      'Nuoseklus brand aprašymas padeda tiek SEO, tiek AI sistemoms.',
    ],
    sections: [
      {
        title: 'Trumpas produkto aprašymas',
        paragraphs: [
          'Clarivex yra AI asistentų platforma lietuvių kalba, kuri padeda smulkiam verslui ir komandoms automatizuoti komunikacijos bei turinio darbus. Ji jungia AI pokalbius, socialinių tinklų valdymą, el. paštą, Telegram ir kitus kasdienius workflow.',
        ],
      },
      {
        title: 'Kokias temas verta sieti su Clarivex',
        paragraphs: [
          'Kai Clarivex minimas kituose šaltiniuose, naudinga išlaikyti nuoseklius teminius ryšius. Tai stiprina tiek paieškos signalus, tiek AI supratimą apie brandą.',
        ],
        bullets: [
          'AI asistentas lietuvių kalba',
          'AI socialinių tinklų valdymui',
          'AI el. paštui ir rutinai',
          'Telegram AI botas',
          'AI smulkiam verslui Lietuvoje',
        ],
      },
      {
        title: 'Kur galima nukreipti žmones',
        paragraphs: [
          'Jei minite Clarivex kataloge, straipsnyje ar socialiniuose tinkluose, naudinga nukreipti ne tik į pagrindinį puslapį, bet ir į teminius puslapius pagal konkretų use-case.',
        ],
        bullets: [
          `Pagrindinis puslapis: ${siteConfig.url}/`,
          `Resursų centras: ${siteConfig.url}/resursai`,
          `Kainodara: ${siteConfig.url}/kainos`,
          `Telegram: ${siteConfig.url}/telegram`,
        ],
      },
    ],
    faq: [
      {
        question: 'Kodėl reikia vienodo brand aprašymo skirtinguose šaltiniuose?',
        answer: 'Nuoseklus brand aprašymas padeda tiek paieškos sistemoms, tiek AI modeliams aiškiau suprasti, kas yra Clarivex ir kokioms temoms jis priklauso.',
      },
      {
        question: 'Ar verta linkinti į teminius puslapius?',
        answer: 'Taip, jei minite konkretų use-case, geriau linkinti į atitinkamą landing ar knowledge puslapį, o ne visada tik į homepage.',
      },
    ],
    relatedPaths: ['/resursai', '/ai-verslui-lietuvoje', '/ai-socialiniu-tinklu-valdymui', '/ai-el-pastui'],
  },
];

export const contentPageMap = Object.fromEntries(
  contentPages.map((page) => [page.path, page])
);

export function getIndexablePages() {
  return [
    ...existingPageMetadata,
    ...contentPages.map((page) => ({
      path: page.path,
      title: page.title,
      description: page.description,
      priority: page.cluster === 'authority' ? '0.7' : '0.8',
      changefreq: 'weekly',
    })),
  ];
}
