type Scene = {
  id: string;
  title: string;
  timestamp: string;
  logline: string;
  description: string;
  camera: string;
  palette: [string, string, string];
  atmosphere: string[];
};

const scenes: Scene[] = [
  {
    id: "dream-suburb",
    title: "The Dream Suburb",
    timestamp: "00:00",
    logline:
      "Golden-hour cruise through an idyllic, meticulously planned neighborhood that looks frozen in a postcard-perfect moment.",
    description:
      "A bright red vintage station wagon eases down a tree-lined street, gliding past freshly painted picket fences, perfectly clipped hedges, and children racing on the grass. Warm lens flare and lush 35mm grain wrap the scene in a nostalgic glow.",
    camera:
      "Slow, floating dolly following the car at bumper height with a gentle parallax drift.",
    palette: ["#f6c77c", "#f26f63", "#1a1e3c"],
    atmosphere: [
      "35mm film grain with soft halation",
      "Honeyed sunlight washing over lawns",
      "Muted ambient track: distant laughter, cicadas",
    ],
  },
  {
    id: "booming-metropolis",
    title: "The Booming Metropolis",
    timestamp: "00:15",
    logline:
      "From cloud-brushing glass towers to the restless rhythm on the street, the city hums with post-war optimism.",
    description:
      "A gleaming skyscraper reflects the cyan sky before we tilt down into a kinetic rush of yellow taxis, polished chrome, and businessmen threading through the crosswalks. The frame crackles with metropolitan energy.",
    camera:
      "Low-angle establishing shot tilting to a street-level tracking move that keeps pace with the traffic surge.",
    palette: ["#6fc3ff", "#fddb6d", "#1f2a44"],
    atmosphere: [
      "Technicolor saturation with crisp contrast",
      "Layered motion blur on taxis",
      "Sound bed of horns, footsteps, rumbling subway",
    ],
  },
  {
    id: "space-age-dawn",
    title: "The Space Age Dawn",
    timestamp: "00:30",
    logline:
      "A triumphant finale that lifts from suburbia and skyscrapers into an optimistic 1960s vision of tomorrow.",
    description:
      "We rise above the 1964 New York World's Fair, weaving past the Unisphere and rocket-pod pavilions glowing against a magenta twilight. Families look skyward as fireworks trace futuristic arcs across the horizon.",
    camera:
      "Sweeping crane shot that transitions into a graceful aerial orbit, ending on a wide tableau of the fairgrounds.",
    palette: ["#ff9ad5", "#a3d3ff", "#0f1a3a"],
    atmosphere: [
      "Iridescent highlights with subtle starburst flares",
      "Ambient choir pads blended with jubilant brass",
      "Soft vapor trails echoing the motion of rockets",
    ],
  },
];

export default function Home() {
  return (
    <div className="relative min-h-screen bg-slate-950 text-slate-100">
      <div className="pointer-events-none absolute inset-0 -z-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#f48fb1_0%,rgba(12,10,43,0.95)_55%,#05030d_100%)]" />
        <div className="grain absolute inset-0 opacity-60 mix-blend-soft-light" />
      </div>

      <header className="relative mx-auto max-w-6xl px-6 pb-16 pt-24 sm:pt-32 md:px-10">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium uppercase tracking-[0.3em] text-slate-200 backdrop-blur">
          1960s Cinematic Storyboard
        </div>
        <h1 className="mt-8 max-w-3xl text-4xl font-semibold leading-tight text-white sm:text-6xl">
          One reel. Three chapters. A journey from picket fences to orbit-ready
          dreams.
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-slate-300 sm:text-xl">
          A visual treatment crafted for a speculative 1960s travelogue film,
          blending suburban serenity, metropolitan drive, and the optimism of
          the Space Age. Each moment is paired with composition notes, color
          cues, and atmospheric layers to inform direction and post-production.
        </p>
      </header>

      <main className="relative mx-auto max-w-6xl px-6 pb-24 md:px-10">
        <ol className="space-y-16 border-l border-white/10 pl-6 sm:space-y-20 sm:pl-10">
          {scenes.map((scene, index) => (
            <li
              key={scene.id}
              className="relative grid gap-8 rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-[0_40px_120px_-40px_rgba(10,9,34,0.8)] backdrop-blur-xl sm:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] sm:gap-10 sm:p-10"
            >
              <div className="absolute -left-[calc(1.5rem+3px)] top-10 flex h-12 w-12 items-center justify-center rounded-full border border-rose-200/30 bg-rose-400/70 text-lg font-semibold text-slate-950 shadow-[0_15px_30px_-15px_rgba(255,90,90,0.7)]">
                {index + 1}
              </div>
              <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900/70">
                <div
                  className="relative aspect-video w-full overflow-hidden"
                  style={{
                    backgroundImage: `linear-gradient(135deg, ${scene.palette[0]}, ${scene.palette[1]}, ${scene.palette[2]})`,
                  }}
                >
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#ffffff40_0%,#ffffff05_55%,#00000060_100%)] mix-blend-soft-light" />
                  <div className="grain absolute inset-0 opacity-70" />
                  <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent" />
                </div>
                <div className="flex flex-col gap-2 border-t border-white/10 bg-slate-950/40 px-6 py-5">
                  <div className="flex items-center justify-between text-xs uppercase tracking-[0.3em] text-slate-300">
                    <span>{scene.timestamp}</span>
                    <span>Aspect 16:9</span>
                  </div>
                  <h2 className="text-2xl font-semibold text-white">
                    {scene.title}
                  </h2>
                  <p className="text-sm text-slate-300">{scene.logline}</p>
                </div>
              </div>

              <div className="flex flex-col gap-6">
                <div className="space-y-2">
                  <span className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-300">
                    Treatment Notes
                  </span>
                  <p className="text-base leading-relaxed text-slate-100">
                    {scene.description}
                  </p>
                </div>
                <div className="space-y-2">
                  <span className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-300">
                    Camera Direction
                  </span>
                  <p className="text-base text-slate-200">{scene.camera}</p>
                </div>
                <div className="space-y-3">
                  <span className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-300">
                    Atmosphere Layers
                  </span>
                  <ul className="flex flex-wrap gap-2">
                    {scene.atmosphere.map((item) => (
                      <li
                        key={item}
                        className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-sm text-slate-100 shadow-[0_12px_24px_-18px_rgba(255,255,255,0.5)]"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </main>

      <footer className="relative mx-auto max-w-6xl px-6 pb-20 text-sm text-slate-400 md:px-10">
        <div className="rounded-3xl border border-white/10 bg-white/[0.03] px-6 py-8 backdrop-blur-xl sm:px-12 sm:py-10">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h3 className="text-xl font-semibold text-white">
                Production Wrap Notes
              </h3>
              <p className="mt-2 max-w-xl text-slate-300">
                Deliverables include detailed prompt language, visual references
                for color work, and atmospheric guidance for the audio mix —
                ready for pitching, previs, or AI-assisted concept development.
              </p>
            </div>
            <a
              href="#"
              className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold uppercase tracking-[0.35em] text-slate-100 transition hover:bg-white/20"
            >
              Render the Reel
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
