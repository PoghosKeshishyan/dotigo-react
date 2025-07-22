import { useContext, useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { LanguageContext } from "./context/LanguageContext";
import Header from "./components/header";
import HomePage from "./pages/HomePage";
import axios from "./axios";

export default function App() {
  const { lang } = useContext(LanguageContext);
  const [headerData, setHeaderData] = useState(null);

  useEffect(() => {
    const loadingData = async () => {
      const resLogo = await axios.get('logo');
      const resNavbar = await axios.get(`navbar?lang=${lang}`);
      const resLangs = await axios.get('languages');
      const resAccountBtns = await axios.get(`account_btns?lang=${lang}`);
      setHeaderData({ logo: resLogo.data, navbar: resNavbar.data, btns: resAccountBtns.data, langs: resLangs.data });
    };

    loadingData();
  }, [lang]);

  return (
    <div className="App">
      {headerData && <Header headerData={headerData} />}

      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  )
}