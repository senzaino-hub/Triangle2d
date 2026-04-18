import Texture from "./render/texture.js";

const rightbtn = document.getElementById("rightbtn");
const leftbtn = document.getElementById("leftbtn");
const jumpbtn = document.getElementById("jumpbtn");
const destroybtn = document.getElementById("destroybtn");

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const atlasPath = document.getElementById("config").dataset.atlas;
const atlas = Texture(atlasPath, ctx);

let playerX = 96;
let playerY = 128;
let playerV = 0;

let player_right = false;
let player_right_test = false;
let player_left = false;
let player_left_test = false;

let palyer_renderbool = true;
let renderbool = true;

let renderbool2 = [
  [true, true, true, true, true, true, true, true, true],
  [true, true, true, true, true, true, true, true, true],
  [true, true, true, true, true, true, true, true, true],
  [true, true, true, true, true, true, true, true, true],
  [true, true, true, true, true, true, true, true, true],
  [true, true, true, true, true, true, true, true, true],
  [true, true, true, true, true, true, true, true, true],
  [true, true, true, true, true, true, true, true, true],
  [true, true, true, true, true, true, true, true, true],
  [true, true, true, true, true, true, true, true, true],
  [true, true, true, true, true, true, true, true, true],
  [true, true, true, true, true, true, true, true, true],
  [true, true, true, true, true, true, true, true, true],
  [true, true, true, true, true, true, true, true, true],
  [true, true, true, true, true, true, true, true, true],
  [true, true, true, true, true, true, true, true, true]
];

let chunk = [
  [
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
  ],
  [
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
  ],
  [
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
  ],
  [
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
  ]
];

for (let i = 0; i < 16; i++) {
  for (let j = 0; j < 9; j++) {
    if (i > 5) {
      if (chunk[1][i - 1][j] == 0) {
        chunk[1][i][j] = 2;
      }else {
        chunk[1][i][j] = 4;
      }
    }
  }
} 

function testDataDraw(data, dx, dy, rot = 0) {
  const number = data;
  switch (number) {
    case 0:
      atlas.draw(0, 0, 32, 32, dx, dy, 32, 32, rot);
      break;
    case 1:
      atlas.draw(32, 0, 32, 32, dx, dy, 32, 32, rot);
      break;
    case 2:
      atlas.draw(64, 0, 32, 32, dx, dy, 32, 32, rot);
      break;
    case 3:
      atlas.draw(96, 0, 32, 32, dx, dy, 32, 32, rot);
      break;
    case 4:
      atlas.draw(128, 0, 32, 32, dx, dy, 32, 32, rot);
      break;
    case 5:
      atlas.draw(160, 0, 32, 32, dx, dy, 32, 32, rot);
      break;
  }
}

function testDraw() {
  for (let i = 0; i < 16; i++) {
    for (let j = 0; j < 9; j++) {
      if (renderbool2[i][j] == true) {
        if (chunk[0][i][j] == 0) {
          testDataDraw(chunk[1][i][j], j * 32, i * 32, 0);
        }else if (chunk[0][i][j] == 1) {
          testDataDraw(chunk[1][i][j], j * 32, i * 32, 180);
          testDataDraw(chunk[2][i][j], j * 32, i * 32, 0);
        }else {
          testDataDraw(chunk[1][i][j], j * 32, i * 32, 90);
          testDataDraw(chunk[2][i][j], j * 32, i * 32, 270);
        }
        if (chunk[3][i][j] > 0) {
          ctx.fillStyle = `rgba(0,0,0,${0.043 * chunk[3][i][j]})`;
          ctx.fillRect(j * 32, i * 32, 32, 32);
        }
      }
    }
  }
}

function Update() {
  if (playerV == 0 || player_left == true && player_right == true) {
    player_left_test = false;
    player_right_test = false;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    testDraw();
    atlas.draw(0, 32, 32, 64, playerX - 16, playerY - 32, 32, 64, 0);
  }else if (player_left == true) {
    if (playerX > 5) {
      playerX -= 5;
    }
     ctx.clearRect(0, 0, canvas.width, canvas.height);
     testDraw();
    atlas.draw(32, 32, 32, 64, playerX - 16, playerY - 32, 32, 64, 0);
  }else if (player_right == true) {
    if (playerX < 283) {
      playerX += 5;
    }
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    testDraw();
    atlas.draw(64, 32, 32, 64, playerX - 16, playerY - 32, 32, 64, 0);
  }
  const playerMathX = Math.floor(playerX / 32);
  const playerMathY = Math.floor(playerY / 32);
  if (chunk[0][playerMathY][playerMathX] == 0) {
    if (chunk[1][playerMathY + 1][playerMathX] < 2 || chunk[0][playerMathY + 1][playerMathX] == 2 && chunk[2][playerMathY + 1][playerMathX] < 2) {
      playerY += 9;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      testDraw();
      atlas.draw(64, 32, 32, 64, playerX - 16, playerY - 32, 32, 64, 0);
    }
  }
  playerV -= 1;
}
rightbtn.addEventListener("pointerdown", () => {
  player_right = true;
  player_left_test = false;
  player_right_test = true;
  playerV = 120;
});
leftbtn.addEventListener("pointerdown", () => {
  player_left = true;
  player_right_test = false;
  player_left_test = true;
  playerV = 120;
});
jumpbtn.addEventListener("click", () => {
  const playerMathX = Math.floor(playerX / 32);
  const playerMathY = Math.floor(playerY / 32);
  if (chunk[1][playerMathY + 1][playerMathX] > 1) playerY -= 46;
});
destroybtn.addEventListener("pointerdown", () => {
  const playerMathX = Math.floor(playerX / 32);
  const playerMathY = Math.floor(playerY / 32);
  if (playerV == 0) {
    chunk[0][playerMathY + 1][playerMathX] = 2;
    chunk[1][playerMathY + 1][playerMathX] = chunk[2][playerMathY + 1][playerMathX] + 1;
    chunk[2][playerMathY + 1][playerMathX] = 1;
  }else if (player_left_test == true) {
    chunk[0][playerMathY + 1][playerMathX] = 1;
    chunk[2][playerMathY + 1][playerMathX] = chunk[1][playerMathY + 1][playerMathX] + 1;
    chunk[1][playerMathY + 1][playerMathX] = 1;
  }else if (player_right_test == true) {
    chunk[0][playerMathY + 1][playerMathX] = 2;
    chunk[1][playerMathY + 1][playerMathX] = chunk[1][playerMathY + 1][playerMathX] + 1;
    chunk[2][playerMathY + 1][playerMathX] = 1;
  }
  renderbool = true;
});

document.addEventListener("pointerup", () => {
  player_right = false;
  player_left = false;
});
document.addEventListener("pointercancel", () => {
  player_left = false;
  player_right = false;
});
document.addEventListener("pointerout", () => {
  player_left = false;
  player_right = false;
});

const FPS = 30;
const interval = 1000 / FPS;
let lastTime = 0;

function loop(time) {
  if(time - lastTime >= interval) {
    if (renderbool == true) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      testDraw();
      atlas.draw(64, 32, 32, 64, playerX - 16, playerY - 32, 32, 64, 0);
      renderbool = false;
    }
    Update();
    lastTime = time;
  }
  requestAnimationFrame(loop);
}
requestAnimationFrame(loop);
