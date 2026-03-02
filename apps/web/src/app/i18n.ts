export type Lang = "it" | "en" | "es";

interface Translations {
  enrollNow: string;
  heroTitle1: string;
  heroTitle2: string;
  heroSub: string;
  startLearning: string;
  nextLesson: string;
  xssTitle: string;
  xssSub: string;
  modulesTitle: string;
  modulesSub: string;
  lessons: string;
  ctaTitle: string;
  ctaSub: string;
  stripeNote: string;
  backToModules: string;
  // difficulties
  beginner: string;
  intermediate: string;
  advanced: string;
  // module titles
  webSecurity: string;
  networkSecurity: string;
  cryptography: string;
  reverseEngineering: string;
  linuxPrivesc: string;
  // module descriptions
  webSecurityDesc: string;
  networkSecurityDesc: string;
  cryptographyDesc: string;
  reverseEngineeringDesc: string;
  linuxPrivescDesc: string;
  // Web Security lessons
  ws01: string; ws01d: string;
  ws02: string; ws02d: string;
  ws03: string; ws03d: string;
  ws04: string; ws04d: string;
  ws05: string; ws05d: string;
  ws06: string; ws06d: string;
  ws07: string; ws07d: string;
  ws08: string; ws08d: string;
  ws09: string; ws09d: string;
  ws10: string; ws10d: string;
  ws11: string; ws11d: string;
  ws12: string; ws12d: string;
  ws13: string; ws13d: string;
  ws14: string; ws14d: string;
  ws15: string; ws15d: string;
  // Network Security lessons
  ns01: string; ns01d: string;
  ns02: string; ns02d: string;
  ns03: string; ns03d: string;
  ns04: string; ns04d: string;
  ns05: string; ns05d: string;
  ns06: string; ns06d: string;
  ns07: string; ns07d: string;
  ns08: string; ns08d: string;
  ns09: string; ns09d: string;
  ns10: string; ns10d: string;
  ns11: string; ns11d: string;
  ns12: string; ns12d: string;
  // Cryptography lessons
  cr01: string; cr01d: string;
  cr02: string; cr02d: string;
  cr03: string; cr03d: string;
  cr04: string; cr04d: string;
  cr05: string; cr05d: string;
  cr06: string; cr06d: string;
  cr07: string; cr07d: string;
  cr08: string; cr08d: string;
  cr09: string; cr09d: string;
  cr10: string; cr10d: string;
  // Reverse Engineering lessons
  re01: string; re01d: string;
  re02: string; re02d: string;
  re03: string; re03d: string;
  re04: string; re04d: string;
  re05: string; re05d: string;
  re06: string; re06d: string;
  re07: string; re07d: string;
  re08: string; re08d: string;
  // Linux PrivEsc lessons
  lp01: string; lp01d: string;
  lp02: string; lp02d: string;
  lp03: string; lp03d: string;
  lp04: string; lp04d: string;
  lp05: string; lp05d: string;
  lp06: string; lp06d: string;
  lp07: string; lp07d: string;
  lp08: string; lp08d: string;
  lp09: string; lp09d: string;
  lp10: string; lp10d: string;
}

export const t: Record<Lang, Translations> = {
  it: {
    enrollNow: "Iscriviti Ora",
    heroTitle1: "Impara la Cybersecurity.",
    heroTitle2: "Dal Vivo.",
    heroSub: "Lezioni in presenza e laboratori pratici a Catania. Dall'exploitation web alla privilege escalation \u2014 si impara facendo.",
    startLearning: "Inizia Ora",
    nextLesson: "Prossima Lezione",
    xssTitle: "Fondamenti di Cross-Site Scripting (XSS)",
    xssSub: "Web Security \u00b7 Lezione 01 \u00b7 Principiante",
    modulesTitle: "I Nostri Moduli",
    modulesSub: "Corsi in presenza a Catania \u2014 dalle basi all'exploitation avanzata.",
    lessons: "lezioni",
    ctaTitle: "Pronto a metterti in gioco?",
    ctaSub: "Iscriviti ai corsi di cybersecurity in presenza a Catania. Laboratori pratici, scenari reali, docenti esperti.",
    stripeNote: "Pagamento sicuro tramite Stripe.",
    backToModules: "Torna ai moduli",
    beginner: "Principiante",
    intermediate: "Intermedio",
    advanced: "Avanzato",
    // Module titles
    webSecurity: "Web Security",
    networkSecurity: "Network Security",
    cryptography: "Crittografia",
    reverseEngineering: "Reverse Engineering",
    linuxPrivesc: "Linux Privilege Escalation",
    // Module descriptions
    webSecurityDesc: "Scopri XSS, SQL injection, CSRF, SSRF e i principali vettori di attacco alle applicazioni web moderne.",
    networkSecurityDesc: "Padroneggia TCP/IP, analisi dei pacchetti, evasione dei firewall e tecniche di ricognizione di rete.",
    cryptographyDesc: "Studia crittografia, hashing, PKI e impara a individuare e sfruttare le debolezze crittografiche.",
    reverseEngineeringDesc: "Disassembla binari, analizza malware e comprendi il funzionamento dei programmi a basso livello.",
    linuxPrivescDesc: "Sfrutta misconfigurazioni, binari SUID, cron job e vulnerabilit\u00e0 del kernel per ottenere privilegi elevati.",
    // Web Security lessons
    ws01: "Fondamenti di Cross-Site Scripting (XSS)",
    ws01d: "Scopri come funziona l'XSS, i tre tipi principali \u2014 reflected, stored e DOM-based \u2014 e perch\u00e9 resta la vulnerabilit\u00e0 web pi\u00f9 diffusa.",
    ws02: "XSS Reflected e DOM-Based",
    ws02d: "Costruisci payload che si eseguono nel browser della vittima sfruttando parametri URL e manipolazione JavaScript lato client.",
    ws03: "XSS Stored e Session Hijacking",
    ws03d: "Inietta script persistenti nelle applicazioni web e sottrai i cookie di sessione di altri utenti in tempo reale.",
    ws04: "Fondamenti di SQL Injection",
    ws04d: "Estrai, modifica ed elimina dati dal database attraverso input non sanitizzati nelle query SQL.",
    ws05: "Blind SQL Injection e SQLMap",
    ws05d: "Sfrutta la SQL injection anche quando l'applicazione non restituisce risultati visibili. Automatizza il processo con SQLMap.",
    ws06: "Attacchi ad Autenticazione e Sessioni",
    ws06d: "Aggira meccanismi di login deboli, esegui attacchi brute-force e sfrutta le falle nella gestione delle sessioni.",
    ws07: "Cross-Site Request Forgery (CSRF)",
    ws07d: "Induci utenti autenticati a compiere azioni indesiderate tramite richieste malevole inviate da pagine esterne.",
    ws08: "Server-Side Request Forgery (SSRF)",
    ws08d: "Sfrutta le funzionalit\u00e0 lato server per raggiungere servizi interni, endpoint di metadati cloud e reti protette.",
    ws09: "Vulnerabilit\u00e0 nell'Upload di File",
    ws09d: "Aggira i filtri di upload e i controlli content-type per ottenere esecuzione di codice remoto tramite file malevoli.",
    ws10: "Directory Traversal e Local File Inclusion",
    ws10d: "Accedi a file sensibili sul server \u2014 password, configurazioni, sorgenti \u2014 manipolando i parametri dei percorsi.",
    ws11: "Command Injection",
    ws11d: "Esegui comandi di sistema arbitrari attraverso input vulnerabili dell'applicazione. Concatena con altre vulnerabilit\u00e0 per il compromesso totale.",
    ws12: "Deserializzazione Insicura",
    ws12d: "Sfrutta falle nella deserializzazione degli oggetti per ottenere esecuzione di codice remoto in applicazioni Java, PHP e Python.",
    ws13: "Attacchi XML External Entity (XXE)",
    ws13d: "Approfitta di parser XML mal configurati per leggere file, eseguire SSRF ed esfiltrare dati fuori banda.",
    ws14: "Sicurezza delle API e Broken Access Control",
    ws14d: "Testa API REST e GraphQL alla ricerca di IDOR, mass assignment, bypass dei rate-limit e falle di autorizzazione.",
    ws15: "Web Application Firewall e Difesa",
    ws15d: "Studia le tecniche di evasione dei WAF e impara il lato difensivo \u2014 come progettare applicazioni web sicure fin dall'inizio.",
    // Network Security lessons
    ns01: "Fondamenti TCP/IP e Modello OSI",
    ns01d: "Comprendi come i dati attraversano le reti, dai frame Ethernet alle richieste HTTP, livello per livello.",
    ns02: "Scansione di Rete con Nmap",
    ns02d: "Individua host, porte aperte, servizi attivi e fingerprint del sistema operativo. Padroneggia i tipi di scansione e gli script NSE.",
    ns03: "Analisi dei Pacchetti con Wireshark",
    ns03d: "Cattura e analizza il traffico di rete in tempo reale per comprendere i protocolli e individuare anomalie.",
    ns04: "ARP Spoofing e Man-in-the-Middle",
    ns04d: "Reindirizza il traffico di rete attraverso la tua macchina con l'ARP cache poisoning. Intercetta e modifica i dati in transito.",
    ns05: "Attacchi DNS e DNS Spoofing",
    ns05d: "Sfrutta il DNS per dirottare il traffico, avvelenare la cache, enumerare sottodomini e intercettare i zone transfer.",
    ns06: "Network Sniffing e Cattura Credenziali",
    ns06d: "Intercetta credenziali in chiaro e dati sensibili sulle reti locali con tecniche sia passive che attive.",
    ns07: "Tecniche di Evasione Firewall",
    ns07d: "Aggira firewall e filtri di pacchetti usando frammentazione, tunneling, encoding e trucchi a livello di protocollo.",
    ns08: "Sicurezza delle Reti Wireless",
    ns08d: "Cracca gli handshake WPA2, configura access point rogue, lancia attacchi deauth e audita le reti wireless.",
    ns09: "VPN e Protocolli di Tunneling",
    ns09d: "Approfondisci IPSec, WireGuard e SSH tunneling per comunicazioni sicure, pivoting e canali nascosti.",
    ns10: "Evasione IDS/IPS",
    ns10d: "Costruisci pacchetti e payload capaci di eludere i sistemi di rilevamento e prevenzione delle intrusioni senza attivare allarmi.",
    ns11: "Network Forensics e Incident Response",
    ns11d: "Analizza le catture di pacchetti per ricostruire attacchi, tracciare le timeline e identificare gli indicatori di compromissione.",
    ns12: "Progettazione di Architetture di Rete Sicure",
    ns12d: "Progetta reti segmentate con regole firewall adeguate, VLAN, monitoraggio e principi zero-trust.",
    // Cryptography lessons
    cr01: "Crittografia Simmetrica (AES, DES, ChaCha20)",
    cr01d: "Studia i cifrari a blocchi e a flusso, le modalit\u00e0 operative (CBC, GCM, CTR) e quando la crittografia simmetrica fallisce.",
    cr02: "Crittografia Asimmetrica (RSA, ECC)",
    cr02d: "Impara la crittografia a chiave pubblica, i protocolli di scambio chiavi e la matematica dietro RSA e le curve ellittiche.",
    cr03: "Funzioni Hash e Integrit\u00e0",
    cr03d: "Esplora MD5, SHA-256 e BLAKE2. Studia collisioni, attacchi preimage, length extension e HMAC.",
    cr04: "Infrastruttura a Chiave Pubblica (PKI)",
    cr04d: "Autorit\u00e0 di certificazione, certificati X.509, catene di fiducia, revoca e come funziona davvero la trust chain TLS.",
    cr05: "Approfondimento sul Protocollo TLS/SSL",
    cr05d: "Analizza l'handshake TLS passo dopo passo. Studia le cipher suite, il perfect forward secrecy e gli attacchi di downgrade.",
    cr06: "Archiviazione e Cracking delle Password",
    cr06d: "Bcrypt, scrypt e Argon2 per la difesa. Hashcat e John the Ripper per l'attacco. Rainbow table e salting.",
    cr07: "Attacchi Crittografici",
    cr07d: "Padding oracle, birthday attack, length extension e sfruttamento di generatori di numeri casuali deboli nel mondo reale.",
    cr08: "Firme Digitali e Autenticazione",
    cr08d: "Firme RSA ed ECDSA, sicurezza dei token JWT e come verificare \u2014 o falsificare \u2014 l'autenticit\u00e0 dei dati.",
    cr09: "Steganografia e Occultamento Dati",
    cr09d: "Nascondi dati in immagini, file audio e traffico di rete. Rileva ed estrai i messaggi nascosti.",
    cr10: "Crittografia Applicata e Fallimenti Reali",
    cr10d: "Casi studio di crittografia violata: Heartbleed, POODLE, ROCA e le lezioni che si traggono dai fallimenti catastrofici.",
    // Reverse Engineering lessons
    re01: "Fondamenti di Assembly x86/x64",
    re01d: "Registri, istruzioni, convenzioni di chiamata, stack frame e lettura fluente dell'output del disassemblatore.",
    re02: "Analisi Statica con Ghidra",
    re02d: "Naviga il decompilatore di Ghidra per comprendere la logica dei binari e recuperare le firme delle funzioni \u2014 senza mai eseguire il programma.",
    re03: "Analisi Dinamica con GDB",
    re03d: "Imposta breakpoint, ispeziona memoria e registri, traccia il flusso di esecuzione e manipola i programmi in esecuzione.",
    re04: "Formati Binari PE ed ELF",
    re04d: "Studia le strutture dei file eseguibili, le sezioni, le tabelle di import/export e come i loader le risolvono.",
    re05: "Debugging e Patching dei Binari",
    re05d: "Modifica il comportamento dei programmi patchando istruzioni, aggirando controlli di licenza e applicando hot-patch in memoria.",
    re06: "Fondamenti di Analisi Malware",
    re06d: "Analizza in sicurezza binari malevoli in sandbox isolate. Analisi comportamentale, estrazione di stringhe e identificazione degli IOC.",
    re07: "Anti-Reversing e Offuscamento",
    re07d: "Riconosci e sconfiggi packer, trucchi anti-debug, offuscamento del flusso di controllo e protezioni basate su macchine virtuali.",
    re08: "CTF Binary Exploitation",
    re08d: "Buffer overflow, return-oriented programming (ROP), format string bug e scrittura di shellcode per competizioni CTF.",
    // Linux PrivEsc lessons
    lp01: "Enumerazione e Ricognizione Linux",
    lp01d: "Raccogli sistematicamente informazioni su sistema, utenti, processi, rete e software installato per mappare la superficie d'attacco.",
    lp02: "Exploitation di Binari SUID/SGID",
    lp02d: "Individua e sfrutta binari con permessi elevati usando le tecniche GTFOBins per ottenere una shell root.",
    lp03: "Misconfigurazioni Sudo",
    lp03d: "Sfrutta regole sudo, iniezione LD_PRELOAD e debolezze del file sudoers per ottenere accesso root completo.",
    lp04: "Exploitation dei Cron Job",
    lp04d: "Dirotta task pianificati attraverso script scrivibili, manipolazione del PATH, wildcard injection e abuso di tar checkpoint.",
    lp05: "Manipolazione della Variabile PATH",
    lp05d: "Inganna i programmi privilegiati facendogli eseguire il tuo codice malevolo controllando la variabile d'ambiente PATH.",
    lp06: "Exploit del Kernel",
    lp06d: "Identifica versioni del kernel vulnerabili e utilizza exploit pubblici come DirtyCow, DirtyPipe e PwnKit.",
    lp07: "Capabilities e Exploitation dei Servizi",
    lp07d: "Abusa delle capabilities Linux (cap_setuid, cap_dac_override), dei file unit di servizio scrivibili e dei permessi sui socket.",
    lp08: "Misconfigurazioni NFS e File Share",
    lp08d: "Sfrutta export NFS no_root_squash e share Samba scrivibili per piazzare binari SUID e scalare i privilegi.",
    lp09: "Docker e Container Escape",
    lp09d: "Evadi dai container Docker sfruttando socket montati, modalit\u00e0 privilegiata e misconfigurazioni del filesystem host.",
    lp10: "Metodologia di Privilege Escalation",
    lp10d: "Combina tutte le tecniche in una checklist sistematica. Costruisci i tuoi script di enumerazione e automatizza l'intero processo.",
  },
  en: {
    enrollNow: "Enroll Now",
    heroTitle1: "Learn Cybersecurity.",
    heroTitle2: "Hands On.",
    heroSub: "In-person lessons and hands-on labs in Catania. From web exploitation to privilege escalation \u2014 learn by doing.",
    startLearning: "Start Learning",
    nextLesson: "Next Lesson",
    xssTitle: "Cross-Site Scripting (XSS) Fundamentals",
    xssSub: "Web Security \u00b7 Lesson 01 \u00b7 Beginner",
    modulesTitle: "Our Modules",
    modulesSub: "In-person courses in Catania \u2014 from fundamentals to advanced exploitation.",
    lessons: "lessons",
    ctaTitle: "Ready to level up?",
    ctaSub: "Enroll in hands-on cybersecurity courses in Catania. Practical labs, real-world scenarios, expert instruction.",
    stripeNote: "Secure payment via Stripe.",
    backToModules: "Back to modules",
    beginner: "Beginner",
    intermediate: "Intermediate",
    advanced: "Advanced",
    webSecurity: "Web Security",
    networkSecurity: "Network Security",
    cryptography: "Cryptography",
    reverseEngineering: "Reverse Engineering",
    linuxPrivesc: "Linux Privilege Escalation",
    webSecurityDesc: "Learn XSS, SQL injection, CSRF, SSRF and modern web application attack vectors.",
    networkSecurityDesc: "Master TCP/IP, packet analysis, firewall evasion and network reconnaissance techniques.",
    cryptographyDesc: "Understand encryption, hashing, PKI and how to identify and exploit cryptographic weaknesses.",
    reverseEngineeringDesc: "Disassemble binaries, analyze malware and understand low-level program behavior.",
    linuxPrivescDesc: "Exploit misconfigurations, SUID binaries, cron jobs and kernel vulnerabilities to escalate privileges.",
    // Web Security lessons
    ws01: "Cross-Site Scripting (XSS) Fundamentals",
    ws01d: "Understand how XSS works, the three main types \u2014 reflected, stored and DOM-based \u2014 and why it remains the most common web vulnerability.",
    ws02: "Reflected & DOM-Based XSS",
    ws02d: "Craft payloads that execute in the victim's browser through URL parameters and client-side JavaScript manipulation.",
    ws03: "Stored XSS & Session Hijacking",
    ws03d: "Inject persistent scripts into web applications and steal other users' session cookies in real time.",
    ws04: "SQL Injection Fundamentals",
    ws04d: "Extract, modify and delete database contents through unsanitized user input in SQL queries.",
    ws05: "Blind SQL Injection & SQLMap",
    ws05d: "Exploit SQL injection when the application doesn't return results directly. Automate discovery with SQLMap.",
    ws06: "Authentication & Session Attacks",
    ws06d: "Break weak login mechanisms, brute-force credentials and exploit session management flaws.",
    ws07: "Cross-Site Request Forgery (CSRF)",
    ws07d: "Force authenticated users to perform unwanted actions by crafting malicious requests from third-party pages.",
    ws08: "Server-Side Request Forgery (SSRF)",
    ws08d: "Abuse server-side functionality to access internal services, cloud metadata endpoints and restricted networks.",
    ws09: "File Upload Vulnerabilities",
    ws09d: "Bypass upload filters and content-type checks to achieve remote code execution through malicious files.",
    ws10: "Directory Traversal & Local File Inclusion",
    ws10d: "Read sensitive files on the server \u2014 passwords, configs, source code \u2014 by manipulating file path parameters.",
    ws11: "Command Injection",
    ws11d: "Execute arbitrary system commands through vulnerable application inputs. Chain with other vulns for full compromise.",
    ws12: "Insecure Deserialization",
    ws12d: "Exploit object deserialization flaws to achieve remote code execution in Java, PHP and Python applications.",
    ws13: "XML External Entity (XXE) Attacks",
    ws13d: "Leverage misconfigured XML parsers to read server files, perform SSRF and exfiltrate data out-of-band.",
    ws14: "API Security & Broken Access Control",
    ws14d: "Test REST and GraphQL APIs for IDOR, mass assignment, rate-limit bypass and authorization flaws.",
    ws15: "Web Application Firewalls & Defense",
    ws15d: "Understand WAF evasion techniques and learn the defensive side \u2014 how to build secure web applications from scratch.",
    // Network Security lessons
    ns01: "TCP/IP Fundamentals & OSI Model",
    ns01d: "Understand how data flows across networks, from Ethernet frames to HTTP requests, layer by layer.",
    ns02: "Network Scanning with Nmap",
    ns02d: "Discover hosts, open ports, running services and OS fingerprints. Master scan types and NSE scripts.",
    ns03: "Packet Analysis with Wireshark",
    ns03d: "Capture and analyze live network traffic to understand protocols and detect anomalies.",
    ns04: "ARP Spoofing & Man-in-the-Middle",
    ns04d: "Redirect network traffic through your machine using ARP cache poisoning. Intercept and modify data in transit.",
    ns05: "DNS Attacks & DNS Spoofing",
    ns05d: "Exploit DNS to redirect traffic, perform cache poisoning, enumerate subdomains and hijack zone transfers.",
    ns06: "Network Sniffing & Credential Capture",
    ns06d: "Intercept unencrypted credentials and sensitive data on local networks using passive and active techniques.",
    ns07: "Firewall Evasion Techniques",
    ns07d: "Bypass firewalls and packet filters using fragmentation, tunneling, encoding and protocol-level tricks.",
    ns08: "Wireless Network Security",
    ns08d: "Crack WPA2 handshakes, set up rogue access points, run deauth attacks and audit wireless networks.",
    ns09: "VPN & Tunneling Protocols",
    ns09d: "Understand IPSec, WireGuard and SSH tunneling for secure communications, pivoting and covert channels.",
    ns10: "IDS/IPS Evasion",
    ns10d: "Craft packets and payloads that bypass intrusion detection and prevention systems without triggering alerts.",
    ns11: "Network Forensics & Incident Response",
    ns11d: "Analyze packet captures to reconstruct attacks, build timelines and identify indicators of compromise.",
    ns12: "Building Secure Network Architectures",
    ns12d: "Design segmented networks with proper firewall rules, VLANs, monitoring and zero-trust principles.",
    // Cryptography lessons
    cr01: "Symmetric Encryption (AES, DES, ChaCha20)",
    cr01d: "Understand block and stream ciphers, modes of operation (CBC, GCM, CTR) and when symmetric encryption fails.",
    cr02: "Asymmetric Encryption (RSA, ECC)",
    cr02d: "Learn public-key cryptography, key exchange protocols and the math behind RSA and elliptic curves.",
    cr03: "Hash Functions & Integrity",
    cr03d: "Explore MD5, SHA-256 and BLAKE2. Understand collisions, preimage attacks, length extension and HMAC.",
    cr04: "Public Key Infrastructure (PKI)",
    cr04d: "Certificate authorities, X.509 certificates, certificate chains, revocation and how TLS trust actually works.",
    cr05: "TLS/SSL Protocol Deep Dive",
    cr05d: "Analyze the TLS handshake step by step. Understand cipher suites, perfect forward secrecy and downgrade attacks.",
    cr06: "Password Storage & Cracking",
    cr06d: "Bcrypt, scrypt and Argon2 for defense. Hashcat and John the Ripper for offense. Rainbow tables and salting.",
    cr07: "Cryptographic Attacks",
    cr07d: "Padding oracle, birthday attacks, length extension and exploiting weak random number generators in the real world.",
    cr08: "Digital Signatures & Authentication",
    cr08d: "RSA and ECDSA signatures, JWT token security and how to verify \u2014 or forge \u2014 data authenticity.",
    cr09: "Steganography & Data Hiding",
    cr09d: "Hide data in images, audio files and network traffic. Detect and extract concealed messages.",
    cr10: "Applied Cryptography & Real-World Failures",
    cr10d: "Case studies of broken crypto: Heartbleed, POODLE, ROCA and the lessons from catastrophic failures.",
    // Reverse Engineering lessons
    re01: "x86/x64 Assembly Fundamentals",
    re01d: "Registers, instructions, calling conventions, stack frames and reading disassembler output fluently.",
    re02: "Static Analysis with Ghidra",
    re02d: "Navigate Ghidra's decompiler to understand binary logic and recover function signatures \u2014 without ever running the program.",
    re03: "Dynamic Analysis with GDB",
    re03d: "Set breakpoints, inspect memory and registers, trace execution flow and manipulate running programs.",
    re04: "PE & ELF Binary Formats",
    re04d: "Understand executable file structures, sections, import/export tables and how loaders resolve them.",
    re05: "Binary Debugging & Patching",
    re05d: "Modify program behavior by patching instructions, bypassing license checks and hot-patching in memory.",
    re06: "Malware Analysis Fundamentals",
    re06d: "Safely analyze malicious binaries in isolated sandboxes. Behavioral analysis, string extraction and IOC identification.",
    re07: "Anti-Reversing & Obfuscation",
    re07d: "Recognize and defeat packers, anti-debug tricks, control flow obfuscation and virtual machine protections.",
    re08: "CTF Binary Exploitation",
    re08d: "Buffer overflows, return-oriented programming (ROP), format string bugs and writing shellcode for CTF competitions.",
    // Linux PrivEsc lessons
    lp01: "Linux Enumeration & Reconnaissance",
    lp01d: "Systematically gather system info, users, processes, network config and installed software to map the attack surface.",
    lp02: "SUID/SGID Binary Exploitation",
    lp02d: "Find and exploit binaries with elevated permissions using GTFOBins techniques to get root shells.",
    lp03: "Sudo Misconfigurations",
    lp03d: "Exploit sudo rules, LD_PRELOAD injection and sudoers file weaknesses to gain unrestricted root access.",
    lp04: "Cron Job Exploitation",
    lp04d: "Hijack scheduled tasks through writable scripts, PATH manipulation, wildcard injection and tar checkpoint abuse.",
    lp05: "PATH Variable Manipulation",
    lp05d: "Trick privileged programs into executing your malicious code by controlling the PATH environment variable.",
    lp06: "Kernel Exploits",
    lp06d: "Identify vulnerable kernel versions and use public exploits like DirtyCow, DirtyPipe and PwnKit.",
    lp07: "Capabilities & Service Exploitation",
    lp07d: "Abuse Linux capabilities (cap_setuid, cap_dac_override), writable service unit files and socket permissions.",
    lp08: "NFS & File Share Misconfigurations",
    lp08d: "Exploit NFS no_root_squash exports and writable Samba shares to plant SUID binaries and escalate privileges.",
    lp09: "Docker & Container Escape",
    lp09d: "Break out of Docker containers through mounted sockets, privileged mode and host filesystem misconfigurations.",
    lp10: "Privilege Escalation Methodology",
    lp10d: "Combine all techniques into a systematic checklist. Build your own enumeration scripts and automate the process.",
  },
  es: {
    enrollNow: "Inscr\u00edbete Ahora",
    heroTitle1: "Aprende Ciberseguridad.",
    heroTitle2: "De Forma Pr\u00e1ctica.",
    heroSub: "Lecciones presenciales y laboratorios pr\u00e1cticos en Catania. Desde explotaci\u00f3n web hasta escalada de privilegios \u2014 aprende haciendo.",
    startLearning: "Empieza a Aprender",
    nextLesson: "Pr\u00f3xima Lecci\u00f3n",
    xssTitle: "Fundamentos de Cross-Site Scripting (XSS)",
    xssSub: "Web Security \u00b7 Lecci\u00f3n 01 \u00b7 Principiante",
    modulesTitle: "Nuestros M\u00f3dulos",
    modulesSub: "Cursos presenciales en Catania \u2014 desde los fundamentos hasta la explotaci\u00f3n avanzada.",
    lessons: "lecciones",
    ctaTitle: "\u00bfListo para dar el salto?",
    ctaSub: "Inscr\u00edbete en los cursos presenciales de ciberseguridad en Catania. Laboratorios pr\u00e1cticos, escenarios reales, instrucci\u00f3n experta.",
    stripeNote: "Pago seguro a trav\u00e9s de Stripe.",
    backToModules: "Volver a los m\u00f3dulos",
    beginner: "Principiante",
    intermediate: "Intermedio",
    advanced: "Avanzado",
    webSecurity: "Web Security",
    networkSecurity: "Network Security",
    cryptography: "Criptograf\u00eda",
    reverseEngineering: "Reverse Engineering",
    linuxPrivesc: "Linux Privilege Escalation",
    webSecurityDesc: "Aprende XSS, SQL injection, CSRF, SSRF y los vectores de ataque modernos a aplicaciones web.",
    networkSecurityDesc: "Domina TCP/IP, an\u00e1lisis de paquetes, evasi\u00f3n de firewalls y t\u00e9cnicas de reconocimiento de red.",
    cryptographyDesc: "Comprende cifrado, hashing, PKI y c\u00f3mo identificar y explotar debilidades criptogr\u00e1ficas.",
    reverseEngineeringDesc: "Desensambla binarios, analiza malware y comprende el comportamiento de programas a bajo nivel.",
    linuxPrivescDesc: "Explota misconfiguraciones, binarios SUID, cron jobs y vulnerabilidades del kernel para escalar privilegios.",
    ws01: "Fundamentos de Cross-Site Scripting (XSS)",
    ws01d: "Comprende c\u00f3mo funciona XSS, los tres tipos principales \u2014 reflected, stored y DOM-based \u2014 y por qu\u00e9 sigue siendo la vulnerabilidad web m\u00e1s com\u00fan.",
    ws02: "XSS Reflected y DOM-Based",
    ws02d: "Crea payloads que se ejecutan en el navegador de la v\u00edctima mediante par\u00e1metros URL y manipulaci\u00f3n JavaScript del lado del cliente.",
    ws03: "XSS Stored y Session Hijacking",
    ws03d: "Inyecta scripts persistentes en aplicaciones web y roba cookies de sesi\u00f3n de otros usuarios en tiempo real.",
    ws04: "Fundamentos de SQL Injection",
    ws04d: "Extrae, modifica y elimina contenido de bases de datos a trav\u00e9s de entrada de usuario no saneada en consultas SQL.",
    ws05: "Blind SQL Injection y SQLMap",
    ws05d: "Explota SQL injection cuando la aplicaci\u00f3n no devuelve resultados directamente. Automatiza el descubrimiento con SQLMap.",
    ws06: "Ataques a Autenticaci\u00f3n y Sesiones",
    ws06d: "Rompe mecanismos de login d\u00e9biles, fuerza bruta credenciales y explota fallos en la gesti\u00f3n de sesiones.",
    ws07: "Cross-Site Request Forgery (CSRF)",
    ws07d: "Obliga a usuarios autenticados a realizar acciones no deseadas creando solicitudes maliciosas desde p\u00e1ginas de terceros.",
    ws08: "Server-Side Request Forgery (SSRF)",
    ws08d: "Abusa de funcionalidades del servidor para acceder a servicios internos, endpoints de metadatos cloud y redes restringidas.",
    ws09: "Vulnerabilidades en la Subida de Archivos",
    ws09d: "Evita filtros de subida y controles de content-type para lograr ejecuci\u00f3n remota de c\u00f3digo mediante archivos maliciosos.",
    ws10: "Directory Traversal y Local File Inclusion",
    ws10d: "Lee archivos sensibles del servidor \u2014 contrase\u00f1as, configs, c\u00f3digo fuente \u2014 manipulando par\u00e1metros de rutas de archivos.",
    ws11: "Command Injection",
    ws11d: "Ejecuta comandos de sistema arbitrarios a trav\u00e9s de entradas vulnerables de la aplicaci\u00f3n. Encadena con otras vulns para compromiso total.",
    ws12: "Deserializaci\u00f3n Insegura",
    ws12d: "Explota fallos de deserializaci\u00f3n de objetos para lograr ejecuci\u00f3n remota de c\u00f3digo en aplicaciones Java, PHP y Python.",
    ws13: "Ataques XML External Entity (XXE)",
    ws13d: "Aprovecha parsers XML mal configurados para leer archivos del servidor, realizar SSRF y exfiltrar datos out-of-band.",
    ws14: "Seguridad de APIs y Broken Access Control",
    ws14d: "Prueba APIs REST y GraphQL para IDOR, mass assignment, bypass de rate-limit y fallos de autorizaci\u00f3n.",
    ws15: "Web Application Firewalls y Defensa",
    ws15d: "Comprende t\u00e9cnicas de evasi\u00f3n de WAF y aprende el lado defensivo \u2014 c\u00f3mo construir aplicaciones web seguras desde cero.",
    ns01: "Fundamentos TCP/IP y Modelo OSI",
    ns01d: "Comprende c\u00f3mo fluyen los datos a trav\u00e9s de las redes, desde tramas Ethernet hasta solicitudes HTTP, capa por capa.",
    ns02: "Escaneo de Red con Nmap",
    ns02d: "Descubre hosts, puertos abiertos, servicios en ejecuci\u00f3n y fingerprints del SO. Domina los tipos de escaneo y scripts.",
    ns03: "An\u00e1lisis de Paquetes con Wireshark",
    ns03d: "Captura y analiza tr\u00e1fico de red en vivo para entender protocolos y detectar anomal\u00edas.",
    ns04: "ARP Spoofing y Man-in-the-Middle",
    ns04d: "Redirige el tr\u00e1fico de red a trav\u00e9s de tu m\u00e1quina usando ARP cache poisoning. Intercepta y modifica datos en tr\u00e1nsito.",
    ns05: "Ataques DNS y DNS Spoofing",
    ns05d: "Explota DNS para redirigir tr\u00e1fico, realizar cache poisoning, enumerar subdominios y secuestrar zone transfers.",
    ns06: "Network Sniffing y Captura de Credenciales",
    ns06d: "Intercepta credenciales no cifradas y datos sensibles en redes locales usando t\u00e9cnicas pasivas y activas.",
    ns07: "T\u00e9cnicas de Evasi\u00f3n de Firewall",
    ns07d: "Evita firewalls y filtros de paquetes usando fragmentaci\u00f3n, tunneling, encoding y trucos a nivel de protocolo.",
    ns08: "Seguridad de Redes Inal\u00e1mbricas",
    ns08d: "Crackea handshakes WPA2, configura access points rogue, ejecuta ataques deauth y audita redes wireless.",
    ns09: "VPN y Protocolos de Tunneling",
    ns09d: "Comprende IPSec, WireGuard y SSH tunneling para comunicaciones seguras, pivoting y canales encubiertos.",
    ns10: "Evasi\u00f3n de IDS/IPS",
    ns10d: "Crea paquetes y payloads que evitan sistemas de detecci\u00f3n y prevenci\u00f3n de intrusiones sin activar alertas.",
    ns11: "Network Forensics e Incident Response",
    ns11d: "Analiza capturas de paquetes para reconstruir ataques, crear l\u00edneas de tiempo e identificar indicadores de compromiso.",
    ns12: "Construcci\u00f3n de Arquitecturas de Red Seguras",
    ns12d: "Dise\u00f1a redes segmentadas con reglas de firewall adecuadas, VLANs, monitoreo y principios zero-trust.",
    cr01: "Cifrado Sim\u00e9trico (AES, DES, ChaCha20)",
    cr01d: "Comprende cifrados de bloque y flujo, modos de operaci\u00f3n (CBC, GCM, CTR) y cu\u00e1ndo falla el cifrado sim\u00e9trico.",
    cr02: "Cifrado Asim\u00e9trico (RSA, ECC)",
    cr02d: "Aprende criptograf\u00eda de clave p\u00fablica, protocolos de intercambio de claves y la matem\u00e1tica detr\u00e1s de RSA y curvas el\u00edpticas.",
    cr03: "Funciones Hash e Integridad",
    cr03d: "Explora MD5, SHA-256 y BLAKE2. Comprende colisiones, ataques preimage, length extension y HMAC.",
    cr04: "Infraestructura de Clave P\u00fablica (PKI)",
    cr04d: "Autoridades de certificaci\u00f3n, certificados X.509, cadenas de certificados, revocaci\u00f3n y c\u00f3mo funciona realmente la confianza TLS.",
    cr05: "Protocolo TLS/SSL en Profundidad",
    cr05d: "Analiza el handshake TLS paso a paso. Comprende cipher suites, perfect forward secrecy y ataques de downgrade.",
    cr06: "Almacenamiento y Cracking de Contrase\u00f1as",
    cr06d: "Bcrypt, scrypt y Argon2 para defensa. Hashcat y John the Ripper para ataque. Rainbow tables y salting.",
    cr07: "Ataques Criptogr\u00e1ficos",
    cr07d: "Padding oracle, birthday attacks, length extension y explotaci\u00f3n de generadores de n\u00fameros aleatorios d\u00e9biles en el mundo real.",
    cr08: "Firmas Digitales y Autenticaci\u00f3n",
    cr08d: "Firmas RSA y ECDSA, seguridad de tokens JWT y c\u00f3mo verificar \u2014 o falsificar \u2014 la autenticidad de los datos.",
    cr09: "Esteganograf\u00eda y Ocultaci\u00f3n de Datos",
    cr09d: "Oculta datos en im\u00e1genes, archivos de audio y tr\u00e1fico de red. Detecta y extrae mensajes ocultos.",
    cr10: "Criptograf\u00eda Aplicada y Fallos Reales",
    cr10d: "Casos de estudio de criptograf\u00eda rota: Heartbleed, POODLE, ROCA y las lecciones de los fallos catastr\u00f3ficos.",
    re01: "Fundamentos de Assembly x86/x64",
    re01d: "Registros, instrucciones, convenciones de llamada, stack frames y lectura fluida del output del desensamblador.",
    re02: "An\u00e1lisis Est\u00e1tico con Ghidra",
    re02d: "Navega el decompilador de Ghidra para entender la l\u00f3gica de binarios y recuperar firmas de funciones \u2014 sin ejecutar el programa.",
    re03: "An\u00e1lisis Din\u00e1mico con GDB",
    re03d: "Establece breakpoints, inspecciona memoria y registros, traza el flujo de ejecuci\u00f3n y manipula programas en ejecuci\u00f3n.",
    re04: "Formatos Binarios PE y ELF",
    re04d: "Comprende las estructuras de archivos ejecutables, secciones, tablas de import/export y c\u00f3mo los loaders las resuelven.",
    re05: "Debugging y Patching de Binarios",
    re05d: "Modifica el comportamiento de programas parcheando instrucciones, evitando verificaciones de licencia y hot-patching en memoria.",
    re06: "Fundamentos de An\u00e1lisis de Malware",
    re06d: "Analiza binarios maliciosos de forma segura en sandboxes aisladas. An\u00e1lisis comportamental, extracci\u00f3n de strings e identificaci\u00f3n de IOC.",
    re07: "Anti-Reversing y Ofuscaci\u00f3n",
    re07d: "Reconoce y derrota packers, trucos anti-debug, ofuscaci\u00f3n de flujo de control y protecciones con m\u00e1quinas virtuales.",
    re08: "CTF Binary Exploitation",
    re08d: "Buffer overflows, return-oriented programming (ROP), format string bugs y escritura de shellcode para competiciones CTF.",
    lp01: "Enumeraci\u00f3n y Reconocimiento Linux",
    lp01d: "Recopila sistem\u00e1ticamente info del sistema, usuarios, procesos, config de red y software instalado para mapear la superficie de ataque.",
    lp02: "Explotaci\u00f3n de Binarios SUID/SGID",
    lp02d: "Encuentra y explota binarios con permisos elevados usando t\u00e9cnicas GTFOBins para obtener shells root.",
    lp03: "Misconfiguraciones de Sudo",
    lp03d: "Explota reglas sudo, inyecci\u00f3n LD_PRELOAD y debilidades del archivo sudoers para obtener acceso root sin restricciones.",
    lp04: "Explotaci\u00f3n de Cron Jobs",
    lp04d: "Secuestra tareas programadas mediante scripts escribibles, manipulaci\u00f3n de PATH, wildcard injection y abuso de tar checkpoint.",
    lp05: "Manipulaci\u00f3n de la Variable PATH",
    lp05d: "Enga\u00f1a a programas privilegiados para que ejecuten tu c\u00f3digo malicioso controlando la variable de entorno PATH.",
    lp06: "Exploits del Kernel",
    lp06d: "Identifica versiones del kernel vulnerables y usa exploits p\u00fablicos como DirtyCow, DirtyPipe y PwnKit.",
    lp07: "Capabilities y Explotaci\u00f3n de Servicios",
    lp07d: "Abusa de capabilities Linux (cap_setuid, cap_dac_override), archivos de unidad de servicio escribibles y permisos de sockets.",
    lp08: "Misconfiguraciones NFS y File Share",
    lp08d: "Explota exports NFS no_root_squash y shares Samba escribibles para plantar binarios SUID y escalar privilegios.",
    lp09: "Docker y Escape de Contenedores",
    lp09d: "Escapa de contenedores Docker mediante sockets montados, modo privilegiado y misconfiguraciones del filesystem host.",
    lp10: "Metodolog\u00eda de Privilege Escalation",
    lp10d: "Combina todas las t\u00e9cnicas en un checklist sistem\u00e1tico. Construye tus propios scripts de enumeraci\u00f3n y automatiza el proceso.",
  },
};
