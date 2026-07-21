// icon + link pairs — footer social row, shared across pages
const socials = [
	{
		href: "https://www.linkedin.com/in/kim4/",
		icon: "ri-linkedin-box-fill",
	},
	{ href: "https://github.com/dkim2448", icon: "ri-github-fill" },
	{ href: "mailto:daniel.k.kim@ucdenver.edu", icon: "ri-mail-fill" },
];

export default function SocialLinks() {
	return (
		<div className="mb-24 flex gap-2">
			{socials.map((s) => (
				<a key={s.icon} href={s.href} target="_blank" rel="noreferrer">
					<i
						className={`${s.icon} text-xl sm:text-3xl inline-block transition-all duration-300 hover:-translate-y-1 hover:text-cyan-400`}
					></i>
				</a>
			))}
		</div>
	);
}
