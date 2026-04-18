// js/texture.js

export default function(texture, ctx) {
  const atlas = new Image();
  let loaded = false;

  atlas.src = texture;
  atlas.onload = () => {
    loaded = true;
  };

  function TextureDraw(sx, sy, sw, sh, dx, dy, dw, dh, rot = 0) {
    if (!loaded) return;

    ctx.save();

    switch (rot) {
      case 90:
        ctx.translate(dx + dw, dy);
        ctx.rotate(Math.PI / 2);
        break;

      case 180:
        ctx.translate(dx + dw, dy + dh);
        ctx.rotate(Math.PI);
        break;

      case 270:
        ctx.translate(dx, dy + dh);
        ctx.rotate(Math.PI * 1.5);
        break;

      default: 
      ctx.translate(dx, dy);
      break;
    }

    ctx.drawImage(atlas, sx, sy, sw, sh, 0, 0, dw, dh);
    ctx.restore();
  }

  return {
    draw: TextureDraw
  };
} 