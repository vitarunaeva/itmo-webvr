AFRAME.registerComponent("spot", {
  schema: {
    linkTo: { type: "string", default: "" },
    spotGroup: { type: "string", default: "" }
  },
  init: function() {
    // Добавление источника изображения горячих точек
    this.el.setAttribute("src", "#hotspot");

    // Делает иконку (только из списка #spots), реагирующую на вгляд пользователя
    if (this.el.localName === 'a-image') {
      this.el.setAttribute("look-at", "#camera");
    }

    if (this.el.localName !== 'a-image') {
      const isActive = this.el.className.split().includes('active');
      console.log('this.el', this.el)

      if (isActive) {
        this.el.setAttribute('material', 'color', ACTIVE_BACKGROUND_COLOR);
      }
    }
  },
  events: {
    click: function(e) {
      if (e.target.localName !== 'a-image') {
        makeButtonActive(e);
      }

      let sky = document.getElementById("skyBox");
      let spotComp = document.getElementById("spots");
      let currSpots = this.data.currSpots || e.target.parentElement.getAttribute("id");

      // Устанавливает новый источник изображения для skyBox
      sky.setAttribute("src", this.data.linkTo);
      // Создание события на смену отображаемых панораманых изображений
      spotComp.emit("reloadSpots", {
        newSpots: this.data.spotGroup,
        currSpots: currSpots
      });
    }
  }
});

function makeButtonActive(event) {
  const campusesArray = Array.prototype.slice.call(document.querySelectorAll('a-rounded[spot]'));
  const activeElement = campusesArray.find(item => item.className.split().includes('active'));

  if (activeElement) {
    activeElement.classList.remove("active");
    activeElement.setAttribute('material', 'color', INACTIVE_BACKGROUND_COLOR);
  }

  event.target.classList.add('active');
  event.target.setAttribute('material', 'color', ACTIVE_BACKGROUND_COLOR);
}
