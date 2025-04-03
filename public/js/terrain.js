function drawTerrain(ctx, terrain, mountainImg, treeImg) {
    ctx.fillStyle = "green";
    ctx.beginPath();
    ctx.moveTo(terrain[0].x, terrain[0].y);

    for (let i = 1; i < terrain.length; i++) {
        ctx.lineTo(terrain[i].x, terrain[i].y);
    }

    ctx.lineTo(ctx.canvas.width, ctx.canvas.height);
    ctx.lineTo(0, ctx.canvas.height);
    ctx.closePath();
    ctx.fill();

    ctx.drawImage(mountainImg, 100, 100, 200, 150);
    ctx.drawImage(treeImg, 500, 220, 50, 80);
}
