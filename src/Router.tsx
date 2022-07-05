import { Routes, Route } from "react-router-dom";
import { Evento } from "./pages/Evento";
import { Subscribe } from "./pages/Suscribe";

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<Subscribe />} />
            <Route path="/event" element={<Evento/>}></Route>
            <Route path="/event/lesson/:slug" element={<Evento/>}></Route>
        </Routes>
    )
} 