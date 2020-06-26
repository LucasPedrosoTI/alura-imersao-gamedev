function generateMatriz(totalWidth, totalHeight, nLines, nCol) {
  let xElements = [0],
    baseX = totalWidth / (nLines - 1),
    yElements = [0],
    baseY = totalHeight / (nCol - 1),
    finalArray = [];

  for (let i = 1; i <= nLines - 1; i++) {
    xElements.push(baseX * i);
  }

  for (let i = 1; i <= nCol - 1; i++) {
    yElements.push(baseY * i);
  }

  for (let z = 0; z < yElements.length; z++) {
    for (let i = 0; i < xElements.length; i++) {
      finalArray.push([xElements[i], yElements[z]]);
    }
  }

  return finalArray;
}

class Char {
  constructor(
    image,
    totalWidth,
    totalHeight,
    nLines,
    nCol,
    imageWidth,
    imageHeight,
    cropWidth,
    cropHeight
  ) {
    this.image = image;
    this.matriz = generateMatriz(totalWidth, totalHeight, nLines, nCol);
    this.currentFrame = 0;
    this.imageHeight = imageHeight;
    this.imageWidth = imageWidth;
    this.cropWidth = cropWidth;
    this.cropHeight = cropHeight;
  }

  show() {
    image(
      this.image, //image to render
      0, //postion x
      height - this.imageHeight, //position Y
      this.imageWidth, //image size x
      this.imageHeight, //image size y
      this.matriz[this.currentFrame][0], // crop start X
      this.matriz[this.currentFrame][1], // crop star Y
      this.cropWidth, //crop end X
      this.cropHeight // crop end Y
    );

    this.animate();
  }

  animate() {
    this.currentFrame++;

    if (this.currentFrame >= this.matriz.length - 1) {
      this.currentFrame = 0;
    }
  }
}
