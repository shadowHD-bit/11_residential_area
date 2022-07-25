$(document).ready(function () {
  let number_area;
  let areas_info = [
    {
      ares_square: 3000,
      areas_house: 300,
      adress: "Vainu tee 12",
      price: 310000,
    },
    {
      ares_square: 3100,
      areas_house: 200,
      adress: "Vainu tee 11",
      price: 320000,
    },
    {
      ares_square: 3200,
      areas_house: 250,
      adress: "Vainu tee 10",
      price: 290000,
    },
    {
      ares_square: 2900,
      areas_house: 210,
      adress: "Vainu tee 8",
      price: 340000,
    },
    {
      ares_square: 2000,
      areas_house: 290,
      adress: "Vainu tee 7",
      price: 340000,
    },
    {
      ares_square: 3100,
      areas_house: 350,
      adress: "Vainu tee 120",
      price: 290000,
    },
    {
      ares_square: 3050,
      areas_house: 100,
      adress: "Vainu tee 1",
      price: 270000,
    },
    {
      ares_square: 4000,
      areas_house: 190,
      adress: "Vainu tee 13",
      price: 250000,
    },
    {
      ares_square: 2600,
      areas_house: 180,
      adress: "Vainu tee 58",
      price: 400000,
    },
    {
      ares_square: 3000,
      areas_house: 270,
      adress: "Vainu tee 147",
      price: 300000,
    },
    {
      ares_square: 3700,
      areas_house: 210,
      adress: "Vainu tee 47",
      price: 270000,
    },
  ];

  $(".area_chose").on({
    mouseover: function () {
      number_area = $(this).attr("id");
      $("<div>", {
        class: "areas_info",
      })
        .appendTo(".down_section")
        .css("width", 300 + "px")
        .css("height", "auto")
        .css("position", "absolute")
        .css("background", "rgba(152, 152, 152, 0.25)")
        .css("z-index", 13)
        .css("border-radius", 15 + "px")
        .css("backdrop-filter", "blur(15px)")
        .css("box-shadow", "0px 6px 6px rgba(0, 0, 0, 0.15)")
        .css("padding", "10px 20px")
        .css("display", "flex")
        .css("flex-direction", "column")
        .html(`<p class='areas_info_title'>Участок #${number_area}</p>

        <div class="areas_info_block">
        <div class="areas_info_block_item">
        <span class='areas_info_block_item_title'>Площадь участка:</span>
        <span class='areas_info_block_item_nums'>${
          areas_info[number_area - 1].ares_square
        } м2</span>
        </div>

        <div class="areas_info_block_item">
        <span class='areas_info_block_item_title'>Площадь застройки:</span>
        <span class='areas_info_block_item_nums'>${
          areas_info[number_area - 1].areas_house
        } м2</span>
        </div>

        <div class="areas_info_block_item">
        <span class='areas_info_block_item_title'>Адрес:</span>
        <span class='areas_info_block_item_nums'>${
          areas_info[number_area - 1].adress
        }</span>
        </div>

        <div class="areas_info_block_item">
        <span class='areas_info_block_item_title'>Стоимость:</span>
        <span class='areas_info_block_item_nums'>${
          areas_info[number_area - 1].price
        } €</span>
        </div>
        
        </div>
        `);

      $(window).mousemove(function (pos) {
        $(".areas_info")
          .css("left", pos.pageX + 20 + "px")
          .css("top", pos.pageY - 2500 + "px");
      });
    },
    mouseout: function () {
      $(".areas_info").remove();
    },
  });
});
