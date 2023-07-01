(() => {
    const refs = {
      openCardBtn: document.querySelector("[data-card-open]"),
      closeCardBtn: document.querySelector("[data-card-close]"),
      card: document.querySelector("[data-card]"),
    };
  
    refs.openCardBtn.addEventListener("click", toggleCard);
    refs.closeCardBtn.addEventListener("click", toggleCard);
  
    function toggleCard() {
      refs.card.classList.toggle("is-hidden");
      document.body.classList.toggle("no-scroll");
    }
  })();