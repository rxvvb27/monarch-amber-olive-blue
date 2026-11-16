import type { JSX } from "react";
import { ArrowRight } from "lucide-react";
import { Sprite, type SpriteVariant } from "@/presentation/sprite";
import { useDeck } from "@/presentation/nav";

export type SlideMeta = {
  id: string;
  title: string;
  line: string;
  image: string;
  View: () => JSX.Element;
};

function Photo({
  src,
  alt,
  className = "",
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    <div className={`photo-frame ${className}`}>
      <img src={src} alt={alt} />
    </div>
  );
}

function Mark({ n, label }: { n: string; label: string }) {
  return (
    <div className="mark">
      <span className="kicker">{n}</span>
      <span className="kicker">{label}</span>
    </div>
  );
}

function OpenSlide() {
  const { go } = useDeck();
  const links = [
    { label: "The light", n: 1 },
    { label: "The shapes", n: 4 },
    { label: "Why rare", n: 7 },
    { label: "First photo", n: 8 },
  ];
  return (
    <article className="slide hero">
      <div className="hero-bg">
        <img src="/art/hero.jpg" alt="A tall night storm over a dark mountain line" />
      </div>
      <div className="hero-shade" />
      <Sprite className="hero-sprite" variant="jellyfish" />
      <div className="hero-content">
        <nav className="toplinks rise" aria-label="Jump">
          {links.map((link) => (
            <button key={link.label} type="button" onClick={() => go(link.n)}>
              {link.label}
            </button>
          ))}
        </nav>
        <h1 className="display hero-title rise d2">
          Red
          <br />
          Sprites
        </h1>
        <div className="hero-bottom">
          <div className="glass rise d3">
            <div className="glass-row">
              <span className="kicker">How long</span>
              <span className="live-dot" aria-hidden="true" />
            </div>
            <h3>Shorter than a blink</h3>
            <div className="bar" aria-hidden="true">
              <span className="bar-fill" />
            </div>
            <p>This bar is slow. A real sprite is faster.</p>
          </div>
          <div />
          <div className="welcome rise d4">
            <h2>
              Welcome
              <br />
              to the high sky
            </h2>
            <p>
              A sprite is a rare red light. It lives far above thunder clouds. Most people never see one.
            </p>
            <button className="pill" type="button" onClick={() => go(1)}>
              See the lights <ArrowRight size={16} aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}

function WhatSlide() {
  return (
    <article className="slide split">
      <div className="split-copy">
        <Mark n="02" label="What it is" />
        <h2 className="display rise">
          Red
          <br />
          Sprites
        </h2>
        <p className="body rise d2">
          A sprite is a real light. It is red. It shows above a big storm, then it is gone. It is not a plane. It is not a fire.
        </p>
        <p className="body rise d3">
          People gave it this name. In old stories, a sprite is a small, fast spirit. The light is fast. The name stayed.
        </p>
        <div className="stats rise d4">
          <div>
            <div className="stat-n">50–90</div>
            <span className="kicker">km up</span>
            <p>Far above the cloud.</p>
          </div>
          <div>
            <div className="stat-n">0.1s</div>
            <span className="kicker">or less</span>
            <p>Shorter than a blink.</p>
          </div>
          <div>
            <div className="stat-n">1989</div>
            <span className="kicker">first film</span>
            <p>A camera caught one.</p>
          </div>
        </div>
      </div>
      <div className="shot rise d2">
        <Photo src="/art/prairie.jpg" alt="A night storm over a dark field" />
        <Sprite className="shot-sprite" variant="jellyfish" />
        <div className="inset">
          <img src="/art/cloud.jpg" alt="Close texture of a storm cloud" />
        </div>
      </div>
    </article>
  );
}

function NeedsSlide() {
  const cards = [
    { n: "01", title: "A big storm", text: "Small clouds almost never make a sprite.", src: "/art/prairie.jpg", alt: "A large storm cloud at night" },
    { n: "02", title: "A dark night", text: "The day sky is too bright. City lights hide it.", src: "/art/plains.jpg", alt: "A dark open plain under night clouds" },
    { n: "03", title: "A long view", text: "You must see the top of the storm, not the rain.", src: "/art/sea.jpg", alt: "A storm far across the sea" },
    { n: "04", title: "A fast eye", text: "It ends before a blink. A camera helps.", src: "/art/tripod.jpg", alt: "A camera on a tripod facing a storm" },
  ];
  return (
    <article className="slide quad">
      <header className="quad-head">
        <Mark n="03" label="What you need" />
        <h2 className="serif rise">Four things. Miss one, and you see nothing.</h2>
      </header>
      <div className="quad-grid">
        {cards.map((card, i) => (
          <article key={card.n} className={`qcard rise d${i + 1}`}>
            <Photo src={card.src} alt={card.alt} />
            <div className="qbody">
              <span className="kicker">{card.n}</span>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </div>
          </article>
        ))}
      </div>
    </article>
  );
}

function LookSlide() {
  return (
    <article className="slide look">
      <div className="look-copy">
        <Mark n="04" label="How they look" />
        <h2 className="serif rise">
          Red fingers
          <br />
          in a black sky
        </h2>
        <p className="body rise d2">
          The light is thin. It can look like branches, or a jellyfish, or a tall carrot.
        </p>
        <p className="body rise d3">
          The top is red. The lower tips can turn blue. Then the whole shape is gone.
        </p>
      </div>
      <div className="mosaic">
        <div className="big photo-frame rise d2">
          <img src="/art/hero.jpg" alt="Open night sky above a thundercloud" />
          <Sprite variant="jellyfish" />
        </div>
        <Photo className="rise d3" src="/art/aerial.jpg" alt="Storm tops seen from above" />
        <Photo className="rise d4" src="/art/cloud.jpg" alt="A storm cloud lit from inside" />
      </div>
    </article>
  );
}

function ShapesSlide() {
  const shapes: { variant: SpriteVariant; name: string; text: string; src: string }[] = [
    { variant: "carrot", name: "Carrot", text: "One tall red body. Small arms on the side.", src: "/art/hero.jpg" },
    { variant: "jellyfish", name: "Jellyfish", text: "A wide top. Many long legs under it.", src: "/art/prairie.jpg" },
    { variant: "columns", name: "Columns", text: "Straight lines. They often come in a group.", src: "/art/sea.jpg" },
  ];
  return (
    <article className="slide shapes">
      <header>
        <Mark n="05" label="Three shapes" />
        <h2 className="serif rise">Same light. Three faces.</h2>
      </header>
      <div className="shape-grid">
        {shapes.map((shape, i) => (
          <article key={shape.name} className={`shape rise d${i + 2}`}>
            <div className="bg">
              <img src={shape.src} alt="" />
            </div>
            <div className="shade" />
            <Sprite variant={shape.variant} />
            <div className="copy">
              <span className="kicker">0{i + 1}</span>
              <h3>{shape.name}</h3>
              <p>{shape.text}</p>
            </div>
          </article>
        ))}
      </div>
      <p className="watermark" aria-hidden="true">Sprites</p>
    </article>
  );
}

function StartSlide() {
  const steps = [
    { title: "The bolt", text: "A strong lightning bolt hits the ground." },
    { title: "The change", text: "The air above the cloud changes very fast." },
    { title: "The red light", text: "High air turns red for a short moment." },
    { title: "The dark", text: "Then the sky is black again." },
  ];
  const orbs = [
    { src: "/art/cloud.jpg", alt: "Lit storm cloud" },
    { src: "/art/aerial.jpg", alt: "Cloud tops at night" },
    { src: "/art/hero.jpg", alt: "Sky above a storm" },
    { src: "/art/burst.jpg", alt: "One storm cloud in a black sky" },
  ];
  return (
    <article className="slide path">
      <div className="steps">
        <div>
          <Mark n="06" label="How it starts" />
          <h2 className="serif rise">From the bolt to the red sky</h2>
        </div>
        {steps.map((step) => (
          <div className="step" key={step.title}>
            <span className="bullet" aria-hidden="true" />
            <div>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="orbs" aria-hidden="true">
        {orbs.map((orb) => (
          <div className="orb" key={orb.src}>
            <Photo src={orb.src} alt={orb.alt} />
          </div>
        ))}
      </div>
    </article>
  );
}

function FamilySlide() {
  const family: { n: string; variant: SpriteVariant; title: string; text: string }[] = [
    { n: "01", variant: "jellyfish", title: "Sprites", text: "Red light, high above the cloud. Many shapes." },
    { n: "02", variant: "jet", title: "Blue jets", text: "Blue light. It starts at the cloud top and goes up." },
    { n: "03", variant: "ring", title: "Elves", text: "A huge dim ring. Even faster than a sprite." },
    { n: "04", variant: "carrot", title: "Halos", text: "A soft red disk. It can come just before a sprite." },
  ];
  return (
    <article className="slide family">
      <header>
        <Mark n="07" label="A small family" />
        <h2 className="serif rise">Not only sprites</h2>
      </header>
      <div className="family-grid">
        {family.map((item, i) => (
          <article key={item.title} className={`fcell rise d${i + 1}`}>
            <span className="kicker">{item.n}</span>
            <div className="plate">
              <Sprite variant={item.variant} />
            </div>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </article>
        ))}
        <p className="note">
          A gigantic jet is rarer still. It is a tall bridge of light, from the cloud to the high sky.
        </p>
      </div>
      <p className="watermark" aria-hidden="true">Family</p>
    </article>
  );
}

function RareSlide() {
  const left = [
    { title: "Too fast", text: "It ends before a blink." },
    { title: "Too high", text: "It sits 50 to 90 kilometers up." },
    { title: "Too shy", text: "City lights wash the red away." },
  ];
  const right = [
    { title: "Long nights", text: "You can watch for hours and see none." },
    { title: "That is normal", text: "Rare means rare. You did not fail." },
    { title: "Look above", text: "Stand far from the rain. Watch the cloud top." },
  ];
  return (
    <article className="slide asset">
      <div>
        <Mark n="08" label="Why they hide" />
        <h2 className="serif rise">Easy to miss</h2>
        <div className="bullets">
          {left.map((item) => (
            <div className="bullet-row" key={item.title}>
              <span className="bullet" aria-hidden="true" />
              <div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="orb-lg rise d2">
        <Photo src="/art/burst.jpg" alt="A single storm cloud flashing at night" />
        <Sprite variant="columns" />
      </div>
      <div className="notes">
        {right.map((item) => (
          <div className="note" key={item.title}>
            <span className="bullet" aria-hidden="true" />
            <div>
              <strong>{item.title}</strong>
              <span>{item.text}</span>
            </div>
          </div>
        ))}
      </div>
    </article>
  );
}

function FilmSlide() {
  return (
    <article className="slide story">
      <div className="story-copy">
        <Mark n="09" label="The first clear film" />
        <p className="display year rise">1989</p>
        <p className="body rise d2">
          A team pointed a low-light camera at the stars. A storm got in the way. The tape showed a red flash.
        </p>
        <p className="body rise d3">
          Pilots had told this story for years. Many people did not believe them. The tape made the story true.
        </p>
        <p className="fine rise d4">Minnesota, United States. One summer night.</p>
      </div>
      <Photo className="rise d2" src="/art/tripod.jpg" alt="A camera waits on a ridge while lightning flashes far away" />
    </article>
  );
}

function ColorSlide() {
  return (
    <article className="slide colors">
      <div className="plate-stage rise">
        <span className="tag red">Red top</span>
        <span className="tag blue">Blue tips</span>
        <Sprite variant="jellyfish" />
      </div>
      <div className="colors-copy">
        <Mark n="10" label="The colors" />
        <h2 className="serif rise">The air lights up. It is not fire.</h2>
        <p className="body rise d2">
          A gas in the high air makes the red. A little lower, the air can glow blue. No wood. No lamp. Just air, for a moment.
        </p>
        <div className="swatches rise d3">
          <div className="swatch">
            <span className="chip red" aria-hidden="true" />
            <div>
              <strong>Red</strong>
              <span>The top, and most of the body.</span>
            </div>
          </div>
          <div className="swatch">
            <span className="chip blue" aria-hidden="true" />
            <div>
              <strong>Blue</strong>
              <span>The thin tips, nearer the cloud.</span>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

function WatchSlide() {
  const steps = [
    { n: "01", title: "Stand far away", text: "About 100 kilometers from the storm, or more. You want the top, not the rain." },
    { n: "02", title: "Find real dark", text: "Leave city lights behind. Give your eyes twenty minutes." },
    { n: "03", title: "Look above the cloud", text: "The sprite is in the clear sky over the storm." },
    { n: "04", title: "Use a camera", text: "A fast camera sees more than eyes. Point it at the high sky." },
  ];
  return (
    <article className="slide watch">
      <div className="watch-copy">
        <Mark n="11" label="How to watch" />
        <h2 className="serif rise">A quiet plan</h2>
        {steps.map((step) => (
          <div className="numstep" key={step.n}>
            <b>{step.n}</b>
            <div>
              <strong>{step.title}</strong>
              <p>{step.text}</p>
            </div>
          </div>
        ))}
      </div>
      <Photo src="/art/tripod.jpg" alt="Tripod and a small warm lamp on a hill, storm on the horizon" />
    </article>
  );
}

function WhereSlide() {
  return (
    <article className="slide places">
      <header>
        <Mark n="12" label="Where to look" />
        <h2 className="serif rise">Big storms, dark ground</h2>
      </header>
      <div className="place-grid">
        <figure className="place wide">
          <Photo src="/art/plains.jpg" alt="A dirt track across wide night plains" />
          <figcaption>
            <span className="kicker">01</span>
            <h3>Wide plains</h3>
            <p>Big summer storms. The middle of the United States is famous for them.</p>
          </figcaption>
        </figure>
        <figure className="place">
          <Photo src="/art/sea.jpg" alt="Lightning over a dark sea" />
          <figcaption>
            <h3>Over the sea</h3>
            <p>Dark water. A clear view of the cloud top.</p>
          </figcaption>
        </figure>
        <figure className="place">
          <Photo src="/art/slope.jpg" alt="A dark mountain under a wide night sky" />
          <figcaption>
            <h3>High land</h3>
            <p>A ridge can give you a long, clear view.</p>
          </figcaption>
        </figure>
        <figure className="place">
          <Photo src="/art/aerial.jpg" alt="Thunderstorm tops seen from a plane" />
          <figcaption>
            <h3>From above</h3>
            <p>Planes and space crews see the cloud tops.</p>
          </figcaption>
        </figure>
        <figure className="place">
          <Photo src="/art/prairie.jpg" alt="A distant night storm" />
          <figcaption>
            <h3>Many countries</h3>
            <p>Europe, Asia, and South America see them too.</p>
          </figcaption>
        </figure>
      </div>
    </article>
  );
}

function SafeSlide() {
  return (
    <article className="slide safe">
      <div className="safe-copy">
        <Mark n="13" label="Stay safe" />
        <h2 className="serif rise">Safe from the sprite. Not from the storm.</h2>
        <p className="body">
          A sprite is 50 kilometers above you, or more. It does not hit houses. It does not hit people on the ground.
        </p>
        <div className="warn">
          <strong>Lightning does.</strong>
          <p className="body">
            If you hear thunder, go inside. Do not stand in a field to hunt a sprite. Watch a storm that is far away.
          </p>
        </div>
      </div>
      <Photo src="/art/sea.jpg" alt="A storm staying far out over the water" />
    </article>
  );
}

function QuietSlide() {
  return (
    <article className="slide quiet">
      <Mark n="14" label="Why it matters" />
      <h2 className="rise">
        One blink.
        <br />
        <em>Then you wait.</em>
      </h2>
      <div className="quiet-row">
        <p>
          Sprites matter. A storm near the ground can light the high sky. Weather below. Thin air above. We still miss most of them.
        </p>
        <Photo src="/art/hero.jpg" alt="Night sky over a storm" />
        <Photo src="/art/aerial.jpg" alt="Cloud tops" />
        <Photo src="/art/cloud.jpg" alt="Storm cloud" />
      </div>
    </article>
  );
}

function CloseSlide() {
  const { go } = useDeck();
  return (
    <article className="slide close">
      <div className="close-bg">
        <img src="/art/tripod.jpg" alt="A camera on a dark ridge under a lightning storm" />
      </div>
      <div className="close-shade" />
      <Sprite className="close-sprite" variant="carrot" />
      <div className="close-copy">
        <span className="kicker">15 / 15</span>
        <h2 className="display rise">
          Ready to
          <br />
          look up?
        </h2>
        <p className="sub rise d2">
          Find a dark place. Find a far storm. Let your eyes rest. Most nights are quiet. One night, the sky may answer.
        </p>
        <button className="pill rise d3" type="button" onClick={() => go(0)}>
          Back to the start <ArrowRight size={16} aria-hidden="true" />
        </button>
        <div className="close-meta">
          <span>Red sprites</span>
          <span>50 to 90 km up</span>
          <span>Shorter than a blink</span>
        </div>
      </div>
    </article>
  );
}

export const SLIDES: SlideMeta[] = [
  { id: "open", title: "Red Sprites", line: "A rare red light", image: "/art/hero.jpg", View: OpenSlide },
  { id: "what", title: "What it is", line: "Real light, fast name", image: "/art/prairie.jpg", View: WhatSlide },
  { id: "needs", title: "Four things", line: "Storm, night, view, speed", image: "/art/sea.jpg", View: NeedsSlide },
  { id: "look", title: "How they look", line: "Red fingers in the sky", image: "/art/hero.jpg", View: LookSlide },
  { id: "shapes", title: "Three shapes", line: "Carrot, jellyfish, columns", image: "/art/prairie.jpg", View: ShapesSlide },
  { id: "start", title: "How it starts", line: "From bolt to red sky", image: "/art/cloud.jpg", View: StartSlide },
  { id: "family", title: "The family", line: "Jets, elves, halos", image: "/art/aerial.jpg", View: FamilySlide },
  { id: "rare", title: "Why they hide", line: "Fast, high, and shy", image: "/art/burst.jpg", View: RareSlide },
  { id: "film", title: "First film", line: "A tape from 1989", image: "/art/tripod.jpg", View: FilmSlide },
  { id: "color", title: "Two colors", line: "Red top, blue tips", image: "/art/hero.jpg", View: ColorSlide },
  { id: "watch", title: "How to watch", line: "Far, dark, and patient", image: "/art/tripod.jpg", View: WatchSlide },
  { id: "where", title: "Where to look", line: "Plains, sea, high land", image: "/art/plains.jpg", View: WhereSlide },
  { id: "safe", title: "Stay safe", line: "Fear the storm, not the sprite", image: "/art/sea.jpg", View: SafeSlide },
  { id: "quiet", title: "Why it matters", line: "A storm can touch the high sky", image: "/art/aerial.jpg", View: QuietSlide },
  { id: "close", title: "Look up", line: "Most nights are quiet", image: "/art/tripod.jpg", View: CloseSlide },
];
