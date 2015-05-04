// 2015 revenge Engine
// auth cyf
// blog http://blog.scalap.com
// global engine setting



stage = new Stage();

(function() {
	var stopId = null;

	if (!window.revengeFrames)
		window.revengeFrames = function(callback, element) {
			stage.updateTransform();
			stopId = requestAnimationFrame(callback, element);
		};

	if (!window.cancelRevengeFrames)
		window.cancelRevengeFrames = function(id) {
			cancelAnimationFrame(stopId);
			stage = new Stage();
		};
}());

