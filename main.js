$(function(){

$('.slider').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 768, // タブレット
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 480, // スマホ
      settings: {
        slidesToShow: 1
      }
    },
    {
    breakpoint: 480,
    settings: {
      slidesToShow: 1,
      arrows: false,
      dots: true,
      centerMode: true,
      centerPadding: '50px'
  }
}
  ]

});

  let angle = 0;
  let radius = 100;
  setInterval(function(){
  angle += 0.005;

  $(".item").each(function(i){
    let a = angle + i * (Math.PI * 2 / 3);
    let x = 150 + radius * Math.cos(a);
    let y = 150 + radius * Math.sin(a);
    $(this).css({
      left: x + "px",
      top: y + "px"
    });
  });
},20);


  $('.drawer').drawer();

    $('.sec-01list span').hover(function(){
        $(this).addClass('marker');
    },
    function(){
        $(this).removeClass('marker');
    }
);

  const modal = document.getElementById('modal');
  const modalTitle = document.getElementById('modal-title');
  const modalDetail = document.getElementById('modal-detail');
  const modalImg = document.getElementById('modal-img');
  const closeBtn = document.querySelector('.close');

  $('.card').on('click', function() {

    const title = $(this).data('title');
    const detail = $(this).data('detail');
    const img = $(this).data('img');

    $('#modal-title').text(title);
    $('#modal-detail').text(detail);
    $('#modal-img').attr('src', img);

    $('#modal').addClass('show');
  });

  closeBtn.addEventListener('click', () => {
    modal.classList.remove('show');
  });

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.remove('show');
    }
  });
    new Typed('#typed', {
      strings: ["Kumazaki Shoko"],
      typeSpeed: 100, // 入力スピード
      backSpeed: 50,  // 消えるスピード
      loop: true      // ループ設定
    });

});
bubbly({
  colorStart: '#F9F5EC',
  colorStop: '#B6CBBD',
  blur: 1,
  compose: 'source-over',
  bubbleFunc:() => `hsla(${Math.random() * 50}, 100%, 50%, .3)`
});














