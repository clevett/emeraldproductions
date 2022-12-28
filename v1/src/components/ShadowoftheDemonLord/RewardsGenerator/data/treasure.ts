//SODL Core Book page 206 on Revised 2019
//Coin break down homebrew
export default [
  {
    name: 'starting',
    gold: 1,
    coins: {
      bits: '6d6',
      cp: '3d6',
      ss: '2d6',
      gc: null
    },
  },
  {
    name: 'novice',
    gold: 5,
    coins: {
      bits: '2d6',
      cp: '2d6',
      ss: '6d6',
      gc: '3d6'
    },
  },
  {
    name: 'expert',
    gold: 50,
    coins: {
      bits: null,
      cp: null,
      ss: '4d6',
      gc: '5d6'
    },
  },
  {
    name: 'master',
    gold: 500,
    coins: {
      bits: null,
      cp: null,
      ss: '12d6',
      gc: '8d6'
    },
  }
]

