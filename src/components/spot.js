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

    let data = this.data;

    this.el.addEventListener("click", function() {
      // Устанавливает новый источник изображения для skyBox
      let sky = document.getElementById("skyBox");
      sky.setAttribute("src", data.linkTo);

      let spotComp = document.getElementById("spots");
      let currSpots = this.parentElement.getAttribute("id");
      // Создание события на смену отображаемых панораманых изображений
      spotComp.emit("reloadSpots", {
        newSpots: data.spotGroup,
        currSpots: currSpots
      });
    });
  }
});
