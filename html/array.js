let items = [
	{
		id: 4,
		img: "../images/evntauth.png",
		name: "Event Auth",
		anchor: `https://eventauth.vercel.app/`,
		span: "Next.js + TypeScript + Tailwind CSS + Firebase Auth + Firestore",
		description: `An event management system that allows users to create, manage, and attend events. It includes user authentication, event creation, and a calendar view of upcoming events.`,
	},
	{
		id: 1,
		img: "../images/dompro.png",
		name: "DOM PROJECTS",
		anchor: `https://toluxdomproject.netlify.app/`,
		span: "HTML + CSS + JS",
		description: `A landing that holds various DOM projects I have laid my hands on`,
	},
	{
		id: 2,
		img: "https://toluxdomproject.netlify.app/images/item-10.png",
		name: "Chrome New Tab Page",
		anchor: `https://tolux-new-tab-page.vercel.app/`,
		span: "HTML + CSS + JS",
		description: `A new tab page for browsers on start-up`,
	},
	{
		id: 3,
		img: "https://toluxdomproject.netlify.app/images/item-8.png",
		name: "Drum Kit",
		anchor: `https://tolux-drum-kit.netlify.app/`,
		span: "HTML + CSS + JS",
		description: `A web page where drum effect can be played by clicking or using the keyboard.`,
	},
	{
		id: 5,
		img: "../images/prettycash.png",
		name: "Petty Cash",
		anchor: `https://pettycash-dummy.netlify.app/`,
		span: "React.js",
		description: `PettyCash landing page using react`,
	},
	{
		id: 6,
		img: "../images/cake.png",
		name: "Cake For Twitter Desktop",
		anchor: `https://tolux001.github.io/Cheese-Cake-For-Twitter/#`,
		span: "HTML + CSS + JS",
		description: `Landing Page For Popular Twitter Cheese Cake Website.`,
	},
	{
		id: 7,
		img: "../images/card.png",
		name: "Profile Card",
		anchor: `https://tolux-dev-profile-card.netlify.app/`,
		span: "React.js",
		description: `Developers Profile card using react`,
	},
];
const projectContainer = document.querySelector(".project--section");

const projectItemFunction = (projects) => {
	let projectList = projects.map((item) => {
		return `
		<div class="project--card--container">
			<img src="${item.img}" alt="${item.name}" />
			<div class="project--info">
				<h2>${item.name}</h2>
				<p>${item.description}</p>
				<div>
					<span>${item.span}</span>
				</div>
				<a class="project-anchor" href="${item.anchor}" target="_blank" rel="noopener noreferrer">
				<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-external-link">
					<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6"></path>
					<polyline points="15 3 21 3 21 9"></polyline>
					<line x1="10" y1="14" x2="21" y2="3"></line>
				</svg>
				View Project
				</a>
			</div>
		</div>`;
	});
	projectList = projectList.join("");
	projectContainer.innerHTML = projectList;
};

window.addEventListener("DOMContentLoaded", () => {
	projectItemFunction(items);
});
