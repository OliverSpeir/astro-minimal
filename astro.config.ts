import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import robotsTxt from "astro-robots-txt";

export default defineConfig({
	site: "http://www.example.com",
	integrations: [sitemap(), robotsTxt()],
});
