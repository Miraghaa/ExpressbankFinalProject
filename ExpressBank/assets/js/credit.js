let img1 = document.querySelector('.containers-tel .img1')
let img2 = document.querySelector('.containers-tel .img2')
let credit_tel = document.querySelector('.credit-main-tel') 
let sidebar = document.querySelector('.sidebar')
let third_head = document.querySelector('.third-head')
let second_head = document.querySelector('.second-head')


img1.onclick = () =>{
    img2.style.display = 'inline-block'
    img1.style.display = 'none'
    sidebar.style.display = 'block'
    second_head.style.display = 'none'
    credit_tel.style.display = 'none'
    third_head.style.display = 'none'
}
img2.onclick = () =>{
    img2.style.display = 'none'
    img1.style.display = 'inline-block'
    sidebar.style.display = 'none'
    second_head.style.display = 'block'
    credit_tel.style.display = 'block'
    third_head.style.display = 'flex'
}




let card_btns = document.querySelectorAll('.credit-card .card-buttons button')

for( let btn of card_btns){
  btn.onclick = () => {
    let actv = document.querySelector('.active')
    actv.classList.remove('active')
    btn.classList.add('active')


    let id = btn.id
    let div = document.querySelectorAll('.credit-info .credit-info1')

         for(let dv of div){
           
            if(dv.id===id){
                dv.classList.remove('d-none')
            }else{
                dv.classList.add('d-none')

            }
         }
  }
}



