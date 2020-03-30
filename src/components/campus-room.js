const ACTIVE_BACKGROUND_COLOR = 'blue';
const INACTIVE_BACKGROUND_COLOR = 'white';

AFRAME.registerComponent("campus-room", {
  init: function() {
    const isActive = this.el.className.split().includes('active');

    if (isActive) {
      this.el.setAttribute('material', 'color', ACTIVE_BACKGROUND_COLOR);
      setTimeout(() => {
        document.getElementById(this.data).object3D.visible = true;
      }, 0)
    }
  },
  events: {
    mouseenter: function(event){
      if (event.target.className.split().includes('active')) return;

      const campusesArray = Array.prototype.slice.call(document.querySelectorAll('[campus-room]'));
      const activeElement = campusesArray.find(item => item.className.split().includes('active'));
      const ActiveElementRoom = activeElement.getAttribute('campus-room');
      const campusRoom = event.target.getAttribute('campus-room');

      document.getElementById(ActiveElementRoom).object3D.visible = false;
      activeElement.classList.remove("active");
      activeElement.setAttribute('material', 'color', INACTIVE_BACKGROUND_COLOR);

      document.getElementById(campusRoom).object3D.visible = true;
      event.target.classList.add('active');
      event.target.setAttribute('material', 'color', ACTIVE_BACKGROUND_COLOR);
    }
  }
});
