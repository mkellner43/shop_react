import uniqid from 'uniqid'

const storeItems = [
  { id: uniqid(),
    name: 'Natural Horn',
    price: 249.99,
    description: "Super hard to play, but your music teacher will love you!",
    image: require('./images/pexels-pixabay-164936.jpg')
  },
  { id: uniqid(),
    name: 'Harmonica',
    price: 9.99,
    description: "Great for passing the time in prison.",
    image: require('./images/pexels-graham-finney-13385799.jpg')
  },
  { id: uniqid(),
    name: 'Guitar',
    price: 549.99,
    description: "This thing is a chick magnet on the subway!",
    image: require('./images/pexels-kelvin-frança-3714523.jpg')
  },
  { id: uniqid(),
    name: 'Viola',
    price: 4559.99,
    description: "Play it with your teeth like Hendrix.",
    image: require('./images/pexels-esma-i̇mamoğlu-9745998.jpg')
  },
  { id: uniqid(),
    name: 'Drums',
    price: 10229.99,
    description: "If you can tune this thing, you can make six figures.",
    image: require('./images/pexels-roman-odintsov-6332012.jpg')
  },
  { id: uniqid(),
    name: 'Banjo',
    price: 199.99,
    description: "Assert dominance over the local alligators.",
    image: require('./images/pexels-tiểu-bảo-trương-8949646.jpg')
  },
  { id: uniqid(),
    name: 'Pan Flute',
    price: 29.99,
    description: "Summon all the local rats and become their leader.",
    image: require('./images/pexels-gilmer-diaz-estela-4809711.jpg')
  }
]

export default storeItems;