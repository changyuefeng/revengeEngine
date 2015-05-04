function Stage(backgroundColor) {
	if (backgroundColor) {
		this.setBackgroundColor(backgroundColor);
	}
	ctx.globalAlpha = 1;
	ctx.drawImage(gameBg, 0, 0, aclWidth, aclHeight);
	this.children = [];
};


Stage.prototype.updateTransform = function() {
	ctx.globalAlpha = 0.2;
	ctx.drawImage(gameBg, 0, 0, aclWidth, aclHeight);
	ctx.globalAlpha = 1;
	for (var i = 0, j = this.children.length; i < j; i++) {
		this.children[i].updateTransform();
	}

};

Stage.prototype.setBackgroundColor = function(backgroundColor) {
	this.backgroundColor = backgroundColor || 0x000000;
	var hex = this.backgroundColor.toString(16);
	hex = '000000'.substr(0, 6 - hex.length) + hex;
	this.backgroundColorString = '#' + hex;
};

Stage.prototype.addChild = function(texture) {
	(texture instanceof Texture) && this.children.push(texture);

	for (var i = this.children.length; i > 0; i--) {
		this.children[i - 1].used && this.children.splice(i - 1, 1);
	}
};