"use strict";

const contentPaths = {
	main: "main.html",
	news: "news.html",
	profile: "profile.html",
};

const contentButtonsSection = document.getElementById("content-buttons");
const contentContainer = document.getElementById("container");

/**
 * @param {keyof typeof contentPaths} contentType
 */
function setMainContent(contentType) {
	const filename = contentPaths[contentType];

	fetch(filename)
		.then((response) => {
			return response.text();
		})
		.then((html) => {
			contentContainer.innerHTML = html;
		});
}

contentButtonsSection.addEventListener("click", (event) => {
	if (!event.target.classList.contains("content-button"))
		return;

	/** @type {HTMLButtonElement} */
	const button = event.target;

	const { contentType } = button.dataset;

	if (contentType == null)
		throw new Error("Content type is not specified");

	setMainContent(contentType);
});

setMainContent("main");
