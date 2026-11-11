import { useEffect, useState } from "react";

type World = {
  id: string;
  number: string;
  short: string;
  title: string;
  subtitle: string;
  item: string;
  price: string;
  color: string;
  ink: string;
  image: string;
  imageAlt: string;
  detail: string;
  mark: string;
  lore: string;
  edition: string;
};

const worlds: World[] = [
  {
    id: "bog",
    number: "I",
    short: "BOG",
    title: "BOG DWELLER",
    subtitle: "BORN BENEATH THE MOSS",
    item: "HEAVYWEIGHT HOOD / WASHED BLACK",
    price: "$118",
    color: "#151912",
    ink: "#ceff52",
    image:
      "https://images.unsplash.com/photo-1638166689068-a8f528b57d44?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=85&w=1400&h=1600",
    imageAlt: "Person wearing a black hoodie and boots in an urban setting",
    detail: "480GSM / OVERSIZED / PUFF PRINT",
    mark: "MIRE CREATURE NO. 01",
    lore: "Pulled from the black water and cut for cold nights. Bog Dweller is a field uniform for things that grow where the light cannot reach.",
    edition: "150 HEAVYWEIGHT HOODS",
  },
  {
    id: "knight",
    number: "II",
    short: "ERROR",
    title: "NO SAINTS",
    subtitle: "SALVATION.EXE HAS STOPPED RESPONDING",
    item: "BATTLE TEE / BONE",
    price: "$54",
    color: "#eeecdc",
    ink: "#000080",
    image:
      "https://images.unsplash.com/photo-1592728036073-d0ae31a18fdc?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=85&w=1400&h=1600",
    imageAlt: "Man wearing a white t-shirt beside a dark wall",
    detail: "240GSM / BOXY / 4-COLOR SCREENPRINT",
    mark: "NO_SAINTS_OS / BUILD 1998",
    lore: "A corrupted devotional file recovered from a beige family computer. No Saints treats salvation like abandoned software: unstable, bright, and strangely comforting.",
    edition: "200 BONE-WHITE TEES",
  },
  {
    id: "slime",
    number: "III",
    short: "OOZE",
    title: "GUTTER SLIME",
    subtitle: "LOCAL LEGENDS DIE IN DRAINPIPES",
    item: "MUTANT TEE / TAR",
    price: "$58",
    color: "#16d8ff",
    ink: "#071216",
    image:
      "https://images.unsplash.com/photo-1706385757296-7d079da58f70?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=85&w=1400&h=1600",
    imageAlt: "Skater captured upside down during a trick",
    detail: "260GSM / SUN FADED / FRONT + BACK",
    mark: "SEWER DEPT. 199X",
    lore: "An ode to drainage ditches, waxed curbs, and the creatures who haunt the last bus home. Best worn dirty and never fully explained.",
    edition: "180 TAR-BLACK TEES",
  },
  {
    id: "oracle",
    number: "IV",
    short: "HEX",
    title: "ORACLE ERROR",
    subtitle: "YOUR FUTURE HAS FAILED TO LOAD",
    item: "MESH LONGSLEEVE / ABYSS",
    price: "$72",
    color: "#aa71ff",
    ink: "#100919",
    image:
      "https://images.unsplash.com/photo-1614028574724-baea020fbe9e?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=85&w=1400&h=1600",
    imageAlt: "Person in a black coat walking at night",
    detail: "SECOND SKIN / ALL-OVER PRINT",
    mark: "DIVINATION TERMINAL",
    lore: "The oracle was asked one question too many. Its final transmission loops across a sheer second skin, mapping a future that refuses to arrive.",
    edition: "120 MESH LONGSLEEVES",
  },
  {
    id: "zine",
    number: "V",
    short: "READ",
    title: "THE EATER",
    subtitle: "FIELD NOTES FROM THE END OF THE MAP",
    item: "RISOGRAPH ZINE / 48 PAGES",
    price: "$22",
    color: "#ff5b35",
    ink: "#170b07",
    image:
      "https://images.unsplash.com/photo-1617034840325-b10d81550042?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=85&w=1400&h=1600",
    imageAlt: "Skateboarder jumping in a concrete plaza",
    detail: "A5 / HAND NUMBERED / 300 COPIES",
    mark: "PRINTED RELIC NO. 001",
    lore: "Forty-eight pages of monsters, failed quests, curb rubbings, and notes from places that are not on any useful map.",
    edition: "300 HAND-NUMBERED COPIES",
  },
  {
    id: "tavern",
    number: "VI",
    short: "D20",
    title: "LAST CALL",
    subtitle: "GOBLIN EATER × MYSTERY TAVERN",
    item: "GUILD TEE / BRUISED PURPLE",
    price: "$64",
    color: "#7d42d8",
    ink: "#160b20",
    image:
      "https://images.unsplash.com/photo-1604868291746-80e874a80e39?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=85&w=1400&h=1600",
    imageAlt: "Rows of bottles inside a dark atmospheric tavern",
    detail: "250GSM / BOXY / GLOW INK",
    mark: "MYSTERY TAVERN GUEST TAP",
    lore: "A crossover brewed after closing time with Mystery Tavern, the TCG and gaming pub. Roll for another round, cut the deck, and never trust the barkeep's side quest.",
    edition: "160 CROSSOVER TEES",
  },
];

function Arrow({ direction = "right" }: { direction?: "left" | "right" }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className={`h-5 w-5 ${direction === "left" ? "rotate-180" : ""}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M4 12h15M13 6l6 6-6 6" />
    </svg>
  );
}

function Sigil() {
  return (
    <svg aria-hidden="true" viewBox="0 0 100 100" className="h-full w-full">
      <path
        d="M50 4 61 35 94 28 69 51 89 79 57 67 50 97 43 67 11 79 31 51 6 28 39 35Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
      />
      <path
        d="M50 35c-10.5 0-17 6.8-17 16.2 0 6.3 3.2 10.7 8.4 13.1V72h5.1v-5h2.2v5h4.6v-5h2.2v5h5.1v-7.7c5.2-2.4 8.4-6.8 8.4-13.1C67 41.8 60.5 35 50 35Z"
        fill="none"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth="3"
      />
      <path d="m50 53-3 5h6l-3-5Z" fill="currentColor" />
      <circle cx="42.5" cy="50.5" r="3.6" fill="currentColor" />
      <circle cx="57.5" cy="50.5" r="3.6" fill="currentColor" />
    </svg>
  );
}

function TavernMark() {
  return (
    <svg aria-hidden="true" viewBox="0 0 100 100" className="h-full w-full">
      <path d="M50 8 93 84H7Z" fill="none" stroke="currentColor" strokeWidth="6" />
      <path d="m50 27 24 44H26Z" fill="currentColor" />
      <circle cx="50" cy="57" r="7" fill="#7d42d8" />
    </svg>
  );
}

function WorldDecor({ id }: { id: string }) {
  if (id === "bog") {
    return (
      <>
        <div className="bog-thorns" aria-hidden="true" />
        <div className="sticker sticker-bog">
          KEEP
          <br />
          OUT
        </div>
        <p className="bog-script" aria-hidden="true">
          rot / root / rebirth
        </p>
      </>
    );
  }

  if (id === "knight") {
    return (
      <>
        <div className="xp-window" aria-hidden="true">
          <div className="xp-titlebar">
            <span>no_saints.exe</span>
            <span>×</span>
          </div>
          <div className="xp-body">
            <span className="xp-error">×</span>
            <span>
              Heaven was not found.
              <br />
              Try again?
            </span>
          </div>
          <div className="xp-actions">
            <span>OK</span>
            <span>Cancel</span>
          </div>
        </div>
        <div className="sticker sticker-xp">100% ANGEL FREE</div>
      </>
    );
  }

  if (id === "slime") {
    return (
      <>
        <div className="slime-drip" aria-hidden="true" />
        <div className="sticker sticker-slime">
          CURB
          <br />
          CULT
        </div>
        <p className="slime-tag" aria-hidden="true">
          GRIME TIME
        </p>
      </>
    );
  }

  if (id === "oracle") {
    return (
      <>
        <div className="oracle-grid" aria-hidden="true" />
        <div className="oracle-readout" aria-hidden="true">
          <span>DIVINATION FEED</span>
          <strong>† 404 †</strong>
          <span>FATE NOT FOUND</span>
        </div>
        <div className="sticker sticker-oracle">DO NOT SCRY</div>
      </>
    );
  }

  if (id === "zine") {
    return (
      <>
        <div className="zine-tape" aria-hidden="true" />
        <div className="sticker sticker-zine">
          HAND
          <br />
          NUMBERED
        </div>
        <p className="zine-note" aria-hidden="true">
          made with ink + spite
        </p>
      </>
    );
  }

  return (
    <>
      <div className="tavern-triangle" aria-hidden="true">
        <TavernMark />
      </div>
      <div className="sticker sticker-tavern">
        GUEST
        <br />
        TAP
      </div>
      <p className="tavern-note" aria-hidden="true">
        ALE · CARDS · CRITICAL HITS
      </p>
    </>
  );
}

function ArtifactPage({
  world,
  onBack,
  onAdd,
}: {
  world: World;
  onBack: () => void;
  onAdd: (world: World) => void;
}) {
  return (
    <section
      data-world={world.id}
      className={`artifact-page world-${world.id} min-h-screen pt-[68px]`}
      style={{ backgroundColor: world.color, color: world.ink }}
    >
      <div className="grid min-h-[calc(100vh-68px)] lg:grid-cols-[1.15fr_.85fr]">
        <div className="world-image relative min-h-[62vh] overflow-hidden border-b-2 border-current lg:border-r-2 lg:border-b-0">
          <img
            src={world.image}
            alt={world.imageAlt}
            className="world-photo relative z-0 h-full w-full object-cover grayscale contrast-[1.15]"
          />
          <div
            className="world-tint absolute inset-0 z-[1] bg-[color:var(--panel)] mix-blend-multiply opacity-35"
            style={{ "--panel": world.color } as React.CSSProperties}
          />
          <div className="halftone absolute inset-0 z-[2] opacity-25" />
          <WorldDecor id={world.id} />
          <p className="outline-title absolute bottom-2 left-1/2 z-[6] w-[94%] -translate-x-1/2 text-center text-[22vw] leading-[.68] lg:text-[10vw]">
            {world.short}
          </p>
        </div>

        <div className="world-copy flex flex-col p-5 md:p-10 lg:p-12">
          <div className="flex items-center justify-between border-b-2 border-current pb-4 font-mono text-[10px] font-bold uppercase tracking-[.14em]">
            <button onClick={onBack} className="flex items-center gap-2 hover:underline">
              <Arrow direction="left" /> Back to drop
            </button>
            <span>Universe / {world.number}</span>
          </div>

          <div className="my-auto py-12">
            <p className="world-subtitle mb-5 font-mono text-[10px] font-bold uppercase tracking-[.22em]">
              {world.subtitle}
            </p>
            <h1 className="display-title max-w-[700px] text-[20vw] uppercase leading-[.72] tracking-[-.055em] lg:text-[7.4vw]">
              {world.title}
            </h1>
            <p className="mt-9 max-w-xl font-mono text-xs leading-6 uppercase">{world.lore}</p>
          </div>

          <div className="grid border-t-2 border-current sm:grid-cols-2">
            <div className="border-b-2 border-current py-5 sm:border-r-2 sm:border-b-0 sm:pr-5">
              <p className="font-mono text-[9px] uppercase tracking-[.18em] opacity-60">
                The artifact
              </p>
              <p className="mt-2 font-mono text-xs font-bold uppercase">{world.item}</p>
              <p className="mt-1 font-mono text-[9px] uppercase">{world.detail}</p>
            </div>
            <div className="py-5 sm:pl-5">
              <p className="font-mono text-[9px] uppercase tracking-[.18em] opacity-60">Edition</p>
              <p className="mt-2 font-mono text-xs font-bold uppercase">{world.edition}</p>
              <p className="mt-1 font-mono text-[9px] uppercase">
                Ships worldwide / responsibly made
              </p>
            </div>
          </div>

          <button
            onClick={() => onAdd(world)}
            className="mt-5 flex h-16 items-center justify-between bg-[#11110f] px-6 font-mono text-xs font-bold uppercase text-[#f2efe5] transition-transform hover:-translate-y-1"
          >
            Add to hoard — {world.price} <Arrow />
          </button>
        </div>
      </div>
    </section>
  );
}

export default function App() {
  const [active, setActive] = useState(0);
  const [bag, setBag] = useState(0);
  const [toast, setToast] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const [universe, setUniverse] = useState<World | null>(() => {
    const id = window.location.hash.replace("#artifact/", "");
    return worlds.find((world) => world.id === id) ?? null;
  });

  const select = (index: number) => {
    setActive(index);
    setMenuOpen(false);
    setUniverse(null);
    window.history.pushState(null, "", `${window.location.pathname}${window.location.search}`);
  };

  const step = (amount: number) => {
    setActive((current) => (current + amount + worlds.length) % worlds.length);
  };

  const addToBag = (world: World) => {
    setBag((count) => count + 1);
    setToast(`${world.title} ADDED TO THE HOARD`);
  };

  const openUniverse = (world: World) => {
    setUniverse(world);
    window.location.hash = `artifact/${world.id}`;
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const closeUniverse = () => {
    setUniverse(null);
    window.history.pushState(null, "", `${window.location.pathname}${window.location.search}`);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    if (!toast) return;
    const timer = window.setTimeout(() => setToast(""), 2400);
    return () => window.clearTimeout(timer);
  }, [toast]);

  useEffect(() => {
    const syncHash = () => {
      const id = window.location.hash.replace("#artifact/", "");
      setUniverse(worlds.find((world) => world.id === id) ?? null);
    };
    window.addEventListener("hashchange", syncHash);
    return () => window.removeEventListener("hashchange", syncHash);
  }, []);

  return (
    <main className="min-h-screen bg-[#11110f] text-[#f2efe5]">
      <header className="fixed inset-x-0 top-0 z-50 flex h-[68px] items-center border-b-2 border-[#f2efe5] bg-[#11110f] px-4 md:px-7">
        <button
          className="group flex items-center gap-3 text-left"
          onClick={() => select(0)}
          aria-label="Goblin Eater home"
        >
          <span className="block h-9 w-9 text-[#c7ff24] transition-transform group-hover:rotate-12">
            <Sigil />
          </span>
          <span className="brand text-[25px] leading-none tracking-[-.02em] md:text-[31px]">
            GOBLIN EATER
          </span>
        </button>

        <div className="ml-auto flex h-full items-center">
          <p className="hidden pr-8 font-mono text-[10px] uppercase leading-tight tracking-[.16em] lg:block">
            Drop 001: Spawn Point
            <br />
            Worldwide transmission
          </p>
          <button
            className="h-full border-l-2 border-[#f2efe5] px-5 font-mono text-xs font-bold uppercase transition-colors hover:bg-[#f2efe5] hover:text-black"
            onClick={() =>
              setToast(
                bag ? `${bag} RELIC${bag > 1 ? "S" : ""} IN YOUR HOARD` : "YOUR HOARD IS EMPTY",
              )
            }
          >
            Bag [{String(bag).padStart(2, "0")}]
          </button>
          <button
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
            className="h-full w-[66px] border-l-2 border-[#f2efe5] transition-colors hover:bg-[#c7ff24] hover:text-black"
          >
            <span className="mx-auto block h-0.5 w-6 bg-current" />
            <span className="mx-auto mt-1.5 block h-0.5 w-6 bg-current" />
          </button>
        </div>
      </header>

      {menuOpen && (
        <nav
          className="fixed inset-0 z-40 flex bg-[#11110f] pt-[68px]"
          aria-label="Main navigation"
        >
          <div className="grid flex-1 content-center gap-2 p-6 md:grid-cols-2 md:p-12">
            {worlds.map((world, index) => (
              <button
                key={world.id}
                onClick={() => select(index)}
                className="menu-link border-b border-white/25 py-3 text-left text-5xl uppercase hover:pl-5 hover:text-[#c7ff24] md:text-7xl"
              >
                {world.number}. {world.title}
              </button>
            ))}
            <p className="mt-8 max-w-sm font-mono text-xs uppercase leading-relaxed text-white/60">
              Independent garments for dungeon crawlers, curb destroyers, and creatures of the
              night.
            </p>
          </div>
        </nav>
      )}

      {universe ? (
        <ArtifactPage world={universe} onBack={closeUniverse} onAdd={addToBag} />
      ) : (
        <section className="drop-stage flex min-h-screen flex-col pt-[68px] md:flex-row">
          {worlds.map((world, index) => {
            const isActive = active === index;
            return (
              <article
                key={world.id}
                data-world={world.id}
                className={`world-panel world-${world.id} relative isolate overflow-hidden border-b-2 border-[#11110f] transition-[flex] duration-700 ease-[cubic-bezier(.77,0,.18,1)] md:border-b-0 md:border-r-2 ${
                  isActive
                    ? "active flex-[1_1_100%] md:flex-[1_1_72%]"
                    : "flex-[0_0_72px] md:flex-[0_0_7%]"
                }`}
                style={{ backgroundColor: world.color, color: world.ink }}
              >
                <button
                  onClick={() => select(index)}
                  className={`panel-tab absolute inset-0 z-20 flex w-full items-center px-5 text-left md:w-auto md:flex-col md:justify-between md:px-0 md:py-5 ${
                    isActive ? "pointer-events-none opacity-0" : "opacity-100"
                  }`}
                  aria-label={`Open ${world.title}`}
                >
                  <span className="font-mono text-xs font-bold">{world.number}</span>
                  <span className="tab-title ml-5 text-3xl uppercase md:ml-0 md:[writing-mode:vertical-rl] md:rotate-180">
                    {world.short} — {world.title}
                  </span>
                  <span className="ml-auto font-mono text-lg md:ml-0">+</span>
                </button>

                <div
                  className={`panel-content grid h-full min-h-[calc(100vh-68px)] w-full transition-opacity delay-300 duration-300 md:min-w-[680px] md:grid-cols-[1.1fr_.9fr] ${
                    isActive ? "opacity-100" : "pointer-events-none opacity-0"
                  }`}
                >
                  <div className="world-image relative min-h-[48vh] overflow-hidden border-b-2 border-current md:min-h-0 md:border-b-0 md:border-r-2">
                    <img
                      src={world.image}
                      alt={world.imageAlt}
                      className="world-photo h-full w-full object-cover grayscale contrast-[1.15]"
                    />
                    <div
                      className="world-tint absolute inset-0 bg-[color:var(--panel)] mix-blend-multiply opacity-35"
                      style={{ "--panel": world.color } as React.CSSProperties}
                    />
                    <div className="halftone absolute inset-0 opacity-25" />
                    <div
                      className="artifact-label absolute left-4 top-4 border-2 border-current bg-[color:var(--panel)] px-3 py-2 font-mono text-[10px] font-bold uppercase"
                      style={{ "--panel": world.color } as React.CSSProperties}
                    >
                      Artifact {world.number} / Drop 001
                    </div>
                    <p className="outline-title absolute bottom-1 left-1/2 w-[95%] -translate-x-1/2 text-center text-[18vw] leading-[.68] md:text-[8.7vw]">
                      {world.short}
                    </p>
                    <div className="absolute bottom-5 right-5 h-16 w-16 md:h-24 md:w-24">
                      <Sigil />
                    </div>
                    <WorldDecor id={world.id} />
                  </div>

                  <div className="world-copy relative flex min-h-[52vh] flex-col p-5 md:min-h-0 md:p-8 lg:p-10">
                    <div className="mb-auto flex items-start justify-between font-mono text-[10px] font-bold uppercase tracking-[.12em]">
                      <span>{world.mark}</span>
                      <span>GE/{world.number}/25</span>
                    </div>

                    <div className="my-10">
                      <p className="world-subtitle mb-4 font-mono text-[10px] font-bold uppercase tracking-[.2em]">
                        {world.subtitle}
                      </p>
                      <h1 className="display-title max-w-[600px] text-[18vw] uppercase leading-[.7] tracking-[-.055em] md:text-[7.2vw]">
                        {world.title}
                      </h1>
                    </div>

                    <div className="border-t-2 border-current">
                      <div className="flex items-start justify-between gap-4 py-4">
                        <div>
                          <p className="font-mono text-xs font-bold uppercase">{world.item}</p>
                          <p className="mt-2 font-mono text-[9px] uppercase tracking-[.12em] opacity-70">
                            {world.detail}
                          </p>
                        </div>
                        <span className="font-mono text-lg font-bold">{world.price}</span>
                      </div>
                      <div className="grid grid-cols-[1fr_104px] gap-2">
                        <div className="grid grid-rows-2 gap-1">
                          <button
                            onClick={() => openUniverse(world)}
                            className="flex min-h-10 items-center justify-between border-2 border-current px-4 font-mono text-[10px] font-bold uppercase transition-colors hover:bg-black/10"
                          >
                            Enter universe <Arrow />
                          </button>
                          <button
                            onClick={() => addToBag(world)}
                            className="flex min-h-10 items-center justify-between bg-[#11110f] px-4 font-mono text-[10px] font-bold uppercase text-[#f2efe5] transition-transform hover:-translate-y-1"
                          >
                            Secure artifact <span>{world.price}</span>
                          </button>
                        </div>
                        <div className="grid grid-cols-2 border-2 border-current">
                          <button
                            aria-label="Previous artifact"
                            onClick={() => step(-1)}
                            className="grid place-items-center border-r-2 border-current hover:bg-black/10"
                          >
                            <Arrow direction="left" />
                          </button>
                          <button
                            aria-label="Next artifact"
                            onClick={() => step(1)}
                            className="grid place-items-center hover:bg-black/10"
                          >
                            <Arrow />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </section>
      )}

      <div
        className={`fixed bottom-5 left-1/2 z-[60] -translate-x-1/2 border-2 border-white bg-[#11110f] px-5 py-3 font-mono text-[10px] font-bold uppercase tracking-wider text-white transition-all ${toast ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-8 opacity-0"}`}
      >
        {toast}
      </div>
    </main>
  );
}
