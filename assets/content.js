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
    { id: "choose", name: "Choose", minutes: 2 },
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
      "Pick a spokesperson to announce your table's final choice."
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
      "Each table plays one side. Open the entry page and type your table number.",
      "The game has two acts, 15 minutes each: read (5 min), discussion within and across tables (7 min), choose (2 min), outcome (1 min).",
      "To choose, your table picks one spokesperson, who tells the TA your choice. The outcome appears on the big screen.",
      "Each act opens when its unlock word appears on the big screen.",
      "You may share what you know, or not. Sharing is never punished, but it can have consequences.",
      "Your TA plays the insurer, the federal government and the leadership of the FDA and CDRH. Their rules are announced, not negotiated."
    ]
  },

  /* ---------------- Tables ---------------- */
  tables: [
    {
      n: 1, name: "Philips Respironics", label: "The manufacturer", color: "#2F5D8A",
      intro: "You are the U.S. sleep and respiratory business of Royal Philips, a global company. DreamStation is your flagship sleep apnea machine.",
      interest: "Sell more machines and keep them on the market.",
      dilemma: "The longer a problem stays quiet, the higher the eventual cost."
    },
    {
      n: 2, name: "Twin Lakes Sleep Specialists", label: "The physicians", color: "#3E7C59",
      intro: "You are a local group of sleep medicine doctors. You diagnose sleep apnea and prescribe CPAP.",
      interest: "Make treatment work. Patients have to actually wear the machine, and insurance pays only if they do. You also rely on good referral relationships and want to avoid liability.",
      dilemma: "You need a machine patients will wear, but you have no way to judge whether the machine itself is safe."
    },
    {
      n: 3, name: "North Star Sleep Apnea Circle", label: "The patients", color: "#9A4A3A",
      intro: "You are a local support and advocacy group for people with sleep apnea.",
      interest: "Get a machine that keeps you alive and lets you sleep.",
      dilemma: "You need it to stay healthy, and you are afraid it might be making you sick."
    },
    {
      n: 4, name: "CDRH Staff", label: "The reviewers", color: "#4B5563",
      intro: "You are ordinary reviewers at the FDA's Center for Devices and Radiological Health. You read submissions and adverse event reports. You are not leadership: your bosses, played by the TA, set your workload and have the final say.",
      interest: "Get your work done and do the right thing.",
      dilemma: "The work never ends, your bosses decide what counts as urgent, and you are not sure whose side they are on."
    },
    {
      n: 5, name: "University of Twin Lakes Medical School", label: "The researchers", color: "#5B4B8A",
      intro: "You are sleep and pulmonary researchers at the local medical school.",
      interest: "Find out what is true.",
      dilemma: "You cannot get the data, and you keep wondering whether you are seeing things."
    },
    {
      n: 6, name: "Lakeside Home Medical", label: "The equipment supplier", color: "#7A5C1E",
      intro: "You are a local medical equipment supplier. Patients rent and buy their CPAP machines and supplies from you, and you download their usage data for insurers. You also sell CPAP cleaning devices, including ozone cleaners (fictional).",
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
          source: {"t": "From your own launch announcement: the machine is described as \"quiet, small and light.\"", "src": ["S1"]},
          question: "The foam cuts the noise, but no one has tested what it does over years in a warm, humid machine. What do you take to the board?",
          options: ["A. Launch this fall with the foam, without a long-term test", "B. Delay the launch two years for a long-term inhalation study", "C. Redesign with a costlier sound barrier and raise the price $150"]
        },
        2: {
          film: { t: "Women like Angie Firmalino got Essure because their doctors encouraged it. The film reports that device companies paid doctors $2 billion in 2016.", src: ["F3"] },
          facts: [{"t": "Noise and mask discomfort are among the top reasons your patients quit.", "means": "A quieter machine keeps more patients on treatment. That is a health outcome, not a convenience."}, {"t": "The new model's foam has not been tested for long-term breathing safety.", "means": "If you recommend it, you vouch for something no one has checked."}],
          weigh: "Patients quitting treatment today, against an unknown risk later.",
          hide: [{"t": "That you have not seen any safety data.", "why": "It could make your recommendation look careless."}, {"t": "How many of your patients fail the 90-day rule.", "why": "It reflects badly on your clinic."}],
          help: ["The company knows which tests it has and has not run.", "Suppliers know how many hours your patients actually use their machines."],
          source: {"t": "Medicare's 90-day usage rule, and the study showing only about half of patients meet it.", "src": ["S3", "S4"]},
          question: "About half of your patients fail the 90-day rule, mostly over noise. The Philips sales rep is in your office. What do you say?",
          options: ["A. Promise to prescribe DreamStation to every new patient", "B. Prescribe it only after Philips sends inhalation safety data", "C. Switch new patients to another brand until the foam is tested"]
        },
        3: {
          film: { t: "Women chose Essure because it promised a quick procedure without surgery, and their doctors recommended it.", src: ["F1", "F3"] },
          facts: [{"t": "In a survey of your members, noise is the top complaint.", "means": "Members want quiet, and your voice carries weight.", "tag": "F"}, {"t": "Most members say they would pay more for a quieter machine.", "means": "The company can charge more for quiet, and you may pay it.", "tag": "F"}],
          weigh: "A machine you can sleep with, against a risk no one has measured.",
          hide: [{"t": "That some members use their machines less than the rule requires.", "why": "They could lose coverage."}],
          help: ["The company knows what is in the new machine.", "Researchers know how many hours a night the machine must be worn to work."],
          source: {"t": "Medicare's 90-day usage rule.", "src": ["S3"]},
          question: "The quiet machine is what your members asked for, and its foam is untested. What does the Circle tell Philips and the doctors?",
          options: ["A. Petition Philips to ship the quiet machine now", "B. Refuse to endorse it until Philips publishes the foam's materials and test results", "C. Advise members to keep their old, loud machines for now"]
        },
        4: {
          film: { t: "An FDA manager moved the da Vinci robot from the PMA route to the easier 510(k) route. All vaginal mesh was cleared through 510(k) without human studies.", src: ["F2", "F4"] },
          facts: [{"t": "The new model changes an internal material.", "means": "That usually calls for new testing, but the company can argue the change is minor."}, {"t": "Device makers' user fees fund nearly half of your center's budget, in exchange for review-time goals.", "means": "Speed is part of the deal. A slow review is a missed target.", "tag": "H", "src": ["S23"]}, {"t": "Leadership wants the backlog cleared this quarter, with no new staff.", "means": "Asking for more data is allowed, but it is the slowest thing you can do.", "tag": "F"}],
          weigh: "Trusting the company so the queue moves, against asking for data that slows everything down.",
          hide: [{"t": "That you think leadership is rushing you.", "why": "Going over your bosses' heads can cost you your career. CDRH scientists who complained to Congress in 2008 asked to stay anonymous.", "tag": "H", "src": ["S24"]}, {"t": "Confidential company information.", "why": "You are not allowed to share it."}],
          help: ["The company knows exactly what changed.", "Your leadership, played by the TA, decides on time and staff."],
          source: {"t": "Device makers are required by law to report malfunctions, injuries and deaths to the FDA within 30 days. Patients and others may report voluntarily.", "src": ["S10"]},
          question: "Philips describes the foam as a minor change to a cleared device. Leadership wants the backlog gone this quarter. What do you write on the file?",
          options: ["A. Sign off: minor change, no new submission needed", "B. Hold the file and request the foam's test data", "C. Recommend a new 510(k) with long-term testing"]
        },
        5: {
          film: { t: "Dr. Rita Redberg, editor of JAMA Internal Medicine, explains how the 510(k) route let metal-on-metal hips onto the market.", src: ["F2", "F4"] },
          facts: [{"t": "Medicare's usage rule may cut off some patients who would still benefit from CPAP.", "means": "Helping patients wear the machine matters as much as the machine.", "tag": "H", "src": ["S4"]}, {"t": "There is almost no toxicology literature on this foam in the airway.", "means": "A lack of evidence is not evidence of safety.", "tag": "F"}],
          weigh: "Backing a fix that keeps patients on treatment, against a study that would delay it.",
          hide: [{"t": "That you once applied for a Philips research grant.", "why": "It is a conflict of interest you must disclose.", "tag": "F"}, {"t": "Your unpublished findings.", "why": "Early results are not conclusions."}],
          help: ["Suppliers have nightly usage data.", "Patients know why people give up."],
          source: {"t": "Medicare's 90-day usage rule, and the study showing only about half of patients meet it.", "src": ["S3", "S4"]},
          question: "A reporter asks what you think of the new quiet CPAP machine. Half of patients quit the loud ones. What do you say on the record?",
          options: ["A. Endorse it: quieter machines keep patients on treatment", "B. Decline to comment and apply for funding for an inhalation study", "C. Say on the record that the foam has never been tested long term"]
        },
        6: {
          film: { t: "The film has no distributor. The closest match is the sales push behind da Vinci: surgeons said the robot took far longer to master than they expected.", src: ["F2"] },
          facts: [{"t": "About one in three rented machines comes back within 90 days, mostly over noise.", "means": "Every return is lost income. A quieter machine keeps you paid.", "tag": "F"}, {"t": "You download patients' real nightly usage from their machines.", "means": "No one else knows as well who meets the 90-day rule."}, {"t": "Philips gives you physician prescribing data for free, so you can market to doctors. The doctors do not know.", "means": "It helps you sell, and ties you to Philips.", "tag": "H", "src": ["S5"], "note": "Adapted. In 2022 Respironics paid $24 million to settle these allegations, without admitting wrongdoing."}],
          weigh: "Your income depends on patients staying on the machine, and on Philips.",
          hide: [{"t": "The prescribing data.", "why": "It could be treated as an illegal kickback."}, {"t": "Individual patients' usage data.", "why": "It is personal. You can share overall patterns."}],
          help: ["The company knows the wholesale price.", "Doctors know which brand they will recommend."],
          source: {"t": "The DreamStation brochure pitches the machine to suppliers as good for long-term patient use and good for business efficiency.", "src": ["S2"]},
          question: "One in three rentals comes back, and Philips has handed you a list of which doctors prescribe CPAP. What do you do with it?",
          options: ["A. Use the list: pitch DreamStation to every high-volume doctor", "B. Return the list and tell doctors Philips was sharing their prescribing data", "C. Drop Philips and stock a rival brand"]
        }
      },
      outcome: {
        lead: "What happened: Philips Respironics lined its machines with polyester-based polyurethane foam to cut the noise. In October 2015 it launched DreamStation, marketed as quiet, small and light.",
        lines: {
          1: ["The board approves in one meeting. DreamStation ships on schedule, and the foam's safety file holds short-term tests only.", "The board says no: a two-year study would hand the market to your main rival. The foam goes in untested.", "The board says no: suppliers rent machines out at a fixed Medicare rate and will not pay $150 more. The cheap foam stays."],
          2: ["Twin Lakes makes DreamStation its default. Within a year more of its patients pass the 90-day rule, and no one at the clinic has seen a safety study.", "Philips sends a one-page summary: short-term tests passed, nothing on long-term use. With patients failing the 90-day rule every week, the clinic prescribes it anyway.", "Lakeside, the only supplier in town, stocks DreamStation and is slow to order anything else. Patients who cannot wait take what is on the shelf."],
          3: ["Philips quotes the petition in its marketing. Members upgrade, more of them pass the 90-day rule, and nobody asks what the foam is made of.", "Philips replies that the materials are proprietary and the device is FDA-cleared. Members tired of the noise buy it without the Circle's endorsement.", "Members who stay on loud machines wear them less. Several fail the 90-day rule, lose coverage, and requalify on a DreamStation."],
          4: ["The file closes in a day and counts toward the quarter's target. No one at the agency has seen a test of the foam.", "Philips sends short-term results that meet the standard. No rule requires a long-term test, so you sign, and your supervisor asks why it took six weeks.", "Philips appeals over your head, arguing the change is minor. Leadership agrees with the company and reassigns the file. The machine goes on sale."],
          5: ["Your quote runs in the paper, then in a Philips brochure. When questions come later, your name is already on the product.", "The grant panel calls the study low priority, because the device is already FDA-cleared. The only other funder is Philips. The study never starts.", "The paper runs your warning on page 12. Philips answers that the device is FDA-cleared, and with no data you have nothing to add."],
          6: ["Your reps work the list. Referrals climb, returns fall, and Lakeside now depends on a gift it cannot disclose.", "Doctors shrug: they assumed someone had the data. Rival suppliers keep their lists and take your referrals. Within months Lakeside asks Philips for the list back.", "Your biggest prescribers write DreamStation on their orders, and patients ask for it by name. After two slow quarters, Lakeside restocks Philips."]
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
          source: {"t": "Your foam supplier, in a 2016 email: it \"would not recommend use of polyester foam in such an environment.\"", "src": ["S6"]},
          question: "Complaints about black particles are piling up, and your own tests show the foam can break down. What do you do this month?",
          options: ["A. Say there is no proof of harm and point to ozone cleaners", "B. Swap the foam during routine servicing, with no announcement", "C. File every overdue complaint with the FDA now"]
        },
        2: {
          film: { t: "The film shows doctors who were often as uninformed as their patients.", src: ["F5"] },
          facts: [{"t": "Patients show you tubing with black specks, and report headaches, coughs and sore throats.", "means": "Something is coming out of the machine, but these symptoms have many causes."}, {"t": "Untreated sleep apnea raises the risk of heart disease, stroke and accidents.", "means": "Telling patients to stop is not safe either."}],
          weigh: "A machine that might be harmful, against no treatment, which is known to be harmful.",
          hide: [{"t": "That you recommended this machine.", "why": "Patients may hold you responsible."}],
          help: ["Researchers are analyzing the specks.", "The company has test results it has not shared."],
          source: {"t": "Philips' recall notice told patients not to stop or change prescribed therapy without consulting their physicians.", "src": ["S13"]},
          question: "A patient puts tubing with black specks on your desk and asks: do I use this tonight? No one has toxicity data. What do you say?",
          options: ["A. Keep using it: untreated apnea is the bigger risk", "B. Stop tonight, until someone tests the particles", "C. Lay out both risks and let the patient choose"]
        },
        3: {
          film: { t: "Angie Firmalino started a Facebook group. The \"E-Sisters\" grew to tens of thousands and pressed officials, doctors and the FDA.", src: ["F6"] },
          facts: [{"t": "More than twenty members have sent photos of black particles, and many report headaches and coughs.", "means": "This is a pattern, not bad luck, although it is not proof.", "tag": "F"}, {"t": "If members stop using their machines, their sleep apnea goes untreated.", "means": "There is no safe option, only a choice between risks."}],
          weigh: "A machine that might be toxic, against a worse machine or no treatment.",
          hide: [{"t": "That many members used ozone cleaners.", "why": "The company could blame them instead of the foam."}],
          help: ["Researchers can tell whether the particles are toxic.", "The FDA knows how many reports it has."],
          source: {"t": "Complaints sent to Philips described \"black particles\" or \"dirt and dust\" inside machines.", "src": ["S14"]},
          question: "Twenty members have photos of black particles, and no one can say what they are. What does the Circle advise tonight?",
          options: ["A. Keep using the machines until there is proof", "B. Stop using them, or dig out the old loud ones", "C. File FDA reports as a group and hire a lawyer"]
        },
        4: {
          film: { t: "Former FDA commissioner David Kessler says the adverse event reporting system is badly underused because it is voluntary.", src: ["F7"] },
          facts: [{"t": "Your database holds very few foam reports. In the real case, Philips filed only 30 between 2011 and April 2021.", "means": "The database only shows what companies choose to send.", "tag": "H", "src": ["S9"]}, {"t": "A few early reports mentioned \"contamination,\" and nobody followed up.", "means": "The warning signs were already in your files.", "tag": "H", "src": ["S10"]}, {"t": "Your director met privately with Philips, then told you to \"let the company handle it.\" Rumor says the director has an industry job offer.", "means": "You only know the instruction, and the rumor.", "tag": "F"}, {"t": "In 2009 the FDA admitted political pressure shaped its clearance of a knee implant over its reviewers' objections.", "means": "Bosses overruling reviewers is on the record.", "tag": "H", "src": ["S25"]}],
          weigh: "Opening an investigation that takes months, against waiting while patients keep using the machines.",
          hide: [{"t": "What you suspect about your director.", "why": "You have no proof, and accusing your boss could end your career."}],
          help: ["Suppliers know which models the particles show up in.", "Your leadership, played by the TA, can act, but you may not like the answer."],
          source: {"t": "Device makers must report within 30 days, but late reports are common, and the FDA has accepted them years later.", "src": ["S10"]},
          question: "A handful of reports mention \"contamination.\" Your director has told you to let the company handle it. What do you do?",
          options: ["A. Open a formal investigation and request a plant inspection", "B. Draft a public safety warning now", "C. Do as told: send Philips a letter asking for information"]
        },
        5: {
          film: { t: "Diana Zuckerman of the National Center for Health Research says the approval process for the riskiest devices is not good enough. Bayer's statement attacked her as a paid litigation expert.", src: ["F4", "F9"] },
          facts: [{"t": "Early analysis: the particles look like broken-down polyurethane foam.", "means": "The foam is the likely source."}, {"t": "Philips refused to share its test reports, and your sample is small and not peer-reviewed.", "means": "Publishing now could be wrong. Waiting could leave patients exposed."}],
          weigh: "Going public with partial data, against waiting for proof.",
          hide: [{"t": "How small your sample is.", "why": "The company would use it to dismiss you."}],
          help: ["Patients have particle samples and photos.", "The FDA knows how many reports it has."],
          source: {"t": "A Philips engineer, in a 2018 email unsealed in court: \"The material sheds and is pulled into the ventilator air path.\"", "src": ["S7"]},
          question: "Your lab says the particles are degraded foam. Your sample is twelve machines, and Philips will not share its data. What do you do with the result?",
          options: ["A. Publish it now as a preliminary finding", "B. Give the lab report to the patients' group", "C. Send it confidentially to the FDA and keep testing"]
        },
        6: {
          film: { t: "Again, no distributor. But patients in the film found insurers covered Essure far more easily than its removal. The money flowed toward putting devices in, not taking them out.", src: ["F8"] },
          facts: [{"t": "Machines with black specks keep coming back to your counter, all the same model. You first saw specks long before anyone complained.", "means": "You may be the first to see the whole pattern."}, {"t": "Philips has stopped shipping, but says you may keep selling the stock you have.", "means": "Stop and you eat the loss. Keep selling and you may sell a faulty machine.", "tag": "H", "src": ["S11"]}],
          weigh: "Your business, against telling patients what you have seen.",
          hide: [{"t": "That you saw specks early.", "why": "It could make you look complicit."}, {"t": "That you sell ozone cleaners.", "why": "If ozone is part of the cause, you could be pulled in."}],
          help: ["The company will have to explain the cause.", "Patients know what they plan to do."],
          source: {"t": "In April 2021 Philips stopped shipping the machines from its factories but approved continued sales of distributors' inventory.", "src": ["S11"]},
          question: "Speckled machines keep coming back, and Philips says you may keep selling. What do you do with the 200 machines in your warehouse?",
          options: ["A. Stop selling, and call every patient and doctor", "B. Report it to Philips only, and sell the stock", "C. Pull the stock quietly and say nothing"]
        }
      },
      outcome: {
        lead: "What happened: in April 2021 Philips stopped shipping the machines from its factories. On June 14, 2021, it recalled millions of them. It said the foam could break down, and that unapproved cleaning methods such as ozone, and heat and humidity, might make it worse.",
        lines: {
          1: ["Philips' statement says its machines meet all standards and points to ozone cleaners. Doctors repeat it to patients. The complaints keep arriving and stay in your files.", "Machines that come in for service leave with new foam and no explanation. Millions that never come in keep the old foam, and no patient is told.", "Your lawyers stop the filing: thousands of late reports at once would force a recall, so a recall plan must come first. The reports wait. In the real case, Philips filed 30 in ten years."],
          2: ["Patients keep the machines on. Months later the recall letter arrives, and they ask why their doctor told them to breathe through it.", "Patients stop. Replacement machines are back-ordered, so some go months untreated, and a few never restart.", "Patients hear two risks and no numbers. Most keep using the machine, because the alternative is no sleep. Some later ask why you did not just tell them."],
          3: ["Members keep the machines on for months more, particles and all. There is still no proof either way.", "Some members go without, and feel it at work and behind the wheel. Others go back to loud machines they could never sleep with.", "Twenty reports reach the FDA in one week. In the real case, Philips filed 30 in ten years. A lawyer starts collecting members' machines as evidence."],
          4: ["The request needs your director's signature. It sits on the desk for two months, and the inspection is scheduled for next year.", "The draft goes up for clearance. Leadership asks what exactly the risk is, and without the company's data you cannot say. The warning is never issued.", "Philips answers in 60 days: it is looking into the matter. Your director marks the file as handled."],
          5: ["The preprint makes the news. Philips answers within a day: twelve machines, no peer review, no proof of harm. Your dean gets a phone call.", "North Star posts the report beside members' photos. It is shared thousands of times, and Philips dismisses it as social media, not science.", "The FDA thanks you and logs the report. It joins the \"contamination\" files waiting for follow-up, and no patient hears of it."],
          6: ["Lakeside makes the calls and eats the cost of 200 machines. A Philips lawyer writes that your contract forbids disparaging the product.", "Philips thanks you and confirms you may keep selling. The last machines leave your shelves weeks before the recall. In the real case, Philips approved exactly that.", "The 200 machines sit in the warehouse as a loss. The patients you already supplied keep breathing through theirs, and no one tells them."]
        },
        rule: "The FDA classifies the recall as Class I, its most serious type.",
        close: "To this day, how many people the foam harmed has not been settled."
      }
    }
  ],


  /* Debrief reflections: reflections[table][Act I choice][Act II choice], 0 = A, 1 = B, 2 = C */
  reflections: {
    1: [
      ["Launched fast, then attacked the critics. This is close to what really happened.", "Launched fast, then fixed it quietly. A quiet fix leaves no record and no warning for the machines you never touched.", "Launched fast, then came clean. Late honesty is still late: the machines were already in millions of bedrooms."],
      ["Wanted tests before launch, then attacked the people who found the problem. Which one was the real you?", "Wanted tests, then hid the fix. Caution in private, silence in public.", "Asked for testing and reported the problem. The board overruled you anyway, and the outcome barely moved. That is the point."],
      ["Ready to pay for a better material, not ready to admit the cheap one failed.", "Tried the expensive fix up front and a quiet one later. Neither reached the patients.", "The most responsible record in the room. The board still shipped the foam."]
    ],
    2: [
      ["Backed the quiet machine and kept patients on it. Your adherence numbers looked great.", "Backed the machine, then pulled patients off it. Some never went back to treatment.", "Backed the machine, then handed the hardest call to patients who knew less than you."],
      ["Asked for data, got a one-page summary, and kept prescribing. A summary is not data.", "Skeptical from the start and willing to stop. But then who was treating their sleep apnea?", "Asked for data, never got it, and passed the uncertainty on to patients."],
      ["Tried to avoid the machine, then told patients to keep using it. The market chose for you.", "Tried to avoid it, then told patients to stop. Consistent, and it still did not protect them.", "Tried another brand, then left it to patients. Every exit you tried kept closing."]
    ],
    3: [
      ["You asked for a quiet machine and kept trusting it. That is what most real patients did.", "You asked for it, then gave it up. The cost of quitting fell on you, not on the company.", "You pushed for it, then organized against it. Your reports are the paper trail this story runs on."],
      ["You asked for the material list, were refused, and kept using the machine. What else could you do?", "You asked the right question early and walked away later. Being right did not come with a better machine.", "You asked early and organized late. The closest thing to oversight in this room came from you."],
      ["You put up with the noise, lost coverage, switched, and kept using it. The insurance rule made your choice.", "You put up with the noise, then gave up the quiet machine too. Back where you started, minus your coverage.", "You never trusted it and organized when it failed. The insurance rule still pushed most of your members onto it."]
    ],
    4: [
      ["Waved it through, then investigated once it was too late. Months of inquiry, millions of machines.", "Waved it through, then tried to warn the public without data. The warning stalled because the agency had nothing to say.", "Trusted the company twice. When you ask the company, the company sets the timeline."],
      ["Asked for data, then investigated. The best record available to you, and it still took months.", "Asked for data, then tried to warn the public. Without the company's numbers, the warning had no content.", "Asked for data, then asked again. Polite requests were your strongest tool, and they are not very strong."],
      ["Demanded a full review, lost the argument over whether the change was minor, then investigated. Right twice, and late twice.", "Demanded a review, then a public warning. Both times the company set the terms.", "Demanded a full review, then went back to asking the company. When the company decides what counts as a change, review is optional."]
    ],
    5: [
      ["Praised the machine, then published the warning. Credible both times, and attacked the second time.", "Praised the machine, then handed your findings to the patients. Their posts reached more people than a paper would have.", "Praised it in public, warned about it in private. The private warning went into the same queue."],
      ["Asked for an inhalation study, never got one, then published anyway. The closest thing to science in this story.", "Proposed a study, then gave your data to the patients. The science traveled through a support group because nowhere else would take it.", "Proposed a study, then told the FDA quietly. Careful, correct, and invisible."],
      ["Warned early that the foam was untested, then published. Right both times, and ignored the first time.", "Warned early, then armed the patients with your data. The company called it unscientific both times.", "Warned in public, then went quiet and wrote to the FDA. Your loudest moment came before you had any evidence."]
    ],
    6: [
      ["Sold it hard, then blew the whistle and took the loss. Late, but you were the only counter that spoke.", "Sold it hard, then sold the last of it before the recall. That is the real distributors' story.", "Sold it hard, then quietly stopped selling. You protected new customers, not the ones already breathing through the foam."],
      ["Gave up the prescribing data, signed back on, then spoke up. The market pulled you back in, and you still got out.", "Gave up the data, signed back on, then cleared your shelves. Your one principled move cost you money and changed nothing.", "Gave up the data, then stopped selling without a word. Clean hands, and patients still unwarned."],
      ["Tried to leave, came back, then warned patients. The prescribers kept you in, and your conscience got you out.", "Tried to leave, came back, then sold off your stock. The market won twice.", "Tried another brand, came back, then stopped selling without telling anyone. Nobody asked you, and you did not offer."]
    ]
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
