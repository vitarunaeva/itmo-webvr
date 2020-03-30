AFRAME.registerComponent("menubutton", {
  events: {
    click: function() {
      this.el.setAttribute("scale", "0 0 0");
      document.querySelector("#menu").setAttribute("scale", "1 1 1");
    }
  }
});
