let items = [
	{
		id: 4,
		img: "../images/evntauth.jpg",
		name: "Event Auth",
		anchor: `https://eventauth.vercel.app/`,
		span: "Next.js + TypeScript + Tailwind CSS + Firebase Auth + Firestore",
		description: `An event management system that allows users to create & register for events. It includes user biometric authentication for registering at events.`,
	},
	{
		id: 4,
		img: "../images/calmmind.jpg",
		name: "Calm Mind",
		anchor: `https://calm-mind-zeta.vercel.app/`,
		span: "Next.js + TypeScript + Tailwind CSS + Shadcn + Firebase Auth + Firestore",
		description: `A web app to help you check and keep track of your stress level, AI bot integration for communication.`,
	},
	{
		id: 4,
		img: "../images/swift.jpg",
		name: "Swift Vote",
		anchor: `https://swift-election-olaleyeag20s-projects.vercel.app/`,
		span: "Next.js + TypeScript + Tailwind CSS + Firebase Auth + Firestore",
		description: `School voting platform, flexible and rigid for any platform`,
	},
	{
		id: 1,
		img: "../images/dompro.jpg",
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
		img: "../images/prettycash.jpg",
		name: "Petty Cash",
		anchor: `https://pettycash-dummy.netlify.app/`,
		span: "React.js",
		description: `PettyCash landing page using react`,
	},
	{
		id: 6,
		img: "../images/cake.jpg",
		name: "Cake For Twitter Desktop",
		anchor: `https://tolux001.github.io/Cheese-Cake-For-Twitter/#`,
		span: "HTML + CSS + JS",
		description: `Landing Page For Popular Twitter Cheese Cake Website.`,
	},
	{
		id: 7,
		img: "../images/card.jpg",
		name: "Profile Card",
		anchor: `https://tolux-dev-profile-card.netlify.app/`,
		span: "React.js",
		description: `Developers Profile card using react`,
	},
];
let certificationItems = [
	{
		id: 1,
		img: "../images/prograte.jpg",
		name: "Web Development Course(Node.js)",
		anchor: `https://progate.com/path_certificate/e23f4e66rfr91h`,
		span: "Progate",
	},
	{
		id: 2,
		img: "../images/citadel.png",
		name: "Website Design and Development",
		anchor: ``,
		span: "Citadel Institute",
	},
	{
		id: 3,
		img: "../images/gdsc.jpg",
		name: "Frontend Development(React.js)",
		anchor: ``,
		span: "Google Developer Group",
	},
	{
		id: 4,
		img: "../images/intro.jpg",
		name: "Meta: Introduction to Frontend Development",
		anchor: `https://www.coursera.org/account/accomplishments/verify/ZS6GFFTAR8FR`,
		span: "Coursera",
	},
	{
		id: 5,
		img: "../images/vc.jpg",
		name: "Meta: Version Control",
		anchor: `https://www.coursera.org/account/accomplishments/verify/ZS6GFFTAR8FR`,
		span: "Coursera",
	},
	{
		id: 6,
		img: "../images/js.jpg",
		name: "Meta: Javascript Mastery",
		anchor: `https://www.coursera.org/account/accomplishments/verify/5TQ7W6KPALRM`,
		span: "Coursera",
	},
	{
		id: 7,
		img: "../images/gen-ai.jpg",
		name: "Generative AI Linkedin Professional",
		anchor: `https://www.linkedin.com/learning/certificates/f63d0aefefc11598f34978aeb65696911b0601d256739fa999460de02a30f374?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BeOBlXb0KRv6aodBmO03PiA%3D%3D`,
		span: "Linkedin Learning",
	},
];
let skillItem = [
	{
		id: 1,
		img: "../images/typescript.svg",
		name: "TypeScript",
	},
	{
		id: 2,
		img: "../images/javascript.svg",
		name: "JavaScript",
	},
	{
		id: 3,
		img: "../images/react.svg",
		name: "React.js",
	},
	{
		id: 4,
		img: "../images/html-5.svg",
		name: "HTML5",
	},
	{
		id: 5,
		img: "../images/css-3.svg",
		name: "CSS3",
	},
	{
		id: 6,
		img: "../images/node.svg",
		name: "Node.js",
	},
	{
		id: 7,
		img: "../images/nodejs.svg",
		name: "Express.js",
	},
	{
		id: 7,
		img: "../images/nextjs.svg",
		name: "Next.js",
	},
	{
		id: 7,
		img: "../images/firebase.svg",
		name: "Firebase",
	},
	{
		id: 7,
		img: "../images/vercel.svg",
		name: "Vercel",
	},
	{
		id: 7,
		img: "../images/git.svg",
		name: "Git",
	},
	{
		id: 7,
		img: "../images/github.svg",
		name: "GitHub",
	},
	{
		id: 7,
		img: "../images/vscode.svg",
		name: "VSCode",
	},
	{
		id: 7,
		img: "../images/tailwind.svg",
		name: "Tailwind",
	},
	{
		id: 7,
		img: "../images/figma.svg",
		name: "Figma",
	},
	{
		id: 7,
		img: "../images/mongodb.svg",
		name: "MongoDB",
	},
	{
		id: 7,
		img: "../images/redux.svg",
		name: "Redux",
	},
	{
		id: 7,
		img: "../images/python.svg",
		name: "Python",
	},
];

const projectContainer = document.querySelector("#project--section");
const certificationContainer = document.querySelector(
	"#certification--section"
);
const skillsContainer = document.querySelector("#skills-container");

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

const certificationItemFunction = (projects) => {
	let certificateList = projects.map((item) => {
		return `
		<div class="project--card--container">
			<img src="${item.img}" alt="${item.name}" />
			<div class="project--info">
				<h2>${item.name}</h2>
				<div>
					<span>${item.span}</span>
				</div>
				<a class="project-anchor" href="${item.anchor}" target="_blank" rel="noopener noreferrer">
				<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-external-link">
					<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6"></path>
					<polyline points="15 3 21 3 21 9"></polyline>
					<line x1="10" y1="14" x2="21" y2="3"></line>
				</svg>
				View Certificate
				</a>
			</div>
		</div>`;
	});
	certificateList = certificateList.join("");
	certificationContainer.innerHTML = certificateList;
};

const skillItemFunction = (projects) => {
	let skillList = projects.map((item) => {
		return `
		<div class="skill">
	<img loading="lazy" src="${item.img}" alt=${item.name} />
	<p>${item.name}</p>
</div>`;
	});
	skillList = skillList.join("");
	skillsContainer.innerHTML = skillList;
};

window.addEventListener("DOMContentLoaded", () => {
	projectItemFunction(items);
	certificationItemFunction(certificationItems);
	skillItemFunction(skillItem);
});
