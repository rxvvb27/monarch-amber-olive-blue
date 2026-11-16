import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { SLIDES } from "@/presentation/slides";
import { DeckContext } from "@/presentation/nav";

function pad(n: number) {
  return String(n).padStart(2, "0");
}

export function Deck() {
  const [index, setIndex] = useState(0);
  const [board, setBoard] = useState(false);
  const [back, setBack] = useState(false);
  const indexRef = useRef(0);
  const startX = useRef(0);
  const startY = useRef(0);

  const go = useCallback((n: number) => {
    const next = Math.max(0, Math.min(SLIDES.length - 1, n));
    setBack(next < indexRef.current);
    indexRef.current = next;
    setIndex(next);
    setBoard(false);
  }, []);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      const tag = (e.target as HTMLElement | null)?.tagName;
      if (tag === "INPUT" || tag === "TEXTAREA") return;
      if (tag === "BUTTON" && (e.key === " " || e.key === "Enter")) return;
      if (e.key === "Escape") {
        setBoard((open) => !open);
        return;
      }
      if (board) return;
      if (e.key === "ArrowRight" || e.key === "PageDown") {
        e.preventDefault();
        go(indexRef.current + 1);
      } else if (e.key === "ArrowLeft" || e.key === "PageUp" || e.key === "Backspace") {
        e.preventDefault();
        go(indexRef.current - 1);
      } else if (e.key === " " || e.key === "Enter") {
        e.preventDefault();
        go(indexRef.current + 1);
      } else if (e.key === "Home") {
        go(0);
      } else if (e.key === "End") {
        go(SLIDES.length - 1);
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [board, go]);

  function onTouchStart(e: React.TouchEvent) {
    startX.current = e.touches[0].clientX;
    startY.current = e.touches[0].clientY;
  }

  function onTouchEnd(e: React.TouchEvent) {
    if (board) return;
    const dx = e.changedTouches[0].clientX - startX.current;
    const dy = e.changedTouches[0].clientY - startY.current;
    if (Math.abs(dx) < 48 || Math.abs(dx) < Math.abs(dy) * 1.2) return;
    go(indexRef.current + (dx < 0 ? 1 : -1));
  }

  function onStageClick(e: React.MouseEvent<HTMLDivElement>) {
    if (board) return;
    const target = e.target as HTMLElement;
    if (target.closest("button, a")) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    if (x < rect.width * 0.18) go(index - 1);
    else if (x > rect.width * 0.82) go(index + 1);
  }

  const slide = SLIDES[index];
  const View = slide.View;

  return (
    <DeckContext.Provider value={{ go }}>
      <div className="shell">
        <div className="frame">
          <div className="eyebrow-row">
            <p>A night lecture · rare lights above storms</p>
            <p>Fifteen slides</p>
          </div>
          <div
            className={`stage ${board ? "is-board" : ""}`}
            onClick={onStageClick}
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
          >
            <div className="frame-ui">
              <button className="word" type="button" onClick={() => go(0)}>
                Red Sprites
              </button>
              <span className="kicker frame-line">{board ? "All slides" : slide.line}</span>
              <button className="text-btn" type="button" onClick={() => setBoard((open) => !open)}>
                {board ? "One slide" : "All slides"}
              </button>
              <span className="count">
                {pad(index + 1)} / {pad(SLIDES.length)}
              </span>
            </div>

            {board ? (
              <div className="board">
                {SLIDES.map((item, i) => (
                  <button
                    key={item.id}
                    type="button"
                    className={`board-card ${i === 0 || i === SLIDES.length - 1 ? "wide" : ""}`}
                    onClick={() => go(i)}
                  >
                    <img src={item.image} alt="" />
                    <span className="shade" />
                    <span className="meta">
                      <span className="kicker">{pad(i + 1)}</span>
                      <strong>{item.title}</strong>
                      <em>{item.line}</em>
                    </span>
                  </button>
                ))}
              </div>
            ) : (
              <div key={slide.id} className={`slide-in ${back ? "back" : ""}`}>
                <View />
              </div>
            )}

            <button
              className="nav-btn prev"
              type="button"
              aria-label="Previous slide"
              disabled={!board && index === 0}
              onClick={() => go(index - 1)}
            >
              <ChevronLeft size={18} aria-hidden="true" />
            </button>
            <button
              className="nav-btn next"
              type="button"
              aria-label="Next slide"
              disabled={!board && index === SLIDES.length - 1}
              onClick={() => go(index + 1)}
            >
              <ChevronRight size={18} aria-hidden="true" />
            </button>
            <div className="ticks" role="tablist" aria-label="Slides">
              {SLIDES.map((item, i) => (
                <button
                  key={item.id}
                  type="button"
                  className={`tick ${i === index ? "on" : ""} ${i < index ? "done" : ""}`}
                  role="tab"
                  aria-selected={i === index}
                  aria-label={item.title}
                  onClick={() => go(i)}
                />
              ))}
            </div>
            <p className="sr" aria-live="polite">
              Slide {index + 1} of {SLIDES.length}. {slide.title}. {slide.line}
            </p>
          </div>
        </div>
      </div>
    </DeckContext.Provider>
  );
}
