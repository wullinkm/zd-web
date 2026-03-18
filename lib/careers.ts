export interface Career {
  slug: string;
  category: string;
  emoji: string;
  title: { nl: string; en: string };
  subtitle: { nl: string; en: string };
  description: { nl: string; en: string };
  skills: { nl: string[]; en: string[] };
  education: { nl: string; en: string };
  salaryEntry: string;
  salaryMid: string;
  salarySenior: string;
  careerPath: { nl: string; en: string };
}

export const careers: Career[] = [
  // ── Technology ──────────────────────────────────────────────────────────────
  {
    slug: "software-developer",
    category: "technology",
    emoji: "💻",
    title: { nl: "Software Developer", en: "Software Developer" },
    subtitle: {
      nl: "Bouw de digitale producten van morgen",
      en: "Build the digital products of tomorrow",
    },
    description: {
      nl: "Een software developer ontwerpt, schrijft en onderhoudt computerprogramma's en applicaties. Je werkt samen met designers, productmanagers en andere developers aan het oplossen van complexe technische problemen. In Nederland is de vraag naar goede developers enorm: vrijwel elke sector digitaliseert en heeft softwareontwikkelaars nodig. Je dagelijkse werk omvat het schrijven van code, het reviewen van code van collega's, het oplossen van bugs en het deelnemen aan sprint-planningen.",
      en: "A software developer designs, writes and maintains computer programs and applications. You work together with designers, product managers and other developers to solve complex technical problems. In the Netherlands, demand for skilled developers is enormous: virtually every sector is digitalising and needs software developers. Your daily work includes writing code, reviewing colleagues' code, fixing bugs and participating in sprint planning.",
    },
    skills: {
      nl: ["Python, Java of JavaScript", "Git versiebeheer", "Datastructuren & algoritmen", "Agile/Scrum", "SQL databases", "REST API's", "Probleemoplossend denken"],
      en: ["Python, Java or JavaScript", "Git version control", "Data structures & algorithms", "Agile/Scrum", "SQL databases", "REST APIs", "Problem-solving mindset"],
    },
    education: {
      nl: "HBO of WO informatica, software engineering of een verwant vakgebied. Bootcamps worden ook geaccepteerd bij aantoonbare vaardigheden.",
      en: "Bachelor's or Master's in Computer Science, Software Engineering or a related field. Bootcamps are also accepted with demonstrable skills.",
    },
    salaryEntry: "€2.800 – €3.800",
    salaryMid: "€3.800 – €5.500",
    salarySenior: "€5.500 – €8.000",
    careerPath: {
      nl: "Junior Developer → Medior Developer → Senior Developer → Tech Lead → Engineering Manager of Principal Engineer. Veel developers specialiseren zich in een niche (bijv. backend, mobile, security) of kiezen voor een management-pad.",
      en: "Junior Developer → Medior Developer → Senior Developer → Tech Lead → Engineering Manager or Principal Engineer. Many developers specialise in a niche (e.g. backend, mobile, security) or choose a management path.",
    },
  },
  {
    slug: "data-scientist",
    category: "technology",
    emoji: "📊",
    title: { nl: "Data Scientist", en: "Data Scientist" },
    subtitle: {
      nl: "Verander ruwe data in waardevolle inzichten",
      en: "Turn raw data into valuable insights",
    },
    description: {
      nl: "Een data scientist analyseert grote hoeveelheden data om patronen te ontdekken en bedrijfsbeslissingen te ondersteunen. Je combineert statistiek, programmeren en domeinkennis om voorspellende modellen te bouwen. Nederlandse bedrijven in retail, finance en tech investeren fors in data science. Je werkt met machine learning-algoritmen, visualiseert resultaten voor stakeholders en vertaalt technische bevindingen naar zakelijke aanbevelingen.",
      en: "A data scientist analyses large datasets to discover patterns and support business decisions. You combine statistics, programming and domain knowledge to build predictive models. Dutch companies in retail, finance and tech invest heavily in data science. You work with machine learning algorithms, visualise results for stakeholders and translate technical findings into business recommendations.",
    },
    skills: {
      nl: ["Python of R", "Machine learning (scikit-learn, TensorFlow)", "SQL en NoSQL databases", "Statistiek en kansrekening", "Data visualisatie (Tableau, PowerBI)", "Communicatievaardigheden"],
      en: ["Python or R", "Machine learning (scikit-learn, TensorFlow)", "SQL and NoSQL databases", "Statistics and probability", "Data visualisation (Tableau, PowerBI)", "Communication skills"],
    },
    education: {
      nl: "WO wiskunde, statistiek, informatica of data science. Een master of PhD is een groot voordeel voor senior posities.",
      en: "Master's in Mathematics, Statistics, Computer Science or Data Science. A Master's or PhD is a strong advantage for senior positions.",
    },
    salaryEntry: "€3.000 – €4.200",
    salaryMid: "€4.200 – €6.000",
    salarySenior: "€6.000 – €9.000",
    careerPath: {
      nl: "Junior Data Scientist → Data Scientist → Senior Data Scientist → Lead Data Scientist → Head of Data / Chief Data Officer. Alternatieven zijn ML Engineer of Data Architect.",
      en: "Junior Data Scientist → Data Scientist → Senior Data Scientist → Lead Data Scientist → Head of Data / Chief Data Officer. Alternatives include ML Engineer or Data Architect.",
    },
  },
  {
    slug: "devops-engineer",
    category: "technology",
    emoji: "⚙️",
    title: { nl: "DevOps Engineer", en: "DevOps Engineer" },
    subtitle: {
      nl: "Verbind development en operations naadloos",
      en: "Bridge development and operations seamlessly",
    },
    description: {
      nl: "Een DevOps engineer zorgt ervoor dat software snel, betrouwbaar en schaalbaar wordt uitgerold. Je beheert CI/CD-pipelines, cloudinfrastructuur en automatiseert handmatige processen. In Nederland is DevOps een van de meest gevraagde technische rollen, met grote werkgevers als Booking.com, ASML en ING. Je combineert diepgaande technische kennis met een brede blik op het softwareontwikkelproces.",
      en: "A DevOps engineer ensures software is deployed quickly, reliably and at scale. You manage CI/CD pipelines, cloud infrastructure and automate manual processes. In the Netherlands, DevOps is one of the most in-demand technical roles, with major employers like Booking.com, ASML and ING. You combine deep technical knowledge with a broad view of the software development process.",
    },
    skills: {
      nl: ["Docker en Kubernetes", "CI/CD (Jenkins, GitHub Actions)", "Cloud (AWS, Azure, GCP)", "Infrastructure as Code (Terraform)", "Linux/Unix", "Monitoring (Prometheus, Grafana)", "Scripting (Bash, Python)"],
      en: ["Docker and Kubernetes", "CI/CD (Jenkins, GitHub Actions)", "Cloud (AWS, Azure, GCP)", "Infrastructure as Code (Terraform)", "Linux/Unix", "Monitoring (Prometheus, Grafana)", "Scripting (Bash, Python)"],
    },
    education: {
      nl: "HBO of WO informatica of systeembeheer. Certificeringen zoals AWS Certified DevOps Engineer of CKA (Kubernetes) zijn zeer waardevol.",
      en: "Bachelor's in Computer Science or Systems Administration. Certifications such as AWS Certified DevOps Engineer or CKA (Kubernetes) are highly valued.",
    },
    salaryEntry: "€3.000 – €4.200",
    salaryMid: "€4.200 – €6.000",
    salarySenior: "€6.000 – €9.500",
    careerPath: {
      nl: "Junior DevOps Engineer → DevOps Engineer → Senior DevOps Engineer → Platform Engineer → Site Reliability Engineer (SRE) → DevOps Lead.",
      en: "Junior DevOps Engineer → DevOps Engineer → Senior DevOps Engineer → Platform Engineer → Site Reliability Engineer (SRE) → DevOps Lead.",
    },
  },
  {
    slug: "cybersecurity-specialist",
    category: "technology",
    emoji: "🔒",
    title: { nl: "Cybersecurity Specialist", en: "Cybersecurity Specialist" },
    subtitle: {
      nl: "Bescherm organisaties tegen digitale dreigingen",
      en: "Protect organisations against digital threats",
    },
    description: {
      nl: "Een cybersecurity specialist beschermt organisaties tegen cyberaanvallen, datalekken en andere digitale dreigingen. Je voert penetratietests uit, analyseert beveiligingsincidenten en implementeert beveiligingsmaatregelen. Met de toename van cybercriminaliteit en strenge regelgeving (NIS2, AVG) is de vraag naar security-experts in Nederland enorm gestegen. Je werkt met zowel technische beveiligingstools als beleidsontwikkeling.",
      en: "A cybersecurity specialist protects organisations from cyber attacks, data breaches and other digital threats. You conduct penetration tests, analyse security incidents and implement security measures. With the rise of cybercrime and strict regulations (NIS2, GDPR), demand for security experts in the Netherlands has surged. You work with both technical security tools and policy development.",
    },
    skills: {
      nl: ["Netwerkveiligheid", "Penetratietesten (Metasploit, Burp Suite)", "SIEM-tools (Splunk, Microsoft Sentinel)", "Cryptografie", "Incident response", "ISO 27001 / NIS2 / AVG", "Ethisch hacken"],
      en: ["Network security", "Penetration testing (Metasploit, Burp Suite)", "SIEM tools (Splunk, Microsoft Sentinel)", "Cryptography", "Incident response", "ISO 27001 / NIS2 / GDPR", "Ethical hacking"],
    },
    education: {
      nl: "HBO of WO informatica met specialisatie beveiliging. Certificeringen: CISSP, CEH, CompTIA Security+ zijn standaard in de industrie.",
      en: "Bachelor's or Master's in Computer Science with a security specialisation. Certifications: CISSP, CEH, CompTIA Security+ are industry standard.",
    },
    salaryEntry: "€3.200 – €4.500",
    salaryMid: "€4.500 – €6.500",
    salarySenior: "€6.500 – €10.000",
    careerPath: {
      nl: "Security Analyst → Cybersecurity Specialist → Senior Security Engineer → Security Architect → CISO (Chief Information Security Officer).",
      en: "Security Analyst → Cybersecurity Specialist → Senior Security Engineer → Security Architect → CISO (Chief Information Security Officer).",
    },
  },
  {
    slug: "cloud-architect",
    category: "technology",
    emoji: "☁️",
    title: { nl: "Cloud Architect", en: "Cloud Architect" },
    subtitle: {
      nl: "Ontwerp schaalbare cloudoplossingen voor de toekomst",
      en: "Design scalable cloud solutions for the future",
    },
    description: {
      nl: "Een cloud architect ontwerpt en overziet de cloudstrategie en -infrastructuur van een organisatie. Je bepaalt welke cloudservices worden gebruikt, hoe systemen worden gemigreerd en hoe de architectuur optimaal, kostenefficiënt en veilig blijft. In Nederland migreren bedrijven in rap tempo naar de cloud, waardoor cloud architects tot de best betaalde IT-professionals behoren. Je hebt een brede technische kennis en strategisch inzicht nodig.",
      en: "A cloud architect designs and oversees an organisation's cloud strategy and infrastructure. You determine which cloud services are used, how systems are migrated and how the architecture remains optimal, cost-efficient and secure. In the Netherlands, companies are migrating to the cloud at a rapid pace, making cloud architects among the best-paid IT professionals. You need broad technical knowledge and strategic insight.",
    },
    skills: {
      nl: ["AWS, Azure of GCP (expert niveau)", "Microservices architectuur", "Serverless computing", "Kostenbeheer in de cloud", "Security en compliance", "Terraform / CloudFormation", "Netwerk- en opslagarchitectuur"],
      en: ["AWS, Azure or GCP (expert level)", "Microservices architecture", "Serverless computing", "Cloud cost management", "Security and compliance", "Terraform / CloudFormation", "Network and storage architecture"],
    },
    education: {
      nl: "WO informatica of computer engineering. AWS Solutions Architect Professional, Azure Solutions Architect Expert of GCP Professional Cloud Architect certificeringen zijn essentieel.",
      en: "Master's in Computer Science or Computer Engineering. AWS Solutions Architect Professional, Azure Solutions Architect Expert or GCP Professional Cloud Architect certifications are essential.",
    },
    salaryEntry: "€4.000 – €5.500",
    salaryMid: "€5.500 – €7.500",
    salarySenior: "€7.500 – €12.000",
    careerPath: {
      nl: "Cloud Engineer → Senior Cloud Engineer → Cloud Architect → Principal Cloud Architect → VP of Engineering / CTO.",
      en: "Cloud Engineer → Senior Cloud Engineer → Cloud Architect → Principal Cloud Architect → VP of Engineering / CTO.",
    },
  },
  {
    slug: "ai-ml-engineer",
    category: "technology",
    emoji: "🤖",
    title: { nl: "AI/ML Engineer", en: "AI/ML Engineer" },
    subtitle: {
      nl: "Bouw intelligente systemen die leren en verbeteren",
      en: "Build intelligent systems that learn and improve",
    },
    description: {
      nl: "Een AI/ML engineer ontwikkelt en implementeert machine learning-modellen en AI-systemen in productieomgevingen. Je werkt aan alles van aanbevelingssystemen tot computervision en taalmodellen. Met de explosieve groei van generatieve AI is de vraag naar deze specialisten in Nederland ongekend hoog. Je combineert wiskundige inzichten met engineering-vaardigheden om modellen niet alleen te trainen maar ook schaalbaar te deployen.",
      en: "An AI/ML engineer develops and deploys machine learning models and AI systems in production environments. You work on everything from recommendation systems to computer vision and language models. With the explosive growth of generative AI, demand for these specialists in the Netherlands is unprecedentedly high. You combine mathematical insight with engineering skills to not only train models but also deploy them at scale.",
    },
    skills: {
      nl: ["Python (PyTorch, TensorFlow, JAX)", "MLOps (MLflow, Kubeflow)", "Grote taalmodellen (LLMs)", "Feature engineering", "Model evaluatie & monitoring", "Wiskunde (lineaire algebra, calculus)", "Cloud ML-platforms"],
      en: ["Python (PyTorch, TensorFlow, JAX)", "MLOps (MLflow, Kubeflow)", "Large language models (LLMs)", "Feature engineering", "Model evaluation & monitoring", "Mathematics (linear algebra, calculus)", "Cloud ML platforms"],
    },
    education: {
      nl: "WO informatica, AI of wiskundige vakgebieden. Een master of PhD is gebruikelijk. Specialisaties in deep learning, NLP of computer vision zijn gewild.",
      en: "Master's in Computer Science, AI or mathematical disciplines. A Master's or PhD is common. Specialisations in deep learning, NLP or computer vision are in demand.",
    },
    salaryEntry: "€3.500 – €5.000",
    salaryMid: "€5.000 – €7.000",
    salarySenior: "€7.000 – €12.000",
    careerPath: {
      nl: "ML Engineer → Senior ML Engineer → Staff ML Engineer → Principal ML Engineer → Head of AI. Alternatieven zijn Research Scientist of AI Product Manager.",
      en: "ML Engineer → Senior ML Engineer → Staff ML Engineer → Principal ML Engineer → Head of AI. Alternatives include Research Scientist or AI Product Manager.",
    },
  },
  {
    slug: "full-stack-developer",
    category: "technology",
    emoji: "🌐",
    title: { nl: "Full Stack Developer", en: "Full Stack Developer" },
    subtitle: {
      nl: "Beheers zowel front-end als back-end development",
      en: "Master both front-end and back-end development",
    },
    description: {
      nl: "Een full stack developer werkt aan alle lagen van een webapplicatie: van de gebruikersinterface tot de database en serverlogica. Je bent een allrounder die zowel zelfstandig als in een team complete features kan bouwen. In Nederland is de full stack developer een van de meest gevraagde rollen bij start-ups en scale-ups. Je schakelt moeiteloos tussen React, Node.js, databases en cloudservices.",
      en: "A full stack developer works on all layers of a web application: from the user interface to the database and server logic. You are an all-rounder who can build complete features both independently and as part of a team. In the Netherlands, the full stack developer is one of the most sought-after roles at start-ups and scale-ups. You switch effortlessly between React, Node.js, databases and cloud services.",
    },
    skills: {
      nl: ["JavaScript/TypeScript", "React, Vue of Angular", "Node.js of Python backend", "SQL en NoSQL databases", "REST en GraphQL APIs", "Docker en basiskennis cloud", "HTML & CSS"],
      en: ["JavaScript/TypeScript", "React, Vue or Angular", "Node.js or Python backend", "SQL and NoSQL databases", "REST and GraphQL APIs", "Docker and basic cloud knowledge", "HTML & CSS"],
    },
    education: {
      nl: "HBO of WO informatica of software engineering. Bootcamp-achtergrond is geaccepteerd met een sterk portfolio.",
      en: "Bachelor's or Master's in Computer Science or Software Engineering. Bootcamp background is accepted with a strong portfolio.",
    },
    salaryEntry: "€2.800 – €3.800",
    salaryMid: "€3.800 – €5.500",
    salarySenior: "€5.500 – €8.500",
    careerPath: {
      nl: "Junior Full Stack Developer → Medior Full Stack Developer → Senior Full Stack Developer → Tech Lead → Software Architect of Engineering Manager.",
      en: "Junior Full Stack Developer → Medior Full Stack Developer → Senior Full Stack Developer → Tech Lead → Software Architect or Engineering Manager.",
    },
  },
  {
    slug: "ux-ui-designer",
    category: "technology",
    emoji: "🎨",
    title: { nl: "UX/UI Designer", en: "UX/UI Designer" },
    subtitle: {
      nl: "Creëer intuïtieve en prachtige digitale ervaringen",
      en: "Create intuitive and beautiful digital experiences",
    },
    description: {
      nl: "Een UX/UI designer vertaalt gebruikersbehoeften naar heldere, intuïtieve en visueel aantrekkelijke interfaces. Je combineert gebruikersonderzoek, informatiearchitectuur en visueel ontwerp in je werk. In Nederland groeit de aandacht voor gebruikerservaring sterk bij zowel tech-bedrijven als traditionele organisaties. Je werkt nauw samen met product managers en developers om designs van schets tot liveomgeving te brengen.",
      en: "A UX/UI designer translates user needs into clear, intuitive and visually attractive interfaces. You combine user research, information architecture and visual design in your work. In the Netherlands, attention to user experience is growing strongly at both tech companies and traditional organisations. You work closely with product managers and developers to bring designs from sketch to live environment.",
    },
    skills: {
      nl: ["Figma of Sketch", "Gebruikersonderzoek en interviews", "Prototyping", "Design systems", "Toegankelijkheid (WCAG)", "Informatiearchitectuur", "Basiskennis HTML/CSS is een pluspunt"],
      en: ["Figma or Sketch", "User research and interviews", "Prototyping", "Design systems", "Accessibility (WCAG)", "Information architecture", "Basic HTML/CSS knowledge is a plus"],
    },
    education: {
      nl: "HBO communicatiedesign, interaction design of grafisch ontwerp. Aangevuld met UX-certificaten (Google UX Design Certificate, Nielsen Norman Group).",
      en: "Bachelor's in Communication Design, Interaction Design or Graphic Design. Supplemented with UX certificates (Google UX Design Certificate, Nielsen Norman Group).",
    },
    salaryEntry: "€2.600 – €3.600",
    salaryMid: "€3.600 – €5.000",
    salarySenior: "€5.000 – €7.500",
    careerPath: {
      nl: "Junior UX Designer → UX/UI Designer → Senior UX Designer → Lead Designer → Head of Design of Design Director.",
      en: "Junior UX Designer → UX/UI Designer → Senior UX Designer → Lead Designer → Head of Design or Design Director.",
    },
  },
  {
    slug: "product-manager-tech",
    category: "technology",
    emoji: "🗺️",
    title: { nl: "Product Manager (Tech)", en: "Product Manager (Tech)" },
    subtitle: {
      nl: "Stuur de visie en roadmap van digitale producten",
      en: "Drive the vision and roadmap of digital products",
    },
    description: {
      nl: "Een technisch product manager definieert de visie, strategie en roadmap van digitale producten. Je werkt op het snijvlak van business, technologie en design. Je prioriteert features op basis van klantfeedback, businessdoelen en technische haalbaarheid. In Nederland is de product manager een sleutelrol bij elke tech-scale-up. Succesvolle PMs combineren analytisch vermogen met sterke communicatieve vaardigheden en empathie voor de gebruiker.",
      en: "A technical product manager defines the vision, strategy and roadmap of digital products. You work at the intersection of business, technology and design. You prioritise features based on customer feedback, business goals and technical feasibility. In the Netherlands, the product manager is a key role at every tech scale-up. Successful PMs combine analytical ability with strong communication skills and empathy for the user.",
    },
    skills: {
      nl: ["Product roadmap planning", "Datagedreven besluitvorming", "Agile/Scrum product ownership", "Stakeholdermanagement", "User story schrijven", "A/B testing", "OKR-methodologie"],
      en: ["Product roadmap planning", "Data-driven decision making", "Agile/Scrum product ownership", "Stakeholder management", "User story writing", "A/B testing", "OKR methodology"],
    },
    education: {
      nl: "WO bedrijfskunde, informatica of een technisch vakgebied. Veel succesvolle PMs komen via developer- of analyst-achtergrond.",
      en: "Master's in Business Administration, Computer Science or a technical discipline. Many successful PMs come from developer or analyst backgrounds.",
    },
    salaryEntry: "€3.500 – €5.000",
    salaryMid: "€5.000 – €7.000",
    salarySenior: "€7.000 – €10.000",
    careerPath: {
      nl: "Associate Product Manager → Product Manager → Senior Product Manager → Principal PM → Director of Product → VP of Product / CPO.",
      en: "Associate Product Manager → Product Manager → Senior Product Manager → Principal PM → Director of Product → VP of Product / CPO.",
    },
  },
  {
    slug: "it-project-manager",
    category: "technology",
    emoji: "📋",
    title: { nl: "IT Projectmanager", en: "IT Project Manager" },
    subtitle: {
      nl: "Leid complexe IT-projecten van A tot Z",
      en: "Lead complex IT projects from start to finish",
    },
    description: {
      nl: "Een IT projectmanager begeleidt technische projecten van initiatief tot oplevering, binnen tijd en budget. Je coördineert teams van developers, designers en stakeholders en houdt risico's en afhankelijkheden in de gaten. In Nederland is veel behoefte aan IT-projectmanagers bij overheidsorganisaties, banken en grote bedrijven die digitale transformaties doorvoeren. Je combineert leiderschapsvaardigheden met technisch begrip.",
      en: "An IT project manager guides technical projects from initiation to delivery, within time and budget. You coordinate teams of developers, designers and stakeholders and monitor risks and dependencies. In the Netherlands, there is great demand for IT project managers at government organisations, banks and large companies undergoing digital transformations. You combine leadership skills with technical understanding.",
    },
    skills: {
      nl: ["Projectmanagementmethoden (PRINCE2, PMP, Scrum)", "Budgetbeheer", "Risicomanagement", "Stakeholdercommunicatie", "MS Project of Jira", "Technisch begrip", "Conflicthantering"],
      en: ["Project management methodologies (PRINCE2, PMP, Scrum)", "Budget management", "Risk management", "Stakeholder communication", "MS Project or Jira", "Technical understanding", "Conflict resolution"],
    },
    education: {
      nl: "HBO of WO informatica of bedrijfskunde. PRINCE2, PMP of IPMA-certificering is essentieel. Scrum Master certificering is een plus.",
      en: "Bachelor's or Master's in Computer Science or Business Administration. PRINCE2, PMP or IPMA certification is essential. Scrum Master certification is a plus.",
    },
    salaryEntry: "€3.500 – €4.800",
    salaryMid: "€4.800 – €6.500",
    salarySenior: "€6.500 – €9.000",
    careerPath: {
      nl: "Junior Projectmanager → IT Projectmanager → Senior IT Projectmanager → Program Manager → Portfolio Manager → IT Director.",
      en: "Junior Project Manager → IT Project Manager → Senior IT Project Manager → Program Manager → Portfolio Manager → IT Director.",
    },
  },

  // ── Healthcare ───────────────────────────────────────────────────────────────
  {
    slug: "huisarts",
    category: "healthcare",
    emoji: "🩺",
    title: { nl: "Huisarts", en: "General Practitioner (GP)" },
    subtitle: {
      nl: "De eerste lijn van de Nederlandse gezondheidszorg",
      en: "The front line of Dutch healthcare",
    },
    description: {
      nl: "Een huisarts is het eerste aanspreekpunt voor patiënten met gezondheidsproblemen. Je diagnosticeert en behandelt een breed scala aan aandoeningen, verwijst door naar specialisten en bouwt langdurige relaties op met patiënten en hun families. In Nederland speelt de huisarts een cruciale rol in het gezondheidsstelsel. De combinatie van medisch-inhoudelijk werk, preventie en persoonlijk contact maakt het een veelzijdig en zinvol beroep.",
      en: "A general practitioner is the first point of contact for patients with health problems. You diagnose and treat a wide range of conditions, refer to specialists and build long-term relationships with patients and their families. In the Netherlands, the GP plays a crucial role in the healthcare system. The combination of medical content work, prevention and personal contact makes it a versatile and meaningful profession.",
    },
    skills: {
      nl: ["Brede medische kennis", "Diagnostisch redeneren", "Communicatie met patiënten", "Farmacologie", "Preventieve gezondheidszorg", "Huisartsinformatiesysteem (HIS)", "Samenwerking met specialisten"],
      en: ["Broad medical knowledge", "Diagnostic reasoning", "Patient communication", "Pharmacology", "Preventive healthcare", "GP information systems (HIS)", "Collaboration with specialists"],
    },
    education: {
      nl: "WO geneeskunde (6 jaar), gevolgd door de huisartsopleiding (3 jaar). Totaal minimaal 9 jaar studie en opleiding.",
      en: "Master's in Medicine (6 years), followed by GP training (3 years). Total minimum 9 years of study and training.",
    },
    salaryEntry: "€5.500 – €7.000",
    salaryMid: "€7.000 – €10.000",
    salarySenior: "€10.000 – €14.000",
    careerPath: {
      nl: "Arts-assistent → Huisarts in opleiding (HAIO) → Huisarts in loondienst → Waarnemer → Praktijkhouder (eigen praktijk) → Opleider nieuwe HAIO's.",
      en: "Junior doctor → GP trainee (HAIO) → Salaried GP → Locum → Practice owner → GP trainer.",
    },
  },
  {
    slug: "verpleegkundige",
    category: "healthcare",
    emoji: "💊",
    title: { nl: "Verpleegkundige", en: "Nurse" },
    subtitle: {
      nl: "Zorg voor patiënten op het scherpst van de snede",
      en: "Care for patients at the sharpest edge of healthcare",
    },
    description: {
      nl: "Een verpleegkundige verleent directe zorg aan patiënten in ziekenhuizen, verpleeghuizen, thuiszorg of GGZ. Je observeert patiënten, voert medische handelingen uit, geeft medicatie toe en begeleidt patiënten en hun naasten. In Nederland is er een structureel tekort aan verpleegkundigen, waardoor de arbeidsmarktpositie sterk is. Je werkt in multidisciplinaire teams en neemt steeds meer regie in de directe patiëntenzorg.",
      en: "A nurse provides direct care to patients in hospitals, nursing homes, home care or mental health settings. You observe patients, carry out medical procedures, administer medication and support patients and their loved ones. In the Netherlands there is a structural shortage of nurses, giving you a strong labour market position. You work in multidisciplinary teams and take on increasing responsibility in direct patient care.",
    },
    skills: {
      nl: ["Klinische verpleegkunde", "Medicatiebeleid", "Patiëntobservatie", "Verpleegkundige diagnose", "Communicatie en empathie", "Werken onder druk", "Elektronisch patiëntendossier (EPD)"],
      en: ["Clinical nursing", "Medication policy", "Patient observation", "Nursing diagnosis", "Communication and empathy", "Working under pressure", "Electronic patient records (EPD)"],
    },
    education: {
      nl: "MBO Verpleegkunde (niveau 4) of HBO Verpleegkunde. Specialisaties mogelijk in IC, SEH, oncologie, psychiatrie of geriatrie.",
      en: "MBO Nursing (level 4) or HBO Nursing. Specialisations possible in ICU, A&E, oncology, psychiatry or geriatrics.",
    },
    salaryEntry: "€2.300 – €3.200",
    salaryMid: "€3.200 – €4.200",
    salarySenior: "€4.200 – €5.500",
    careerPath: {
      nl: "Verpleegkundige → Gespecialiseerd Verpleegkundige → Verpleegkundig Specialist (VS) → Verpleegkundig Manager → Hoofd Verpleging.",
      en: "Nurse → Specialist Nurse → Nurse Practitioner (VS) → Nursing Manager → Head of Nursing.",
    },
  },
  {
    slug: "tandarts",
    category: "healthcare",
    emoji: "🦷",
    title: { nl: "Tandarts", en: "Dentist" },
    subtitle: {
      nl: "Bewaker van mondgezondheid en welzijn",
      en: "Guardian of oral health and wellbeing",
    },
    description: {
      nl: "Een tandarts diagnosticeert en behandelt aandoeningen van tanden, kiezen, kaak en omliggende weefsels. Je voert behandelingen uit zoals vullingen, wortelkanaalbehandelingen en extracties, maar geeft ook preventief advies. In Nederland is de tandarts een vrij beroep met goede inkomsten, maar hoge startkosten voor een eigen praktijk. Je combineert technische precisie met patiëntgericht denken.",
      en: "A dentist diagnoses and treats conditions of teeth, molars, jaw and surrounding tissues. You perform treatments such as fillings, root canal treatments and extractions, and also give preventive advice. In the Netherlands, dentistry is a liberal profession with good earnings but high start-up costs for your own practice. You combine technical precision with patient-centred thinking.",
    },
    skills: {
      nl: ["Tandheelkundige procedures", "Röntgendiagnostiek", "Patiëntcommunicatie", "Anesthesiologie", "Tandtechnische materiaalkennis", "Praktijkmanagement", "Hygiëne en sterilisatie"],
      en: ["Dental procedures", "X-ray diagnostics", "Patient communication", "Anaesthesiology", "Dental material knowledge", "Practice management", "Hygiene and sterilisation"],
    },
    education: {
      nl: "WO tandheelkunde (5-6 jaar). Specialisaties mogelijk in orthodontie, parodontologie of mondziekten.",
      en: "Master's in Dentistry (5-6 years). Specialisations possible in orthodontics, periodontics or oral medicine.",
    },
    salaryEntry: "€4.500 – €6.000",
    salaryMid: "€6.000 – €9.000",
    salarySenior: "€9.000 – €15.000",
    careerPath: {
      nl: "Tandarts-assistent (studie) → Waarnemend Tandarts → Tandarts in loondienst → Praktijkhouder → Specialist (via vervolgopleidingen).",
      en: "Dental student → Locum Dentist → Salaried Dentist → Practice owner → Specialist (via further training).",
    },
  },
  {
    slug: "apotheker",
    category: "healthcare",
    emoji: "⚕️",
    title: { nl: "Apotheker", en: "Pharmacist" },
    subtitle: {
      nl: "Medicijnexpert voor veilig en effectief geneesmiddelengebruik",
      en: "Medication expert for safe and effective drug use",
    },
    description: {
      nl: "Een apotheker bereidt en verstrekt geneesmiddelen en adviseert patiënten, artsen en andere zorgverleners over veilig medicijngebruik. Je bewaakt interacties tussen medicijnen en controleert recepten. In Nederland werken apothekers in openbare apotheken, ziekenhuizen, de farmaceutische industrie of de overheid. De rol evolueert steeds meer richting begeleiding van medicatiegebruik en farmacotherapeutisch overleg met huisartsen.",
      en: "A pharmacist prepares and dispenses medicines and advises patients, doctors and other healthcare providers on safe medication use. You monitor drug interactions and check prescriptions. In the Netherlands, pharmacists work in community pharmacies, hospitals, the pharmaceutical industry or government. The role is increasingly evolving towards medication counselling and pharmacotherapeutic consultation with GPs.",
    },
    skills: {
      nl: ["Farmacologie en toxicologie", "Medicatiebewaking", "Patiëntcounseling", "Farmaceutische bereidingen", "Regelgeving (Geneesmiddelenwet)", "Klinische farmaceutische zorg", "Apotheeksoftware"],
      en: ["Pharmacology and toxicology", "Medication safety monitoring", "Patient counselling", "Pharmaceutical compounding", "Drug legislation (Geneesmiddelenwet)", "Clinical pharmaceutical care", "Pharmacy software"],
    },
    education: {
      nl: "WO farmacie (6 jaar) en stage in openbare apotheek of ziekenhuisapotheek. Registratie als apotheker via BIG-register verplicht.",
      en: "Master's in Pharmacy (6 years) and placement in a community or hospital pharmacy. Registration as a pharmacist via the BIG register is mandatory.",
    },
    salaryEntry: "€3.500 – €4.800",
    salaryMid: "€4.800 – €6.500",
    salarySenior: "€6.500 – €10.000",
    careerPath: {
      nl: "Farmaceutisch medewerker (studie) → Apotheker → Apotheker-manager → Hoofd Apotheek → Ziekenhuisapotheker-specialist.",
      en: "Pharmacy student → Pharmacist → Pharmacy Manager → Head Pharmacist → Clinical Pharmacist Specialist.",
    },
  },
  {
    slug: "fysiotherapeut",
    category: "healthcare",
    emoji: "🏃",
    title: { nl: "Fysiotherapeut", en: "Physiotherapist" },
    subtitle: {
      nl: "Help mensen bewegen, herstellen en presteren",
      en: "Help people move, recover and perform",
    },
    description: {
      nl: "Een fysiotherapeut onderzoekt en behandelt patiënten met bewegingsproblemen door lichamelijke therapie, oefeningen en manuele technieken. Je werkt met mensen die herstellen van operaties, sportblessures, chronische pijn of neurologische aandoeningen. In Nederland is fysiotherapie grotendeels eerstelijns zorg. Veel fysiotherapeuten openen hun eigen praktijk of werken als ZZP'er, wat goede ondernemerskansen biedt.",
      en: "A physiotherapist examines and treats patients with movement problems through physical therapy, exercises and manual techniques. You work with people recovering from surgery, sports injuries, chronic pain or neurological conditions. In the Netherlands, physiotherapy is largely primary care. Many physiotherapists open their own practice or work as self-employed, offering good entrepreneurial opportunities.",
    },
    skills: {
      nl: ["Manuele therapie", "Sportstechnisch handelen", "Therapeutisch oefenen", "Patiëntanamnese", "Dry needling", "Neurologische revalidatie", "Praktijkmanagement"],
      en: ["Manual therapy", "Sports physiotherapy", "Therapeutic exercise", "Patient history taking", "Dry needling", "Neurological rehabilitation", "Practice management"],
    },
    education: {
      nl: "HBO Fysiotherapie (4 jaar). Specialisaties via KNGF: manueel therapeut, sportfysiotherapeut, kinderfysiotherapeut.",
      en: "Bachelor's in Physiotherapy (4 years). Specialisations via KNGF: manual therapist, sports physiotherapist, paediatric physiotherapist.",
    },
    salaryEntry: "€2.400 – €3.200",
    salaryMid: "€3.200 – €4.500",
    salarySenior: "€4.500 – €7.000",
    careerPath: {
      nl: "Junior Fysiotherapeut → Fysiotherapeut → Gespecialiseerd Fysiotherapeut → Praktijkhouder → Opleider / Onderzoeker.",
      en: "Junior Physiotherapist → Physiotherapist → Specialist Physiotherapist → Practice Owner → Educator / Researcher.",
    },
  },

  // ── Finance ──────────────────────────────────────────────────────────────────
  {
    slug: "accountant",
    category: "finance",
    emoji: "📒",
    title: { nl: "Accountant", en: "Accountant" },
    subtitle: {
      nl: "Waarborg financiële betrouwbaarheid en transparantie",
      en: "Ensure financial reliability and transparency",
    },
    description: {
      nl: "Een accountant controleert en certificeert financiële overzichten van bedrijven en organisaties. Je analyseert boekhouding, identificeert risico's en zorgt voor naleving van wet- en regelgeving. In Nederland werken accountants bij de Big Four (KPMG, Deloitte, EY, PwC), bij mkb-kantoren of in loondienst bij grote ondernemingen. Het beroep is sterk gereguleerd via de NBA (Nederlandse Beroepsorganisatie van Accountants).",
      en: "An accountant audits and certifies financial statements of companies and organisations. You analyse bookkeeping, identify risks and ensure compliance with laws and regulations. In the Netherlands, accountants work at the Big Four (KPMG, Deloitte, EY, PwC), at SME firms or as employees at large companies. The profession is strongly regulated through the NBA (Dutch Professional Association of Accountants).",
    },
    skills: {
      nl: ["Financiële audit", "IFRS en Nederlandse GAAP", "Belastingrecht", "Data-analyse (Excel, Power BI)", "Risicoanalyse", "Communicatie met cliënten", "SAP of Oracle ERP"],
      en: ["Financial audit", "IFRS and Dutch GAAP", "Tax law", "Data analysis (Excel, Power BI)", "Risk analysis", "Client communication", "SAP or Oracle ERP"],
    },
    education: {
      nl: "WO accountancy of bedrijfseconomie, gevolgd door de RA-opleiding (Registeraccountant). Duurt in totaal 7-8 jaar.",
      en: "Master's in Accountancy or Business Economics, followed by the RA qualification (Chartered Accountant). Takes 7-8 years in total.",
    },
    salaryEntry: "€3.000 – €4.200",
    salaryMid: "€4.200 – €6.500",
    salarySenior: "€6.500 – €12.000",
    careerPath: {
      nl: "Accountantsassistent → Junior Accountant → Accountant → Senior Accountant → Manager → Partner.",
      en: "Audit Assistant → Junior Accountant → Accountant → Senior Accountant → Manager → Partner.",
    },
  },
  {
    slug: "financial-analyst",
    category: "finance",
    emoji: "📈",
    title: { nl: "Financial Analyst", en: "Financial Analyst" },
    subtitle: {
      nl: "Vertaal data naar strategische financiële beslissingen",
      en: "Translate data into strategic financial decisions",
    },
    description: {
      nl: "Een financial analyst analyseert financiële data, bouwt modellen en ondersteunt besluitvorming over investeringen, waarderingen en bedrijfsstrategie. Je maakt prognoses, voert scenario-analyses uit en presenteert je bevindingen aan het management. In Nederland is er veel vraag bij banken, private equity, verzekeraars en grote corporates. Je combineert analytisch denkvermogen met communicatieve vaardigheden.",
      en: "A financial analyst analyses financial data, builds models and supports decision-making on investments, valuations and corporate strategy. You create forecasts, conduct scenario analyses and present your findings to management. In the Netherlands, there is strong demand at banks, private equity, insurers and large corporates. You combine analytical thinking with communication skills.",
    },
    skills: {
      nl: ["Financiële modellering (Excel, VBA)", "Waarderingstechnieken (DCF, comparables)", "Financieel rapporteren", "Power BI of Tableau", "Bloomberg of FactSet", "Presentatievaardigheden", "Boekhoudkennis"],
      en: ["Financial modelling (Excel, VBA)", "Valuation techniques (DCF, comparables)", "Financial reporting", "Power BI or Tableau", "Bloomberg or FactSet", "Presentation skills", "Accounting knowledge"],
    },
    education: {
      nl: "WO bedrijfseconomie, finance of econometrie. CFA-certificering is zeer gewild voor senior functies.",
      en: "Master's in Business Economics, Finance or Econometrics. CFA certification is highly valued for senior positions.",
    },
    salaryEntry: "€3.200 – €4.500",
    salaryMid: "€4.500 – €6.500",
    salarySenior: "€6.500 – €10.000",
    careerPath: {
      nl: "Junior Analyst → Analyst → Senior Analyst → Associate → Vice President → Director / Managing Director.",
      en: "Junior Analyst → Analyst → Senior Analyst → Associate → Vice President → Director / Managing Director.",
    },
  },
  {
    slug: "risk-manager",
    category: "finance",
    emoji: "🛡️",
    title: { nl: "Risk Manager", en: "Risk Manager" },
    subtitle: {
      nl: "Identificeer en beheer risico's voor financiële stabiliteit",
      en: "Identify and manage risks for financial stability",
    },
    description: {
      nl: "Een risk manager identificeert, kwantificeert en beheert risico's die een organisatie bedreigen, van kredietrisico tot operationeel en reputatierisico. Je ontwikkelt risicoraamwerken, stelt beleid op en rapporteert aan het bestuur. Nederlandse banken, verzekeraars en pensioenfondsen hebben sterke risicofuncties nodig door strenge regelgeving (Basel III, Solvency II). Je hebt een analytisch profiel met een brede bedrijfsmatige blik.",
      en: "A risk manager identifies, quantifies and manages risks that threaten an organisation, from credit risk to operational and reputational risk. You develop risk frameworks, set policy and report to the board. Dutch banks, insurers and pension funds require strong risk functions due to strict regulations (Basel III, Solvency II). You have an analytical profile with a broad business perspective.",
    },
    skills: {
      nl: ["Kwantitatieve risicomodellen", "Basel III / Solvency II regelgeving", "Stress testing", "Scenario-analyse", "SQL en data-analyse", "Rapporteren aan bestuur", "Communicatie met toezichthouders"],
      en: ["Quantitative risk models", "Basel III / Solvency II regulation", "Stress testing", "Scenario analysis", "SQL and data analysis", "Board-level reporting", "Communication with regulators"],
    },
    education: {
      nl: "WO econometrie, wiskunde, actuariaat of finance. FRM (Financial Risk Manager) of PRM certificering is een pluspunt.",
      en: "Master's in Econometrics, Mathematics, Actuarial Science or Finance. FRM (Financial Risk Manager) or PRM certification is a plus.",
    },
    salaryEntry: "€3.500 – €5.000",
    salaryMid: "€5.000 – €7.000",
    salarySenior: "€7.000 – €11.000",
    careerPath: {
      nl: "Risk Analyst → Risk Manager → Senior Risk Manager → Head of Risk → Chief Risk Officer (CRO).",
      en: "Risk Analyst → Risk Manager → Senior Risk Manager → Head of Risk → Chief Risk Officer (CRO).",
    },
  },
  {
    slug: "controller",
    category: "finance",
    emoji: "🧮",
    title: { nl: "Controller", en: "Controller" },
    subtitle: {
      nl: "De financiële motor achter bedrijfsoperaties",
      en: "The financial engine behind business operations",
    },
    description: {
      nl: "Een controller beheert de financiële planning en analyse (FP&A) van een organisatie. Je stelt budgetten op, analyseert afwijkingen, bewaakt kasstromen en zorgt voor betrouwbare financiële rapportages. In Nederland werken controllers in vrijwel elke sector, van het mkb tot multinationals. De rol varieert van operationeel controller (focus op processen) tot business controller (focus op strategie).",
      en: "A controller manages the financial planning and analysis (FP&A) of an organisation. You prepare budgets, analyse variances, monitor cash flows and ensure reliable financial reporting. In the Netherlands, controllers work in virtually every sector, from SMEs to multinationals. The role ranges from operational controller (process focus) to business controller (strategy focus).",
    },
    skills: {
      nl: ["Budgettering en forecasting", "Management rapportages", "ERP-systemen (SAP, Oracle)", "Excel en Power BI", "Interne controle", "IFRS of Nederlandse GAAP", "Analytisch denken"],
      en: ["Budgeting and forecasting", "Management reporting", "ERP systems (SAP, Oracle)", "Excel and Power BI", "Internal controls", "IFRS or Dutch GAAP", "Analytical thinking"],
    },
    education: {
      nl: "HBO of WO accountancy, bedrijfseconomie of finance. RC (Register Controller) opleiding is de standaard voor senior functies.",
      en: "Bachelor's or Master's in Accountancy, Business Economics or Finance. RC (Register Controller) qualification is the standard for senior positions.",
    },
    salaryEntry: "€3.000 – €4.200",
    salaryMid: "€4.200 – €6.000",
    salarySenior: "€6.000 – €9.000",
    careerPath: {
      nl: "Junior Controller → Controller → Senior Controller → Business Controller → Head of Finance / CFO.",
      en: "Junior Controller → Controller → Senior Controller → Business Controller → Head of Finance / CFO.",
    },
  },
  {
    slug: "belastingadviseur",
    category: "finance",
    emoji: "📑",
    title: { nl: "Belastingadviseur", en: "Tax Advisor" },
    subtitle: {
      nl: "Navigeer de complexe wereld van fiscaliteit",
      en: "Navigate the complex world of taxation",
    },
    description: {
      nl: "Een belastingadviseur adviseert particulieren en bedrijven over belastingoptimalisatie, fiscale planning en naleving van belastingwetgeving. Je houdt je bezig met vennootschapsbelasting, BTW, inkomstenbelasting en internationale belastingvraagstukken. In Nederland is het belastingstelsel complex, wat de vraag naar goed opgeleide fiscalisten groot maakt. Je werkt bij accountantskantoren, gespecialiseerde belastingadvieskantoren of in loondienst bij grote bedrijven.",
      en: "A tax advisor advises individuals and companies on tax optimisation, fiscal planning and compliance with tax legislation. You deal with corporate tax, VAT, income tax and international tax issues. In the Netherlands, the tax system is complex, which generates great demand for well-trained tax specialists. You work at accounting firms, specialist tax advisory firms or as an employee at large companies.",
    },
    skills: {
      nl: ["Vennootschapsbelasting", "BTW-wetgeving", "Transfer pricing", "Internationale belastingverdragen", "Belastingaangifte software", "Juridisch redeneren", "Klantadvies"],
      en: ["Corporate tax", "VAT legislation", "Transfer pricing", "International tax treaties", "Tax return software", "Legal reasoning", "Client advisory"],
    },
    education: {
      nl: "WO fiscaal recht of fiscale economie. Inschrijving bij het Register Belastingadviseurs (RB) of Nederlandse Orde van Belastingadviseurs (NOB) is de norm.",
      en: "Master's in Tax Law or Fiscal Economics. Registration with the Register Belastingadviseurs (RB) or Nederlandse Orde van Belastingadviseurs (NOB) is the standard.",
    },
    salaryEntry: "€3.200 – €4.500",
    salaryMid: "€4.500 – €7.000",
    salarySenior: "€7.000 – €12.000",
    careerPath: {
      nl: "Fiscaal Medewerker → Belastingadviseur → Senior Belastingadviseur → Manager Fiscale Zaken → Partner / Head of Tax.",
      en: "Tax Assistant → Tax Advisor → Senior Tax Advisor → Tax Manager → Partner / Head of Tax.",
    },
  },

  // ── Engineering ──────────────────────────────────────────────────────────────
  {
    slug: "mechanical-engineer",
    category: "engineering",
    emoji: "⚙️",
    title: { nl: "Werktuigbouwkundig Ingenieur", en: "Mechanical Engineer" },
    subtitle: {
      nl: "Ontwerp en optimaliseer mechanische systemen",
      en: "Design and optimise mechanical systems",
    },
    description: {
      nl: "Een werktuigbouwkundig ingenieur ontwerpt, analyseert en verbetert mechanische systemen, machines en producten. Je werkt met CAD-software, voert berekeningen uit en begeleidt productieprocessen. Nederland heeft een sterke maakindustrie met bedrijven als ASML, Philips en Fokker die continu werktuigbouwkundigen zoeken. Je combineert technische kennis met creativiteit om innovatieve oplossingen te ontwikkelen.",
      en: "A mechanical engineer designs, analyses and improves mechanical systems, machines and products. You work with CAD software, perform calculations and supervise production processes. The Netherlands has a strong manufacturing industry with companies like ASML, Philips and Fokker continuously seeking mechanical engineers. You combine technical knowledge with creativity to develop innovative solutions.",
    },
    skills: {
      nl: ["CAD/CAM (SolidWorks, CATIA)", "Eindige-elementenmethode (FEM)", "Thermodynamica en vloeistofmechanica", "Materiaalkunde", "Productieprocessen", "Projectmanagement", "GD&T tekeningen"],
      en: ["CAD/CAM (SolidWorks, CATIA)", "Finite element analysis (FEA)", "Thermodynamics and fluid mechanics", "Materials science", "Manufacturing processes", "Project management", "GD&T drawings"],
    },
    education: {
      nl: "HBO of WO Werktuigbouwkunde of Mechatronica. Specialisaties in automotive, luchtvaart, precisietechnologie of energie.",
      en: "Bachelor's or Master's in Mechanical Engineering or Mechatronics. Specialisations in automotive, aerospace, precision technology or energy.",
    },
    salaryEntry: "€2.800 – €4.000",
    salaryMid: "€4.000 – €5.800",
    salarySenior: "€5.800 – €8.500",
    careerPath: {
      nl: "Junior Engineer → Engineer → Senior Engineer → Lead Engineer → Principal Engineer → Engineering Manager / Technisch Directeur.",
      en: "Junior Engineer → Engineer → Senior Engineer → Lead Engineer → Principal Engineer → Engineering Manager / Technical Director.",
    },
  },
  {
    slug: "electrical-engineer",
    category: "engineering",
    emoji: "⚡",
    title: { nl: "Elektrotechnisch Ingenieur", en: "Electrical Engineer" },
    subtitle: {
      nl: "Ontwerp elektrische systemen die de wereld aandrijven",
      en: "Design electrical systems that power the world",
    },
    description: {
      nl: "Een elektrotechnisch ingenieur ontwerpt en ontwikkelt elektrische systemen, van vermogenselektronica tot embedded systems en hoogspanningsinstallaties. Je werkt aan producten in de energiesector, halfgeleiderindustrie, automotive of consumentenelektronica. Nederland is een wereldspeler in chips (ASML, NXP) en duurzame energie, wat elektrotechnici ruim werk biedt. Je combineert theoretische kennis met praktische engineering.",
      en: "An electrical engineer designs and develops electrical systems, from power electronics to embedded systems and high-voltage installations. You work on products in the energy sector, semiconductor industry, automotive or consumer electronics. The Netherlands is a world player in chips (ASML, NXP) and sustainable energy, offering electrical engineers ample work. You combine theoretical knowledge with practical engineering.",
    },
    skills: {
      nl: ["Circuitontwerp (Altium, Eagle)", "Programmeerbare logica (FPGA, VHDL)", "Vermogenselektronica", "Embedded C/C++", "EMC en veiligheidsregels", "PCB-ontwerp", "Signaalverwerking"],
      en: ["Circuit design (Altium, Eagle)", "Programmable logic (FPGA, VHDL)", "Power electronics", "Embedded C/C++", "EMC and safety standards", "PCB design", "Signal processing"],
    },
    education: {
      nl: "HBO of WO Elektrotechniek of Electrical Engineering. Specialisaties in high-tech systems, energietechniek of microelectronica.",
      en: "Bachelor's or Master's in Electrical Engineering. Specialisations in high-tech systems, energy technology or microelectronics.",
    },
    salaryEntry: "€2.900 – €4.000",
    salaryMid: "€4.000 – €5.800",
    salarySenior: "€5.800 – €9.000",
    careerPath: {
      nl: "Junior Elektrotechnisch Ingenieur → Ingenieur → Senior Ingenieur → Systems Engineer → Chief Engineer / Technisch Directeur.",
      en: "Junior Electrical Engineer → Engineer → Senior Engineer → Systems Engineer → Chief Engineer / Technical Director.",
    },
  },
  {
    slug: "civil-engineer",
    category: "engineering",
    emoji: "🏗️",
    title: { nl: "Civiel Ingenieur", en: "Civil Engineer" },
    subtitle: {
      nl: "Bouw de infrastructuur van de toekomst",
      en: "Build the infrastructure of the future",
    },
    description: {
      nl: "Een civiel ingenieur ontwerpt en leidt de bouw van infrastructuur zoals bruggen, wegen, tunnels, waterwerken en gebouwen. Je werkt samen met overheden, aannemers en andere disciplines om grootschalige projecten te realiseren. In Nederland is civiele techniek van groot belang vanwege de waterveiligheidsopgave, woningbouw en de aanleg van nieuwe energie-infrastructuur. Je combineert technische expertise met projectmanagementvaardigheden.",
      en: "A civil engineer designs and manages the construction of infrastructure such as bridges, roads, tunnels, waterworks and buildings. You work with governments, contractors and other disciplines to realise large-scale projects. In the Netherlands, civil engineering is of great importance due to the water safety challenge, housing construction and the development of new energy infrastructure. You combine technical expertise with project management skills.",
    },
    skills: {
      nl: ["Constructieve berekeningen", "AutoCAD en BIM (Revit)", "Geotechniek", "Waterbouwkunde", "Projectmanagement (CROW)", "Vergunningstrajecten", "Duurzaam ontwerp"],
      en: ["Structural calculations", "AutoCAD and BIM (Revit)", "Geotechnics", "Hydraulic engineering", "Project management (CROW)", "Permitting processes", "Sustainable design"],
    },
    education: {
      nl: "HBO of WO Civiele Techniek of Bouwkunde. Specialisaties in constructies, waterbouw, infra of geodesie.",
      en: "Bachelor's or Master's in Civil Engineering or Architecture. Specialisations in structures, hydraulics, infrastructure or geodesy.",
    },
    salaryEntry: "€2.800 – €3.800",
    salaryMid: "€3.800 – €5.500",
    salarySenior: "€5.500 – €8.000",
    careerPath: {
      nl: "Junior Civiel Ingenieur → Ingenieur → Senior Ingenieur → Projectleider → Technisch Manager → Directeur Projecten.",
      en: "Junior Civil Engineer → Engineer → Senior Engineer → Project Leader → Technical Manager → Director of Projects.",
    },
  },
  {
    slug: "chemical-engineer",
    category: "engineering",
    emoji: "🧪",
    title: { nl: "Chemisch Ingenieur", en: "Chemical Engineer" },
    subtitle: {
      nl: "Verander moleculen in waardevolle producten en processen",
      en: "Transform molecules into valuable products and processes",
    },
    description: {
      nl: "Een chemisch ingenieur ontwerpt en optimaliseert chemische processen voor de productie van materialen, brandstof, voedsel, geneesmiddelen en meer. Je werkt met reactorontwerp, scheidingstechnologie en procesoptimalisatie. Nederland heeft een sterke chemische industrie (Shell, AkzoNobel, DSM/Firmenich) met vestigingen in Rotterdam, Zeeland en Limburg. Je combineert wiskunde, chemie en engineering in een praktisch beroep.",
      en: "A chemical engineer designs and optimises chemical processes for the production of materials, fuel, food, pharmaceuticals and more. You work with reactor design, separation technology and process optimisation. The Netherlands has a strong chemical industry (Shell, AkzoNobel, DSM/Firmenich) with plants in Rotterdam, Zeeland and Limburg. You combine mathematics, chemistry and engineering in a practical profession.",
    },
    skills: {
      nl: ["Procesontwikkeling", "Simulatiesoftware (Aspen Plus, HYSYS)", "Massabalansen en energiebalansen", "Reactorengineering", "Veiligheid (ATEX, HAZOP)", "Automatisering (PLC, SCADA)", "Duurzame chemie"],
      en: ["Process development", "Simulation software (Aspen Plus, HYSYS)", "Mass and energy balances", "Reactor engineering", "Safety (ATEX, HAZOP)", "Automation (PLC, SCADA)", "Green chemistry"],
    },
    education: {
      nl: "WO Scheikundige Technologie of Chemische Technologie. Specialisaties in bioprocestechnologie, petrochemie of polymeren.",
      en: "Master's in Chemical Engineering or Chemistry. Specialisations in bioprocess technology, petrochemicals or polymers.",
    },
    salaryEntry: "€2.900 – €4.000",
    salaryMid: "€4.000 – €5.800",
    salarySenior: "€5.800 – €9.000",
    careerPath: {
      nl: "Process Engineer → Senior Process Engineer → Lead Engineer → Plant Manager / Technology Manager → Directeur Operations.",
      en: "Process Engineer → Senior Process Engineer → Lead Engineer → Plant Manager / Technology Manager → Director of Operations.",
    },
  },
  {
    slug: "process-engineer",
    category: "engineering",
    emoji: "🔧",
    title: { nl: "Proces Ingenieur", en: "Process Engineer" },
    subtitle: {
      nl: "Optimaliseer productieprocessen voor maximale efficiëntie",
      en: "Optimise production processes for maximum efficiency",
    },
    description: {
      nl: "Een proces ingenieur analyseert, ontwerpt en verbetert productie- en verwerkingsprocessen om efficiëntie, kwaliteit en veiligheid te verhogen. Je werkt in industrieën zoals voedingsmiddelen, farmacie, halfgeleiders of petrochemie. In Nederland is er sterke vraag vanuit ASML, Heineken, Unilever en de agrifood-sector. Je identificeert knelpunten in processen en implementeert verbeteringen met behulp van Lean en Six Sigma.",
      en: "A process engineer analyses, designs and improves production and processing processes to increase efficiency, quality and safety. You work in industries such as food, pharma, semiconductors or petrochemicals. In the Netherlands there is strong demand from ASML, Heineken, Unilever and the agrifood sector. You identify bottlenecks in processes and implement improvements using Lean and Six Sigma.",
    },
    skills: {
      nl: ["Lean manufacturing", "Six Sigma (Green Belt/Black Belt)", "Procesbeschrijving en -documentatie", "Root cause analysis", "Automatisering en robotica", "Kwaliteitssystemen (ISO 9001)", "Data-analyse"],
      en: ["Lean manufacturing", "Six Sigma (Green Belt/Black Belt)", "Process documentation", "Root cause analysis", "Automation and robotics", "Quality systems (ISO 9001)", "Data analysis"],
    },
    education: {
      nl: "HBO of WO techniek: werktuigbouwkunde, chemische technologie, industrieel ontwerpen of logistiek. Six Sigma certificering is een pluspunt.",
      en: "Bachelor's or Master's in Engineering: mechanical, chemical, industrial design or logistics. Six Sigma certification is a plus.",
    },
    salaryEntry: "€2.800 – €3.900",
    salaryMid: "€3.900 – €5.500",
    salarySenior: "€5.500 – €8.000",
    careerPath: {
      nl: "Junior Process Engineer → Process Engineer → Senior Process Engineer → Process Manager → Operations Manager.",
      en: "Junior Process Engineer → Process Engineer → Senior Process Engineer → Process Manager → Operations Manager.",
    },
  },

  // ── Business ─────────────────────────────────────────────────────────────────
  {
    slug: "management-consultant",
    category: "business",
    emoji: "💼",
    title: { nl: "Management Consultant", en: "Management Consultant" },
    subtitle: {
      nl: "Help organisaties complexe uitdagingen te overwinnen",
      en: "Help organisations overcome complex challenges",
    },
    description: {
      nl: "Een management consultant adviseert organisaties over strategie, organisatieverandering, efficiëntie en groei. Je analyseert problemen, ontwikkelt aanbevelingen en ondersteunt de implementatie. In Nederland zijn grote consultancykantoren zoals McKinsey, BCG, Bain en de Big Four sterk vertegenwoordigd. Je werkt aan uiteenlopende projecten in diverse sectoren, wat de rol intellectueel uitdagend en afwisselend maakt.",
      en: "A management consultant advises organisations on strategy, organisational change, efficiency and growth. You analyse problems, develop recommendations and support implementation. In the Netherlands, major consulting firms such as McKinsey, BCG, Bain and the Big Four are strongly represented. You work on diverse projects across sectors, making the role intellectually challenging and varied.",
    },
    skills: {
      nl: ["Strategische analyse", "Probleemstructurering (MECE)", "Financiële modellering", "Presentaties (PowerPoint)", "Stakeholdermanagement", "Verandermanagement", "Projectmanagement"],
      en: ["Strategic analysis", "Problem structuring (MECE)", "Financial modelling", "Presentations (PowerPoint)", "Stakeholder management", "Change management", "Project management"],
    },
    education: {
      nl: "WO bedrijfskunde, economie, techniek of recht. MBA is een pluspunt. Top-consultancybureaus selecteren zwaar op studieresultaten en universiteitsreputatie.",
      en: "Master's in Business Administration, Economics, Engineering or Law. MBA is a plus. Top consulting firms select heavily on academic results and university reputation.",
    },
    salaryEntry: "€3.500 – €5.000",
    salaryMid: "€5.000 – €8.000",
    salarySenior: "€8.000 – €15.000",
    careerPath: {
      nl: "Analyst → Consultant → Senior Consultant → Manager → Principal / Associate Partner → Partner / Managing Director.",
      en: "Analyst → Consultant → Senior Consultant → Manager → Principal / Associate Partner → Partner / Managing Director.",
    },
  },
  {
    slug: "marketing-manager",
    category: "business",
    emoji: "📣",
    title: { nl: "Marketing Manager", en: "Marketing Manager" },
    subtitle: {
      nl: "Bouw merken en trek klanten aan in een digitale wereld",
      en: "Build brands and attract customers in a digital world",
    },
    description: {
      nl: "Een marketing manager ontwikkelt en voert marketingstrategieën uit om merkbekendheid te vergroten en klanten aan te trekken. Je coördineert campagnes over kanalen zoals social media, SEO, e-mail en betaalde advertenties. In Nederland is marketing steeds datagedrevener geworden, waarbij analytics en technologie een centrale rol spelen. Je combineert creativiteit met analytisch inzicht en leiderschap over een team.",
      en: "A marketing manager develops and executes marketing strategies to increase brand awareness and attract customers. You coordinate campaigns across channels such as social media, SEO, email and paid advertising. In the Netherlands, marketing has become increasingly data-driven, with analytics and technology playing a central role. You combine creativity with analytical insight and team leadership.",
    },
    skills: {
      nl: ["Digitale marketing (SEO, SEA, social)", "Marketing automation (HubSpot, Salesforce)", "Data-analyse (Google Analytics)", "Contentmarketing", "Merkstrategie", "Budgetbeheer", "Teamleiderschap"],
      en: ["Digital marketing (SEO, SEA, social)", "Marketing automation (HubSpot, Salesforce)", "Data analysis (Google Analytics)", "Content marketing", "Brand strategy", "Budget management", "Team leadership"],
    },
    education: {
      nl: "HBO of WO marketing, communicatie of bedrijfskunde. Aangevuld met Google- of HubSpot-certificeringen.",
      en: "Bachelor's or Master's in Marketing, Communications or Business Administration. Supplemented with Google or HubSpot certifications.",
    },
    salaryEntry: "€3.000 – €4.200",
    salaryMid: "€4.200 – €6.000",
    salarySenior: "€6.000 – €9.000",
    careerPath: {
      nl: "Marketing Coördinator → Marketing Specialist → Marketing Manager → Head of Marketing → Chief Marketing Officer (CMO).",
      en: "Marketing Coordinator → Marketing Specialist → Marketing Manager → Head of Marketing → Chief Marketing Officer (CMO).",
    },
  },
  {
    slug: "hr-manager",
    category: "business",
    emoji: "👥",
    title: { nl: "HR Manager", en: "HR Manager" },
    subtitle: {
      nl: "Ontwikkel en behoud toptalent in de organisatie",
      en: "Develop and retain top talent in the organisation",
    },
    description: {
      nl: "Een HR manager is verantwoordelijk voor het aantrekken, ontwikkelen en behouden van medewerkers. Je beheert werving en selectie, arbeidsvoorwaarden, leren en ontwikkeling, en HR-beleid. In Nederland speelt HR een steeds strategischere rol als sparringpartner voor het management. Je combineert menselijk inzicht met kennis van arbeidsrecht, processen en data.",
      en: "An HR manager is responsible for attracting, developing and retaining employees. You manage recruitment and selection, employment conditions, learning and development, and HR policy. In the Netherlands, HR plays an increasingly strategic role as a sparring partner for management. You combine human insight with knowledge of employment law, processes and data.",
    },
    skills: {
      nl: ["Werving en selectie", "Nederlands arbeidsrecht", "Learning & Development", "HR-analytics", "Loonbeleid en arbeidsvoorwaarden", "Mediation en conflictoplossing", "HRIS-systemen (Workday, SAP HR)"],
      en: ["Recruitment and selection", "Dutch employment law", "Learning & Development", "HR analytics", "Compensation and benefits", "Mediation and conflict resolution", "HRIS systems (Workday, SAP HR)"],
    },
    education: {
      nl: "HBO of WO HRM, Personeel & Organisatie, Bedrijfskunde of Psychologie. Aanvullende opleiding in arbeidsrecht is waardevol.",
      en: "Bachelor's or Master's in HRM, Personnel & Organisation, Business Administration or Psychology. Additional training in employment law is valuable.",
    },
    salaryEntry: "€3.000 – €4.200",
    salaryMid: "€4.200 – €6.000",
    salarySenior: "€6.000 – €9.500",
    careerPath: {
      nl: "HR Medewerker → HR Adviseur → HR Manager → Senior HR Manager → HR Director → Chief People Officer (CPO).",
      en: "HR Officer → HR Advisor → HR Manager → Senior HR Manager → HR Director → Chief People Officer (CPO).",
    },
  },
  {
    slug: "sales-manager",
    category: "business",
    emoji: "🤝",
    title: { nl: "Sales Manager", en: "Sales Manager" },
    subtitle: {
      nl: "Leid een verkoopteam naar uitstekende resultaten",
      en: "Lead a sales team to outstanding results",
    },
    description: {
      nl: "Een sales manager leidt een team van verkopers, stelt doelen, coacht teamleden en bouwt relaties op met grote klanten. Je analyseert verkoopprestaties, ontwikkelt verkoopstrategieën en werkt nauw samen met marketing. In Nederland zijn sales managers gevraagd in B2B-software, farmacie, industriële producten en zakelijke dienstverlening. Je combineert commercieel instinct met leiderschaps- en analytische vaardigheden.",
      en: "A sales manager leads a team of salespeople, sets targets, coaches team members and builds relationships with key clients. You analyse sales performance, develop sales strategies and work closely with marketing. In the Netherlands, sales managers are in demand in B2B software, pharma, industrial products and professional services. You combine commercial instinct with leadership and analytical skills.",
    },
    skills: {
      nl: ["Leidinggeven aan verkoopteams", "CRM-systemen (Salesforce, HubSpot)", "Verkoopprognoses", "Onderhandelingsvaardigheden", "Account management", "Sales coaching", "Pipeline management"],
      en: ["Sales team leadership", "CRM systems (Salesforce, HubSpot)", "Sales forecasting", "Negotiation skills", "Account management", "Sales coaching", "Pipeline management"],
    },
    education: {
      nl: "HBO of WO commerciële economie, bedrijfskunde of marketing. Aangevuld met verkooptrainingen en leiderschapsprogramma's.",
      en: "Bachelor's or Master's in Commercial Economics, Business Administration or Marketing. Supplemented with sales training and leadership programmes.",
    },
    salaryEntry: "€3.200 – €4.500",
    salaryMid: "€4.500 – €7.000",
    salarySenior: "€7.000 – €12.000",
    careerPath: {
      nl: "Sales Representative → Account Manager → Senior Account Manager → Sales Manager → Head of Sales → Sales Director / VP Sales.",
      en: "Sales Representative → Account Manager → Senior Account Manager → Sales Manager → Head of Sales → Sales Director / VP Sales.",
    },
  },
  {
    slug: "supply-chain-manager",
    category: "business",
    emoji: "🔗",
    title: { nl: "Supply Chain Manager", en: "Supply Chain Manager" },
    subtitle: {
      nl: "Optimaliseer de stroom van producten van bron tot klant",
      en: "Optimise the flow of products from source to customer",
    },
    description: {
      nl: "Een supply chain manager overziet en optimaliseert de volledige keten van inkoop, productie, logistiek en distributie. Je balanceert kwaliteit, kosten en levertijden terwijl je risico's in de keten beheerst. Nederland, als logistieke poort van Europa, biedt uitstekende carrièrekansen in supply chain management bij bedrijven zoals Unilever, Heineken, Shell en de haven van Rotterdam. Je werkt internationaal en cross-functioneel.",
      en: "A supply chain manager oversees and optimises the entire chain from procurement, production, logistics and distribution. You balance quality, costs and delivery times while managing risks in the chain. The Netherlands, as the logistics gateway to Europe, offers excellent career opportunities in supply chain management at companies like Unilever, Heineken, Shell and the Port of Rotterdam. You work internationally and cross-functionally.",
    },
    skills: {
      nl: ["End-to-end supply chain kennis", "ERP-systemen (SAP, Oracle)", "Demand planning", "Leveranciersmanagement", "Lean en Six Sigma", "S&OP-processen", "Data-analyse en KPI-rapportage"],
      en: ["End-to-end supply chain knowledge", "ERP systems (SAP, Oracle)", "Demand planning", "Supplier management", "Lean and Six Sigma", "S&OP processes", "Data analysis and KPI reporting"],
    },
    education: {
      nl: "HBO of WO logistiek, supply chain management, bedrijfskunde of techniek. APICS CPIM/CSCP certificering is waardevol.",
      en: "Bachelor's or Master's in Logistics, Supply Chain Management, Business Administration or Engineering. APICS CPIM/CSCP certification is valuable.",
    },
    salaryEntry: "€3.200 – €4.500",
    salaryMid: "€4.500 – €6.500",
    salarySenior: "€6.500 – €10.000",
    careerPath: {
      nl: "Supply Chain Analyst → Supply Chain Specialist → Supply Chain Manager → Senior SCM → Head of Supply Chain → VP Operations.",
      en: "Supply Chain Analyst → Supply Chain Specialist → Supply Chain Manager → Senior SCM → Head of Supply Chain → VP Operations.",
    },
  },

  // ── Legal ─────────────────────────────────────────────────────────────────────
  {
    slug: "advocaat",
    category: "legal",
    emoji: "⚖️",
    title: { nl: "Advocaat", en: "Lawyer (Advocaat)" },
    subtitle: {
      nl: "Verdedig rechten en navigeer de rechtsstaat",
      en: "Defend rights and navigate the rule of law",
    },
    description: {
      nl: "Een advocaat vertegenwoordigt cliënten in juridische geschillen en adviseert over juridische kwesties. Je werkt in uiteenlopende rechtsgebieden zoals arbeidsrecht, ondernemingsrecht, strafrecht of familierecht. In Nederland zijn er circa 18.000 advocaten ingeschreven bij de Nederlandse Orde van Advocaten. Je combineert juridisch-analytisch denken met strategisch inzicht en overtuigingskracht.",
      en: "A lawyer represents clients in legal disputes and advises on legal matters. You work in diverse areas of law such as employment law, corporate law, criminal law or family law. In the Netherlands, approximately 18,000 lawyers are registered with the Dutch Bar Association. You combine legal-analytical thinking with strategic insight and persuasiveness.",
    },
    skills: {
      nl: ["Juridische analyse", "Procesvoering", "Contractrecht", "Onderhandelingsvaardigheden", "Juridisch schrijven", "Cliëntmanagement", "Wet- en regelgeving (nationaal en EU)"],
      en: ["Legal analysis", "Litigation", "Contract law", "Negotiation skills", "Legal writing", "Client management", "Legislation and regulation (national and EU)"],
    },
    education: {
      nl: "WO Rechtsgeleerdheid. Gevolgd door de stage (3 jaar) bij een advocatenkantoor. Beëdiging door de rechtbank na afronding stage.",
      en: "Master's in Law. Followed by the traineeship (3 years) at a law firm. Sworn in by the court upon completion of the traineeship.",
    },
    salaryEntry: "€2.800 – €4.000",
    salaryMid: "€4.000 – €7.000",
    salarySenior: "€7.000 – €15.000",
    careerPath: {
      nl: "Stagiaire Advocaat → Advocaat → Senior Advocaat → Counsel → Partner. Alternatieve paden: in-house counsel bij bedrijven of overheid.",
      en: "Trainee Solicitor → Solicitor → Senior Solicitor → Counsel → Partner. Alternative paths: in-house counsel at companies or government.",
    },
  },
  {
    slug: "notaris",
    category: "legal",
    emoji: "📜",
    title: { nl: "Notaris", en: "Notary" },
    subtitle: {
      nl: "Bewaker van juridische rechtszekerheid in Nederland",
      en: "Guardian of legal certainty in the Netherlands",
    },
    description: {
      nl: "Een notaris is een openbaar ambtenaar die juridische akten opstelt en authenticeert, zoals testamenten, koopcontracten en bedrijfsstatuten. De notaris waarborgt de rechtszekerheid van alle partijen bij een transactie. In Nederland is het notariaat gebaseerd op het Latijnse notariaat, waarbij de notaris onpartijdig te werk gaat. Het beroep combineert juridische expertise met ondernemerschap voor notarissen met een eigen kantoor.",
      en: "A notary is a public official who drafts and authenticates legal deeds, such as wills, purchase contracts and company articles. The notary guarantees the legal certainty of all parties in a transaction. In the Netherlands, the notariate is based on the Latin notariate, with the notary acting impartially. The profession combines legal expertise with entrepreneurship for notaries with their own office.",
    },
    skills: {
      nl: ["Vastgoedrecht", "Erfrecht en familierecht", "Ondernemingsrecht", "Juridisch schrijven", "Notarieel informatiesysteem", "Cliëntbegeleiding", "Fiscaal recht"],
      en: ["Property law", "Succession and family law", "Corporate law", "Legal drafting", "Notarial information system", "Client guidance", "Tax law"],
    },
    education: {
      nl: "WO Notarieel Recht. Gevolgd door de notariële beroepsopleiding en stage (3 jaar). Benoeming door de Kroon tot notaris.",
      en: "Master's in Notarial Law. Followed by the notarial professional training and traineeship (3 years). Appointed by the Crown as notary.",
    },
    salaryEntry: "€2.800 – €4.000",
    salaryMid: "€4.000 – €7.000",
    salarySenior: "€7.000 – €20.000",
    careerPath: {
      nl: "Kandidaat-Notaris → Notarisklerk → Waarnemer → Notaris in loondienst → Notaris-ondernemer (eigen kantoor).",
      en: "Notarial Candidate → Notarial Clerk → Acting Notary → Salaried Notary → Notary-entrepreneur (own office).",
    },
  },
  {
    slug: "compliance-officer",
    category: "legal",
    emoji: "🔍",
    title: { nl: "Compliance Officer", en: "Compliance Officer" },
    subtitle: {
      nl: "Zorg dat de organisatie aan alle regels voldoet",
      en: "Ensure the organisation meets all regulatory requirements",
    },
    description: {
      nl: "Een compliance officer zorgt ervoor dat een organisatie voldoet aan wet- en regelgeving, intern beleid en ethische standaarden. Je identificeert compliance-risico's, ontwikkelt beleid en traint medewerkers. In Nederland is de vraag naar compliance-professionals sterk gestegen door toenemende regulering op gebied van AML, AVG, MiFID II en ESG. Je werkt nauw samen met legal, risk en het bestuur.",
      en: "A compliance officer ensures that an organisation complies with laws and regulations, internal policies and ethical standards. You identify compliance risks, develop policies and train employees. In the Netherlands, demand for compliance professionals has risen sharply due to increasing regulation on AML, GDPR, MiFID II and ESG. You work closely with legal, risk and the board.",
    },
    skills: {
      nl: ["Anti-witwasregelgeving (AML/KYC)", "AVG/GDPR", "Interne controle en auditing", "Beleidsschrijven", "Training en bewustwording", "Toezichthouder-rapportage", "Risicobeoordeling"],
      en: ["Anti-money laundering (AML/KYC)", "GDPR/AVG", "Internal controls and auditing", "Policy writing", "Training and awareness", "Regulatory reporting", "Risk assessment"],
    },
    education: {
      nl: "WO Recht, Bedrijfskunde of Finance. Aanvullende certificeringen: CAMS (anti-witwas), CIPP (privacy) of ICA Compliance certificaat.",
      en: "Master's in Law, Business Administration or Finance. Additional certifications: CAMS (anti-money laundering), CIPP (privacy) or ICA Compliance certificate.",
    },
    salaryEntry: "€3.200 – €4.500",
    salaryMid: "€4.500 – €6.500",
    salarySenior: "€6.500 – €10.000",
    careerPath: {
      nl: "Compliance Medewerker → Compliance Adviseur → Compliance Officer → Senior Compliance Officer → Chief Compliance Officer (CCO).",
      en: "Compliance Officer (junior) → Compliance Advisor → Compliance Officer → Senior Compliance Officer → Chief Compliance Officer (CCO).",
    },
  },

  // ── Creative ──────────────────────────────────────────────────────────────────
  {
    slug: "graphic-designer",
    category: "creative",
    emoji: "🖌️",
    title: { nl: "Grafisch Ontwerper", en: "Graphic Designer" },
    subtitle: {
      nl: "Geef ideeën visuele vorm die mensen raakt",
      en: "Give ideas visual form that resonates with people",
    },
    description: {
      nl: "Een grafisch ontwerper creëert visuele communicatie voor print, digitale media en merken. Je ontwerpt logo's, huisstijlen, advertenties, verpakkingen en digitale content. In Nederland werken grafisch ontwerpers in reclame- en ontwerpbureaus, bij mediabedrijven of als freelancer. Je combineert technische vaardigheid in designtools met creatief denken en een scherp oog voor detail.",
      en: "A graphic designer creates visual communication for print, digital media and brands. You design logos, corporate identities, advertisements, packaging and digital content. In the Netherlands, graphic designers work at advertising and design agencies, media companies or as freelancers. You combine technical skill in design tools with creative thinking and a sharp eye for detail.",
    },
    skills: {
      nl: ["Adobe Creative Suite (Illustrator, Photoshop, InDesign)", "Typografie en kleurtheorie", "Branding en huisstijl", "Print en prepress", "Motion design (After Effects)", "Webdesign principes", "Concept development"],
      en: ["Adobe Creative Suite (Illustrator, Photoshop, InDesign)", "Typography and colour theory", "Branding and corporate identity", "Print and prepress", "Motion design (After Effects)", "Web design principles", "Concept development"],
    },
    education: {
      nl: "HBO Communicatiedesign, Grafisch Ontwerpen of Visuele Communicatie. Een sterk portfolio is minstens zo belangrijk als het diploma.",
      en: "Bachelor's in Communication Design, Graphic Design or Visual Communication. A strong portfolio is at least as important as the degree.",
    },
    salaryEntry: "€2.300 – €3.200",
    salaryMid: "€3.200 – €4.500",
    salarySenior: "€4.500 – €7.000",
    careerPath: {
      nl: "Junior Designer → Grafisch Ontwerper → Senior Designer → Art Director → Creative Director. Of: Freelance / Eigen Studio.",
      en: "Junior Designer → Graphic Designer → Senior Designer → Art Director → Creative Director. Or: Freelance / Own Studio.",
    },
  },
  {
    slug: "content-strategist",
    category: "creative",
    emoji: "✍️",
    title: { nl: "Content Strateeg", en: "Content Strategist" },
    subtitle: {
      nl: "Creëer inhoud die verbindt, converteert en waarde toevoegt",
      en: "Create content that connects, converts and adds value",
    },
    description: {
      nl: "Een content strateeg ontwikkelt de contentvisie en -strategie van een organisatie. Je bepaalt welke content wordt gemaakt, voor wie, via welke kanalen en met welk doel. Je werkt nauw samen met marketing, SEO, product en design. In Nederland is de vraag naar content strategen sterk gegroeid door de opkomst van contentmarketing als discipline. Je combineert journalistieke schrijfvaardigheid met strategisch en analytisch denken.",
      en: "A content strategist develops the content vision and strategy of an organisation. You determine what content is created, for whom, through which channels and with what purpose. You work closely with marketing, SEO, product and design. In the Netherlands, demand for content strategists has grown strongly due to the rise of content marketing as a discipline. You combine journalistic writing skills with strategic and analytical thinking.",
    },
    skills: {
      nl: ["SEO-schrijven en contentstrategie", "Contentplanning en -beheer (CMS)", "SEO en zoekwoordenonderzoek", "Analytics (Google Analytics, Search Console)", "Doelgroepanalyse", "Storytelling", "Redactionele planning"],
      en: ["SEO writing and content strategy", "Content planning and management (CMS)", "SEO and keyword research", "Analytics (Google Analytics, Search Console)", "Audience analysis", "Storytelling", "Editorial planning"],
    },
    education: {
      nl: "HBO Journalistiek, Communicatie, Marketing of Taalwetenschappen. Aangevuld met SEO- en contentcertificaten.",
      en: "Bachelor's in Journalism, Communications, Marketing or Linguistics. Supplemented with SEO and content certificates.",
    },
    salaryEntry: "€2.800 – €3.800",
    salaryMid: "€3.800 – €5.200",
    salarySenior: "€5.200 – €7.500",
    careerPath: {
      nl: "Content Medewerker → Content Specialist → Content Strateeg → Head of Content → Content Director / CMO.",
      en: "Content Officer → Content Specialist → Content Strategist → Head of Content → Content Director / CMO.",
    },
  },
  {
    slug: "video-producer",
    category: "creative",
    emoji: "🎬",
    title: { nl: "Video Producer", en: "Video Producer" },
    subtitle: {
      nl: "Breng verhalen tot leven met beeld en geluid",
      en: "Bring stories to life with image and sound",
    },
    description: {
      nl: "Een video producer beheert het volledige productieproces van videocontent, van concept en scripting tot opname en postproductie. Je werkt aan commercials, bedrijfsfilms, sociale media content of documentaires. In Nederland is de vraag naar videocontent enorm gestegen met de groei van streaming, YouTube en social media. Je combineert technische filmkennis met creatief vertellerschap en projectmanagement.",
      en: "A video producer manages the complete production process of video content, from concept and scripting to filming and post-production. You work on commercials, corporate films, social media content or documentaries. In the Netherlands, demand for video content has increased enormously with the growth of streaming, YouTube and social media. You combine technical film knowledge with creative storytelling and project management.",
    },
    skills: {
      nl: ["Videobewerking (Premiere Pro, Final Cut)", "Cinematografie en belichting", "Kleurcorrectie (DaVinci Resolve)", "Geluidsmontage", "Drone piloting (optioneel)", "Scriptwriting", "Projectplanning"],
      en: ["Video editing (Premiere Pro, Final Cut)", "Cinematography and lighting", "Colour grading (DaVinci Resolve)", "Sound editing", "Drone piloting (optional)", "Scriptwriting", "Project planning"],
    },
    education: {
      nl: "HBO Film & TV, Audiovisuele Media of Communicatie. Portfolio met eigen werk is essentieel.",
      en: "Bachelor's in Film & TV, Audiovisual Media or Communications. Portfolio of own work is essential.",
    },
    salaryEntry: "€2.500 – €3.500",
    salaryMid: "€3.500 – €5.000",
    salarySenior: "€5.000 – €8.000",
    careerPath: {
      nl: "Video Editor → Video Producer → Senior Producer → Creative Director → Hoofd Productie. Of: Freelance Filmmaker.",
      en: "Video Editor → Video Producer → Senior Producer → Creative Director → Head of Production. Or: Freelance Filmmaker.",
    },
  },
  {
    slug: "architect",
    category: "creative",
    emoji: "🏛️",
    title: { nl: "Architect", en: "Architect" },
    subtitle: {
      nl: "Ontwerp de gebouwde omgeving van de toekomst",
      en: "Design the built environment of the future",
    },
    description: {
      nl: "Een architect ontwerpt gebouwen en structuren met oog voor functionaliteit, esthetiek, duurzaamheid en veiligheid. Je werkt aan woningbouwprojecten, utiliteitsgebouwen, openbare ruimtes en stedenbouwkundige plannen. In Nederland zijn er grote uitdagingen op het gebied van woningbouw, renovatie naar energielabel A en klimaatadaptatie, wat architecten volop werk biedt. Je combineert artistieke creativiteit met technische en juridische kennis.",
      en: "An architect designs buildings and structures with attention to functionality, aesthetics, sustainability and safety. You work on housing projects, utility buildings, public spaces and urban planning. In the Netherlands, there are major challenges in housing construction, renovation to energy label A and climate adaptation, offering architects ample work. You combine artistic creativity with technical and legal knowledge.",
    },
    skills: {
      nl: ["Architectonisch ontwerp", "BIM (Revit, ArchiCAD)", "Bouwregelgeving en Bouwbesluit", "Duurzaam ontwerpen (BREEAM, LEED)", "Tekenen en visualisatie", "Projectmanagement", "Klantcommunicatie"],
      en: ["Architectural design", "BIM (Revit, ArchiCAD)", "Building regulations and Building Decree", "Sustainable design (BREEAM, LEED)", "Drawing and visualisation", "Project management", "Client communication"],
    },
    education: {
      nl: "WO Architectuur (5-jaar master). Inschrijving bij het Architectenregister (BNA) vereist voor de beschermde titel 'architect'.",
      en: "Master's in Architecture (5-year programme). Registration with the Architectenregister (BNA) required for the protected title 'architect'.",
    },
    salaryEntry: "€2.800 – €3.800",
    salaryMid: "€3.800 – €5.500",
    salarySenior: "€5.500 – €9.000",
    careerPath: {
      nl: "Stagiaire Architect → Architect → Senior Architect → Projectarchitect → Partner / Bureau-eigenaar.",
      en: "Trainee Architect → Architect → Senior Architect → Project Architect → Partner / Studio Owner.",
    },
  },

  // ── Education ─────────────────────────────────────────────────────────────────
  {
    slug: "docent",
    category: "education",
    emoji: "📚",
    title: { nl: "Docent", en: "Teacher" },
    subtitle: {
      nl: "Inspireer de volgende generatie met kennis en passie",
      en: "Inspire the next generation with knowledge and passion",
    },
    description: {
      nl: "Een docent geeft les aan leerlingen of studenten in het primair, voortgezet of hoger onderwijs. Je bereidt lessen voor, geeft instructie, beoordeelt prestaties en ondersteunt de ontwikkeling van leerlingen. In Nederland is er een structureel tekort aan docenten in vrijwel alle vakgebieden, wat de arbeidsmarktpositie sterk maakt. Je maakt het verschil in het leven van leerlingen en draagt bij aan de samenleving.",
      en: "A teacher teaches pupils or students in primary, secondary or higher education. You prepare lessons, deliver instruction, assess performance and support pupils' development. In the Netherlands there is a structural shortage of teachers in virtually all subjects, giving you a strong labour market position. You make a difference in pupils' lives and contribute to society.",
    },
    skills: {
      nl: ["Vakkennis (specifieke discipline)", "Didactische vaardigheden", "Klassenmanagement", "Differentiëren voor diverse leerlingen", "Digitale leermiddelen", "Leerlingvolgsystemen", "Oudercommunicatie"],
      en: ["Subject knowledge (specific discipline)", "Didactic skills", "Classroom management", "Differentiation for diverse learners", "Digital learning tools", "Pupil tracking systems", "Parent communication"],
    },
    education: {
      nl: "HBO Lerarenopleiding (PABO voor basisonderwijs) of WO inclusief eerstegraads lesbevoegdheid voor VO/MBO. Pedagogisch-didactisch certificaat (PDG) als alternatief voor WO'ers.",
      en: "Bachelor's in Education (PABO for primary) or Master's including first-degree teaching qualification for secondary/MBO. Pedagogical-didactic certificate (PDG) as alternative for Master's graduates.",
    },
    salaryEntry: "€2.600 – €3.400",
    salaryMid: "€3.400 – €4.500",
    salarySenior: "€4.500 – €6.000",
    careerPath: {
      nl: "Leraar-in-opleiding → Docent (LB) → Senior Docent (LC/LD) → Teamleider → Afdelingsleider → Rector / Directeur.",
      en: "Student Teacher → Teacher (LB) → Senior Teacher (LC/LD) → Team Leader → Head of Department → Principal / Director.",
    },
  },
  {
    slug: "onderwijskundige",
    category: "education",
    emoji: "🎓",
    title: { nl: "Onderwijskundige", en: "Educational Specialist" },
    subtitle: {
      nl: "Verbeter leerprocessen en onderwijsorganisaties",
      en: "Improve learning processes and educational organisations",
    },
    description: {
      nl: "Een onderwijskundige ontwerpt en evalueert leertrajecten, opleidingen en onderwijssystemen. Je werkt aan curriculumontwikkeling, doceersupport, leerlingenzorg of onderwijsbeleid. In Nederland werken onderwijskundigen bij onderwijsinstellingen, opleidingsbedrijven, consultancybureaus en de overheid. Je combineert kennis van leerpsychologie met praktische toepassing in diverse leeromgevingen.",
      en: "An educational specialist designs and evaluates learning trajectories, training programmes and educational systems. You work on curriculum development, teaching support, student care or education policy. In the Netherlands, educational specialists work at educational institutions, training companies, consultancies and government. You combine knowledge of learning psychology with practical application in diverse learning environments.",
    },
    skills: {
      nl: ["Curriculumontwikkeling", "Instructional design", "Leerpsychologie", "E-learning (Articulate, Moodle)", "Evaluatie en kwaliteitszorg", "Data-gedreven onderwijs", "Coaching van docenten"],
      en: ["Curriculum development", "Instructional design", "Learning psychology", "E-learning (Articulate, Moodle)", "Evaluation and quality assurance", "Data-driven education", "Teacher coaching"],
    },
    education: {
      nl: "WO Onderwijskunde, Pedagogische Wetenschappen of (Ortho)Pedagogiek. Gevolgd door werkveld-specifieke specialisaties.",
      en: "Master's in Educational Sciences, Pedagogical Sciences or (Ortho)Pedagogy. Followed by work-field specific specialisations.",
    },
    salaryEntry: "€2.800 – €3.800",
    salaryMid: "€3.800 – €5.200",
    salarySenior: "€5.200 – €7.500",
    careerPath: {
      nl: "Onderwijscoördinator → Onderwijskundige → Senior Onderwijskundige → Hoofd Onderwijs / Beleid → Directeur Onderwijs.",
      en: "Education Coordinator → Educational Specialist → Senior Educational Specialist → Head of Education / Policy → Director of Education.",
    },
  },

  // ── Sustainability ────────────────────────────────────────────────────────────
  {
    slug: "sustainability-consultant",
    category: "sustainability",
    emoji: "🌱",
    title: { nl: "Duurzaamheidsadviseur", en: "Sustainability Consultant" },
    subtitle: {
      nl: "Help bedrijven verduurzamen in een veranderende wereld",
      en: "Help companies become more sustainable in a changing world",
    },
    description: {
      nl: "Een duurzaamheidsadviseur helpt organisaties hun ecologische voetafdruk te verkleinen, ESG-doelen te halen en te voldoen aan duurzaamheidsrapportage (CSRD). Je voert duurzaamheidsanalyses uit, ontwikkelt strategieën en begeleidt implementatie. In Nederland is de vraag naar duurzaamheidsexperts enorm gegroeid door Europese wetgeving, klimaatafspraken en maatschappelijke druk. Je werkt bij adviesbureaus, NGO's of in loondienst.",
      en: "A sustainability consultant helps organisations reduce their ecological footprint, meet ESG targets and comply with sustainability reporting (CSRD). You conduct sustainability analyses, develop strategies and support implementation. In the Netherlands, demand for sustainability experts has grown enormously due to European legislation, climate agreements and societal pressure. You work at advisory firms, NGOs or as an employee.",
    },
    skills: {
      nl: ["ESG-rapportage (CSRD, GRI, TCFD)", "CO₂-footprint berekening", "Circulaire economie", "Levenscyclusanalyse (LCA)", "Stakeholderdialoog", "Duurzaamheidsstrategie", "Klimaatwetgeving en beleid"],
      en: ["ESG reporting (CSRD, GRI, TCFD)", "CO₂ footprint calculation", "Circular economy", "Life cycle assessment (LCA)", "Stakeholder dialogue", "Sustainability strategy", "Climate legislation and policy"],
    },
    education: {
      nl: "WO milieukunde, bedrijfskunde, techniek of rechten met duurzaamheidsfocus. Aanvullende certificaten: GRI, CDP of GARP SCR.",
      en: "Master's in Environmental Science, Business Administration, Engineering or Law with a sustainability focus. Additional certificates: GRI, CDP or GARP SCR.",
    },
    salaryEntry: "€2.800 – €4.000",
    salaryMid: "€4.000 – €5.800",
    salarySenior: "€5.800 – €9.000",
    careerPath: {
      nl: "Sustainability Analyst → Sustainability Consultant → Senior Consultant → Manager Duurzaamheid → Head of Sustainability / Chief Sustainability Officer.",
      en: "Sustainability Analyst → Sustainability Consultant → Senior Consultant → Sustainability Manager → Head of Sustainability / Chief Sustainability Officer.",
    },
  },
  {
    slug: "energy-transition-advisor",
    category: "sustainability",
    emoji: "🔋",
    title: { nl: "Energietransitie-adviseur", en: "Energy Transition Advisor" },
    subtitle: {
      nl: "Versneld de overgang naar schone, hernieuwbare energie",
      en: "Accelerate the transition to clean, renewable energy",
    },
    description: {
      nl: "Een energietransitie-adviseur begeleidt overheden, bedrijven en gemeenschappen bij de overgang naar hernieuwbare energie en energiebesparing. Je werkt aan wind- en zonne-energieprojecten, warmtenetten, elektriciteitsopslag en energiebesparing in de gebouwde omgeving. Nederland heeft ambitieuze klimaatdoelen (Klimaatakkoord, EU Green Deal) wat veel werk genereert voor energiespecialisten. Je combineert technische kennis met beleidsinzicht.",
      en: "An energy transition advisor guides governments, companies and communities through the shift to renewable energy and energy efficiency. You work on wind and solar energy projects, heat networks, electricity storage and energy saving in the built environment. The Netherlands has ambitious climate targets (Climate Agreement, EU Green Deal) generating much work for energy specialists. You combine technical knowledge with policy insight.",
    },
    skills: {
      nl: ["Energiesysteemanalyse", "Hernieuwbare energietechnologieën", "Warmtepompen en warmtenetten", "Energieprestatieberekeningen (EPC)", "Subsidie- en financieringskennis (SDE++)", "Beleidsanalyse", "Projectmanagement"],
      en: ["Energy system analysis", "Renewable energy technologies", "Heat pumps and heat networks", "Energy performance calculations (EPC)", "Grant and financing knowledge (SDE++)", "Policy analysis", "Project management"],
    },
    education: {
      nl: "WO of HBO techniek, economie of beleid met focus op energie. Aanvullende certificeringen in BREEAM of energieprestatieadviseur.",
      en: "Master's or Bachelor's in Engineering, Economics or Policy with an energy focus. Additional certifications in BREEAM or energy performance advisory.",
    },
    salaryEntry: "€2.800 – €4.000",
    salaryMid: "€4.000 – €5.800",
    salarySenior: "€5.800 – €9.000",
    careerPath: {
      nl: "Junior Energieadviseur → Energieadviseur → Senior Adviseur → Manager Energietransitie → Directeur Energie / Hoofd Verduurzaming.",
      en: "Junior Energy Advisor → Energy Advisor → Senior Advisor → Energy Transition Manager → Energy Director / Head of Sustainability.",
    },
  },
  {
    slug: "environmental-engineer",
    category: "sustainability",
    emoji: "🌿",
    title: { nl: "Milieukundig Ingenieur", en: "Environmental Engineer" },
    subtitle: {
      nl: "Bescherm ons milieu en ontwikkel duurzame oplossingen",
      en: "Protect our environment and develop sustainable solutions",
    },
    description: {
      nl: "Een milieukundig ingenieur analyseert milieuproblemen en ontwikkelt technische oplossingen voor luchtkwaliteit, waterkwaliteit, bodemverontreiniging en afvalbeheer. Je werkt voor overheden, industrie, adviesbureaus of onderzoeksinstituten. In Nederland zijn milieukundig ingenieurs actief in bodemsanering, waterzuivering en omgevingsbeleid (Omgevingswet). Je combineert technische expertise met milieuregulering en stakeholdermanagement.",
      en: "An environmental engineer analyses environmental problems and develops technical solutions for air quality, water quality, soil contamination and waste management. You work for governments, industry, advisory firms or research institutes. In the Netherlands, environmental engineers are active in soil remediation, water treatment and environmental policy (Environment and Planning Act). You combine technical expertise with environmental regulation and stakeholder management.",
    },
    skills: {
      nl: ["Milieuimpactanalyse", "Bodemonderzoek en -sanering", "Waterkwaliteitsbeheer", "Luchtkwaliteitsmodellering", "Omgevingswet en Wm", "GIS en ruimtelijke analyse", "Projectmanagement"],
      en: ["Environmental impact assessment", "Soil investigation and remediation", "Water quality management", "Air quality modelling", "Environment and Planning Act", "GIS and spatial analysis", "Project management"],
    },
    education: {
      nl: "WO Milieukunde, Civiele Techniek of Scheikunde. Specialisaties in bodem, water, lucht of afval.",
      en: "Master's in Environmental Science, Civil Engineering or Chemistry. Specialisations in soil, water, air or waste.",
    },
    salaryEntry: "€2.800 – €3.800",
    salaryMid: "€3.800 – €5.500",
    salarySenior: "€5.500 – €8.000",
    careerPath: {
      nl: "Junior Milieukundig Ingenieur → Adviseur → Senior Adviseur → Projectleider → Manager Milieu → Hoofd Omgevingszaken.",
      en: "Junior Environmental Engineer → Advisor → Senior Advisor → Project Leader → Environment Manager → Head of Environmental Affairs.",
    },
  },

  // ── Trade & Logistics ─────────────────────────────────────────────────────────
  {
    slug: "logistiek-manager",
    category: "logistics",
    emoji: "🚚",
    title: { nl: "Logistiek Manager", en: "Logistics Manager" },
    subtitle: {
      nl: "Coördineer de stroom van goederen met maximale efficiëntie",
      en: "Coordinate the flow of goods with maximum efficiency",
    },
    description: {
      nl: "Een logistiek manager coördineert de opslag, transport en distributie van goederen. Je beheert magazijnen, transportpartners en distributieprocessen om tijdige levering en kostenbeheer te garanderen. Nederland is het logistieke hart van Europa door de Rotterdamse haven, Schiphol en uitstekende weginfrastructuur. Grote logistieke spelers zoals DHL, DB Schenker en Geodis bieden veel carrièrekansen.",
      en: "A logistics manager coordinates the storage, transportation and distribution of goods. You manage warehouses, transport partners and distribution processes to ensure timely delivery and cost control. The Netherlands is the logistics heart of Europe thanks to the Port of Rotterdam, Schiphol and excellent road infrastructure. Major logistics players like DHL, DB Schenker and Geodis offer many career opportunities.",
    },
    skills: {
      nl: ["Warehouse management (WMS)", "Transportmanagement (TMS)", "ERP-logistiek (SAP, Oracle)", "Lean logistiek", "International trade compliance", "KPI-sturing en rapportage", "Leidinggeven aan operationeel team"],
      en: ["Warehouse management (WMS)", "Transport management (TMS)", "Logistics ERP (SAP, Oracle)", "Lean logistics", "International trade compliance", "KPI management and reporting", "Leading operational teams"],
    },
    education: {
      nl: "HBO of WO Logistiek, Supply Chain Management of Bedrijfskunde. APICS CPIM of CLTD certificering is een pluspunt.",
      en: "Bachelor's or Master's in Logistics, Supply Chain Management or Business Administration. APICS CPIM or CLTD certification is a plus.",
    },
    salaryEntry: "€3.000 – €4.200",
    salaryMid: "€4.200 – €6.000",
    salarySenior: "€6.000 – €9.000",
    careerPath: {
      nl: "Logistiek Coördinator → Logistiek Supervisor → Logistiek Manager → Senior Logistiek Manager → Head of Logistics / VP Operations.",
      en: "Logistics Coordinator → Logistics Supervisor → Logistics Manager → Senior Logistics Manager → Head of Logistics / VP Operations.",
    },
  },
  {
    slug: "procurement-specialist",
    category: "logistics",
    emoji: "🛒",
    title: { nl: "Inkoop Specialist", en: "Procurement Specialist" },
    subtitle: {
      nl: "Versterk de inkoopketen voor optimale waarde",
      en: "Strengthen the procurement chain for optimal value",
    },
    description: {
      nl: "Een inkoop specialist is verantwoordelijk voor het selecteren en contracteren van leveranciers, het inkopen van goederen en diensten en het beheren van leveranciersrelaties. Je zorgt voor de beste combinatie van prijs, kwaliteit en levertijd. In Nederland zijn inkoop-specialisten gevraagd in diverse sectoren: van industrie en retail tot gezondheidszorg en overheid. Je combineert onderhandelingsvaardigheden met analytisch denkvermogen.",
      en: "A procurement specialist is responsible for selecting and contracting suppliers, purchasing goods and services and managing supplier relationships. You ensure the best combination of price, quality and delivery time. In the Netherlands, procurement specialists are sought across sectors: from industry and retail to healthcare and government. You combine negotiation skills with analytical thinking.",
    },
    skills: {
      nl: ["Leveranciersselectie en -beoordeling", "Contractonderhandelingen", "Spend-analyse", "ERP-inkoop (SAP MM, Oracle)", "Category management", "Inkoopstrategie", "Risicobeheer in de keten"],
      en: ["Supplier selection and evaluation", "Contract negotiations", "Spend analysis", "Procurement ERP (SAP MM, Oracle)", "Category management", "Procurement strategy", "Supply chain risk management"],
    },
    education: {
      nl: "HBO of WO Bedrijfskunde, Logistiek of Technische Bedrijfskunde. NEVI-certificering (NEVI 1 en 2) is de norm in Nederland.",
      en: "Bachelor's or Master's in Business Administration, Logistics or Industrial Engineering. NEVI certification (NEVI 1 and 2) is the standard in the Netherlands.",
    },
    salaryEntry: "€2.800 – €3.800",
    salaryMid: "€3.800 – €5.500",
    salarySenior: "€5.500 – €8.500",
    careerPath: {
      nl: "Inkoop Assistent → Inkoop Specialist → Senior Inkoop Specialist → Inkoop Manager → Head of Procurement / CPO.",
      en: "Procurement Assistant → Procurement Specialist → Senior Procurement Specialist → Procurement Manager → Head of Procurement / CPO.",
    },
  },
  {
    slug: "international-trade-specialist",
    category: "logistics",
    emoji: "🌍",
    title: { nl: "International Trade Specialist", en: "International Trade Specialist" },
    subtitle: {
      nl: "Navigeer de complexe wereld van internationale handel",
      en: "Navigate the complex world of international trade",
    },
    description: {
      nl: "Een international trade specialist beheert de complexe processen rondom import, export en douane. Je zorgt voor naleving van handelsregelgeving, tolheffingen en documentatievereisten. Als doorvoerland is Nederland een toplocatie voor internationale handelsprofessionals. Je werkt voor logistieke dienstverleners, handelshuizen, importeurs of multinationals met mondiale toeleveringsketens.",
      en: "An international trade specialist manages the complex processes surrounding import, export and customs. You ensure compliance with trade regulations, tariffs and documentation requirements. As a transit country, the Netherlands is a top location for international trade professionals. You work for logistics service providers, trading companies, importers or multinationals with global supply chains.",
    },
    skills: {
      nl: ["Douaneregelgeving (CDW, AEO)", "Incoterms", "Export- en importdocumentatie", "Tariefsclassificatie (GN-code)", "Letters of credit en handelsfinanciering", "Sanctie- en exportcontrole", "ERP-handelssystemen"],
      en: ["Customs regulations (UCC, AEO)", "Incoterms", "Export and import documentation", "Tariff classification (HS codes)", "Letters of credit and trade finance", "Sanctions and export control", "Trade ERP systems"],
    },
    education: {
      nl: "HBO of WO Logistiek, Internationale Handel of Bedrijfskunde. FENEX of andere douanecertificeringen zijn waardevol.",
      en: "Bachelor's or Master's in Logistics, International Trade or Business Administration. FENEX or other customs certifications are valuable.",
    },
    salaryEntry: "€2.800 – €3.800",
    salaryMid: "€3.800 – €5.500",
    salarySenior: "€5.500 – €8.000",
    careerPath: {
      nl: "Trade Assistent → Trade Specialist → Senior Trade Specialist → Trade Manager → Head of International Trade.",
      en: "Trade Assistant → Trade Specialist → Senior Trade Specialist → Trade Manager → Head of International Trade.",
    },
  },

  // ── Other High-Demand ────────────────────────────────────────────────────────
  {
    slug: "data-engineer",
    category: "technology",
    emoji: "🗄️",
    title: { nl: "Data Engineer", en: "Data Engineer" },
    subtitle: {
      nl: "Bouw de data-infrastructuur die inzichten mogelijk maakt",
      en: "Build the data infrastructure that enables insights",
    },
    description: {
      nl: "Een data engineer ontwerpt, bouwt en onderhoudt data-pipelines en -infrastructuur die ruwe data transformeert in bruikbare datasets voor analysts en data scientists. Je werkt met grote datavolumes, ETL-processen en cloud data platforms. In Nederland is data engineering een van de snelst groeiende technische rollen, gedreven door de dataverplichtingen van bedrijven in finance, retail en tech.",
      en: "A data engineer designs, builds and maintains data pipelines and infrastructure that transforms raw data into usable datasets for analysts and data scientists. You work with large data volumes, ETL processes and cloud data platforms. In the Netherlands, data engineering is one of the fastest-growing technical roles, driven by the data needs of companies in finance, retail and tech.",
    },
    skills: {
      nl: ["Python of Scala", "SQL en NoSQL databases", "ETL/ELT frameworks (dbt, Airflow)", "Cloud data platforms (Snowflake, BigQuery, Databricks)", "Spark en Hadoop", "Data modellering", "CI/CD voor data"],
      en: ["Python or Scala", "SQL and NoSQL databases", "ETL/ELT frameworks (dbt, Airflow)", "Cloud data platforms (Snowflake, BigQuery, Databricks)", "Spark and Hadoop", "Data modelling", "CI/CD for data"],
    },
    education: {
      nl: "HBO of WO informatica, data science of wiskunde. Aanvullende cloud-certificeringen (AWS, Azure, GCP) zijn waardevol.",
      en: "Bachelor's or Master's in Computer Science, Data Science or Mathematics. Additional cloud certifications (AWS, Azure, GCP) are valuable.",
    },
    salaryEntry: "€3.200 – €4.500",
    salaryMid: "€4.500 – €6.500",
    salarySenior: "€6.500 – €10.000",
    careerPath: {
      nl: "Junior Data Engineer → Data Engineer → Senior Data Engineer → Staff Data Engineer → Head of Data Engineering.",
      en: "Junior Data Engineer → Data Engineer → Senior Data Engineer → Staff Data Engineer → Head of Data Engineering.",
    },
  },
  {
    slug: "scrum-master",
    category: "technology",
    emoji: "🔄",
    title: { nl: "Scrum Master", en: "Scrum Master" },
    subtitle: {
      nl: "Faciliteer agile teams naar maximale prestaties",
      en: "Facilitate agile teams to peak performance",
    },
    description: {
      nl: "Een Scrum Master begeleidt en coacht agile teams bij het toepassen van Scrum-principes om software of producten effectief te ontwikkelen. Je verwijdert obstakels, faciliteert ceremonies en helpt het team continu te verbeteren. In Nederland is Scrum de meest gebruikte agile methodologie in software- en productteams. Een goede Scrum Master heeft zowel coachingsvaardigheden als technisch inzicht.",
      en: "A Scrum Master coaches and guides agile teams in applying Scrum principles to develop software or products effectively. You remove impediments, facilitate ceremonies and help the team continuously improve. In the Netherlands, Scrum is the most widely used agile methodology in software and product teams. A good Scrum Master has both coaching skills and technical insight.",
    },
    skills: {
      nl: ["Scrum en Kanban", "Agile coaching", "Facilitatietechnieken", "Conflictresolutie", "JIRA en Confluence", "Servant leadership", "Organisatieverandering"],
      en: ["Scrum and Kanban", "Agile coaching", "Facilitation techniques", "Conflict resolution", "JIRA and Confluence", "Servant leadership", "Organisational change"],
    },
    education: {
      nl: "HBO of WO technisch of bedrijfskundig. PSM I/II (Scrum.org) of CSM/CSP (Scrum Alliance) certificering is standaard.",
      en: "Bachelor's or Master's in a technical or business discipline. PSM I/II (Scrum.org) or CSM/CSP (Scrum Alliance) certification is standard.",
    },
    salaryEntry: "€3.000 – €4.200",
    salaryMid: "€4.200 – €6.000",
    salarySenior: "€6.000 – €9.000",
    careerPath: {
      nl: "Junior Scrum Master → Scrum Master → Senior Scrum Master → Agile Coach → Enterprise Agile Coach / Agile Transformation Lead.",
      en: "Junior Scrum Master → Scrum Master → Senior Scrum Master → Agile Coach → Enterprise Agile Coach / Agile Transformation Lead.",
    },
  },
  {
    slug: "business-analyst",
    category: "business",
    emoji: "🔎",
    title: { nl: "Business Analyst", en: "Business Analyst" },
    subtitle: {
      nl: "Vertaal bedrijfsbehoeften naar effectieve oplossingen",
      en: "Translate business needs into effective solutions",
    },
    description: {      nl: "Een business analyst fungeert als brug tussen de bedrijfskant en IT. Je analyseert processen, verzamelt requirements van stakeholders en vertaalt die naar functionele specificaties voor IT-teams. In Nederland zijn business analysts actief bij banken, verzekeraars, overheid en tech-bedrijven die digitale transformaties doorvoeren. Je combineert analytisch denkvermogen met communicatieve vaardigheden en domeinkennis.",
      en: "A business analyst acts as a bridge between the business side and IT. You analyse processes, gather requirements from stakeholders and translate them into functional specifications for IT teams. In the Netherlands, business analysts work at banks, insurers, government and tech companies undergoing digital transformations. You combine analytical thinking with communication skills and domain knowledge.",
    },
    skills: {
      nl: ["Requirements engineering", "Procesmodellering (BPMN)", "UML en use cases", "Agile en Waterfall projectmethoden", "SQL voor data-analyse", "Stakeholdermanagement", "Wireframing"],
      en: ["Requirements engineering", "Process modelling (BPMN)", "UML and use cases", "Agile and Waterfall project methods", "SQL for data analysis", "Stakeholder management", "Wireframing"],
    },
    education: {
      nl: "HBO of WO Informatica, Bedrijfskunde of een domeinspecifieke studie. IIBA CBAP of PMI-PBA certificering is een pluspunt.",
      en: "Bachelor's or Master's in Computer Science, Business Administration or a domain-specific study. IIBA CBAP or PMI-PBA certification is a plus.",
    },
    salaryEntry: "€3.000 – €4.200",
    salaryMid: "€4.200 – €5.800",
    salarySenior: "€5.800 – €8.500",
    careerPath: {
      nl: "Junior Business Analyst → Business Analyst → Senior Business Analyst → Lead BA → Product Owner of IT Manager.",
      en: "Junior Business Analyst → Business Analyst → Senior Business Analyst → Lead BA → Product Owner or IT Manager.",
    },
  },
  {
    slug: "quality-manager",
    category: "business",
    emoji: "✅",
    title: { nl: "Kwaliteitsmanager", en: "Quality Manager" },
    subtitle: {
      nl: "Borgt kwaliteit en continue verbetering in de organisatie",
      en: "Ensures quality and continuous improvement in the organisation",
    },
    description: {
      nl: "Een kwaliteitsmanager is verantwoordelijk voor het opzetten, onderhouden en verbeteren van kwaliteitsmanagementsystemen en -processen. Je begeleidt certificeringstrajecten (ISO, GMP), voert interne audits uit en stuurt continue verbeterinitiatieven aan. In Nederland zijn kwaliteitsmanagers actief in vrijwel alle sectoren: van farmacie en voedingsmiddelen tot techniek en dienstverlening. Je combineert analytisch denken met leiderschaps- en communicatievaardigheden.",
      en: "A quality manager is responsible for setting up, maintaining and improving quality management systems and processes. You guide certification trajectories (ISO, GMP), conduct internal audits and drive continuous improvement initiatives. In the Netherlands, quality managers are active in virtually all sectors: from pharmaceuticals and food to engineering and services. You combine analytical thinking with leadership and communication skills.",
    },
    skills: {
      nl: ["ISO 9001 / ISO 13485 / GMP", "Interne en externe audits", "Root cause analysis (CAPA)", "Statistical Process Control (SPC)", "Kwaliteitsplannen en -procedures", "Lean en Six Sigma", "Kwaliteitsmanagementsoftware"],
      en: ["ISO 9001 / ISO 13485 / GMP", "Internal and external audits", "Root cause analysis (CAPA)", "Statistical Process Control (SPC)", "Quality plans and procedures", "Lean and Six Sigma", "Quality management software"],
    },
    education: {
      nl: "HBO of WO techniek, farmacie, levensmiddelentechnologie of bedrijfskunde. CQM/EFQM of Six Sigma Black Belt is waardevol.",
      en: "Bachelor's or Master's in Engineering, Pharmacy, Food Technology or Business Administration. CQM/EFQM or Six Sigma Black Belt is valuable.",
    },
    salaryEntry: "€3.000 – €4.200",
    salaryMid: "€4.200 – €6.000",
    salarySenior: "€6.000 – €9.000",
    careerPath: {
      nl: "Kwaliteitsmedewerker → Quality Engineer → Kwaliteitsmanager → Senior Kwaliteitsmanager → Head of Quality / Director Quality.",
      en: "Quality Officer → Quality Engineer → Quality Manager → Senior Quality Manager → Head of Quality / Quality Director.",
    },
  },
  {
    slug: "technical-writer",
    category: "technology",
    emoji: "📝",
    title: { nl: "Technisch Schrijver", en: "Technical Writer" },
    subtitle: {
      nl: "Maak complexe technologie begrijpelijk voor iedereen",
      en: "Make complex technology understandable for everyone",
    },
    description: {
      nl: "Een technisch schrijver produceert heldere, nauwkeurige documentatie voor technische producten en systemen: gebruikershandleidingen, API-documentatie, technische specificaties en helpcenters. Je werkt nauw samen met engineers, product managers en UX-designers om complexe informatie toegankelijk te maken. In Nederland is er groeiende vraag naar technisch schrijvers bij software-, medisch en hightech-bedrijven. Je combineert taalvaardigheid met technisch begrip.",
      en: "A technical writer produces clear, accurate documentation for technical products and systems: user manuals, API documentation, technical specifications and help centres. You work closely with engineers, product managers and UX designers to make complex information accessible. In the Netherlands, there is growing demand for technical writers at software, medical and high-tech companies. You combine language proficiency with technical understanding.",
    },
    skills: {
      nl: ["Technisch schrijven en redigeren", "Documentatietools (Confluence, MadCap Flare, Docusaurus)", "API-documentatie (OpenAPI/Swagger)", "DITA en XML", "Versiebeheer (Git)", "UX writing", "Engels op C1/C2 niveau"],
      en: ["Technical writing and editing", "Documentation tools (Confluence, MadCap Flare, Docusaurus)", "API documentation (OpenAPI/Swagger)", "DITA and XML", "Version control (Git)", "UX writing", "English at C1/C2 level"],
    },
    education: {
      nl: "HBO of WO Taalwetenschappen, Communicatie, Journalistiek of een technisch vakgebied. Aanvullende certificaten via tekom of STC.",
      en: "Bachelor's or Master's in Linguistics, Communications, Journalism or a technical discipline. Additional certificates via tekom or STC.",
    },
    salaryEntry: "€2.800 – €3.800",
    salaryMid: "€3.800 – €5.200",
    salarySenior: "€5.200 – €7.500",
    careerPath: {
      nl: "Junior Technical Writer → Technical Writer → Senior Technical Writer → Lead Technical Writer → Documentation Manager / Director of Content.",
      en: "Junior Technical Writer → Technical Writer → Senior Technical Writer → Lead Technical Writer → Documentation Manager / Director of Content.",
    },
  },
];

export function getCareerBySlug(slug: string): Career | undefined {
  return careers.find((c) => c.slug === slug);
}

export function getCareersByCategory(category: string): Career[] {
  return careers.filter((c) => c.category === category);
}

export const categories = [
  "technology",
  "healthcare",
  "finance",
  "engineering",
  "business",
  "legal",
  "creative",
  "education",
  "sustainability",
  "logistics",
] as const;
