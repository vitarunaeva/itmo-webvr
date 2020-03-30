AFRAME.registerComponent("spot", {
  schema: {
    linkTo: { type: "string", default: "" },
    spotGroup: { type: "string", default: "" }
  },
  init: function() {
    // Добавление источника изображения горячих точек
    this.el.setAttribute("src", "#hotspot");

    // Делает иконку, реагирующую на вгляд пользователя
    this.el.setAttribute("look-at", "#camera");

    this.el.addEventListener("click", (e) => {
      let sky = document.getElementById("skyBox");
      let spotComp = document.getElementById("spots");
      let currSpots = e.target.parentElement.getAttribute("id");

      // Устанавливает новый источник изображения для skyBox
      sky.setAttribute("src", this.data.linkTo);

      // Создание события на смену отображаемых панораманых изображений
      spotComp.emit("reloadSpots", {
        newSpots: this.data.spotGroup,
        currSpots: currSpots
      });
    });
  }
});
