//Carrossel

 const carrosseis = document.querySelectorAll('.carousel');

carrosseis.forEach(carousel => {
  const cardapio = carousel.querySelector('.cardapio');
  const prev = carousel.querySelector('.prev');
  const next = carousel.querySelector('.next');

  next.addEventListener('click', () => {
    cardapio.scrollBy({ left: 220, behavior: 'smooth' });
  });

  prev.addEventListener('click', () => {
    cardapio.scrollBy({ left: -220, behavior: 'smooth' });
  });
});

