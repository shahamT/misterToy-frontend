//style
import './assets/style/main.scss'

import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'

//main cmps
import { AppHeader } from './cmps/AppHeader.jsx'

//pages
import { HomePage } from './pages/HomePage.jsx'
import { AboutUs } from './pages/AboutUs.jsx'

//services

import { store } from './store/store.js'
import { Provider } from 'react-redux'
import { ToyIndex } from './pages/ToyIndex.jsx'
import { ToyDetails } from './pages/ToyDetails.jsx'
import { ToyEdit } from './pages/ToyEdit.jsx'

// global cmps
import { FlashMsg } from './cmps/reusabales/FlashMsg/FlashMsg.jsx'
import { GlobalModal } from './cmps/reusabales/GlobalModal/GlobalModal.jsx'


export default function App() {

    // routes with no header:
    const noHeaders = ['/signup', '/login']


    return (
        <Provider store={store}>
            <Router>

                <section className="app">
                    <AppHeader />

                    <main className='main-content main-layout'>
                        <Routes>
                            <Route path="/" element={<Navigate to="/home" />} />
                            <Route path="/home" element={<HomePage />} />
                            <Route path="/about" element={<AboutUs />} />
                            {/* <Route path="/signup" element={<Signup />} />
                            <Route path="/login" element={<Login />} /> */}

                            <Route path="/toy" element={<ToyIndex />} />
                            <Route path="/toy/view/:toyId" element={<ToyDetails />} />
                            <Route path="/toy/edit/:toyId" element={<ToyEdit />} />
                        </Routes>
                    </main>

                    <FlashMsg />
                    <GlobalModal/>
                </section>

            </Router>
        </Provider>

    )
}


