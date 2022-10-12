

$(window).ready(function () { 
    //  hover goi y
    // bold
    $(".text-bold-hover").mouseenter(function () {
        $("#suggetion-1").removeClass("hidden")
        $("#suggetion-1").addClass("d-flex");
    })
    
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
                                $("#font-family-open").removeClass("hidden");
                                $("#font-family-open").addClass("d-flex");
                              });
  
// mo bang chon size
  
  $(`#size-click`).bind('click', function () {
    $('.font-size>div:nth-child(3)').removeClass("hidden")
    $(".font-size>div:nth-child(3)").addClass("d-flex");
  })
  
  // them o 
  $('btn-add').bind('click', function () {
    $(".content-selector>div>div:nth-child(2)")
      .after("<div>toi la ai</div")
  })

  //mo bang chon

  $("*").bind(
    "click",
    function () {
      if ($("*").dataset.type.toString() == "link-text") {
      $(".table-selection").toggle()
    }
    
    }
  );




  //  them o nhap

  // 
}) 