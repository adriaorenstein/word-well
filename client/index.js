import React from 'react';
import { createRoot } from 'react-dom/client';

import Home from './components/Home';
import Nav_Bar_Small from './components/Nav_Bar_Small';
import Nav_Bar_Home from './components/Nav_Bar_Home';
import Nav_Bar_Full from './components/Nav_Bar_Full';
import Generator_Home from './components/Generators/Generator_Home';
import Char_Generator from './components/Generators/Char_Generator';
import Form_Home from './components/Forms/Form_Home';
import Char_Form from './components/Forms/Char_Form';
import Games_Home from './components/Games/Games_Home';
import Char_a_Pillar from './components/Games/Char_a_Pillar';

import { Route, Routes, BrowserRouter, useLocation } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './reducers';

function App() {
    const location = useLocation();
    // const nav_bar = location.pathname === "/" ? <Nav_Bar_Home /> : <Nav_Bar_Small />;
    // const nav_bar = location.pathname === "/" ? <Nav_Bar_Home /> : <Nav_Bar_Full />;
    const nav_bar = <Nav_Bar_Home />
    
    return (
        <div className="full-page">
            {/* <Nav_Bar_Small /> */}
            <Routes>
                <Route path='/' element={<Home />}/>

                <Route path='/form-home' element={<Form_Home />}>
                    <Route path='add-char-entry' element={<Char_Form />}/>
                </Route>

                <Route path='/generator-home' element={<Generator_Home />}/>
                <Route path='/char-generator' element={<Char_Generator />}/>

                <Route path='/games-home' element={<Games_Home />}>
                    <Route path='char-a-pillar' element={<Char_a_Pillar />}/>
                </Route>
            </Routes>
            {nav_bar}
        </div>
    )
}

const root = createRoot(document.getElementById('app'));

root.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
);