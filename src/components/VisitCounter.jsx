import { useEffect, useMemo, useState } from "react";
import { useLocation } from "react-router-dom";

/**
 * Cookie-free counter με hits.sh
 * - Αυξάνουμε το counter φορτώνοντας ένα <img> (δεν έχει CORS θέματα)
 * - Διαβάζουμε την τιμή από το JSON endpoint και την εμφανίζουμε
 */
const HOST_BASE = "pantoine31.github.io/ppblog"; // βάλε το δικό σου project path

export default function VisitCounter({ scope = "site", refreshMs = 10000 }) {
  const [count, setCount] = useState(null);
  const loc = useLocation();

  // per-page: με HashRouter λαμβάνουμε και το pathname και το hash για να ξεχωρίζουν τα routes
  const id = useMemo(() => {
    if (scope === "page") {
      const path = (loc.pathname || "/") + (loc.hash || "");
      return `${HOST_BASE}${path}`;
    }
    return HOST_BASE; // site-wide
  }, [scope, loc.pathname, loc.hash]);

  // JSON endpoint (επιστρέφει { total, unique, today, ... })
  const JSON_URL = `https://hits.sh/${id}.json`;

  useEffect(() => {
    let timer;

    // 1) increment counter: φορτώνουμε "σιωπηλά" το SVG badge (κάθε mount/route change)
    const img = new Image();
    img.src = `https://hits.sh/${id}.svg?view=total`; // αυτό κάνει την αύξηση
    img.referrerPolicy = "no-referrer"; // προαιρετικό

    // 2) φέρε την τρέχουσα τιμή και βάλε polling για live update
    const fetchCount = async () => {
      try {
        const res = await fetch(JSON_URL);
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = await res.json();
        // προτιμάμε το συνολικό πλήθος
        if (typeof data.total === "number") setCount(data.total);
      } catch (e) {
        console.error("[hits.sh] fetch failed:", e);
      }
    };

    fetchCount();
    if (refreshMs > 0) timer = setInterval(fetchCount, refreshMs);

    return () => timer && clearInterval(timer);
  }, [id, JSON_URL, refreshMs]);

  return (
    <div style={{ fontSize: 14, opacity: 0.8 }}>
      {scope === "site" ? "Συνολικές επισκέψεις site: " : "Επισκέψεις σελίδας: "}
      {count ?? "…"}
    </div>
  );
}
