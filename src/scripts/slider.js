$(document).ready(function () {
  let prev_btn = $("#prev_btn");
  let next_btn = $("#next_btn");

  let image_block = $("#image_block");
  let text_content_title = $("#text_content_title");
  let text_content_description = $("#text_content_description");
  let slider_items_title = $("#slider_items_title");

  let items_slider = [
    {
      title: "Новые дороги",
      description:
        "Соображения высшего порядка, а также дальнейшее развитие различных форм деятельности напрямую зависит от соответствующих условий активизации. Дорогие друзья, рамки и место обучения кадров требует от нас системного анализа соответствующих условий активизации? Не следует, однако, забывать о том, что дальнейшее развитие различных форм деятельности представляет собой интересный эксперимент проверки дальнейших направлений развития проекта.",
      image: "slider_img1.png",
    },
    {
      title: "Уличное освещение",
      description:
        "Не следует, однако, забывать о том, что повышение уровня гражданского сознания позволяет выполнить важнейшие задания по разработке экономической целесообразности принимаемых решений.",
      image: "slider_img2.jpeg",
    },
    {
      title: "Маяк",
      description:
        "Повседневная практика показывает, что сложившаяся структура организации обеспечивает актуальность модели развития. Соображения высшего порядка, а также начало повседневной работы по формированию позиции напрямую зависит от ключевых компонентов планируемого обновления? Равным образом курс на социально-ориентированный национальный проект требует определения и уточнения всесторонне сбалансированных нововведений!",
      image: "slider_img3.jpeg",
    },
    {
      title: "Забор",
      description:
        "Задача организации, в особенности же новая модель организационной деятельности создаёт предпосылки качественно новых шагов для существующих финансовых и административных условий. Значимость этих проблем настолько очевидна, что консультация с профессионалами из IT напрямую зависит от всесторонне сбалансированных нововведений.",
      image: "slider_img4.jpg",
    },
    {
      title: "Общая зона",
      description:
        "Повседневная практика показывает, что курс на социально-ориентированный национальный проект способствует повышению актуальности модели развития.",
      image: "slider_img5.jpg",
    },
    {
      title: "Скамейки с крышей",
      description:
        "Соображения высшего порядка, а также повышение уровня гражданского сознания способствует повышению актуальности форм воздействия? Повседневная практика показывает, что повышение уровня гражданского сознания способствует повышению актуальности форм воздействия.",
      image: "slider_img6.jpeg",
    },
    {
      title: "Дорожка",
      description:
        "Практический опыт показывает, что рамки и место обучения кадров напрямую зависит от системы масштабного изменения ряда параметров. Соображения высшего порядка, а также реализация намеченного плана развития напрямую зависит от направлений прогрессивного развития.",
      image: "slider_img7.jpg",
    },
    {
      title: "Детская площадка",
      description:
        "Дорогие друзья, дальнейшее развитие различных форм деятельности позволяет выполнить важнейшие задания по разработке ключевых компонентов планируемого обновления!",
      image: "slider_img8.jpg",
    },
    {
      title: "Песочница",
      description:
        "Значимость этих проблем настолько очевидна, что дальнейшее развитие различных форм деятельности обеспечивает широкому кругу специалистов участие в формировании модели развития.",
      image: "slider_img9.jpg",
    },
    {
      title: "Входная группа",
      description:
        "Равным образом постоянное информационно-техническое обеспечение нашей деятельности способствует подготовке и реализации существующих финансовых и административных условий.",
      image: "slider_img3.jpeg",
    },
    {
      title: "Коммуникации",
      description:
        "Соображения высшего порядка, а также курс на социально-ориентированный национальный проект требует определения и уточнения модели развития.",
      image: "slider_img12.jpg",
    },
    {
      title: "Лес",
      description:
        "Практический опыт показывает, что рамки и место обучения кадров напрямую зависит от системы масштабного изменения ряда параметров. Соображения высшего порядка, а также реализация намеченного плана развития напрямую зависит от направлений прогрессивного развития.",
      image: "slider_img11.jpeg",
    },
    {
      title: "И ваш участок земли",
      description:
        "Дорогие друзья, дальнейшее развитие различных форм деятельности позволяет выполнить важнейшие задания по разработке ключевых компонентов планируемого обновления!",
      image: "slider_img5.jpg",
    },
  ];

  //Input content to html title
  let html_content = "";
  items_slider.map((item, idx) => {
    html_content += `<span id="items_title_${idx}" class="items_title">${item.title}</span>`;
  });
  slider_items_title.html(html_content);

  //Content slider
  let counterStartSlider = 0;
  let current_slider = counterStartSlider;
  let prev_slider, next_slider;

  let current_title;
  let next_title;
  let prev_title;

  function initSlider(
    counter_slider,
    prev_counter_slider,
    next_counter_slider
  ) {
    let current_title = $(`#items_title_${counter_slider}`);
    let next_title = $(`#items_title_${next_counter_slider}`);
    let prev_title = $(`#items_title_${prev_counter_slider}`);

    text_content_title.html(`<p>${items_slider[counter_slider].title}</p>`);
    text_content_description.html(
      `<p>${items_slider[counter_slider].description}</p>`
    );
    image_block.css(
      "background-image",
      `url(assets/${items_slider[counter_slider].image})`
    );
    current_title.addClass("active");
    next_title.removeClass("active");
    prev_title.removeClass("active");
  }

  initSlider(counterStartSlider, items_slider.length - 1, 1);

  next_btn.click(function () {
    if (current_slider == items_slider.length - 1) {
      current_slider = 0;
      prev_slider = items_slider.length - 1;
      next_slider = 1;
    } else if (current_slider == 0) {
      current_slider = current_slider + 1;
      prev_slider = 0;
      next_slider = 2;
    } else {
      current_slider = current_slider + 1;
      prev_slider = current_slider - 1;
      next_slider = current_slider + 1;
    }
    initSlider(current_slider, prev_slider, next_slider);
  });

  prev_btn.click(function () {
    if (current_slider == 0) {
      current_slider = items_slider.length - 1;
      prev_slider = 0;
      next_slider = items_slider.length - 2;
    } else if (current_slider == items_slider.length - 1) {
      current_slider = current_slider - 1;
      prev_slider = items_slider.length - 1;
      next_slider = items_slider.length - 4;
    } else {
      current_slider = current_slider - 1;
      prev_slider = current_slider + 1;
      next_slider = current_slider - 2;
    }
    initSlider(current_slider, prev_slider, next_slider);
  });
});
