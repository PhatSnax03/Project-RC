import { FeatureCard } from "@/components/FeatureCard";

const highlights = [
  {
    title: "CRM foundation",
    copy:
      "A clean Next.js and Tailwind CSS baseline ready to evolve into a full customer relationship platform.",
  },
  {
    title: "Modern stack",
    copy:
      "App Router, TypeScript, and utility-first styling give you a flexible, type-safe starting point.",
  },
  {
    title: "Developer friendly",
    copy:
      "Preconfigured linting, aliases, and shared UI primitives keep the team productive from day one.",
  },
];

export default function Home() {
  return (
    <main className="container px-6 py-12 md:py-16">
      <div className="flex flex-col gap-10">
        <header className="flex flex-col gap-4 text-center">
          <span className="mx-auto rounded-full bg-brand-100 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-brand-800 ring-1 ring-brand-200">
            Project RC
          </span>
          <h1 className="text-4xl font-bold text-slate-900 sm:text-5xl">
            Build your CRM with speed and confidence
          </h1>
          <p className="text-lg leading-relaxed text-slate-600 md:text-xl">
            This foundation delivers the essentials—a modern Next.js App Router setup, Tailwind CSS, and
            reusable UI patterns—so you can focus on crafting the CRM experience.
          </p>
        </header>

        <section className="grid gap-6 md:grid-cols-3">
          {highlights.map((feature) => (
            <FeatureCard key={feature.title} title={feature.title}>
              {feature.copy}
            </FeatureCard>
          ))}
        </section>
      </div>
    </main>
  );
}
