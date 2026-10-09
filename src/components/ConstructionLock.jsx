import { useEffect, useRef } from "react";
import { SITE_LOCKED } from "../siteLock.js";

export default function ConstructionLock({ children }) {
  const dialogRef = useRef(null);

  useEffect(() => {
    if (!SITE_LOCKED) return undefined;

    const root = document.documentElement;
    const previousTitle = document.title;

    root.classList.add("site-locked");
    window.scrollTo(0, 0);
    document.title = "Under construction | Ardua Digital Solutions";
    dialogRef.current?.focus();

    return () => {
      root.classList.remove("site-locked");
      document.title = previousTitle;
    };
  }, []);

  return (
    <>
      <div
        inert={SITE_LOCKED ? true : undefined}
        aria-hidden={SITE_LOCKED ? true : undefined}
        className={SITE_LOCKED ? "pointer-events-none select-none" : undefined}
      >
        {children}
      </div>
      {SITE_LOCKED && (
        <div
          ref={dialogRef}
          role="dialog"
          aria-modal="true"
          aria-labelledby="construction-title"
          aria-describedby="construction-message"
          tabIndex={-1}
          className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-white/80 p-8"
        >
          <div className="max-w-xl border-2 border-black bg-white px-8 py-10 text-center">
            <p className="mb-4 text-sm font-bold tracking-widest">AD ARDUA</p>
            <h1
              id="construction-title"
              className="mb-4 text-4xl font-extrabold tracking-tight md:text-5xl"
            >
              Under construction
            </h1>
            <p id="construction-message" className="text-lg text-gray-800 md:text-xl">
              This site isn&apos;t open yet. We hope to see you soon, when it
              launches.
            </p>
          </div>
        </div>
      )}
    </>
  );
}
