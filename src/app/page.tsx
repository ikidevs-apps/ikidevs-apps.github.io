import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import NeuralBackground from "@/components/ui/flow-field-background";
import Link from "next/link";

// ---------------------------------------------------------------------------
// CLIMB app mockup — shown inside the 3D scroll card
// ---------------------------------------------------------------------------
function ClimbAppMockup() {
  const stars = [
    [12, 7], [28, 14], [52, 5], [70, 11], [86, 4],
    [18, 22], [44, 17], [63, 26], [79, 9], [8, 31],
    [35, 8], [58, 19], [92, 14], [22, 35], [75, 28],
  ];

  return (
    <div className="w-full h-full flex flex-col bg-[#0b0b1a] overflow-hidden">

      {/* ── Top bar ── */}
      <div className="flex items-start justify-between px-5 md:px-8 pt-5 pb-2 shrink-0">
        <div>
          <p className="text-[9px] md:text-[11px] font-bold tracking-[0.16em] uppercase text-indigo-400/70 mb-1">
            Standard Mode
          </p>
          <p className="text-[26px] md:text-[42px] font-extrabold text-white tabular-nums tracking-tight leading-none">
            2:15:00
          </p>
        </div>
        <div className="text-right">
          <p className="text-[9px] md:text-[11px] font-semibold tracking-wider uppercase text-white/25 mb-1">
            Goal
          </p>
          <p className="text-base md:text-2xl font-bold text-white/45 tabular-nums">
            3:00:00
          </p>
        </div>
      </div>

      {/* ── Mountain scene ── */}
      <div className="flex-1 relative overflow-hidden mx-4 md:mx-6 rounded-2xl">
        {/* Sky */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#08082a] via-[#0d0d22] to-[#151530]" />

        {/* Stars */}
        {stars.map(([x, y], i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white/50"
            style={{ left: `${x}%`, top: `${y}%`, width: 2, height: 2 }}
          />
        ))}

        {/* Moon */}
        <div
          className="absolute top-3 right-5 w-5 h-5 rounded-full"
          style={{
            background: "rgba(254,249,195,0.18)",
            boxShadow: "0 0 14px 5px rgba(254,249,195,0.12)",
          }}
        />

        {/* Back-range mountains */}
        <svg
          className="absolute bottom-0 w-full"
          viewBox="0 0 800 280"
          preserveAspectRatio="none"
        >
          <path
            d="M0,280 L130,110 L260,170 L390,70 L510,150 L640,55 L750,125 L800,95 L800,280 Z"
            fill="#161640"
            opacity="0.7"
          />
          <path
            d="M0,280 L90,155 L210,75 L340,155 L460,55 L580,135 L700,65 L800,125 L800,280 Z"
            fill="#101030"
            opacity="0.9"
          />
        </svg>

        {/* Snow caps */}
        <svg
          className="absolute bottom-0 w-full"
          viewBox="0 0 800 280"
          preserveAspectRatio="none"
        >
          <path d="M195,82 L210,70 L225,82 Z" fill="white" opacity="0.25" />
          <path d="M447,62 L460,50 L473,62 Z" fill="white" opacity="0.25" />
        </svg>

        {/* Camp marker */}
        <div
          className="absolute text-sm md:text-base select-none"
          style={{ bottom: "30%", left: "38%" }}
        >
          ⛺
        </div>

        {/* Climber with glow ping */}
        <div
          className="absolute"
          style={{ bottom: "49%", left: "53%" }}
        >
          <div className="relative flex items-center justify-center">
            <div className="absolute w-5 h-5 rounded-full bg-indigo-400/25 animate-ping" />
            <div
              className="w-3 h-3 rounded-full bg-indigo-400"
              style={{ boxShadow: "0 0 10px 3px rgba(129,140,248,0.55)" }}
            />
          </div>
        </div>
      </div>

      {/* ── Progress bar ── */}
      <div className="px-5 md:px-8 pt-3 pb-2 shrink-0">
        <div className="flex items-center justify-between mb-1.5">
          <span className="text-[9px] md:text-[11px] font-bold tracking-widest uppercase text-white/25">
            Progress
          </span>
          <span className="text-[11px] md:text-[13px] font-bold text-indigo-400">73%</span>
        </div>
        <div className="h-[5px] bg-white/10 rounded-full overflow-hidden">
          <div className="h-full w-[73%] rounded-full bg-gradient-to-r from-indigo-700 to-indigo-400" />
        </div>
      </div>

      {/* ── Stats row ── */}
      <div className="grid grid-cols-3 gap-2 px-5 md:px-8 pb-5 shrink-0">
        {[
          { value: "1,350m", label: "Climbed" },
          { value: "⛺  2",  label: "Camps"   },
          { value: "45 min", label: "To Peak"  },
        ].map((s) => (
          <div
            key={s.label}
            className="bg-white/[0.05] border border-white/[0.07] rounded-xl p-2 md:p-3 text-center"
          >
            <p className="text-sm md:text-[17px] font-extrabold text-white leading-none">
              {s.value}
            </p>
            <p className="text-[8px] md:text-[10px] font-bold tracking-wider uppercase text-white/25 mt-1">
              {s.label}
            </p>
          </div>
        ))}
      </div>

    </div>
  );
}

// ---------------------------------------------------------------------------
// Title shown above the 3D card
// ---------------------------------------------------------------------------
function TitleBlock() {
  return (
    <div className="flex flex-col items-center gap-3">
      <h1 className="text-[58px] md:text-[82px] font-extrabold text-white tracking-[-0.04em] leading-none">
        ikidevs
      </h1>
      <p className="text-[26px] md:text-[34px] font-bold text-indigo-400 tracking-[-0.01em] leading-none">
        CLIMB
      </p>
      <p className="text-[15px] md:text-[17px] font-semibold text-white/45 mt-1">
        Study smarter.&nbsp; Climb higher.
      </p>

      {/* Store badges */}
      <div className="flex gap-3 flex-wrap justify-center mt-4">
        {[
          { pre: "Download on the", name: "App Store"    },
          { pre: "Get it on",       name: "Google Play"  },
        ].map((b) => (
          <div
            key={b.name}
            className="flex bg-white/[0.06] border border-white/[0.1] px-5 py-3 rounded-2xl cursor-default select-none"
          >
            <div className="text-left">
              <span className="block text-[10px] text-white/30 leading-none mb-0.5 tracking-wide">
                {b.pre}
              </span>
              <span className="block text-sm font-bold text-white/50">{b.name}</span>
            </div>
          </div>
        ))}
      </div>

      <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-indigo-400/50 mt-2">
        Coming soon · scroll to explore
      </p>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------
export default function Home() {
  return (
    <div className="bg-black font-nunito">

      {/* Fixed neural background */}
      <div className="fixed inset-0 z-0">
        <NeuralBackground
          color="#818cf8"
          trailOpacity={0.1}
          speed={0.8}
          particleCount={600}
        />
      </div>
      <div
        className="fixed inset-0 z-[1] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.5) 100%)",
        }}
      />

      {/* Scrollable content */}
      <div className="relative z-10">

        {/* Header */}
        <header className="flex items-center justify-between px-8 pt-8">
          <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-white/30 select-none">
            ikidevs
          </span>
          <nav className="flex gap-5">
            <Link
              href="/climb/support/"
              className="text-[11px] font-semibold tracking-wider uppercase text-white/30 hover:text-white/60 transition-colors duration-200"
            >
              Support
            </Link>
            <Link
              href="/climb/privacy/"
              className="text-[11px] font-semibold tracking-wider uppercase text-white/30 hover:text-white/60 transition-colors duration-200"
            >
              Privacy
            </Link>
          </nav>
        </header>

        {/* 3D scroll reveal */}
        <ContainerScroll titleComponent={<TitleBlock />}>
          <ClimbAppMockup />
        </ContainerScroll>

        {/* Footer */}
        <footer className="flex justify-center items-center gap-5 px-8 py-8 border-t border-white/[0.05]">
          <Link
            href="/climb/support/"
            className="text-[11px] font-semibold tracking-wider uppercase text-white/25 hover:text-white/55 transition-colors duration-200"
          >
            Support
          </Link>
          <span className="text-white/10">·</span>
          <Link
            href="/climb/privacy/"
            className="text-[11px] font-semibold tracking-wider uppercase text-white/25 hover:text-white/55 transition-colors duration-200"
          >
            Privacy Policy
          </Link>
          <span className="text-white/10">·</span>
          <span className="text-[11px] text-white/20">© 2026 ikidevs</span>
        </footer>

      </div>
    </div>
  );
}
