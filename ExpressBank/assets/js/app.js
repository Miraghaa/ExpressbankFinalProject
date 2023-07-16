let language = document.querySelector('.containers-big .language')
let languageall =document.querySelector('.containers-big .language-all')
let third_ul = document.querySelector('.containers-big .third-ul')
let third_ul_l1 = document.querySelector('.containers-big .third-ul .l1')
let third_ul_ul1 = document.querySelector('.containers-big .third-ul .l1 ul')
let third_ul_l3 = document.querySelector('.containers-big .third-ul .l3')
let third_ul_ul3 = document.querySelector('.containers-big .third-ul .l3 ul')
let first_ul = document.querySelector('.containers-big .first-ul')
let qr = document.querySelector('.second-head-nav-right-l1')
let qr_ul = document.querySelector('.second-head-nav-right-l1 ul')


// diller bolmesi acilir
language.onclick = () => {
  if( languageall.style.display === 'flex'){
    languageall.style.display = 'none'
  }else{
    languageall.style.display = 'flex'
  }
}

// sizin ucun bizim ucun altindaki xett
let lis = document.querySelectorAll('.containers-big .first-ul li')

for(let li of lis){
  li.onclick = () =>{
    let f_bebore = document.querySelector('.first-ul-before')
    f_bebore.classList.remove('first-ul-before')
    li.classList.add('first-ul-before')
  }
}

// haqqimizda onlayn novbe umumi melumatlar mousu ustune getirende bas veren prosesler
// axtaris
let body = document.querySelector('body')
let second_ul = document.querySelector('.containers-big .second-ul')
let search = document.querySelector('.containers-big .Search')
let i = document.querySelector('.containers-big .Search i')
second_ul.onclick = () =>{
  search.style.display = 'flex'
  third_ul.style.display = 'none'
}
i.onclick = () =>{
  search.style.display = 'none'
  third_ul.style.display = 'flex'
}


third_ul_l1.onmouseover = () => {
  third_ul_ul1.style.opacity = 1
  third_ul_ul1.style.transform = 'scaleY(1)';
}
third_ul_l1.onmouseleave = () => {
  third_ul_ul1.style.opacity = 0
  third_ul_ul1.style.transform = 'scaleY(0)';
}


third_ul_l3.onmouseover = () => {
  third_ul_ul3.style.opacity = 1
  third_ul_ul3.style.transform = 'scaleY(1)';
}
third_ul_l3.onmouseleave = () => {
  third_ul_ul3.style.opacity = 0
  third_ul_ul3.style.transform = 'scaleY(0)';
}


qr.onmouseover = () => {
  qr_ul.style.opacity = 1
  qr_ul.style.transform = 'scaleY(1)';
}
qr.onmouseleave = () => {
  qr_ul.style.opacity = 0
  qr_ul.style.transform = 'scaleY(0)';
}

// esas seyfedeki tab menu
let tab_buttons = document.querySelectorAll('.tab-button button')
for(let tabs of tab_buttons){
  tabs.onclick = () =>{
    let tbs = document.querySelector('.tab-buttons')
    tbs.classList.remove('tab-buttons')
    tabs.classList.add('tab-buttons')
     
    let id  = tabs.id
    let div = document.querySelectorAll('.tbs')
    for(let frst of div){
      if(frst.id===id){
        frst.classList.remove('d-none')
      }else{
        frst.classList.add('d-none')
      }
    }
  }
}


//calculyatorun tab menyusu
let calc_buttons = document.querySelectorAll('.calc-button button')
for(let calc of calc_buttons){
  calc.onclick = () =>{
    let clcs = document.querySelector('.calc-buttons')
    clcs.classList.remove('calc-buttons')
    calc.classList.add('calc-buttons')
     


    let id = calc.id
    let div = document.querySelectorAll('.banks')
    for(let scnd of div){
      if(scnd.id===id){
        scnd.classList.remove('d-none')
      }else{
        scnd.classList.add('d-none')
      }
    }
  }
}
// sarixetet


// calculator hesablamaq
function calculate() {
  let a = parseFloat(document.getElementById('range1').value)
  let b = parseFloat(document.getElementById('range2').value)
  let c = parseFloat(document.getElementById('range3').value)

  num=(a*c)/100
  num1=a+num;
  num3=(num1/b).toFixed(2)

  document.querySelector('.bank-show .bank-show-months').innerHTML = num3;
  document.querySelector('.bank-show .bank-show-alls').innerHTML = num1;
}
function update1() {
  document.querySelector('.inp1 .value1').innerHTML = document.getElementById('range1').value;
  calculate();
}

function update2() {
  document.querySelector('.inp2 .value2').innerHTML = document.getElementById("range2").value;
  calculate();
}

document.querySelector('.inp1').addEventListener("input", update1);
document.querySelector('.inp2').addEventListener("input", update2);
// qizil ucun
function calculategold() {
  let a = parseFloat(document.getElementById('rangeqizil').value)
  let b = parseFloat(document.getElementById('rangeqizil2').value)
  let c = parseFloat(document.getElementById('rangeqizil3').value)

  num=(a*c)/100
  num1=a+num;
  num3=(num1/b).toFixed(2)

  document.querySelector('.bank-show .bank-show-monthss').innerHTML = num3;
  document.querySelector('.bank-show .bank-show-allss').innerHTML = num1;
}
function update4() {
  document.querySelector('.inp4 .value6').innerHTML = document.getElementById('rangeqizil').value;
  calculategold();
}

function update5() {
  document.querySelector('.inp5 .value7').innerHTML = document.getElementById("rangeqizil2").value;
  calculategold();
}

document.querySelector('.inp4').addEventListener("input", update4);
document.querySelector('.inp5').addEventListener("input", update5);

//ekranin asagi dusende header reng vermisem
window.onscroll = function(){
  if( document.body.scrollTop>150 || document.documentElement.scrollTop>150){
      document.querySelector('header').style.backgroundColor = 'white'
  }
}

// slider islemsesi 

const slider_all = document.querySelector('.slider-all');
const slidertext = document.querySelectorAll('.slider-text, .slider-text2');
const sliderphotos = document.querySelectorAll('.slider-photo, .slider-photo2');
const slidernext = document.querySelector('.slider-next');
const sliderback = document.querySelector('.slider-back');

let x = 0;

function showSlide(index) {
  slidertext.forEach(text => text.style.display = 'none');
  sliderphotos.forEach(photo => photo.style.display = 'none');

  slidertext[index].style.display = 'block';
  sliderphotos[index].style.display = 'block';
}

function NextSlide() {
  x++;
  if (x >= slidertext.length) {
    x = 0;
  }
  showSlide(x);
  
  document.querySelector('.slider-text2').classList.remove('d-none')
  document.querySelector('.slider-photo2').classList.remove('d-none')
}

function BackSlide() {
  x--;
  if (x < 0) {
    x = slidertext.length - 1;
  }
  showSlide(x);
}
slidernext.onclick = () =>{
  NextSlide();
}
sliderback.onclick = () => {
  BackSlide();
}
function startSlider() {
  sliderInterval = setInterval(NextSlide, 2000);
}
startSlider(); 
function stopSlider() {
  clearInterval(sliderInterval);
}
slider_all.onmouseover = () => {
  stopSlider();
}

slider_all.onmouseout = () => {
  startSlider(); 
}





// sarixett
const rangeInputs = document.querySelectorAll('input[type="range"]') 
const numberInput = document.querySelector('input[type="number"]')
function handleInputChange(e) {
let target = e.target
if (e.target.type !== 'range') {
target = document. getElementById('range')
}
const min = target.min
const max = target.max
const val = target.value
target.style. backgroundSize = (val - min) * 100 / (max - min) + '% 100%'
document. querySelector('.inp1').addEventListener ("input",update1);
 document .querySelector('.inp2').addEventListener("input", update2);
}
rangeInputs.forEach(input => {
  input.addEventListener('input', handleInputChange)
})





function getusers() {
  fetch('https://v6.exchangerate-api.com/v6/6ffd536b8d111bdc8b94fd4b/latest/AZN')
  .then(res=> res.json())
  .then(data=>{
      let exc = `
      <tr>
        <th class="exc-table-txt2">ARMB</th>
        <th>${(1/data.conversion_rates.USD).toFixed(4)}</th>
        <th>${(1/data.conversion_rates.EUR).toFixed(4)}</th>
        <th>${(1/data.conversion_rates.RUB).toFixed(4)}</th>
        <th>${(1/data.conversion_rates.GBP).toFixed(4)}</th>
        <th>${(1/data.conversion_rates.TRY).toFixed(4)}</th>
       </tr>
       <tr>
        <th class="exc-table-txt2">Alış</th>
        <th>${((1/data.conversion_rates.USD)-0.005).toFixed(4)}</th>
        <th>${((1/data.conversion_rates.EUR)-0.0247).toFixed(4)}</th>
        <th>${((1/data.conversion_rates.RUB)-0.0018).toFixed(4)}</th>
        <th>${((1/data.conversion_rates.GBP)-0.0423).toFixed(4)}</th>
        <th>${((1/data.conversion_rates.TRY)-0.0151).toFixed(4)}</th>
       </tr>
       <tr>
        <th class="exc-table-txt2">Satış</th>
        <th>${((1/data.conversion_rates.USD)).toFixed(4)}</th>
        <th>${((1/data.conversion_rates.EUR)+0.0153).toFixed(4)}</th>
        <th>${((1/data.conversion_rates.RUB)+0.0008).toFixed(4)}</th>
        <th>${((1/data.conversion_rates.GBP)+0.0277).toFixed(4)}</th>
        <th>${((1/data.conversion_rates.TRY)+0.0149).toFixed(4)}</th>
       </tr>
      `
      let exc2 = `
      <tr>
        <th class="exc-table-txt2">ARMB</th>
        <th>${(1/data.conversion_rates.USD).toFixed(4)}</th>
        <th>${(1/data.conversion_rates.EUR).toFixed(4)}</th>
        <th>${(1/data.conversion_rates.RUB).toFixed(4)}</th>
        <th>${(1/data.conversion_rates.GBP).toFixed(4)}</th>
        <th>${(1/data.conversion_rates.TRY).toFixed(4)}</th>
       </tr>
       <tr>
        <th class="exc-table-txt2">Alış</th>
        <th>${((1/data.conversion_rates.USD)-0.001).toFixed(4)}</th>
        <th>${((1/data.conversion_rates.EUR)-0.0197).toFixed(4)}</th>
        <th>${((1/data.conversion_rates.RUB)-0.0005).toFixed(4)}</th>
        <th>${((1/data.conversion_rates.GBP)-0.0343).toFixed(4)}</th>
        <th>${((1/data.conversion_rates.TRY)-0.065).toFixed(4).slice(1)}</th>
       </tr>
       <tr>
        <th class="exc-table-txt2">Satış</th>
        <th>${((1/data.conversion_rates.USD)+0.0025).toFixed(4)}</th>
        <th>${((1/data.conversion_rates.EUR)+0.0113).toFixed(4)}</th>
        <th>${((1/data.conversion_rates.RUB)+0.0008).toFixed(4)}</th>
        <th>${((1/data.conversion_rates.GBP)+0.0137).toFixed(4)}</th>
        <th>${((1/data.conversion_rates.TRY)-0.0650).toFixed(4).slice(1)}</th>
       </tr>
      `
      let exc3 = `
      <tr>
        <th class="exc-table-txt2">ARMB</th>
        <th>${(1/data.conversion_rates.USD).toFixed(4)}</th>
        <th>${(1/data.conversion_rates.EUR).toFixed(4)}</th>
        <th>${(0/data.conversion_rates.RUB).toFixed(4)}</th>
        <th>${(1/data.conversion_rates.GBP).toFixed(4)}</th>
        <th>${(0/data.conversion_rates.TRY).toFixed(4)}</th>
       </tr>
       <tr>
        <th class="exc-table-txt2">Alış</th>
        <th>${((1/data.conversion_rates.USD)-0.005).toFixed(4)}</th>
        <th>${((1/data.conversion_rates.EUR)-0.0247).toFixed(4)}</th>
        <th>${((0/data.conversion_rates.RUB)+0.0000).toFixed(4)}</th>
        <th>${((1/data.conversion_rates.GBP)-0.0393).toFixed(4)}</th>
        <th>${((1/data.conversion_rates.TRY)-0.065).toFixed(4).slice(1)}</th>
       </tr>
       <tr>
        <th class="exc-table-txt2">Satış</th>
        <th>${((1/data.conversion_rates.USD)+0.0025).toFixed(4)}</th>
        <th>${((1/data.conversion_rates.EUR)+0.0163).toFixed(4)}</th>
        <th>${((0/data.conversion_rates.RUB)+0.0000).toFixed(4)}</th>
        <th>${((1/data.conversion_rates.GBP)+0.0187).toFixed(4)}</th>
        <th>${((1/data.conversion_rates.TRY)-0.0650).toFixed(4).slice(1)}</th>
       </tr>
      `
      document.querySelector('.exc-table tbody').innerHTML=exc
      document.querySelector('.exc-table .xxcc').innerHTML=exc2
      document.querySelector('.exc-table .xxc').innerHTML=exc3

      document.querySelector('.exc-table-tel tbody').innerHTML=exc
      document.querySelector('.exc-table-tel .xxcc').innerHTML=exc2
      document.querySelector('.exc-table-tel .xxc').innerHTML=exc3
  
  })
  .catch(err => console.log(Error))
}
getusers()


let exchead_ul = document.querySelectorAll('.exc-head-ul li')

for(let excul of exchead_ul) {
  excul.onclick= () =>{
    let acto = document.querySelector('.acto')
    acto.classList.remove('acto')
    excul.classList.add('acto')


    let id = excul.id
    let div = document.querySelectorAll('.bodys')
    for(let thrd of div){
      if(thrd.id === id){
           thrd.classList.remove('d-none')
      }
      else{
        thrd.classList.add('d-none')
      }
    }
  }
}