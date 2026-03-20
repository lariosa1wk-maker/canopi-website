import { useState, useEffect, useCallback } from "react";
import "@/App.css";
import {
  Clock, CalendarRange, TrendingUp,
  Database, Cpu, BarChart3,
  Users, Coins,
  ArrowRight, ChevronDown,
  Linkedin, Github, Mail,
  Menu, X, ExternalLink,
  Map, Layers, DollarSign, BellRing
} from "lucide-react";



/* ========================================================
   LOGO — Dotted Signal Network "C"
   ======================================================== */
const CanopiLogo = ({ light = false }) => {
  const c = light ? "#CCBA9C" : "#1C3D2C";
  return (
    <svg width="34" height="34" viewBox="0 0 48 48" fill="none" aria-hidden="true">
      {/* Outer C-arc — 9 dots from upper-right to lower-right, opening on the right */}
      <circle cx="32" cy="9"  r="3"   fill={c} />
      <circle cx="24" cy="7"  r="2.5" fill={c} />
      <circle cx="15" cy="9"  r="2.5" fill={c} />
      <circle cx="9"  cy="15" r="2.5" fill={c} opacity="0.85" />
      <circle cx="7"  cy="24" r="3"   fill={c} />
      <circle cx="9"  cy="33" r="2.5" fill={c} opacity="0.85" />
      <circle cx="16" cy="39" r="2.5" fill={c} />
      <circle cx="24" cy="41" r="2.5" fill={c} />
      <circle cx="32" cy="39" r="3"   fill={c} />
      {/* Inner signal network dots */}
      <circle cx="18" cy="19" r="1.8" fill={c} opacity="0.6" />
      <circle cx="17" cy="29" r="1.8" fill={c} opacity="0.6" />
      <circle cx="22" cy="24" r="1.4" fill={c} opacity="0.35" />
      {/* Signal connections */}
      <line x1="7"  y1="24" x2="18" y2="19" stroke={c} strokeWidth="0.7" strokeDasharray="2 2" opacity="0.4" />
      <line x1="18" y1="19" x2="17" y2="29" stroke={c} strokeWidth="0.7" strokeDasharray="2 2" opacity="0.35" />
      <line x1="17" y1="29" x2="7"  y2="24" stroke={c} strokeWidth="0.5" strokeDasharray="2 2" opacity="0.2" />
      <line x1="18" y1="19" x2="22" y2="24" stroke={c} strokeWidth="0.5" strokeDasharray="1.5 2" opacity="0.25" />
      <line x1="22" y1="24" x2="17" y2="29" stroke={c} strokeWidth="0.5" strokeDasharray="1.5 2" opacity="0.25" />
    </svg>
  );
};

/* ========================================================
   HERO VISUALIZATION — Abstract Data Network
   ======================================================== */
const HeroViz = () => {
  const fc = "#CCBA9C";
  const sc = "#6F8F75";
  const mc = "#8BAFC2";
  return (
    <svg viewBox="0 0 500 500" className="hero-viz-svg" aria-hidden="true">
      {/* Concentric contour rings */}
      <circle cx="250" cy="250" r="220" stroke={fc} strokeWidth="0.5" fill="none" opacity="0.06" />
      <circle cx="250" cy="250" r="170" stroke={fc} strokeWidth="0.5" fill="none" opacity="0.08" />
      <circle cx="250" cy="250" r="120" stroke={fc} strokeWidth="0.6" fill="none" opacity="0.1" />
      <circle cx="250" cy="250" r="70" stroke={fc} strokeWidth="0.6" fill="none" opacity="0.12" />

      {/* Topographic curves */}
      <path d="M80,300 Q180,230 280,270 Q380,310 450,260" stroke={fc} strokeWidth="0.7" fill="none" opacity="0.08" />
      <path d="M60,340 Q160,280 260,310 Q360,340 460,290" stroke={fc} strokeWidth="0.7" fill="none" opacity="0.06" />
      <path d="M100,200 Q200,160 300,190 Q400,220 480,180" stroke={fc} strokeWidth="0.7" fill="none" opacity="0.07" />

      {/* Risk prediction zones */}
      <ellipse cx="180" cy="200" rx="70" ry="50" fill={mc} opacity="0.08" />
      <ellipse cx="340" cy="300" rx="55" ry="40" fill={sc} opacity="0.08" />
      <ellipse cx="260" cy="170" rx="40" ry="30" fill={mc} opacity="0.06" />

      {/* Connection lines */}
      <line x1="140" y1="180" x2="200" y2="220" stroke={fc} strokeWidth="0.7" strokeDasharray="4 3" opacity="0.15" />
      <line x1="200" y1="220" x2="280" y2="200" stroke={fc} strokeWidth="0.7" strokeDasharray="4 3" opacity="0.15" />
      <line x1="280" y1="200" x2="340" y2="260" stroke={fc} strokeWidth="0.7" strokeDasharray="4 3" opacity="0.12" />
      <line x1="340" y1="260" x2="380" y2="310" stroke={fc} strokeWidth="0.7" strokeDasharray="4 3" opacity="0.12" />
      <line x1="200" y1="220" x2="240" y2="310" stroke={fc} strokeWidth="0.5" strokeDasharray="3 4" opacity="0.1" />
      <line x1="160" y1="320" x2="240" y2="310" stroke={fc} strokeWidth="0.5" strokeDasharray="3 4" opacity="0.1" />
      <line x1="340" y1="260" x2="300" y2="350" stroke={fc} strokeWidth="0.5" strokeDasharray="3 4" opacity="0.1" />
      <line x1="120" y1="260" x2="140" y2="180" stroke={fc} strokeWidth="0.5" strokeDasharray="3 4" opacity="0.1" />
      <line x1="380" y1="180" x2="280" y2="200" stroke={fc} strokeWidth="0.5" strokeDasharray="3 4" opacity="0.08" />

      {/* Data nodes — primary */}
      <circle cx="140" cy="180" r="4" fill={fc} className="node-pulse node-pulse-1" />
      <circle cx="200" cy="220" r="5" fill={fc} className="node-pulse node-pulse-2" />
      <circle cx="280" cy="200" r="4" fill={fc} className="node-pulse node-pulse-3" />
      <circle cx="340" cy="260" r="5" fill={fc} className="node-pulse node-pulse-4" />
      <circle cx="380" cy="310" r="4" fill={fc} className="node-pulse node-pulse-5" />

      {/* Data nodes — secondary */}
      <circle cx="240" cy="310" r="3" fill={fc} opacity="0.35" />
      <circle cx="160" cy="320" r="3" fill={fc} opacity="0.3" />
      <circle cx="300" cy="350" r="3" fill={fc} opacity="0.3" />
      <circle cx="120" cy="260" r="3" fill={fc} opacity="0.25" />
      <circle cx="380" cy="180" r="3" fill={fc} opacity="0.25" />
      <circle cx="310" cy="140" r="2.5" fill={fc} opacity="0.2" />
      <circle cx="170" cy="140" r="2.5" fill={fc} opacity="0.2" />
      <circle cx="420" cy="240" r="2.5" fill={fc} opacity="0.15" />
      <circle cx="90" cy="220" r="2.5" fill={fc} opacity="0.15" />

      {/* Accent highlights — risk areas */}
      <circle cx="200" cy="220" r="12" fill={mc} opacity="0.12" className="node-pulse-accent node-pulse-2" />
      <circle cx="340" cy="260" r="10" fill={sc} opacity="0.1" className="node-pulse-accent node-pulse-4" />
    </svg>
  );
};

/* ========================================================
   SCROLL REVEAL HOOK
   ======================================================== */
const useScrollReveal = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );
    const elements = document.querySelectorAll(".reveal");
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
};

/* ========================================================
   SMOOTH SCROLL HELPER
   ======================================================== */
const scrollTo = (id) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
};

/* ========================================================
   NAVBAR
   ======================================================== */
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = useCallback((id) => {
    scrollTo(id);
    setMobileOpen(false);
  }, []);

  const links = [
    { label: "Problem", id: "problem" },
    { label: "Solution", id: "solution" },
    { label: "Platform", id: "platform" },
    { label: "About", id: "founder" },
  ];

  return (
    <>
      <nav
        className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}
        data-testid="navbar"
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="canopi-container navbar__inner">
          <button
            className="navbar__logo"
            onClick={() => scrollTo("hero")}
            data-testid="navbar-logo"
            aria-label="Scroll to top"
          >
            <CanopiLogo light={!scrolled} />
            <span>Canopi</span>
          </button>

          <div className="navbar__links">
            {links.map((l) => (
              <button
                key={l.id}
                className="navbar__link"
                onClick={() => handleNav(l.id)}
                data-testid={`nav-link-${l.id}`}
              >
                {l.label}
              </button>
            ))}
            <button
              className="navbar__cta"
              onClick={() => handleNav("waitlist")}
              data-testid="nav-cta-waitlist"
            >
              Join Waitlist
            </button>
          </div>

          <button
            className="navbar__mobile-toggle"
            onClick={() => setMobileOpen(true)}
            data-testid="mobile-menu-toggle"
            aria-label="Open menu"
          >
            <Menu size={22} />
          </button>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      <div
        className={`mobile-menu__overlay ${mobileOpen ? "mobile-menu__overlay--open" : ""}`}
        onClick={() => setMobileOpen(false)}
        aria-hidden="true"
      />
      <div
        className={`mobile-menu ${mobileOpen ? "mobile-menu--open" : ""}`}
        data-testid="mobile-menu"
        role="dialog"
        aria-label="Mobile navigation"
      >
        <button
          className="mobile-menu__close"
          onClick={() => setMobileOpen(false)}
          data-testid="mobile-menu-close"
          aria-label="Close menu"
        >
          <X size={22} />
        </button>
        {links.map((l) => (
          <button
            key={l.id}
            className="mobile-menu__link"
            onClick={() => handleNav(l.id)}
            data-testid={`mobile-link-${l.id}`}
          >
            {l.label}
          </button>
        ))}
        <button
          className="mobile-menu__link"
          onClick={() => handleNav("waitlist")}
          data-testid="mobile-link-waitlist"
          style={{ fontWeight: 500 }}
        >
          Join Waitlist
        </button>
      </div>
    </>
  );
};

/* ========================================================
   HERO
   ======================================================== */
const Hero = () => (
  <section id="hero" className="hero" data-testid="hero-section">
    <div className="hero__bg-pattern" aria-hidden="true" />
    <div className="canopi-container hero__inner">
      <div className="hero__content">
        <p className="hero__tagline reveal">Predict. Protect. Regrow.</p>
        <h1 className="hero__title reveal reveal-d1" data-testid="hero-title">
          Predictive Intelligence for Reforestation
        </h1>
        <p className="hero__subtitle reveal reveal-d2">
          Canopi forecasts survival risk from 30 days to 5 years, so
          reforestation teams can intervene before plots fail, not after.
        </p>
        <div className="hero__actions reveal reveal-d3">
          <button
            className="btn-primary"
            onClick={() => scrollTo("waitlist")}
            data-testid="hero-cta-waitlist"
          >
            Join the Waitlist <ArrowRight size={16} />
          </button>
          <button
            className="btn-secondary"
            onClick={() => scrollTo("problem")}
            data-testid="hero-cta-learn"
          >
            Learn More <ChevronDown size={16} />
          </button>
        </div>
      </div>
      <div className="hero__viz reveal reveal-d2">
        <HeroViz />
      </div>
    </div>
    <div className="hero__scroll-hint" aria-hidden="true">
      <ChevronDown size={18} />
    </div>
  </section>
);

/* ========================================================
   PROBLEM
   ======================================================== */
const Problem = () => (
  <section
    id="problem"
    className="canopi-section canopi-section--dark problem"
    data-testid="problem-section"
  >
    <div className="canopi-container">
      <p className="section-label section-label--light reveal">The Problem</p>
      <div className="problem__content">
        <h2 className="problem__title reveal reveal-d1">
          Reforestation monitoring tells you what already happened — not what&apos;s about to.
        </h2>
        <p className="problem__text reveal reveal-d2">
          Projects span thousands of acres over years-long timescales, but the
          data pipeline is built around periodic snapshots, not continuous
          intelligence. By the time satellite imagery or field audits flag
          survival issues, trees have already died, carbon credits are already
          at risk, and project developers are absorbing losses they
          couldn&apos;t have predicted — or prevented.
        </p>
        <p className="problem__text reveal reveal-d2" style={{ marginTop: '1.25rem' }}>
          There is no forward-looking layer connecting environmental signals to
          intervention decisions.
        </p>
      </div>
      <div className="problem__stats">
        <div className="problem__stat reveal reveal-d1" data-testid="problem-stat-1">
          <div className="problem__stat-icon">
            <Clock size={22} />
          </div>
          <p className="problem__stat-label">
            Check-ins months apart, separated by entire seasons or limited due to high costs.
          </p>
        </div>
        <div className="problem__stat reveal reveal-d2" data-testid="problem-stat-2">
          <div className="problem__stat-icon">
            <BarChart3 size={22} />
          </div>
          <p className="problem__stat-label">
            Decline goes undetected, intervention comes too late, losses are already locked in.
          </p>
        </div>
        <div className="problem__stat reveal reveal-d3" data-testid="problem-stat-3">
          <div className="problem__stat-icon">
            <Coins size={22} />
          </div>
          <p className="problem__stat-label">
            Carbon credits go unissued, project developers absorb losses,
            credit buyers lose confidence.
          </p>
        </div>
      </div>
    </div>
  </section>
);

/* ========================================================
   SOLUTION
   ======================================================== */
const solutionCards = [
  {
    icon: <Clock size={22} />,
    iconClass: "solution-card__icon--near",
    horizon: "30–90 Days",
    title: "Near-Term Risk Alerts",
    desc: "See which plots are trending toward failure right now. The Explorer heatmap surfaces drought stress, soil conditions, and temperature anomalies, calibrated to planting method so teams can target intervention before the next audit, not after it.",
  },
  {
    icon: <CalendarRange size={22} />,
    iconClass: "solution-card__icon--seasonal",
    horizon: "Seasonal",
    title: "Species & Site Intelligence",
    desc: "Assess how survival probability shifts across growing seasons by region. Identify which species and planting approaches are best suited to specific geographies, and where resources should be concentrated to protect the highest-value areas.",
  },
  {
    icon: <TrendingUp size={22} />,
    iconClass: "solution-card__icon--multi",
    horizon: "Up to 5 Years",
    title: "Carbon Credit Exposure",
    desc: "Model how survival trajectories translate into credits at risk and revenue impact. See how planting method, climate scenarios, and carbon pricing shape long-range outcomes so strategy is tied to financial reality, not assumptions.",
  },
];

const Solution = () => (
  <section
    id="solution"
    className="canopi-section canopi-section--alt"
    data-testid="solution-section"
  >
    <div className="canopi-container">
      <div className="solution__header">
        <p className="section-label reveal">The Solution</p>
        <h2 className="solution__title reveal reveal-d1">
          Prediction is the missing layer
        </h2>
        <p className="solution__subtitle reveal reveal-d2">
          Canopi forecasts survival risk across three time horizons —
          calibrated to species, site conditions, and how trees were planted.
          Whether plots were hand-planted or drone-seeded, predictions reflect
          the survival dynamics that actually apply.
        </p>
      </div>
      <div className="solution__cards">
        {solutionCards.map((card, i) => (
          <div
            key={card.horizon}
            className={`solution-card reveal reveal-d${i + 1}`}
            data-testid={`solution-card-${i}`}
          >
            <div className={`solution-card__icon ${card.iconClass}`}>
              {card.icon}
            </div>
            <p className="solution-card__horizon">{card.horizon}</p>
            <h3 className="solution-card__title">{card.title}</h3>
            <p className="solution-card__desc">{card.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ========================================================
   PLATFORM
   ======================================================== */
const platformFeatures = [
  {
    icon: <Map size={24} />,
    iconClass: "platform-card__icon--explorer",
    title: "Explorer",
    desc: "A full-screen survival heatmap across all plots and time horizons. Filter by species, slide through 30 days to 5 years, and click any area for a ranked breakdown of risk factors.",
    stretch: false,
  },
  {
    icon: <Layers size={24} />,
    iconClass: "platform-card__icon--region",
    title: "Region",
    desc: "Select a state, county, or custom boundary to see aggregated survival forecasts, top-performing species, and the environmental profile of your target planting area.",
    stretch: false,
  },
  {
    icon: <DollarSign size={24} />,
    iconClass: "platform-card__icon--report",
    title: "Report",
    desc: "Translate survival predictions into financial terms — estimated carbon credits generated, credits at risk, revenue exposure, and the ROI case for intervention before it's too late.",
    stretch: false,
  },
  {
    icon: <BellRing size={24} />,
    iconClass: "platform-card__icon--alerts",
    title: "Intervention Alerts",
    desc: "Proactive, deadline-driven alerts: which plots are declining, when you need to act, and exactly how many credits you recover if you do — turning Canopi from a dashboard into a decision system.",
    stretch: true,
  },
];

const Platform = () => (
  <section
    id="platform"
    className="canopi-section canopi-section--dark"
    data-testid="platform-section"
  >
    <div className="canopi-container">
      <div className="platform__header">
        <p className="section-label reveal">The Platform</p>
        <h2 className="platform__title reveal reveal-d1">
          Four views. One mission.
        </h2>
        <p className="platform__subtitle reveal reveal-d2">
          Every view is designed around a single question reforestation teams
          actually need to answer.
        </p>
      </div>
      <div className="platform__grid">
        {platformFeatures.map((f, i) => (
          <div
            key={f.title}
            className={`platform-card reveal reveal-d${i + 1}${f.stretch ? " platform-card--stretch" : ""}`}
            data-testid={`platform-card-${i}`}
          >
            <div className="platform-card__top">
              <div className={`platform-card__icon ${f.iconClass}`}>
                {f.icon}
              </div>
              <span className="platform-card__label">{f.label}</span>
            </div>
            <h3 className="platform-card__title">{f.title}</h3>
            <p className="platform-card__desc">{f.desc}</p>
            {f.stretch && (
              <span className="platform-card__badge">Coming Soon</span>
            )}
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ========================================================
   HOW IT WORKS
   ======================================================== */
const steps = [
  {
    icon: <Database size={24} />,
    title: "Data Ingestion",
    desc: "We ingest forest inventory, climate, soil, and terrain data from open-source and project-specific sources.",
  },
  {
    icon: <Cpu size={24} />,
    title: "Predictive Modeling",
    desc: "ML models predict survival risk across time horizons — from near-term alerts to multi-year scenarios.",
  },
  {
    icon: <BarChart3 size={24} />,
    title: "Actionable Intelligence",
    desc: "Teams receive decision-grade intelligence tied directly to carbon outcomes and intervention priorities.",
  },
];

const HowItWorks = () => (
  <section
    id="how-it-works"
    className="canopi-section"
    data-testid="how-it-works-section"
  >
    <div className="canopi-container">
      <div className="how__header">
        <p className="section-label reveal">How It Works</p>
        <h2 className="how__title reveal reveal-d1">
          From data to decisions
        </h2>
        <p className="how__subtitle reveal reveal-d2">
          Three steps from raw environmental data to targeted intervention.
        </p>
      </div>
      <div className="how__steps">
        {steps.map((step, i) => (
          <div
            key={step.title}
            className={`how-step reveal reveal-d${i + 1}`}
            data-testid={`how-step-${i}`}
          >
            <div className="how-step__number">{step.icon}</div>
            <h3 className="how-step__title">{step.title}</h3>
            <p className="how-step__desc">{step.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ========================================================
   AUDIENCE
   ======================================================== */
const Audience = () => (
  <section
    id="audience"
    className="canopi-section canopi-section--alt"
    data-testid="audience-section"
  >
    <div className="canopi-container">
      <div className="audience__header">
        <p className="section-label reveal">Who It's For</p>
        <h2 className="audience__title reveal reveal-d1">
          Built for the people accountable for outcomes
        </h2>
      </div>
      <div className="audience__cards">
        <div
          className="audience-card audience-card--primary reveal"
          data-testid="audience-card-primary"
        >
          <span className="audience-card__badge">Primary</span>
          <div className="audience-card__icon">
            <Users size={28} />
          </div>
          <h3 className="audience-card__title">
            Project Managers &amp; Developers
          </h3>
          <p className="audience-card__desc">
            The operators accountable for planting success and survival rates.
            They feel the pain of failed plots directly — in budget overruns,
            missed milestones, and reputational damage.
          </p>
        </div>
        <div
          className="audience-card audience-card--secondary reveal reveal-d1"
          data-testid="audience-card-secondary"
        >
          <span className="audience-card__badge">Secondary</span>
          <div className="audience-card__icon">
            <Coins size={28} />
          </div>
          <h3 className="audience-card__title">
            Carbon Credit Buyers &amp; Investors
          </h3>
          <p className="audience-card__desc">
            Need confidence that the projects they fund will deliver promised
            carbon sequestration. Canopi&apos;s predictive reports are a
            credibility signal for project permanence.
          </p>
        </div>
      </div>
    </div>
  </section>
);

/* ========================================================
   WHY NOW
   ======================================================== */
const whyNowPoints = [
  "Billions flowing into reforestation through carbon markets and government programs — but confidence in project outcomes is low.",
  "dMRV platforms built the data infrastructure for collection and reporting — but the predictive layer on top doesn't exist yet.",
  "Open-source environmental and forest data is more available than ever, making a credible proof of concept possible today.",
  "Climate and permanence risk is increasing. Drought, wildfire, and shifting precipitation patterns make predictive tools essential.",
];

const WhyNow = () => (
  <section
    id="why-now"
    className="canopi-section canopi-section--dark whynow"
    data-testid="why-now-section"
  >
    <div className="canopi-container whynow__inner">
      <div className="whynow__header">
        <p className="section-label section-label--light reveal">Why Now</p>
        <h2 className="whynow__title reveal reveal-d1">
          The timing is critical
        </h2>
        <p className="whynow__subtitle reveal reveal-d2">
          The data infrastructure exists. The prediction layer doesn&apos;t.
          That&apos;s the gap we&apos;re filling.
        </p>
      </div>
      <div className="whynow__points">
        {whyNowPoints.map((point, i) => (
          <div
            key={i}
            className={`whynow-point reveal reveal-d${i + 1}`}
            data-testid={`whynow-point-${i}`}
          >
            <div className="whynow-point__marker">
              <span>{String(i + 1).padStart(2, "0")}</span>
            </div>
            <p className="whynow-point__text">{point}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ========================================================
   FOUNDER
   ======================================================== */
const Founder = () => (
  <section
    id="founder"
    className="canopi-section"
    data-testid="founder-section"
  >
    <div className="canopi-container founder__inner">
      <div className="founder__avatar reveal" data-testid="founder-avatar">
        {/* Placeholder for founder headshot — replace src when available */}
        <span className="founder__avatar-initials" aria-hidden="true">
          AGL
        </span>
      </div>
      <div>
        <p className="founder__label reveal">About the Founder</p>
        <h2 className="founder__name reveal reveal-d1" data-testid="founder-name">
          Gabby Larios
        </h2>
        <p className="founder__bio reveal reveal-d2">
          Gabby has spent nearly a decade building predictive intelligence systems for some of the hardest operating environments — autonomous maritime platforms processing real-time sensor data, edge AI navigation where GPS doesn't exist, and computer vision tools deployed at the edge of connectivity.
Reforestation has been a parallel passion for years. Canopi is where the two converge.
        </p>
        <a
          href="https://www.linkedin.com/in/ana-gabriela-larios"
          target="_blank"
          rel="noopener noreferrer"
          className="founder__link reveal reveal-d3"
          data-testid="founder-linkedin"
          aria-label="Ana Gabriela Larios LinkedIn profile"
        >
          <Linkedin size={16} /> LinkedIn <ExternalLink size={12} />
        </a>
      </div>
    </div>
  </section>
);

/* ========================================================
   WAITLIST
   ======================================================== */
const FORMSPREE_ID = "mreyjwnd"; // Replace with your Formspree form ID from formspree.io

const ROLES = [
  "Reforestation partner",
  "ML / data engineer",
  "Climate investor",
  "Researcher / scientist",
  "Other",
];

const Waitlist = () => {
  const [mode, setMode] = useState("follow"); // "follow" | "involve"
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [status, setStatus] = useState("idle");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !email.includes("@")) return;
    if (mode === "involve" && !role) return;
    setStatus("sending");
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          intent: mode === "follow" ? "Following progress" : "Get involved",
          ...(mode === "involve" && { role }),
        }),
      });
      if (res.ok) {
        setStatus("success");
        setEmail("");
        setRole("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section
      id="waitlist"
      className="canopi-section canopi-section--dark waitlist"
      data-testid="waitlist-section"
    >
      <div className="canopi-container">
        <p className="section-label section-label--light reveal">
          Get Involved
        </p>
        <h2 className="waitlist__title reveal reveal-d1" data-testid="waitlist-title">
          Stay connected with Canopi
        </h2>
        <p className="waitlist__text reveal reveal-d2">
          Whether you want to follow our progress or actively help shape what
          we&apos;re building — we&apos;d love to hear from you.
        </p>

        {status === "success" ? (
          <div className="waitlist__success reveal" data-testid="waitlist-success">
            {mode === "follow"
              ? "You're on the list. We'll keep you posted."
              : "Thanks for reaching out. We'll be in touch soon."}
          </div>
        ) : (
          <>
            <div className="waitlist__tabs reveal reveal-d2">
              <button
                type="button"
                className={`waitlist__tab${mode === "follow" ? " waitlist__tab--active" : ""}`}
                onClick={() => setMode("follow")}
              >
                Follow our progress
              </button>
              <button
                type="button"
                className={`waitlist__tab${mode === "involve" ? " waitlist__tab--active" : ""}`}
                onClick={() => setMode("involve")}
              >
                Get involved
              </button>
            </div>

            <form
              className="waitlist__form reveal reveal-d3"
              onSubmit={handleSubmit}
              data-testid="waitlist-form"
            >
              {mode === "involve" && (
                <select
                  className="waitlist__input waitlist__select"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  required
                  aria-label="How you'd like to help"
                >
                  <option value="" disabled>How would you like to help?</option>
                  {ROLES.map((r) => (
                    <option key={r} value={r}>{r}</option>
                  ))}
                </select>
              )}
              <div className="waitlist__input-row">
                <input
                  type="email"
                  className="waitlist__input"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  aria-label="Email address"
                  data-testid="waitlist-email-input"
                />
                <button
                  type="submit"
                  className="waitlist__submit"
                  disabled={status === "sending"}
                  data-testid="waitlist-submit-btn"
                >
                  {status === "sending" ? "Sending..." : mode === "follow" ? "Stay updated" : "Reach out"}
                </button>
              </div>
            </form>

            {status === "error" && (
              <p className="waitlist__note reveal" style={{ color: "#E6A5A5" }}>
                Something went wrong. Try again or email{" "}
                <a href="mailto:lariosa1.wk@gmail.com" style={{ color: "#E6A5A5" }}>
                  lariosa1.wk@gmail.com
                </a>{" "}
                directly.
              </p>
            )}

            <p className="waitlist__note reveal reveal-d4">
              No spam — just updates on our progress.
            </p>
          </>
        )}
      </div>
    </section>
  );
};

/* ========================================================
   FOOTER
   ======================================================== */
const Footer = () => (
  <footer className="footer" data-testid="footer" role="contentinfo">
    <div className="canopi-container footer__inner">
      <div className="footer__left">
        <p className="footer__copyright">&copy; 2026 Canopi</p>
        <p className="footer__tagline">
          Turning survival risk into actionable intelligence.
        </p>
      </div>
      <div className="footer__social">
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="footer__social-link"
          data-testid="footer-github"
          aria-label="GitHub"
        >
          <Github size={18} />
        </a>
        <a
          href="https://www.linkedin.com/in/ana-gabriela-larios"
          target="_blank"
          rel="noopener noreferrer"
          className="footer__social-link"
          data-testid="footer-linkedin"
          aria-label="LinkedIn"
        >
          <Linkedin size={18} />
        </a>
        <a
          href="mailto:hello@canopi.earth"
          className="footer__social-link"
          data-testid="footer-email"
          aria-label="Email"
        >
          <Mail size={18} />
        </a>
      </div>
    </div>
  </footer>
);

/* ========================================================
   APP
   ======================================================== */
function App() {
  useScrollReveal();

  return (
    <div data-testid="canopi-app">
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <Platform />
        <HowItWorks />
        <Audience />
        <WhyNow />
        <Founder />
        <Waitlist />
      </main>
      <Footer />
    </div>
  );
}

export default App;
