var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        event.preventDefault();
        /* Toggle between adding and removing the "active" class, to highlight the button that controls the panel */
        this.classList.toggle("active");
        
        /* Toggle between hiding and showing the active panel */
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }

        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }

        if (panel.style.padding) {
            panel.style.paddingTop = 15 + "px";
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}