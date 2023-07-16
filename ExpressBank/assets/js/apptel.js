let languageall_tel = document.querySelector('.containers-tel .language-alls')
let language_tel = document.querySelector('.containers-tel .languages')
let index_tel = document.querySelector('.indexmain-tel')
let sidebar = document.querySelector('.sidebar')
let third_head = document.querySelector('.third-head')
let second_head = document.querySelector('.second-head')



language_tel.onclick = function(){
 if(languageall_tel.style.display === 'block'){
    languageall_tel.style.display = 'none'
 }
 else{
    languageall_tel.style.display = 'block'
 }
}

let f_clc_tel = document.querySelectorAll('.first-ul-tel li')

for(let li of f_clc_tel){
  li.onclick = () => {
    let activ1_tel = document.querySelector('.activ1-tel')
    activ1_tel.classList.remove('activ1-tel')
    li.classList.add('activ1-tel')
  }
}

let img1 = document.querySelector('.containers-tel .img1')
let img2 = document.querySelector('.containers-tel .img2')

img1.onclick = () =>{
    img2.style.display = 'inline-block'
    img1.style.display = 'none'
    index_tel.style.display= 'none'
    third_head.style.display = 'none'
    second_head.style.display = 'none'
    sidebar.style.display= 'block'
}
img2.onclick = () =>{
    img2.style.display = 'none'
    img1.style.display = 'inline-block'
    sidebar.style.display= 'none'
    index_tel.style.display= 'block'
    second_head.style.display = 'block'
    third_head.style.display = 'flex'
}



const slider_alls = document.querySelector('.slider-all');
const slidertexts = document.querySelectorAll('.slider-texts, .slider-text2s');
const sliderphotoss = document.querySelectorAll('.slider-photos, .slider-photo2s');
const slidernexts = document.querySelector('.slider-next');
const sliderbacks = document.querySelector('.slider-back');

let y = 0;

function showSlides(index) {
  slidertexts.forEach(text => text.style.display = 'none');
  sliderphotoss.forEach(photo => photo.style.display = 'none');

  slidertexts[index].style.display = 'block';
  sliderphotoss[index].style.display = 'block';
}

function NextSlides() {
  y++;
  if (y >= slidertexts.length) {
    y = 0;
  }
  showSlides(y);
  
  document.querySelector('.slider-text2s').classList.remove('d-none')
  document.querySelector('.slider-photo2s').classList.remove('d-none')
}

function BackSlides() {
  y--;
  if (y < 0) {
    y = slidertexts.length - 1;
  }
  showSlides(y);
}
slidernexts.onclick = () =>{
  NextSlides();
}
sliderbacks.onclick = () => {
  BackSlides();
}
setInterval(NextSlides, 2000);


// telofon tab menu
let tab_buttons_tel = document.querySelectorAll('.tab-button-tel button')
for(let tabs of tab_buttons_tel){
  tabs.onclick = () =>{
    let tbs_tel = document.querySelector('.tab-buttons-tel')
    tbs_tel.classList.remove('tab-buttons-tel')
    tabs.classList.add('tab-buttons-tel')
     
    let id  = tabs.id
    let div = document.querySelectorAll('.tbst')
    for(let frst of div){
      if(frst.id===id){
        frst.classList.remove('d-none')
      }else{
        frst.classList.add('d-none')
      }
    }
  }
}

// telefon calculyatoru

let calc_buttons_tel = document.querySelectorAll('.calc-button-tel button')
for(let calc of calc_buttons_tel){
  calc.onclick = () =>{
    let clcs = document.querySelector('.calc-buttons-tel')
    clcs.classList.remove('calc-buttons-tel')
    calc.classList.add('calc-buttons-tel')
     


    let id = calc.id
    let div = document.querySelectorAll('.banks-tel')
    for(let scnd of div){
      if(scnd.id===id){
        scnd.classList.remove('d-none')
      }else{
        scnd.classList.add('d-none')
      }
    }
  }
}



function calculates() {
  let a = parseFloat(document.getElementById('range7').value)
  let b = parseFloat(document.getElementById('range8').value)
  let c = parseFloat(document.getElementById('range9').value)

  num=(a*c)/100
  num1=a+num;
  num3=(num1/b).toFixed(2)

  document.querySelector('.bank-show-tel .bank-show-months-tel').innerHTML = num3;
  document.querySelector('.bank-show-tel .bank-show-alls-tel').innerHTML = num1;
}
function update1() {
  document.querySelector('.inp8 .value8').innerHTML = document.getElementById('range7').value;
  calculates();
}

function update2() {
  document.querySelector('.inp9 .value9').innerHTML = document.getElementById("range8").value;
  calculates();
}

document.querySelector('.inp8').addEventListener("input", update1);
document.querySelector('.inp9').addEventListener("input", update2);