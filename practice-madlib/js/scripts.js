window.onload = function () {
    let form = document.querySelector("form");
    form.onsubmit = function (e) {
        e.preventDefault();
        const adj1Input = document.getElementById("adj1Input").value;
        const adj2Input = document.getElementById("adj2Input").value;
        const verb1Input = document.getElementById("verb1Input").value;
        const noun1Input = document.getElementById("noun1Input").value;
        const person1Input = document.getElementById("person1Input").value;
        const noun2Input = document.getElementById("noun2Input").value;

        document.querySelector("span#adj1").innerText = adj1Input;
        document.querySelector("span#adj2").innerText = adj2Input;
        document.querySelector("span#verb1").innerText = verb1Input;
        document.querySelector("span#noun1").innerText = noun1Input;
        document.querySelector("span#person1").innerText = person1Input;
        document.querySelector("span#noun2").innerText = noun2Input;

        document.querySelector("div#story").removeAttribute("class");
    };
};