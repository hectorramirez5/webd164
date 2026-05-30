
//Hamburger menu functionality
const toggle = document.getElementById("menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");

toggle.addEventListener("click", () => {
	const isHidden = mobileMenu.classList.toggle("hidden");
	toggle.setAttribute("aria-expanded", !isHidden);
});

//Settings button toggle animation
/*document.querySelector(".toggle-btn").addEventListener("click", function(){
	document.querySelector(".btnn").classList.toggle("move");
}) */

//Dark Mode button
const btnn = document.getElementById("btn");
const newTheme = localStorage.getItem("theme");

if (newTheme === "dark") {
	document.body.classList.add("dark-mode");
}

btnn.addEventListener("click", function () {
	document.body.classList.toggle("dark-mode");

	let theme = "light";
	if (document.body.classList.contains("dark-mode")) {
		theme = "dark";
	}
	localStorage.setItem("theme", theme);
})

//Blue theme button
const butn = document.getElementById("blue-btn");
const scndTheme = localStorage.getItem("bluTheme");

if (scndTheme === "blue") {
  document.body.classList.add("blue-mode");
}

  butn.addEventListener("click", function () {
    document.body.classList.toggle("blue-mode");

    let bluTheme = "lightt";
    if (document.body.classList.contains("blue-mode")) {
      bluTheme = "blue";
    }
    localStorage.setItem("bluTheme", bluTheme);
  }) 

//Old dark mode
/* function drkMode() {
	const theme = document.body;
	theme.classList.toggle("dark-mode");
} */


//RSS feed functionality
/* const rssFeed = {
  url: "https://www.bavarianfootballworks.com/rss/index.xml", label: BavarianFootballWorks
};

const proxy = "https://api.allorigins.win/get?url=";
const items = 3;

async function fetch(feed) {
  try {

    const proxyFetch = await fetch(proxy + encodeURIComponent(feed.url));

    const parser = new DOMParser();
    const xml = parser.parseFromString(data.contents, "text/xml");
  
  catch (error) {
    return ();
  }

  };

async function loadFeed() {
  const ctn = document.getElementById("feed-ctn");
  container.innerHTML = "";

  const allArticles = (await Promise.all(feds.map(fetch))).flat();

  allArticles.forEach(article => {
    const div = document.createElement("div");
    div.className = "feed-itm";
    div.innerHTML = `
                    <h2><a href="${article.link}" target="_blank" rel="noopener noreferrer">${article.title}</a></h2>
                    <div class="meta">
                        <span class="source-badge">${article.source}</span>
                        <span>${article.date.toLocaleDateString()} at ${article.date.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</span>
                    </div>
                    <div class="description">${article.description}</div>
                `;
                container.appendChild(div);
  })
}

}*/
