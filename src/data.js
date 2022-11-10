import uniqid from 'uniqid'

const storeItems = [
  { id: uniqid(),
    name: 'Natural Horn',
    price: 249.99,
    description: "Super hard to play, but your music teacher will love you!",
    image: require('./images/icon-0.svg').default
  },
  { id: uniqid(),
    name: 'Harmonica',
    price: 9.99,
    description: "Great for passing the time in prison.",
    image: require('./images/icon-1.svg').default
  },
  { id: uniqid(),
    name: 'Melodica',
    price: 49.99,
    description: "This thing is a chick magnet on the subway!",
    image: require('./images/icon-2.svg').default
  },
  { id: uniqid(),
    name: 'Viola',
    price: 4559.99,
    description: "Play it with your teeth like Hendrix.",
    image: require('./images/icon-4.svg').default
  },
  { id: uniqid(),
    name: 'Timpani',
    price: 10229.99,
    description: "If you can tune this thing, you can make six figures.",
    image: require('./images/icon-5.svg').default
  },
  { id: uniqid(),
    name: 'Banjo',
    price: 199.99,
    description: "Assert dominance over the local alligators.",
    image: require('./images/icon-6.svg').default
  },
  { id: uniqid(),
    name: 'Pan Flute',
    price: 29.99,
    description: "Summon all the local rats and become their leader.",
    image: require('./images/icon-7.svg').default
  }
]

export default storeItems;