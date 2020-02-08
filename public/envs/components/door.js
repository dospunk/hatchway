var doorClickedEvent = new Event('doorclicked');

AFRAME.registerComponent('door', {
	init: function(){
		this.open = false;
		let hinge = this.el.parentElement;
		this.el.addEventListener("click", (evt)=>{
			console.log("clicked!");
			if (this.open) {
				hinge.setAttribute("animation", "to", "0");
				hinge.setAttribute("animation", "from", "90");
			} else {
				hinge.setAttribute("animation", "to", "90");
				hinge.setAttribute("animation", "from", "0");
			}
			hinge.dispatchEvent(doorClickedEvent);
			this.open = !this.open;
		});
	}
});