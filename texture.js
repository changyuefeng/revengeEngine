function Texture(imgsrc) {
	this.innerObj = new Image();
	this.innerObj.src = imgsrc;

	this.x = 0;
	this.y = 0;
	this.endX = 0;
	this.endY = 0;
	this.playing = false;
	this.used = false;
	this.speedX = 0;
	this.speedY = 0;
	this.totalProcess = 0;
	this.currentProcess = 0;
	this.down = false;
	this.up = false;
};


Texture.prototype.updateTransform = function() {
	if (this.playing) {
		if (this.currentProcess < this.totalProcess) {
			this.currentProcess++;
			this.x += this.speedX;
			this.y += this.speedY;
			ctx.drawImage(this.innerObj, this.x, this.y);
			//这边缩放好像有点怪怪的,先整其他的
			if (this.down) {
				//				ctx.drawImage(gameBg, this.x, 0, this.innerObj.width * 2, (this.y - 80) * 2, this.x, 0, this.innerObj.width, this.y - 80);
			} else if (this.up) {
				//				ctx.drawImage(gameBg, this.x, this.y + this.innerObj.height + 45, this.innerObj.width, 80, this.x, this.y + this.innerObj.height + 45, this.innerObj.width, 80);
			}
			return;
		}
		this.playing = false;
	}
	this.used = true;
};

Texture.prototype.setLineAnimation = function(x, y, endX, endY, mills) {
	this.x = x;
	this.y = y;
	this.endX = endX;
	this.endY = endY;
	this.playing = false;
	this.speedX = (endX - x) / (mills * FPS / 1000);
	this.speedY = (endY - y) / (mills * FPS / 1000);
	this.totalProcess = mills * FPS / 1000;
	this.playing = true;
	if (y < endY) {
		this.down = true;
	} else if (y > endY) {
		this.up = true;
	}
};

Texture.prototype.destoryTexture = function() {
	this.playing = false, this.used = true;
}