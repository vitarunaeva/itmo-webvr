AFRAME.registerComponent("spots", {
  events: {
    reloadSpots: function(evt) {
      let currspotGroup = document.getElementById(evt.detail.currSpots);
      let newspotGroup = document.getElementById(evt.detail.newSpots);

      currspotGroup.setAttribute('scale', '0 0 0');
      newspotGroup.setAttribute('scale', '1 1 1');
    }
  }
});
