document.addEventListener("DOMContentLoaded", () => {
    // Meters
    const hungerMeter = document.getElementById("hungerMeter");
    const happinessMeter = document.getElementById("happinessMeter");
    const cleanlinessMeter = document.getElementById("cleanlinessMeter");
    const energyMeter = document.getElementById("energyMeter");
    const healthMeter = document.getElementById("healthMeter");

    // Buttons
    const customizeButton = document.getElementById("customizeButton");
    const customizationPanel = document.getElementById("customizationPanel");
    const feedButton = document.getElementById("feedButton");
    const playButton = document.getElementById("playButton");
    const cleanButton = document.getElementById("cleanButton");
    const restButton = document.getElementById("restButton");
    const hatButton = document.getElementById("hatButton");
    const scarfButton = document.getElementById("scarfButton");
    const defaultButton = document.getElementById("defaultButton");
    const resetButton = document.getElementById("resetButton"); // Ensure this exists in your HTML
    const petImage = document.getElementById("petImage");

    // Toggle customization panel visibility
    customizeButton.addEventListener("click", () => {
        customizationPanel.style.display =
            customizationPanel.style.display === "none" || !customizationPanel.style.display
                ? "block"
                : "none";
    });

    // Button event listeners to change the image
    hatButton.addEventListener("click", () => {
        petImage.src = "https://www.creativefabrica.com/wp-content/uploads/2023/04/30/Dog-Wearing-a-hat-vector-illustration-Graphics-68499186-1.jpg";
    });

    scarfButton.addEventListener("click", () => {
        petImage.src = "https://png.pngtree.com/png-vector/20240611/ourlarge/pngtree-sticker-of-a-cartoon-dog-wearing-scarf-and-pullover-png-image_12692864.png";
    });

    defaultButton.addEventListener("click", () => {
        petImage.src = "https://e7.pngegg.com/pngimages/227/230/png-clipart-pug-my-virtual-pet-dog-my-talking-dog-virtual-pet-virtual-pet-game-android-mammal-carnivoran-thumbnail.png";
    });

    glassesButton.addEventListener("click", () => {
        petImage.src = "https://media.istockphoto.com/id/1336354356/vector/cute-jack-russell-terrier-dog-with-sunglasses-cartoon-vector-illustration.jpg?s=612x612&w=0&k=20&c=k3wmilKGhfZ2UcsC2TPUoFn0gt-Obtns0ixce59afcI=";
    });

    // Update meters
    function updateMeter(meter, amount) {
        let newValue = Math.max(0, Math.min(100, meter.value + amount));
        meter.value = newValue;
    }

    // Button functionalities
    feedButton.addEventListener("click", () => {
        updateMeter(hungerMeter, 20);
        updateMeter(healthMeter, 5);
    });

    playButton.addEventListener("click", () => {
        updateMeter(happinessMeter, 15);
        updateMeter(energyMeter, -10);
    });

    cleanButton.addEventListener("click", () => {
        updateMeter(cleanlinessMeter, 25);
        updateMeter(healthMeter, 5);
    });

    restButton.addEventListener("click", () => {
        updateMeter(energyMeter, 20);
        updateMeter(healthMeter, 10);
    });

    // Simulate gradual stat decrease
    setInterval(() => {
        updateMeter(hungerMeter, -1);
        updateMeter(happinessMeter, -1);
        updateMeter(cleanlinessMeter, -1);
        updateMeter(energyMeter, -1);
        updateMeter(healthMeter, -1);
    }, 3000);
});
