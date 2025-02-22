const products = [
  {
    _id: '1',
    name: 'boAt Airdopes 121v2 TWS Earbuds',
    image: '/images/boatHeadfone.jpg',
    description:
      'boAt Airdopes 121v2 TWS Earbuds with Bluetooth V5.0, Immersive Audio, Up to 14H Total Playback, Instant Voice Assistant, Easy Access Controls with Mic and Dual Tone Ergonomic Design(Active Black) ',
    brand: 'Boat',
    category: 'Electronics',
    price: 1999,
    countInStock: 10,
    rating: 4.5,
    numReviews: 12,
  },
  {
    _id: '2',
    name: 'Micromax IN 1b (Purple, 32 GB)',
    image: '/images/micromaxInB.jpg',
    description:
      'Say hello to the Micromax IN 1b smartphone whose powerful MediaTek Helio G35 gaming processor and a 5000 mAh battery will pave the way for effortless multitasking and usage.',
    brand: 'Micromax',
    category: 'Electronics',
    price: 59999,
    countInStock: 7,
    rating: 4.0,
    numReviews: 8,
  },
  {
    _id: '3',
    name: 'Cannon EOS 80D DSLR Camera',
    image: '/images/camera.jpg',
    description:
      'Characterized by versatile imaging specs, the Canon EOS 80D further clarifies itself using a pair of robust focusing systems and an intuitive design',
    brand: 'Cannon',
    category: 'Electronics',
    price: 92999,
    countInStock: 0,
    rating: 3,
    numReviews: 12,
  },
  {
    _id: '4',
    name: 'Sony Playstation 4 Pro White Version',
    image: '/images/playstation.jpg',
    description:
      'The ultimate home entertainment center starts with PlayStation. Whether you are into gaming, HD movies, television, music',
    brand: 'Sony',
    category: 'Electronics',
    price: 39999,
    countInStock: 11,
    rating: 5,
    numReviews: 12,
  },
  {
    _id: '5',
    name: 'Logitech G-Series Gaming Mouse',
    image: '/images/mouse.jpg',
    description:
      'Get a better handle on your games with this Logitech LIGHTSYNC gaming mouse. The six programmable buttons allow customization for a smooth playing experience',
    brand: 'Logitech',
    category: 'Electronics',
    price: 2999,
    countInStock: 7,
    rating: 3.5,
    numReviews: 10,
  },
  {
    _id: '6',
    name: 'Amazon Echo Dot 3rd Generation',
    image: '/images/alexa.jpg',
    description:
      'Meet Echo Dot - Our most popular smart speaker with a fabric design. It is our most compact smart speaker that fits perfectly into small space',
    brand: 'Amazon',
    category: 'Electronics',
    price: 2499,
    countInStock: 0,
    rating: 4,
    numReviews: 12,
  },
  {
    _id: '7',
    name: 'Xbox 360',
    image: 'http://2.bp.blogspot.com/-z9RC4Ry6WzA/Tdg2ovQDsQI/AAAAAAAAB4U/95MrJzZarjA/s1600/Xbox_360_Console_4gb.jpg',
    description:
      'Xbox 360 ',
    brand: 'Xbox',
    category: 'Electronics',
    price: 48999,
    countInStock: 5,
    rating: 5,
    numReviews: 12,
  },
  {
    _id: '8',
    name: 'Apple Vision Pro',
    image: 'http://www.pixelsham.com/wp-content/uploads/2023/06/AppleVisionPro.jpg',
    description:
      'Apple Vision Pro ',
    brand: 'Prot',
    category: 'Electronics',
    price: 231999,
    countInStock: 10,
    rating: 4.5,
    numReviews: 12,
  },
  {
    _id: '9',
    name: 'iphone 15',
    image: 'https://phonetechx.com/wp-content/uploads/2022/09/iPhone-15-Ultra.jpg',
    description:
      'iPhone 15 ',
    brand: 'Apple',
    category: 'Electronics',
    price: 125999,
    countInStock: 6,
    rating: 4,
    numReviews: 12,
  },
  {
    _id: '10',
    name: 'iPhone 14',
    image: 'https://www.chooseyourmobile.com/wp-content/uploads/2022/09/iPhone-14.jpg',
    description:
      'iphone 14 ',
    brand: 'Apple',
    category: 'Electronics',
    price: 66999,
    countInStock: 15,
    rating: 4.5,
    numReviews: 12,
  },
]

module.exports = products;
