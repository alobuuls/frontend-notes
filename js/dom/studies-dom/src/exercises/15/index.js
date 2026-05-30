document.addEventListener('keyup', ({key}) => {
  if (key !== 'Backspace') return;
  const allMoviesCheked = document.querySelectorAll('.check-movie:checked');
  allMoviesCheked.forEach(movie => movie.closest('.item-movie').remove());
});
