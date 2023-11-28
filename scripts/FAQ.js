let FAQs = document.querySelectorAll(".question-wrapper");
FAQs.forEach(element => {
  element.onclick = function () {
    console.log('amogus');
    var container = element.parentNode;
    var answer = container.querySelector(".answer-wrapper");
    var trigger = container.querySelector(".material-icons.drop");
    var state = container.querySelector(".question-wrapper");
    var answerText = container.querySelector(".answer");

    if (answerText.hidden) {
      answer.style.height = `${80}px`;
    } else {
      answer.style.height = `${0}px`;
    }
    answerText.hidden = !answerText.hidden;

    if (trigger.classList.contains("icon-expend")) {
      trigger.classList.remove("icon-expend");
    }
    else {
      trigger.classList.add("icon-expend");
    }

    if (container.classList.contains("expanded")) {
      container.classList.remove("expanded");
    }
    else {
      container.classList.add("expanded");
    }
  }
});