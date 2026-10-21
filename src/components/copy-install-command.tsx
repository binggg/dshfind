"use client";

import * as React from "react";
import { useTranslations } from "next-intl";
import { Check, Copy } from "lucide-react";

/**
 * 详情页安装命令的复制按钮。
 *
 * 复制失败（非 HTTPS / 无权限）时静默：命令框本身可选中，用户手动复制即可。
 * 样式与炫耀卡的「复制 Markdown」按钮保持一致。
 */
export function CopyInstallCommand({
  command,
  labels,
}: {
  command: string;
  /** 复制的不是命令时（如首页的索引源 URL）覆盖按钮文案。 */
  labels?: { copy: string; copied: string };
}) {
  const t = useTranslations("Plugins");
  const copyLabel = labels?.copy ?? t("installCopy");
  const copiedLabel = labels?.copied ?? t("installCopied");
  const [copied, setCopied] = React.useState(false);
  const timer = React.useRef<ReturnType<typeof setTimeout>>(undefined);

  React.useEffect(() => () => clearTimeout(timer.current), []);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(command);
      setCopied(true);
      clearTimeout(timer.current);
      timer.current = setTimeout(() => setCopied(false), 1800);
    } catch {
      // 剪贴板被拒：命令框本身可选中，用户手动复制即可
    }
  };

  return (
    <button
      type="button"
      onClick={copy}
      aria-label={copied ? copiedLabel : copyLabel}
      className="inline-flex shrink-0 items-center gap-1.5 rounded-md border border-border/60 px-2.5 py-1 text-xs font-medium transition-colors hover:bg-muted"
    >
      {copied ? (
        <>
          <Check className="size-3.5 text-emerald-500" />
          {copiedLabel}
        </>
      ) : (
        <>
          <Copy className="size-3.5" />
          {copyLabel}
        </>
      )}
    </button>
  );
}
