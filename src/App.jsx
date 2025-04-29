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
import { FlashMsg } from './cmps/reusabales/FlashMsg.jsx'


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
                        </Routes>
                    </main>

                    <FlashMsg />
                </section>

            </Router>
        </Provider>

    )
}


