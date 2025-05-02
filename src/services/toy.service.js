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


// const BASE_URL = 'toy/'


// function query(filterBy = {}) {
//     return httpService.get(BASE_URL, filterBy)
// }

// function getById(toyId) {
//     return httpService.get(BASE_URL + toyId)

// }
// function remove(toyId) {
//     return httpService.delete(BASE_URL + toyId)
// }

// function save(toy) {
//     if (toy._id) {
//         return httpService.put(BASE_URL + toy._id, toy)
//     } else {
//         return httpService.post(BASE_URL, toy)
//     }
// }




// ===========================================================================
// ============================ LOCAL FUNCTIONS ==============================
// ===========================================================================
// ========================= (synced functions below) ========================
// ===========================================================================


const STORAGE_KEY = 'toyDB'
const labels = ['On wheels', 'Box game', 'Art', 'Baby', 'Doll', 'Puzzle',
  'Outdoor', 'Battery Powered']

_createToys()

function query(filterBy = {}) {
  return storageService.query(STORAGE_KEY)
    .then(toys => {
      return toys
    })
}

function getById(toyId) {
  return storageService.get(STORAGE_KEY, toyId)
}

function remove(toyId) {
  console.log("toyId: ", toyId)
  return storageService.remove(STORAGE_KEY, toyId)
}


function save(toy) {
  if (toy._id) {
    return storageService.put(STORAGE_KEY, toy)
  } else {
    return storageService.post(STORAGE_KEY, toy)
  }
}

function _createToys() {
  if (!loadFromStorage(STORAGE_KEY) || loadFromStorage(STORAGE_KEY).lentgh === 0) {
    const toys = _createDemoToys()
    saveToStorage(STORAGE_KEY, toys)
  }
}

function _createDemoToys() {
  const toys = [
    {
      _id: 't101',
      name: 'Talking Doll',
      imgUrl: 'https://pl.nice-cdn.com/upload/image/product/large/default/toy-place-bear-100cm-1-st-819856-en.jpg',
      price: 123,
      labels: ['Doll', 'Battery Powered', 'Baby'],
      createdAt: 1631031801011,
      inStock: true,
    },
    {
      _id: 't102',
      name: 'Race Car',
      imgUrl: 'https://pl.nice-cdn.com/upload/image/product/large/default/toy-place-bear-100cm-1-st-819856-en.jpg',
      price: 89,
      labels: ['On wheels', 'Battery Powered', 'Outdoor'],
      createdAt: 1631032802011,
      inStock: true,
    },
    {
      _id: 't103',
      name: 'Paint Set',
      imgUrl: 'https://pl.nice-cdn.com/upload/image/product/large/default/toy-place-bear-100cm-1-st-819856-en.jpg',
      price: 45,
      labels: ['Art', 'Baby'],
      createdAt: 1631033803011,
      inStock: false,
    },
    {
      _id: 't104',
      name: 'Puzzle Master',
      imgUrl: 'https://pl.nice-cdn.com/upload/image/product/large/default/toy-place-bear-100cm-1-st-819856-en.jpg',
      price: 60,
      labels: ['Puzzle', 'Box game'],
      createdAt: 1631034804011,
      inStock: true,
    },
    {
      _id: 't105',
      name: 'Outdoor Explorer Kit',
      imgUrl: 'https://pl.nice-cdn.com/upload/image/product/large/default/toy-place-bear-100cm-1-st-819856-en.jpg',
      price: 99,
      labels: ['Outdoor', 'Box game'],
      createdAt: 1631035805011,
      inStock: true,
    },
    {
      _id: 't106',
      name: 'Building Blocks',
      imgUrl: 'https://pl.nice-cdn.com/upload/image/product/large/default/toy-place-bear-100cm-1-st-819856-en.jpg',
      price: 70,
      labels: ['Box game', 'Baby'],
      createdAt: 1631036806011,
      inStock: false,
    },
    {
      _id: 't107',
      name: 'Battery Robot',
      imgUrl: 'https://pl.nice-cdn.com/upload/image/product/large/default/toy-place-bear-100cm-1-st-819856-en.jpg',
      price: 150,
      labels: ['Battery Powered', 'On wheels'],
      createdAt: 1631037807011,
      inStock: true,
    },
    {
      _id: 't108',
      name: 'Sketch Board',
      imgUrl: 'https://pl.nice-cdn.com/upload/image/product/large/default/toy-place-bear-100cm-1-st-819856-en.jpg',
      price: 55,
      labels: ['Art'],
      createdAt: 1631038808011,
      inStock: true,
    },
    {
      _id: 't109',
      name: 'Stuffed Bear',
      imgUrl: 'https://pl.nice-cdn.com/upload/image/product/large/default/toy-place-bear-100cm-1-st-819856-en.jpg',
      price: 35,
      labels: ['Baby', 'Doll'],
      createdAt: 1631039809011,
      inStock: true,
    },
    {
      _id: 't110',
      name: 'Obstacle Racer',
      imgUrl: 'https://pl.nice-cdn.com/upload/image/product/large/default/toy-place-bear-100cm-1-st-819856-en.jpg',
      price: 120,
      labels: ['On wheels', 'Outdoor', 'Battery Powered'],
      createdAt: 1631040810011,
      inStock: false,
    }
  ]

  return toys
}

// ===========================================================================
// ============================ SYNCED FUNCTIONS =============================
// ===========================================================================


function getEmptyToy() { //TODO edit this
  return {
    name: '',
    imgUrl: 'https://pl.nice-cdn.com/upload/image/product/large/default/toy-place-bear-100cm-1-st-819856-en.jpg',
    price: 0,
    labels: ['Doll', 'Battery Powered', 'Baby'],
    createdAt: null,
    inStock: true,
  }
}

function getDefaultFilter() { //TODO edit this
  return {
    txt: '',
    filter1: '',
    filter2: ''
  }
}



