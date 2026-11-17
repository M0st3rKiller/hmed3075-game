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
      "Sum up what your table knows, and plan what you still need."
    ],
    debate: [
      "Talk with your table: what is your group trying to do?",
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
      "Each table plays the staff of one side, not its decision-makers. Open the entry page and type your table number.",
      "One round: read (7 min), discussion within and across tables (15 min), recommend (3 min), outcome (1 min).",
      "Your table recommends, and your boss decides. One spokesperson tells the TA your recommendation. The big screen shows whether it was adopted or overruled.",
      "The game opens when the unlock word appears on the big screen.",
      "You may share what you know, or not. Sharing is never punished, but it can have consequences.",
      "Your TA plays every table's boss, plus the insurer and the federal government. Their decisions are announced, not negotiated."
    ]
  },

  /* ---------------- Tables ---------------- */
  tables: [
    {
      n: 1, name: "Philips Respironics", label: "The manufacturer", color: "#2F5D8A",
      intro: "You work on the DreamStation product team at Philips Respironics, the U.S. sleep and respiratory business of Royal Philips. You recommend. The executives and the board, played by the TA, decide.",
      interest: "Sell more machines and keep them on the market.",
      dilemma: "The longer a problem stays quiet, the higher the eventual cost."
    },
    {
      n: 2, name: "Twin Lakes Sleep Specialists", label: "The physicians", color: "#3E7C59",
      intro: "You are staff physicians at a local sleep clinic. You diagnose sleep apnea and prescribe CPAP. You recommend. The clinic's managing partners, played by the TA, set clinic policy.",
      interest: "Make treatment work. Patients have to actually wear the machine, and insurance pays only if they do. You also rely on good referral relationships and want to avoid liability.",
      dilemma: "You need a machine patients will wear, but you have no way to judge whether the machine itself is safe."
    },
    {
      n: 3, name: "North Star Sleep Apnea Circle", label: "The patients", color: "#9A4A3A",
      intro: "You are volunteer organizers of a local support group for people with sleep apnea, and CPAP users yourselves. You recommend. The Circle's board, played by the TA, decides. The board relies on sponsorship from device makers (fictional).",
      interest: "Get a machine that keeps you alive and lets you sleep.",
      dilemma: "You need it to stay healthy, and you are afraid it might be making you sick."
    },
    {
      n: 4, name: "CDRH Staff", label: "The reviewers", color: "#4B5563",
      intro: "You are ordinary reviewers at the FDA's Center for Devices and Radiological Health. You read submissions and adverse event reports. You recommend. Your leadership, played by the TA, sets your workload and has the final say.",
      interest: "Get your work done and do the right thing.",
      dilemma: "The work never ends, your bosses decide what counts as urgent, and you are not sure whose side they are on."
    },
    {
      n: 5, name: "University of Twin Lakes Medical School", label: "The researchers", color: "#5B4B8A",
      intro: "You are junior researchers in the sleep lab of the local medical school. You recommend. The department chair and the dean's office, played by the TA, decide what the lab studies and says in public. The school receives research money from device makers (fictional).",
      interest: "Find out what is true.",
      dilemma: "You cannot get the data, and you keep wondering whether you are seeing things."
    },
    {
      n: 6, name: "Lakeside Home Medical", label: "The equipment supplier", color: "#7A5C1E",
      intro: "You are sales and service staff at a local medical equipment supplier. Patients rent and buy CPAP machines from you, and you download their usage data for insurers. The store also sells ozone CPAP cleaners (fictional). You recommend. The owner, played by the TA, decides.",
      interest: "Sell and rent machines and supplies. You only get paid if patients meet the insurer's usage rule.",
      dilemma: "You need good relations with the doctors who refer patients, and you are, in effect, Philips' local outsourcing."
    }
  ],

  /* ---------------- Acts ---------------- */
  acts: [
    {
      key: "game", n: 1, title: "The Black Specks",
      rules: [{"h": "Medicare's usage rule", "t": "Medicare keeps paying for a CPAP machine only if the patient uses it at least 4 hours a night on 70 percent of nights during 30 days within the first 90 days."}, {"h": "FDA reporting rule", "t": "Device makers must report deaths, serious injuries and malfunctions to the FDA within 30 days. Doctors, patients and suppliers may report, but they do not have to."}],
      shared: [{"h": "How we got here", "p": [{"t": "In sleep apnea, the airway collapses again and again during sleep. The treatment is CPAP: a machine that pushes air through a mask all night. About 8 million Americans use one.", "tag": "H", "src": ["S16"]}, {"t": "Older machines were loud, and Medicare stops paying if a patient does not use the machine enough (rule on the big screen). So Philips Respironics lined its new DreamStation with sound-absorbing foam. Nobody tested the foam for long-term breathing safety. The machine was quiet, patients wore it, and everyone was pleased."}]}, {"h": "Now", "p": [{"t": "Years later, patients find small black particles in their masks and tubing. Some report headaches, coughs and sore throats, and ask: could this cause cancer?", "tag": "H", "src": ["S14"]}, {"t": "No one can confirm it. The particles might be foam or dust, the symptoms might have other causes, and stopping treatment carries its own risks."}, {"t": "Everyone in this room helped put this machine in patients' bedrooms, and everyone has a reason to wait."}, {"t": "Your task: recommend to your boss how to respond to a problem no one can confirm.", "strong": true}]}],
      cards: {
        1: {
          films: [{"t": "Bayer, Johnson & Johnson and Intuitive Surgical declined to be interviewed. When the film came out, Bayer answered with a \"fact check\" (worksheet Q6).", "src": ["F3", "F9"]}, {"t": "A week before the release, Bayer announced it would stop selling Essure, citing declining sales.", "src": ["F10"]}],
          past: {"t": "Your team shipped the foam without a long-term inhalation test, because a two-year study would have handed the market to a rival. Sales and bonuses followed."},
          facts: [{"t": "Your internal tests show the foam can break down into particles, faster with ozone cleaners, heat and humidity.", "means": "The problem may be real, and partly caused by how patients clean their machines."}, {"t": "Two internal hazard evaluations rated the risk \"unacceptable.\" Another called harm \"possible but improbable.\"", "means": "Your own experts disagree. You can point to either.", "tag": "H", "src": ["S12", "S21"]}],
          pulls: {"act": ["Patients: millions of them breathe through this foam every night.", "Yourselves: if it comes out later, your names are on the emails."], "hold": ["The company: a recall would cost billions, and the executives do not want to hear the word.", "Patients, too: a recall leaves millions with no machine at all."]},
          hide: [{"t": "You hold far more foam complaints than you have reported to the FDA.", "why": "Late reports could bring penalties.", "tag": "H", "src": ["S8", "S10"]}],
          blame: {"you": ["Everyone: you chose the foam and skipped the test."], "them": ["The FDA cleared it.", "Patients used ozone cleaners you never approved, and suppliers sold them."]},
          source: {"t": "Your foam supplier, in a 2016 email: it \"would not recommend use of polyester foam in such an environment.\"", "src": ["S6"]},
          question: "Complaints about black particles are piling up, and your own tests show the foam can break down. What do you recommend to the executives?",
          options: ["A. Announce there is no proof of harm, and point to ozone cleaners", "B. Swap the foam during routine servicing, with no announcement", "C. File every overdue complaint with the FDA now"]
        },
        2: {
          films: [{"t": "Dr. Stephen Tower, an orthopedic surgeon, chose a metal-on-metal hip for himself. He blames its cobalt for tremors and a mental breakdown, and now warns other doctors.", "src": ["F11", "F2"]}, {"t": "Tower says medicine has strong incentives to promote new devices over older ones that work. The film reports that device companies paid doctors $2 billion in 2016.", "src": ["F2", "F3"]}, {"t": "One reviewer's summary of the film: not even doctors know how devices are regulated.", "src": ["F12"]}],
          past: {"t": "Your clinic made DreamStation its default without seeing a safety study. Patients wore it, and the clinic's numbers improved."},
          facts: [{"t": "Patients show you tubing with black specks, and report headaches, coughs and sore throats.", "means": "Something is coming out of the machine, but these symptoms have many causes."}, {"t": "Untreated sleep apnea raises the risk of heart disease, stroke and accidents.", "means": "Telling patients to stop is not safe either."}],
          pulls: {"act": ["Your patients: they trust you, and they are breathing whatever comes off the foam.", "Your license: you prescribed it, and \"I did not know\" is a weak defense."], "hold": ["Your patients again: untreated apnea is dangerous, and there are no spare machines.", "Your clinic: admitting doubt invites lawsuits, and the partners want one safe message."]},
          hide: [{"t": "That you recommended this machine without ever seeing safety data.", "why": "Patients may hold you responsible."}],
          blame: {"you": ["Patients: you told them this machine was safe."], "them": ["Philips said it was safe, the FDA cleared it, and the researchers praised it."]},
          source: {"t": "Philips' recall notice told patients not to stop or change prescribed therapy without consulting their physicians.", "src": ["S13"]},
          question: "A patient puts tubing with black specks on your desk and asks: do I use this tonight? What advice do you recommend the clinic give every patient?",
          options: ["A. Tell patients to keep using it: untreated apnea is the bigger risk", "B. Tell patients to stop tonight, until the particles are tested", "C. Lay out both risks and let each patient choose"]
        },
        3: {
          films: [{"t": "Angie Firmalino started a Facebook group. The \"E-Sisters\" grew to tens of thousands and pressed officials, doctors and the FDA.", "src": ["F6"]}, {"t": "These women chose Essure because their doctors recommended it as quick and surgery-free. Then they lobbied Congress for years to get it off the market.", "src": ["F1", "F14"]}],
          past: {"t": "The Circle petitioned Philips for a quieter machine, and Philips quoted the petition in its marketing. Many members also bought ozone cleaners."},
          facts: [{"t": "More than twenty members have sent photos of black particles, and many report headaches and coughs.", "means": "This is a pattern, not bad luck, although it is not proof.", "tag": "F"}, {"t": "If members stop using their machines, their sleep apnea goes untreated.", "means": "There is no safe option, only a choice between risks."}],
          pulls: {"act": ["Your members: they are the ones breathing it.", "Other patients: nobody else is collecting these stories."], "hold": ["Your members again: without a machine they cannot sleep, drive or work safely.", "The Circle: its board depends on sponsors and fears being sued for bad advice."]},
          hide: [{"t": "That many members used ozone cleaners.", "why": "The company could blame them instead of the foam."}],
          blame: {"you": ["Philips: your members used ozone cleaners.", "Doctors: you demanded this machine."], "them": ["Everyone who told you it was safe: Philips, your doctors, the FDA."]},
          source: {"t": "Complaints sent to Philips described \"black particles\" or \"dirt and dust\" inside machines.", "src": ["S14"]},
          question: "Twenty members have photos of black particles, and no one can say what they are. What advice do you recommend the board send to members?",
          options: ["A. Tell members to keep using the machines until there is proof", "B. Tell members to stop, or dig out their old loud machines", "C. File FDA reports as a group and hire a lawyer"]
        },
        4: {
          films: [{"t": "Former FDA commissioner David Kessler says the adverse event reporting system is badly underused because it is voluntary.", "src": ["F7"]}, {"t": "The film shows former FDA officials hired by companies they once regulated, and an FDA manager who moved the da Vinci robot onto the easier 510(k) path.", "src": ["F13", "F2"]}],
          past: {"t": "Your office signed off the foam as a minor change, in one day, without seeing a test. It counted toward the quarter's target."},
          facts: [{"t": "Your database holds very few foam reports. In the real case, Philips filed only 30 between 2011 and April 2021.", "means": "The database only shows what companies choose to send.", "tag": "H", "src": ["S9"]}, {"t": "A few early reports mentioned \"contamination,\" and nobody followed up.", "means": "The warning signs were already in your files.", "tag": "H", "src": ["S10"]}],
          pulls: {"act": ["The public: you are the only people paid to check.", "Yourselves: the warning signs were already in your files."], "hold": ["Your director: met privately with Philips, told you to let the company handle it, and is rumored to have an industry job offer.", "Your careers: an investigation takes months that nobody will give you."]},
          hide: [{"t": "That your office cleared the foam without asking for a test.", "why": "It would show the agency missed it from the start."}],
          blame: {"you": ["Patients and doctors: they trusted the word \"cleared.\""], "them": ["Philips controls the data and reported almost nothing.", "Leadership set your targets."]},
          source: {"t": "Device makers must report within 30 days, but late reports are common, and the FDA has accepted them years later.", "src": ["S10"]},
          question: "A handful of reports mention \"contamination.\" Your director has said to let the company handle it. What do you recommend?",
          options: ["A. Open a formal investigation and inspect the plant", "B. Issue a public safety warning now", "C. Send Philips a letter asking for information"]
        },
        5: {
          films: [{"t": "Diana Zuckerman of the National Center for Health Research says the approval process for the riskiest devices is not good enough. Bayer's statement attacked her as a paid litigation expert.", "src": ["F4", "F9"]}, {"t": "Dr. Rita Redberg, editor of JAMA Internal Medicine, explains how the 510(k) path let metal-on-metal hips onto the market.", "src": ["F2", "F4"]}],
          past: {"t": "Your lab praised the quiet machine in the local paper, and Philips reprinted the quote in a brochure. The school takes research money from device makers."},
          facts: [{"t": "Early analysis: the particles look like broken-down polyurethane foam.", "means": "The foam is the likely source."}, {"t": "Philips refused to share its test reports, and your sample is small and not peer-reviewed.", "means": "Publishing now could be wrong. Waiting could leave patients exposed."}],
          pulls: {"act": ["Patients: yours is the only independent evidence anyone has.", "Your integrity: your name is already on the product."], "hold": ["Your career: twelve machines is a small sample, and being wrong in public is costly.", "Your university: it fears a lawsuit and values its funders."]},
          hide: [{"t": "How small your sample is.", "why": "The company would use it to dismiss you."}],
          blame: {"you": ["Doctors and patients: they trusted your endorsement."], "them": ["Philips will not share its data.", "Nobody would fund a study of a device the FDA had cleared."]},
          source: {"t": "A Philips engineer, in a 2018 email unsealed in court: \"The material sheds and is pulled into the ventilator air path.\"", "src": ["S7"]},
          question: "Your lab says the particles are degraded foam. Your sample is twelve machines, and Philips will not share its data. What do you recommend to the chair?",
          options: ["A. Publish the result now as a preliminary finding", "B. Give the lab report to the patients' group", "C. Send it confidentially to the FDA and keep testing"]
        },
        6: {
          films: [{"t": "The film has no distributor, but it has salesmanship. On training for the da Vinci robot, one speaker says that if surgeons needed nine weeks of it, nobody would buy the machine.", "src": ["F2"]}, {"t": "Patients in the film found insurers covered Essure far more easily than its removal. The money flowed toward putting devices in.", "src": ["F8"]}],
          past: {"t": "Philips gave Lakeside free data on which doctors prescribe CPAP, and you used it to sell DreamStation.", "tag": "H", "src": ["S5"], "note": "Adapted. In 2022 Respironics paid $24 million to settle these allegations, without admitting wrongdoing."},
          facts: [{"t": "Machines with black specks keep coming back to your counter, all the same model.", "means": "You may be the first to see the whole pattern."}, {"t": "Philips has stopped shipping, but says you may keep selling the stock you have.", "means": "Stop and you eat the loss. Keep selling and you may sell a faulty machine.", "tag": "H", "src": ["S11"]}],
          pulls: {"act": ["Your customers: you hand them the machine and look them in the eye.", "Yourselves: you saw the specks before anyone else did."], "hold": ["The store: 200 unsold machines, and a contract that forbids criticizing the product.", "Your sideline: you also sell the ozone cleaners Philips is starting to blame."]},
          hide: [{"t": "That you saw specks long before anyone complained.", "why": "It could make you look complicit."}],
          blame: {"you": ["Patients: you sold them the machine and the cleaner.", "Philips: your cleaners damaged our foam."], "them": ["Philips told you to keep selling.", "Doctors wrote the prescriptions."]},
          source: {"t": "In April 2021 Philips stopped shipping the machines from its factories but approved continued sales of distributors' inventory.", "src": ["S11"]},
          question: "Speckled machines keep coming back, and Philips says Lakeside may keep selling. What do you recommend the owner do with the 200 machines in the warehouse?",
          options: ["A. Stop selling, and call every patient and doctor", "B. Report the specks to Philips only, and sell the stock", "C. Pull the stock quietly and say nothing"]
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
        rule: "The FDA classifies the recall as Class I, its most serious type.",
        close: "To this day, how many people the foam harmed has not been settled."
      }
    }
  ],


  /* Debrief reflections: reflections[table][recommendation], 0 = A, 1 = B, 2 = C */
  reflections: {
    1: ["Your team shipped the foam untested. Years later the complaint files filled with black specks, and you wrote the line the company used: no proof of harm, blame the ozone cleaners. Nobody had proof because nobody had run the test.", "Your team shipped the foam untested. When it began to crumble, you wanted to swap it out quietly during servicing. The executives refused, because a swap would have to be explained to the FDA. The foam stayed in every machine.", "Your team shipped the foam untested. When the complaints piled up, you wanted to send every one of them to the FDA. Legal said that would force a recall. The reports stayed in the files your product had filled."],
    2: ["Your clinic made DreamStation its default without seeing a safety study. Then a patient put speckled tubing on your desk, and you said to keep using it. The recall letter reached your patients months later, with your advice still in their charts.", "Your clinic made DreamStation its default, and patients finally wore their machines. When the specks appeared, you wanted them off it that night. The partners pointed out there was no FDA warning and nothing to replace it with. Your patients kept breathing through the machine the clinic chose.", "Your clinic made DreamStation its default. When the specks appeared, you wanted to give patients both risks and let them choose. The partners wanted one message, the manufacturer's. The clinic that picked the machine for its patients also picked their answer."],
    3: ["The Circle petitioned for the quiet machine, and Philips printed the petition in its marketing. When black particles turned up in the masks, you told members to keep going until someone had proof. Nobody was looking for any.", "The Circle petitioned for the quiet machine, and Philips used the petition to sell it. When the particles appeared, you wanted members to stop. The board would not risk a member falling asleep at the wheel. The advice that went out was three words: ask your doctor.", "The Circle petitioned for the quiet machine, and Philips quoted it in its marketing. Years later you filed twenty reports with the FDA about the same machine, nearly as many as Philips filed in a decade. Both documents carry your group's name."],
    4: ["Your office signed off the foam as a minor change in one day. Years later the word \"contamination\" kept turning up in reports, and you asked to inspect the plant. The director sent the request back unsigned. The file your office closed stayed closed.", "Your office signed off the foam without seeing a test. When the contamination reports came, you drafted a public warning, and the director asked what exactly the risk was. You could not say. Nobody at the agency had ever asked for the data.", "Your office signed off the foam on the company's word. When reports of contamination arrived, you sent the company a letter, and sixty days later it said it was looking into things. The file was marked handled. Philips had answered both of the agency's questions itself."],
    5: ["Your lab gave a reporter a warm quote, and Philips reprinted it in a brochure. Years later you found degraded foam in twelve machines. University counsel saw a lawsuit and shelved the paper. The public has read your praise. It has not read your data.", "Your lab praised the quiet machine, and the quote went into a Philips brochure. When you found degraded foam, you wanted to hand the report to the patients. The dean's office kept it in the building. Patients still have the brochure.", "Your lab praised the quiet machine on the record. When you found degraded foam, you sent the result to the FDA in confidence, where it was filed with the other contamination reports. Your endorsement is public. Your evidence is in a cabinet."],
    6: ["Lakeside worked Philips' list of prescribers, and referrals climbed. Then the machines started coming back with black specks. You wanted to stop selling and call every customer. The owner counted 200 machines in the warehouse and a contract with Philips. Lakeside kept selling to the doctors on that list.", "Lakeside worked Philips' list, and DreamStation became most of its business. When the specks appeared, you told Philips and nobody else, and Philips said to keep selling. The last machines left the shelf weeks before the recall. This is what real distributors did.", "Lakeside worked Philips' list and sold the machine hard. When the specks appeared, you wanted to pull the stock without a fuss. The owner asked why sellable machines were sitting in the warehouse. They went back on the shelf, next to the ozone cleaners."]
  },

  /* ---------------- Debrief (all historical) ---------------- */
  debrief: [
    { y: "2021", t: "The FDA inspects Philips' plant. Its report records that Philips had corresponded with its foam supplier about breakdown since 2015, and that a keyword search of complaints since 2008 turned up at least 222,000 possibly related complaints with no formal investigation.", src: ["S8"] },
    { y: "2022", t: "The FDA orders Philips to notify patients, because many still did not know about the recall.", src: ["S17"] },
    { y: "2023", t: "Philips answers with its own testing: it says the machines are unlikely to cause appreciable harm. Compare Bayer's \"fact check\" of The Bleeding Edge (worksheet Q6). The FDA says Philips' testing has not been adequate to fully evaluate the risks.", src: ["S15", "S22"] },
    { y: "2024", t: "A federal court enters a consent decree that bars Philips from selling new CPAP machines in the U.S. until it meets conditions. The same month, Philips agrees to pay $1.1 billion to settle personal injury claims, without admitting fault. Its stock rises more than 35 percent.", src: ["S18", "S19"] },
    { y: "2026", t: "Philips reaches an agreement in principle with the Justice Department to pay 288 million euros (about $322 million) to resolve criminal and civil investigations.", src: ["S20"] }
  ],
};
