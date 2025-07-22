import { useContext, useEffect, useState } from "react";
import { LanguageContext } from "../context/LanguageContext";
import Intro from "../components/homepage/Intro";
import Services from "../components/homepage/Services";
import axios from "../axios";

export default function HomePage() {
    const { lang } = useContext(LanguageContext);
    const [introData, setIntroData] = useState(null);
    const [servicesData, setServicesData] = useState(null);

    useEffect(() => {
        const loadingData = async () => {
            try {
                const resIntro = await axios.get(`homepage_intro?lang=${lang}`);
                setIntroData(resIntro.data[0]);

                const resServices = await axios.get(`homepage_services?lang=${lang}`);
                setServicesData(resServices.data[0]);
            } catch (error) {
                console.log(error);
            }
        };

        loadingData();
    }, [lang]);

    return (
        <div className="HomePage">
            {introData && <Intro introData={introData} />}
            {servicesData && <Services servicesData={servicesData} />}
        </div>
    )
}