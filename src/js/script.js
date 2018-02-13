ymaps.ready(init);

function init () {
  // Создание экземпляра карты и его привязка к контейнеру с
  // заданным id ("map")
  var myMap = new ymaps.Map('map', {
      center: [45.0411,38.9743],
      zoom: 14
  });

  myMap.controls.add("zoomControl", {
    position: {top: 15, left: 15}
  });

  myPlacemarkShardam = new ymaps.Placemark([45.0475,38.9863], {
    name: 'Театр Шардам',
    address: 'Центральный микрорайон, ул. Коммунаров, 268, литера О',
    websayt: 'https://vk.com/teatrshardam'
  },
  {
    preset: 'twirl#blueIcon',
  }),

  myPlacemarkLotos = new ymaps.Placemark([45.0440,39.0029], {
    name: 'Шоу-театр Лотос',
    address: 'Московская ул., 2, корп. 1, литера А',
    websayt: 'http://www.show-lotos.ru/'
  },
  {
    preset: 'twirl#orangeIcon',
  }),

  myPlacemarkDrama = new ymaps.Placemark([45.0351,38.9772], {
    name: 'Краснодарский академический театр драмы имени Горького',
    address: 'Театральная площадь, 2',
    websayt: 'http://www.dram-teatr.ru/'
  },
  {
    preset: 'twirl#darkgreenIcon',
  }),

  myPlacemarkFilarmonia = new ymaps.Placemark([45.0271,38.9710], {
    name: 'Краснодарская Филармония Имени Г. Ф. Пономаренко',
    address: 'Центральный микрорайон, Красная ул., 55',
    websayt: 'http://www.kubanfilarmoniya.ru/'
  },
  {
    preset: 'twirl#pinkIcon',
  }),

  myPlacemarkKukl = new ymaps.Placemark([45.0230,38.9691], {
    name: 'Краевой театр кукол',
    address: 'Центральный микрорайон, Красная ул., 31',
    websayt: 'http://www.kktk.ru/'
  },
  {
    preset: 'twirl#redIcon',
  }),

  myPlacemarkZawOt = new ymaps.Placemark([45.0232,38.9727], {
    name: 'Театр Защитника Отечества',
    address: 'Центральный микрорайон, ул. Ленина, 48'
  },
  {
    preset: 'twirl#orangeIcon',
  }),

  myPlacemarkArtande = new ymaps.Placemark([45.0235,38.9747], {
    name: 'Театральная школа кинокомпании Артанде',
    address: 'Центральный микрорайон, ул. Коммунаров, 64',
    websayt: 'http://www.projectaz.club/'
  },
  {
    preset: 'twirl#greyIcon',
  }),

  myPlacemarkSkazkino = new ymaps.Placemark([45.0218,38.9644], {
    name: 'Детский театр Сказкино',
    address: 'Центральный микрорайон, ул. Мира, 25',
    websayt: 'http://www.skazkino.org/'
  },
  {
    preset: 'twirl#lightblueIcon',
  }),

  myPlacemarkMolodej = new ymaps.Placemark([45.0206,38.9762], {
    name: 'Молодежный театр',
    address: 'Центральный микрорайон, ул. Митрофана Седина, 28',
    websayt: 'http://www.teatr.orc.ru/'
  },
  {
    preset: 'twirl#yellowIcon',
  }),

  myPlacemarkMimoletnost = new ymaps.Placemark([45.0164,38.9559], {
    name: 'Детский театр балета Мимолетности',
    address: 'Центральный микрорайон, Береговая ул., 144, оф. 127',
    websayt: 'http://www.mimoletnosti.ru/'
  },
  {
    preset: 'twirl#brownIcon',
  });

  // Создаем кластер, в который будем добавлять метки
  clusterer = new ymaps.Clusterer();

  //Добавляем метки в кластер.
  clusterer
    .add(myPlacemarkShardam)
    .add(myPlacemarkLotos)
    .add(myPlacemarkDrama)
    .add(myPlacemarkFilarmonia)
    .add(myPlacemarkKukl)
    .add(myPlacemarkZawOt)
    .add(myPlacemarkArtande)
    .add(myPlacemarkSkazkino)
    .add(myPlacemarkMolodej)
    .add(myPlacemarkMimoletnost);

  // Создаем шаблон для отображения контента балуна
  var myBalloonLayout = ymaps.templateLayoutFactory.createClass(
      '<h3>$[properties.name]</h3>' +
      '<p><strong>Адрес:</strong> $[properties.address]</p>' +
      '<p><strong>Веб-сайт:</strong> <a href="$[properties.websayt]" target="_blank">$[properties.websayt]</a></p>'
  );

  // Помещаем созданный шаблон в хранилище шаблонов. Теперь наш шаблон доступен по ключу 'my#theaterlayout'.
  ymaps.layout.storage.add('my#theaterlayout', myBalloonLayout);

  // Задаем наш шаблон для балунов геобъектов кластера.
  clusterer.options.set({
      balloonContentBodyLayout:'my#theaterlayout',
      // Максимальная ширина балуна в пикселах
      balloonMaxWidth: 500
  });

  // Добавляем коллекцию геообъектов на карту.
  myMap.geoObjects.add(clusterer);
}
