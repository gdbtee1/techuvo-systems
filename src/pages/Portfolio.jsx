import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";

const projects = [
  {
    id: "carolina-brake",
    fileNumber: "001",
    title: "Carolina Brake & Diagnostics",
    category: "Automotive",
    type: "Business Website",
    year: "2026",
    location: "North Carolina",
    websiteUrl: "https://carolinabrakes.com",
    status: "Live",
    description:
      "A responsive automotive website built to explain services clearly, strengthen trust, and make contacting the shop easier.",
    brief:
      "The business needed a professional online presence that could organize its services and help local customers confidently request assistance.",
    build:
      "Techuvo created clear service navigation, responsive layouts, strong calls to action, and a professional automotive presentation.",
    capabilities: [
      "Responsive website",
      "Service pages",
      "Lead-focused navigation",
      "Contact pathways",
      "Mobile optimization",
      "Search-friendly structure",
    ],
    color: "blue",
  },
  {
    id: "golden-cares",
    fileNumber: "002",
    title: "Golden Cares",
    category: "Care Services",
    type: "Service Website",
    year: "2026",
    location: "United States",
    websiteUrl: "https://mygoldencares.com",
    status: "Live",
    description:
      "A warm care-services website that helps families understand available support and contact the organization confidently.",
    brief:
      "The organization needed a reassuring website that could explain its services clearly and create trust with families.",
    build:
      "Techuvo developed accessible service information, calm visual direction, responsive layouts, and clear contact options.",
    capabilities: [
      "Care-service presentation",
      "Responsive development",
      "Accessible structure",
      "Family-focused messaging",
      "Contact pathways",
      "Trust-building design",
    ],
    color: "sky",
  },
  {
    id: "kids-first",
    fileNumber: "003",
    title: "Kids First",
    category: "Education",
    type: "Education Website",
    year: "2026",
    location: "United States",
    websiteUrl: "https://kidsfirstllc.com",
    status: "Live",
    description:
      "An education website built to organize program information, communicate values, and create a clearer enrollment path.",
    brief:
      "Families needed an easier way to understand the organization, its programs, educational approach, and enrollment process.",
    build:
      "Techuvo created structured program sections, responsive layouts, family-focused copy, and organized calls to action.",
    capabilities: [
      "Education website",
      "Program information",
      "Enrollment pathways",
      "Responsive layouts",
      "Family navigation",
      "Accessible content",
    ],
    color: "slate",
  },
  {
    id: "monroe-media-tv",
    fileNumber: "004",
    title: "Monroe Media TV",
    category: "Media",
    type: "Media Platform",
    year: "2026",
    location: "United States",
    websiteUrl: "#",
    status: "Archived",
    description:
      "A multi-page media experience designed to organize programming, company information, and digital content.",
    brief:
      "The media company needed a scalable digital home capable of supporting multiple content categories.",
    build:
      "Techuvo created reusable page sections, responsive media layouts, organized navigation, and expandable architecture.",
    capabilities: [
      "Multi-page architecture",
      "Media content structure",
      "Responsive development",
      "Reusable components",
      "Brand presentation",
      "Expandable pages",
    ],
    color: "indigo",
  },
  {
    id: "pen-game-press",
    fileNumber: "005",
    title: "Pen Game Press",
    category: "Publishing",
    type: "Author Platform",
    year: "2026",
    location: "United States",
    websiteUrl: "#",
    status: "Archived",
    description:
      "A publishing platform designed to present books, creative work, brand information, and reader actions.",
    brief:
      "The publishing brand needed one organized digital space for showcasing its written work and engaging readers.",
    build:
      "Techuvo created book-focused sections, responsive presentation, reusable content areas, and clear reader pathways.",
    capabilities: [
      "Publishing website",
      "Book presentation",
      "Author branding",
      "Responsive layouts",
      "Reader navigation",
      "Expandable content",
    ],
    color: "violet",
  },
  {
    id: "hubby-hub",
    fileNumber: "006",
    title: "Hubby Hub",
    category: "Publishing",
    type: "Author Website",
    year: "2026",
    location: "United States",
    websiteUrl: "#",
    status: "Archived",
    description:
      "A personality-driven author website built to introduce the brand and organize written content.",
    brief:
      "The author needed a recognizable digital presence that could present the project professionally without losing its personality.",
    build:
      "Techuvo created expressive styling, responsive layouts, clear content sections, and direct reader pathways.",
    capabilities: [
      "Author website",
      "Creative presentation",
      "Content organization",
      "Responsive development",
      "Reader engagement",
      "Custom styling",
    ],
    color: "cyan",
  },
];

const categories = [
  "All",
  "Automotive",
  "Care Services",
  "Education",
  "Media",
  "Publishing",
];

const colorStyles = {
  blue: {
    folder: "from-blue-700 via-blue-600 to-blue-500",
    border: "border-blue-200",
    soft: "bg-blue-50",
    text: "text-blue-700",
  },
  sky: {
    folder: "from-sky-700 via-sky-600 to-cyan-500",
    border: "border-sky-200",
    soft: "bg-sky-50",
    text: "text-sky-700",
  },
  slate: {
    folder: "from-slate-900 via-slate-800 to-slate-700",
    border: "border-slate-300",
    soft: "bg-slate-100",
    text: "text-slate-700",
  },
  indigo: {
    folder: "from-indigo-800 via-indigo-700 to-blue-600",
    border: "border-indigo-200",
    soft: "bg-indigo-50",
    text: "text-indigo-700",
  },
  violet: {
    folder: "from-violet-800 via-violet-700 to-indigo-600",
    border: "border-violet-200",
    soft: "bg-violet-50",
    text: "text-violet-700",
  },
  cyan: {
    folder: "from-cyan-800 via-cyan-700 to-blue-600",
    border: "border-cyan-200",
    soft: "bg-cyan-50",
    text: "text-cyan-700",
  },
};

function getScreenshotUrl(project) {
  if (!project.websiteUrl || project.websiteUrl === "#") return null;

  return `https://image.thum.io/get/width/1400/crop/900/noanimate/${project.websiteUrl}`;
}

function ArrowIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
      fill="none"
      viewBox="0 0 20 20"
    >
      <path
        d="M4.5 10h11m-4.25-4.25L15.5 10l-4.25 4.25"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.7"
      />
    </svg>
  );
}

function ExternalIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-4 w-4"
      fill="none"
      viewBox="0 0 20 20"
    >
      <path
        d="M11 4h5v5M9 11l7-7"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.7"
      />
      <path
        d="M16 11v3.5A1.5 1.5 0 0 1 14.5 16h-9A1.5 1.5 0 0 1 4 14.5v-9A1.5 1.5 0 0 1 5.5 4H9"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.7"
      />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-5 w-5"
      fill="none"
      viewBox="0 0 20 20"
    >
      <path
        d="m5 5 10 10M15 5 5 15"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.7"
      />
    </svg>
  );
}

function BlueprintFallback({ project, compact = false }) {
  return (
    <div className="relative h-full min-h-full overflow-hidden bg-gradient-to-br from-blue-100 via-blue-50 to-white">
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            "linear-gradient(rgba(37,99,235,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(37,99,235,0.06) 1px, transparent 1px)",
          backgroundSize: compact ? "22px 22px" : "28px 28px",
        }}
      />

      <div className="absolute inset-4 border border-blue-200 bg-white/80 p-4 backdrop-blur-sm">
        <p className="text-[0.55rem] font-extrabold uppercase tracking-[0.16em] text-blue-700">
          {project.category}
        </p>

        <div className="mt-4 h-3 w-4/5 rounded-full bg-slate-950" />
        <div className="mt-2 h-3 w-1/2 rounded-full bg-slate-950" />

        <div className="mt-5 h-1.5 w-full rounded-full bg-slate-200" />
        <div className="mt-2 h-1.5 w-5/6 rounded-full bg-slate-200" />

        <div className="mt-5 grid grid-cols-2 gap-2">
          <span className="h-10 bg-blue-100" />
          <span className="h-10 bg-slate-100" />
          <span className="h-10 bg-slate-100" />
          <span className="h-10 bg-blue-100" />
        </div>
      </div>
    </div>
  );
}

function ProjectScreenshot({ project, compact = false }) {
  const [failed, setFailed] = useState(false);
  const screenshotUrl = getScreenshotUrl(project);

  if (!screenshotUrl || failed) {
    return <BlueprintFallback project={project} compact={compact} />;
  }

  return (
    <img
      src={screenshotUrl}
      alt={`${project.title} website preview`}
      loading="lazy"
      onError={() => setFailed(true)}
      className="h-full w-full object-cover object-top"
    />
  );
}

function ProjectFolder({ project, active, dimmed, onOpen }) {
  const styles = colorStyles[project.color];

  return (
    <button
      type="button"
      onClick={onOpen}
      aria-expanded={active}
      className={`group relative block w-full pt-8 text-left outline-none transition duration-500 focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-4 ${
        dimmed ? "scale-[0.985] opacity-45" : "opacity-100"
      }`}
    >
      <div
        className={`relative mx-auto min-h-[19rem] w-full max-w-[36rem] transition duration-500 sm:min-h-[20rem] ${
          active ? "-translate-y-2" : "group-hover:-translate-y-2"
        }`}
      >
        <div
          className={`absolute left-[6%] right-[6%] top-0 h-[13.5rem] overflow-hidden border bg-white shadow-[0_14px_35px_rgba(15,23,42,0.12)] transition duration-500 sm:h-[14.25rem] ${styles.border} ${
            active
              ? "-translate-y-7 -rotate-1"
              : "translate-y-3 -rotate-1 group-hover:-translate-y-4"
          }`}
        >
          <div className="flex h-9 items-center justify-between border-b border-slate-200 bg-white/95 px-4">
            <span
              className={`text-[0.56rem] font-extrabold uppercase tracking-[0.17em] ${styles.text}`}
            >
              File {project.fileNumber}
            </span>

            <span className="h-1.5 w-14 rounded-full bg-slate-200" />
          </div>

          <div className="h-[calc(100%-2.25rem)]">
            <ProjectScreenshot project={project} compact />
          </div>
        </div>

        <div
          className={`absolute inset-x-0 bottom-0 min-h-[13.5rem] bg-gradient-to-br p-5 text-white shadow-[0_22px_65px_rgba(15,23,42,0.22)] transition duration-500 sm:min-h-[14rem] sm:p-6 ${styles.folder}`}
        >
          <div
            className={`absolute -top-7 left-0 h-8 w-[47%] bg-gradient-to-br ${styles.folder}`}
          />

          <div className="file-light absolute inset-x-0 top-0 h-px overflow-hidden bg-white/20">
            <span className="block h-full w-1/3 bg-white" />
          </div>

          <div className="flex min-h-[10.5rem] flex-col sm:min-h-[11rem]">
            <div className="flex items-start justify-between gap-3">
              <div className="min-w-0">
                <p className="truncate text-[0.58rem] font-extrabold uppercase tracking-[0.17em] text-white/65">
                  {project.category}
                </p>

                <p className="mt-1 truncate text-xs font-bold text-white/70">
                  {project.type}
                </p>
              </div>

              <span className="inline-flex shrink-0 items-center gap-2 border border-white/15 bg-white/10 px-2.5 py-1.5 text-[0.55rem] font-extrabold uppercase tracking-[0.11em]">
                <span
                  className={`h-1.5 w-1.5 rounded-full ${
                    project.status === "Live"
                      ? "bg-emerald-300"
                      : "bg-blue-200"
                  }`}
                />
                {project.status}
              </span>
            </div>

            <div className="mt-auto pt-6">
              <h2 className="max-w-full text-[1.35rem] font-black leading-[1.05] tracking-[-0.045em] sm:text-2xl">
                {project.title}
              </h2>

              <span className="mt-4 inline-flex items-center gap-2 text-xs font-extrabold">
                {active ? "File selected" : "Open project"}
                <ArrowIcon />
              </span>
            </div>
          </div>
        </div>
      </div>
    </button>
  );
}

function BrowserPreview({ project }) {
  const live = project.websiteUrl && project.websiteUrl !== "#";

  return (
    <div className="overflow-hidden border border-blue-200 bg-white shadow-[0_24px_70px_rgba(15,23,42,0.12)]">
      <div className="flex h-10 items-center gap-3 border-b border-slate-200 bg-slate-50 px-3">
        <div className="flex gap-1.5">
          <span className="h-2 w-2 rounded-full bg-slate-300" />
          <span className="h-2 w-2 rounded-full bg-slate-300" />
          <span className="h-2 w-2 rounded-full bg-slate-300" />
        </div>

        <p className="min-w-0 flex-1 truncate text-center text-[0.58rem] font-bold text-slate-500">
          {live
            ? project.websiteUrl.replace("https://", "")
            : `${project.id}.techuvo.file`}
        </p>
      </div>

      <div className="relative h-[18rem] overflow-hidden sm:h-[22rem] lg:h-[26rem]">
        <ProjectScreenshot project={project} />

        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-slate-950/20 to-transparent" />

        <div className="blueprint-scan pointer-events-none absolute inset-x-0 top-0 h-px bg-blue-500 shadow-[0_0_16px_4px_rgba(37,99,235,0.3)]" />
      </div>
    </div>
  );
}

function OpenFile({ project, onClose }) {
  const styles = colorStyles[project.color];
  const live = project.websiteUrl && project.websiteUrl !== "#";

  return (
    <section className="open-file relative scroll-mt-28 overflow-hidden border-y border-blue-200 bg-blue-50/60">
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-55"
        style={{
          backgroundImage:
            "linear-gradient(rgba(37,99,235,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(37,99,235,0.06) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative mx-auto max-w-[100rem] px-5 py-10 sm:px-8 sm:py-12 lg:px-12 lg:py-14">
        <div className="flex items-start justify-between gap-5 border-b border-blue-200 pb-5">
          <div>
            <p className="text-[0.6rem] font-extrabold uppercase tracking-[0.18em] text-blue-700">
              Open file {project.fileNumber}
            </p>

            <h2 className="mt-2 max-w-4xl text-3xl font-black tracking-[-0.055em] text-slate-950 sm:text-4xl">
              {project.title}
            </h2>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close project file"
            className="grid h-10 w-10 shrink-0 place-items-center border border-slate-300 bg-white text-slate-950 transition hover:bg-slate-950 hover:text-white"
          >
            <CloseIcon />
          </button>
        </div>

        <div className="mt-7 grid gap-8 xl:grid-cols-[0.72fr_1.45fr_0.72fr] xl:items-start">
          <div>
            <p className="text-[0.6rem] font-extrabold uppercase tracking-[0.17em] text-slate-500">
              Project brief
            </p>

            <p className="mt-3 text-sm leading-7 text-slate-700">
              {project.brief}
            </p>

            <dl className="mt-6 border-t border-slate-300 pt-4">
              {[
                ["Industry", project.category],
                ["Location", project.location],
                ["Type", project.type],
                ["Status", project.status],
              ].map(([label, value]) => (
                <div
                  key={label}
                  className="grid grid-cols-[5rem_1fr] gap-3 border-b border-slate-200 py-3"
                >
                  <dt className="text-xs font-bold text-slate-400">
                    {label}
                  </dt>
                  <dd className="text-xs font-extrabold text-slate-800">
                    {value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <BrowserPreview project={project} />

          <div>
            <p
              className={`text-[0.6rem] font-extrabold uppercase tracking-[0.17em] ${styles.text}`}
            >
              Techuvo build
            </p>

            <p className="mt-3 text-sm leading-7 text-slate-700">
              {project.build}
            </p>

            <div className="mt-6 border-t border-slate-300 pt-4">
              <p className="text-[0.6rem] font-extrabold uppercase tracking-[0.17em] text-slate-500">
                Included
              </p>

              <div className="mt-4 space-y-2.5">
                {project.capabilities.map((capability, index) => (
                  <div
                    key={capability}
                    className="grid grid-cols-[1.75rem_1fr] gap-2 border-b border-slate-200 pb-2.5"
                  >
                    <span
                      className={`text-[0.62rem] font-black ${styles.text}`}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="text-xs font-bold leading-5 text-slate-700">
                      {capability}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 grid gap-2.5">
              {live ? (
                <a
                  href={project.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex min-h-11 items-center justify-center gap-2 bg-blue-600 px-4 text-xs font-extrabold text-white transition hover:-translate-y-0.5 hover:bg-blue-700"
                >
                  Visit live website
                  <ExternalIcon />
                </a>
              ) : (
                <span className="inline-flex min-h-11 items-center justify-center border border-slate-300 bg-white px-4 text-center text-xs font-extrabold text-slate-500">
                  Public link unavailable
                </span>
              )}

              <Link
                to="/contact"
                className="group inline-flex min-h-11 items-center justify-center gap-2 border border-slate-300 bg-white px-4 text-xs font-extrabold text-slate-950 transition hover:border-blue-300 hover:bg-blue-50"
              >
                Build something similar
                <ArrowIcon />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ReservedFile() {
  return (
    <Link
      to="/contact"
      className="group relative mt-8 flex min-h-[19rem] flex-col overflow-hidden border border-dashed border-blue-300 bg-blue-50/70 p-6 transition duration-500 hover:-translate-y-2 hover:border-blue-600 hover:shadow-[0_24px_65px_rgba(37,99,235,0.14)]"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            "linear-gradient(rgba(37,99,235,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(37,99,235,0.06) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="relative flex h-full flex-1 flex-col">
        <div className="flex items-center justify-between">
          <p className="text-[0.58rem] font-extrabold uppercase tracking-[0.18em] text-blue-700">
            File 007
          </p>

          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-40" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-blue-600" />
          </span>
        </div>

        <div className="my-auto py-6">
          <p className="text-[0.58rem] font-extrabold uppercase tracking-[0.18em] text-slate-500">
            Reserved
          </p>

          <h2 className="mt-3 text-3xl font-black tracking-[-0.055em] text-slate-950">
            Your business belongs here.
          </h2>

          <p className="mt-4 text-sm leading-7 text-slate-600">
            Start the next Techuvo project file.
          </p>
        </div>

        <span className="inline-flex items-center gap-2 text-xs font-extrabold text-blue-700">
          Create your file
          <ArrowIcon />
        </span>
      </div>
    </Link>
  );
}

function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeProjectId, setActiveProjectId] = useState(null);

  const filteredProjects = useMemo(() => {
    if (activeCategory === "All") return projects;

    return projects.filter(
      (project) => project.category === activeCategory,
    );
  }, [activeCategory]);

  const activeProject = projects.find(
    (project) => project.id === activeProjectId,
  );

  useEffect(() => {
    const previousTitle = document.title;
    document.title = "Techuvo File Room | Website Design Portfolio";

    const description =
      "Explore the Techuvo File Room, featuring responsive websites and digital projects created for automotive, education, care, media, and publishing businesses.";

    let metaDescription = document.querySelector(
      'meta[name="description"]',
    );

    const createdDescription = !metaDescription;

    if (!metaDescription) {
      metaDescription = document.createElement("meta");
      metaDescription.setAttribute("name", "description");
      document.head.appendChild(metaDescription);
    }

    const previousDescription = metaDescription.getAttribute("content");
    metaDescription.setAttribute("content", description);

    let canonical = document.querySelector('link[rel="canonical"]');
    const createdCanonical = !canonical;

    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }

    const previousCanonical = canonical.getAttribute("href");
    canonical.setAttribute("href", "https://techuvo.dev/portfolio");

    return () => {
      document.title = previousTitle;

      if (createdDescription) {
        metaDescription.remove();
      } else if (previousDescription !== null) {
        metaDescription.setAttribute("content", previousDescription);
      } else {
        metaDescription.removeAttribute("content");
      }

      if (createdCanonical) {
        canonical.remove();
      } else if (previousCanonical !== null) {
        canonical.setAttribute("href", previousCanonical);
      } else {
        canonical.removeAttribute("href");
      }
    };
  }, []);

  useEffect(() => {
    if (!activeProjectId) return undefined;

    const timeout = window.setTimeout(() => {
      document.getElementById("open-file")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 120);

    return () => window.clearTimeout(timeout);
  }, [activeProjectId]);

  return (
    <main className="overflow-hidden bg-white">
      <section className="relative border-b border-blue-200 bg-blue-50/45">
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-65"
          style={{
            backgroundImage:
              "linear-gradient(rgba(37,99,235,0.055) 1px, transparent 1px), linear-gradient(90deg, rgba(37,99,235,0.055) 1px, transparent 1px)",
            backgroundSize: "38px 38px",
          }}
        />

        <div className="file-room-scan pointer-events-none absolute inset-x-0 top-0 z-20 h-px bg-blue-500 shadow-[0_0_28px_7px_rgba(37,99,235,0.26)]" />

        <div className="relative mx-auto max-w-[100rem] px-5 pb-9 pt-12 sm:px-8 sm:pb-11 sm:pt-14 lg:px-12 lg:pb-12 lg:pt-16">
          <div className="grid gap-7 lg:grid-cols-[1fr_0.72fr] lg:items-end">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-px w-9 bg-blue-600" />

                <p className="text-[0.62rem] font-extrabold uppercase tracking-[0.2em] text-blue-700">
                  Archive online
                </p>
              </div>

              <h1 className="mt-5 max-w-[11ch] text-5xl font-black leading-[0.91] tracking-[-0.07em] text-slate-950 sm:text-6xl lg:text-7xl">
                The Techuvo File Room.
              </h1>
            </div>

            <div>
              <p className="max-w-xl text-lg font-bold leading-8 tracking-[-0.02em] text-slate-900">
                Open the project files behind businesses we helped strengthen
                online.
              </p>

              <p className="mt-3 max-w-xl text-sm leading-7 text-slate-600">
                Select a folder to see the problem, the build, and the finished
                digital blueprint.
              </p>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-px border border-blue-200 bg-blue-200 sm:grid-cols-4">
            {[
              ["06", "Projects"],
              ["05", "Industries"],
              ["03", "Live"],
              ["01", "Reserved"],
            ].map(([value, label]) => (
              <div key={label} className="bg-white/85 px-4 py-3.5">
                <p className="text-2xl font-black tracking-[-0.05em] text-slate-950">
                  {value}
                </p>

                <p className="mt-1 text-[0.55rem] font-extrabold uppercase tracking-[0.15em] text-slate-500">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-10 sm:py-12 lg:py-14">
        <div className="mx-auto max-w-[100rem] px-5 sm:px-8 lg:px-12">
          <div className="grid gap-5 border-b border-slate-200 pb-5 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="text-[0.62rem] font-extrabold uppercase tracking-[0.18em] text-blue-700">
                Project index
              </p>

              <h2 className="mt-2 text-3xl font-black tracking-[-0.05em] text-slate-950 sm:text-4xl">
                Select a file.
              </h2>
            </div>

            <div
              role="tablist"
              aria-label="Portfolio categories"
              className="flex gap-2 overflow-x-auto pb-1"
            >
              {categories.map((category) => {
                const active = activeCategory === category;

                return (
                  <button
                    key={category}
                    type="button"
                    role="tab"
                    aria-selected={active}
                    onClick={() => {
                      setActiveCategory(category);
                      setActiveProjectId(null);
                    }}
                    className={`shrink-0 border px-3.5 py-2 text-[0.6rem] font-extrabold uppercase tracking-[0.11em] transition ${
                      active
                        ? "border-blue-600 bg-blue-600 text-white"
                        : "border-slate-200 bg-white text-slate-500 hover:border-blue-300 hover:text-blue-700"
                    }`}
                  >
                    {category}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="mt-5 grid items-stretch gap-x-6 gap-y-8 md:grid-cols-2 xl:grid-cols-3">
            {filteredProjects.map((project) => (
              <ProjectFolder
                key={project.id}
                project={project}
                active={activeProjectId === project.id}
                dimmed={
                  Boolean(activeProjectId) && activeProjectId !== project.id
                }
                onOpen={() => setActiveProjectId(project.id)}
              />
            ))}

            {activeCategory === "All" && <ReservedFile />}
          </div>
        </div>
      </section>

      {activeProject && (
        <div id="open-file">
          <OpenFile
            project={activeProject}
            onClose={() => setActiveProjectId(null)}
          />
        </div>
      )}

      <section className="relative overflow-hidden bg-slate-950 text-white">
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)",
            backgroundSize: "42px 42px",
          }}
        />

        <div className="relative mx-auto grid max-w-[100rem] gap-7 px-5 py-12 sm:px-8 sm:py-14 lg:grid-cols-[1fr_auto] lg:items-center lg:px-12">
          <div>
            <p className="text-[0.62rem] font-extrabold uppercase tracking-[0.18em] text-blue-300">
              File 007
            </p>

            <h2 className="mt-3 max-w-3xl text-4xl font-black tracking-[-0.06em] sm:text-5xl">
              Reserve the next file for your business.
            </h2>
          </div>

          <div className="grid gap-2.5">
            <Link
              to="/contact"
              className="group inline-flex min-h-12 items-center justify-center gap-2 bg-white px-6 text-xs font-extrabold text-blue-700 transition hover:-translate-y-0.5 hover:bg-blue-50"
            >
              Start your project
              <ArrowIcon />
            </Link>

            <Link
              to="/pricing"
              className="group inline-flex min-h-12 items-center justify-center gap-2 border border-white/20 bg-white/5 px-6 text-xs font-extrabold text-white transition hover:bg-white/10"
            >
              Review pricing
              <ArrowIcon />
            </Link>
          </div>
        </div>
      </section>

      <style>
        {`
          @keyframes scanRoom {
            0% { top: 0%; opacity: 0; }
            10% { opacity: 1; }
            90% { opacity: 1; }
            100% { top: 100%; opacity: 0; }
          }

          @keyframes scanBlueprint {
            0% { top: 0%; opacity: 0; }
            12% { opacity: 1; }
            88% { opacity: 1; }
            100% { top: 100%; opacity: 0; }
          }

          @keyframes openFile {
            from { opacity: 0; transform: translateY(24px); }
            to { opacity: 1; transform: translateY(0); }
          }

          @keyframes moveFileLight {
            from { transform: translateX(-140%); }
            to { transform: translateX(430%); }
          }

          .file-room-scan {
            animation: scanRoom 1.4s ease-in-out forwards;
          }

          .blueprint-scan {
            animation: scanBlueprint 4.6s ease-in-out infinite;
          }

          .open-file {
            animation: openFile 0.55s ease-out both;
          }

          .file-light span {
            animation: moveFileLight 3.2s ease-in-out infinite;
          }

          @media (max-width: 639px) {
            .file-room-scan,
            .blueprint-scan {
              opacity: 0.65;
            }
          }

          @media (prefers-reduced-motion: reduce) {
            .file-room-scan,
            .blueprint-scan,
            .open-file,
            .file-light span {
              animation: none;
            }
          }
        `}
      </style>
    </main>
  );
}

export default Portfolio;