import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, Bot, Check, LoaderCircle, Mail, Palette, Plug, RefreshCw, Rocket, Search, Send, Sparkles } from "lucide-react";
import { useState, type ReactNode } from "react";

const PROJECTS = [
  {
    id: "studyflow",
    title: "StudyFlow",
    description: "AI-платформа для персонализированного обучения: адаптивные треки, умные карточки и аналитика прогресса.",
    tags: ["React", "OpenAI", "Supabase", "Tailwind"],
    preview: "education",
  },
  {
    id: "neuroanalyst",
    title: "НейроАналитик",
    description: "AI-сервис для анализа данных: автоматическая визуализация, прогнозы и инсайты в естественном языке.",
    tags: ["Next.js", "Python", "Recharts", "PostgreSQL"],
    preview: "analytics",
  },
  {
    id: "launchpro",
    title: "LaunchPro",
    description: "Лендинг для продукта: конверсионная структура, анимации и интеграция форм захвата за один вечер.",
    tags: ["Astro", "Framer Motion", "TypeScript", "Figma"],
    preview: "landing",
  },
] as const;

const SERVICES = [
  {
    id: "mvp",
    title: "MVP за вечер",
    description: "Превращаю идею в работающий прототип за одну сессию: от структуры и дизайна до деплоя и первых пользователей.",
    result: "Готовый продукт за 1 вечер вместо недель разработки.",
    icon: <Rocket className="size-5" aria-hidden="true" />,
  },
  {
    id: "ai-automation",
    title: "AI-автоматизация",
    description: "Встраиваю нейросети в бизнес-процессы: генерация контента, обработка заявок, аналитика и персонализация.",
    result: "Экономия до 20 часов ручной работы в неделю.",
    icon: <Bot className="size-5" aria-hidden="true" />,
  },
  {
    id: "ui-ux",
    title: "UI/UX с вайбкодингом",
    description: "Создаю чистые, продуманные интерфейсы в едином визуальном стиле, быстро адаптируя их под фидбек и метрики.",
    result: "Интерфейс, который нравится пользователям и конвертирует.",
    icon: <Palette className="size-5" aria-hidden="true" />,
  },
  {
    id: "integrations",
    title: "Интеграции",
    description: "Соединяю сервисы, базы данных, платежи и мессенджеры в единый поток данных без рутины и ошибок ручного ввода.",
    result: "Данные синхронизируются автоматически между всеми системами.",
    icon: <Plug className="size-5" aria-hidden="true" />,
  },
] as const;

// No head() here: the home route inherits title/description/og/twitter from
// __root.tsx, and ships no og:image so serve-time hosting can inject the
// project's social preview (explicit og:image or latest screenshot).
export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Вайбкодинг — цифровой продукт за один вечер" },
      { name: "description", content: "Создание MVP, лендингов и веб-приложений с помощью современных AI-инструментов." },
      { property: "og:title", content: "Цифровой продукт за один вечер" },
      { property: "og:description", content: "AI-продукты, MVP и веб-приложения через вайбкодинг." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function ConsultationButton({
  children,
  icon,
  href,
  variant = "primary",
}: {
  children: ReactNode;
  icon: ReactNode;
  href: string;
  variant?: "primary" | "secondary";
}) {
  const [loading, setLoading] = useState(false);
  const styles = variant === "primary"
    ? "bg-secondary text-secondary-foreground hover:bg-secondary/90"
    : "border border-border bg-surface-strong text-foreground hover:bg-muted";

  const handleClick = () => {
    if (loading) return;
    setLoading(true);
    window.setTimeout(() => {
      setLoading(false);
      window.location.href = href;
    }, 850);
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      disabled={loading}
      className={`group inline-flex min-h-14 w-full items-center justify-center gap-2 rounded-xl px-5 py-3 text-center text-sm font-semibold transition duration-200 hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none sm:w-auto ${styles}`}
    >
      {loading ? <LoaderCircle className="size-4 animate-spin" aria-hidden="true" /> : icon}
      <span>{loading ? "Обработка..." : children}</span>
    </button>
  );
}

function InterfacePreview() {
  return (
    <div className="animation-delay-160 relative mx-auto w-full min-w-0 max-w-[590px] animate-hero-rise lg:mx-0">
      <div className="relative overflow-hidden rounded-2xl border border-surface-strong bg-surface-strong p-3 shadow-hero backdrop-blur-xl sm:p-4">
        <div className="flex items-center justify-between border-b border-border px-2 pb-3">
          <div className="flex gap-1.5" aria-hidden="true"><i className="size-2 rounded-full bg-primary/40" /><i className="size-2 rounded-full bg-violet-soft" /><i className="size-2 rounded-full bg-muted" /></div>
          <span className="text-[10px] font-semibold text-muted-foreground">AI WORKSPACE</span>
          <div className="size-5 rounded-full bg-primary/15" />
        </div>
        <div className="grid min-h-[300px] grid-cols-[72px_1fr] gap-3 pt-3 sm:min-h-[370px] sm:grid-cols-[104px_1fr]">
          <aside className="rounded-lg bg-muted/70 p-2">
            <div className="mb-5 flex items-center gap-1.5 text-[9px] font-bold"><Sparkles className="size-3 text-primary" />VIBE.OS</div>
            <div className="space-y-2"><div className="h-6 rounded-md bg-surface-strong" /><div className="h-6 rounded-md bg-transparent" /><div className="h-6 rounded-md bg-transparent" /></div>
          </aside>
          <div className="min-w-0 space-y-3">
            <div className="flex items-start justify-between">
              <div><p className="text-[9px] text-muted-foreground">Проект</p><h2 className="text-sm font-bold sm:text-base">Запуск MVP</h2></div>
              <span className="rounded-full bg-primary/10 px-2 py-1 text-[8px] font-bold text-primary">В РАБОТЕ</span>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div className="rounded-lg border border-border bg-card p-3"><p className="text-[8px] text-muted-foreground">Готовность</p><strong className="mt-1 block text-xl">78%</strong><div className="mt-3 h-1 rounded-full bg-muted"><div className="h-full w-4/5 rounded-full bg-primary" /></div></div>
              <div className="rounded-lg border border-border bg-card p-3"><p className="text-[8px] text-muted-foreground">Экономия времени</p><strong className="mt-1 block text-xl">12ч</strong><p className="mt-2 text-[8px] font-semibold text-primary">+34% за сегодня</p></div>
            </div>
            <div className="rounded-lg border border-border bg-card p-3">
              <div className="mb-3 flex items-center justify-between"><p className="text-[9px] font-bold">Темп разработки</p><span className="text-[8px] text-muted-foreground">7 дней</span></div>
              <div className="flex h-20 items-end gap-1.5 sm:h-28">{["h-1/3", "h-1/2", "h-2/5", "h-2/3", "h-3/5", "h-4/5", "h-3/4", "h-11/12", "h-4/5", "h-full"].map((heightClass, index) => <div key={index} className={`flex-1 rounded-t-sm bg-primary/15 ${heightClass}`}><div className="h-2/3 w-full rounded-t-sm bg-primary/55" /></div>)}</div>
            </div>
            <div className="hidden items-center gap-2 rounded-lg border border-border bg-card p-2 sm:flex"><span className="flex size-6 items-center justify-center rounded-full bg-primary/10"><Check className="size-3 text-primary" /></span><div><p className="text-[8px] font-bold">Прототип готов</p><p className="text-[7px] text-muted-foreground">Все ключевые сценарии собраны</p></div></div>
          </div>
        </div>
      </div>
      <div className="absolute right-2 top-12 flex animate-soft-float items-center gap-2 rounded-xl border border-surface-strong bg-surface-strong px-3 py-2 shadow-hero backdrop-blur-xl sm:right-3">
        <Sparkles className="size-4 text-primary" /><div><p className="text-[8px] text-muted-foreground">AI-ускорение</p><p className="text-xs font-bold">в 4.2 раза</p></div>
      </div>
    </div>
  );
}

function ProjectPreview({ type }: { type: "education" | "analytics" | "landing" }) {
  if (type === "analytics") {
    return (
      <div className="flex h-full flex-col gap-3 p-4" aria-hidden="true">
        <div className="flex items-center justify-between">
          <div className="h-2.5 w-16 rounded-full bg-foreground/10" />
          <div className="h-5 w-5 rounded-full bg-primary/15" />
        </div>
        <div className="grid grid-cols-2 gap-2">
          <div className="rounded-lg bg-surface-strong p-2 shadow-sm">
            <div className="h-1.5 w-8 rounded-full bg-muted" />
            <div className="mt-2 h-4 w-10 rounded-md bg-foreground/10" />
          </div>
          <div className="rounded-lg bg-surface-strong p-2 shadow-sm">
            <div className="h-1.5 w-8 rounded-full bg-muted" />
            <div className="mt-2 h-4 w-10 rounded-md bg-primary/25" />
          </div>
        </div>
        <div className="flex flex-1 items-end gap-1.5 rounded-lg bg-surface-strong p-3 shadow-sm">
          {[40, 65, 45, 80, 55, 90, 70, 85].map((h, i) => (
            <div key={i} className="flex-1 rounded-t-sm bg-primary/20" style={{ height: `${h}%` }}>
              <div className="h-2/3 w-full rounded-t-sm bg-primary/60" />
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (type === "landing") {
    return (
      <div className="flex h-full flex-col gap-3 p-4" aria-hidden="true">
        <div className="flex items-center justify-between">
          <div className="h-2.5 w-12 rounded-full bg-foreground/10" />
          <div className="flex gap-1">
            <div className="h-2 w-6 rounded-full bg-muted" />
            <div className="h-2 w-6 rounded-full bg-muted" />
          </div>
        </div>
        <div className="grid flex-1 grid-cols-[1fr_0.9fr] gap-2">
          <div className="flex flex-col justify-center gap-2 rounded-lg bg-surface-strong p-3 shadow-sm">
            <div className="h-3 w-20 rounded-md bg-foreground/10" />
            <div className="h-2 w-full rounded-full bg-muted" />
            <div className="h-2 w-4/5 rounded-full bg-muted" />
            <div className="mt-1 h-5 w-14 rounded-md bg-primary/25" />
          </div>
          <div className="rounded-lg bg-primary/10 shadow-sm" />
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-full items-center justify-center gap-2 p-4" aria-hidden="true">
      <div className="flex h-full w-1/3 flex-col gap-2 rounded-xl bg-surface-strong p-2 shadow-sm">
        <div className="h-2 w-full rounded-full bg-muted" />
        <div className="flex-1 rounded-lg bg-primary/10" />
        <div className="h-6 rounded-md bg-foreground/10" />
      </div>
      <div className="flex h-full w-1/3 flex-col gap-2 rounded-xl bg-surface-strong p-2 shadow-sm">
        <div className="h-2 w-full rounded-full bg-muted" />
        <div className="flex-1 rounded-lg bg-violet-soft/25" />
        <div className="h-6 rounded-md bg-foreground/10" />
      </div>
      <div className="flex h-full w-1/3 flex-col gap-2 rounded-xl bg-surface-strong p-2 shadow-sm">
        <div className="h-2 w-full rounded-full bg-muted" />
        <div className="flex-1 rounded-lg bg-primary/10" />
        <div className="h-6 rounded-md bg-foreground/10" />
      </div>
    </div>
  );
}

function ProjectCard({ project }: { project: (typeof PROJECTS)[number] }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-3xl border border-surface-strong bg-surface-strong shadow-hero transition duration-200 hover:-translate-y-1">
      <div className="relative h-48 w-full bg-gradient-to-br from-accent/40 via-background to-muted/70 sm:h-52">
        <ProjectPreview type={project.preview} />
      </div>
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="mb-3 flex items-start justify-between gap-3">
          <div className="min-w-0">
            <h3 className="truncate text-lg font-bold text-foreground">{project.title}</h3>
            <p className="mt-1 text-xs font-medium text-muted-foreground">{project.preview === "education" ? "Web Application" : project.preview === "analytics" ? "AI Service" : "Landing Page"}</p>
          </div>
          <span className="grid size-9 shrink-0 place-items-center rounded-full border border-border bg-surface transition duration-200 group-hover:border-primary/30 group-hover:bg-primary/10">
            <ArrowUpRight className="size-4 text-foreground transition duration-200 group-hover:text-primary" />
          </span>
        </div>
        <p className="flex-1 text-sm leading-relaxed text-muted-foreground">{project.description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span key={tag} className="rounded-full border border-border bg-surface px-2.5 py-1 text-[11px] font-semibold text-muted-foreground">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}

function ProjectsSection() {
  return (
    <section className="px-4 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
      <div className="mx-auto w-full max-w-7xl">
        <div className="mb-10 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-2 text-xs font-bold uppercase tracking-wider text-primary">Featured Projects</p>
            <h2 className="text-3xl font-extrabold leading-tight text-foreground sm:text-4xl">Избранные проекты</h2>
          </div>
          <button type="button" className="inline-flex items-center gap-2 self-start rounded-full border border-border bg-surface px-4 py-2 text-sm font-semibold text-foreground transition duration-200 hover:bg-muted sm:self-auto">
            Все проекты <ArrowUpRight className="size-4" aria-hidden="true" />
          </button>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ service }: { service: (typeof SERVICES)[number] }) {
  return (
    <article className="group flex flex-col rounded-3xl border border-surface-strong bg-surface-strong p-5 shadow-hero transition duration-200 hover:-translate-y-1 sm:p-6">
      <div className="mb-5 grid size-11 place-items-center rounded-2xl bg-primary/10 text-primary">
        {service.icon}
      </div>
      <h3 className="text-lg font-bold text-foreground">{service.title}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{service.description}</p>
      <p className="mt-4 text-xs font-semibold text-primary">{service.result}</p>
      <div className="mt-5 flex items-center justify-between">
        <span className="text-xs font-semibold text-muted-foreground transition duration-200 group-hover:text-foreground">Подробнее</span>
        <span className="grid size-8 place-items-center rounded-full border border-border bg-surface transition duration-200 group-hover:border-primary/30 group-hover:bg-primary/10">
          <ArrowUpRight className="size-4 text-foreground transition duration-200 group-hover:text-primary" aria-hidden="true" />
        </span>
      </div>
    </article>
  );
}

function ServicesSection() {
  return (
    <section className="px-4 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
      <div className="mx-auto w-full max-w-7xl">
        <div className="mb-10">
          <p className="mb-2 text-xs font-bold uppercase tracking-wider text-primary">What I Do</p>
          <h2 className="text-3xl font-extrabold leading-tight text-foreground sm:text-4xl">Что я делаю</h2>
        </div>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}

const PROCESS_STEPS = [
  {
    id: "discover",
    number: "01",
    title: "Погружаюсь в задачу",
    description: "Изучаю цели, аудиторию и ограничения, чтобы найти самое эффективное решение.",
    icon: <Search className="size-5" aria-hidden="true" />,
  },
  {
    id: "create",
    number: "02",
    title: "Создаю с ИИ",
    description: "Собираю прототип, интерфейс и логику с помощью современных AI-инструментов.",
    icon: <Sparkles className="size-5" aria-hidden="true" />,
  },
  {
    id: "improve",
    number: "03",
    title: "Тестирую и улучшаю",
    description: "Проверяю работу продукта, собираю фидбек и довожу детали до идеала.",
    icon: <RefreshCw className="size-5" aria-hidden="true" />,
  },
  {
    id: "launch",
    number: "04",
    title: "Запускаю и масштабирую",
    description: "Деплою продукт, подключаю аналитику и помогаю расти дальше.",
    icon: <Rocket className="size-5" aria-hidden="true" />,
  },
] as const;

function ProcessSection() {
  return (
    <section className="px-4 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
      <div className="mx-auto w-full max-w-7xl">
        <div className="mb-10">
          <p className="mb-2 text-xs font-bold uppercase tracking-wider text-primary">My Process</p>
          <h2 className="text-3xl font-extrabold leading-tight text-foreground sm:text-4xl">Как я работаю</h2>
        </div>
        <div className="relative">
          {/* desktop connecting line */}
          <div className="absolute left-0 right-0 top-[52px] hidden h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent lg:block" aria-hidden="true" />
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {PROCESS_STEPS.map((step, index) => (
              <article
                key={step.id}
                className="group relative flex flex-col rounded-3xl border border-surface-strong bg-surface-strong p-5 shadow-hero transition duration-200 hover:-translate-y-1 sm:p-6"
              >
                <div className="mb-5 flex items-center justify-between">
                  <div className="grid size-11 place-items-center rounded-2xl bg-primary/10 text-primary">
                    {step.icon}
                  </div>
                  <span className="text-2xl font-black text-primary/20 transition duration-200 group-hover:text-primary/40">
                    {step.number}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-foreground">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.description}</p>
                {index < PROCESS_STEPS.length - 1 && (
                  <div className="absolute -right-3 top-1/2 hidden -translate-y-1/2 text-primary/30 lg:block" aria-hidden="true">
                    <ArrowUpRight className="size-5 rotate-45" />
                  </div>
                )}
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Index() {
  return (
    <main className="min-h-screen overflow-hidden bg-background">
      <section className="flex min-h-[92vh] items-center px-3 py-4 sm:px-6 sm:py-8 lg:px-10 lg:py-10">
        <div className="mx-auto grid w-full max-w-7xl min-w-0 items-center gap-10 overflow-hidden rounded-3xl border border-surface-strong bg-surface/45 px-4 py-8 shadow-hero backdrop-blur-2xl sm:px-8 sm:py-10 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:gap-10 lg:px-12 lg:py-12">
          <div className="min-w-0 animate-hero-rise">
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1.5 text-[11px] font-bold uppercase text-muted-foreground backdrop-blur-xl">
              <Sparkles className="size-3.5 text-primary" /> AI-продукты · MVP · Web
            </div>
            <h1 className="max-w-2xl break-words text-4xl font-extrabold leading-[1.08] sm:text-5xl lg:text-[3.55rem]">
              Создам цифровой инструмент под Вашу задачу <span className="text-primary">за один вечер</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
              Создаю AI-продукты через вайбкодинг: быстро собираю MVP, лендинги и веб-приложения с помощью современных AI-инструментов.
            </p>
            <div className="mt-8 flex min-w-0 flex-col gap-3 xl:flex-row xl:flex-wrap">
              <ConsultationButton href="https://t.me/" icon={<Send className="size-4" aria-hidden="true" />}>Записаться на бесплатную консультацию (Telegram)</ConsultationButton>
              <ConsultationButton href="mailto:?subject=Бесплатная консультация" variant="secondary" icon={<Mail className="size-4" aria-hidden="true" />}>Записаться на бесплатную консультацию (e-mail)</ConsultationButton>
            </div>
            <div className="mt-7 flex items-center gap-2 text-xs font-medium text-muted-foreground"><span className="flex size-5 items-center justify-center rounded-full bg-primary/10"><Check className="size-3 text-primary" /></span>Первая консультация — бесплатно <ArrowUpRight className="size-3.5" /></div>
          </div>
          <InterfacePreview />
        </div>
      </section>
      <ProjectsSection />
      <ServicesSection />
      <ProcessSection />
    </main>
  );
}
