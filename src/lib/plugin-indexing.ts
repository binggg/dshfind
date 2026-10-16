/**
 * 插件详情页的收录口径（sitemap 与详情页 robots 共用，两边必须一致）。
 *
 * 2.0 万个插件 × 四语言 ≈ 7.8 万个 URL，其中近半数 0 star、绝大多数只有一句仓库描述
 * + 安装命令——AdSense / Google 会把这种规模化薄页判为「低价值内容」，拖累全站审核。
 * 所以只收有实质内容或有真实关注度的那部分，其余照常可访问，但 noindex、不进 sitemap。
 */

/** 收录门槛：star 数 */
export const INDEX_MIN_STARS = 10;
/** 收录门槛：累计下载量 */
export const INDEX_MIN_DOWNLOADS = 100;

/**
 * 内容本身踩 Google 发布商政策（越狱、逆向破解第三方接口等「助长不诚实行为」）的仓库：
 * 不收录、不投广告。不等同 isRisky（那是假冒官方，会挂警示条）。
 */
export const POLICY_EXCLUDED = new Set([
  "YuJunZhiXue/dsh-purge",
  "HitMargin/ai-proxy",
  "ma-pony/deepspider",
]);

export interface IndexSignals {
  fullName: string;
  isRisky: boolean;
  isFeatured: boolean;
  isOfficial: boolean;
  stars: number;
  /** 任一语言有编辑撰写的长介绍 */
  hasIntro: boolean;
  /** 累计下载量，未知传 0 */
  downloads: number;
}

export function isPolicyExcluded(fullName: string): boolean {
  return POLICY_EXCLUDED.has(fullName);
}

export function isIndexablePlugin(p: IndexSignals): boolean {
  if (p.isRisky || isPolicyExcluded(p.fullName)) return false;
  return (
    p.isFeatured ||
    p.isOfficial ||
    p.hasIntro ||
    p.stars >= INDEX_MIN_STARS ||
    p.downloads >= INDEX_MIN_DOWNLOADS
  );
}
