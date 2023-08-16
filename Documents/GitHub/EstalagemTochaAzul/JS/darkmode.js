const chk = document.querySelector('#chk');

//Toggle dark mode
function toggleDarkMode () {
    document.body.classList.toggle('dark');
}

// Load Light or Dark Mode
function loadTheme() {
    const darkMode = localStorage.getItem("dark")

    if(darkMode) {
        toggleDarkMode();
    }
}

loadTheme();

chk.addEventListener('change', function() {
    toggleDarkMode ()
    
    // Save or remove dark mode
    localStorage.removeItem("dark");
    
    if(document.body.classList.contains("dark")) {
        localStorage.setItem("dark", 1);
    }
    
})