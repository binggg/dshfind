/**
 * 首页「把 dshfind 加为插件索引源」的演示动画：一个手绘的 DSH 插件页，
 * 14 秒一轮依次演示 开启实验插件 → 添加索引源 → 一键安装。
 *
 * 纯 SVG + CSS keyframes，不带客户端 JS；所有动画共享同一个周期，
 * 时间点都写成百分比，改节奏只需改 --psg-dur。颜色走主题变量，深浅色自动跟随。
 * prefers-reduced-motion 下直接停在第三幕（装好之后的样子）。
 */

export interface PluginSourceDemoLabels {
  window: string;
  steps: [string, string, string];
  experimental: string;
  rows: [string, string, string];
  installed: string;
  discover: string;
  addSource: string;
  add: string;
  marketTitle: string;
  marketCount: string;
  install: string;
  installedDone: string;
}

export const DSH_INDEX_URL = "https://api.dshfind.com/market/dsh-index.json";

const CARDS = [
  { name: "dsh-context", x: 24, y: 128 },
  { name: "dsh-better-sidebar", x: 288, y: 128 },
  { name: "@liustack/modlens", x: 24, y: 226 },
  { name: "dsh-mnemon", x: 288, y: 226 },
];

const css = `
.psg{--psg-dur:14s;--psg-brand:var(--color-brand-500);font-family:inherit}
.psg *{animation-duration:var(--psg-dur);animation-iteration-count:infinite;animation-timing-function:ease-in-out}
.psg .fg{fill:var(--foreground)}
.psg .mu{fill:var(--muted-foreground)}
.psg .card{fill:var(--card);stroke:var(--border)}
.psg .soft{fill:var(--muted)}
.psg .brand{fill:var(--psg-brand)}
.psg .on{fill:#fff}
.psg .s1{animation-name:psg-s1}
.psg .s2{animation-name:psg-s2}
.psg .s3{animation-name:psg-s3}
@keyframes psg-s1{0%{opacity:0}2%,24%{opacity:1}26%,100%{opacity:0}}
@keyframes psg-s2{0%,24%{opacity:0}27%,56%{opacity:1}59%,100%{opacity:0}}
@keyframes psg-s3{0%,57%{opacity:0}60%,97%{opacity:1}100%{opacity:0}}
.psg .p1{animation-name:psg-p1}.psg .p2{animation-name:psg-p2}.psg .p3{animation-name:psg-p3}
@keyframes psg-p1{0%,24%{opacity:1}26%,100%{opacity:0}}
@keyframes psg-p2{0%,24%{opacity:0}26%,57%{opacity:1}59%,100%{opacity:0}}
@keyframes psg-p3{0%,57%{opacity:0}59%,100%{opacity:1}}
.psg .tg-on{animation-name:psg-tgon}
@keyframes psg-tgon{0%,16%{opacity:0}19%,100%{opacity:1}}
.psg .knob{animation-name:psg-knob}
@keyframes psg-knob{0%,16%{transform:translateX(0)}19%,100%{transform:translateX(16px)}}
.psg .row-hl{animation-name:psg-rowhl}
@keyframes psg-rowhl{0%,8%{opacity:0}12%,100%{opacity:1}}
.psg .tab-ul{animation-name:psg-tab;transform-box:fill-box;transform-origin:left}
@keyframes psg-tab{0%,29%{transform:scaleX(0)}31%,100%{transform:scaleX(1)}}
.psg .dialog{animation-name:psg-dlg;transform-box:fill-box;transform-origin:center}
@keyframes psg-dlg{0%,30%{opacity:0;transform:scale(.96)}33%,100%{opacity:1;transform:scale(1)}}
.psg .type{animation-name:psg-type;animation-timing-function:steps(45,end);transform-box:fill-box;transform-origin:left}
@keyframes psg-type{0%,35%{transform:scaleX(0)}47%,100%{transform:scaleX(1)}}
.psg .caret{animation-name:psg-caret}
@keyframes psg-caret{0%,35%{transform:translateX(0)}47%,100%{transform:translateX(316px)}}
.psg .btn-press{animation-name:psg-press;transform-box:fill-box;transform-origin:center}
@keyframes psg-press{0%,49%{transform:scale(1)}50%{transform:scale(.92)}52%,100%{transform:scale(1)}}
.psg .c0{animation-name:psg-c0}.psg .c1{animation-name:psg-c1}.psg .c2{animation-name:psg-c2}.psg .c3{animation-name:psg-c3}
@keyframes psg-c0{0%,60%{opacity:0;transform:translateY(8px)}63%,100%{opacity:1;transform:none}}
@keyframes psg-c1{0%,62%{opacity:0;transform:translateY(8px)}65%,100%{opacity:1;transform:none}}
@keyframes psg-c2{0%,64%{opacity:0;transform:translateY(8px)}67%,100%{opacity:1;transform:none}}
@keyframes psg-c3{0%,66%{opacity:0;transform:translateY(8px)}69%,100%{opacity:1;transform:none}}
.psg .done{animation-name:psg-done}
@keyframes psg-done{0%,81%{opacity:0}83%,100%{opacity:1}}
.psg .ripple{animation-name:psg-ripple;transform-box:fill-box;transform-origin:center;opacity:0}
@keyframes psg-ripple{0%,17%{opacity:0;transform:scale(.2)}18%{opacity:.5;transform:scale(.4)}22%{opacity:0;transform:scale(1.4)}
30%{opacity:0;transform:scale(.2)}31%{opacity:.5;transform:scale(.4)}35%{opacity:0;transform:scale(1.4)}
49%{opacity:0;transform:scale(.2)}50%{opacity:.5;transform:scale(.4)}54%{opacity:0;transform:scale(1.4)}
80%{opacity:0;transform:scale(.2)}81%{opacity:.5;transform:scale(.4)}85%,100%{opacity:0;transform:scale(1.4)}}
.psg .cursor{animation-name:psg-cur}
@keyframes psg-cur{
0%{transform:translate(300px,320px)}
14%,20%{transform:translate(500px,179px)}
28%,32%{transform:translate(158px,100px)}
44%,52%{transform:translate(429px,264px)}
66%{transform:translate(300px,320px)}
78%,84%{transform:translate(232px,192px)}
100%{transform:translate(300px,320px)}}
.psg .cursor-pos{animation-name:psg-cur}
@media (prefers-reduced-motion:reduce){
.psg *{animation:none!important}
.psg .s1,.psg .s2,.psg .p1,.psg .p2,.psg .cursor,.psg .ripple{opacity:0}
}
`;

export function PluginSourceDemo({ labels }: { labels: PluginSourceDemoLabels }) {
  return (
    <svg
      viewBox="0 0 560 340"
      role="img"
      aria-label={labels.steps.join(" → ")}
      className="psg h-auto w-full drop-shadow-xl"
    >
      <style dangerouslySetInnerHTML={{ __html: css }} />

      {/* 窗口框 */}
      <rect x="0.5" y="0.5" width="559" height="339" rx="14" className="card" />
      <path d="M14 .5h532a14 14 0 0 1 14 14V32H.5V14.5A14 14 0 0 1 14 .5Z" className="soft" />
      <circle cx="20" cy="16" r="4.5" fill="#ff5f57" />
      <circle cx="36" cy="16" r="4.5" fill="#febc2e" />
      <circle cx="52" cy="16" r="4.5" fill="#28c840" />
      <text x="280" y="20" textAnchor="middle" fontSize="11" className="mu">{labels.window}</text>

      {/* 步骤条 */}
      {labels.steps.map((step, i) => (
        <g key={step} transform={`translate(${16 + i * 178} 42)`}>
          <rect width="170" height="26" rx="13" className="soft" />
          <rect width="170" height="26" rx="13" className={`brand p${i + 1}`} />
          <circle cx="14" cy="13" r="8" className="card" />
          <text x="14" y="17" textAnchor="middle" fontSize="10.5" fontWeight="700" className="fg">{i + 1}</text>
          <text x="28" y="17" fontSize="11" fontWeight="600" className="fg">
            {step}
          </text>
          <text x="28" y="17" fontSize="11" fontWeight="600" className={`on p${i + 1}`}>
            {step}
          </text>
        </g>
      ))}

      {/* 第一幕：实验插件里打开「自定义插件市场」 */}
      <g className="s1">
        <text x="24" y="104" fontSize="14" fontWeight="700" className="fg">{labels.experimental}</text>
        {labels.rows.map((row, i) => {
          const y = 118 + i * 50;
          const target = i === 1;
          return (
            <g key={row}>
              <rect x="16" y={y} width="528" height="42" rx="10" className="card" />
              {target && <rect x="16" y={y} width="528" height="42" rx="10" fill="none" stroke="var(--psg-brand)" strokeWidth="2" className="row-hl" />}
              <rect x="30" y={y + 11} width="20" height="20" rx="5" className={target ? "brand" : "soft"} />
              <text x="62" y={y + 26} fontSize="12.5" fontWeight={target ? 700 : 500} className="fg">{row}</text>
              <rect x="482" y={y + 11} width="36" height="20" rx="10" className="soft" />
              {target && <rect x="482" y={y + 11} width="36" height="20" rx="10" className="brand tg-on" />}
              <circle cx="492" cy={y + 21} r="7" fill="#fff" stroke="var(--border)" className={target ? "knob" : undefined} />
            </g>
          );
        })}
      </g>

      {/* 第二幕：Discover → 添加索引源，URL 逐字打进去 */}
      <g className="s2">
        <text x="40" y="104" fontSize="13" fontWeight="600" className="mu">{labels.installed}</text>
        <text x="130" y="104" fontSize="13" fontWeight="700" className="fg">{labels.discover}</text>
        <rect x="130" y="110" width="58" height="3" rx="1.5" className="brand tab-ul" />
        <rect x="16" y="118" width="528" height="1" className="soft" />
        <g className="dialog">
          <rect x="72" y="134" width="416" height="164" rx="14" className="card" strokeWidth="1.5" />
          <text x="94" y="166" fontSize="14" fontWeight="700" className="fg">{labels.addSource}</text>
          <rect x="94" y="182" width="372" height="34" rx="8" className="soft" stroke="var(--psg-brand)" strokeWidth="1.5" />
          <clipPath id="psg-type-clip">
            <rect x="104" y="186" width="320" height="26" className="type" />
          </clipPath>
          <text x="105" y="204" fontSize="11.5" fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace" className="fg" clipPath="url(#psg-type-clip)">
            {DSH_INDEX_URL}
          </text>
          <rect x="104" y="190" width="1.5" height="18" className="brand caret" />
          <g className="btn-press">
            <rect x="392" y="248" width="74" height="32" rx="8" className="brand" />
            <text x="429" y="268" textAnchor="middle" fontSize="12.5" fontWeight="700" className="on">{labels.add}</text>
          </g>
        </g>
      </g>

      {/* 第三幕：dshfind 的插件出现在 DSH 里，点安装 */}
      <g className="s3">
        <rect x="16" y="86" width="16" height="16" rx="4" className="brand" />
        <text x="40" y="99" fontSize="13.5" fontWeight="700" className="fg">{labels.marketTitle} ▾</text>
        <text x="544" y="99" textAnchor="end" fontSize="11.5" fontWeight="600" fill="var(--psg-brand)">{labels.marketCount}</text>
        {CARDS.map((c, i) => (
          <g key={c.name} className={`c${i}`}>
            <g transform={`translate(${c.x} ${c.y})`}>
              <rect width="248" height="86" rx="12" className="card" />
              <circle cx="24" cy="26" r="12" className="soft" />
              <circle cx="24" cy="26" r="12" fill="var(--psg-brand)" opacity={0.25 + i * 0.15} />
              <text x="44" y="30" fontSize="12.5" fontWeight="700" className="fg">{c.name}</text>
              <rect x="14" y="50" width={150 - i * 12} height="6" rx="3" className="soft" />
              <rect x="14" y="62" width={110 + i * 8} height="6" rx="3" className="soft" />
              <rect x="180" y="50" width="56" height="24" rx="7" className="brand" />
              <text x="208" y="66" textAnchor="middle" fontSize="11" fontWeight="700" className="on">{labels.install}</text>
              {i === 0 && (
                <g className="done">
                  <rect x="180" y="50" width="56" height="24" rx="7" fill="#10b981" />
                  <text x="208" y="66" textAnchor="middle" fontSize="11" fontWeight="700" className="on">✓ {labels.installedDone}</text>
                </g>
              )}
            </g>
          </g>
        ))}
      </g>

      {/* 光标 + 点击波纹（共用同一条路径动画） */}
      <g className="cursor-pos">
        <circle r="14" fill="var(--psg-brand)" className="ripple" />
      </g>
      <g className="cursor">
        <path
          d="M0 0v17l4.6-4.2 3 6.6 3-1.3-3-6.5H14Z"
          fill="var(--foreground)"
          stroke="var(--card)"
          strokeWidth="1.2"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
}
