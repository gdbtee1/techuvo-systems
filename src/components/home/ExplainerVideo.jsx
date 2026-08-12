import { useState } from "react";
import explainerVideo from "../../assets/videos/explainer.mp4";

function ExplainerVideo() {
  const [muted, setMuted] = useState(true);

  return (
    <div className="relative z-20 bg-white">
      <div className="site-container py-3 sm:py-4">
        <div className="grid overflow-hidden rounded-[1.25rem] border border-blue-100 bg-slate-950 shadow-[0_16px_45px_rgba(15,23,42,0.10)] lg:grid-cols-[0.8fr_1.2fr] lg:items-stretch">
          <div className="relative flex items-center px-5 py-5 sm:px-6 lg:px-7 lg:py-6">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute left-0 top-0 h-full w-28 bg-blue-600/10 blur-3xl"
            />

            <div className="relative">
              <div className="mb-2.5 flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-blue-400 shadow-[0_0_14px_rgba(96,165,250,.8)]" />

                <p className="text-[0.62rem] font-extrabold uppercase tracking-[0.18em] text-blue-300">
                  Watch the process
                </p>
              </div>

              <h2 className="max-w-sm text-lg font-extrabold leading-tight tracking-[-0.035em] text-white sm:text-xl lg:text-[1.35rem]">
                See how Techuvo takes your website from concept to launch.
              </h2>

              <p className="mt-2.5 max-w-sm text-xs leading-5 text-slate-400 sm:text-sm sm:leading-6">
                Watch the quick explainer, then turn the sound on for the full
                walkthrough.
              </p>
            </div>
          </div>

          <div className="border-t border-white/10 lg:border-l lg:border-t-0">
            <div className="relative aspect-video w-full overflow-hidden bg-black lg:aspect-[16/7]">
              <video
                className="absolute inset-0 h-full w-full object-cover"
                autoPlay
                muted={muted}
                loop
                playsInline
                preload="auto"
              >
                <source src={explainerVideo} type="video/mp4" />
                Your browser does not support embedded video.
              </video>

              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/5"
              />

              <button
                type="button"
                onClick={() => setMuted((current) => !current)}
                aria-label={muted ? "Turn video sound on" : "Mute video"}
                className="absolute bottom-3 right-3 z-20 inline-flex min-h-10 items-center justify-center rounded-full border border-white/20 bg-black/65 px-4 text-xs font-extrabold text-white shadow-lg backdrop-blur-md transition hover:bg-black/80 sm:bottom-4 sm:right-4"
              >
                <span className="mr-2 text-sm" aria-hidden="true">
                  {muted ? "🔇" : "🔊"}
                </span>

                {muted ? "Sound on" : "Mute"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExplainerVideo;