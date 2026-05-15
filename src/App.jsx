import {
  ArrowDownToLine,
  Blocks,
  Check,
  ChevronRight,
  CirclePlay,
  Download,
  ExternalLink,
  Gauge,
  Globe2,
  Headphones,
  MessageCircle, // <--- Agrega este
  MonitorPlay,
  Play,
  Radio,
  RadioTower,
  Satellite,
  ShieldCheck,
  Sparkles,
  Tv,
  Wifi,
  Zap,
} from "lucide-react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
  useTransform,
  useScroll,
} from "framer-motion";

const WEB_APP_URL = import.meta.env.VITE_WEB_APP_URL || "#web-app";

const downloads = [
  {
    platform: "Movil Android",
    title: "OpenStream Mobile .APK",
    description: "Instala la experiencia IPTV en celulares y tablets Android.",
    href: "/downloads/OpenStream-Mobile.apk",
    action: "Descargar APK",
    accent: "from-emerald-300 via-volt to-signal",
    icon: AndroidLogo,
  },
  {
    platform: "Escritorio Windows",
    title: "OpenStream Desktop .EXE",
    description: "Reproductor dedicado para pantallas grandes y uso diario.",
    href: "/downloads/OpenStream-Desktop.exe",
    action: "Descargar EXE",
    accent: "from-volt via-blue-400 to-plasma",
    icon: WindowsLogo,
  },
  {
    platform: "Web App",
    title: "Acceso instantaneo",
    description: "Abre el reproductor desde el navegador, sin instalar nada.",
    href: WEB_APP_URL,
    action: "Lanzar Web App",
    accent: "from-ember via-plasma to-volt",
    icon: Globe2,
    external: WEB_APP_URL.startsWith("http"),
  },
];

const features = [
  {
    title: "Modo TV Inteligente",
    description:
      "Canales predeterminados globales, destacados al instante y una experiencia lista para encender y mirar.",
    icon: Tv,
    size: "lg:col-span-7",
    visual: "signal",
    stats: ["Global", "24/7", "Modo TV"],
  },
  {
    title: "Arquitectura Clean & Rapida",
    description:
      "Flujos optimizados para cargar ligero, responder rapido y mantener la transmision estable.",
    icon: Gauge,
    size: "lg:col-span-5",
    visual: "speed",
    stats: ["Baja latencia", "Sin friccion"],
  },
  {
    title: "Multiplataforma real",
    description:
      "Una marca consistente para Web App, Android y Windows, preparada para crecer sin desorden.",
    icon: Blocks,
    size: "lg:col-span-5",
    visual: "devices",
    stats: ["Web", "APK", "EXE"],
  },
  {
    title: "Senal del Pueblo",
    description:
      "Un producto hecho para acercar contenido, cultura y entretenimiento: por y para el pueblo.",
    icon: RadioTower,
    size: "lg:col-span-7",
    visual: "community",
    stats: ["Cercano", "Simple", "Premium"],
  },
];

const steps = [
  {
    title: "Entra o descarga",
    text: "Abre la Web App o instala la version ideal para tu dispositivo.",
    icon: ArrowDownToLine,
  },
  {
    title: "Explora el catalogo",
    text: "Mira canales, destacados y el Modo TV con navegacion clara.",
    icon: Satellite,
  },
  {
    title: "Disfruta en calidad maxima",
    text: "Reproduccion estable, visual premium y una interfaz pensada para mirar mas.",
    icon: CirclePlay,
  },
];

const quality = [
  "Streaming estable",
  "Interfaz premium",
  "Listo para crecer",
  "Diseno responsive",
];

function App() {
  return (
    <main className="min-h-screen overflow-hidden bg-ink text-white">
      <SignalField />
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <Downloads />
      <Footer />
    </main>
  );
}

function SignalField() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-[radial-gradient(circle_at_50%_0%,rgba(124,58,237,0.18),transparent_28%),linear-gradient(135deg,#050505_0%,#090909_42%,#0f0b10_100%)]">
      <div className="absolute inset-0 opacity-[0.18] [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:54px_54px]" />
      <div className="absolute inset-0 animate-aurora bg-[conic-gradient(from_180deg_at_50%_45%,rgba(34,211,238,0.12),rgba(217,70,239,0.14),rgba(255,122,26,0.12),rgba(34,211,238,0.12))] blur-3xl" />
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black via-black/70 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-52 bg-gradient-to-t from-black via-black/80 to-transparent" />
      <div className="absolute left-1/2 top-0 h-[140vh] w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-volt/50 to-transparent opacity-40" />
    </div>
  );
}

function Navbar() {
  const links = [
    ["Features", "#features"],
    ["Como funciona", "#funciona"],
    ["Descargas", "#descargas"],
  ];

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.65, ease: "easeOut" }}
      className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/42 backdrop-blur-2xl"
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#top" className="group flex items-center gap-3" aria-label="OpenStream inicio">
          <span className="grid h-9 w-9 place-items-center rounded-md border border-white/15 bg-white/10 text-volt shadow-neon-cyan">
            <Radio className="h-5 w-5" />
          </span>
          <span className="font-display text-lg font-bold tracking-[0]">OpenStream</span>
        </a>
        <div className="hidden items-center gap-1 rounded-md border border-white/10 bg-white/[0.035] p-1 md:flex">
          {links.map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="rounded-md px-4 py-2 text-sm font-medium text-white/70 transition hover:bg-white/10 hover:text-white"
            >
              {label}
            </a>
          ))}
        </div>
        <a
          href={WEB_APP_URL}
          className="group inline-flex items-center gap-2 rounded-md border border-volt/40 bg-volt/10 px-4 py-2 text-sm font-semibold text-white shadow-neon-cyan transition hover:border-volt/70 hover:bg-volt/15"
        >
          Abrir
          <ExternalLink className="h-4 w-4 transition group-hover:translate-x-0.5" />
        </a>
      </nav>
    </motion.header>
  );
}

function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 620], [0, -84]);
  const opacity = useTransform(scrollY, [0, 520], [1, 0.22]);

  return (
    <section id="top" className="relative z-10 px-4 pb-16 pt-24 sm:px-6 lg:px-8">
      <motion.div
        style={{ y, opacity }}
        className="mx-auto flex min-h-[62svh] max-w-7xl flex-col items-center justify-center pb-8 text-center"
      >
        <Reveal>
          <div className="inline-flex items-center gap-2 rounded-md border border-white/12 bg-white/[0.06] px-3 py-2 text-sm font-semibold text-white/80 shadow-panel backdrop-blur-xl">
            <Sparkles className="h-4 w-4 text-ember" />
            La nueva era del streaming multiplataforma
          </div>
        </Reveal>La nueva era del streaming multiplataforma

        <Reveal delay={0.08}>
          <h1 className="mx-auto mt-6 max-w-6xl font-display text-[clamp(3rem,6.6vw,5.6rem)] font-bold leading-[1] tracking-[0] text-balance">
            La Television del Futuro, en todas tus pantallas.
          </h1>
        </Reveal>

        <Reveal delay={0.16}>
          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-white/70 sm:text-xl">
            OpenStream La Senal del Pueblo Disfruta de una experiencia gratis y sin interrupciones de mas de 5000 canales: por y para el pueblo, lista para Web,
            Android y Windows.
          </p>
        </Reveal>

        <Reveal delay={0.24}>
          <div className="mt-7 flex w-full flex-col items-center justify-center gap-3 sm:w-auto sm:flex-row">
            <MagneticButton href={WEB_APP_URL} variant="primary">
              <Play className="h-5 w-5 fill-current" />
              Lanzar Web App
            </MagneticButton>
            <MagneticButton href="#descargas" variant="secondary">
              <Download className="h-5 w-5" />
              Descargar Instaladores
            </MagneticButton>
          </div>
        </Reveal>

        <Reveal delay={0.34}>
          <div className="mt-8 grid w-full max-w-4xl grid-cols-2 gap-3 sm:grid-cols-4">
            {quality.map((item) => (
              <div
                key={item}
                className="rounded-lg border border-white/10 bg-white/[0.045] px-4 py-3 text-sm font-semibold text-white/76 backdrop-blur-xl"
              >
                {item}
              </div>
            ))}
          </div>
        </Reveal>
      </motion.div>
      <HeroConsole />
    </section>
  );
}

function HeroConsole() {
  return (
    <Reveal delay={0.42} className="w-full">
      <div className="relative mx-auto mt-10 w-full max-w-5xl overflow-hidden rounded-lg border border-white/12 bg-black/38 p-2 shadow-panel backdrop-blur-2xl">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-volt to-transparent" />
        <div className="relative grid min-h-[220px] gap-2 rounded-md border border-white/8 bg-black/46 p-3 sm:grid-cols-[1.25fr_0.75fr]">
          <div className="relative overflow-hidden rounded-md border border-white/10 bg-[linear-gradient(135deg,rgba(34,211,238,0.13),rgba(217,70,239,0.08)_45%,rgba(255,122,26,0.12))] p-5 text-left">
            <div className="absolute inset-0 animate-scan bg-gradient-to-b from-transparent via-white/12 to-transparent" />
            <div className="relative flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-md bg-black/38 text-volt">
                <MonitorPlay className="h-6 w-6" />
              </span>
              <div>
                <p className="text-sm font-semibold uppercase text-white/52">En vivo ahora</p>
                <h2 className="mt-1 font-display text-2xl font-bold tracking-[0]">
                  Senal del Pueblo TV
                </h2>
              </div>
            </div>
            <div className="relative mt-10 flex flex-wrap gap-2">
              {["HD", "Modo TV", "Global", "Clean UI"].map((tag) => (
                <span
                  key={tag}
                  className="rounded-md border border-white/12 bg-black/26 px-3 py-2 text-xs font-bold text-white/78"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="relative mt-8 h-2 overflow-hidden rounded-md bg-white/10">
              <motion.div
                initial={{ width: "18%" }}
                animate={{ width: ["18%", "72%", "44%", "91%"] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                className="h-full rounded-md bg-gradient-to-r from-volt via-plasma to-ember"
              />
            </div>
          </div>

          <div className="grid gap-2">
            {[
              ["99.9%", "uptime visual"],
              ["3", "ecosistemas"],
              ["0", "friccion"],
            ].map(([value, label]) => (
              <div
                key={label}
                className="rounded-md border border-white/10 bg-white/[0.055] p-4 text-left backdrop-blur-xl"
              >
                <p className="font-display text-3xl font-bold tracking-[0]">{value}</p>
                <p className="mt-1 text-sm text-white/54">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Reveal>
  );
}

function Features() {
  return (
    <section id="features" className="relative z-10 px-4 py-24 sm:px-6 lg:px-8">
      <SectionIntro
        eyebrow="Bento UI premium"
        title="Todo el sistema se siente rapido, claro y cinematografico."
        text="Una landing que vende la plataforma con presencia de producto: estable para mirar, limpia para navegar y memorable para presentar."
      />

      <div className="mx-auto mt-12 grid max-w-7xl grid-cols-1 gap-4 lg:grid-cols-12">
        {features.map((feature, index) => (
          <BentoCard key={feature.title} feature={feature} index={index} />
        ))}
      </div>
    </section>
  );
}

function BentoCard({ feature, index }) {
  const Icon = feature.icon;

  return (
    <Reveal
      delay={index * 0.06}
      className={`${feature.size} group relative min-h-[320px] overflow-hidden rounded-lg border border-white/10 bg-white/[0.055] p-6 shadow-panel backdrop-blur-2xl`}
    >
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.1),transparent_42%,rgba(34,211,238,0.08))] opacity-70" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent opacity-60" />
      <div className="relative flex h-full flex-col justify-between gap-10">
        <div>
          <div className="flex items-start justify-between gap-4">
            <span className="grid h-12 w-12 place-items-center rounded-md border border-white/12 bg-black/30 text-volt transition group-hover:scale-[1.03]">
              <Icon className="h-6 w-6" />
            </span>
            <div className="hidden gap-2 sm:flex">
              {feature.stats.map((stat) => (
                <span
                  key={stat}
                  className="rounded-md border border-white/10 bg-black/22 px-3 py-1.5 text-xs font-bold text-white/62"
                >
                  {stat}
                </span>
              ))}
            </div>
          </div>
          <h3 className="mt-7 max-w-xl font-display text-3xl font-bold tracking-[0] text-white sm:text-4xl">
            {feature.title}
          </h3>
          <p className="mt-4 max-w-2xl text-base leading-7 text-white/64">
            {feature.description}
          </p>
        </div>
        <FeatureVisual type={feature.visual} />
      </div>
    </Reveal>
  );
}

function FeatureVisual({ type }) {
  if (type === "speed") {
    return (
      <div className="grid grid-cols-3 gap-2">
        {[68, 86, 52, 94, 74, 88].map((height, index) => (
          <div key={index} className="rounded-md border border-white/8 bg-black/24 p-2">
            <motion.div
              initial={{ height: 24 }}
              whileInView={{ height }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.05 }}
              className="rounded-md bg-gradient-to-t from-ember via-plasma to-volt"
            />
          </div>
        ))}
      </div>
    );
  }

  if (type === "devices") {
    return (
      <div className="flex items-end gap-3">
        <div className="h-28 flex-1 rounded-md border border-white/10 bg-black/34 p-2">
          <div className="h-full rounded bg-gradient-to-br from-volt/40 to-white/8" />
        </div>
        <div className="h-20 w-16 rounded-md border border-white/10 bg-black/34 p-2">
          <div className="h-full rounded bg-gradient-to-br from-plasma/45 to-white/8" />
        </div>
        <div className="h-36 flex-[1.25] rounded-md border border-white/10 bg-black/34 p-2">
          <div className="h-full rounded bg-gradient-to-br from-ember/40 to-white/8" />
        </div>
      </div>
    );
  }

  if (type === "community") {
    return (
      <div className="grid grid-cols-3 gap-2">
        {[
          ["Cultura", "bg-volt"],
          ["Canales", "bg-plasma"],
          ["Familia", "bg-ember"],
        ].map(([label, colorClass]) => (
          <div
            key={label}
            className="rounded-md border border-white/10 bg-black/28 p-4 text-sm font-bold text-white/74"
          >
            <div className={`mb-4 h-1.5 rounded-md ${colorClass}`} />
            {label}
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="relative h-28 overflow-hidden rounded-md border border-white/10 bg-black/28">
      <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-volt/30 to-transparent" />
      {[0, 1, 2, 3].map((index) => (
        <motion.div
          key={index}
          initial={{ x: "-20%", opacity: 0.1 }}
          animate={{ x: ["-20%", "130%"], opacity: [0.1, 0.85, 0.1] }}
          transition={{ duration: 3.4, delay: index * 0.55, repeat: Infinity }}
          className="absolute top-1/2 h-px w-1/2 bg-gradient-to-r from-transparent via-volt to-transparent"
          style={{ top: `${26 + index * 16}%` }}
        />
      ))}
    </div>
  );
}

function HowItWorks() {
  return (
    <section id="funciona" className="relative z-10 px-4 py-24 sm:px-6 lg:px-8">
      <SectionIntro
        eyebrow="Como funciona"
        title="Tres pasos para pasar de instalacion a transmision."
        text="OpenStream esta pensado para que cualquier persona pueda entrar, encontrar contenido y disfrutar sin aprender una interfaz complicada."
      />

      <div className="mx-auto mt-14 grid max-w-7xl gap-4 md:grid-cols-3">
        {steps.map((step, index) => {
          const Icon = step.icon;
          return (
            <Reveal
              key={step.title}
              delay={index * 0.08}
              className="relative overflow-hidden rounded-lg border border-white/10 bg-white/[0.052] p-6 shadow-panel backdrop-blur-2xl"
            >
              <div className="absolute right-4 top-4 font-display text-6xl font-bold tracking-[0] text-white/[0.035]">
                0{index + 1}
              </div>
              <div className="relative">
                <span className="grid h-14 w-14 place-items-center rounded-md bg-gradient-to-br from-volt/20 via-plasma/18 to-ember/20 text-white ring-1 ring-white/12">
                  <Icon className="h-7 w-7" />
                </span>
                <h3 className="mt-8 font-display text-2xl font-bold tracking-[0]">
                  {step.title}
                </h3>
                <p className="mt-3 leading-7 text-white/62">{step.text}</p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}

function Downloads() {
  return (
    <section id="descargas" className="relative z-10 px-4 py-24 sm:px-6 lg:px-8">
      <SectionIntro
        eyebrow="Ecosistema OpenStream"
        title="Descarga la plataforma o entra directo al reproductor."
        text="Tres puertas para el mismo producto: movil, escritorio y web. Cambia los enlaces cuando subas tus instaladores reales."
      />

      <div id="web-app" className="mx-auto mt-14 grid max-w-7xl gap-4 lg:grid-cols-3">
        {downloads.map((download, index) => (
          <DownloadCard key={download.title} download={download} index={index} />
        ))}
      </div>
    </section>
  );
}

function DownloadCard({ download, index }) {
  const Icon = download.icon;

  return (
    <Reveal
      delay={index * 0.08}
      className="group relative min-h-[430px] overflow-hidden rounded-lg border border-white/10 bg-white/[0.055] p-6 shadow-panel backdrop-blur-2xl"
    >
      <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${download.accent}`} />
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.09),transparent_48%,rgba(255,122,26,0.08))]" />
      <div className="relative flex h-full flex-col">
        <div className="flex items-center justify-between">
          <span className="text-sm font-bold uppercase text-white/48">{download.platform}</span>
          <span className="rounded-md border border-white/10 bg-black/24 px-3 py-1.5 text-xs font-bold text-white/58">
            Premium
          </span>
        </div>
        <div className="mt-10 grid h-24 w-24 place-items-center rounded-lg border border-white/12 bg-black/28 text-white shadow-neon-cyan transition group-hover:scale-[1.03]">
          <Icon className="h-12 w-12" />
        </div>
        <h3 className="mt-10 font-display text-3xl font-bold tracking-[0]">{download.title}</h3>
        <p className="mt-4 leading-7 text-white/62">{download.description}</p>

        <div className="mt-8 space-y-3">
          {["Instalacion simple", "Interfaz consistente", "Experiencia responsive"].map((item) => (
            <div key={item} className="flex items-center gap-3 text-sm text-white/66">
              <Check className="h-4 w-4 text-volt" />
              {item}
            </div>
          ))}
        </div>

        <a
          href={download.href}
          target={download.external ? "_blank" : undefined}
          rel={download.external ? "noreferrer" : undefined}
          download={!download.external && !download.href.startsWith("#") ? true : undefined}
          className="mt-auto inline-flex h-12 items-center justify-center gap-2 rounded-md bg-white px-5 text-sm font-extrabold text-black transition hover:scale-[1.01] hover:bg-volt focus:outline-none focus:ring-2 focus:ring-volt focus:ring-offset-2 focus:ring-offset-black"
        >
          {download.action}
          {download.external ? <ExternalLink className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
        </a>
      </div>
    </Reveal>
  );
}

function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/10 px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div>
          <div className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-md border border-white/15 bg-white/10 text-volt">
              <Radio className="h-5 w-5" />
            </span>
            <div>
              <p className="font-display text-lg font-bold tracking-[0]">OpenStream</p>
              <p className="text-sm text-white/52">Senal del Pueblo, por y para el pueblo.</p>
            </div>
          </div>
        </div>

       <div className="flex flex-wrap items-center gap-3">
          {[
            ["Soporte", "mailto:soporte@openstream.com", Headphones],
            ["WhatsApp", "https://wa.me/593939473099", MessageCircle], // Reemplaza las X por tu número
            ["Estado", "#features", ShieldCheck],
            ["Canal", "#top", Wifi],
          ].map(([label, href, Icon]) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noreferrer" : undefined}
              className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/[0.045] px-4 py-2 text-sm font-semibold text-white/66 transition hover:bg-white/10 hover:text-white"
            >
              <Icon className="h-4 w-4" />
              {label}
            </a>
          ))}
        </div>

        <p className="text-sm text-white/42">
          (c) {new Date().getFullYear()} OpenStream. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}

function SectionIntro({ eyebrow, title, text }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <Reveal>
        <p className="inline-flex items-center gap-2 rounded-md border border-white/12 bg-white/[0.055] px-3 py-2 text-sm font-bold text-white/62 backdrop-blur-xl">
          <Zap className="h-4 w-4 text-ember" />
          {eyebrow}
        </p>
      </Reveal>
      <Reveal delay={0.08}>
        <h2 className="mt-6 font-display text-[clamp(2.25rem,5vw,4.8rem)] font-bold leading-none tracking-[0] text-balance">
          {title}
        </h2>
      </Reveal>
      <Reveal delay={0.16}>
        <p className="mt-6 text-lg leading-8 text-white/64">{text}</p>
      </Reveal>
    </div>
  );
}

function MagneticButton({ href, variant, children }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const glowX = useMotionValue(0);
  const glowY = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 180, damping: 16, mass: 0.22 });
  const springY = useSpring(y, { stiffness: 180, damping: 16, mass: 0.22 });
  const background = useMotionTemplate`radial-gradient(120px circle at ${glowX}px ${glowY}px, rgba(255,255,255,0.25), transparent 45%)`;

  const handleMove = (event) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    const localX = event.clientX - bounds.left;
    const localY = event.clientY - bounds.top;
    x.set((localX - bounds.width / 2) * 0.18);
    y.set((localY - bounds.height / 2) * 0.22);
    glowX.set(localX);
    glowY.set(localY);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  const classes =
    variant === "primary"
      ? "border-white/10 bg-white text-black shadow-neon-cyan hover:bg-volt"
      : "border-white/16 bg-white/[0.055] text-white backdrop-blur-xl hover:bg-white/10";

  return (
    <motion.a
      href={href}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      style={{ x: springX, y: springY }}
      whileTap={{ scale: 0.98 }}
      className={`group relative inline-flex h-14 w-full items-center justify-center gap-3 overflow-hidden rounded-md border px-6 text-base font-extrabold transition focus:outline-none focus:ring-2 focus:ring-volt focus:ring-offset-2 focus:ring-offset-black sm:w-auto ${classes}`}
    >
      <motion.span className="absolute inset-0 opacity-0 transition group-hover:opacity-100" style={{ background }} />
      <span className="relative inline-flex items-center gap-3">{children}</span>
    </motion.a>
  );
}

function Reveal({ children, delay = 0, className = "" }) {
  return (
    <motion.div
      initial={{ y: 28, opacity: 0, filter: "blur(10px)" }}
      whileInView={{ y: 0, opacity: 1, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.72, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function AndroidLogo({ className = "" }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" className={className} aria-hidden="true">
      <path
        d="M20 26h24v20a6 6 0 0 1-6 6H26a6 6 0 0 1-6-6V26Z"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinejoin="round"
      />
      <path d="M24 20 18 10M40 20l6-10" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
      <path d="M20 26c2-8 7-12 12-12s10 4 12 12" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
      <path d="M14 30v14M50 30v14M28 36h.01M36 36h.01" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
    </svg>
  );
}

function WindowsLogo({ className = "" }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" className={className} aria-hidden="true">
      <path d="M10 14 30 11v19H10V14Z" fill="currentColor" opacity="0.9" />
      <path d="M34 10 54 7v23H34V10Z" fill="currentColor" />
      <path d="M10 34h20v19l-20-3V34Z" fill="currentColor" />
      <path d="M34 34h20v23l-20-3V34Z" fill="currentColor" opacity="0.82" />
    </svg>
  );
}

export default App;
