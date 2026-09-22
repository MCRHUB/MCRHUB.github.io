// @ts-check
import { defineConfig } from "astro/config";
import { fileURLToPath } from "url";
import UnoCSS from "unocss/astro";

// https://astro.build/config
export default defineConfig({
  site: 'https://MCRHUB.github.io',
  base: '/notebooks', // 关键：强制指定基础路径
  output: import.meta.env.DEV ? 'server' : 'static',
  integrations: [UnoCSS({ injectReset: true })],
  server: {
    host: true
  },
  vite: {
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
        "urodele.config": fileURLToPath(new URL("./urodele.config.ts", import.meta.url))
      },
    },
  },
});
