const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".navbar");
const navBar = document.querySelector(".logo");

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
