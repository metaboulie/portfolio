import adapter from "@sveltejs/adapter-static";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";
import { mdsvex, escapeSvelte } from "mdsvex";
import { createHighlighter } from "shiki";

// Create a singleton highlighter instance
let highlighterPromise;
const getHighlighter = async () => {
    if (!highlighterPromise) {
        highlighterPromise = createHighlighter({
            themes: ["nord"],
            langs: ["typescript", "svelte", "fish"],
        });
    }
    return highlighterPromise;
};

/** @type {import('@sveltejs/kit').Config} */
const config = {
    extensions: [".svelte", ".md", ".svx"],

    preprocess: [
        vitePreprocess(),
        mdsvex({
            extensions: [".md", ".svx"],
            highlight: {
                highlighter: async (code, lang = "text") => {
                    const highlighter = await getHighlighter();
                    await highlighter.loadLanguage("typescript", "svelte", "fish");
                    const html = escapeSvelte(
                        highlighter.codeToHtml(code, { lang, theme: "nord" }),
                    );
                    return `{@html \`${html}\` }`;
                },
            },
        }),
    ],

    kit: {
        adapter: adapter({
            pages: "build",
            assets: "build",
            fallback: "404.html",
            precompress: false,
            strict: true,
        }),
        paths: {
            base: "/portfolio",
        },
    },
};

export default config;
