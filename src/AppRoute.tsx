import {
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom'

import Inicio from "./components/inicio"
import { QuadradoSoma } from "./components/quadrado-soma"

export default function AppRoutes(){
    return(
        <Router>
            <Routes>
                <Route path='/' element={<Inicio/>} />
                <Route path='/QuadradoSoma' element={<QuadradoSoma />} />
            </Routes>
        </Router>
    )
}