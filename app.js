let questions = document.querySelectorAll('.row');

for (let i = 0; i < questions.length; i++) {
  questions[i].addEventListener('click', () => {
    if (questions[i].classList.contains('active')) {
      questions[i].classList.remove('active');
    } else {
      let currActive = document.getElementsByClassName('active');
      currActive.length === 1 && currActive[0].classList.remove('active');
      questions[i].classList.add('active');
    }
  })
}