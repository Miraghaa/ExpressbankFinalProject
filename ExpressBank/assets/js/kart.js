

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

if(localStorage.getItem('karts') === null){
    localStorage.setItem('karts',JSON.stringify([]))
}

    let btns = document.querySelector('.kart-info1 .card-asd a')

    btns.onclick = () => {
        let img = document.querySelector('.bsk .a2').src
        let text = document.querySelector('.bsk h4').innerHTML
        let text1 = document.querySelector('.bsk p').innerHTML
        let baskets = JSON.parse(localStorage.getItem('karts'))
        let exist = baskets.find(x=> x.sekil === img)
      
        if(exist === undefined){
          baskets.push({
              sekil: img,
              yazi: text,
              yazi1: text1
          })
        }
        
        localStorage.setItem('karts',JSON.stringify(baskets))
        show()   
    }

    let btns2 = document.querySelector('.card-asg a')

     btns2.onclick = () => {
         let img = document.querySelector('.alltxt-photo4 img').src
         let text = document.querySelector('.alltxt-text h4').innerHTML
         let text1 = document.querySelector('.alltxt-text p').innerHTML
         let baskets = JSON.parse(localStorage.getItem('karts'))
         let exist = baskets.find(x=> x.sekil === img)
      
         if(exist === undefined){
           baskets.push({
               sekil: img,
               yazi: text,
               yazi1: text1
           })
         }
         
         localStorage.setItem('karts',JSON.stringify(baskets))
         show()
    }

    let btns3 = document.querySelector('.card-ash a')

    btns3.onclick = () => {
          let img = document.querySelector('.bs img').src
          let text = document.querySelector('.bs h4').innerHTML
          let text1 = document.querySelector('.bs p').innerHTML
          let baskets = JSON.parse(localStorage.getItem('karts'))
          let exist = baskets.find(x=> x.sekil === img)
      
          if(exist === undefined){
            baskets.push({
                sekil: img,
                yazi: text,
                yazi1: text1
            })
          }
          localStorage.setItem('karts',JSON.stringify(baskets))
          show()    
    }

    function show() {
        let basketa  = JSON.parse(localStorage.getItem('karts'))
        document.getElementById('count').innerHTML = basketa.length
    }
    
let btnss = document.querySelector('.kart-info1 .card-asda a')
    
  btnss.onclick = () => {
    let img = document.querySelector('.bska .a3').src
    let text = document.querySelector('.bska h4').innerHTML
    let text1 = document.querySelector('.bska p').innerHTML
    let baskets = JSON.parse(localStorage.getItem('karts'))
    let exist = baskets.find(x=> x.sekil === img)
  
    if(exist === undefined){
      baskets.push({
          sekil: img,
          yazi: text,
          yazi1: text1
      })
    }
    
    localStorage.setItem('karts',JSON.stringify(baskets))
    show()

 }

 let btnsss = document.querySelector('.kart-info1 .card-asdaa a')
    
  btnsss.onclick = () => {
    let img = document.querySelector('.bskaa img').src
    let text = document.querySelector('.bskaa h4').innerHTML
    let text1 = document.querySelector('.bskaa p').innerHTML
    let baskets = JSON.parse(localStorage.getItem('karts'))
    let exist = baskets.find(x=> x.sekil === img)
  
    if(exist === undefined){
      baskets.push({
          sekil: img,
          yazi: text,
          yazi1: text1
      })
    }
    
    localStorage.setItem('karts',JSON.stringify(baskets))
    show()

 }

 let btnson = document.querySelector('.kart-info1 .card-asdson a')
    
  btnson.onclick = () => {
    let img = document.querySelector('.bskson img').src
    let text = document.querySelector('.bskson h4').innerHTML
    let text1 = document.querySelector('.bskson p').innerHTML
    let baskets = JSON.parse(localStorage.getItem('karts'))
    let exist = baskets.find(x=> x.sekil === img)
  
    if(exist === undefined){
      baskets.push({
          sekil: img,
          yazi: text,
          yazi1: text1
      })
    }
    
    localStorage.setItem('karts',JSON.stringify(baskets))
    show()

 }
    show()
