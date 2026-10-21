import { bindings, defineConfig, exports, triggers } from "cf/config";

/**
 * api-edge 的 cf 配置（cf migrate 自 wrangler.jsonc 生成）。
 *
 * wrangler.jsonc 暂时保留：scripts/deploy-api-edge.mjs 的回滚锚点与 sync-plugins
 * 的日常发布仍走 wrangler，wrangler 不读本文件。两份配置必须同步改——
 * 路由、vars、绑定任何一处变了，两边一起改。
 */
export default defineConfig({
  worker: {
    name: "dshfind-api-edge",
    compatibilityDate: "2026-08-01",
    entrypoint: "worker.mjs",
    observability: {
      enabled: true,
    },
    // 与 wrangler.jsonc 的 routes 逐条对应；路由说明见那边的注释。
    triggers: [
      triggers.fetch({ pattern: "api.dshfind.com/v1/plugins*", zone: "dshfind.com" }),
      triggers.fetch({ pattern: "api.dshfind.com/market/*", zone: "dshfind.com" }),
      triggers.fetch({ pattern: "api.dshfind.com/v1/suggest*", zone: "dshfind.com" }),
      triggers.fetch({ pattern: "api.dshfind.com/v1/catalog*", zone: "dshfind.com" }),
      triggers.fetch({ pattern: "api.dshfind.com/graphql*", zone: "dshfind.com" }),
      triggers.fetch({ pattern: "api.dshfind.com/v1/forum*", zone: "dshfind.com" }),
      triggers.fetch({ pattern: "api.dshfind.com/v1/me/*", zone: "dshfind.com" }),
      triggers.fetch({ pattern: "api.dshfind.com/auth/*", zone: "dshfind.com" }),
      triggers.fetch({ pattern: "api.dshfind.com/healthz", zone: "dshfind.com" }),
    ],
    env: {
      WEB_URL: bindings.text("https://dshfind.com"),
      API_PUBLIC_URL: bindings.text("https://api.dshfind.com"),
      AUTH_COOKIE_DOMAIN: bindings.text("dshfind.com"),
      GITHUB_CLIENT_ID: bindings.text("Ov23liYjg53iiY627GBf"),
      DB: bindings.d1({
        name: "dshfind",
        id: "47f4c8d2-a9d7-41c3-b142-f8693b20a89d",
      }),
      RATE_LIMITER: bindings.durableObject({
        worker: "dshfind-api-edge",
        exportName: "RateLimiter",
      }),
      ASSETS: bindings.assets(),
    },
    // 取代 wrangler 的 migrations（tag v1：new_sqlite_classes = RateLimiter）。
    // 线上类本来就是 SQLite 存储，这里只声明现状，不触发任何迁移。
    exports: {
      RateLimiter: exports.durableObject({ storage: "sqlite" }),
    },
  },
});
