let tel_infi = document.querySelector('.tel-infi')
let sidebar = document.querySelector('.sidebar')
let third_head = document.querySelector('.third-head')
let second_head = document.querySelector('.second-head')
let img1 = document.querySelector('.containers-tel .img1')
let img2 = document.querySelector('.containers-tel .img2')


img1.onclick = () =>{
    img2.style.display = 'inline-block'
    img1.style.display = 'none'
    second_head.style.display = 'none'
    sidebar.style.display= 'block'
    third_head.style.display = 'none'
    tel_infi.style.display = 'none'
}
img2.onclick = () =>{
    img2.style.display = 'none'
    img1.style.display = 'inline-block'
    sidebar.style.display= 'none'
    second_head.style.display = 'block'
    third_head.style.display = 'flex'
    tel_infi.style.display = 'block'
}