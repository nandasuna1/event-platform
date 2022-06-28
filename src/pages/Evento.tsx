import { Header } from "../components/Header";
import { Logo } from "../components/Logo";
import { SideBar } from "../components/Sidebar";
import { Video } from "../components/Video";

export function Evento() {
    return(
        <div className="flex flex-col min-h-screen">
            <Header/>
            <main className="flex flex-1">
                <Video/>
                <SideBar/>
            </main>
        </div>
    )
}