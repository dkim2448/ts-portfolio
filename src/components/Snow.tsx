import { useEffect, useRef } from "react";

// recreates the falling-snow background from the old script.js.
// uses a ref instead of querySelector, and cleans up listeners on unmount
// so it doesn't leak when React swaps pages.
const PARTICLES_PER_1000PX = 0.1;
const FALL_SPEED = 1.25;
const MAX_SNOWFLAKES = 200;

export default function Snow() {
	const containerRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const container = containerRef.current;
		if (!container) return;

		const snowflakes: HTMLDivElement[] = [];
		let intervalId: number;
		let isTabActive = true;

		function resetSnowflake(flake: HTMLDivElement) {
			const size = Math.random() * 5 + 1;
			const viewportWidth = window.innerWidth - size;
			const viewportHeight = window.innerHeight;
			flake.style.width = `${size}px`;
			flake.style.height = `${size}px`;
			flake.style.left = `${Math.random() * viewportWidth}px`;
			flake.style.top = `-${size}px`;
			const duration = (Math.random() * 3 + 2) / FALL_SPEED;
			flake.style.animationDuration = `${duration}s`;
			flake.style.animationTimingFunction = "linear";
			flake.style.animationName =
				Math.random() < 0.5 ? "fall" : "diagonal-fall";
			setTimeout(() => {
				if (parseInt(flake.style.top, 10) < viewportHeight) {
					resetSnowflake(flake);
				} else {
					flake.remove();
				}
			}, duration * 1000);
		}

		function createSnowflake() {
			if (snowflakes.length >= MAX_SNOWFLAKES || !container) return;
			const flake = document.createElement("div");
			flake.className =
				"absolute bg-white rounded-full opacity-80 pointer-events-none";
			snowflakes.push(flake);
			container.appendChild(flake);
			resetSnowflake(flake);
		}

		function generate() {
			const numberOfParticles =
				Math.ceil((window.innerWidth * window.innerHeight) / 1000) *
				PARTICLES_PER_1000PX;
			const interval = 5000 / numberOfParticles;
			clearInterval(intervalId);
			intervalId = window.setInterval(() => {
				if (isTabActive && snowflakes.length < MAX_SNOWFLAKES) {
					requestAnimationFrame(createSnowflake);
				}
			}, interval);
		}

		function handleVisibility() {
			isTabActive = !document.hidden;
			if (isTabActive) {
				generate();
			} else {
				clearInterval(intervalId);
			}
		}

		function handleResize() {
			clearInterval(intervalId);
			setTimeout(generate, 1000);
		}

		generate();
		window.addEventListener("resize", handleResize);
		document.addEventListener("visibilitychange", handleVisibility);

		return () => {
			clearInterval(intervalId);
			window.removeEventListener("resize", handleResize);
			document.removeEventListener("visibilitychange", handleVisibility);
			snowflakes.forEach((f) => f.remove());
		};
	}, []);

	return (
		<div
			ref={containerRef}
			className="fixed top-0 left-0 w-screen h-screen overflow-hidden -z-10 pointer-events-none"
		/>
	);
}
