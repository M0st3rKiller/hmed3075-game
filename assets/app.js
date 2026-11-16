/* Shared helpers for the DreamStation game */
(function () {
  const G = window.GAME;
  const store = {
    get(k, d) { try { const v = localStorage.getItem(k); return v ? JSON.parse(v) : d; } catch (e) { return d; } },
    set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) { /* storage unavailable: state stays in memory */ } }
  };
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const table = n => G.tables.find(t => t.n === +n);

  /* Render a sentence item {t, tag, src, note} */
  function item(x, numbered) {
    const tag = x.tag === "H" ? '<span class="tag H">Historical</span>' : x.tag === "F" ? '<span class="tag F">Fictional</span>' : "";
    const src = (x.src || []).map(k => {
      const s = G.sources[k];
      const i = numbered ? numbered(k) : k;
      return s ? `<a class="src" href="${esc(s.u)}" target="_blank" rel="noopener" title="${esc(s.t)}">[${i}]</a>` : "";
    }).join("");
    const note = x.note ? `<span class="note">${esc(x.note)}</span>` : "";
    return `${tag}${esc(x.t)}${src}${note}`;
  }

  window.DS = { G, store, esc, table, item };
})();
