// BrowserRouter: reads the url and syncs it with react state - wrap the whole app once, at the top
// Routes: container that looks at the current url, and picks ONE matching Route to render
// Route: maps a path to a component - path"/" → Experience, path="/about" → About
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import SocialLinks from "./components/SocialLinks";
import Snow from "./components/Snow";
import Experience from "./pages/Experience";
import About from "./pages/About";

function App() {
	return (
		<BrowserRouter>
			<Snow />
			<div className="w-full max-w-2xl mx-auto px-10 sm:px-20 md:px-0 pt-12">
				<Navbar />
				<Routes>
					<Route path="/" element={<Experience />} />
					<Route path="/about" element={<About />} />
				</Routes>
				<SocialLinks />
			</div>
		</BrowserRouter>
	);
}

export default App;
