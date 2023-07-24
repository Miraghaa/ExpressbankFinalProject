// buyuk ekran 

let kart_btns = document.querySelectorAll('.kart-card .card-buttons button')

for( let btn of kart_btns){
  btn.onclick = () => {
    let actv = document.querySelector('.active')
    actv.classList.remove('active')
    btn.classList.add('active')


    let id = btn.id
    let div = document.querySelectorAll('.kart-info .kart-info1')

         for(let dv of div){
           
            if(dv.id===id){
                dv.classList.remove('d-none')
            }else{
                dv.classList.add('d-none')

            }
         }
  }
}

// kicik ekran

let kart_btns_tel = document.querySelectorAll('.card-buttonsda button')

for( let btnda of kart_btns_tel){
  btnda.onclick = () => {
    let actvda = document.querySelector('.activeda')
    actvda.classList.remove('activeda')
    btnda.classList.add('activeda')

    let id = btnda.id
    let divda = document.querySelectorAll('.kart-infoda .kart-info1da')

    for(let dvda of divda){
           
      if(dvda.id===id){
          dvda.classList.remove('d-none')
      }else{
          dvda.classList.add('d-none')

      }
   }
  }
}



if(localStorage.getItem('karts') === null){
    localStorage.setItem('karts',JSON.stringify([]))
}

    let btns = document.querySelectorAll('.ca .a')
     
    for(let md1 of btns){
      md1.onclick = () => {
        let mds = md1.parentElement.parentElement.parentElement.previousElementSibling.children[1].src
        let mdt = md1.parentElement.parentElement.parentElement.children[0].innerHTML
        let mdt2 = md1.parentElement.parentElement.parentElement.children[1].innerHTML
        let baskets = JSON.parse(localStorage.getItem('karts'))
        let exist = baskets.find(x=> x.sekil === mds)

        if(exist === undefined){
          baskets.push({
              sekil: mds,
              yazi: mdt,
              yazi1: mdt2 
          })
        }
        localStorage.setItem('karts',JSON.stringify(baskets))
        show() 
      }
    }

     let cc = document.querySelectorAll('.cc .a')
     for(let md of cc ){
      md.onclick=()=>{
        let mds = md.parentElement.parentElement.parentElement.previousElementSibling.children[0].src
        let mdt = md.parentElement.parentElement.parentElement.children[0].innerHTML
        let mdt2 = md.parentElement.parentElement.parentElement.children[1].innerHTML
        let baskets = JSON.parse(localStorage.getItem('karts'))
        let exist = baskets.find(x=> x.sekil === mds)

        if(exist === undefined){
          baskets.push({
              sekil: mds,
              yazi: mdt,
              yazi1: mdt2
          })
        }
        localStorage.setItem('karts',JSON.stringify(baskets))
        show() 
      }
     }
    

    function show() {
        let basketa  = JSON.parse(localStorage.getItem('karts'))
        document.getElementById('count').innerHTML = basketa.length
    }
    show()
