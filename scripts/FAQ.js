$(".question-wrapper").click( function () {
    var container = $(this).parents(".accordion");
    var answer = container.find(".answer-wrapper");
    var trigger = container.find(".material-icons.drop");
    var state = container.find(".question-wrapper");
    
    answer.animate({height: "toggle"}, 100);
    
    if (trigger.hasClass("icon-expend")) {
      trigger.removeClass("icon-expend");
    }
    else {
      trigger.addClass("icon-expend");
    }
    
    if (container.hasClass("expanded")) {
      container.removeClass("expanded");
    }
    else {
      container.addClass("expanded");
    }
  });