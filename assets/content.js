/* DreamStation: a classroom role-play for HMED 3075.
   All on-screen text lives in this file. Edit here, not in the pages.
   Tags: "H" = historical (from the public record, with a source), "F" = fictional (designed for the game). */

window.GAME = {
  title: "DreamStation",
  subtitle: "A role-play on medical device regulation",

  video: { id: "Vy0r1m20xzo", title: "Philips DreamStation monitoring David's sleep apnea in Australian Outback (Philips Healthcare, 3:33)" },

  /* Unlock words. The host screen shows them, students type them on their table page. */
  unlock: { act1: "NOISE", act2: "FOAM" },

  /* Sub-stages inside each act, in minutes. */
  stages: [
    { id: "read", name: "Read", minutes: 5 },
    { id: "debate", name: "Discussion", minutes: 7 },
    { id: "choose", name: "Recommend", minutes: 2 },
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
      "Ask other tables for the information you need to reach a decision.",
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
    questions: [
      { q: "In your own words, what was The Bleeding Edge about? What is its central argument?", ws: "Worksheet Q1" },
      { q: "What do the devices in the film have in common? What does that pattern reveal about how the system works?", ws: "Worksheet Q3" },
      { q: "What reforms or solutions does the film propose? Is that a step in the right direction?", ws: "Worksheet Q5" }
    ],

    concepts: [
      { term: "510(k) clearance", t: "Clearance by comparison. The company shows its device is \"substantially equivalent\" to one already on the market, called a predicate. Usually no clinical trial. Most moderate-risk devices, CPAP machines included, go this way.", src: ["S26"] },
      { term: "Premarket approval (PMA)", t: "Approval on evidence. For the highest-risk devices, it usually requires clinical data showing the device is safe and effective. Essure went this way." },
      { term: "Adverse event reporting", t: "Once a device is on the market, makers must report deaths, serious injuries and malfunctions to the FDA within 30 days. Doctors and patients may report, but do not have to.", src: ["S10"] },
      { term: "Recall", t: "Usually started by the company. The FDA classifies it. Class I is the most serious: the device could cause serious harm or death.", src: ["S27"] }
    ],
    conceptQs: [
      { t: "Essure went through PMA, the strictest path, and still harmed thousands of women. Where did the system break down?" },
      { t: "FDA recall records list DreamStation under 510(k) K131982, a clearance for an earlier Philips model. What does that tell you about how a \"new\" device reaches the market?", src: ["S28"] }
    ],

    statement:
      "This game is adapted from a real case. Philips Respironics and DreamStation are real names. The local people and organizations in the game are fictional. Anything marked Historical comes from the public record. Everything else was written for this discussion. The debrief at the end is entirely real.",
    rules: [
      "Each table plays the staff of one side, not its decision-makers. Open the entry page and type your table number.",
      "The game has two acts, 15 minutes each: read (5 min), discussion within and across tables (7 min), recommend (2 min), outcome (1 min).",
      "Your table recommends, and your boss decides. One spokesperson tells the TA your recommendation. The big screen shows whether it was adopted or overruled.",
      "Each act opens when its unlock word appears on the big screen.",
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
      key: "act1", n: 1, title: "Launch",
      rules: [
        { h: "Medicare's usage rule", t: "Medicare keeps paying for a CPAP machine only if the patient uses it at least 4 hours a night on 70 percent of nights during 30 days within the first 90 days. Patients who fall short start over with a new sleep study." }
      ],
      shared: [
        {
          "h": "What happened",
          "p": [
            {
              "t": "In sleep apnea, the airway collapses again and again during sleep. Over years it raises the risk of heart disease."
            },
            {
              "t": "The treatment is CPAP: a mask connected to a machine that pushes air to hold the airway open. About 8 million Americans use one.",
              "tag": "H",
              "src": [
                "S16"
              ]
            },
            {
              "t": "Philips Respironics launches DreamStation, advertised as quiet, small and light, and pitched to suppliers as a way to keep patients on therapy longer.",
              "tag": "H",
              "src": [
                "S1",
                "S2"
              ]
            }
          ]
        },
        {
          "h": "The problem",
          "p": [
            {
              "t": "The machine is still too loud. Patients who will not wear it lose insurance coverage under Medicare's rule (on the big screen). Only about half of patients meet it.",
              "tag": "H",
              "src": [
                "S4"
              ]
            },
            {
              "t": "Engineers propose a fix: line the machine with cheap, effective sound-abatement foam. It would sit beside the air patients breathe all night, in a warm, humid machine, and no one has tested it long term."
            },
            {
              "t": "Your task: decide, together, what to do about the noise.",
              "strong": true
            }
          ]
        }
      ],
      cards: {
        1: {
          film: { t: "Bayer marketed Essure as a hassle-free alternative to tying the tubes. In the film, as in your game, the company's pitch is about convenience.", src: ["F1"] },
          facts: [{"t": "The new foam makes the machine much quieter.", "means": "Quiet is your strongest selling point."}, {"t": "No long-term inhalation testing has been done on the foam.", "means": "Testing would delay the launch. Skipping it means no one knows what patients breathe in."}, {"t": "You give Lakeside Home Medical physician prescribing data for free, so they can market to doctors.", "means": "Suppliers sell more of your machines and stay tied to you.", "tag": "H", "src": ["S5"], "note": "Adapted. In 2022 Respironics paid $24 million to settle these allegations, without admitting wrongdoing."}],
          weigh: "Launching now, against testing that could delay it and turn up a problem.",
          hide: [{"t": "That the foam is untested.", "why": "It could delay the launch and worry shareholders."}, {"t": "The prescribing data.", "why": "It could be treated as an illegal kickback."}],
          help: ["Patients know how much the noise bothers them.", "Suppliers know how many rented machines come back, and why."],
          links: ["Doctors and patients may ask you for the foam's safety data. That data exists only if you decide to test.", "A higher price lands on the supplier, who rents machines out at a fixed Medicare rate."],
          source: {"t": "From your own launch announcement: the machine is described as \"quiet, small and light.\"", "src": ["S1"]},
          question: "The foam cuts the noise, but no one has tested what it does over years in a warm, humid machine. What do you recommend to the board?",
          options: ["A. Launch this fall with the foam, without a long-term test", "B. Delay the launch two years for a long-term inhalation study", "C. Redesign with a costlier sound barrier and raise the price $150"]
        },
        2: {
          film: { t: "Women like Angie Firmalino got Essure because their doctors encouraged it. The film reports that device companies paid doctors $2 billion in 2016.", src: ["F3"] },
          facts: [{"t": "Noise and mask discomfort are among the top reasons your patients quit.", "means": "A quieter machine keeps more patients on treatment. That is a health outcome, not a convenience."}, {"t": "The new model's foam has not been tested for long-term breathing safety.", "means": "If you recommend it, you vouch for something no one has checked."}],
          weigh: "Patients quitting treatment today, against an unknown risk later.",
          hide: [{"t": "That you have not seen any safety data.", "why": "It could make your recommendation look careless."}, {"t": "How many of your patients fail the 90-day rule.", "why": "It reflects badly on your clinic."}],
          help: ["The company knows which tests it has and has not run.", "Suppliers know how many hours your patients actually use their machines."],
          links: ["The safety data you might ask for exists only if the company chooses to run the test.", "Whatever you prescribe, the supplier decides what is actually on the shelf."],
          source: {"t": "Medicare's 90-day usage rule, and the study showing only about half of patients meet it.", "src": ["S3", "S4"]},
          question: "About half of your patients fail the 90-day rule, mostly over noise, and the Philips rep wants an answer. What do you recommend to the managing partners?",
          options: ["A. Make DreamStation the clinic's default for new patients", "B. Hold off prescribing it until Philips sends inhalation safety data", "C. Prescribe another brand until the foam is tested"]
        },
        3: {
          film: { t: "Women chose Essure because it promised a quick procedure without surgery, and their doctors recommended it.", src: ["F1", "F3"] },
          facts: [{"t": "In a survey of your members, noise is the top complaint.", "means": "Members want quiet, and your voice carries weight.", "tag": "F"}, {"t": "Most members say they would pay more for a quieter machine.", "means": "The company can charge more for quiet, and you may pay it.", "tag": "F"}],
          weigh: "A machine you can sleep with, against a risk no one has measured.",
          hide: [{"t": "That some members use their machines less than the rule requires.", "why": "They could lose coverage."}],
          help: ["The company knows what is in the new machine.", "Researchers know how many hours a night the machine must be worn to work."],
          links: ["The test results you might demand exist only if the company or the researchers run a study.", "If you endorse the machine, the company and the doctors can quote you."],
          source: {"t": "Medicare's 90-day usage rule.", "src": ["S3"]},
          question: "The quiet machine is what members asked for, and its foam is untested. What position do you recommend to the Circle's board?",
          options: ["A. Petition Philips to ship the quiet machine now", "B. Withhold the Circle's endorsement until Philips publishes the foam's materials and test results", "C. Advise members to keep their old, loud machines for now"]
        },
        4: {
          film: { t: "An FDA manager moved the da Vinci robot from the PMA route to the easier 510(k) route. All vaginal mesh was cleared through 510(k) without human studies.", src: ["F2", "F4"] },
          facts: [{"t": "The new model changes an internal material.", "means": "That usually calls for new testing, but the company can argue the change is minor."}, {"t": "Device makers' user fees fund nearly half of your center's budget, in exchange for review-time goals.", "means": "Speed is part of the deal. A slow review is a missed target.", "tag": "H", "src": ["S23"]}, {"t": "Leadership wants the backlog cleared this quarter, with no new staff.", "means": "Asking for more data is allowed, but it is the slowest thing you can do.", "tag": "F"}],
          weigh: "Trusting the company so the queue moves, against asking for data that slows everything down.",
          hide: [{"t": "That you think leadership is rushing you.", "why": "Going over your bosses' heads can cost you your career. CDRH scientists who complained to Congress in 2008 asked to stay anonymous.", "tag": "H", "src": ["S24"]}, {"t": "Confidential company information.", "why": "You are not allowed to share it."}],
          help: ["The company knows exactly what changed.", "Your leadership, played by the TA, decides on time and staff."],
          links: ["The only data you can ask for is what the company chose to produce.", "Doctors, patients and researchers will treat your clearance as proof the machine is safe."],
          source: {"t": "Device makers are required by law to report malfunctions, injuries and deaths to the FDA within 30 days. Patients and others may report voluntarily.", "src": ["S10"]},
          question: "Philips describes the foam as a minor change to a cleared device. Leadership wants the backlog gone this quarter. What do you recommend on the file?",
          options: ["A. Sign off as a minor change, with no new submission", "B. Hold the file and request the foam's test data", "C. Require a new 510(k) with long-term testing"]
        },
        5: {
          film: { t: "Dr. Rita Redberg, editor of JAMA Internal Medicine, explains how the 510(k) route let metal-on-metal hips onto the market.", src: ["F2", "F4"] },
          facts: [{"t": "Medicare's usage rule may cut off some patients who would still benefit from CPAP.", "means": "Helping patients wear the machine matters as much as the machine.", "tag": "H", "src": ["S4"]}, {"t": "There is almost no toxicology literature on this foam in the airway.", "means": "A lack of evidence is not evidence of safety.", "tag": "F"}],
          weigh: "Backing a fix that keeps patients on treatment, against a study that would delay it.",
          hide: [{"t": "That you once applied for a Philips research grant.", "why": "It is a conflict of interest you must disclose.", "tag": "F"}, {"t": "Your unpublished findings.", "why": "Early results are not conclusions."}],
          help: ["Suppliers have nightly usage data.", "Patients know why people give up."],
          links: ["Doctors and patients who want evidence can get it only from you or from the company.", "If you praise the machine, the company can quote you. A study needs a funder, and the company is one."],
          source: {"t": "Medicare's 90-day usage rule, and the study showing only about half of patients meet it.", "src": ["S3", "S4"]},
          question: "A reporter asks your lab about the new quiet CPAP machine. Interviews go through the department chair. What do you recommend saying?",
          options: ["A. Endorse the machine: quieter means more patients stay on treatment", "B. Decline to comment, and fund an inhalation study first", "C. Say on the record that the foam has never been tested long term"]
        },
        6: {
          film: { t: "The film has no distributor. The closest match is the sales push behind da Vinci: surgeons said the robot took far longer to master than they expected.", src: ["F2"] },
          facts: [{"t": "About one in three rented machines comes back within 90 days, mostly over noise.", "means": "Every return is lost income. A quieter machine keeps you paid.", "tag": "F"}, {"t": "You download patients' real nightly usage from their machines.", "means": "No one else knows as well who meets the 90-day rule."}, {"t": "Philips gives you physician prescribing data for free, so you can market to doctors. The doctors do not know.", "means": "It helps you sell, and ties you to Philips.", "tag": "H", "src": ["S5"], "note": "Adapted. In 2022 Respironics paid $24 million to settle these allegations, without admitting wrongdoing."}],
          weigh: "Your income depends on patients staying on the machine, and on Philips.",
          hide: [{"t": "The prescribing data.", "why": "It could be treated as an illegal kickback."}, {"t": "Individual patients' usage data.", "why": "It is personal. You can share overall patterns."}],
          help: ["The company knows the wholesale price.", "Doctors know which brand they will recommend."],
          links: ["Doctors may prescribe another brand, but patients take home what you stock.", "The prescriber list comes from the company. Using it ties you to them. Returning it exposes them to the doctors."],
          source: {"t": "The DreamStation brochure pitches the machine to suppliers as good for long-term patient use and good for business efficiency.", "src": ["S2"]},
          question: "One in three rentals comes back, and Philips has handed Lakeside a list of which doctors prescribe CPAP. What do you recommend to the owner?",
          options: ["A. Use the list to pitch DreamStation to every high-volume doctor", "B. Return the list and tell doctors Philips shared their prescribing data", "C. Drop Philips and stock a rival brand"]
        }
      },
      outcome: {
        lead: "What happened: Philips Respironics lined its machines with polyester-based polyurethane foam to cut the noise. In October 2015 it launched DreamStation, marketed as quiet, small and light.",
        lines: {
          1: ["Adopted. The board: \"Good. We ship on schedule.\" DreamStation launches with the foam inside, and its safety file holds short-term tests only.", "Overruled. The board: \"Two years is a gift to our rival, and no regulation asks for this test.\" The foam goes in untested.", "Overruled. The board: \"Finance says suppliers rent these out at a fixed Medicare rate. They will not pay $150 more.\" The cheap foam stays."],
          2: ["Adopted. The managing partners: \"Fine. Patients will actually wear it.\" DreamStation becomes the clinic's default, and no one at the clinic has seen a safety study.", "Overruled. The managing partners: \"It is FDA-cleared, and Philips sent a one-page summary. Patients are failing the 90-day rule every week.\" The clinic prescribes it.", "Overruled. The managing partners: \"The only supplier in town stocks DreamStation. We are not making patients wait for special orders.\" The clinic prescribes it."],
          3: ["Adopted. The board: \"This is what members have been asking for.\" The petition goes out, and Philips quotes it in its marketing.", "Overruled. The board: \"We asked. Philips says it is proprietary, and Philips sponsors our annual meeting.\" The Circle endorses the machine.", "Overruled. The board: \"Loud machines are costing members their coverage under the 90-day rule.\" The Circle endorses the quiet one."],
          4: ["Adopted. Your supervisor: \"Good. One more off the backlog.\" The file closes in a day, and no one at the agency has seen a test of the foam.", "Overruled. Your supervisor: \"The company's description is enough for a minor change. Six weeks waiting for data is six weeks off our target. Sign it.\"", "Overruled. Your director, after a call from Philips: \"The change is minor. I am reassigning the file.\" The machine goes on sale."],
          5: ["Adopted. The chair: \"Good press for the department. Go ahead.\" Your quote runs in the paper, then in a Philips brochure.", "Overruled. The chair: \"I am not spending department money on a device the FDA already cleared, and the only outside funder is Philips. Give the reporter a quote.\"", "Overruled. The dean's office: \"Philips funds two labs in your building, and you have no data.\" The warning is cut from the interview."],
          6: ["Adopted. The owner: \"That is what the list is for.\" The reps go out, referrals climb, and Lakeside now depends on a gift it cannot disclose.", "Overruled. The owner: \"Every rival works from a list like this. Give it back and we lose the referrals and Philips' goodwill.\" The list stays in use.", "Overruled. The owner: \"Look at the orders. Our biggest prescribers write DreamStation by name.\" Lakeside keeps Philips."]
        },
        rule: "Medicare's 90-day rule stayed in place. A quiet machine was the one patients could keep wearing."
      }
    },

    {
      key: "act2", n: 2, title: "Fallout",
      rules: [
        { h: "FDA reporting rule", t: "Device makers must report deaths, serious injuries and malfunctions to the FDA within 30 days. Doctors, patients and suppliers may report, but they do not have to." }
      ],
      shared: [
        {
          "h": "Problem solved",
          "p": [
            {
              "t": "Years pass. With the foam inside, DreamStation is quiet. Patients wear it, insurance pays, and Philips' stock climbs."
            }
          ]
        },
        {
          "h": "Something is wrong",
          "p": [
            {
              "t": "Patients find small black particles in their masks and tubing. Some report headaches, coughs and sore throats, and ask: could this cause cancer?",
              "tag": "H",
              "src": [
                "S14"
              ]
            },
            {
              "t": "No one can confirm it. The particles might be foam or dust. The symptoms might have other causes. And stopping treatment carries its own risks."
            },
            {
              "t": "Your task: decide how to respond to a problem no one can confirm.",
              "strong": true
            }
          ]
        }
      ],
      cards: {
        1: {
          film: { t: "Bayer, Johnson & Johnson and Intuitive Surgical declined to be interviewed. The day the film came out, Bayer answered with a \"fact check\" (worksheet Q6).", src: ["F3", "F9"] },
          facts: [{"t": "Your internal tests show the foam can break down into particles, faster with ozone cleaners, heat and humidity.", "means": "The problem may be real, and partly caused by how patients clean their machines."}, {"t": "Two internal hazard evaluations rated the risk \"unacceptable.\" Another called harm \"possible but improbable.\"", "means": "Your own experts disagree. You can point to either.", "tag": "H", "src": ["S12", "S21"]}],
          weigh: "Acting now and risking a recall, against waiting for proof while patients keep using the machines.",
          hide: [{"t": "You hold far more foam complaints than you have reported to the FDA.", "why": "Late reports could bring penalties.", "tag": "H", "src": ["S8", "S10"]}, {"t": "Your foam supplier warned years ago that this foam does not belong in a warm, humid machine.", "why": "It shows you knew.", "tag": "H", "src": ["S6"]}],
          help: ["Suppliers know how many patients use ozone cleaners.", "Researchers know what the particles are made of."],
          links: ["Doctors will repeat your public statement to their patients.", "If you blame ozone cleaners, you blame patients who used them and the supplier who sold them.", "The reviewers see almost nothing unless you report it."],
          source: {"t": "Your foam supplier, in a 2016 email: it \"would not recommend use of polyester foam in such an environment.\"", "src": ["S6"]},
          question: "Complaints about black particles are piling up, and your own tests show the foam can break down. What do you recommend to the executives?",
          options: ["A. Announce there is no proof of harm, and point to ozone cleaners", "B. Swap the foam during routine servicing, with no announcement", "C. File every overdue complaint with the FDA now"]
        },
        2: {
          film: { t: "The film shows doctors who were often as uninformed as their patients.", src: ["F5"] },
          facts: [{"t": "Patients show you tubing with black specks, and report headaches, coughs and sore throats.", "means": "Something is coming out of the machine, but these symptoms have many causes."}, {"t": "Untreated sleep apnea raises the risk of heart disease, stroke and accidents.", "means": "Telling patients to stop is not safe either."}],
          weigh: "A machine that might be harmful, against no treatment, which is known to be harmful.",
          hide: [{"t": "That you recommended this machine.", "why": "Patients may hold you responsible."}],
          help: ["Researchers are analyzing the specks.", "The company has test results it has not shared."],
          links: ["What you tell patients rests on what the company says and what the researchers find.", "If you tell patients to stop, the supplier has to find them another machine."],
          source: {"t": "Philips' recall notice told patients not to stop or change prescribed therapy without consulting their physicians.", "src": ["S13"]},
          question: "A patient puts tubing with black specks on your desk and asks: do I use this tonight? What advice do you recommend the clinic give every patient?",
          options: ["A. Tell patients to keep using it: untreated apnea is the bigger risk", "B. Tell patients to stop tonight, until the particles are tested", "C. Lay out both risks and let each patient choose"]
        },
        3: {
          film: { t: "Angie Firmalino started a Facebook group. The \"E-Sisters\" grew to tens of thousands and pressed officials, doctors and the FDA.", src: ["F6"] },
          facts: [{"t": "More than twenty members have sent photos of black particles, and many report headaches and coughs.", "means": "This is a pattern, not bad luck, although it is not proof.", "tag": "F"}, {"t": "If members stop using their machines, their sleep apnea goes untreated.", "means": "There is no safe option, only a choice between risks."}],
          weigh: "A machine that might be toxic, against a worse machine or no treatment.",
          hide: [{"t": "That many members used ozone cleaners.", "why": "The company could blame them instead of the foam."}],
          help: ["Researchers can tell whether the particles are toxic.", "The FDA knows how many reports it has."],
          links: ["Your photos and machines are the only samples the researchers can get.", "Your reports would land with reviewers who have received almost none from the company."],
          source: {"t": "Complaints sent to Philips described \"black particles\" or \"dirt and dust\" inside machines.", "src": ["S14"]},
          question: "Twenty members have photos of black particles, and no one can say what they are. What advice do you recommend the board send to members?",
          options: ["A. Tell members to keep using the machines until there is proof", "B. Tell members to stop, or dig out their old loud machines", "C. File FDA reports as a group and hire a lawyer"]
        },
        4: {
          film: { t: "Former FDA commissioner David Kessler says the adverse event reporting system is badly underused because it is voluntary.", src: ["F7"] },
          facts: [{"t": "Your database holds very few foam reports. In the real case, Philips filed only 30 between 2011 and April 2021.", "means": "The database only shows what companies choose to send.", "tag": "H", "src": ["S9"]}, {"t": "A few early reports mentioned \"contamination,\" and nobody followed up.", "means": "The warning signs were already in your files.", "tag": "H", "src": ["S10"]}, {"t": "Your director met privately with Philips, then told you to \"let the company handle it.\" Rumor says the director has an industry job offer.", "means": "You only know the instruction, and the rumor.", "tag": "F"}, {"t": "In 2009 the FDA admitted political pressure shaped its clearance of a knee implant over its reviewers' objections.", "means": "Bosses overruling reviewers is on the record.", "tag": "H", "src": ["S25"]}],
          weigh: "Opening an investigation that takes months, against waiting while patients keep using the machines.",
          hide: [{"t": "What you suspect about your director.", "why": "You have no proof, and accusing your boss could end your career."}],
          help: ["Suppliers know which models the particles show up in.", "Your leadership, played by the TA, can act, but you may not like the answer."],
          links: ["Without the company's data, your only evidence is what patients and researchers send you.", "Doctors are waiting for a signal from the FDA before they tell patients anything."],
          source: {"t": "Device makers must report within 30 days, but late reports are common, and the FDA has accepted them years later.", "src": ["S10"]},
          question: "A handful of reports mention \"contamination.\" Your director has said to let the company handle it. What do you recommend?",
          options: ["A. Open a formal investigation and inspect the plant", "B. Issue a public safety warning now", "C. Send Philips a letter asking for information"]
        },
        5: {
          film: { t: "Diana Zuckerman of the National Center for Health Research says the approval process for the riskiest devices is not good enough. Bayer's statement attacked her as a paid litigation expert.", src: ["F4", "F9"] },
          facts: [{"t": "Early analysis: the particles look like broken-down polyurethane foam.", "means": "The foam is the likely source."}, {"t": "Philips refused to share its test reports, and your sample is small and not peer-reviewed.", "means": "Publishing now could be wrong. Waiting could leave patients exposed."}],
          weigh: "Going public with partial data, against waiting for proof.",
          hide: [{"t": "How small your sample is.", "why": "The company would use it to dismiss you."}],
          help: ["Patients have particle samples and photos.", "The FDA knows how many reports it has."],
          links: ["Your lab result is the only independent evidence that doctors, patients and reviewers have.", "Give it to patients and it goes public on their terms. Give it to the FDA and it may sit in a file."],
          source: {"t": "A Philips engineer, in a 2018 email unsealed in court: \"The material sheds and is pulled into the ventilator air path.\"", "src": ["S7"]},
          question: "Your lab says the particles are degraded foam. Your sample is twelve machines, and Philips will not share its data. What do you recommend to the chair?",
          options: ["A. Publish the result now as a preliminary finding", "B. Give the lab report to the patients' group", "C. Send it confidentially to the FDA and keep testing"]
        },
        6: {
          film: { t: "Again, no distributor. But patients in the film found insurers covered Essure far more easily than its removal. The money flowed toward putting devices in, not taking them out.", src: ["F8"] },
          facts: [{"t": "Machines with black specks keep coming back to your counter, all the same model. You first saw specks long before anyone complained.", "means": "You may be the first to see the whole pattern."}, {"t": "Philips has stopped shipping, but says you may keep selling the stock you have.", "means": "Stop and you eat the loss. Keep selling and you may sell a faulty machine.", "tag": "H", "src": ["S11"]}],
          weigh: "Your business, against telling patients what you have seen.",
          hide: [{"t": "That you saw specks early.", "why": "It could make you look complicit."}, {"t": "That you sell ozone cleaners.", "why": "If ozone is part of the cause, you could be pulled in."}],
          help: ["The company will have to explain the cause.", "Patients know what they plan to do."],
          links: ["Every machine you sell now goes to a patient the doctors just sent you.", "If the company blames ozone cleaners, remember who sold them."],
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


  /* Debrief reflections: reflections[table][Act I choice][Act II choice], 0 = A, 1 = B, 2 = C */
  reflections: {
    1: [["You told the board to ship the foam untested, and it took them one meeting to agree. Years later the complaint files filled with black specks, and you wrote the line the company used: no proof of harm, blame the ozone cleaners. Nobody had proof because nobody had run the test.", "You told the board to ship the foam untested, and they did. When it began to crumble, you wanted to swap it out quietly during servicing. The executives refused, because a swap would have to be explained to the FDA. The foam you launched stayed in every machine.", "You told the board to ship the foam untested, and they did. When the complaints piled up, you wanted to send every one of them to the FDA. Legal said that would force a recall. The reports stayed in the files you had helped fill."], ["You asked for two years to test the foam, and the board would not give a rival the time. The machine shipped untested. When the specks appeared, you were the ones who drafted the statement: there is no proof of harm. The proof would have been your study.", "You asked for two years to test the foam and were told no. Years later the foam was crumbling, and you asked to replace it quietly. No again: that would have to be explained to the FDA. You saw the problem before launch and after it, and the machine never changed.", "You asked for a long-term test before launch, and the board would not wait. When the complaints came, you asked to report them all, and legal would not risk a recall. The company made both decisions. You made neither."], ["You wanted a safer sound barrier at $150 more. The board looked at the Medicare rental rate and said no, and the cheap foam went in. When it broke down in patients' bedrooms, you wrote the statement that pointed at their ozone cleaners.", "You wanted a safer part at $150 more and lost to the Medicare rental rate. Later you wanted to swap the cheap foam out during servicing and lost to the fear of explaining it to the FDA. Both fixes cost money. Neither happened.", "You wanted a safer part, and the board chose the cheap foam. You wanted to report every complaint, and legal chose to wait. The machines went out and the reports stayed in. The people who knew the product best were heard the least."]],
    2: [["You made DreamStation the clinic's default without ever seeing a safety study. Adherence went up. Then a patient put speckled tubing on your desk, and you said to keep using it. The recall letter reached your patients months later, with your advice still in their charts.", "You made DreamStation the clinic's default, and patients finally wore their machines. When the specks appeared, you wanted them off it that night. The partners pointed out there was no FDA warning and nothing to replace it with. Your patients kept breathing through the machine you chose.", "You made DreamStation the clinic's default. When the specks appeared, you wanted to give patients both risks and let them choose. The partners wanted one message, the manufacturer's. The clinic that picked the machine for its patients also picked their answer."], ["You wanted to see inhalation data first. The partners had a one-page summary and a waiting room full of patients failing the 90-day rule, so the clinic prescribed. When specks showed up in the tubing, you told patients to keep going, on the strength of that same single page.", "You wanted safety data before prescribing, and the partners settled for one page. You wanted patients off the machine when the specks appeared, and the partners wanted an FDA warning first. You asked the right question twice. The clinic's answer went out under your name.", "You asked for safety data, and the clinic went ahead without it. Years later a patient asked you whether the machine was safe. You wanted to say that nobody knew, and let them decide. The partners sent the manufacturer's answer instead: keep using it."], ["You tried to steer patients to another brand, but the only supplier in town stocked DreamStation, so your patients got it anyway. When the specks appeared, you told them to keep using the machine you had never wanted to prescribe.", "You tried to prescribe another brand and lost to the supplier's shelf. You tried to pull patients off DreamStation and lost to the lack of an FDA warning. You never trusted this machine. Every one of your patients slept beside it.", "You tried to prescribe around DreamStation and could not. When it started shedding specks, you tried at least to tell patients the truth: that it was their call. The clinic sent one message, to keep using it. Your doubts never left the building."]],
    3: [["You petitioned Philips for the quiet machine, and Philips printed your words in its marketing. Members slept at last. When black particles turned up in the masks, you told them to keep going until someone had proof. Nobody was looking for any.", "You petitioned for the quiet machine, and Philips used your petition to sell it. When the particles appeared, you wanted members to stop. The board would not risk a member falling asleep at the wheel. The advice that went out was three words: ask your doctor.", "You petitioned for the quiet machine, and Philips quoted you in its marketing. Years later you filed twenty reports with the FDA about the same machine, nearly as many as Philips filed in a decade. Both documents carry your group's name."], ["You wanted to know what the foam was made of before endorsing it. The board heard the word \"proprietary,\" remembered who sponsors the annual meeting, and endorsed it. When the foam began coming apart in members' masks, you told them to keep using it. You still did not know what it was.", "You asked what the foam was made of, and the board let it drop. You wanted members to stop when the particles appeared, and the board feared the liability. Members were told to ask their doctors, who were asking the company.", "You asked what the foam was made of and never found out. When it started coming apart, you organized: twenty reports to the FDA in a week, and a lawyer collecting machines. The oversight in this story began in a support group."], ["You told members to keep their loud machines, but the board saw them failing the 90-day rule and losing coverage, and endorsed the quiet one. Years later, with particles in the masks, you told members to keep using it. Medicare made the first choice, and habit made the second.", "You wanted members to stay on their loud machines, and later to quit the quiet one. The board said no both times, first over coverage, then over liability. You were wary of this machine from start to finish, and your members used it from start to finish.", "You never wanted the quiet machine, and the board endorsed it anyway, because loud machines were costing members their coverage. When it failed, the board finally agreed with you, and twenty reports went to the FDA in a week. It took black particles to win the argument."]],
    4: [["You signed off the foam as a minor change, and the file closed in a day. Years later the word \"contamination\" kept turning up in reports, and you asked to inspect the plant. The director sent the request back unsigned. The file you closed stayed closed.", "You signed off the foam without seeing a test. When the contamination reports came, you drafted a public warning, and the director asked what exactly the risk was. You could not say. Nobody at the agency had ever asked for the data.", "You signed off the foam on the company's word. When reports of contamination arrived, you sent the company a letter, and sixty days later it said it was looking into things. The file was marked handled. Philips had answered both of the agency's questions itself."], ["You wanted the foam's test data, and your supervisor wanted the backlog gone. You signed. Years later you wanted to inspect the plant, and the director wanted the company to handle it. The questions you were not allowed to ask were still open.", "You wanted test data before signing and were told to sign. Later you wanted to warn the public, and the director asked what the risk was. Without data you could not say. The data was what you had asked for in the first place.", "You wanted the foam's test data, and your supervisor told you to sign instead. When the contamination reports came, you wrote to Philips for information, and the director was pleased. By then you knew which kind of question gets approved."], ["You wanted a new 510(k) for the foam. Philips called your director, and the file went to someone else. Years later you asked to inspect the plant, and that request came back unsigned. Both decisions were made one floor above you.", "You wanted a full review of the foam, and the file was taken off your desk after Philips called. You wanted a public warning, and it was never cleared. You read the case correctly in both acts, and neither time was the decision yours.", "You wanted a new 510(k), and the director reassigned the file after a call from Philips. The next time, you proposed a polite letter to the company, and the director approved at once. An agency teaches its reviewers what to ask for."]],
    5: [["You gave the reporter a warm quote, and Philips reprinted it in a brochure. Years later your lab found degraded foam in twelve machines. University counsel saw a lawsuit and shelved the paper. The public has read your praise. It has not read your data.", "You praised the quiet machine in the paper, and the quote went into a Philips brochure. When your lab found degraded foam, you wanted to hand the report to the patients. The dean's office kept it in the building. Patients still have the brochure.", "You praised the quiet machine on the record. When your lab found degraded foam, you sent the result to the FDA in confidence, where it was filed with the other contamination reports. Your endorsement is public. Your evidence is in a cabinet."], ["You wanted to study the foam before saying anything, and the chair would not pay to test a device the FDA had cleared. You gave the quote. Years later you ran the study anyway, on twelve machines, and university counsel would not let it out.", "You asked for money to test the foam and were told to give the reporter a quote instead. When you finally had lab results, you wanted patients to see them. The dean's office said findings do not leave the university. Twice you had something to say, and twice the university chose silence.", "You asked to test the foam before commenting, and the chair said no. Years later you tested twelve machines anyway and sent the result quietly to the FDA, where it was logged and filed. The study nobody would fund became a document nobody read."], ["You wanted to say on the record that the foam was untested. The dean's office mentioned the two labs Philips pays for, and the line was cut. Years later you had the test results, and counsel shelved the paper. The university stopped you when you had no data, and again when you did.", "You wanted to warn the public that the foam was untested, and the dean's office cut it. You wanted to give patients your lab report, and the dean's office kept it. Philips funds two labs in your building. It never had to say a word.", "You wanted to warn that the foam was untested, and the warning was cut from the interview. When your lab confirmed it, you settled for a confidential note to the FDA, and that was approved. The only version of your finding that survived was the one no patient would see."]],
    6: [["You worked Philips' list of prescribers, and referrals climbed. Then the machines started coming back with black specks. You wanted to stop selling and call every customer. The owner counted 200 machines in the warehouse and a contract with Philips. Lakeside kept selling to the doctors on your list.", "You worked Philips' list, and DreamStation became most of your business. When the specks appeared, you told Philips and nobody else, and Philips said to keep selling. The last machines left the shelf weeks before the recall. This is what real distributors did.", "You worked Philips' list and sold the machine hard. When the specks appeared, you wanted to pull the stock without a fuss. The owner asked why sellable machines were sitting in the warehouse. They went back on the shelf, next to the ozone cleaners."], ["You wanted to hand the prescriber list back and tell the doctors, and the owner would not give up the referrals. Later you wanted to stop selling and warn everyone, and the owner would not give up 200 machines. You tried to come clean twice, and the books said no both times.", "You wanted to return Philips' list and tell the doctors, and the owner kept it. By the time the specks appeared, you had learned how things work: tell Philips only, and sell the stock. The owner agreed at once. The last machines went out weeks before the recall.", "You wanted to give back the list, and the owner kept using it. You wanted to pull the speckled stock quietly, and the owner put it back on the shelf. You never once got Lakeside out of Philips' pocket."], ["You wanted to drop Philips for a rival brand, but your prescribers ordered DreamStation by name, so you sold it. When the machines came back speckled, you wanted to stop and call everyone. The owner would not eat the loss. The same order book overruled you twice.", "You wanted out of Philips before launch, and the owner showed you the orders, so you stayed. When the specks appeared, you told Philips, sold the last 200 machines, and said nothing to patients. You started as the skeptic and finished as the salesman.", "You wanted to drop Philips, and the owner kept it. You wanted to pull the speckled stock off the shelf, and the owner put it back. Both times you tried to step away from the machine without telling anyone why. Nobody outside the store ever knew you had doubts."]]
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
