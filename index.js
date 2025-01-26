document.addEventListener("DOMContentLoaded", () => {
    const blackContainer = document.querySelector(".container-black");

    // Полосы прозрачности
    const transparentStripes = [
        { top: "20%", height: "5%" },
        { top: "40%", height: "5%" },
        { top: "60%", height: "5%" },
        { top: "80%", height: "5%" }
    ];

    // Генерация clip-path на основе полос
    const clipPathValue = transparentStripes
        .map((stripe) => `inset(${stripe.top} 0 calc(100% - ${parseFloat(stripe.top) + parseFloat(stripe.height)}%) 0)`)
        .join(", ");

    // Установка clip-path для чёрного слоя
    blackContainer.style.clipPath = `polygon(0 0, 100% 0, 100% 100%, 0 100%)`;
    blackContainer.style.maskImage = `none`;
});
