document.addEventListener("DOMContentLoaded", () => {
	const tabs = document.querySelectorAll('[role="tab"]');
	const panels = document.querySelectorAll('[role="tabpanel"]');

	tabs[0].classList.add("active");
	panels[0].classList.add("active");

	tabs.forEach(tab => {
		const link = tab.querySelector("a");

		link.addEventListener("click", e => {
			

			tabs.forEach(t => t.classList.remove("active"));
			panels.forEach(p => p.classList.remove("active"));

			tab.classList.add("active");

			const target = document.querySelector(link.getAttribute("href"));
			target.classList.add("active");

			e.preventDefault();
		});
	});
});