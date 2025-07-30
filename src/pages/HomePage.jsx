import { useEffect, useState } from "react";
import { DISPLAY_LANG } from '../config';
import Intro from '../components/homepage/Intro/';
import Services from "../components/homepage/Services/";
import Map from "../components/homepage/Map/";
import HostingPlans from "../components/homepage/HostingPlans/";
import QuestionList from "../components/homepage/QuestionList";
import RegisterBanner from "../components/homepage/RegisterBanner";
import axios from "../axios";

export default function HomePage() {
    const [introData, setIntroData] = useState(null);
    const [servicesData, setServicesData] = useState(null);
    const [mapData, setMapData] = useState(null);
    const [hostingData, setHostingData] = useState(null);
    const [questionData, setQuestionData] = useState(null);
    const [registerBannerData, setRegisterBannerData] = useState(null);

    const [billingType, setBillingType] = useState("/month");

    useEffect(() => {
        const loadingData = async () => {
            try {
                const resIntro = await axios.get(`homepage_intro?lang=${DISPLAY_LANG}`);
                const resTopLevelDomains = await axios.get('top_level_domains');
                setIntroData({ topLevelDomains: resTopLevelDomains.data, intro: resIntro.data[0] });

                const resServices = await axios.get(`homepage_services?lang=${DISPLAY_LANG}`);
                setServicesData(resServices.data[0]);

                const resMap = await axios.get(`homepage_map?lang=${DISPLAY_LANG}`);
                setMapData(resMap.data[0]);

                const resQuestionHeading = await axios.get(`question_list_heading?lang=${DISPLAY_LANG}`);
                const resQuestion = await axios.get(`question_list?lang=${DISPLAY_LANG}`);
                setQuestionData({ heading: resQuestionHeading.data[0], data: resQuestion.data });

                const resRegisterBanner = await axios.get(`homepage_register_banner?lang=${DISPLAY_LANG}`);
                setRegisterBannerData(resRegisterBanner.data[0]);
            } catch (error) {
                console.log(error);
            }
        };

        loadingData();
    }, []);

    useEffect(() => {
        const loadingData = async () => {
            try {
                const resHostingHeading = await axios.get(`homepage_hosting_plans_heading?lang=${DISPLAY_LANG}`);
                const resHostingPlans = await axios.get(`hosting_plans?lang=${DISPLAY_LANG}&billing=${billingType}`);
                setHostingData({ heading: resHostingHeading.data[0], plans: resHostingPlans.data });
            } catch (error) {
                console.log(error);
            }
        };

        loadingData();
    }, [billingType]);

    return (
        <div className="HomePage">
            {introData && <Intro introData={introData} />}
            {servicesData && <Services servicesData={servicesData} />}
            {mapData && <Map mapData={mapData} />}
            {hostingData && <HostingPlans hostingData={hostingData} billingType={billingType} setBillingType={setBillingType} />}
            {questionData && <QuestionList questionData={questionData} />}
            {registerBannerData && <RegisterBanner registerBannerData={registerBannerData} />}
        </div>
    )
}