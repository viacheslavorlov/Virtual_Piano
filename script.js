document.addEventListener("keydown", e => {
    // if (e.code === `Key${e.key.toUpperCase()}`) {
        new Audio(`sound/${e.key.toUpperCase()}.mp3`).play();
    }
)



