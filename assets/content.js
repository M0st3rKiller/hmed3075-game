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
    S21: { t: "RAPS: FDA inspection turns up more problems for Philips", u: "https://www.raps.org/resource/fda-inspection-turns-up-more-problems-for-philips.html" }
  },

  /* ---------------- Warm-up (host only) ---------------- */
  warmup: {
    questions: [
      "What did The Bleeding Edge argue is the biggest problem with the medical device market?",
      "When a device goes wrong after it reaches the market, who finds out first? Who has to say something?"
    ],
    statement:
      "This game is adapted from a real case. Philips Respironics and DreamStation are real names. The local people and organizations in the game are fictional. Anything marked Historical comes from the public record. Everything else was written for this discussion. The debrief at the end is entirely real.",
    rules: [
      "Each table plays one side. Open the entry page and type your table number.",
      "The game has two acts, 15 minutes each: read (5 min), discussion within and across tables (7 min), choose (2 min), outcome (1 min).",
      "To choose, your table picks one spokesperson, who tells the TA your choice. The outcome appears on the big screen.",
      "Each act opens when its unlock word appears on the big screen.",
      "You may share what you know, or not. Sharing is never punished, but it can have consequences.",
      "Your TA plays the insurer and the federal government. Their rules are announced, not negotiated."
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
      n: 4, name: "CDRH Staff", label: "The regulator", color: "#4B5563",
      intro: "You are frontline staff at the FDA's Center for Devices and Radiological Health. You are not a decision-maker. You process reviews and read adverse event reports.",
      interest: "Get your work done and do the right thing.",
      dilemma: "The work never ends, and you have less power than people think."
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
          h: "What happened",
          p: [
            { t: "People with sleep apnea stop breathing again and again while they sleep, because the airway collapses. They wake up exhausted, and over years the condition raises the risk of heart disease." },
            { t: "The treatment is CPAP: a mask worn at night, connected to a machine that pushes air into the airway to hold it open. About 8 million Americans use these machines.", tag: "H", src: ["S16"] },
            { t: "Philips Respironics launches a new machine, DreamStation. Its launch announcement calls it quiet, small and light, and says patients who use its companion app use their therapy 22 percent more.", tag: "H", src: ["S1"] },
            { t: "The product brochure pitches it to equipment suppliers as a way to keep patients on therapy longer and make the supplier's business run more efficiently.", tag: "H", src: ["S2"] },
            { t: "Everyone gains something. Patients sleep. Doctors' treatment works. Suppliers have business. Philips makes money." }
          ]
        },
        {
          h: "The problem",
          p: [
            { t: "The machine is too loud." },
            { t: "CPAP only works if patients wear it every night, and insurance pays on the same logic. Medicare keeps paying for the machine and supplies only if a patient uses it at least 4 hours a night on 70 percent of nights during 30 days within the first 90 days. Patients who fall short must start over with a new sleep study.", tag: "H", src: ["S3"] },
            { t: "In one large study, only about half of patients met that rule in the first 90 days.", tag: "H", src: ["S4"] },
            { t: "A loud machine means patients stop wearing it. Then treatment fails, insurance stops paying, suppliers lose income, and Philips loses sales." },
            { t: "Engineers propose a fix: line the inside of the machine with sound-abatement foam. It is cheap, easy to work with, and very effective. But it would sit next to the air patients breathe all night, inside a machine that is warm and humid, and no one has tested it long term." },
            { t: "Your task: decide, together, what to do about the noise.", strong: true }
          ]
        }
      ],
      cards: {
        1: {
          know: [
            { t: "With the foam installed, the machine is much quieter in your own measurements." },
            { t: "You give Lakeside Home Medical physician prescribing data for free, so they can market to doctors. The doctors do not know.", tag: "H", src: ["S5"], note: "Adapted. In 2022 Respironics paid about $24 million to settle federal allegations that this was an illegal kickback, without admitting wrongdoing." }
          ],
          concerns: [
            { t: "No long-term inhalation testing has been done. Saying so would delay the launch and upset shareholders." },
            { t: "If the prescribing data becomes known, it could be treated as a kickback." }
          ],
          need: [
            { t: "How much patients really care about noise.", go: 3 },
            { t: "How many patients are returning rented machines.", go: 6 }
          ],
          source: { t: "From your own launch announcement: the machine is described as \"quiet, small and light.\"", src: ["S1"] },
          question: "The foam's long-term effects have not been tested. How will you get the doctors and the patients' group to back this design?",
          options: ["A. Use the foam and launch now", "B. Run long-term tests first, then launch", "C. Use a more expensive material and raise the price"]
        },
        2: {
          know: [
            { t: "The main reasons your patients give up are noise and discomfort." },
            { t: "Which brand you plan to recommend to your patients." }
          ],
          concerns: [
            { t: "Individual patient records are private. You can describe overall patterns, but you cannot hand records to the company or the supplier." }
          ],
          need: [
            { t: "How quiet the new machine really is.", go: 1 },
            { t: "How many hours your patients actually use their machines. The supplier downloads this data.", go: 6 }
          ],
          source: { t: "Medicare's 90-day usage rule, and the study showing only about half of patients meet it.", src: ["S3", "S4"] },
          question: "Your patients cannot get through the 90-day rule. Whose problem is that, and what will you ask Philips for?",
          options: ["A. Support adding the foam", "B. Ask to see safety data first", "C. Recommend a different brand"]
        },
        3: {
          know: [
            { t: "A survey of your members: noise is the top complaint.", tag: "F" },
            { t: "How much more members would pay for a quieter machine.", tag: "F" }
          ],
          concerns: [
            { t: "Some members are afraid of losing insurance coverage and will not admit they use their machines less than required. Their health is their own business." }
          ],
          need: [
            { t: "Whether the new machine will cost more.", go: 1 },
            { t: "How many hours a night the machine has to be worn to work.", go: 5 }
          ],
          source: { t: "Medicare's 90-day usage rule.", src: ["S3"] },
          question: "Would you accept an unknown risk in exchange for a quiet machine? Put your conditions to the doctors and the company.",
          options: ["A. Push for a quiet machine as soon as possible", "B. Demand the material list and test results", "C. Put up with the noise"]
        },
        4: {
          know: [
            { t: "What a review normally looks at." },
            { t: "There have been very few adverse event reports on the older models." }
          ],
          concerns: [
            { t: "Company information under review has to stay confidential." },
            { t: "Your queue is overflowing and your office is short-staffed." }
          ],
          need: [
            { t: "What exactly changed in the design.", go: 1 },
            { t: "Whether there is any toxicology literature on this material.", go: 5 }
          ],
          source: { t: "Device makers are required by law to report malfunctions, injuries and deaths to the FDA within 30 days. Patients and others may report voluntarily.", src: ["S10"] },
          question: "The design has changed. Should it be reviewed again? Your queue is already months behind.",
          options: ["A. Accept the company's description", "B. Ask for test data", "C. Put it in the queue for later"]
        },
        5: {
          know: [
            { t: "CPAP works when it is worn at least 4 hours a night. That is also the threshold Medicare uses.", tag: "H", src: ["S3"] },
            { t: "There is very little toxicology literature on this material in the airway.", tag: "F" }
          ],
          concerns: [
            { t: "You once applied for a research grant from Philips and must disclose it as a conflict of interest.", tag: "F" },
            { t: "Unpublished findings are not conclusions." }
          ],
          need: [
            { t: "How many hours patients actually use their machines.", go: 6 },
            { t: "Why patients give up.", go: 3 }
          ],
          source: { t: "Medicare's 90-day usage rule, and the study showing only about half of patients meet it.", src: ["S3", "S4"] },
          question: "Your research shows CPAP works, but only if patients wear it. Which fix will you back?",
          options: ["A. Publicly support the quieter machine", "B. Propose an inhalation study first", "C. Stay neutral"]
        },
        6: {
          know: [
            { t: "How many patients are returning rented machines, and why." },
            { t: "Patients' real nightly usage, downloaded from their machines." },
            { t: "Philips gives you physician prescribing data for free, to help you market to doctors. The doctors do not know.", tag: "H", src: ["S5"], note: "Adapted. In 2022 Respironics paid about $24 million to settle federal allegations that this was an illegal kickback, without admitting wrongdoing." }
          ],
          concerns: [
            { t: "Patients' usage data is personal information." },
            { t: "You have a contract with Philips, and you depend on doctors for referrals." }
          ],
          need: [
            { t: "The new machine's wholesale price.", go: 1 },
            { t: "Which brand the doctors plan to recommend.", go: 2 }
          ],
          source: { t: "The DreamStation brochure pitches the machine to suppliers as good for long-term patient use and good for business efficiency.", src: ["S2"] },
          question: "Patients are returning machines and your income is falling. What will you do with the prescribing data Philips gave you?",
          options: ["A. Push the new machine hard", "B. Wait and see", "C. Switch to another brand"]
        }
      },
      outcome: {
        lead: "What happened: Philips Respironics lined its machines with polyester-based polyurethane foam to cut the noise. In October 2015 it launched DreamStation, marketed as quiet, small and light.",
        lines: {
          1: ["Approved. DreamStation ships on schedule with the foam inside.", "The board says no. Long-term testing would delay the launch by years. The foam goes in.", "The board says no. The expensive material would price DreamStation out of the market. The cheap foam stays."],
          2: ["Twin Lakes backs the quiet machine.", "Twin Lakes asks for safety data and gets a one-page summary with no long-term results. They prescribe it anyway. Their patients need a machine they will wear.", "Twin Lakes looks for another brand, but insurers and Lakeside stock DreamStation. Most patients end up on it anyway."],
          3: ["North Star members line up for the quiet machine.", "North Star asks for the material list. Philips calls it proprietary. Members buy the machine anyway.", "Some members keep their loud machines, miss the 90-day rule and lose coverage. They switch."],
          4: ["CDRH accepts the company's description of the change.", "CDRH asks for test data. Short-term data arrive, and the change goes through.", "The file sits in the queue. The machine is already on sale."],
          5: ["The researchers praise quieter machines in the local paper.", "The inhalation study waits for funding that never comes.", "The researchers stay out of it."],
          6: ["Lakeside pushes DreamStation to every prescriber on its list.", "Lakeside waits and watches competitors win the referrals. It signs on.", "Lakeside tries another brand. Its biggest prescribers want DreamStation. It switches back."]
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
          h: "Problem solved",
          p: [
            { t: "Years pass. With the foam inside, DreamStation is quiet. Patients wear it, meet the usage rule, and insurance keeps paying. Doctors' success rates go up, suppliers do steady business, and Philips' stock climbs. Everyone is happy." }
          ]
        },
        {
          h: "Something is wrong",
          p: [
            { t: "Patients start saying there is something inside their machines." },
            { t: "Some find small black particles in their masks and tubing, like dirt or dust.", tag: "H", src: ["S14"] },
            { t: "Some say they get headaches, coughs and sore throats. Posts like these pile up in the support group, and people begin to ask: could this cause cancer?" },
            { t: "No one can confirm it. The particles might be foam, or they might be dust. The symptoms might come from the machine, or from something else." },
            { t: "If the machine is harmful, patients are left with two choices: keep using a machine that might be toxic, or switch to something worse, louder and more expensive, or go without treatment. Untreated sleep apnea carries its own risks." },
            { t: "Your task: decide how to respond to a problem no one can confirm.", strong: true }
          ]
        }
      ],
      cards: {
        1: {
          know: [
            { t: "Partial results from your internal tests." },
            { t: "Ozone cleaners, heat and humidity may speed up foam breakdown." }
          ],
          concerns: [
            { t: "You hold far more foam complaints than you have reported to the FDA. Whether and when to report them is your call.", tag: "H", src: ["S8", "S10"] },
            { t: "Your foam supplier warned years ago that polyester foam does not belong in a warm, humid environment.", tag: "H", src: ["S6"] },
            { t: "Two of your own internal health hazard evaluations rated the risk \"unacceptable.\" Another concluded harm was \"possible but improbable.\" Even your own conclusions disagree.", tag: "H", src: ["S12", "S21"] },
            { t: "Going public could mean a recall." }
          ],
          need: [
            { t: "How many patients use ozone cleaners.", go: 6 },
            { t: "What data the researchers have.", go: 5 }
          ],
          source: { t: "Your foam supplier, in a 2016 email: it \"would not recommend use of polyester foam in such an environment.\"", src: ["S6"] },
          question: "The researchers and the patients' group say something may be wrong. How do you respond?",
          options: ["A. Question their methods and stress there is no proof", "B. Quietly replace the foam during servicing", "C. Report to the FDA"]
        },
        2: {
          know: [
            { t: "A patient showed you tubing with black specks in it." },
            { t: "Overall patterns in your patients' symptoms." }
          ],
          concerns: [
            { t: "You cannot tell whether the symptoms come from the machine. If you raise the alarm, patients may stop treatment, and that carries risk too." }
          ],
          need: [
            { t: "What the specks actually are.", go: 5 },
            { t: "The company's test results.", go: 1 }
          ],
          source: { t: "Philips' recall notice told patients not to stop or change prescribed therapy without consulting their physicians.", src: ["S13"] },
          question: "Patients ask whether they should keep using the machine. You have no toxicity data. What do you tell them?",
          options: ["A. Keep using it", "B. Stop using it", "C. Let each patient decide"]
        },
        3: {
          know: [
            { t: "Photos of black particles from more than twenty members.", tag: "F" },
            { t: "A list of members' symptoms.", tag: "F" }
          ],
          concerns: [
            { t: "Many members used ozone cleaners and are afraid they will be blamed." }
          ],
          need: [
            { t: "Whether the particles are toxic.", go: 5 },
            { t: "How many reports the FDA has received.", go: 4 }
          ],
          source: { t: "Complaints sent to Philips described \"black particles\" or \"dirt and dust\" inside machines.", src: ["S14"] },
          question: "A machine that might be toxic, or a worse machine. Which do you choose?",
          options: ["A. Keep using it", "B. Stop, or switch to a worse machine", "C. Report to the FDA together and prepare to sue"]
        },
        4: {
          know: [
            { t: "Your database holds very few foam-related reports. In the real case, Philips filed only 30 between 2011 and April 2021.", tag: "H", src: ["S9"] },
            { t: "You can ask the company for more information." }
          ],
          concerns: [
            { t: "By long practice, late reports can be filed late, often without a penalty, and a company filing a follow-up may update the date it says it first learned of a problem.", tag: "H", src: ["S10"] },
            { t: "You cannot announce a conclusion on your own. It has to go through process." },
            { t: "A few early reports mentioned \"contamination,\" and nobody followed up.", tag: "H", src: ["S10"] }
          ],
          need: [
            { t: "Which models the particles show up in.", go: 6 },
            { t: "Patients' firsthand accounts.", go: 3 }
          ],
          source: { t: "Device makers must report within 30 days, but late reports are common, and the FDA has accepted them years later.", src: ["S10"] },
          question: "The reports in front of you only say \"contamination.\" How will you decide whether it is the foam?",
          options: ["A. Investigate", "B. Leave it for now. There is no time", "C. Ask the company for more information"]
        },
        5: {
          know: [
            { t: "Early analysis: the particles look like broken-down polyurethane.", tag: "F" },
            { t: "You asked Philips for its test reports and were refused.", tag: "F", note: "In the real case, journalists had to sue the FDA to get records." }
          ],
          concerns: [
            { t: "Your sample is small and not peer-reviewed. Going public could mislead people, and the company will attack it." }
          ],
          need: [
            { t: "Particle samples and photos.", go: 3 },
            { t: "Tubing from patients.", go: 2 },
            { t: "Report counts.", go: 4 }
          ],
          source: { t: "A Philips engineer, in a 2018 email unsealed in court: \"The material sheds and is pulled into the ventilator air path.\"", src: ["S7"] },
          question: "You only have partial data. Do you go public?",
          options: ["A. Publish early results", "B. Keep collecting data", "C. Send it privately to the FDA"]
        },
        6: {
          know: [
            { t: "Machines with black specks keep coming back to your counter, all the same model.", tag: "F" },
            { t: "You saw specks while changing filters long before anyone complained.", tag: "F" },
            { t: "Philips has stopped shipping from its factories, but tells you that you may keep selling the stock you already have.", tag: "H", src: ["S11"] }
          ],
          concerns: [
            { t: "Your customer list is personal information. You cannot hand it to the company." },
            { t: "You sell ozone cleaners in your store, and you could be pulled in.", tag: "F" },
            { t: "Stock you cannot sell is your loss." }
          ],
          need: [
            { t: "How the company will explain the cause.", go: 1 },
            { t: "What patients plan to do.", go: 3 }
          ],
          source: { t: "In April 2021 Philips stopped shipping the machines from its factories but approved continued sales of distributors' inventory.", src: ["S11"] },
          question: "Who do you tell about the specks at your counter? Do you keep selling your stock?",
          options: ["A. Tell patients and doctors, and stop selling", "B. Tell only Philips, and keep selling", "C. Say nothing"]
        }
      },
      outcome: {
        lead: "What happened: in April 2021 Philips stopped shipping the machines from its factories. On June 14, 2021, it recalled millions of them. It said the foam could break down, and that unapproved cleaning methods such as ozone, and heat and humidity, might make it worse.",
        lines: {
          1: ["Philips says there is no evidence its machines are unsafe. The complaints keep coming.", "Philips quietly swaps foam in some of the machines it services. Millions of others are untouched.", "Philips gets ready to file thousands of overdue complaints. Its lawyers say a recall plan has to come first."],
          2: ["Twin Lakes tells patients to keep using their machines.", "Twin Lakes tells patients to stop. Some stop treatment altogether.", "Twin Lakes leaves the choice to patients, who have no data either."],
          3: ["Most North Star members keep using their machines.", "Some members stop, or go back to older, louder machines.", "North Star files a stack of reports with the FDA and calls a lawyer."],
          4: ["CDRH opens an inquiry. It takes months.", "The \"contamination\" reports stay in the queue.", "CDRH asks Philips for more information. The answers come slowly."],
          5: ["The researchers publish early results. Philips says the sample is too small.", "The researchers keep collecting samples.", "The data go to the FDA, into the same queue."],
          6: ["Lakeside tells patients and doctors and stops selling. Philips reminds it of its contract.", "Lakeside tells only Philips and sells its stock before the recall.", "Lakeside says nothing."]
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
      ["Waved it through, then investigated once it was too late. Months of inquiry, millions of machines.", "Waved it through and left the reports in the queue. This is what the real record looks like.", "Trusted the company twice. When you ask the company, the company sets the timeline."],
      ["Asked for data, then investigated. The best record available to you, and it still took months.", "Asked once, then let it sit. One good instinct is not a system.", "Asked for data, then asked again. Polite requests were your strongest tool, and they are not very strong."],
      ["Lost it in the queue, then dug it out later. The queue is the story.", "Queue, then queue. Nobody broke a rule. Nobody stopped anything either.", "Queued it, then asked the company. The paperwork moved. So did the machines."]
    ],
    5: [
      ["Praised the machine, then published the warning. Credible both times, and attacked the second time.", "Praised the machine, then kept collecting. The data piled up while patients kept breathing.", "Praised it in public, warned about it in private. The private warning went into the same queue."],
      ["Asked for an inhalation study, never got one, then published anyway. The closest thing to science in this story.", "Proposed a study, then kept collecting. Careful at every step, and unheard at every step.", "Proposed a study, then told the FDA quietly. Careful, correct, and invisible."],
      ["Neutral first, loud later. Better late than never, but late.", "Neutral in Act I, still collecting data in Act II. So what were the researchers for?", "Neutral in public, then a private note to the FDA. Nobody outside the building ever knew."]
    ],
    6: [
      ["Sold it hard, then blew the whistle and took the loss. Late, but you were the only counter that spoke.", "Sold it hard, then sold the last of it before the recall. That is the real distributors' story.", "Sold it hard and said nothing. Your counter saw the specks first."],
      ["Waited, followed the market, then spoke up. Your silence was short.", "Waited, then told only the company and cleared your shelves. Business as usual.", "Waited, then said nothing. You followed the market all the way down."],
      ["Tried to leave, came back, then warned patients. The prescribers kept you in, and your conscience got you out.", "Tried to leave, came back, then sold off your stock. The market won twice.", "Tried another brand, came back, and kept quiet. Nobody asked you, and you did not offer."]
    ]
  },

  /* ---------------- Debrief (all historical) ---------------- */
  debrief: [
    { y: "2021", t: "The FDA inspects Philips' plant. Its report records that Philips had corresponded with its foam supplier about breakdown since 2015, and that a keyword search of complaints since 2008 turned up at least 222,000 possibly related complaints with no formal investigation.", src: ["S8"] },
    { y: "2022", t: "The FDA orders Philips to notify patients, because many still did not know about the recall.", src: ["S17"] },
    { y: "2023", t: "The FDA says Philips' testing has not been adequate to fully evaluate the risks.", src: ["S15"] },
    { y: "2024", t: "A federal court enters a consent decree that bars Philips from selling new CPAP machines in the U.S. until it meets conditions. The same month, Philips agrees to pay $1.1 billion to settle personal injury claims, without admitting fault. Its stock rises more than 35 percent.", src: ["S18", "S19"] },
    { y: "2026", t: "Philips reaches an agreement in principle with the Justice Department to pay 288 million euros (about $322 million) to resolve criminal and civil investigations.", src: ["S20"] }
  ],
};
