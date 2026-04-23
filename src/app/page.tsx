import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import NeuralBackground from "@/components/ui/flow-field-background";
import Image from "next/image";
import Link from "next/link";

// ---------------------------------------------------------------------------
// CLIMB app screenshot — shown inside the 3D scroll card
// ---------------------------------------------------------------------------
function ClimbAppMockup() {
  return (
    <div className="w-full h-full flex items-center justify-center bg-[#0b0b1a] overflow-hidden">
      <Image
        src="/images/climb-app-photo.png"
        alt="CLIMB app — Standard mode climbing screen"
        width={994}
        height={1972}
        priority
        className="h-full w-auto max-h-full object-contain select-none pointer-events-none"
      />
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
