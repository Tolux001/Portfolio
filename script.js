const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".navbar");
const navBar = document.querySelector(".logo");
// const h3 = document.querySelector(".h3");
// const h1 = document.querySelector(".h1");
// const h3Span = document.querySelector(".h3-span");
// const par = document.querySelector(".par");
// const socials = document.querySelector(".fa-brands");
// const btn = document.querySelector(".btn");

navToggle.addEventListener("click", () => {
	if (links.classList.contains("show-links")) {
		links.classList.remove("show-links");
		navToggle.style.transform = "rotate(0deg)";
	} else {
		links.classList.add("show-links");
		navBar.classList.add("active-nav");
		navToggle.style.transform = "rotate(450deg)";
	}
});
