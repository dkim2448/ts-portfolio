// shared shapes for portfolio content data

export interface LinkItem {
	label: string;
	url: string;
}

export interface ExperienceItem {
	title: string;
	org?: string; // company/org name (optional)
	orgUrl?: string; // link for org name
	date: string; // date range or tech stack line
	links?: LinkItem[]; // right-side links (live, github, showcase, etc.)
}
