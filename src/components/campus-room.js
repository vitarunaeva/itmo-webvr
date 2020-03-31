const ACTIVE_BACKGROUND_COLOR = 'blue';
const INACTIVE_BACKGROUND_COLOR = 'white';

AFRAME.registerComponent("campus-room", {
  init: function() {
    const isActive = this.el.className.split().includes('active');

    if (isActive) {
      this.el.setAttribute('material', 'color', ACTIVE_BACKGROUND_COLOR);
      setTimeout(() => {
        document.getElementById(this.data).setAttribute('scale', '1 1 1');
      }, 0)
    }
  },
  events: {
    mouseenter: function(event){
      if (event.target.className.split().includes('active')) return;

      Array.prototype.slice.call(document.querySelectorAll('a-entity[spot]')).forEach(el => {
        el.classList.remove("active");
        el.setAttribute('material', 'color', INACTIVE_BACKGROUND_COLOR);
      });

      const campusesArray = Array.prototype.slice.call(document.querySelectorAll('[campus-room]'));
      const activeElement = campusesArray.find(item => item.className.split().includes('active'));
      const activeElementRoom = activeElement.getAttribute('campus-room');
      const campusRoom = event.target.getAttribute('campus-room');

      document.getElementById(activeElementRoom).setAttribute('scale', '0 0 0');
      activeElement.classList.remove("active");
      activeElement.setAttribute('material', 'color', INACTIVE_BACKGROUND_COLOR);

      document.getElementById(campusRoom).setAttribute('scale', '1 1 1');
      event.target.classList.add('active');
      event.target.setAttribute('material', 'color', ACTIVE_BACKGROUND_COLOR);
    }
  }
});
