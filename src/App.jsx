import Header from "./components/Header";
import Landing from "./components/Landing";
import Footer from "./components/Footer";
import Menu from "./components/Menu";
import Divider from "./components/Divider";
import Centered from "./components/Centered";
import Cta from "./components/Cta";
import Partner from "./components/Partner";
import Awards from "./components/Awards";
import Kurs from "./components/Kurs";
import Spices from "./components/Spices";
import Dryaged from "./components/Dryaged";
import Slider from "./components/Slider";
import { useState } from "react";
import { ThemeContext } from "./context/theme-context";
import "./App.scss";

function App() {
    const [theme, setTheme] = useState("dark");
    return (
        <>
            <ThemeContext.Provider value={{ theme, setTheme }}>
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
