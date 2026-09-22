const flipcard = document.querySelectorAll(".flip_card");

flipcard.forEach(card => {
    card.addEventListener("click", () => {
        card.classList.toggle("is_flipped");
    })})
