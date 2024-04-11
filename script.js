function createLoaderPieces() {
  const loader = document.getElementById("loader");
  for (let i = 0; i < 30; i++) {
    const piece = document.createElement("div");
    piece.classList.add("loader-piece");
    piece.style.transform = `rotate(${i * 12}deg)`; // Rotate each piece evenly around the circle
    loader.appendChild(piece);
  }
}

// Function to set the completion of the loader
function setLoaderCompletion(completion) {
  const pieces = document.querySelectorAll(".loader-piece");
  const redPiecesCount = Math.min(
    Math.floor((completion * pieces.length) / 100),
    pieces.length
  );
  for (let i = 0; i < redPiecesCount; i++) {
    pieces[i].classList.add("red");
  }
}

// Example usage:
// Call setLoaderCompletion function with completion percentage (here 20%)
window.addEventListener(
  "DOMContentLoaded",
  function () {
    createLoaderPieces();
    // Example usage: Set completion to 20%
    setLoaderCompletion(20);
  },
  false
);
