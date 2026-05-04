
//Hamburger menu functionality
const toggle = document.getElementById("menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");

toggle.addEventListener("click", () => {
	const isHidden = mobileMenu.classList.toggle("hidden");
	toggle.setAttribute("aria-expanded", !isHidden);
});

//reader mode functionality for compatible browsers
function handleUpdated(tabId, changeInfo, tabInfo) {
	if (changeInfo.status === "complete") {
		console.log('Tab ${tabId} reader mode: ${tabInfo.isInReaderMode}');
	}
}

browser.tabs.onUpdated.addListener(handleUpdated);