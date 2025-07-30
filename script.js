const btns = document.querySelectorAll(".btn");
const screen = document.getElementById("output-screen");

btns.forEach(btn => {
    btn.addEventListener("click", (e) => {
        const btnValue = e.target.innerHTML;

        if (btnValue === "=") {
            try {
                screen.value = Function('"use strict"; return (' + screen.value + ')')();
            } catch (err) {
                screen.value = "Error";
            }
        } else if (btnValue === "CL") {
            screen.value = '';
        } else if (btnValue === "DEL") {
            screen.value = screen.value.slice(0, -1);
        } else {
            if (screen.value === "0") screen.value = ''; // Odstraní počáteční "0"
            screen.value += btnValue;
        }
    });
});
