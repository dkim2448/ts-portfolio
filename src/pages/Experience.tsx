import { work, projects, community } from "../data";
import ExperienceRow from "../components/ExperienceRow";

// text-xs/sm/base on the wrapper cascades down to every row (mirrors old .experience media queries)
export default function Experience() {
	return (
		<div className="mt-12 text-xs sm:text-sm md:text-base">
			<section className="mb-12">
				<h5 className="font-bold text-sm sm:text-lg md:text-xl mt-10 mb-5 sm:mb-10">
					work
				</h5>

				{work.map((item) => (
					<ExperienceRow key={item.title} {...item} />
				))}
			</section>

			<section className="mb-12">
				<h5 className="font-bold text-sm sm:text-lg md:text-xl mt-10 mb-5 sm:mb-10">
					projects
				</h5>
				{projects.map((item) => (
					<ExperienceRow key={item.title} {...item} />
				))}
			</section>

			<section>
				<h5 className="font-bold text-sm sm:text-lg md:text-xl mt-10 mb-5 sm:mb-10">
					community involvement
				</h5>
				{community.map((item) => (
					<ExperienceRow key={item.title} {...item} />
				))}
			</section>
		</div>
	);
}
