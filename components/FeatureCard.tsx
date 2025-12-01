import { ReactNode } from "react";

interface FeatureCardProps {
  title: string;
  children: ReactNode;
}

export function FeatureCard({ title, children }: FeatureCardProps) {
  return (
    <div className="rounded-2xl bg-white/80 p-6 ring-1 ring-slate-200 card-shadow">
      <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-slate-600">{children}</p>
    </div>
  );
}
