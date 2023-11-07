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
                <Route path='/soma-15-react/' element={<Inicio/>} />
                <Route path='/soma-15-react/QuadradoSoma' element={<QuadradoSoma />} />
            </Routes>
        </Router>
    )
}