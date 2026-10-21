import { getTranslations } from "next-intl/server";
import { BadgeCheck, Link2, RefreshCw, Sparkles } from "lucide-react";

import { CopyInstallCommand } from "@/components/copy-install-command";
import {
  DSH_INDEX_URL,
  PluginSourceDemo,
  type PluginSourceDemoLabels,
} from "@/components/sections/plugin-source-demo";

/**
 * 首页「把 dshfind 加为 DSH 插件索引源」引导。
 *
 * DSH v0.2.1-alpha.4 起支持自定义插件索引源（Plugins → Discover → 添加索引源），
 * 但 DSH 本身不内置任何源——用户不知道该填什么。这里给出我们的 URL 和三步演示。
 * 索引本体由 scripts/lib/dsh-index.mjs 生成、api-edge Worker 的 /market/dsh-index.json 提供。
 */
export async function PluginSourceGuide() {
  const t = await getTranslations("SourceGuide");
  const labels = t.raw("demo") as PluginSourceDemoLabels;
  const steps = t.raw("steps") as { title: string; body: string }[];
  const perks = [
    { icon: BadgeCheck, text: t("perkVerified") },
    { icon: RefreshCw, text: t("perkDaily") },
    { icon: Sparkles, text: t("perkPicks") },
  ];

  return (
    <section className="mx-auto w-full max-w-6xl px-4 pb-12 sm:px-6">
      <div className="relative overflow-hidden rounded-2xl border border-brand-500/30 bg-gradient-to-br from-brand-500/10 via-card to-card p-6 sm:p-8 dark:from-brand-500/15">
        <div className="pointer-events-none absolute -top-24 -right-24 size-72 rounded-full bg-brand-500/15 blur-3xl" />
        <div className="relative grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] lg:items-center">
          <div>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-500 px-3 py-1 text-xs font-semibold text-white shadow-sm">
              <Sparkles className="size-3.5" />
              {t("badge")}
            </span>
            <h2 className="mt-4 text-2xl font-bold tracking-tight sm:text-3xl">
              {t("title")}
            </h2>
            <p className="mt-3 max-w-[56ch] text-sm leading-relaxed text-muted-foreground sm:text-base">
              {t("subtitle")}
            </p>

            <div className="mt-5 rounded-xl border border-brand-500/40 bg-background/80 p-3 shadow-sm">
              <div className="mb-1.5 flex items-center gap-1.5 text-xs font-medium text-muted-foreground">
                <Link2 className="size-3.5" />
                {t("urlLabel")}
              </div>
              <div className="flex items-center gap-2">
                <code className="min-w-0 flex-1 truncate font-mono text-sm font-semibold text-brand-600 select-all dark:text-brand-300">
                  {DSH_INDEX_URL}
                </code>
                <CopyInstallCommand
                  command={DSH_INDEX_URL}
                  labels={{ copy: t("copy"), copied: t("copied") }}
                />
              </div>
            </div>

            <ol className="mt-5 space-y-3">
              {steps.map((step, i) => (
                <li key={step.title} className="flex gap-3">
                  <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-brand-500 text-xs font-bold text-white">
                    {i + 1}
                  </span>
                  <div className="text-sm leading-relaxed">
                    <span className="font-semibold">{step.title}</span>
                    <span className="text-muted-foreground"> — {step.body}</span>
                  </div>
                </li>
              ))}
            </ol>

            <ul className="mt-5 flex flex-wrap gap-2">
              {perks.map(({ icon: Icon, text }) => (
                <li
                  key={text}
                  className="inline-flex items-center gap-1.5 rounded-full border border-border/60 bg-background/60 px-2.5 py-1 text-xs font-medium"
                >
                  <Icon className="size-3.5 text-brand-600 dark:text-brand-300" />
                  {text}
                </li>
              ))}
            </ul>
          </div>

          <PluginSourceDemo labels={labels} />
        </div>
      </div>
    </section>
  );
}
