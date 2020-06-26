class Scenary {
  constructor(image, speed) {
    this.image = image;
    this.speed = speed;
    this.x1 = 0;
    this.x2 = width;
  }

  show() {
    image(
      this.image, //bkg img
      this.x1, //start img x
      0, //start img y
      width, //img size
      height //img size
    );

    image(
      this.image, //bkg img
      this.x2, //start img x
      0, //start img y
      width, //img size
      height //img size
    );
  }

  move() {
    this.x1 = this.x1 - this.speed;
    this.x2 = this.x2 - this.speed;

    if (this.x1 < -width) {
      this.x1 = width;
    }

    if (this.x2 < -width) {
      this.x2 = width;
    }
  }
}
