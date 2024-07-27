/* Siderbar */

document.querySelector("#sidebar-toggle").addEventListener("click", function () {
    document.querySelector("#sidebar").classList.toggle("collapsed");
});

/* Darkmode */

document.getElementById("toggletheme").addEventListener("click", () => {
    toggleLocalStorage();
    toggleRootClass();
});

function toggleRootClass() {

    let htmlElement = document.documentElement;
    let current = htmlElement.getAttribute("data-bs-theme");
    let toggleThemeElement = document.getElementById("toggletheme");

    if (current == "light") {
        htmlElement.setAttribute("data-bs-theme", "dark");
        toggleThemeElement.innerHTML = '<i class="bi bi-brightness-high-fill"></i>';
    } else {
        htmlElement.setAttribute("data-bs-theme", "light");
        toggleThemeElement.innerHTML = '<i class="bi bi-moon-fill"></i>';
    }
}

function toggleLocalStorage() {
    if (isLight()) {
        localStorage.removeItem("light");
    } else {
        localStorage.setItem("light", "set");
    }
}

function isLight() {
    return localStorage.getItem("light");
}

if (isLight()) {
    toggleRootClass();
}