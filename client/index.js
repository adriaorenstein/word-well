import React from 'react';
import { createRoot } from 'react-dom/client';

import Home from './components/Home';
import Nav_Bar from './components/Nav_Bar';
import Generator_Home from './components/Generators/Generator_Home';
import Char_Generator from './components/Generators/Char_Generator';
import Form_Home from './components/Forms/Form_Home';
import Char_Form from './components/Forms/Char_Form';

import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './reducers';

class App extends React.Component {
    render() {
        return (
            <div className="nav-home">
                <BrowserRouter>
                    <Nav_Bar />
                    <Routes>

                        <Route path='/' element={<Home />}/>

                        <Route path='/form-home' element={<Form_Home />}>
                            <Route path='add-char-entry' element={<Char_Form />}/>
                        </Route>

                        <Route path='/generator-home' element={<Generator_Home />}>
                            <Route path='char-generator' element={<Char_Generator />}/>
                        </Route>
                    </Routes>
                </BrowserRouter>
            </div>
        )
    }
}

const root = createRoot(document.getElementById('app'));

root.render(
    <Provider store={store}>
        <App />
    </Provider>
);