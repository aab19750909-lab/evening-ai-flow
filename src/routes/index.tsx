import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, Check, LoaderCircle, Mail, Send, Sparkles } from "lucide-react";
import { useState, type ReactNode } from "react";

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
    <div className="animation-delay-160 relative mx-auto w-full max-w-[590px] animate-hero-rise lg:mx-0">
      <div className="absolute -inset-5 rounded-[2rem] border border-surface-strong bg-surface/40" aria-hidden="true" />
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
      <div className="absolute -right-2 top-12 flex animate-soft-float items-center gap-2 rounded-xl border border-surface-strong bg-surface-strong px-3 py-2 shadow-hero backdrop-blur-xl sm:-right-8">
        <Sparkles className="size-4 text-primary" /><div><p className="text-[8px] text-muted-foreground">AI-ускорение</p><p className="text-xs font-bold">в 4.2 раза</p></div>
      </div>
    </div>
  );
}

function Index() {
  return (
    <main className="min-h-screen overflow-hidden bg-background">
      <section className="relative flex min-h-[92vh] items-center px-5 py-12 sm:px-8 sm:py-16 lg:px-12">
        <div className="pointer-events-none absolute inset-x-[8%] top-[9%] h-[78%] rounded-[3rem] border border-surface-strong bg-surface/45 shadow-hero backdrop-blur-2xl" aria-hidden="true" />
        <div className="relative mx-auto grid w-full max-w-7xl items-center gap-14 lg:grid-cols-[0.92fr_1.08fr] lg:gap-12">
          <div className="animate-hero-rise">
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1.5 text-[11px] font-bold uppercase text-muted-foreground backdrop-blur-xl">
              <Sparkles className="size-3.5 text-primary" /> AI-продукты · MVP · Web
            </div>
            <h1 className="max-w-2xl text-4xl font-extrabold leading-[1.08] sm:text-5xl lg:text-[3.55rem]">
              Создам цифровой инструмент под Вашу задачу <span className="text-primary">за один вечер</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
              Создаю AI-продукты через вайбкодинг: быстро собираю MVP, лендинги и веб-приложения с помощью современных AI-инструментов.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <ConsultationButton href="https://t.me/" icon={<Send className="size-4" aria-hidden="true" />}>Записаться на бесплатную консультацию (Telegram)</ConsultationButton>
              <ConsultationButton href="mailto:?subject=Бесплатная консультация" variant="secondary" icon={<Mail className="size-4" aria-hidden="true" />}>Записаться на бесплатную консультацию (e-mail)</ConsultationButton>
            </div>
            <div className="mt-7 flex items-center gap-2 text-xs font-medium text-muted-foreground"><span className="flex size-5 items-center justify-center rounded-full bg-primary/10"><Check className="size-3 text-primary" /></span>Первая консультация — бесплатно <ArrowUpRight className="size-3.5" /></div>
          </div>
          <InterfacePreview />
        </div>
      </section>
    </main>
  );
}
