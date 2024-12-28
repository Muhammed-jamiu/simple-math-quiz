//step1
const app = (function () {
  const game = {};
  const val1 = document.querySelector(".val1");
  const val2 = document.querySelector(".val2");
  const output = document.querySelector(".output");
  const answer = document.querySelector("input");
  //
  // step3.
  function init() {
    document.querySelector("button").addEventListener("click", checker);
    loadQuestion();
  }
  //step4.2
  function ranValue(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  //step4.1
  function loadQuestion() {
    //step5.
    game.val1 = ranValue(1, 100);
    game.val2 = ranValue(1, 100);
    game.answer = game.val1 + game.val2;
    //step6.
    val1.textContent = game.val1;
    val2.textContent = game.val2;
  }
  function checker() {
    // step8
    let bg = answer.value == game.answer ? "green" : "green";
    output.innerHTML += `<div style="color:${bg}">${game.val1} +
        ${game.val2} = ${game.answer} ${answer.value}
        </div>`; //step7
    //step9.
    answer.value = "";
    loadQuestion();
  }
  return {
    init: init,
  };
})();
//step2.
document.addEventListener("DOMContentLoaded", app.init);
