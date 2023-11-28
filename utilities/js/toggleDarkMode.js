//DarkMode Script//
let darkModeState = false;   

let icon = document.querySelector('#darkmode-btn i');

const useDark = window.matchMedia("(prefers-color-scheme: dark)");

//Botón para cambiar entre modo oscuro y claro
let darkmode = document.querySelector('#darkmode-btn');

function toggleDarkMode(state){
    document.documentElement.classList.toggle("dark-mode", state);
    darkModeState = state;
    state ? icon.setAttribute('class','fa-regular fa-moon text-xl') : icon.setAttribute('class','fa-regular fa-sun text-xl')
}

// Sets localStorage state
function setDarkModeLocalStorage(state) {
localStorage.setItem("dark-mode", state);
}

// Initial setting
toggleDarkMode(localStorage.getItem("dark-mode") == "true");

// Listen for changes in the OS settings.
// Note: the arrow function shorthand works only in modern browsers,
// for older browsers define the function using the function keyword.
useDark.addListener((evt) => toggleDarkMode(evt.matches));

// Toggles the "dark-mode" class on click and sets localStorage state
darkmode.addEventListener("click", () => {
darkModeState = !darkModeState;

toggleDarkMode(darkModeState);
setDarkModeLocalStorage(darkModeState);
});
