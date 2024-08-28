import { Menu } from "./components/home/Menu";
import { StartGame } from "./components/home/StartGame";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div className="w-full flex">
                <Menu />

                <StartGame />
            </div>
        </main>
    );
}
