window.onload = function () {
    const form = document.querySelector("form");
    form.onsubmit = function (event) {
        event.preventDefault();

        let over17 = document.getElementById("over17");
        over17.setAttribute("class", "hidden");
        let under18 = document.getElementById("under18")
        under18.setAttribute("class", "hidden");
        const age = parseInt(document.querySelector("#ageInput").value);

        if (age >= 18) {
            over17.removeAttribute("class");
        } else {
            under18.removeAttribute("class");
        };
    };
};