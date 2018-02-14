ymaps.ready(init);

function init () {
  var myMap = new ymaps.Map('map', {
      center: [45.0411,38.9743],
      zoom: 14
  });

  $.getJSON("json/theaters.json", function(json) {
    // Создаем кластер
    clusterer = new ymaps.Clusterer();
    for (i = 0; i < json.theaters.length; i++) {
      var myPlacemark = new ymaps.Placemark(JSON.parse(json.theaters[i].coord), {
        // Свойства балуна
        balloonContentBody: [
          '<h3>' + json.theaters[i].name + '</h3>' +
          '<p><strong>Адрес:</strong> ' + json.theaters[i].address + '</p>' +
          '<p><strong>Веб-сайт:</strong> <a href="' + json.theaters[i].website + '" target="_blank">' + json.theaters[i].website + '</a></p>'
        ]
      }, {
        // Опции
        preset: 'islands#' + json.theaters[i].preset + 'CircleIcon',
      });

      // Добавляем метку в кластер
      clusterer.add(myPlacemark);
    }

    // Добавляем метки на карту
    myMap.geoObjects.add(clusterer);
  });
}
