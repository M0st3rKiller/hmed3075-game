/* DreamStation: a classroom role-play for HMED 3075.
   All on-screen text lives in this file. Edit here, not in the pages.
   Tags: "H" = historical (from the public record, with a source), "F" = fictional (designed for the game). */

window.GAME = {
  title: "DreamStation",
  subtitle: "A role-play on medical device regulation",

  video: { id: "Vy0r1m20xzo", title: "Philips DreamStation monitoring David's sleep apnea in Australian Outback (Philips Healthcare, 3:33)" },

  /* Unlock words. The host screen shows them, students type them on their table page. */
  unlock: { game: "FOAM" },

  /* Sub-stages inside each act, in minutes. */
  stages: [
    { id: "read", name: "Read", minutes: 7 },
    { id: "debate", name: "Discussion", minutes: 15 },
    { id: "choose", name: "Recommend", minutes: 3 },
    { id: "outcome", name: "Outcome", minutes: 1 }
  ],

  /* What the big screen shows during each stage of an act */
  stageRules: {
    read: [
      "Read the story and your table's card on your device.",
      "Sum up what your table knows and what you still need to find out."
    ],
    debate: [
      "Talk with your table: what does your side want?",
      "Question the other tables: what do they know, and what did they do?",
      "Pick a spokesperson to present your table's recommendation to your boss."
    ]
  },

  sources: {
    F1: { t: "AV Club review of The Bleeding Edge", u: "https://avclub.com/a-documentary-muckraker-takes-on-the-tech-sector-of-hea-1827851315" },
    F2: { t: "MassDevice: The Bleeding Edge raises big questions for device makers", u: "https://www.massdevice.com/netflixs-the-bleeding-edge-raises-big-questions-for-medical-device-manufacturers/" },
    F3: { t: "TheWrap review of The Bleeding Edge", u: "https://www.thewrap.com/the-bleeding-edge-film-review-netflix-kirby-dick-essure" },
    F4: { t: "Women's Health Council review of The Bleeding Edge", u: "https://www.womenshealthcouncil.org.nz/review-of-the-bleeding-edge-documentary-2" },
    F5: { t: "Irish Times review of The Bleeding Edge", u: "https://www.irishtimes.com/culture/film/shocking-expose-of-dodgy-medical-devices-1.3575099" },
    F6: { t: "National Center for Health Research on The Bleeding Edge", u: "https://www.center4research.org/?p=9083" },
    F7: { t: "Medtech Insight: groups use The Bleeding Edge to push device safety", u: "https://www.center4research.org/bleeding-edge-lessons-push-device-safety/" },
    F8: { t: "ConsumerAffairs on The Bleeding Edge", u: "https://www.consumeraffairs.com/news/the-human-tragedy-of-poorly-regulated-medical-devices-gets-the-spotlight-in-a-netflix-film-072718.html" },
    F10: { t: "ThinkProgress on The Bleeding Edge and Bayer's Essure announcement", u: "https://archive.thinkprogress.org/tech-health-sector-medical-devices-bleeding-edge-290ced64e9a9/" },
    F11: { t: "MassDevice: Netflix's The Bleeding Edge blasts medtech and the FDA", u: "https://www.massdevice.com/netflixs-the-bleeding-edge-blasts-medtech-fda/" },
    F12: { t: "The Daily Beast on The Bleeding Edge", u: "https://www.thedailybeast.com/the-bleeding-edge-not-even-doctors-know-how-medical-devices-are-regulated" },
    F13: { t: "New York Times review of The Bleeding Edge, as reprinted in Gulf News", u: "https://gulfnews.com/tabloid/film/the-bleeding-edge-looks-at-victims-of-medical-devices-1.2261911" },
    F14: { t: "CNN on Bayer's payments to doctors and the women who lobbied Congress (via WTKR)", u: "https://www.wtkr.com/2018/07/28/bayer-allegedly-paid-doctors-millions-for-questionable-birth-control-device" },
    F9: { t: "Bayer's \"fact check\" of The Bleeding Edge (July 27, 2018)", u: "https://www.prnewswire.com/news-releases/bayer-fact-checks-netflixs-the-bleeding-edge-300687964.html" },
    S1: { t: "Philips press release on the Dream Family launch (Oct. 20, 2015)", u: "https://prnewswire.com/news-releases/new-philips-dream-family-solution-gives-sleep-apnea-patients-a-better-nights-sleep-300162910.html" },
    S2: { t: "Philips DreamStation product brochure (2015)", u: "https://images.philips.com/is/content/PhilipsConsumer/PDFDownloads/India/DreamStation%20device%20brochure.pdf" },
    S3: { t: "Medicare coverage rules for CPAP (summary)", u: "https://sleepdr.com/blog/medicare-coverage-for-cpap-supplies" },
    S4: { t: "Study on how many patients meet the Medicare 90-day rule (The Hospitalist)", u: "https://blogs.the-hospitalist.org/content/cms-cpap-rule-could-deny-coverage-some-who-benefit-long-term" },
    S5: { t: "U.S. Department of Justice press release on Respironics and DME suppliers (Sept. 2022)", u: "https://www.justice.gov/usao-sc/pr/philips-subsidiary-pay-over-24-million-alleged-false-claims-caused-respironics" },
    S6: { t: "Unsealed emails between Philips and its foam supplier (Fierce Biotech)", u: "https://www.fiercebiotech.com/medtech/philips-flagged-ventilator-foam-issues-years-beginning-recall-court-docs-show" },
    S7: { t: "A Philips engineer's 2018 email, unsealed in court (Bloomberg)", u: "https://www.bnnbloomberg.ca/philips-knew-of-cpap-foam-decay-years-before-recall-emails-show-1.1776593.amp.html" },
    S8: { t: "FDA Form 483, inspection of Philips Respironics (Nov. 9, 2021)", u: "https://fda.gov/media/154244/download" },
    S9: { t: "Summary of FDA records on foam-related reports", u: "https://btw.media/en/philips-respironics-foam-degradation-medical-device-recall-accountability" },
    S10: { t: "ProPublica and Pittsburgh Post-Gazette: the FDA's reporting system", u: "https://sleepreviewmag.com/sleep-treatments/therapy-devices/cpap-pap-devices/millions-of-people-used-tainted-breathing-machines-the-fda-failed-to-use-its-power-to-protect-them/" },
    S11: { t: "Pittsburgh Post-Gazette and ProPublica: sales by distributors before the recall", u: "https://sleepreviewmag.com/sleep-health/prevailing-attitudes/sleep-safety/top-philips-executive-approved-sale-of-defective-breathing-machines-by-distributors-despite-tests-showing-health-risks/" },
    S12: { t: "ProPublica and Pittsburgh Post-Gazette: Philips' internal health hazard evaluations", u: "https://sleepreviewmag.com/?p=403872" },
    S13: { t: "Philips recall notice", u: "https://tst.philips.com.hk/en/c-e/src-update.html" },
    S14: { t: "Public Citizen on complaints received by Philips (Dec. 2023)", u: "https://www.citizen.org/?p=96269" },
    S15: { t: "Pittsburgh Post-Gazette: FDA statement on Philips' testing (Oct. 2023)", u: "https://respiratory-therapy.com/products-treatment/industry-regulatory-news/business-news/top-philips-executive-approved-sale-of-defective-breathing-machines-by-distributors-despite-tests-showing-health-risks/" },
    S16: { t: "PBS NewsHour on CPAP use and the Philips investigation", u: "https://www.pbs.org/newshour/show/investigation-finds-philips-hid-safety-issues-with-its-cpap-machines-for-years" },
    S17: { t: "FDA order requiring Philips to notify patients (2022)", u: "https://content.govdelivery.com/accounts/USFDA/bulletins/30e57a0" },
    S18: { t: "FDA announcement of the consent decree (2024)", u: "https://content.govdelivery.com/accounts/USFDA/bulletins/39561c0" },
    S19: { t: "AP: Philips will pay $1.1 billion (April 2024)", u: "https://www.click2houston.com/health/2024/04/29/philips-will-pay-11-billion-to-resolve-us-lawsuits-over-breathing-machines-that-expel-debris/" },
    S20: { t: "MedTech Dive: Philips settles with the Department of Justice (Nov. 2026)", u: "https://www.medtechdive.com/news/philips-settles-with-doj-over-recalled-cpap-machines/873738/" },
    S22: { t: "ProPublica and Pittsburgh Post-Gazette: how they investigated the recall, and Philips' response", u: "https://sleepreviewmag.com/sleep-treatments/therapy-devices/cpap-pap-devices/we-spent-a-year-investigating-the-philips-cpap-recall-heres-how-we-did-it/" },
    S23: { t: "MedTech Dive: user fees make up nearly half of CDRH's budget (2026)", u: "https://www.medtechdive.com/news/fda-mdufa-user-fee-patient-comments/759905/" },
    S24: { t: "Union of Concerned Scientists: CDRH scientists say managers pressured them to approve devices", u: "https://www.ucs.org/resources/fda-medical-device-approval-based-politics-not-science" },
    S25: { t: "MassDevice: FDA admits undue influence in the Menaflex approval (2009)", u: "https://www.massdevice.com/fda-regens-menaflex-our-bad/" },
    S26: { t: "FDA 510(k) record for DreamStation 2: a Class II device cleared as substantially equivalent (2020)", u: "https://fda.innolitics.com/device/K200480" },
    S27: { t: "MassDevice: FDA designates the Philips CPAP recall Class I (2021)", u: "https://www.massdevice.com/?p=86262" },
    S28: { t: "FDA recall record for DreamStation Auto CPAP, listing 510(k) K131982", u: "https://www.accessdata.fda.gov/scripts/cdrh/cfdocs/cfRes/res.cfm?id=214847" },
    S29: { t: "AASM: the FDA warns that ozone and UV CPAP cleaners are not legally marketed (Feb. 2020)", u: "https://aasm.org/fda-safety-cpap-cleaning-devices-ozone-ultraviolet-light/" },
    S30: { t: "ProPublica and NPR: insurers track CPAP use and stop paying (2018)", u: "https://www.propublica.org/article/you-snooze-you-lose-insurers-make-the-old-adage-literally-true" },
    S31: { t: "Healio: the SAVE trial finds CPAP does not reduce cardiovascular events (2016)", u: "https://www.healio.com/news/cardiology/20160829/save-cpap-does-not-reduce-cv-events-in-patients-with-cvd-sleep-apnea" },
    S32: { t: "MedTech Dive: FDA warning letters to ozone CPAP cleaner makers, and the SoClean and Philips lawsuits (Sept. 2024)", u: "https://www.medtechdive.com/news/fda-warning-letter-ozone-cleaner-cpap/726172/" },
    S21: { t: "RAPS: FDA inspection turns up more problems for Philips", u: "https://www.raps.org/resource/fda-inspection-turns-up-more-problems-for-philips.html" }
  },

  /* ---------------- Warm-up (host only) ---------------- */
  warmup: {
    questions: [{"q": "In your own words, what was The Bleeding Edge about? What is its central argument?", "ws": "Worksheet Q1"}, {"q": "What do the devices in the film have in common?", "ws": "Worksheet Q3"}, {"q": "What reforms does the film propose? Is that a step in the right direction?", "ws": "Worksheet Q5"}],

    concepts: [{"term": "Before sale", "t": "Most devices are cleared by comparison with an older device. This is the 510(k) path, and it usually needs no clinical trial. CPAP machines go this way.", "src": ["S26"]}, {"term": "After sale", "t": "Companies report problems with their own products. Doctors and patients may report, but they do not have to.", "src": ["S10"]}, {"term": "When it fails", "t": "A recall is usually started by the company, not by the FDA."}],
    conceptQs: [{"t": "Essure went through the strictest path (PMA, which requires clinical data) and still harmed thousands of women. So where does the system fail?"}],

    statement:
      "This game is adapted from a real case. Philips Respironics and DreamStation are real names. The local people and organizations in the game are fictional. Anything marked Historical comes from the public record. Everything else was written for this discussion. The debrief at the end is entirely real.",
    rules: [
      "Each table plays staff on one side of the story, not the people in charge. Open the entry page and type your table number.",
      "One round: read (7 min), discussion within and across tables (15 min), recommend (3 min), outcome (1 min).",
      "Your table makes a recommendation on two questions, and your boss decides. One spokesperson gives both to the TA, and the big screen shows whether each was adopted or overruled.",
      "The game opens when the unlock word appears on the big screen.",
      "You decide what to share with other tables. Nothing in the rules punishes you for sharing, but other tables may use what you tell them.",
      "Your TA plays every table's boss, as well as the insurer and the federal government. Their decisions are final."
    ]
  },

  /* ---------------- Tables ---------------- */
  tables: [
    {
      n: 1, name: "Philips Respironics", label: "The manufacturer", color: "#2F5D8A",
      intro: "You work on the DreamStation product team at Philips Respironics, the U.S. sleep and respiratory business of Royal Philips. You can make recommendations, but the executives and the board make the decisions. Your TA plays them.",
      interest: "You want DreamStation to sell well and stay on the market.",
      dilemma: "Every month a problem stays hidden, it gets more expensive to fix."
    },
    {
      n: 2, name: "Twin Lakes Sleep Specialists", label: "The physicians", color: "#3E7C59",
      intro: "You are staff physicians at a local sleep clinic, where you diagnose sleep apnea and prescribe CPAP. You can make recommendations, but the clinic's managing partners set its policy. Your TA plays them.",
      interest: "You want treatment to work. That means patients have to wear the machine, and insurance only pays if they do. You also depend on good relations with suppliers and want to stay out of court.",
      dilemma: "You need a machine your patients will wear, but you have no way of knowing whether the machine itself is safe."
    },
    {
      n: 3, name: "North Star Sleep Apnea Circle", label: "The patients", color: "#9A4A3A",
      intro: "You are volunteers who run a local support group for people with sleep apnea, and you use CPAP yourselves. You can make recommendations, but the group's board decides what it tells members. Your TA plays the board.",
      interest: "You want a machine that lets you sleep and keeps you healthy.",
      dilemma: "You need the machine to stay healthy, and you are starting to fear it is making you sick."
    },
    {
      n: 4, name: "CDRH Staff", label: "The reviewers", color: "#4B5563",
      intro: "You are reviewers at the FDA's Center for Devices and Radiological Health. You read companies' submissions and reports of problems with devices. You can make recommendations, but your leadership sets your workload and makes the final call. Your TA plays your leadership.",
      interest: "You want to do your job well and protect the public.",
      dilemma: "There is always more work than time, your bosses decide what is urgent, and you are not sure whose side they are on."
    },
    {
      n: 5, name: "University of Twin Lakes Medical School", label: "The researchers", color: "#5B4B8A",
      intro: "You are junior researchers in the sleep lab of the local medical school. You can make recommendations, but the department chair and the dean's office decide what the lab studies and what it says in public. Your TA plays them.",
      interest: "You want to find out what is true.",
      dilemma: "You cannot get the data you need, and you are not sure your findings will hold up."
    },
    {
      n: 6, name: "Lakeside Home Medical", label: "The equipment supplier", color: "#7A5C1E",
      intro: "You work in sales and service at a local medical equipment supplier. Patients rent and buy CPAP machines from you, and you download their usage data for insurers. The store also sells ozone cleaners for CPAP machines. You can make recommendations, but the owner makes the decisions. Your TA plays the owner.",
      interest: "You want to rent and sell machines and supplies. You only get paid when patients meet the insurer's usage rule.",
      dilemma: "You depend on the doctors who send you patients, and on Philips, which supplies most of what you sell."
    }
  ],

  /* ---------------- Acts ---------------- */
  acts: [
    {
      key: "game", n: 1, title: "The Black Specks",
      rules: [{"h": "Medicare's usage rule", "t": "Medicare keeps paying for a CPAP machine only if the patient uses it at least 4 hours a night on 70 percent of nights during 30 days within the first 90 days."}, {"h": "FDA reporting rule", "t": "Device makers must report deaths, serious injuries and malfunctions to the FDA within 30 days. Doctors, patients and suppliers may report, but they do not have to."}],
      shared: [{"h": "How we got here", "p": [{"t": "CPAP machines push air through a mask all night to treat sleep apnea. About 8 million Americans use one.", "tag": "H", "src": ["S16"]}, {"t": "Old machines were loud, and Medicare stops paying if patients do not use them. So Philips lined DreamStation with foam to make it quiet. Nobody tested the foam for long-term safety."}]}, {"h": "Now", "p": [{"t": "Years later, patients find black specks in their masks. Some get headaches and coughs. No one can say why.", "tag": "H", "src": ["S14"]}, {"t": "Everyone in this room helped put this machine in patients' bedrooms. Everyone has a reason to wait."}]}],
      cards: {
        1: {
          films: [{"t": "Bayer refused to be interviewed, then attacked the film with a \"fact check\" (worksheet Q6).", "src": ["F3", "F9"]}, {"t": "A week before the film came out, Bayer pulled Essure, citing \"declining sales.\"", "src": ["F10"]}],
          past: {"t": "You skipped the long-term test to launch before a rival."},
          facts: [{"t": "Your own tests show the foam breaks down, faster with ozone cleaners."}, {"t": "Two internal reviews rated the risk \"unacceptable.\" A third said harm was \"improbable.\"", "tag": "H", "src": ["S12", "S21"]}],
          pulls: {"act": ["Millions of people breathe through this foam every night.", "Your names are on the internal emails."], "hold": ["A recall would cost billions.", "A recall would leave patients with no machine at all."]},
          hide: [{"t": "You have reported far fewer complaints than you received.", "why": "Late reports can bring penalties.", "tag": "H", "src": ["S8", "S10"]}],
          blame: {"you": ["Everyone will say you skipped the test."], "them": ["You can blame patients who used ozone cleaners."]},
          source: {"t": "Your foam supplier, in a 2016 email: it \"would not recommend use of polyester foam in such an environment.\"", "src": ["S6"]},
          question: "Complaints about black specks are piling up, and your own tests show the foam breaks down. What do you recommend to the executives?",
          options: ["A. Announce there is no proof of harm, and point to ozone cleaners", "B. Swap the foam during routine servicing, with no announcement", "C. File every overdue complaint with the FDA now"],
          q2: {"topic": "The prescriber data", "ctx": {"t": "Your sales team gives equipment suppliers free data on which doctors prescribe CPAP, so they can market to those doctors.", "tag": "H", "src": ["S5"]}, "question": "A colleague warns that a free gift in exchange for referrals may be an illegal kickback. What do you recommend?", "options": ["A. Keep the program running", "B. End the program and report it to the government ourselves", "C. Keep the data flowing, but charge suppliers a fair price for it"]}
        },
        2: {
          films: [{"t": "Dr. Stephen Tower, a surgeon, put a metal hip in himself. He blames it for his mental breakdown.", "src": ["F11", "F2"]}, {"t": "Device companies paid doctors $2 billion in 2016. Tower says doctors are pushed toward new devices.", "src": ["F2", "F3"]}],
          past: {"t": "Your clinic made DreamStation its default without seeing a safety study."},
          facts: [{"t": "Patients bring you tubing with black specks, and report headaches and coughs."}, {"t": "Untreated sleep apnea raises the risk of heart attack, stroke and car crashes."}],
          pulls: {"act": ["Your patients trust you.", "You are the one who prescribed it."], "hold": ["Stopping treatment is dangerous too.", "The partners are afraid of lawsuits."]},
          hide: [{"t": "You never saw any safety data.", "why": "Patients may hold you responsible."}],
          blame: {"you": ["Patients will say you told them it was safe."], "them": ["You can point out that Philips and the FDA said so first."]},
          source: {"t": "Philips' recall notice told patients not to stop or change prescribed therapy without consulting their physicians.", "src": ["S13"]},
          question: "A patient puts speckled tubing on your desk and asks: do I use this tonight? What should the clinic tell every patient?",
          options: ["A. Tell patients to keep using it: untreated apnea is the bigger risk", "B. Tell patients to stop tonight, until the particles are tested", "C. Lay out both risks and let each patient choose"],
          q2: {"topic": "Medicare's 4-hour rule", "ctx": {"t": "In a study of 132,000 patients, only 49% met Medicare's usage rule in the first 90 days. A third of those who failed were still benefiting from CPAP a year later.", "tag": "H", "src": ["S4"]}, "question": "Your patient sleeps better on CPAP but averages 3.5 hours a night at day 90. What should the clinic do?", "options": ["A. Follow the rule: the machine goes back", "B. Restart the clock with a new visit and a new sleep test", "C. Join other sleep doctors in asking Medicare to change the rule"]}
        },
        3: {
          films: [{"t": "Angie Firmalino's Facebook group of Essure patients grew to tens of thousands and pressured the FDA.", "src": ["F6"]}, {"t": "These women got Essure because doctors recommended it, then lobbied Congress for years to ban it.", "src": ["F1", "F14"]}],
          past: {"t": "You petitioned Philips for a quiet machine, and Philips used your petition in ads."},
          facts: [{"t": "Twenty members sent photos of black specks.", "tag": "F"}, {"t": "Members who stop using their machines cannot sleep, drive or work safely."}],
          pulls: {"act": ["Your members are the ones breathing it.", "Nobody else is collecting these stories."], "hold": ["Your members need their machines.", "The board is afraid of being sued for bad advice."]},
          hide: [{"t": "Many members used ozone cleaners.", "why": "Philips could blame them instead of the foam."}],
          blame: {"you": ["Philips will say your members used ozone cleaners."], "them": ["You can blame everyone who said it was safe."]},
          source: {"t": "Complaints sent to Philips described \"black particles\" or \"dirt and dust\" inside machines.", "src": ["S14"]},
          question: "Members keep finding black specks, and no one can say what they are. What should the board tell members?",
          options: ["A. Tell members to keep using the machines until there is proof", "B. Tell members to stop, or dig out their old loud machines", "C. File FDA reports as a group and hire a lawyer"],
          q2: {"topic": "Being tracked", "ctx": {"t": "Members' machines send nightly usage data to suppliers and insurers, and insurers can stop paying when use is low. One patient found out only when his supplier emailed him his own sleep report.", "tag": "H", "src": ["S30"]}, "question": "Members are upset to learn they are being watched. What should the board tell them?", "options": ["A. Accept it: no data, no coverage", "B. Switch to an older machine that keeps data on a card only your doctor reads", "C. Challenge insurers: members never agreed to this"]}
        },
        4: {
          films: [{"t": "Former FDA chief David Kessler says the reporting system fails because reporting is voluntary.", "src": ["F7"]}, {"t": "The film shows FDA officials who later took jobs at the companies they regulated.", "src": ["F13"]}],
          past: {"t": "Your office approved the foam in one day, without a test."},
          facts: [{"t": "Philips filed only 30 foam reports in ten years.", "tag": "H", "src": ["S9"]}, {"t": "A few early reports said \"contamination.\" Nobody followed up.", "tag": "H", "src": ["S10"]}],
          pulls: {"act": ["You are the only people paid to check.", "The warning signs were already in your files."], "hold": ["Your director says to wait, and is rumored to have an industry job offer.", "An investigation would take months."]},
          hide: [{"t": "Your office never asked for a test.", "why": "It shows you missed it from the start."}],
          blame: {"you": ["The public will say you cleared it."], "them": ["You can say Philips kept the data from you."]},
          source: {"t": "Device makers must report within 30 days, but late reports are common, and the FDA has accepted them years later.", "src": ["S10"]},
          question: "A few reports say \"contamination,\" and your director says to let the company handle it. What do you recommend?",
          options: ["A. Open a formal investigation and inspect the plant", "B. Issue a public safety warning now", "C. Send Philips a letter asking for information"],
          q2: {"topic": "The next model", "ctx": {"t": "Philips asks you to clear a new model, DreamStation 2, as \"substantially equivalent\" to an earlier Philips clearance. It is the clearance DreamStation itself is sold under.", "tag": "H", "src": ["S26", "S28"]}, "question": "No clinical trial is required, and leadership wants it done this quarter. What do you recommend?", "options": ["A. Clear it as substantially equivalent", "B. Hold it until Philips answers the contamination reports on the older machines", "C. Require clinical data, as for a high-risk device"]}
        },
        5: {
          films: [{"t": "Researcher Diana Zuckerman criticized device approval. Bayer attacked her as a paid expert witness.", "src": ["F4", "F9"]}, {"t": "Dr. Rita Redberg explains how the 510(k) path let dangerous metal hips onto the market.", "src": ["F2", "F4"]}],
          past: {"t": "Your lab praised the quiet machine in the paper. Philips put the quote in its brochure."},
          facts: [{"t": "Your lab says the specks are broken-down foam."}, {"t": "You tested only twelve machines, and Philips will not share its data."}],
          pulls: {"act": ["Yours is the only independent evidence.", "Your lab's name is already on the product."], "hold": ["Twelve machines is a small sample.", "Your university is afraid of a lawsuit."]},
          hide: [{"t": "How small your sample is.", "why": "Philips would use it to dismiss your findings."}],
          blame: {"you": ["Readers who trusted your praise will blame you."], "them": ["You can say Philips would not share its data."]},
          source: {"t": "A Philips engineer, in a 2018 email unsealed in court: \"The material sheds and is pulled into the ventilator air path.\"", "src": ["S7"]},
          question: "Your lab says the specks are degraded foam, based on twelve machines. What do you recommend to the chair?",
          options: ["A. Publish the result now as a preliminary finding", "B. Give the lab report to the patients' group", "C. Send it confidentially to the FDA and keep testing"],
          q2: {"topic": "An inconvenient trial", "ctx": {"t": "A trial of 2,717 heart patients (SAVE, 2016) found that CPAP did not prevent heart attacks or strokes. The patients used it 3.3 hours a night on average.", "tag": "H", "src": ["S31"]}, "question": "A reporter asks what this means for people with sleep apnea. What do you recommend the lab say?", "options": ["A. \"CPAP still helps. The patients in this trial barely used it.\"", "B. \"For heart patients, CPAP has not been shown to prevent heart attacks or strokes.\"", "C. \"We do not know yet. It depends on a trial nobody has run.\""]}
        },
        6: {
          films: [{"t": "On training for the da Vinci robot: if surgeons needed nine weeks of it, nobody would buy the machine.", "src": ["F2"]}, {"t": "Insurers paid to put Essure in far more easily than to take it out.", "src": ["F8"]}],
          past: {"t": "Philips gave you free data on which doctors prescribe CPAP, and you used it to sell.", "tag": "H", "src": ["S5"], "note": "In 2022 Respironics paid $24 million to settle these allegations."},
          facts: [{"t": "Speckled machines keep coming back to your counter."}, {"t": "Philips stopped shipping, but says you may keep selling your stock.", "tag": "H", "src": ["S11"]}],
          pulls: {"act": ["You are the ones who hand patients the machine.", "You saw the specks before anyone else."], "hold": ["There are 200 unsold machines in the warehouse.", "You also sell the ozone cleaners Philips is starting to blame."]},
          hide: [{"t": "You saw specks long before anyone complained.", "why": "It could make you look complicit."}],
          blame: {"you": ["Patients will say you sold them the machine."], "them": ["You can say Philips told you to keep selling."]},
          source: {"t": "In April 2021 Philips stopped shipping the machines from its factories but approved continued sales of distributors' inventory.", "src": ["S11"]},
          question: "Speckled machines keep coming back, and Philips says you may keep selling. What should the owner do with the 200 in stock?",
          options: ["A. Stop selling, and call every patient and doctor", "B. Report the specks to Philips only, and sell the stock", "C. Pull the stock quietly and say nothing"],
          q2: {"topic": "Ozone cleaners", "ctx": {"t": "Ozone CPAP cleaners are your best-selling add-on. In February 2020 the FDA warned that they are not legally marketed for cleaning CPAP machines and that their safety is unknown.", "tag": "H", "src": ["S29"]}, "question": "What do you recommend the owner do with the cleaners?", "options": ["A. Keep selling them", "B. Take them off the shelf", "C. Keep selling, and hand every buyer the FDA's warning"]}
        }
      },
      outcome: {
        lead: "What happened: in April 2021 Philips stopped shipping the machines from its factories. On June 14, 2021, it recalled millions of them. It said the foam could break down, and that unapproved cleaning methods such as ozone, and heat and humidity, might make it worse.",
        lines: {
          1: ["Adopted. The executives: \"That is our position.\" The statement goes out, doctors repeat it to patients, and the complaints stay in your files.", "Overruled. The executives: \"A foam swap is a design change we would have to explain to the FDA. No.\" The company line stays: there is no proof of harm.", "Overruled. The executives: \"Legal says thousands of late reports at once would force a recall. Not yet.\" The reports wait. In the real case, Philips filed 30 in ten years."],
          2: ["Adopted. The managing partners: \"Agreed. That is also what the manufacturer says.\" Months later the recall letter arrives, and patients ask why their doctor told them to breathe through it.", "Overruled. The managing partners: \"There is no FDA warning and no replacement machines. We cannot pull patients off a cleared device.\" Patients are told to keep using it.", "Overruled. The managing partners: \"Our lawyer wants one message for every patient, and the manufacturer's is to keep using it.\" That is what patients hear."],
          3: ["Adopted. The board: \"Without proof, we cannot tell anyone to stop.\" Members keep the machines on for months more, particles and all.", "Overruled. The board: \"If a member quits treatment and falls asleep at the wheel, the Circle is liable.\" The advice sent to members is: ask your doctor.", "Adopted. The board: \"Reporting costs us nothing. Do it.\" Twenty reports reach the FDA in one week. In the real case, Philips filed 30 in ten years."],
          4: ["Overruled. Your director: \"The company is handling it, and my inspectors are needed elsewhere.\" The request comes back unsigned.", "Overruled. Your director: \"What exactly is the risk? Without the company's data, we cannot say.\" The warning is never cleared.", "Adopted. Your director: \"Good. Let the company handle it.\" Philips answers in 60 days that it is looking into the matter, and the file is marked handled."],
          5: ["Overruled. The chair: \"University counsel sees twelve machines and a lawsuit. Collect more data first.\" The draft is shelved.", "Overruled. The dean's office: \"Unreviewed findings do not leave the university, least of all to people who may sue.\" The report stays in your drawer.", "Adopted. The chair: \"Fine, as long as it stays confidential.\" The FDA logs the report with its other \"contamination\" files, and no patient hears of it."],
          6: ["Overruled. The owner: \"I am not eating 200 machines, and our contract forbids disparaging the product. Philips says we can sell.\" Lakeside sells.", "Adopted. The owner: \"Good. Let Philips deal with it.\" Philips confirms you may keep selling, and the last machines leave weeks before the recall. In the real case, Philips approved exactly that.", "Overruled. The owner: \"Philips cleared this stock for sale. Why is it sitting in the warehouse?\" The machines go back on the shelf."]
        },
      lines2: {
        1: ["Adopted. The executives: \"It sells machines, and nobody has complained.\" The program runs. In the real case, an employee took it to court as a whistleblower, and in 2022 Respironics paid over $24 million without admitting liability.", "Overruled. The executives: \"Companies do not report themselves.\" The program runs. In the real case, the report came from an employee instead.", "Overruled. The executives: \"Suppliers will not pay for what they now get free.\" The data stays free."],
        2: ["Adopted. The managing partners: \"It is Medicare's rule, not ours.\" The supplier takes the machine back.", "Adopted. The managing partners: \"Fine, if the patient will pay for another sleep test.\" The patient starts over, weeks later and one bill poorer.", "Overruled. The managing partners: \"Experts have called that rule arbitrary for years. It is still the rule.\" The machine goes back."],
        3: ["Adopted. The board: \"No data, no coverage. We cannot change that.\" The machines keep reporting.", "Adopted. The board: \"Tell them. Not everyone can find an older machine.\" A few members switch. In the real case, a patient in Texas did exactly this.", "Overruled. The board: \"We are a support group, not a law firm.\" In the real case, Blue Cross Blue Shield called the tracking standard practice."],
        4: ["Adopted. Your supervisor: \"Equivalent on paper. Clear it.\" In the real case, DreamStation 2 was cleared in July 2020. Eleven months later, machines sold under the clearance it was compared to were recalled.", "Overruled. Your supervisor: \"Complaints about old machines belong to another office.\" It is cleared.", "Overruled. Your supervisor: \"It is Class II. The law asks for equivalence, not a trial.\" It is cleared."],
        5: ["Adopted. The chair: \"True, and it keeps patients on treatment.\" The story runs: CPAP works if you use it.", "Overruled. The chair: \"Also true, and insurers read newspapers. Lead with the low usage.\" The story runs: CPAP works if you use it.", "Overruled. The chair: \"\"We do not know\" is not a quote a patient can use.\" You lead with the low usage."],
        6: ["Adopted. The owner: \"The FDA warned. It did not ban.\" The cleaners keep selling. In the real case, the FDA's first warning letters to cleaner makers came in 2024, and Philips and the cleaner maker SoClean sued each other over the foam.", "Overruled. The owner: \"Customers will just buy them down the street.\" The cleaners stay on the shelf.", "Overruled. The owner: \"If we warn people and sell anyway, that looks worse in court.\" The cleaners are sold without the notice."]
      },
        rule: "The FDA classifies the recall as Class I, its most serious type.",
        close: "To this day, how many people the foam harmed has not been settled."
      }
    }
  ],


  /* Debrief endings: per table, a story line for each answer to Q1 and Q2, plus an ending by number of recommendations adopted (0, 1, 2) */
  endings: {
    1: {"q1": ["Your team shipped the foam untested. Years later the complaint files filled with black specks, and you wrote the line the company used: no proof of harm, blame the ozone cleaners. Nobody had proof because nobody had run the test.", "Your team shipped the foam untested. When it began to crumble, you wanted to swap it out quietly during servicing. The executives refused, because a swap would have to be explained to the FDA. The foam stayed in every machine.", "Your team shipped the foam untested. When the complaints piled up, you wanted to send every one of them to the FDA. Legal said that would force a recall. The reports stayed in the files your product had filled."], "q2": ["On the prescriber data, you said to keep it going, and it kept going until an employee took it to federal court. The settlement cost over $24 million.", "You also wanted the company to end the prescriber-data program and report itself. It did neither. An employee reported it instead.", "You also proposed charging suppliers for the prescriber data. Free was the selling point, so free it stayed, until the $24 million settlement."], "end": [{"title": "The memo in the drawer", "t": "You gave the careful advice twice and were overruled twice. In the real case, it took an employee's lawsuit and an FDA inspection to move the company."}, {"title": "Useful when convenient", "t": "The company took your advice when it cost nothing, and only then."}, {"title": "The company line", "t": "Everything you advised became policy. This is close to the real record."}]},
    2: {"q1": ["Your clinic made DreamStation its default without seeing a safety study. Then a patient put speckled tubing on your desk, and you said to keep using it. The recall letter reached your patients months later, with your advice still in their charts.", "Your clinic made DreamStation its default, and patients finally wore their machines. When the specks appeared, you wanted them off it that night. The partners pointed out there was no FDA warning and nothing to replace it with. Your patients kept breathing through the machine the clinic chose.", "Your clinic made DreamStation its default. When the specks appeared, you wanted to give patients both risks and let them choose. The partners wanted one message, the manufacturer's. The clinic that picked the machine for its patients also picked their answer."], "q2": ["When a patient who slept better fell half an hour short of Medicare's rule, you let the machine go back.", "When a patient fell half an hour short of Medicare's rule, you restarted the clock with a new sleep test, at the patient's expense.", "You also wanted to challenge Medicare's 4-hour rule. Experts have called it arbitrary for years, and it still stands."], "end": [{"title": "The second opinion nobody heard", "t": "You doubted the machine and the rule, and the clinic followed the manufacturer and the insurer anyway. Patients only ever heard the clinic."}, {"title": "Half your judgment", "t": "The clinic used your judgment where it matched the paperwork."}, {"title": "Standard of care", "t": "You followed the manufacturer and the insurer. Nobody could fault you, and nobody was protected."}]},
    3: {"q1": ["The Circle petitioned for the quiet machine, and Philips printed the petition in its marketing. When black particles turned up in the masks, you told members to keep going until someone had proof. Nobody was looking for any.", "The Circle petitioned for the quiet machine, and Philips used the petition to sell it. When the particles appeared, you wanted members to stop. The board would not risk a member falling asleep at the wheel. The advice that went out was three words: ask your doctor.", "The Circle petitioned for the quiet machine, and Philips quoted it in its marketing. Years later you filed twenty reports with the FDA about the same machine, nearly as many as Philips filed in a decade. Both documents carry your group's name."], "q2": ["On tracking, you told members to live with it: no data, no coverage.", "You also showed members how to switch to machines that keep their data on a card. The few who found one are no longer watched.", "You also wanted to challenge insurers over tracking. The board declined, and insurers call it standard practice."], "end": [{"title": "Not your call", "t": "Patients have the most at stake in this story and the least say. Even your own board said no."}, {"title": "Heard once", "t": "You were heard when it cost nobody anything."}, {"title": "The good patients", "t": "You kept the machines on, stayed in coverage, and did what real patients did. Most had no other choice."}]},
    4: {"q1": ["Your office signed off the foam as a minor change in one day. Years later the word \"contamination\" kept turning up in reports, and you asked to inspect the plant. The director sent the request back unsigned. The file your office closed stayed closed.", "Your office signed off the foam without seeing a test. When the contamination reports came, you drafted a public warning, and the director asked what exactly the risk was. You could not say. Nobody at the agency had ever asked for the data.", "Your office signed off the foam on the company's word. When reports of contamination arrived, you sent the company a letter, and sixty days later it said it was looking into things. The file was marked handled. Philips had answered both of the agency's questions itself."], "q2": ["You also cleared DreamStation 2 by comparing it to an older Philips clearance. Eleven months later, machines sold under that clearance were recalled.", "You also tried to hold DreamStation 2 until Philips answered the old contamination reports. That was another office's job, and it was cleared.", "You also asked for clinical data on DreamStation 2. For a Class II device the law asks only for equivalence, and it was cleared."], "end": [{"title": "Outranked", "t": "You read both files correctly, and neither decision was yours."}, {"title": "The fast answer", "t": "Leadership took your advice when it was the quick one."}, {"title": "Cleared", "t": "Everything you recommended was signed. That is what the real record looks like."}]},
    5: {"q1": ["Your lab gave a reporter a warm quote, and Philips reprinted it in a brochure. Years later you found degraded foam in twelve machines. University counsel saw a lawsuit and shelved the paper. The public has read your praise. It has not read your data.", "Your lab praised the quiet machine, and the quote went into a Philips brochure. When you found degraded foam, you wanted to hand the report to the patients. The dean's office kept it in the building. Patients still have the brochure.", "Your lab praised the quiet machine on the record. When you found degraded foam, you sent the result to the FDA in confidence, where it was filed with the other contamination reports. Your endorsement is public. Your evidence is in a cabinet."], "q2": ["When a large trial found CPAP did not prevent heart attacks, you told the press the patients had barely used it. True, and reassuring.", "When a large trial found CPAP did not prevent heart attacks, you wanted to say so plainly. The chair worried what insurers would do with that sentence.", "When a large trial found CPAP did not prevent heart attacks, you wanted to say nobody knows yet. The chair wanted a quote patients could use."], "end": [{"title": "Unpublished", "t": "You tried to say what you knew, twice. Independent research is as independent as the institution around it."}, {"title": "Safe to say", "t": "The university let you speak when speaking was safe."}, {"title": "On the record", "t": "Everything you said in public was true. The public heard the reassuring half."}]},
    6: {"q1": ["Lakeside worked Philips' list of prescribers, and referrals climbed. Then the machines started coming back with black specks. You wanted to stop selling and call every customer. The owner counted 200 machines in the warehouse and a contract with Philips. Lakeside kept selling to the doctors on that list.", "Lakeside worked Philips' list, and DreamStation became most of its business. When the specks appeared, you told Philips and nobody else, and Philips said to keep selling. The last machines left the shelf weeks before the recall. This is what real distributors did.", "Lakeside worked Philips' list and sold the machine hard. When the specks appeared, you wanted to pull the stock without a fuss. The owner asked why sellable machines were sitting in the warehouse. They went back on the shelf, next to the ozone cleaners."], "q2": ["The ozone cleaners stayed on your shelf after the FDA's warning. Philips later pointed at them.", "You also wanted the ozone cleaners gone after the FDA's warning. The owner noted that the FDA had warned, not banned.", "You also wanted to hand buyers the FDA's ozone warning. The owner thought warning and selling looked worse than just selling."], "end": [{"title": "The counter knew", "t": "Twice you recommended the costly thing, and twice the owner checked the books. The first people to see the problem said the least."}, {"title": "When it paid", "t": "The owner agreed with you when it paid."}, {"title": "Business as usual", "t": "Nothing you sold was illegal to sell. This is what real distributors did."}]}
  },
  roomEndings: [{"max": 3, "title": "The record", "t": "This room behaved almost exactly as the real one did. Nobody had to be overruled for the harm to happen."}, {"max": 8, "title": "Dissent, noted", "t": "Some of you tried to slow it down. The objections were heard, recorded and outvoted."}, {"max": 12, "title": "Outranked", "t": "Most of you tried to stop it, and it happened anyway. The decisions were never made at your tables."}],

  /* ---------------- Debrief (all historical) ---------------- */
  debrief: [
    { y: "2021", t: "The FDA inspects Philips' plant. Its report records that Philips had corresponded with its foam supplier about breakdown since 2015, and that a keyword search of complaints since 2008 turned up at least 222,000 possibly related complaints with no formal investigation.", src: ["S8"] },
    { y: "2022", t: "The FDA orders Philips to notify patients, because many still did not know about the recall.", src: ["S17"] },
    { y: "2023", t: "Philips answers with its own testing: it says the machines are unlikely to cause appreciable harm. Compare Bayer's \"fact check\" of The Bleeding Edge (worksheet Q6). The FDA says Philips' testing has not been adequate to fully evaluate the risks.", src: ["S15", "S22"] },
    { y: "2024", t: "A federal court enters a consent decree that bars Philips from selling new CPAP machines in the U.S. until it meets conditions. The same month, Philips agrees to pay $1.1 billion to settle personal injury claims, without admitting fault. Its stock rises more than 35 percent.", src: ["S18", "S19"] },
    { y: "2026", t: "Philips reaches an agreement in principle with the Justice Department to pay 288 million euros (about $322 million) to resolve criminal and civil investigations.", src: ["S20"] }
  ],
};
