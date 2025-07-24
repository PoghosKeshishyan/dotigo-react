import { Link } from 'react-router-dom';
import './RegisterBanner.css';

export default function RegisterBanner({ registerBannerData }) {
    return (
        <div className="register-banner wrapper flex-between">
            <div className="content">
                <h2>{registerBannerData.title}</h2>
                <p>{registerBannerData.subtitle}</p>
            </div>
            
            <Link to={registerBannerData.btn_url} className="btn">
                {registerBannerData.btn_text}
            </Link>
        </div>
    );
}