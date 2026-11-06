import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { createRequire } from "node:module";
import { test } from "node:test";
import { runInNewContext } from "node:vm";

const require = createRequire(import.meta.url);
const ts = require("typescript");
const source = readFileSync(
	new URL(
		"../components/landing/navigation/landing-routes.ts",
		import.meta.url,
	),
	"utf8",
);
const exports = {};
runInNewContext(
	ts.transpileModule(source, {
		compilerOptions: { module: ts.ModuleKind.CommonJS },
	}).outputText,
	{ exports, URL },
);
const { getLandingRoute, LANDING_LOCALES, LANDING_STATIC_PATHS } = exports;

test("all copied marketing pages have a valid localized route", () => {
	for (const locale of LANDING_LOCALES) {
		for (const path of LANDING_STATIC_PATHS) {
			const unavailable =
				(path === "/Landing/BIS-integracija" && locale !== "lv") ||
				(path.endsWith("how-to-track-construction-site-progress") &&
					locale === "ru");
			const route = getLandingRoute(
				new URL(`https://buvconsult.com/${locale}${path}`),
			);
			assert.equal(Boolean(route), !unavailable, `${locale}${path}`);
		}
	}
});

test("Buvconsult home and existing bookmarks open the copied content", () => {
	for (const locale of LANDING_LOCALES) {
		assert.equal(
			getLandingRoute(new URL(`https://buvconsult.com/${locale}`)).path,
			"/Landing",
		);
	}
	for (const [path, expected] of [
		["/lv/par-mums", "/Landing/About"],
		["/lv/projekti", "/Landing/Custom"],
		["/en/contact", "/Landing/ContactForm"],
		["/en/privacy-policy", "/Landing/Privacy"],
	]) {
		assert.equal(
			getLandingRoute(new URL(`https://buvconsult.com${path}`)).path,
			expected,
		);
	}
});

test("news pagination and anchor destinations survive navigation", () => {
	const route = getLandingRoute(
		new URL("https://buvconsult.com/en/Landing/News?page=4#articles"),
	);
	assert.equal(route.page, 4);
	assert.equal(route.href, "/en/Landing/News?page=4#articles");
	assert.equal(
		getLandingRoute(new URL("https://buvconsult.com/ru/Landing/News/42"))
			.articleId,
		42,
	);
});

test("client navigation leaves non-marketing URLs alone", () => {
	for (const path of [
		"/dashboard",
		"/api/send",
		"/lv/Landing/missing",
		"/de/Landing",
		"/lv/Landing/News/not-a-number",
	]) {
		assert.equal(
			getLandingRoute(new URL(`https://buvconsult.com${path}`)),
			null,
		);
	}
});

test("public translations use Buvconsult and lower work-cost figures", () => {
	const figures = { lv: "15% zemākas", en: "15% lower", ru: "На 15% ниже" };
	for (const locale of LANDING_LOCALES) {
		const text = readFileSync(
			new URL(`../messages/${locale}.json`, import.meta.url),
			"utf8",
		);
		const messages = JSON.parse(text);
		assert.doesNotMatch(text, /worksrecorded/i);
		assert.match(messages.AgentLanding.description, /Buvconsult/);
		assert.equal(messages.AgentLanding.savings[2].amount, figures[locale]);
		assert.equal(
			messages.AgentLanding.team.deividsExperience.trim().split(/\s+/).length,
			5,
		);
		assert.equal(
			messages.AgentLanding.team.vjaceslavsExperience.trim().split(/\s+/)
				.length,
			5,
		);
	}
});

test("copied public articles have unique IDs and Buvconsult branding", () => {
	const text = readFileSync(
		new URL("../data/landing-news.json", import.meta.url),
		"utf8",
	);
	const articles = JSON.parse(text);
	assert.ok(articles.length > 0);
	assert.equal(
		new Set(articles.map((article) => article.id)).size,
		articles.length,
	);
	assert.doesNotMatch(text, /worksrecorded/i);
});

test("the inline startup script is valid JavaScript for every language", () => {
	const layout = ts.createSourceFile(
		"layout.tsx",
		readFileSync(new URL("../app/layout.tsx", import.meta.url), "utf8"),
		ts.ScriptTarget.Latest,
		true,
		ts.ScriptKind.TSX,
	);
	let script;
	function visit(node) {
		if (
			ts.isNoSubstitutionTemplateLiteral(node) &&
			node.text.includes("document.documentElement.lang")
		)
			script = node.text;
		ts.forEachChild(node, visit);
	}
	visit(layout);
	assert.ok(script);
	for (const [pathname, locale] of [
		["/lv", "lv"],
		["/en/Landing/Agents", "en"],
		["/ru/Landing", "ru"],
		["/Landing", "lv"],
	]) {
		const document = { documentElement: {} };
		runInNewContext(script, { document, location: { pathname } });
		assert.equal(document.documentElement.lang, locale);
	}
});
