AFRAME.registerComponent("spots", {
  events: {
    reloadSpots: function(evt) {
      let currspotGroup = document.getElementById(evt.detail.currSpots);
      let newspotGroup = document.getElementById(evt.detail.newSpots);

      currspotGroup.object3D.visible = false;
      newspotGroup.object3D.visible = true;
    }
  }
});
