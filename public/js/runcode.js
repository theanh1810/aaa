$(window).ready(function () {
  //  hover goi y
  // bold
  $(".text-bold-hover").mouseenter(function () {
    $("#suggetion-1").removeClass("hidden");
    $("#suggetion-1").addClass("d-flex");
  });

  $(".text-bold-hover").mouseleave(function () {
    $("#suggetion-1").removeClass("d-flex");
    $("#suggetion-1").addClass("hidden");
  });
  // italic
  $(".text-italic-hover").mouseenter(function () {
    $("#suggetion-2").removeClass("hidden");
    $("#suggetion-2").addClass("d-flex");
  });

  $(".text-italic-hover").mouseleave(function () {
    $("#suggetion-2").removeClass("d-flex");
    $("#suggetion-2").addClass("hidden");
  });
  //    under line
  $(".text-under-hover").mouseenter(function () {
    $("#suggetion-3").removeClass("hidden");
    $("#suggetion-3").addClass("d-flex");
  });

  $(".text-under-hover").mouseleave(function () {
    $("#suggetion-3").removeClass("d-flex");
    $("#suggetion-3").addClass("hidden");
  });
  //  gach ngang
  $(".text-des-hover").mouseenter(function () {
    $("#suggetion-4").removeClass("hidden");
    $("#suggetion-4").addClass("d-flex");
  });

  $(".text-des-hover").mouseleave(function () {
    $("#suggetion-4").removeClass("d-flex");
    $("#suggetion-4").addClass("hidden");
  });
  // in hoa
  $(".text-upper").mouseenter(function () {
    $("#5").removeClass("hidden");
    $("#5").addClass("d-flex");
  });
  $(".text-upper").mouseleave(function () {
    $("#5").removeClass("d-flex");
    $("#5").addClass("hidden");
  });

  // can trai
  $(".text-left").mouseenter(function () {
    $("#6").removeClass("hidden");
    $("#6").addClass("d-flex");
  });
  $(".text-left").mouseleave(function () {
    $("#6").removeClass("d-flex");
    $("#6").addClass("hidden");
  });

  // can phai
  $(".text-right").mouseenter(function () {
    $("#7").removeClass("hidden");
    $("#7").addClass("d-flex");
  });
  $(".text-right").mouseleave(function () {
    $("#7").removeClass("d-flex");
    $("#7").addClass("hidden");
  });
  // can giua
  $(".text-center").mouseenter(function () {
    $("#8").removeClass("hidden");
    $("#8").addClass("d-flex");
  });
  $(".text-center").mouseleave(function () {
    $("#8").removeClass("d-flex");
    $("#8").addClass("hidden");
  });

  // can deu
  $(".text-justify").mouseenter(function () {
    $("#9").removeClass("hidden");
    $("#9").addClass("d-flex");
  });
  $(".text-justify").mouseleave(function () {
    $("#9").removeClass("d-flex");
    $("#9").addClass("hidden");
  });

  // mo bang chon font
  $("#more-font").click(function () {
    $("  #font-family-open").toggle(function () {
      $("  #font-family-open").removeClass("hidden");
    });
  });

  //sua font
  $("Impact").bind("click", function () {
    $(".ul.support.fl-left>li:nth-child(1)>span").css("color", "red");
    $("  #font-family-open").addClass("hidden");
  });
  // mo bang chon size

  $(`#size-click`).bind("click", function () {
    $(".font-size>div:nth-child(3)").toggle(function () {
      $(".font-size>div:nth-child(3)").removeClass("hidden");
    });
  });

  // them o
  $("btn-add").bind("click", function () {
    $(".content-selector>div>div:nth-child(2)").after("<div>toi la ai</div");
  });

  //mo bang chon link-text
  $("*[data-type='link-text']").bind("click", function (e) {
    if ($(".table-selection").hasClass("hidden")) {
      $(".table-selection").removeClass("hidden");
    } else if (
      !$(".table-selection").hasClass("hidden") &&
      !$(".set-text").hasClass("hidden")
    ) {
      $(".table-selection").addClass("hidden");
    }
    if ($(".set-text").hasClass("hidden")) {
      $(".set-text").removeClass("hidden");
    }
    if (!$(".html-extra").hasClass("hidden")) {
      $(".html-extra").addClass("hidden");
    }
  });

  //mo bang chon link-img
  $("*[data-type='link-img']").bind(
    "click",
    function () {
      if ($(".table-selection").hasClass("hidden")) {
        $(".table-selection").removeClass("hidden");
      } else if (
        !$(".table-selection").hasClass("hidden") &&
        $(".set-text").hasClass("hidden")
      ) {
        $(".table-selection").addClass("hidden");
      }
      if (!$(".set-text").hasClass("hidden")) {
        $(".set-text").addClass("hidden");
      }
      if (!$(".html-extra").hasClass("hidden")) {
        $(".html-extra").addClass("hidden");
      }
    },
    "click",
    function (e) {}
  );

  $textInput = $("#btn-edit").val();
  $linkInput = $("#btn-link").val();

  //them doi tuong

  $("[data-type=list],.support").bind("click", function () {
    $(".support>li:last-child").append(
      ` <li data-type="link-text"><i class="fa fa-mobile" aria-hidden="true"></i><span class="number-11">+565 975 658</span></li>`
    );
  });

  //mo bang chon list

  // $("*[data-type='list']").bind("click", function (){
  //   console.log("a")
  //   if($(".table-selection").hasClass("hidden")){
  //     $(".table-selection").removeClass("hidden");
  //   }
  //   else if(!$(".table-selection").hasClass("hidden") && $(".set-text").hasClass("hidden")){
  //     $(".table-selection").addClass("hidden");
  //   }
  //   if($(".set-text").hasClass("hidden")){
  //     $(".set-text").removeClass("hidden")
  //   }
  //   if($(".html-extra").hasClass("hidden")){
  //     $(".html-extra").removeClass("hidden");
  //   }

  // })

  // $("*").bind(
  //   "click",
  //   function () {
  //     if ($("*").dataset.type.toString() == "link-text") {
  //        $(".table-selection").removeClass("hidden")
  //     $(".table-selection").toggle()
  //   }

  //   }
  // );

  //  them o nhap

  //

  //
});
