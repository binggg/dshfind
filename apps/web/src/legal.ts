/**
 * 关于 / 联系 / 隐私政策三页的正文（四语言）。
 *
 * 隐私政策按站点实际行为写：Cloudflare Web Analytics、语言 cookie、主题与学习进度存本机、
 * GitHub 登录、论坛内容，以及 Google AdSense 第三方广告 cookie（AdSense 计划政策要求披露）。
 * 站点行为变了（加了新的统计/广告/登录方式）记得同步这里并更新 UPDATED。
 */
import type { Locale } from "~/i18n";

export const LEGAL_UPDATED = "2026-10-16";
export const REPO_URL = "https://github.com/hikariming/dshfind";
export const ISSUES_URL = `${REPO_URL}/issues`;

export type LegalSlug = "about" | "contact" | "privacy";

export interface LegalSection {
  heading: string;
  /** 段落；可含少量内联 HTML（仅链接），内容由本文件维护、不接受外部输入 */
  paragraphs: string[];
}

export interface LegalDoc {
  title: string;
  description: string;
  sections: LegalSection[];
}

const a = (href: string, text: string) => `<a href="${href}" rel="noopener" target="_blank">${text}</a>`;
const GOOGLE_PARTNER = "https://policies.google.com/technologies/partner-sites";
const GOOGLE_ADS_SETTINGS = "https://adssettings.google.com";
const ABOUT_ADS = "https://www.aboutads.info";

export const footerLabels: Record<Locale, Record<LegalSlug, string>> = {
  zh: { about: "关于我们", contact: "联系我们", privacy: "隐私政策" },
  en: { about: "About", contact: "Contact", privacy: "Privacy Policy" },
  ja: { about: "運営者情報", contact: "お問い合わせ", privacy: "プライバシーポリシー" },
  ko: { about: "소개", contact: "문의", privacy: "개인정보 처리방침" },
};

export const updatedLabel: Record<Locale, string> = {
  zh: "最后更新",
  en: "Last updated",
  ja: "最終更新日",
  ko: "최종 업데이트",
};

export const legalDocs: Record<Locale, Record<LegalSlug, LegalDoc>> = {
  zh: {
    about: {
      title: "关于 dshfind",
      description: "dshfind 是面向 DeepSeek Harness (DSH) 的独立社区站：课程、插件目录与论坛。",
      sections: [
        {
          heading: "我们是谁",
          paragraphs: [
            "dshfind（dshfind.com）是一个面向 DeepSeek Harness（DSH）开发者与使用者的独立社区网站，由社区维护者运营，代码开源在 " + a(REPO_URL, "GitHub") + "。",
            "<strong>dshfind 与 DeepSeek 官方没有隶属、合作或授权关系。</strong>“DeepSeek”“DeepSeek Harness”是其各自权利人的名称，本站提及仅用于说明内容所涉及的软件。",
          ],
        },
        {
          heading: "我们提供什么",
          paragraphs: [
            "<strong>学习中心</strong>：原创的 Cordis 论文精读与 DSH 入门课程，从概念讲到插件开发实战。",
            "<strong>插件超市</strong>：收录 DSH 社区插件，提供分类、评分、安装命令推导与编辑点评。插件代码与 README 版权归各自作者，详情页注明来源并链接到原仓库。",
            "<strong>文档</strong>：DeepSeek Harness 官方文档的非官方社区翻译，逐篇注明上游出处，请以官方原文为准。",
            "<strong>论坛</strong>：用 GitHub 账号登录后参与讨论，内容由社区成员发布并接受举报与管理。",
          ],
        },
        {
          heading: "编辑原则",
          paragraphs: [
            "编辑推荐与点评由维护者人工撰写；被标记为可疑（如假冒官方仓库）的项目会挂警示并沉底。赞助内容会明确标注“赞助”，不影响编辑推荐与评分。",
          ],
        },
      ],
    },
    contact: {
      title: "联系我们",
      description: "反馈问题、申请修改插件信息、版权或内容投诉的联系方式。",
      sections: [
        {
          heading: "联系方式",
          paragraphs: [
            "问题反馈、功能建议、插件信息更正：请在 " + a(ISSUES_URL, "GitHub Issues") + " 提交，我们通常会在几天内回复。",
            "社区讨论与求助：欢迎在本站 <a href=\"/zh/bbs\">论坛</a> 发帖。",
          ],
        },
        {
          heading: "版权与内容投诉",
          paragraphs: [
            "如果你是某个插件或文档的作者，希望修改、下架本站对应页面，或认为某些内容侵犯了你的权利，请通过 GitHub Issues 联系并附上能证明身份的链接（如仓库所有权），我们核实后会尽快处理。",
          ],
        },
      ],
    },
    privacy: {
      title: "隐私政策",
      description: "dshfind 收集哪些数据、如何使用，以及第三方（包括 Google 广告）如何使用 cookie。",
      sections: [
        {
          heading: "概述",
          paragraphs: [
            "本政策说明 dshfind.com（“本站”）在你访问时会收集和处理哪些信息。不登录也可以浏览本站的全部公开内容。",
          ],
        },
        {
          heading: "我们收集的信息",
          paragraphs: [
            "<strong>访问统计</strong>：本站使用 Cloudflare Web Analytics 统计页面访问量，它不使用 cookie、不做跨站追踪。本站托管在 Cloudflare 上，Cloudflare 会为安全与防滥用目的处理 IP 地址等请求信息。",
            "<strong>本机存储</strong>：语言偏好保存在名为 NEXT_LOCALE 的 cookie 中；主题（深色/浅色）与学习进度保存在你浏览器的本地存储中，不会上传到服务器。",
            "<strong>账号</strong>：如果你用 GitHub 登录，我们会获得并保存你的 GitHub 用户名、头像与公开主页信息，并用会话 cookie 保持登录状态。我们不会获得你的 GitHub 密码。",
            "<strong>你发布的内容</strong>：论坛帖子、评论与投票会与你的 GitHub 用户名一起公开展示。",
          ],
        },
        {
          heading: "广告与第三方 cookie",
          paragraphs: [
            "本站可能通过 Google AdSense 展示广告。包括 Google 在内的第三方供应商会使用 cookie、网络信标、IP 地址等标识符，根据你此前对本站及其他网站的访问来投放广告。",
            "Google 使用广告 cookie，使其及其合作伙伴能够根据你对本站和/或互联网上其他网站的访问情况向你投放广告。了解 Google 如何使用这些数据：" + a(GOOGLE_PARTNER, "Google 如何使用合作伙伴网站的信息") + "。",
            "你可以在 " + a(GOOGLE_ADS_SETTINGS, "Google 广告设置") + " 中停用个性化广告，或访问 " + a(ABOUT_ADS, "aboutads.info") + " 停用第三方供应商的个性化广告 cookie。",
            "来自欧洲经济区、英国和瑞士的访问者会在广告 cookie 生效前看到同意提示，并可随时更改选择。",
          ],
        },
        {
          heading: "数据的使用与共享",
          paragraphs: [
            "我们只为运营站点、展示你发布的内容、防止滥用与改进服务而使用上述信息，不会出售你的个人信息。除上文所述的服务商（Cloudflare、GitHub、Google）外，我们不会与第三方共享你的个人信息，法律要求的情形除外。",
          ],
        },
        {
          heading: "你的权利",
          paragraphs: [
            "你可以随时删除自己发布的帖子与评论，也可以通过 " + a(ISSUES_URL, "GitHub Issues") + " 申请删除账号相关数据。你可以在浏览器中清除 cookie 与本地存储。",
          ],
        },
        {
          heading: "儿童隐私",
          paragraphs: ["本站面向开发者，并非针对 13 岁以下儿童，我们不会有意收集儿童的个人信息。"],
        },
        {
          heading: "政策变更",
          paragraphs: ["本政策更新时会修改本页的“最后更新”日期。"],
        },
      ],
    },
  },

  en: {
    about: {
      title: "About dshfind",
      description: "dshfind is an independent community site for DeepSeek Harness (DSH): courses, a plugin directory and a forum.",
      sections: [
        {
          heading: "Who we are",
          paragraphs: [
            "dshfind (dshfind.com) is an independent community website for developers and users of DeepSeek Harness (DSH). It is run by community maintainers, and its source code is open on " + a(REPO_URL, "GitHub") + ".",
            "<strong>dshfind is not affiliated with, endorsed by or sponsored by DeepSeek.</strong> “DeepSeek” and “DeepSeek Harness” are names of their respective owners and are used here only to describe the software our content is about.",
          ],
        },
        {
          heading: "What we offer",
          paragraphs: [
            "<strong>Learning center</strong>: original courses, including a close reading of the Cordis paper and a DSH primer that goes from concepts to hands-on plugin development.",
            "<strong>Plugin directory</strong>: community DSH plugins with categories, scores, install commands and editor reviews. Plugin code and READMEs belong to their authors; detail pages credit and link to the source repository.",
            "<strong>Docs</strong>: an unofficial community translation of the DeepSeek Harness documentation. Every page cites its upstream source; the official original is authoritative.",
            "<strong>Forum</strong>: sign in with GitHub to join discussions. Posts are written by community members and can be reported and moderated.",
          ],
        },
        {
          heading: "Editorial principles",
          paragraphs: [
            "Editor's picks and reviews are written by hand. Suspicious projects (such as repositories impersonating official ones) carry a warning and are ranked last. Sponsored content is clearly labeled and does not affect picks or scores.",
          ],
        },
      ],
    },
    contact: {
      title: "Contact",
      description: "How to report problems, correct plugin information, or file copyright and content complaints.",
      sections: [
        {
          heading: "Get in touch",
          paragraphs: [
            "Bug reports, feature ideas and plugin information corrections: please open an issue on " + a(ISSUES_URL, "GitHub Issues") + ". We usually reply within a few days.",
            "Community discussion and help: post in our <a href=\"/en/bbs\">forum</a>.",
          ],
        },
        {
          heading: "Copyright and content complaints",
          paragraphs: [
            "If you are the author of a plugin or document and want its page changed or removed, or believe some content infringes your rights, contact us through GitHub Issues with a link that proves your identity (such as repository ownership). We will act promptly once verified.",
          ],
        },
      ],
    },
    privacy: {
      title: "Privacy Policy",
      description: "What data dshfind collects, how it is used, and how third parties, including Google's advertising, use cookies.",
      sections: [
        {
          heading: "Overview",
          paragraphs: [
            "This policy explains what information dshfind.com (“the site”) collects and processes when you visit. All public content can be read without signing in.",
          ],
        },
        {
          heading: "Information we collect",
          paragraphs: [
            "<strong>Analytics</strong>: we use Cloudflare Web Analytics to count page views. It uses no cookies and does no cross-site tracking. The site is hosted on Cloudflare, which processes request data such as IP addresses for security and abuse prevention.",
            "<strong>Stored on your device</strong>: your language preference is kept in a cookie named NEXT_LOCALE. Your theme (dark/light) and learning progress are kept in your browser's local storage and are never uploaded.",
            "<strong>Accounts</strong>: if you sign in with GitHub, we receive and store your GitHub username, avatar and public profile information, and use a session cookie to keep you signed in. We never receive your GitHub password.",
            "<strong>Content you post</strong>: forum posts, comments and votes are shown publicly together with your GitHub username.",
          ],
        },
        {
          heading: "Advertising and third-party cookies",
          paragraphs: [
            "The site may show ads through Google AdSense. Third-party vendors, including Google, use cookies, web beacons, IP addresses and similar identifiers to serve ads based on your prior visits to this and other websites.",
            "Google's use of advertising cookies enables it and its partners to serve ads to you based on your visits to this site and/or other sites on the Internet. Learn more: " + a(GOOGLE_PARTNER, "How Google uses information from sites that use its services") + ".",
            "You can opt out of personalized advertising in " + a(GOOGLE_ADS_SETTINGS, "Google Ads Settings") + ", or opt out of third-party vendors' cookies for personalized advertising at " + a(ABOUT_ADS, "aboutads.info") + ".",
            "Visitors from the European Economic Area, the UK and Switzerland are asked for consent before advertising cookies are used, and can change their choice at any time.",
          ],
        },
        {
          heading: "How we use and share data",
          paragraphs: [
            "We use this information only to run the site, display what you post, prevent abuse and improve the service. We do not sell personal information. Apart from the service providers named above (Cloudflare, GitHub, Google), we do not share personal information with third parties unless required by law.",
          ],
        },
        {
          heading: "Your rights",
          paragraphs: [
            "You can delete your own posts and comments at any time, and request deletion of your account data through " + a(ISSUES_URL, "GitHub Issues") + ". You can clear cookies and local storage in your browser.",
          ],
        },
        {
          heading: "Children's privacy",
          paragraphs: ["The site is meant for developers and is not directed at children under 13. We do not knowingly collect personal information from children."],
        },
        {
          heading: "Changes to this policy",
          paragraphs: ["When this policy changes, we update the “Last updated” date on this page."],
        },
      ],
    },
  },

  ja: {
    about: {
      title: "dshfind について",
      description: "dshfind は DeepSeek Harness (DSH) のための独立したコミュニティサイトです。講座、プラグイン目録、フォーラムを提供しています。",
      sections: [
        {
          heading: "運営者",
          paragraphs: [
            "dshfind（dshfind.com）は、DeepSeek Harness（DSH）の開発者と利用者のための独立したコミュニティサイトです。コミュニティのメンテナーが運営しており、ソースコードは " + a(REPO_URL, "GitHub") + " で公開しています。",
            "<strong>dshfind は DeepSeek 社とは提携・承認・協賛の関係にありません。</strong>「DeepSeek」「DeepSeek Harness」は各権利者の名称であり、本サイトでは扱うソフトウェアを説明する目的でのみ使用しています。",
          ],
        },
        {
          heading: "提供しているもの",
          paragraphs: [
            "<strong>学習センター</strong>：Cordis 論文の精読講座と DSH 入門講座。概念からプラグイン開発の実践までを扱うオリジナル教材です。",
            "<strong>プラグインストア</strong>：DSH コミュニティのプラグインを分類・スコア・インストールコマンド・編集部レビュー付きで掲載しています。コードと README の著作権は各作者に帰属し、詳細ページには出典と元リポジトリへのリンクを明記しています。",
            "<strong>ドキュメント</strong>：DeepSeek Harness 公式ドキュメントの非公式コミュニティ翻訳です。各ページに上流の出典を記載しており、正確な内容は公式の原文を参照してください。",
            "<strong>フォーラム</strong>：GitHub アカウントでログインして議論に参加できます。投稿は通報とモデレーションの対象です。",
          ],
        },
        {
          heading: "編集方針",
          paragraphs: [
            "おすすめとレビューは編集者が手作業で執筆しています。公式を装ったリポジトリなど疑わしいプロジェクトには警告を表示し、一覧の最後に並べます。スポンサー枠は明示し、おすすめやスコアには影響しません。",
          ],
        },
      ],
    },
    contact: {
      title: "お問い合わせ",
      description: "不具合の報告、プラグイン情報の修正依頼、著作権・コンテンツに関する申し立ての窓口です。",
      sections: [
        {
          heading: "連絡先",
          paragraphs: [
            "不具合報告、機能の提案、プラグイン情報の修正：" + a(ISSUES_URL, "GitHub Issues") + " に起票してください。通常数日以内に返信します。",
            "コミュニティでの議論や質問は <a href=\"/ja/bbs\">フォーラム</a> へどうぞ。",
          ],
        },
        {
          heading: "著作権・コンテンツに関する申し立て",
          paragraphs: [
            "プラグインやドキュメントの作者で、該当ページの修正・削除を希望する場合、または権利侵害と思われる内容を見つけた場合は、本人確認ができるリンク（リポジトリの所有など）を添えて GitHub Issues からご連絡ください。確認後、速やかに対応します。",
          ],
        },
      ],
    },
    privacy: {
      title: "プライバシーポリシー",
      description: "dshfind が収集するデータとその利用方法、Google 広告を含む第三者による Cookie の利用について。",
      sections: [
        {
          heading: "概要",
          paragraphs: [
            "本ポリシーは、dshfind.com（以下「本サイト」）が訪問時に収集・処理する情報について説明します。公開コンテンツはすべてログインなしで閲覧できます。",
          ],
        },
        {
          heading: "収集する情報",
          paragraphs: [
            "<strong>アクセス解析</strong>：ページビューの集計に Cloudflare Web Analytics を使用しています。Cookie を使わず、サイトをまたいだ追跡も行いません。本サイトは Cloudflare 上で運用されており、Cloudflare はセキュリティと不正防止のために IP アドレスなどのリクエスト情報を処理します。",
            "<strong>端末内の保存</strong>：表示言語は NEXT_LOCALE という Cookie に保存します。テーマ（ダーク／ライト）と学習の進捗はブラウザのローカルストレージに保存され、サーバーには送信されません。",
            "<strong>アカウント</strong>：GitHub でログインすると、GitHub のユーザー名、アバター、公開プロフィール情報を取得・保存し、ログイン状態の維持にセッション Cookie を使用します。GitHub のパスワードを受け取ることはありません。",
            "<strong>投稿内容</strong>：フォーラムの投稿、コメント、投票は GitHub のユーザー名とともに公開されます。",
          ],
        },
        {
          heading: "広告と第三者 Cookie",
          paragraphs: [
            "本サイトは Google AdSense による広告を表示する場合があります。Google などの第三者配信事業者は、Cookie、ウェブビーコン、IP アドレスなどの識別子を使用し、本サイトや他のサイトへの過去のアクセス情報に基づいて広告を配信します。",
            "Google が広告 Cookie を使用することにより、Google とそのパートナーは本サイトやインターネット上の他のサイトへのアクセス情報に基づいて広告を配信できます。詳しくは「" + a(GOOGLE_PARTNER, "Google によるパートナー サイトの情報の使用") + "」をご覧ください。",
            a(GOOGLE_ADS_SETTINGS, "Google の広告設定") + " でパーソナライズ広告を無効にできます。また、" + a(ABOUT_ADS, "aboutads.info") + " で第三者配信事業者の Cookie を無効にすることもできます。",
            "欧州経済領域、英国、スイスからの訪問者には、広告 Cookie を使用する前に同意を求め、選択はいつでも変更できます。",
          ],
        },
        {
          heading: "情報の利用と共有",
          paragraphs: [
            "上記の情報は、サイトの運営、投稿の表示、不正防止、サービス改善のためにのみ使用し、個人情報を販売することはありません。上記のサービス事業者（Cloudflare、GitHub、Google）を除き、法令に基づく場合を除いて第三者と個人情報を共有しません。",
          ],
        },
        {
          heading: "利用者の権利",
          paragraphs: [
            "自分の投稿やコメントはいつでも削除できます。アカウントに関するデータの削除は " + a(ISSUES_URL, "GitHub Issues") + " から依頼できます。Cookie とローカルストレージはブラウザから削除できます。",
          ],
        },
        {
          heading: "子どものプライバシー",
          paragraphs: ["本サイトは開発者向けであり、13 歳未満の子どもを対象としていません。子どもの個人情報を意図的に収集することはありません。"],
        },
        {
          heading: "ポリシーの変更",
          paragraphs: ["本ポリシーを変更した場合は、このページの「最終更新日」を更新します。"],
        },
      ],
    },
  },

  ko: {
    about: {
      title: "dshfind 소개",
      description: "dshfind는 DeepSeek Harness(DSH)를 위한 독립 커뮤니티 사이트입니다. 강좌, 플러그인 목록, 포럼을 제공합니다.",
      sections: [
        {
          heading: "운영 주체",
          paragraphs: [
            "dshfind(dshfind.com)는 DeepSeek Harness(DSH) 개발자와 사용자를 위한 독립 커뮤니티 웹사이트입니다. 커뮤니티 메인테이너가 운영하며 소스 코드는 " + a(REPO_URL, "GitHub") + "에 공개되어 있습니다.",
            "<strong>dshfind는 DeepSeek와 제휴, 승인 또는 후원 관계가 없습니다.</strong> 'DeepSeek'와 'DeepSeek Harness'는 각 권리자의 명칭이며, 본 사이트에서는 다루는 소프트웨어를 설명하기 위해서만 사용합니다.",
          ],
        },
        {
          heading: "제공하는 것",
          paragraphs: [
            "<strong>학습 센터</strong>: Cordis 논문 정독 강좌와 DSH 입문 강좌. 개념부터 플러그인 개발 실습까지 다루는 자체 교재입니다.",
            "<strong>플러그인 마켓</strong>: DSH 커뮤니티 플러그인을 분류, 점수, 설치 명령, 편집자 리뷰와 함께 소개합니다. 코드와 README의 저작권은 각 작성자에게 있으며, 상세 페이지에 출처와 원본 저장소 링크를 표시합니다.",
            "<strong>문서</strong>: DeepSeek Harness 공식 문서의 비공식 커뮤니티 번역입니다. 각 페이지에 원문 출처를 표기하며, 정확한 내용은 공식 원문을 기준으로 합니다.",
            "<strong>포럼</strong>: GitHub 계정으로 로그인해 토론에 참여할 수 있습니다. 게시물은 신고 및 관리 대상입니다.",
          ],
        },
        {
          heading: "편집 원칙",
          paragraphs: [
            "추천과 리뷰는 편집자가 직접 작성합니다. 공식 저장소를 사칭하는 등 의심스러운 프로젝트에는 경고를 표시하고 목록 맨 뒤에 둡니다. 후원 콘텐츠는 명확히 표시하며 추천이나 점수에 영향을 주지 않습니다.",
          ],
        },
      ],
    },
    contact: {
      title: "문의",
      description: "문제 신고, 플러그인 정보 수정 요청, 저작권 및 콘텐츠 관련 신고 창구입니다.",
      sections: [
        {
          heading: "연락처",
          paragraphs: [
            "버그 신고, 기능 제안, 플러그인 정보 수정: " + a(ISSUES_URL, "GitHub Issues") + "에 등록해 주세요. 보통 며칠 안에 답변합니다.",
            "커뮤니티 토론과 질문은 <a href=\"/ko/bbs\">포럼</a>을 이용해 주세요.",
          ],
        },
        {
          heading: "저작권 및 콘텐츠 신고",
          paragraphs: [
            "플러그인이나 문서의 작성자로서 해당 페이지의 수정·삭제를 원하거나 권리를 침해하는 콘텐츠를 발견한 경우, 본인임을 확인할 수 있는 링크(저장소 소유 등)와 함께 GitHub Issues로 연락해 주세요. 확인 후 신속히 처리합니다.",
          ],
        },
      ],
    },
    privacy: {
      title: "개인정보 처리방침",
      description: "dshfind가 수집하는 데이터와 그 이용 방법, Google 광고를 포함한 제3자의 쿠키 사용에 대해 설명합니다.",
      sections: [
        {
          heading: "개요",
          paragraphs: [
            "본 방침은 dshfind.com(이하 '본 사이트')이 방문 시 수집·처리하는 정보를 설명합니다. 모든 공개 콘텐츠는 로그인 없이 볼 수 있습니다.",
          ],
        },
        {
          heading: "수집하는 정보",
          paragraphs: [
            "<strong>방문 통계</strong>: 페이지 조회수 집계에 Cloudflare Web Analytics를 사용합니다. 쿠키를 사용하지 않으며 사이트 간 추적을 하지 않습니다. 본 사이트는 Cloudflare에서 운영되며, Cloudflare는 보안과 악용 방지를 위해 IP 주소 등 요청 정보를 처리합니다.",
            "<strong>기기 내 저장</strong>: 언어 설정은 NEXT_LOCALE이라는 쿠키에 저장합니다. 테마(다크/라이트)와 학습 진도는 브라우저 로컬 스토리지에 저장되며 서버로 전송되지 않습니다.",
            "<strong>계정</strong>: GitHub로 로그인하면 GitHub 사용자 이름, 아바타, 공개 프로필 정보를 받아 저장하고, 로그인 유지를 위해 세션 쿠키를 사용합니다. GitHub 비밀번호는 받지 않습니다.",
            "<strong>게시한 콘텐츠</strong>: 포럼 게시물, 댓글, 투표는 GitHub 사용자 이름과 함께 공개됩니다.",
          ],
        },
        {
          heading: "광고 및 제3자 쿠키",
          paragraphs: [
            "본 사이트는 Google AdSense를 통해 광고를 게재할 수 있습니다. Google을 포함한 제3자 공급업체는 쿠키, 웹 비콘, IP 주소 등의 식별자를 사용해 본 사이트 및 다른 웹사이트 방문 기록을 바탕으로 광고를 게재합니다.",
            "Google은 광고 쿠키를 사용하여 사용자의 본 사이트 및 인터넷상의 다른 사이트 방문 기록을 바탕으로 Google과 파트너가 광고를 게재할 수 있게 합니다. 자세한 내용: " + a(GOOGLE_PARTNER, "Google이 파트너 사이트의 정보를 사용하는 방법") + ".",
            a(GOOGLE_ADS_SETTINGS, "Google 광고 설정") + "에서 맞춤 광고를 사용 중지하거나, " + a(ABOUT_ADS, "aboutads.info") + "에서 제3자 공급업체의 맞춤 광고 쿠키를 사용 중지할 수 있습니다.",
            "유럽 경제 지역, 영국, 스위스 방문자에게는 광고 쿠키를 사용하기 전에 동의를 요청하며, 선택은 언제든지 변경할 수 있습니다.",
          ],
        },
        {
          heading: "정보의 이용 및 공유",
          paragraphs: [
            "위 정보는 사이트 운영, 게시물 표시, 악용 방지, 서비스 개선을 위해서만 사용하며 개인정보를 판매하지 않습니다. 위에 명시한 서비스 제공업체(Cloudflare, GitHub, Google)를 제외하고는 법령에 따른 경우가 아니면 제3자와 개인정보를 공유하지 않습니다.",
          ],
        },
        {
          heading: "이용자의 권리",
          paragraphs: [
            "본인이 작성한 게시물과 댓글은 언제든지 삭제할 수 있으며, 계정 관련 데이터 삭제는 " + a(ISSUES_URL, "GitHub Issues") + "로 요청할 수 있습니다. 쿠키와 로컬 스토리지는 브라우저에서 삭제할 수 있습니다.",
          ],
        },
        {
          heading: "아동의 개인정보",
          paragraphs: ["본 사이트는 개발자를 위한 사이트로 만 13세 미만 아동을 대상으로 하지 않으며, 아동의 개인정보를 고의로 수집하지 않습니다."],
        },
        {
          heading: "방침의 변경",
          paragraphs: ["본 방침이 변경되면 이 페이지의 '최종 업데이트' 날짜를 갱신합니다."],
        },
      ],
    },
  },
};
