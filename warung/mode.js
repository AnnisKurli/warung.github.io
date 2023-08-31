const tabs = document.querySelectorAll('.header-nav-tab');//nav tab manggil classnya untuk header
const highlight = document.querySelector('.highlight');//untuk header
const headerNavList = document.getElementById("header-list");
const firstTab = tabs[0];//utk header

// Calculate the position of the highlight element
const left = firstTab.offsetLeft;//untuk header
const width = firstTab.offsetWidth;//untuk header

// Set the default position of the highlight element
highlight.style.left = `${left}px`;
highlight.style.width = `${width}px`;

// Get the index of the selected tab
tabs.forEach(tab => {
  tab.addEventListener("click", function() {
    const index = this.dataset.index;
    
    // Calculate the position of the highlight element
    const left = this.offsetLeft;
    const width = this.offsetWidth;
    
    // Update the position of the highlight element
    highlight.style.left = `${left}px`;
    highlight.style.width = `${width}px`;
    
    // Add active class to the selected tab
    tabs.forEach(tab => tab.classList.remove('active'));
    this.classList.add('active');
  });//BUAT GARIS BAWAH DI BAWAH TULISANEEEE HEADER
});



// changemode
// const tabs = document.querySelectorAll('.highlight');
// const firstTab = tabs[0];
// var icon =document.getElementById("mode-change");

// tabs.forEach(tab => {
//     tab.addEventListener('click', function() {
//         tabs.forEach(tab => tab.classList.remove('active'));
//         this.classList.add('active');
//       });
//     });

// icon.onclick = function(){
//         document.body.classList.toggle("dark-theme");
//         if(icon.className=="bx bx-moon"){
//             icon.className="bx bx-sun"; 
//         }else{
//             icon.className="bx bx-moon"; 
//         }
//     }

    

// gambar
function slider(anything){
    document.querySelector('.one').src = anything;
};

function ubahTeks1() {
    document.getElementById("judul").innerHTML = "Milk Boba Greentea";
    document.getElementById("teks").innerHTML = "a mixture of greentea powder with specially made milk and boba";
};

function ubahTeks2() {
    document.getElementById("judul").innerHTML = "Milk Boba Chocolate";
    document.getElementById("teks").innerHTML = "a mixture of chocolate powder with specially made milk and boba";
};

function ubahTeks3() {
    document.getElementById("judul").innerHTML = "Milk Boba Mocca";
    document.getElementById("teks").innerHTML = "a mixture of mocca powder with specially made milk and boba";
};

// header
window.addEventListener('scroll', function(){
    const header = document.querySelector('header');
    header.classList.toggle("sticky", window.scrollY > 0);
});

window.addEventListener('scroll',()=> indicateScrollBar())

// progress bar
function indicateScrollBar() {
const distanceFromPageTop = document.body.scrollTop || document.documentElement.scrollTop;

const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

const scrolled = (distanceFromPageTop / height) * 100;

document.querySelector(".scroll-bar").style.width =  `${scrolled}%`;
} 

//toogle dan sidebar bayangan hitam" sama silangnya
const menuBtn = document.querySelector('.menuBtn')
const navigation = document.querySelector('.header-nav-list')
const bgSidebar = document.querySelector('.bg-sidebar')

menuBtn.addEventListener('click', function() {
this.classList.toggle('change')
navigation.classList.toggle('change')
bgSidebar.classList.toggle('change')
});

bgSidebar.addEventListener('click', function() {
this.classList.remove('change')
navigation.classList.remove('change')
menuBtn.classList.remove('change')
});

//untuk slider js di reviews
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

//gotop
window.addEventListener('scroll', function(){
    var gotopButton = document.querySelector('.gotop');
    if (window.pageYOffset > 0) {
        gotopButton.classList.add('show');
    } else {
        gotopButton.classList.remove('show');
    }
});

//link
document.getElementById("copy-link").addEventListener("click", function(event) {
  event.preventDefault(); // Mencegah aksi default mengarahkan ke tautan

  var link = window.location.href;

  // Menyalin link ke clipboard
  navigator.clipboard.writeText(link).then(function() {
    alert("Link telah disalin!");
  }).catch(function() {
    alert("Terjadi kesalahan saat menyalin link.");
  });
});

//refresh button


