$(document).ready(function () {
  var currentFloor = 2;
  var floorPath = $(".home-image path"); // каждый отднльный этаж в svg
  var counterUp = $(".counter-up"); /* увеличить этаж*/
  var counterDown = $(".counter-down"); /* уменьшить этаж*/

  // Функйия при наведении мышкой на этаж
  $(".home-image path").on("mouseover", function () {
    floorPath.removeClass("current-floor"); // удаляем актиывный класс у этажей
    currentFloor = $(this).attr("data-floor"); //получаем значение текущего этажа
    $(".counter").text(currentFloor); // записываем значение этажа справа
  });

  counterUp.on("click", function () {
    if (currentFloor < 18) {
      currentFloor++;
      usCurrentFloor = currentFloor.toLocaleString("en-US", {
        minimumIntegerDigits: 2,
        useGrouping: false,
      });
      $(".counter").text(usCurrentFloor);
      $(".home-image path").removeClass("current-floor");
      $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor");
    }
  });

  counterDown.on("click", function () {
    if (currentFloor > 2) {
      currentFloor--;
      usCurrentFloor = currentFloor.toLocaleString("en-US", {
        minimumIntegerDigits: 2,
        useGrouping: false,
      });
      $(".counter").text(usCurrentFloor);
      floorPath.removeClass("current-floor");
      $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor");
    }
  });
});
