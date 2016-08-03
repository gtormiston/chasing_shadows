function CustomMonsterMarker(latlng, map, args) {
	this.latlng = latlng;
	this.args = args;
	this.setMap(map);
}

CustomMonsterMarker.prototype = new google.maps.OverlayView();

CustomMonsterMarker.prototype.draw = function() {
  console.log("monster marker prototype draw 1")
	var self = this;
	var div = this.div;

	if (!div) {

		div = this.div = document.createElement('div');
		div.className = 'monster-marker';

		div.style.position = 'absolute';
		div.style.cursor = 'pointer';
		// div.style.width = '20px';
		// div.style.height = '20px';
		// div.style.background = 'blue';

		if (typeof(self.args.marker_id) !== 'undefined') {
			div.dataset.marker_id = self.args.marker_id;
		}

		google.maps.event.addDomListener(div, "touchstart", function() {
			console.log("touched")
			load_attack_page();
			// google.maps.event.trigger(self, "touchstart click");
		});

		google.maps.event.addDomListener(div, "click", function() {
			console.log("clicked")
			load_attack_page();

			// google.maps.event.trigger(self, "touchstart click");
		});

		var panes = this.getPanes();
		panes.overlayImage.appendChild(div);
    console.log(div);
	}

	var point = this.getProjection().fromLatLngToDivPixel(this.latlng);

  console.log(point);
  
	if (point) {
		div.style.left = (point.x - 10) + 'px';
		div.style.top = (point.y - 20) + 'px';
	}
};

CustomMonsterMarker.prototype.remove = function() {
	if (this.div) {
		this.div.parentNode.removeChild(this.div);
		this.div = null;
	}
};

CustomMonsterMarker.prototype.getPosition = function() {
	return this.latlng;
};
