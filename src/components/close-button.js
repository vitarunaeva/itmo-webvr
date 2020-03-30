AFRAME.registerComponent("close-button", {
  events: {
    click: function() {
      document.querySelector("#menu").setAttribute("scale", "0 0 0");
      document.querySelector("#menu-button").setAttribute("scale", "1 1 1");
    }
  }
});
