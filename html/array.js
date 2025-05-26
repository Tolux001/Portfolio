let items = [
	{
		id: 1,
		img: "../images/tolux001.jpg",
		name: "DOM PROJECTS",
		anchor: `https://toluxdomproject.netlify.app/`,
		span: "react",
		description: `A landing that holds various DOM projects i have laid my hands on`,
	},
	{
		id: 2,
		img: "../images/tolux001.jpg",
		name: "Chrome New Tab Page",
		anchor: `https://tolux-new-tab-page.vercel.app/`,
		span: "react",
		description: `A landing that holds various DOM projects i have laid my hands on`,
	},
	{
		id: 3,
		img: "../images/tolux001.jpg",
		name: "Drum Kit",
		anchor: `https://tolux-drum-kit.netlify.app/`,
		span: "react",
		description: `A landing that holds various DOM projects i have laid my hands on`,
	},
	{
		id: 4,
		img: "../images/tolux001.jpg",
		name: "DOM PROJECTS",
		anchor: `https://toluxdomproject.netlify.app/`,
		span: "react",
		description: `A landing that holds various DOM projects i have laid my hands on`,
	},
	{
		id: 5,
		img: "../images/tolux001.jpg",
		name: "DOM PROJECTS",
		anchor: `https://toluxdomproject.netlify.app/`,
		span: "react",
		description: `A landing that holds various DOM projects i have laid my hands on`,
	},
	{
		id: 6,
		img: "../images/tolux001.jpg",
		name: "DOM PROJECTS",
		anchor: `https://toluxdomproject.netlify.app/`,
		span: "react",
		description: `A landing that holds various DOM projects i have laid my hands on`,
	},
	{
		id: 7,
		img: "../images/tolux001.jpg",
		name: "DOM PROJECTS",
		anchor: `https://toluxdomproject.netlify.app/`,
		span: "react",
		description: `A landing that holds various DOM projects i have laid my hands on`,
	},
	{
		id: 8,
		img: "../images/tolux001.jpg",
		name: "DOM PROJECTS",
		anchor: `https://toluxdomproject.netlify.app/`,
		span: "react",
		description: `A landing that holds various DOM projects i have laid my hands on`,
	},
	{
		id: 9,
		img: "../images/tolux001.jpg",
		name: "DOM PROJECTS",
		anchor: `https://toluxdomproject.netlify.app/`,
		span: "react",
		description: `A landing that holds various DOM projects i have laid my hands on`,
	},
	{
		id: 10,
		img: "../images/tolux001.jpg",
		name: "DOM PROJECTS",
		anchor: `https://toluxdomproject.netlify.app/`,
		span: "react",
		description: `A landing that holds various DOM projects i have laid my hands on`,
	},
	{
		id: 11,
		img: "../images/tolux001.jpg",
		name: "DOM PROJECTS",
		anchor: `https://toluxdomproject.netlify.app/`,
		span: "react",
		description: `A landing that holds various DOM projects i have laid my hands on`,
	},
];
const projectContainer = document.querySelector(".project--section");

const projectItemFunction = (projects) => {
	let projectList = projects.map((item) => {
		return `
		<div class="project--card--container">
			<img src="${item.img}" alt="${item.name}" />
			<div class="project--info">
				<h2>${item.name} ✅</h2>
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
