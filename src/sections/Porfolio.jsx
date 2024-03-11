import Flyers from "../components/Flyers";

function Portfolio() {
    return ( 
        <div>
            <div className="section-heading">Portfolio</div>
            <div className="portfolio-tabs">
                <a>all</a>
                <a>webapps</a>
                <a>mobileapps</a>
                <a>logos</a>
                <a>flyers</a>
            </div>
            <div className="all">
                <Flyers/>
            </div>

        </div>
     );
}

export default Portfolio;