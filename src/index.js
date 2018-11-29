import List from './lib/list';

document.addEventListener('DOMContentLoaded', () => {
  const page = document.querySelector('body');
//  const isLecturePage = page.classList.contains('');

  try{
    const isLecturePage = document.querySelector('lecture-page');
    console.log('hi');
  }
  catch(err){
    const list = new List();
    list.load();
  }
});

var elementsArray = document.querySelectorAll('.section');
var lesson = document.querySelector('.section').childNodes;// = document.querySelectorAll('.section');
console.log(lesson);

elementsArray.forEach(function(elem) {
    elem.addEventListener("click", function(e) {
      e.target.preventDefault;
      const temp = window.location.href;
      window.location.href = temp+"../fyrirlestur.html";
      const temp1 = e.target.childNodes;
      console.log(e.target.childNodes);
      lesson = e.target.querySelector('.section__title');
      console.log(lesson);
    });
});
