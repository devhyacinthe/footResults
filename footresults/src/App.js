import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Body from './pages/Body';
import PremierLeaguePage from './pages/PremierLeaguePage';
import BundesligaPage from './pages/BundesligaPage';
import EredivisiePage from './pages/EredivisiePage';
import LigaPage from './pages/LigaPage';
import Ligue1Page from './pages/Ligue1Page';
import LigaPortugalBwinPage from './pages/LigaPortugalBwinPage';
import SerieAPage from './pages/SerieAPage';


const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Body />}></Route>
                <Route path='/PremierLeague' element={<PremierLeaguePage />}></Route>
                <Route path='/Liga' element={<LigaPage />}></Route>
                <Route path='/Ligue1' element={<Ligue1Page />}></Route>
                <Route path="/Bundesliga" element={<BundesligaPage />}></Route>
                <Route path='/SerieA' element={<SerieAPage />}></Route>
                <Route path='/Eredivisie' element={<EredivisiePage />}></Route>
                <Route path='/LigaPortugalBwin' element={<LigaPortugalBwinPage />}></Route>
            </Routes>
        </BrowserRouter>

    );
};

export default App;
