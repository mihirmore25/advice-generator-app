// fetch("https://api.adviceslip.com/advice")
//     .then(async (data) => {
//         const response = await data.json();
//         console.log(response.slip);
//     })
//     .catch((err) => {
//         console.log(err);
//     });

const diceButton = document.querySelector(".btn");

diceButton.addEventListener("click", async (e) => {
    const data = await fetch("https://api.adviceslip.com/advice");
    const response = await data.json();
    console.log(response.slip);

    const advice = document.getElementById("advice");
    const id = document.getElementById("id");

    advice.textContent = `"${response.slip.advice}"`;
    id.textContent = `ADVICE # ${response.slip.id}`;
});
