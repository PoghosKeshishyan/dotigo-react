import './Intro.css';

export default function Intro({ introData }) {
    return (
        <div className="intro">
            <div className="wrapper">
                <div className="row flex-center">
                    <div className="title">
                        <h1>{introData.title}</h1>
                        <p>{introData.descr}</p>
                    </div>

                    <div className="search">
                        <form>
                            <input type="search" placeholder={introData.placeholder} />
                            <input type="submit" value={introData.button} className="btn" />
                        </form>

                        <div className="top-level-domains flex-center">
                            <p>.com</p>
                            <div className="circle"></div>
                            <p>.co</p>
                            <div className="circle"></div>
                            <p>.net</p>
                            <div className="circle"></div>
                            <p>.store</p>
                        </div>
                    </div>
                </div>
            </div>

            <img src="images/home_page/intro-border-bottom.svg" alt="border-bottom" className="border-bottom" />
        </div>
    );
}