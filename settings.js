//系统环境
FPS = 60;
screenWidth = 320;
screenHeight = 568;
//下面为计算出来的实际值
aclWidth = 320;
aclHeight = 568;
canvas = document.getElementById("canvas");
ctx = canvas.getContext("2d");

gameBg = new Image();
gameBg.src = "bg2.png";

function calAclSize() {
	var a = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
	var ratioX = (window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth) / screenWidth;
	var ratioY = a / screenHeight;
	var a = ratioX < ratioY ? ratioX : ratioY,
		b = screenHeight * a;
	aclWidth = screenWidth * a;
	aclHeight = b;
}

function onResize() {
	canvas.width = aclWidth;
	canvas.height = aclHeight;
}

calAclSize();
