function getems() {
    let items = JSON.parse(localStorage.getItem('karts'))
    let  n = ''
    for(let item of items){
        n+=`
        <div class="tab-card-all col-lg-4 col-12">
                    <div class="tab-card">
                         <div class="card-photo">
                            <img src="${item.sekil}" alt="">
                         </div>
                         <div class="card-content ">
                            <h4>${item.yazi}</h4>
                            <p>${item.yazi1}</p>
                            <a href="">Sifariş etmək</a>
                            <i class="fa-solid fa-minus"></i>
                        </div>
                    </div>
                </div>
        `
    } 
    document.querySelector('.miris').innerHTML = n
    let dlt = document.querySelectorAll('.card-content i')

for(let del of dlt){
   del.onclick = () => {
    let src = del.parentElement.previousElementSibling.children[0].src
    let kartfilter = items.filter(z => z.sekil != src)
    localStorage.setItem('karts',JSON.stringify(kartfilter))
    getems()
    showS()
   }
}
}
getems()

function showS() {
    let karts = JSON.parse(localStorage.getItem('karts'))
    if(karts.length === 0){
        document.querySelector('.tupoy').classList.remove('d-none')
     }
     else{
       document.querySelector('.tupoy').classList.add('d-none')
     }
}
showS()


