$(document).ready(function() {
  $('select').niceSelect();
});

$(".home-slider-btn").click(function (){
  $('html, body').animate({
      scrollTop: $("#course-single").offset().top - 200,
  }, 100,'linear');
});

const scrollUp = () => {
  const scrollUp = document.querySelector('#scrollUp');
  this.scrollY >= 350
    ? scrollUp.style.display = 'flex'
    : scrollUp.style.display = 'none';
};

window.addEventListener("scroll", scrollUp);

const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");
const lines = document.querySelectorAll(".hamburger div");

hamburger.addEventListener("click", () => {
  menu.classList.toggle("slide");
  lines.forEach((item) => {
    item.classList.toggle("toggle");
  });
});

$("#owlHero").owlCarousel({
  items: 1,
  loop: true,
  autoplay: true,
  autoplayTimeout: 2000,
  margin: 0,
  nav: true,
  dots: true,
  responsiveRefreshRate: 10,
});

$(".courseSlider .owl-carousel").owlCarousel({
  loop: true,
  autoplay: true,
  autoplayTimeout: 3000,
  margin: 20,
  nav: true,
  dots: true,
  responsive: {
    0: {
      items: 1,
    },
    820: {
      items: 2,
    },
    1237: {
      items: 3,
    },
  },
});

$(".owlGraduate .owl-carousel").owlCarousel({
  loop: true,
  autoplay: true,
  autoplayTimeout: 2000,
  margin: 20,
  nav: true,
  dots: true,
  responsiveRefreshRate: 10,
  responsive: {
    0: {
      items: 1,
    },
    991: {
      items: 2,
    },
  },
});

$(".teachers .owl-carousel").owlCarousel({
  loop: true,
  autoplay: true,
  autoplayTimeout: 2000,
  margin: 20,
  nav: true,
  dots: true,
  responsiveRefreshRate: 10,
  responsive: {
    0: {
      items: 1,
    },
    500: {
      items: 2,
    },
    768: {
      items: 3,
    },
    991: {
      items: 4,
    },
  },
});

const boxes = document.querySelectorAll(".box");

boxes.forEach((box) =>
  box.addEventListener("click", () => {
    box.classList.toggle("active");
  })
);

$(".blogs .owl-carousel").owlCarousel({
  loop: true,
  autoplay: true,
  autoplayTimeout: 2000,
  margin: 10,
  nav: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 3,
    },
  },
});

const data = [
  {
    id: 1,
    serNo: "123",
    name: "İlkin",
    surname: "Əliyev",
    fatherName: "Məhəmməd",
    kurs: "Frontend Proqramlaşdırma",
    date: "01.01.2023",
    type: "Standart",
  },
  {
    id: 2,
    serNo: "258",
    name: "İntiqam",
    surname: "Şumolov",
    fatherName: "Məhəmməd",
    kurs: "Frontend Proqramlaşdırma",
    date: "01.01.2023",
    type: "Standart",
  },
  {
    id: 3,
    serNo: "555",
    name: "Şahmar",
    surname: "Quliyev",
    fatherName: "İlham",
    kurs: "Backend Proqramlaşdırma",
    date: "01.01.2023",
    type: "Standart",
  },
];

let selectedUser = '';
  searchButton.addEventListener("click", () => {
  let selectedUser = data.filter(user => {
    return inpValue.value === user.serNo;
  });
  if (selectedUser.length > 0) {
    title.style.opacity = "0";

    lastImg.style.opacity = "0";
   
    table.style.display = "table";
    setTimeout(() => {table.style.opacity = "1";}, 500);

    sertificateErrorMessage.style.opacity = "0";
    setTimeout(() => {sertificateErrorMessage.style.display = "none";}, 200);

    inpValue.value = '';

    selectedUser.forEach( user => tableBody.innerHTML = `<tr><td>${user.serNo}</td><td>${user.name} ${user.surname} ${user.fatherName}</td><td>${user.kurs}</td><td>${user.date}</td><td>${user.type}</td></tr>` );

    sertificate.setAttribute('src','assets/img/certifacate/yes.png');
  }else {
    title.style.opacity = "0";
    
    lastImg.style.opacity = "1";
    
    table.style.opacity = "0";
    setTimeout(() => {table.style.display = "none";}, 500);

    sertificateErrorMessage.style.display = "block";
    setTimeout(() => {sertificateErrorMessage.style.opacity = "1";}, 500);

    inpValue.value = '';

    sertificate.setAttribute('src','assets/img/certifacate/certifacate1.png');
  }
});