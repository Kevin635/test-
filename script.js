let btnPrimary = document.querySelector('#primary');
let btnDanger = document.querySelector('#danger');
let btnSuccess = document.querySelector('#success');

btnPrimary.addEventListener('click', () => btnPrimary.style.backgroundColor = '#337ab7')
btnDanger.addEventListener('click', () => btnDanger.style.backgroundColor = '#c9302c')
btnSuccess.addEventListener('click', () => btnSuccess.style.backgroundColor = '#4cae4c')


btnPrimary.addEventListener('click', () => btnPrimary.style.backgroundColor = '#ffffff')
btnDanger.addEventListener('click', () => btnDanger.style.backgroundColor = '#ffffff')
btnSuccess.addEventListener('click', () => btnSuccess.style.backgroundColor = '#ffffff')





var flipColors = query("#change"); 
  var target = query(".demo");
  target.classList.add("demo-on");
  
  
  toggleClasses = function toggleClasses() {
    target.classList.toggle("demo-on");
    target.classList.toggle('demo-off');
  };