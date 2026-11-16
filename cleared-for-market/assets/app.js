/* Shared helpers for Cleared for Market */
(function () {
  const G = window.GAME;

  const store = {
    get(k, d) { try { const v = localStorage.getItem(k); return v ? JSON.parse(v) : d; } catch (e) { return d; } },
    set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) { /* storage unavailable: keep in memory only */ } }
  };

  const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

  /* Base URL of the site folder, so links work on GitHub Pages subpaths */
  function baseURL() {
    const u = new URL(location.href);
    u.hash = ""; u.search = "";
    u.pathname = u.pathname.replace(/[^/]*$/, "");
    return u.href;
  }
  const roleURL = r => baseURL() + "role.html?t=" + r.key;

  function qrSVG(text) {
    if (typeof qrcode !== "function") return "";
    const q = qrcode(0, "M"); q.addData(text); q.make();
    return q.createSvgTag({ cellSize: 4, margin: 2, scalable: true });
  }

  /* ---------- Warm-up deck ---------- */
  function slideHTML(s, i, n) {
    let h = `<div class="count">${i + 1} of ${n}</div><h2>${esc(s.title)}</h2>`;
    if (s.body) h += `<div class="body">${s.body.map(p => `<p>${esc(p)}</p>`).join("")}</div>`;
    if (s.cards) h += `<div class="cards4">${s.cards.map(c => `<div><h3>${esc(c.h)}</h3><p>${esc(c.p)}</p></div>`).join("")}</div>`;
    if (s.table) {
      h += `<table class="cmp"><thead><tr>${s.table.head.map(x => `<th scope="col">${esc(x)}</th>`).join("")}</tr></thead><tbody>` +
        s.table.rows.map(r => `<tr><th scope="row">${esc(r[0])}</th>${r.slice(1).map(c => `<td>${esc(c)}</td>`).join("")}</tr>`).join("") +
        `</tbody></table>`;
    }
    if (s.flow) h += `<div class="flow">${s.flow.map(f => `<div><b>${esc(f[0])}</b><span class="muted">${esc(f[1])}${/min/.test(f[1]) ? "" : " min"}</span></div>`).join("")}</div>`;
    if (s.ask) h += `<div class="ask">${esc(s.ask)}</div>`;
    return h;
  }

  function openDeck() {
    let m = document.getElementById("deck");
    if (!m) {
      m = document.createElement("div");
      m.id = "deck"; m.className = "modal"; m.setAttribute("role", "dialog"); m.setAttribute("aria-modal", "true"); m.setAttribute("aria-label", "Warm-up");
      m.innerHTML = `<div class="slide"><button class="btn ghost close" data-a="close">Close</button><div class="content"></div>
        <div class="nav"><button class="btn" data-a="prev">Previous</button><button class="btn primary" data-a="next">Next</button></div></div>`;
      document.body.appendChild(m);
      m.addEventListener("click", e => {
        const a = e.target.getAttribute && e.target.getAttribute("data-a");
        if (e.target === m || a === "close") close();
        if (a === "next") go(1);
        if (a === "prev") go(-1);
      });
      document.addEventListener("keydown", e => {
        if (!m.classList.contains("open")) return;
        if (e.key === "ArrowRight") { go(1); e.stopPropagation(); e.preventDefault(); }
        if (e.key === "ArrowLeft") { go(-1); e.stopPropagation(); e.preventDefault(); }
        if (e.key === "Escape") close();
      }, true);
    }
    let i = 0;
    const n = G.warmup.length;
    function render() {
      m.querySelector(".content").innerHTML = slideHTML(G.warmup[i], i, n);
      m.querySelector('[data-a="prev"]').disabled = i === 0;
      m.querySelector('[data-a="next"]').textContent = i === n - 1 ? "Done" : "Next";
    }
    function go(d) { if (i + d >= n) return close(); i = Math.max(0, i + d); render(); }
    function close() { m.classList.remove("open"); }
    m._go = go;
    render();
    m.classList.add("open");
    m.querySelector('[data-a="next"]').focus();
  }

  /* ---------- Outcome engine (fictional numbers for discussion) ---------- */
  function outcome(d) {
    const pma = d.pathway === "pma" || d.fda1 === "pma";
    const trial = pma || d.fda1 === "data";
    let launchDelay = (pma ? 2 : 0) + (d.fda2 === "longer" ? 2 : 0);

    const perYear = { wide: 15000, cautious: 5000, no: 800 }[d.adopt] || 8000;
    let rateMult = d.training === "webinar" ? 1.3 : 1;
    if (d.adopt === "cautious") rateMult *= 0.85;
    let uptake = 1;
    if (d.fda2 === "longer" || d.publish === "full") uptake *= 0.7; // honest numbers on the label slow uptake

    let years = 9;
    years += { all: -3, some: 0, wait: 1 }[d.report] || 0;
    years += { organize: -2, petition: -1, press: -2, wait: 0 }[d.patients4] || 0;
    if (d.doctors4 === "yes") years -= 1;
    if (d.study4 === "yes") years -= 2;
    if (d.publish === "full") years -= 1;
    if (d.fda2 === "post") years -= 1;
    years = Math.max(2, years);

    const tail = { none: 4, warning: 2 * 0.5, restrict: 2 * 0.3, stop: 0 }[d.fda5];
    const marketYears = years + (tail === undefined ? 0 : tail);
    const implanted = Math.round(perYear * uptake * marketYears / 100) * 100;
    const injured = Math.round(implanted * 0.12 * rateMult / 10) * 10;

    let court = null;
    if (d.sue === "yes") {
      if (!pma) court = "Lawsuits proceed in state court. 510(k) clearance did not review VeloraLift's own safety, so design and warning claims survive (Medtronic v. Lohr).";
      else if (d.report === "some" || d.report === "wait") court = "Most claims are preempted (Riegel v. Medtronic). Plaintiffs argue Halcyon broke a parallel duty by not reporting adverse events to the FDA. Courts are split on whether that survives.";
      else court = "Most claims are preempted (Riegel v. Medtronic). Halcyon reported its adverse events, so plaintiffs have almost nothing left to argue.";
    } else if (d.sue === "no") {
      court = "No lawsuits. Removal surgery is paid by patients and their insurers.";
    }
    return { pma, trial, launchDelay, years, implanted, injured, court, onMarket: d.fda5 === "none" };
  }

  /* Headlines for the news wire, generated from recorded decisions */
  function headlines(phase, d) {
    const H = [];
    const pma = d.pathway === "pma" || d.fda1 === "pma";
    if (phase === 1) {
      if (d.pathway === "510k_A") H.push({ t: "Halcyon files a 510(k), citing a 1997 hernia mesh as its predicate." });
      if (d.pathway === "510k_B") H.push({ t: "Halcyon files a 510(k), citing PelviCradle, a prolapse device withdrawn in 2012." });
      if (d.pathway === "pma") H.push({ t: "Halcyon commits to a PMA. Investors are told launch will slip by two years." });
      if (d.fda1 === "accept" && !pma) H.push({ t: "FDA finds VeloraLift substantially equivalent. No clinical trial required." });
      if (d.fda1 === "data" && !pma) H.push({ t: "FDA accepts the 510(k) route but asks Halcyon for clinical data." });
      if (d.fda1 === "pma" && d.pathway !== "pma") H.push({ t: "FDA rejects the predicate. VeloraLift must go through PMA.", alarm: true });
    }
    if (phase === 2) {
      if (d.publish === "completers") H.push({ t: "Journal: 96% of VeloraLift patients satisfied at one year." });
      if (d.publish === "full") H.push({ t: "Trial paper discloses that 22% of patients were lost before one year.", alarm: true });
      if (d.publish === "wait") H.push({ t: "Investigators hold publication until three-year data are in." });
      if (d.fda2 === "now") H.push({ t: pma ? "FDA approves VeloraLift." : "VeloraLift cleared for market." });
      if (d.fda2 === "post") H.push({ t: (pma ? "FDA approves" : "FDA clears") + " VeloraLift and orders a postmarket study." });
      if (d.fda2 === "longer") H.push({ t: "FDA asks for longer follow-up. Launch delayed two years." });
    }
    if (phase === 3) {
      if (d.adopt === "wide") H.push({ t: "Twin Lakes adopts VeloraLift as its first-line prolapse treatment." });
      if (d.adopt === "cautious") H.push({ t: "Twin Lakes offers VeloraLift to selected patients and tracks every case." });
      if (d.adopt === "no") H.push({ t: "Twin Lakes declines to offer VeloraLift." });
      if (d.training === "webinar") H.push({ t: "Halcyon certifies surgeons after a one-hour webinar.", alarm: true });
      if (d.training === "full") H.push({ t: "Halcyon requires a proctored course before surgeons can buy kits." });
    }
    if (phase === 4) {
      if (d.report === "all") H.push({ t: "Halcyon reports all 1,400 complaints to the FDA." });
      if (d.report === "some") H.push({ t: "Halcyon reports 180 events. The rest are filed as \"procedure-related.\"", alarm: true });
      if (d.report === "wait") H.push({ t: "Halcyon says it needs more data before reporting.", alarm: true });
      if (d.patients4 === "organize") H.push({ t: "Online support group hits 2,000 members and files reports with the FDA." });
      if (d.patients4 === "petition") H.push({ t: "Patients file a citizen petition asking the FDA to act on VeloraLift." });
      if (d.patients4 === "press") H.push({ t: "Front page: women describe life after VeloraLift.", alarm: true });
      if (d.doctors4 === "yes") H.push({ t: "Twin Lakes files MedWatch reports on 23 patients." });
      if (d.study4 === "yes") H.push({ t: "Independent study: insurance claims show far more removals than FDA reports.", alarm: true });
    }
    if (phase === 5) {
      const a = { none: "FDA says VeloraLift's benefits still outweigh its risks.",
        warning: "FDA orders a boxed warning and a patient decision checklist for VeloraLift.",
        restrict: "FDA restricts VeloraLift to providers who review the checklist with each patient.",
        stop: "FDA orders Halcyon to stop selling VeloraLift." }[d.fda5];
      if (a) H.push({ t: a, alarm: d.fda5 === "stop" });
      if (d.sue === "yes") H.push({ t: pma ? "Patients sue Halcyon. Halcyon moves to dismiss, citing federal preemption." : "Thousands of VeloraLift lawsuits are filed in state courts." });
    }
    return H;
  }

  window.CFM = { G, store, esc, baseURL, roleURL, qrSVG, openDeck, outcome, headlines };
})();
