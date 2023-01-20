import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        meduimDesktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tabletSmall: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <section className="skill" id="skills">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="skill-bx wow zoomIn">
                            <h2>Skills</h2>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br></br> Lorem Ipsum has been the industry's standard dummy text.</p>
                            <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">


                                <div size={12} sm={6} md={4}>

                                    <div class="outer">
                                        <div class="inner">
                                            <div id="number"> CSS
                                                85%
                                            </div>
                                        </div>
                                    </div>
                                    <span class="html-circle-skill">
                                        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
                                            <defs>
                                                <linearGradient id="GradientColor">
                                                    <stop offset="0%" stop-color="#e91e63" />
                                                    <stop offset="100%" stop-color="#673ab7" />
                                                </linearGradient>
                                            </defs>
                                            <circle className="cssC" id="html-circle" cx="80" cy="80" r="70" stroke-linecap="round" />
                                        </svg>
                                    </span>
                                </div>


                                <div size={12} sm={6} md={4}>

                                    <div class="skillsss">
                                        <div class="outer">
                                            <div class="inner">
                                                <div id="number"> REACT
                                                    60%
                                                </div>
                                            </div>
                                        </div>
                                        <span class="html-circle-skill">
                                            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
                                                <defs>
                                                    <linearGradient id="GradientColor">
                                                        <stop offset="0%" stop-color="#e91e63" />
                                                        <stop offset="100%" stop-color="#673ab7" />
                                                    </linearGradient>
                                                </defs>
                                                <circle className="reactC" id="html-circle" cx="80" cy="80" r="70" stroke-linecap="round" />
                                            </svg>
                                        </span>
                                    </div>
                                </div>

                                <div size={12} sm={6} md={4}>

                                    <div className="outer">
                                        <div className="inner">
                                            <div id="number"> HTML 85%
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <span className="html-circle-skill">
                                            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
                                                <defs>
                                                    <linearGradient id="GradientColor">
                                                        <stop offset="0%" stop-color="#e91e63" />
                                                        <stop offset="100%" stop-color="#673ab7" />
                                                    </linearGradient>
                                                </defs>
                                                <circle className="cssC" id="html-circle" cx="80" cy="80" r="70" stroke-linecap="round" />
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}