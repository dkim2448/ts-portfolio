// NavLink: link a normal <a>, but it knows if its `to` matches the current url -
// that's how it replaces the old manual class="active" in html
import { NavLink } from "react-router-dom";

// NavLink calls this fn itself and passes { isActive }, so no manual url checking needed
const linkClass = ({ isActive }: { isActive: boolean }) =>
	isActive
		? "text-cyan-400"
		: "text-white hover:underline underline-offset-4 decoration-cyan-400 decoration-2 transition-all";

const staticLinkClass =
	"text-white hover:underline underline-offset-4 decoration-cyan-400 decoration-2 transition-all";

export default function Navbar() {
	return (
		// text size shrinks on small screens
		<nav className="flex justify-between text-xs sm:text-xs md:text-base">
			<div className="text-lg">
				<p>daniel kim</p>
			</div>

			<div className="flex flex-col gap-3 sm:gap-1 text-right">
				{/*
        to="/" and to="/about" must patch the `path` values in App.tsx's <Route> list
        */}
				<NavLink to="/" className={linkClass}>
					experience
				</NavLink>

				<NavLink to="/about" className={linkClass}>
					about
				</NavLink>

				<a href="mailto:daniel.k.kim@ucdenver.edu" className={staticLinkClass}>
					contact
				</a>

				<a href="" rel="noreferrer" className={staticLinkClass}>
					resume <i className="ri-profile-line"></i>
				</a>
			</div>
		</nav>
	);
}
