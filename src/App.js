import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { DISPLAY_LANG } from './config';
import Header from "./components/header";
import HomePage from "./pages/HomePage";
import Footer from "./components/footer";
import axios from "./axios";

export default function App() {
  const [headerData, setHeaderData] = useState(null);
  const [footerData, setFooterData] = useState(null);

  useEffect(() => {
    const loadingData = async () => {
      const resLogo = await axios.get('logo');
      const resNavbar = await axios.get(`navbar?lang=${DISPLAY_LANG}`);
      const resLangs = await axios.get('languages');
      const resAccountBtns = await axios.get(`account_btns?lang=${DISPLAY_LANG}`);
      setHeaderData({ logo: resLogo.data, navbar: resNavbar.data, btns: resAccountBtns.data, langs: resLangs.data });

      const resFooterLabel = await axios.get('footer_labels');
      const resFooterLinks = await axios.get(`footer_links?lang=${DISPLAY_LANG}`);
      setFooterData({ label: resFooterLabel.data, links: resFooterLinks.data });
    };

    loadingData();
  }, []);

  return (
    <div className={`App ${DISPLAY_LANG === 'am' ? 'am-font' : ''}`}>
      {headerData && <Header headerData={headerData} />}

      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>

      {footerData && <Footer footerData={footerData} />}
    </div>
  )
}