AFRAME.registerComponent("campus-options", {
  init: function(e) {
    const ACTIVE_BACKGROUND_COLOR = 'blue';
    const INACTIVE_BACKGROUND_COLOR = 'white';
    const childrenArray = Array.prototype.slice.call(this.el.children);

    childrenArray.forEach(item => {
      const isActive = item.className.split().includes('active');

      if (isActive) {
        item.setAttribute('material', 'color', ACTIVE_BACKGROUND_COLOR);
        const campusRoom = item.getAttribute('data-room-options');

        setTimeout(() => {
          document.getElementById(campusRoom).object3D.visible = true;
        }, 0);
      }


      item.addEventListener('mouseenter', (event) => {
        if (event.target.className.split().includes('active')) return;

        const activeElement = childrenArray.find(item => item.className.split().includes('active'));
        const ActiveElementRoom = activeElement.getAttribute('data-room-options');

        activeElement.classList.remove("active");
        activeElement.setAttribute('material', 'color', INACTIVE_BACKGROUND_COLOR);

        document.getElementById(ActiveElementRoom).object3D.visible = false;

        const campusRoom = event.target.getAttribute('data-room-options');

        event.target.classList.add('active');
        document.getElementById(campusRoom).object3D.visible = true;
        event.target.setAttribute('material', 'color', ACTIVE_BACKGROUND_COLOR);
      })
    })
  }
});
