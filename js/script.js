$('.slider').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  dots: true,
  prevArrow: '<button type="button" class="absolute top-[423px] left-[600px]  z-10 w-10 h-10 bg-amber-700 text-white rounded-full hover:bg-white border-2 border-amber-700 transition-all hover:text-black"><i class="fa-solid fa-arrow-left"></i></button>',
  nextArrow: '<button type="button" class="absolute top-[423px] left-[896px]  z-10 w-10 h-10 bg-amber-700 text-white rounded-full hover:bg-white border-2 border-amber-700 transition-all hover:text-black"><i class="fa-solid fa-arrow-right"></i></button>',
});

   const mainBtn = document.getElementById('mainBtn');
const opt1 = document.getElementById('opt1');
const opt2 = document.getElementById('opt2');
const opt3 = document.getElementById('opt3');
const opt4 = document.getElementById('opt4');
const bg1 = document.getElementById("bg1");
const text1 = document.getElementById("text1");

let isOpen = false;

mainBtn.addEventListener('click', () => {
  if (isOpen === false) {
  
    bg1.style.backgroundColor = "#52C5B6";
    text1.style.color = '#FFFFFF';
    text1.style.setProperty('--before-color', '#FFFFFF'); 
    
    
    opt1.classList.add('-translate-y-17', 'scale-100'); 
    opt2.classList.add('-translate-y-32', 'scale-100'); 
    opt3.classList.add('-translate-y-47', 'scale-100');  
    opt4.classList.add('-translate-y-62', 'scale-100'); 
    
    mainBtn.innerHTML =`<i class="fa-solid fa-minus"></i>`;
    isOpen = true; 
  } else {
   
    bg1.style.backgroundColor = "#FFFFFF";
    text1.style.color = '#30344E';
    text1.style.setProperty('--before-color', '#52C5B6'); 
    
   
    opt1.classList.remove('-translate-y-17', 'scale-100'); 
    opt2.classList.remove('-translate-y-32', 'scale-100'); 
    opt3.classList.remove('-translate-y-47', 'scale-100');  
    opt4.classList.remove('-translate-y-62', 'scale-100'); 
    
    mainBtn.innerHTML =`<i class="fa-solid fa-plus" ></i>`;
    isOpen = false; 
  }
});

let opt5=document.getElementById("opt5")
let opt6=document.getElementById("opt6")
let opt7=document.getElementById("opt7")
let opt8=document.getElementById("opt8")
let mainBtn1=document.getElementById("mainBtn1")
let bg2=document.getElementById("bg2")
let text2=document.getElementById("text2")


let isOpen1 = false;

mainBtn1.addEventListener('click', () => {
  if (isOpen1 === false) {
  
    bg2.style.backgroundColor = "#52C5B6";
    text2.style.color = '#FFFFFF';
    text2.style.setProperty('--before-color', '#FFFFFF'); 
    
    
    opt5.classList.add('-translate-y-17', 'scale-100'); 
    opt6.classList.add('-translate-y-32', 'scale-100'); 
    opt7.classList.add('-translate-y-47', 'scale-100');  
    opt8.classList.add('-translate-y-62', 'scale-100'); 
    
    mainBtn1.innerHTML =`<i class="fa-solid fa-minus"></i>`;
    isOpen1 = true; 
  } else {
   
    bg2.style.backgroundColor = "#FFFFFF";
    text2.style.color = '#30344E';
    text2.style.setProperty('--before-color', '#52C5B6'); 
    
   
    opt5.classList.remove('-translate-y-17', 'scale-100'); 
    opt6.classList.remove('-translate-y-32', 'scale-100'); 
    opt7.classList.remove('-translate-y-47', 'scale-100');  
    opt8.classList.remove('-translate-y-62', 'scale-100'); 
    
    mainBtn1.innerHTML =`<i class="fa-solid fa-plus" ></i>`;
    isOpen1 = false; 
  }
});
let opt9=document.getElementById("opt9")
let opt10=document.getElementById("opt10")
let opt11=document.getElementById("opt11")
let opt12=document.getElementById("opt12")
let mainBtn2=document.getElementById("mainBtn2")
let bg3=document.getElementById("bg-3")
let text3=document.getElementById("text3")


let isOpen2 = false;

mainBtn2.addEventListener('click', () => {
  if (isOpen2 === false) {
  
    bg3.style.backgroundColor = "#52C5B6";
    text3.style.color = '#FFFFFF';
    text3.style.setProperty('--before-color', '#FFFFFF'); 
    
    
    opt9.classList.add('-translate-y-17', 'scale-100'); 
    opt10.classList.add('-translate-y-32', 'scale-100'); 
    opt11.classList.add('-translate-y-47', 'scale-100');  
    opt12.classList.add('-translate-y-62', 'scale-100'); 
    
    mainBtn2.innerHTML =`<i class="fa-solid fa-minus"></i>`;
    isOpen2 = true; 
  } else {
   
    bg3.style.backgroundColor = "#FFFFFF";
    text3.style.color = '#30344E';
    text3.style.setProperty('--before-color', '#52C5B6'); 
    
   
    opt9.classList.remove('-translate-y-17', 'scale-100'); 
    opt10.classList.remove('-translate-y-32', 'scale-100'); 
    opt11.classList.remove('-translate-y-47', 'scale-100');  
    opt12.classList.remove('-translate-y-62', 'scale-100'); 
    
    mainBtn2.innerHTML =`<i class="fa-solid fa-plus" ></i>`;
    isOpen2 = false; 
  }
});
let opt16=document.getElementById("opt16")
let opt13=document.getElementById("opt13")
let opt14=document.getElementById("opt14")
let opt15=document.getElementById("opt15")
let mainBtn3=document.getElementById("mainBtn3")
let bg4=document.getElementById("bg4")
let text4=document.getElementById("text4")


let isOpen3 = false;

mainBtn3.addEventListener('click', () => {
  if (isOpen3 === false) {
  
    bg4.style.backgroundColor = "#52C5B6";
    text4.style.color = '#FFFFFF';
    text4.style.setProperty('--before-color', '#FFFFFF'); 
    
    
    opt16.classList.add('-translate-y-17', 'scale-100'); 
    opt13.classList.add('-translate-y-32', 'scale-100'); 
    opt14.classList.add('-translate-y-47', 'scale-100');  
    opt15.classList.add('-translate-y-62', 'scale-100'); 
    
    mainBtn3.innerHTML =`<i class="fa-solid fa-minus"></i>`;
    isOpen3 = true; 
  } else {
   
    bg4.style.backgroundColor = "#FFFFFF";
    text4.style.color = '#30344E';
    text4.style.setProperty('--before-color', '#52C5B6'); 
    
   
    opt16.classList.remove('-translate-y-17', 'scale-100'); 
    opt13.classList.remove('-translate-y-32', 'scale-100'); 
    opt14.classList.remove('-translate-y-47', 'scale-100');  
    opt15.classList.remove('-translate-y-62', 'scale-100'); 
    
    mainBtn3.innerHTML =`<i class="fa-solid fa-plus" ></i>`;
    isOpen3 = false; 
  }
});