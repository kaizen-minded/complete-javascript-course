(function () {
  function Question(question, answers, correct) {
    (this.question = question),
      (this.answers = answers),
      (this.correct = correct);
  }

  Question.prototype.askQuestion = function () {
    console.log(this.question);
    this.answers.forEach((answer, i) => {
      console.log(`${i}: ${answer}`);
    });
    const userAnswer = prompt(
      "Please select the correct answer (just type the number)"
    );
    this.promptResponse(userAnswer, keepScore);
  };
  Question.prototype.promptResponse = function (userAnswer, cb) {
    let sc;
    if (userAnswer === "exit") {
      return;
    }
    if (+userAnswer === this.correct) {
      console.log("You got it right");
      sc = cb(true);
    } else {
      console.log("wrong answer");
      sc = cb(false);
    }
    this.displayScore(sc);
    initGame();
  };
  Question.prototype.displayScore = function (score) {
    console.log(`Your current score is ${score}`);
    console.log("===================================");
  };

  function score() {
    let score = 0;
    return function (correct) {
      if (correct) {
        score++;
      }
      return score;
    };
  }

  let keepScore = score();

  function initGame() {
    const q1 = new Question("Is JavaScript is great?", [false, true], 1);
    const q2 = new Question(
      "Which console is better PS4 or XBOX One?",
      ["PS4", "XBOX"],
      0
    );
    const q3 = new Question(
      "Best exercise for legs?",
      ["Pullups", "Pushups", "Squats", "Crunches"],
      2
    );

    const quiz = [q1, q2, q3];

    const randomNum = Math.floor(Math.random() * quiz.length);
    quiz[randomNum].askQuestion();
  }

  initGame();
})();
