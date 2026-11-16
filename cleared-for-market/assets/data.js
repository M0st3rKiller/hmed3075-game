/* Content for "Cleared for Market" — an HMED 3075 classroom role-play.
   The device, companies and people in the game are fictional.
   The warm-up and debrief facts refer to real events covered in The Bleeding Edge (2018). */

window.GAME = {
  title: "Cleared for Market",
  subtitle: "A role-play on The Bleeding Edge",

  device: {
    name: "VeloraLift",
    maker: "Halcyon Medical",
    pitch:
      "A nickel-titanium frame wrapped in polypropylene mesh, placed through the vagina to treat pelvic organ prolapse. " +
      "Twenty minutes, outpatient, no abdominal incision. Halcyon calls it \"the end of prolapse surgery as we know it.\"",
    truthTitle: "What VeloraLift actually does (revealed at the end)",
    truth: [
      "At 12 months: chronic pelvic pain in about 4% of patients, mesh erosion in about 2%.",
      "At 3 years: chronic pain in about 14%, erosion in about 9%. Roughly 1 in 8 patients asks to have it removed.",
      "Removal is not simple. The mesh grows into tissue, so removal often means major surgery, sometimes more than one.",
      "A subset of patients reacts to the nickel in the frame. The trial screened for nickel allergy only by asking patients."
    ]
  },

  /* Phases. code = unlock word shown on the big screen. minutes = suggested length. */
  phases: [
    { id: 0, name: "Warm-up", minutes: 10, code: null,
      screen: "Recall the film: two roads to market, what happens after launch, and who pays when it goes wrong." },
    { id: 1, name: "The pathway", minutes: 6, code: "PREDICATE",
      screen: "Halcyon must choose how VeloraLift gets to market. The FDA decides whether to accept that choice." },
    { id: 2, name: "The evidence", minutes: 6, code: "ENDPOINT",
      screen: "The trial data come in. Someone decides what gets published, and the FDA decides what it needs to see." },
    { id: 3, name: "The launch", minutes: 5, code: "LAUNCH",
      screen: "VeloraLift reaches clinics. Physicians decide whether to adopt it and how much training is enough." },
    { id: 4, name: "The signal", minutes: 5, code: "MAUDE",
      screen: "Complaints start to arrive. Who reports them, who counts them, and who goes public?" },
    { id: 5, name: "The reckoning", minutes: 5, code: "RIEGEL",
      screen: "The FDA must act, or not. Patients decide whether to sue. Halcyon issues a public statement." },
    { id: 6, name: "Debrief", minutes: 12, code: null,
      screen: "What happened in our room, and what happened in the real world." }
  ],

  rules: [
    "Each table plays one role. Split the personas on your role page among yourselves.",
    "Pick one spokesperson. When the big screen asks for your move, the spokesperson announces it.",
    "During each phase you may send one or two delegates to other tables. Negotiate, trade information, make promises.",
    "You may share, withhold, or misrepresent your secret information. Real actors did all three.",
    "Do not read other tables' screens. A new phase opens only when the unlock word appears on the big screen."
  ],

  /* ---------------- Roles ---------------- */
  roles: [
    {
      key: "hx7", id: "company", name: "Halcyon Medical", label: "The manufacturer",
      color: "#2F5D8A",
      intro:
        "You are a mid-sized device company. VeloraLift is your only product near launch, and your investors expect revenue within 18 months.",
      personas: [
        { name: "CEO", note: "Answers to investors. Every month of delay costs about $4 million." },
        { name: "VP, Regulatory Affairs", note: "Knows the FDA rules and how much each pathway costs in time." },
        { name: "VP, Sales and Medical Education", note: "Runs physician training and the consultant program." },
        { name: "General Counsel", note: "Thinks about liability, reporting duties, and what you put in writing." }
      ],
      objectives: [
        "Get VeloraLift on the market by the end of Phase 3.",
        "Keep VeloraLift on the market through Phase 5.",
        "Keep the number of adverse events reported to the FDA below what the patients' table can prove."
      ],
      phases: {
        1: {
          brief: [
            "A 510(k) review usually takes about 90 days and does not require a clinical trial if you can show substantial equivalence to a predicate.",
            "A PMA requires clinical evidence of safety and effectiveness. Your estimate: 18 to 24 months and $30 million more.",
            "The broker's table (Keystone Regulatory Partners) can find you a predicate device. They charge a lot, and their founder used to work at CDRH."
          ],
          move: "Announce your pathway: 510(k) with a predicate, or PMA.",
          talk: ["Keystone (broker) for a predicate", "FDA, to test how they will react"]
        },
        2: {
          brief: [
            "You funded a single-arm trial at three university hospitals: 310 women, 12 months of follow-up.",
            "Internal summary: 96% of women who completed 12 months rated the outcome \"good\" or \"excellent.\"",
            "Not in the summary: 22% of enrolled women were lost to follow-up before 12 months. Site notes say several of them had called about pain.",
            "Your contract with the principal investigator gives Halcyon the right to review the manuscript before submission."
          ],
          move: "Decide what you ask the researchers' table to publish, and what you tell the FDA about the dropouts.",
          talk: ["Research table (the PI is on your payroll)", "FDA"]
        },
        3: {
          brief: [
            "Full training (a cadaver lab plus five proctored cases) takes each surgeon about three weeks to complete.",
            "A one-hour webinar would let you sell to many more surgeons this quarter.",
            "Your sales team can offer high-volume surgeons consulting fees of $5,000 to $20,000 a year to teach and speak."
          ],
          move: "Announce your training program (full course or webinar) and whether you offer consulting fees.",
          talk: ["Physicians", "Broker (they recruit speakers)"]
        },
        4: {
          brief: [
            "Your complaint line logged 1,400 calls this year: pain, bleeding, pain during sex, partial erosion.",
            "Federal rules require manufacturers to report deaths and serious injuries that a device may have caused or contributed to.",
            "Your General Counsel notes that many calls can be classified as \"procedure-related\" rather than \"device-related,\" which you may treat as not reportable."
          ],
          move: "Announce your reporting policy: report everything, report only \"device-related\" events, or wait for more data.",
          talk: ["FDA", "Physicians (they also see these patients)"]
        },
        5: {
          brief: [
            "Sales are down. A newspaper is preparing a story. Your lawyers expect lawsuits.",
            "Whatever the FDA does, you will release a public statement today."
          ],
          move: "Write a two-sentence public statement and read it aloud. (Compare it later with Bayer's 2018 statement.)",
          talk: ["FDA", "Patients"]
        }
      }
    },

    {
      key: "dr4", id: "physicians", name: "Twin Lakes Women's Health", label: "The physicians",
      color: "#3E7C59",
      intro:
        "You are a large group practice of gynecologists and urogynecologists. Patients come to you with prolapse every week, and the existing surgeries are long and imperfect.",
      personas: [
        { name: "Dr. Reyes, high-volume urogynecologist", note: "Halcyon has asked her to be a paid trainer and speaker." },
        { name: "Dr. Okafor, community gynecologist", note: "Has never placed transvaginal mesh. Would learn on VeloraLift." },
        { name: "Dr. Lindqvist, department chair", note: "Sits on the hospital committee that approves new devices and their cost." }
      ],
      objectives: [
        "Offer your patients a better option than current surgery.",
        "Avoid being the practice whose patients are harmed.",
        "Keep the trust of your patients and the hospital."
      ],
      phases: {
        1: {
          brief: [
            "Existing prolapse repair through the abdomen takes two to three hours and a hospital stay. Patients ask for something easier.",
            "You know that older vaginal meshes for prolapse caused erosion in some patients. You are not sure whether VeloraLift is different."
          ],
          move: "Tell the room what you would want to see before you use VeloraLift: nothing extra, published data, or a randomized trial.",
          talk: ["Halcyon", "FDA"]
        },
        2: {
          brief: [
            "Dr. Reyes was a site investigator in the trial. She remembers two patients at her site who stopped coming to visits after complaining of pain.",
            "She does not know whether they were counted."
          ],
          move: "If there is an advisory panel, decide whether Dr. Reyes testifies about the missing patients.",
          talk: ["Research table", "FDA"]
        },
        3: {
          brief: [
            "Halcyon offers Dr. Reyes a consulting contract. It is legal, but it will be listed in the federal Open Payments database.",
            "Dr. Okafor could start after a one-hour webinar, or after a three-week proctored course.",
            "The hospital pays about $3,000 per VeloraLift kit."
          ],
          move: "Announce how you adopt VeloraLift (widely, cautiously with a patient registry, or not at all) and whether Dr. Reyes signs.",
          talk: ["Halcyon", "Patients"]
        },
        4: {
          brief: [
            "Your practice has seen 23 VeloraLift patients return with pain or erosion. Three needed removal surgery.",
            "Doctors and hospitals can report problems to the FDA through MedWatch. Doctors are encouraged, not required, to report.",
            "Reporting takes time, and Dr. Reyes worries it will look like an admission."
          ],
          move: "Decide whether your practice files reports with the FDA, and whether you keep implanting.",
          talk: ["FDA", "Patients", "Halcyon"]
        },
        5: {
          brief: [
            "Patients are asking whether the device can be removed and who will pay for it."
          ],
          move: "Tell the room what you will say to the patients who already have VeloraLift.",
          talk: ["Patients"]
        }
      }
    },

    {
      key: "pt9", id: "patients", name: "Patients and advocates", label: "The patients",
      color: "#9A4A3A",
      intro:
        "You are women living with pelvic organ prolapse, and the people who speak for them. You want relief, and you want to be told the truth.",
      personas: [
        { name: "Dana, considering VeloraLift", note: "Prolapse makes her job as a nurse painful. She wants the fastest fix." },
        { name: "Marisol, trial participant", note: "Received VeloraLift in the trial. Developed pain at month 7 and stopped going to visits." },
        { name: "Grace, founder of an online support group", note: "Good at organizing. Has 40 members today." },
        { name: "Attorney for injured patients", note: "Joins the table in Phase 5." }
      ],
      objectives: [
        "Get honest information before you choose a treatment.",
        "Make the harm visible if it happens.",
        "Get removal surgery and compensation paid for, if you need them."
      ],
      phases: {
        1: {
          brief: [
            "Dana's doctor mentions a new no-incision option coming soon. The ads say \"FDA cleared\" or \"FDA approved.\" Dana does not know the difference.",
            "Patients have no formal role in a 510(k) review. A PMA may include a public advisory panel where anyone can speak."
          ],
          move: "Tell the room what you want: faster access, more testing, or a seat at the table.",
          talk: ["FDA", "Physicians"]
        },
        2: {
          brief: [
            "Marisol never told the trial she was in pain. She simply stopped coming. Nobody called her back.",
            "If she speaks, the trial's dropout problem becomes a person, not a percentage."
          ],
          move: "If there is an advisory panel, decide whether Marisol testifies.",
          talk: ["Research table", "FDA"]
        },
        3: {
          brief: [
            "Dana is offered VeloraLift. The consent form lists \"pain\" and \"erosion\" as possible risks but gives no rates."
          ],
          move: "Decide whether Dana gets VeloraLift, and what she asks her doctor first.",
          talk: ["Physicians", "Halcyon"]
        },
        4: {
          brief: [
            "Grace's group now has 2,000 members. Many describe the same pain. Some say their doctors told them it was \"in their head.\"",
            "Anyone can report a problem to the FDA through MedWatch. Very few patients know this.",
            "You can also file a citizen petition asking the FDA to act."
          ],
          move: "Announce your action: organize and file reports, petition the FDA, go to the press, or wait.",
          talk: ["FDA", "Research table", "Physicians"]
        },
        5: {
          brief: [
            "Your attorney explains: if VeloraLift reached the market through 510(k), you can sue Halcyon in state court for design defect or failure to warn.",
            "If it went through PMA, the Supreme Court's decision in Riegel v. Medtronic (2008) blocks most of those claims. You would have to argue that Halcyon broke the FDA's own requirements, for example by not reporting adverse events."
          ],
          move: "Decide whether to sue, and on what grounds.",
          talk: ["Physicians", "Halcyon"]
        }
      }
    },

    {
      key: "cd2", id: "fda", name: "FDA, Center for Devices (CDRH)", label: "The regulator",
      color: "#4B5563",
      intro:
        "You review thousands of device submissions a year with limited staff. Congress, industry and patient groups all watch your review times and your recalls.",
      personas: [
        { name: "Lead reviewer", note: "Has a 90-day review goal for 510(k)s. Behind on the queue." },
        { name: "Branch chief", note: "Under pressure to support innovation and meet user-fee performance goals." },
        { name: "Postmarket analyst", note: "Reads adverse event reports in the MAUDE database. Sees only what gets reported." },
        { name: "Advisory panel chair", note: "Runs a public hearing, but only if the device goes through PMA." }
      ],
      objectives: [
        "Protect patients from unsafe devices.",
        "Do not block a useful device without good reason.",
        "Act on safety signals before the press does."
      ],
      phases: {
        1: {
          brief: [
            "For a 510(k), you only ask whether the new device is substantially equivalent to a legally marketed predicate: same intended use, similar technology, or differences that raise no new questions of safety and effectiveness.",
            "You can find a device \"not substantially equivalent,\" which pushes it toward PMA or De Novo.",
            "Keystone's founder used to be your boss. He has asked for a meeting."
          ],
          move: "Respond to Halcyon's choice: accept the 510(k), accept it but ask for clinical data, or require a PMA.",
          talk: ["Halcyon", "Broker", "Patients"]
        },
        2: {
          brief: [
            "Halcyon's submission reports outcomes for the women who completed 12 months.",
            "Your guidance asks sponsors to explain missing data, but the dropout rate is in an appendix table."
          ],
          move: "Decide: clear/approve now, approve with a required postmarket study, or ask for longer follow-up first.",
          talk: ["Research table", "Physicians", "Patients"]
        },
        3: {
          brief: [
            "Once a device is on the market, you do not regulate how doctors are trained or how many cases they do first.",
            "You can require a postmarket study, but enforcing it is slow."
          ],
          move: "Tell the room one thing you will watch after launch.",
          talk: ["Halcyon", "Physicians"]
        },
        4: {
          brief: [
            "MAUDE shows 180 VeloraLift reports this year. You suspect that is a fraction of the real number.",
            "An inspection could check Halcyon's complaint files. An inspector who finds problems issues a Form 483."
          ],
          move: "Decide whether to inspect Halcyon's complaint handling now.",
          talk: ["Patients", "Research table", "Halcyon"]
        },
        5: {
          brief: [
            "Your options: do nothing yet, add a boxed warning and a patient decision checklist, restrict who can sell it, or order Halcyon to stop selling it.",
            "In the real cases, each of these steps took years."
          ],
          move: "Announce your action.",
          talk: ["Everyone"]
        }
      }
    },

    {
      key: "kb5", id: "broker", name: "Keystone Regulatory Partners", label: "The broker",
      color: "#7A5C1E",
      intro:
        "You are a consulting and lobbying firm. Companies pay you to get devices through the FDA and to shape the rules. Your founder spent 14 years at CDRH.",
      personas: [
        { name: "Founder, former CDRH branch chief", note: "Still has friends at the agency. Knows which arguments reviewers accept." },
        { name: "Predicate researcher", note: "Searches old 510(k) clearances for a device VeloraLift can be compared to." },
        { name: "Government affairs director", note: "Works with the industry trade association and congressional staff." }
      ],
      objectives: [
        "Get your client to market as fast as possible.",
        "Keep your reputation with the FDA.",
        "Shape the rules so future clients have it easier."
      ],
      phases: {
        1: {
          brief: [
            "Predicate option A: DuraMesh hernia patch, cleared in 1997. Same polypropylene, but used in the abdominal wall, not the vagina.",
            "Predicate option B: PelviCradle, cleared in 2006 for prolapse. Very similar. It was voluntarily withdrawn in 2012 after erosion complaints, but it was never formally found unsafe.",
            "Option C: no predicate. Tell Halcyon to go PMA."
          ],
          move: "Announce which predicate you recommend to Halcyon (A, B, or none), and whether you meet with the FDA.",
          talk: ["Halcyon", "FDA"]
        },
        2: {
          brief: [
            "You know which reviewers ask hard questions about missing data and which do not.",
            "You can help Halcyon write the submission so the dropout table is technically disclosed but easy to miss."
          ],
          move: "Decide how you advise Halcyon to present the dropouts.",
          talk: ["Halcyon", "FDA"]
        },
        3: {
          brief: [
            "Halcyon wants 50 physician speakers in the first year. You know how to recruit them."
          ],
          move: "Announce whether you run Halcyon's speaker recruitment.",
          talk: ["Physicians", "Halcyon"]
        },
        4: {
          brief: [
            "The trade association is lobbying Congress to keep the 510(k) program as it is. A wave of VeloraLift complaints would hurt that campaign."
          ],
          move: "Decide what you tell Halcyon about reporting, and what you tell Congress.",
          talk: ["Halcyon", "FDA"]
        },
        5: {
          brief: [
            "If the FDA cracks down, other clients will need you more. If it doesn't, the system you defend survives."
          ],
          move: "Tell the room which reform you would fight hardest against.",
          talk: ["FDA", "Halcyon"]
        }
      }
    },

    {
      key: "jr3", id: "research", name: "Researchers and journal", label: "The researchers",
      color: "#5B4B8A",
      intro:
        "You produce and judge the evidence. One of you ran Halcyon's trial, one studies safety data independently, and one edits a major medical journal.",
      personas: [
        { name: "Principal investigator", note: "University surgeon who ran the trial. Halcyon funds her research program." },
        { name: "Independent epidemiologist", note: "Analyzes MAUDE reports and insurance claims. No industry funding." },
        { name: "Journal editor", note: "Decides what gets published and whether conflicts of interest are disclosed." }
      ],
      objectives: [
        "Publish evidence that holds up.",
        "Keep your funding and your credibility.",
        "Make sure the journal is not the last to know."
      ],
      phases: {
        1: {
          brief: [
            "The PI's lab gets $1.2 million a year from Halcyon.",
            "The editor knows that most device approvals rest on small trials without a control group."
          ],
          move: "Tell the room what kind of study VeloraLift really needs.",
          talk: ["Halcyon", "FDA"]
        },
        2: {
          brief: [
            "The full data: 310 enrolled, 242 completed 12 months (22% lost). 96% of completers satisfied.",
            "The PI's own site notes say at least 11 of the lost women had called about pain.",
            "Halcyon has the contractual right to review your manuscript before submission."
          ],
          move: "Announce what you publish: full data with dropouts, 12-month completers only, or wait for 3-year data.",
          talk: ["Halcyon", "FDA", "Physicians"]
        },
        3: {
          brief: [
            "The editor receives a glowing review article by three Halcyon consultants. The disclosure section says \"none.\""
          ],
          move: "Decide whether the journal publishes it, and with what disclosure.",
          talk: ["Physicians", "Broker"]
        },
        4: {
          brief: [
            "The epidemiologist pulls VeloraLift reports from MAUDE and compares them with insurance claims for removal surgery. Claims show far more removals than reports.",
            "Publishing will take six months unless the editor fast-tracks it."
          ],
          move: "Decide whether to publish the independent analysis now.",
          talk: ["FDA", "Patients"]
        },
        5: {
          brief: [
            "Halcyon may cite your trial in its public statement. You can endorse, stay quiet, or publish a correction."
          ],
          move: "Announce your response to Halcyon's statement.",
          talk: ["Halcyon", "Patients"]
        }
      }
    }
  ],

  /* ---------------- Host decisions (recorded by the TA on the big screen) ---------------- */
  decisions: {
    1: [
      { id: "pathway", who: "Halcyon", label: "Pathway chosen",
        options: [
          { v: "510k_A", t: "510(k), hernia mesh predicate" },
          { v: "510k_B", t: "510(k), PelviCradle predicate" },
          { v: "pma", t: "PMA" } ] },
      { id: "fda1", who: "FDA", label: "FDA response",
        options: [
          { v: "accept", t: "Accept as filed" },
          { v: "data", t: "Accept, ask for clinical data" },
          { v: "pma", t: "Require PMA" } ] }
    ],
    2: [
      { id: "publish", who: "Researchers", label: "What gets published",
        options: [
          { v: "full", t: "Full data with dropouts" },
          { v: "completers", t: "Completers only" },
          { v: "wait", t: "Wait for 3-year data" } ] },
      { id: "fda2", who: "FDA", label: "FDA decision",
        options: [
          { v: "now", t: "Clear/approve now" },
          { v: "post", t: "Approve + postmarket study" },
          { v: "longer", t: "Ask for longer follow-up" } ] }
    ],
    3: [
      { id: "adopt", who: "Physicians", label: "Adoption",
        options: [
          { v: "wide", t: "Widely" },
          { v: "cautious", t: "Cautiously, with registry" },
          { v: "no", t: "Not at all" } ] },
      { id: "training", who: "Halcyon", label: "Training",
        options: [
          { v: "full", t: "Full proctored course" },
          { v: "webinar", t: "One-hour webinar" } ] }
    ],
    4: [
      { id: "report", who: "Halcyon", label: "Reporting policy",
        options: [
          { v: "all", t: "Report everything" },
          { v: "some", t: "Only \"device-related\"" },
          { v: "wait", t: "Wait for more data" } ] },
      { id: "patients4", who: "Patients", label: "Patients act",
        options: [
          { v: "organize", t: "Organize and file reports" },
          { v: "petition", t: "Petition the FDA" },
          { v: "press", t: "Go to the press" },
          { v: "wait", t: "Wait" } ] },
      { id: "doctors4", who: "Physicians", label: "Physicians file reports",
        options: [ { v: "yes", t: "Yes" }, { v: "no", t: "No" } ] },
      { id: "study4", who: "Researchers", label: "Independent analysis",
        options: [ { v: "yes", t: "Published now" }, { v: "no", t: "Not yet" } ] }
    ],
    5: [
      { id: "fda5", who: "FDA", label: "FDA action",
        options: [
          { v: "none", t: "No action yet" },
          { v: "warning", t: "Boxed warning + checklist" },
          { v: "restrict", t: "Restrict sales" },
          { v: "stop", t: "Order stop of sales" } ] },
      { id: "sue", who: "Patients", label: "Patients sue",
        options: [ { v: "yes", t: "Yes" }, { v: "no", t: "No" } ] }
    ]
  },

  /* ---------------- Warm-up deck (index.html) ---------------- */
  warmup: [
    {
      title: "The Bleeding Edge (2018)",
      body: [
        "Kirby Dick's Netflix documentary on the U.S. medical device industry, released July 27, 2018.",
        "It opens with the head of the industry's trade association, AdvaMed, saying the words \"FDA approved.\" The film spends 100 minutes asking what those words actually guarantee."
      ],
      ask: "In one sentence: what was the film's central argument?"
    },
    {
      title: "Four devices",
      cards: [
        { h: "Essure", p: "Permanent birth control coils placed without an incision. Bayer. Approved through PMA in 2002." },
        { h: "Metal-on-metal hips", p: "Cobalt-chromium hip implants such as DePuy's ASR, cleared through 510(k)." },
        { h: "Transvaginal mesh", p: "Mesh for prolapse and incontinence, cleared through 510(k) for a use that had never been tested." },
        { h: "da Vinci robot", p: "Intuitive Surgical's system. Submitted for PMA, then moved to 510(k) after an FDA manager intervened." }
      ],
      ask: "What do these devices have in common? (Worksheet Q3)"
    },
    {
      title: "Two roads to market",
      table: {
        head: ["", "510(k) clearance", "PMA approval"],
        rows: [
          ["The question", "Is it substantially equivalent to a device already on the market?", "Is this device itself reasonably safe and effective?"],
          ["Clinical trial", "Usually not required", "Required"],
          ["Typical devices", "Most moderate-risk (Class II) devices", "High-risk (Class III) devices"],
          ["Volume", "About 4,000 a year", "About 40 to 80 a year"],
          ["The word FDA uses", "Cleared", "Approved"]
        ]
      },
      ask: "Why does a predicate from 1976 still matter today?"
    },
    {
      title: "After launch",
      body: [
        "The FDA mostly learns about problems from reports. Manufacturers must report deaths and serious injuries. Doctors and patients may report through MedWatch, but most never do.",
        "Reports go into the MAUDE database. An FDA inspection that finds problems ends with a Form 483. The FDA issued three to Essure's makers, after inspections in 2002, 2003 and 2010.",
        "Before a 2015 FDA panel on Essure, the agency noted a nearly 1,400% jump in complaints over three years."
      ],
      ask: "Who has the strongest incentive not to report?"
    },
    {
      title: "Who pays when it goes wrong",
      body: [
        "Medtronic v. Lohr (1996): a 510(k) clearance does not review the device's own safety, so patients can still sue in state court.",
        "Riegel v. Medtronic (2008): a PMA approval sets federal requirements for that device, so most state claims that the design or warnings should have been different are preempted.",
        "The result: the more rigorous road can leave injured patients with fewer ways to sue."
      ],
      ask: "Why might Essure patients have had a harder time in court than mesh patients?"
    },
    {
      title: "Today: Cleared for Market",
      body: [
        "Six tables, six roles: the manufacturer, the physicians, the patients, the FDA, a regulatory broker, and the researchers.",
        "One fictional device, VeloraLift, moves from the drawing board to the courtroom in five phases.",
        "Each phase opens when an unlock word appears on the big screen. Read your role page, talk to other tables, and announce your move."
      ],
      flow: [
        ["Warm-up", "10 min"], ["1 Pathway", "6"], ["2 Evidence", "6"], ["3 Launch", "5"],
        ["4 Signal", "5"], ["5 Reckoning", "5"], ["Debrief", "12"]
      ],
      ask: null
    }
  ],

  /* ---------------- Debrief: real history (host.html) ---------------- */
  history: [
    { y: "1976", t: "Medical Device Amendments create device classes, the PMA, and the 510(k) route. Devices marketed before May 28, 1976 become the first predicates." },
    { y: "1996", t: "Medtronic v. Lohr: 510(k) devices are not shielded from state lawsuits." },
    { y: "2002", t: "Essure approved through an expedited PMA, based on two single-arm studies (227 and 518 women)." },
    { y: "2008", t: "Riegel v. Medtronic: PMA devices are largely shielded from state design and warning claims." },
    { y: "2016", t: "FDA orders an Essure postmarket study and a boxed warning. Transvaginal mesh for prolapse is reclassified to Class III." },
    { y: "2018", t: "July 20: Bayer announces it will stop selling Essure in the U.S. July 27: the film premieres on Netflix; Bayer issues its \"fact check\" the same day." },
    { y: "2019", t: "FDA orders the last makers of transvaginal mesh for prolapse to stop selling it." },
    { y: "2020", t: "Bayer agrees to pay about $1.6 billion to settle roughly 90% of some 39,000 Essure claims, without admitting liability." }
  ],

  debriefQuestions: [
    { q: "Which decision in our game did the most to determine how many people were hurt? Who made it, and what pushed them?", link: "Worksheet Q3" },
    { q: "Pick one reform that would have changed our outcome. Who in the room would have fought it?", link: "Worksheet Q5" },
    { q: "Halcyon's statement versus Bayer's 2018 statement: what moves do they share?", link: "Worksheet Q6" }
  ]
};
