import { useEffect, useState } from "react";
import { ThemeProvider } from "./context/ThemeContext";
import ThemeButton from "./components/ThemeButton";
import Card from "./components/Card";



function App() {
  const [themeMode, setthemeMode] = useState();
  const lightTheme = () => {
    setthemeMode("light");
  };
  const  darkTheme = () => {
    setthemeMode("dark");
  };

  useEffect(()=>{
    document.querySelector("html").classList.remove("dark" , "light"); 
    document.querySelector("html").classList.add(themeMode); 
  },[themeMode]); 

  return (
    <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            {/* Theme Button */}
            <ThemeButton/>           
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card/> 
            {/* Theme Card */}</div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
