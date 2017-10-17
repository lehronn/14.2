var movies = [
  {
    id: 0,
    title: 'Król Lew',
    desc: 'Film o królu sawanny.',
    poster: 'http://1.fwcdn.pl/po/68/78/6878/7389475.3.jpg'
  },
  {
    id: 1,
    title: 'Pulp Fiction',
    desc: 'Film o prawdziwych królach sawanny.',
    poster: 'http://1.fwcdn.pl/po/10/39/1039/7517880.3.jpg'
  },
  {
    id: 2,
    title: 'Hateful Eight',
    desc: 'Film o tym, jak to było w kolebce wolności i demokracji. Część II.',
    poster: 'http://1.fwcdn.pl/po/41/92/714192/7715662.3.jpg'
  },
  {
    id: 3,
    title: 'Django',
    desc: 'Film o tym, jak to było w kolebce wolności i demokracji. Część I.',
    poster: 'http://1.fwcdn.pl/po/05/41/620541/7517014.3.jpg'
  }
];

var moviesElements = movies.map(function(movie) {
  return React.createElement('li', {key: movie.id},
    React.createElement('h2', {}, movie.title),
    React.createElement('p', {}, movie.desc),
    React.createElement('img', {src: movie.poster})
  );
});

var element =
  React.createElement('div', {},
    React.createElement('h1', {}, 'Lista filmów'),
    React.createElement('ul', {}, moviesElements)
  );



ReactDOM.render(element, document.getElementById('app'));
