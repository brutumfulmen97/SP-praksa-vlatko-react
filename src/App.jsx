import {
    Header,
    Landing,
    Footer,
    Menu,
    Divider,
    Centered,
    Cta,
    Partner,
    Awards,
    Kurs,
    Spices,
    Dryaged,
    Slider,
    Popup,
} from "./components";

import { useState } from "react";
import { ThemeContext } from "./context/theme-context";
import "./App.scss";

function App() {
    const [theme, setTheme] = useState("dark");

    return (
        <>
            <ThemeContext.Provider value={{ theme, setTheme }}>
                <Popup />
                <Header />
                <main className={`theme-${theme}`}>
                    <Landing />
                    <Dryaged />
                    <Kurs />
                    <Centered />
                    <Divider />
                    <Menu />
                    <Spices />
                    <Cta />
                    <Partner />
                    <Divider />
                    <Awards />
                    <Divider />
                    <Slider />
                </main>
                <Footer />
            </ThemeContext.Provider>
        </>
    );
}

export default App;
