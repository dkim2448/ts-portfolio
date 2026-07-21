import type { ExperienceItem } from "./types";

// Update these arrays when your work/projects change — no JSX editing needed

export const work: ExperienceItem[] = [
	{
		title: "teaching assistant at",
		org: "CU Denver College of Engineering",
		orgUrl: "https://engineering.ucdenver.edu/",
		date: "august 2025 - present",
	},
	{
		title: "STEM peer mentor at",
		org: "TRIO SSS & McNair Scholars",
		orgUrl: "https://www.ucdenver.edu/trio/student-support-services",
		date: "december 2024 - present",
	},
];

export const projects: ExperienceItem[] = [
	{
		title: "ai article summarizer - (50+ installs)",
		date: "react, javascript, css, gemini api",
		links: [
			{
				label: "github",
				url: "https://github.com/dkim2448/ai-article-summarizer",
			},
			{
				label: "chrome web store",
				url: "https://chromewebstore.google.com/detail/ai-article-summarizer/fgobljoipipijjbenglnkkmdbdcbfkcc",
			},
		],
	},
	{
		title: "galaxy generator",
		date: "three.js, webgl, javascript",
		links: [
			{ label: "live", url: "https://galaxy-gen-five.vercel.app/" },
			{ label: "github", url: "https://github.com/dkim2448/galaxy-gen" },
		],
	},
	{
		title: "youtube clone",
		date: "react, typescript, tailwind",
		links: [
			{ label: "live", url: "https://dkim2448.github.io/youtube-clone-ts/" },
			{ label: "github", url: "https://github.com/dkim2448/youtube-clone-ts" },
		],
	},
	{
		title: "library management system",
		date: "c++",
		links: [
			{ label: "github", url: "https://github.com/dkim2448/librarysystem" },
		],
	},
];

export const community: ExperienceItem[] = [
	{
		title: "S-STEM engineering learning community mentor at",
		org: "University of Colorado Denver",
		orgUrl:
			"https://engineering.ucdenver.edu/current-students/scholarships/s-stem-scholarships",
		date: "fall 2023 - spring 2025",
	},
];
