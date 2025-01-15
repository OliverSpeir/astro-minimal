import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import robotsTxt from "astro-robots-txt";
import icon from "astro-icon";

export default defineConfig({
	site: "http://www.example.com",
	integrations: [
		sitemap(),
		robotsTxt(),
		icon({
			iconDir: "src/assets/icons",
		}),
	],
});
