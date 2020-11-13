// ************************************************
// Basic Animations Step:
//
// step 01: Clear the environment (canvas)
// step 02: Change the state
// step 03: Update the state
// step 04: Restore the state
// ************************************************
const canvas = document.getElementById("space");
const ctx = canvas.getContext("2d");

const frameRate = 30;

window.onload = () => {
  setInterval(galaxy, 1000 / frameRate);
};

const galaxy = () => {
  
}


