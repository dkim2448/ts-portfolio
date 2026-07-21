import type { ExperienceItem } from "../types";

// one row in the work/projects/community lists - title + date on the left,
// optional links on the right
export default function ExperienceRow({
	title,
	org,
	orgUrl,
	date,
	links,
}: ExperienceItem) {
	return (
		<div className="mb-2.5 sm:mb-5 flex justify-between">
			<div>
				<p>
					{title}{" "}
					{org && (
						<a
							href={orgUrl}
							target="_blank"
							rel="noreferrer"
							className="underline underline-offset-4"
						>
							{org}
						</a>
					)}
				</p>

				<p className="text-gray-300">{date}</p>
			</div>

			{links && (
				<div className="flex flex-row gap-2.5">
					{links.map((l) => (
						<a
							key={l.url}
							href={l.url}
							target="_blank"
							rel="noreferrer"
							className="hover:underline underline-offset-4"
						>
							{l.label}
						</a>
					))}
				</div>
			)}
		</div>
	);
}
