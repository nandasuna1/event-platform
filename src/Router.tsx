import { Routes, Route } from "react-router-dom";
import { Evento } from "./pages/Evento";
import { Subscribe } from "./pages/Suscribe";

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<Evento/>}/>
            <Route path="/event" element={<Evento/>}></Route>
            <Route path="/event/lesson/:slug" element={<Evento/>}></Route>
            <Route path="/subscribe" element={<Subscribe />} />

        </Routes>
    )
} 