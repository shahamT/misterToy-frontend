import { httpService } from "./base/http.service"
import { storageService } from "./base/async-storage.service"
import { loadFromStorage, saveToStorage } from "./base/util.service"



export const toyService = {
  query,
  getById,
  save,
  remove,
  getEmptyToy,
  getDefaultFilter,
}

// ===========================================================================
// ============================ REMOTE FUNCTIONS =============================
// ===========================================================================
// ========================= (local functions below) =========================
// ===========================================================================
// ========================= (synced functions below) ========================
// ===========================================================================


const BASE_URL = 'toy/'


function query(filterBy = {}) {
    return httpService.get(BASE_URL, filterBy)
}

function getById(toyId) {
    return httpService.get(BASE_URL + toyId)

}
function remove(toyId) {
    return httpService.delete(BASE_URL + toyId)
}

function save(toy) {
    if (toy._id) {
        return httpService.put(BASE_URL + toy._id, toy)
    } else {
        return httpService.post(BASE_URL, toy)
    }
}




// ===========================================================================
// ============================ LOCAL FUNCTIONS ==============================
// ===========================================================================
// ========================= (synced functions below) ========================
// ===========================================================================


const STORAGE_KEY = 'toyDB'
export const labels = ['On wheels', 'Box game', 'Art', 'Baby', 'Doll', 'Puzzle',
  'Outdoor', 'Battery Powered']

// _createToys()

// function query(filterBy = {}) {
//   const { txt = '', label = '' } = filterBy;

//   const txtRegex = txt ? new RegExp(txt, 'i') : null;
//   const labelRegex = label ? new RegExp(label, 'i') : null;

//   return storageService.query(STORAGE_KEY).then(toys =>
//     toys.filter(toy => {
//       const labels = Array.isArray(toy.labels) ? toy.labels : [];

//       const matchesTxt =
//         !txtRegex ||
//         txtRegex.test(toy.name || '') ||
//         labels.some(l => txtRegex.test(l));

//       const matchesLabel =
//         !labelRegex ||
//         labels.some(l => labelRegex.test(l));

//       return matchesTxt && matchesLabel;
//     })
//   );
// }

// function getById(toyId) {
//   return storageService.get(STORAGE_KEY, toyId)
// }

// function remove(toyId) {
//   console.log("toyId: ", toyId)
//   return storageService.remove(STORAGE_KEY, toyId)
// }


// function save(toy) {
//   if (toy._id) {
//     return storageService.put(STORAGE_KEY, toy)
//   } else {
//     return storageService.post(STORAGE_KEY, toy)
//   }
// }

// function _createToys() {
//   if (!loadFromStorage(STORAGE_KEY) || loadFromStorage(STORAGE_KEY).lentgh === 0) {
//     const toys = _createDemoToys()
//     saveToStorage(STORAGE_KEY, toys)
//   }
// }

// function _createDemoToys() {
//   const toys = [
//     {
//       _id: 't101',
//       name: 'Talking Doll',
//       imgUrl: 'https://spirit.scene7.com/is/image/Spirit/02842623-a?wid=640&hei=640&fmt=webp',
//       price: 123,
//       labels: ['Doll', 'Battery Powered', 'Baby'],
//       createdAt: 1631031801011,
//       inStock: true,
//     },
//     {
//       _id: 't102',
//       name: 'Race Car',
//       imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbO7F1defYPcn85_3HhFR0LHOhEV8zXsaP0g&s',
//       price: 89,
//       labels: ['On wheels', 'Battery Powered', 'Outdoor'],
//       createdAt: 1631032802011,
//       inStock: true,
//     },
//     {
//       _id: 't103',
//       name: 'Paint Set',
//       imgUrl: 'https://cdn.media.amplience.net/s/hobbylobby/686139-100249-01142025-IMGSET',
//       price: 45,
//       labels: ['Art', 'Baby'],
//       createdAt: 1631033803011,
//       inStock: false,
//     },
//     {
//       _id: 't104',
//       name: 'Puzzle Master',
//       imgUrl: 'https://davesdeals.com.au/cdn/shop/files/9350375008721-48-Piece-Jumbo-Floor-Construction-Site-1_535x.jpg?v=1714768977',
//       price: 60,
//       labels: ['Puzzle', 'Box game'],
//       createdAt: 1631034804011,
//       inStock: true,
//     },
//     {
//       _id: 't105',
//       name: 'Outdoor Explorer Kit',
//       imgUrl: 'https://m.media-amazon.com/images/I/81GGKCrzRHL.jpg',
//       price: 99,
//       labels: ['Outdoor', 'Box game'],
//       createdAt: 1631035805011,
//       inStock: true,
//     },
//     {
//       _id: 't106',
//       name: 'Building Blocks',
//       imgUrl: 'https://www.ikea.com/us/en/images/products/underhalla-40-piece-wooden-building-block-set-multicolor__0976302_pe813141_s5.jpg?f=s',
//       price: 70,
//       labels: ['Box game', 'Baby'],
//       createdAt: 1631036806011,
//       inStock: false,
//     },
//     {
//       _id: 't107',
//       name: 'Battery Robot',
//       imgUrl: 'https://i5.walmartimages.com/asr/e5835032-9826-47c6-adce-60b1fa1f94a5.37d6317f190fb1c1978bde42217e8644.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF',
//       price: 150,
//       labels: ['Battery Powered', 'On wheels'],
//       createdAt: 1631037807011,
//       inStock: true,
//     },
//     {
//       _id: 't108',
//       name: 'Sketch Board',
//       imgUrl: 'https://images.ctfassets.net/f1fikihmjtrp/7tFZFpLbPQ6NakXGqFIRxz/569b088aa889048a692f15a62ef9cb93/22945-group3ww-l.jpg',
//       price: 55,
//       labels: ['Art'],
//       createdAt: 1631038808011,
//       inStock: true,
//     },
//     {
//       _id: 't109',
//       name: 'Stuffed Bear',
//       imgUrl: 'https://pl.nice-cdn.com/upload/image/product/large/default/toy-place-bear-100cm-1-st-819856-en.jpg',
//       price: 35,
//       labels: ['Baby', 'Doll'],
//       createdAt: 1631039809011,
//       inStock: true,
//     },
//     {
//       _id: 't110',
//       name: 'Obstacle Racer',
//       imgUrl: 'https://stoysnetcdn.com/tgtg/tgtg_ho18_anw145/tgtg_ho18_anw145.jpg',
//       price: 120,
//       labels: ['On wheels', 'Outdoor', 'Battery Powered'],
//       createdAt: 1631040810011,
//       inStock: false,
//     }
//   ]

//   return toys
// }

// ===========================================================================
// ============================ SYNCED FUNCTIONS =============================
// ===========================================================================


function getEmptyToy() {
  return {
    name: '',
    imgUrl: null,
    price: 0,
    labels: [],
    createdAt: null,
    inStock: true,
  }
}

function getDefaultFilter() { 
  return {
    txt: '',
    label: '',
    isAscending: 1
  }
}



