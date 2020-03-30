AFRAME.registerComponent("hotSpots", {
  init: function() {
    this.el.addEventListener("reloadSpots", function(evt) {
      let currspotGroup = document.getElementById(evt.detail.currSpots);
      currspotGroup.setAttribute("scale", "0 0 0");

      let newspotGroup = document.getElementById(evt.detail.newSpots);
      newspotGroup.setAttribute("scale", "1 1 1");
    });
  }
});
