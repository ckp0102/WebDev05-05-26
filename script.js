// Mars fact button working script

document.addEventListener("DOMContentLoaded", function () {

    const factButtons = document.querySelectorAll(".fact-button");

    factButtons.forEach(function (button) {
        button.addEventListener("click", function () {

            const factText = button.getAttribute("data-fact");

            const output = button.nextElementSibling;

            output.textContent = factText;

        });
    });

});