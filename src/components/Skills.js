import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
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
                        <p>The skills listed below pertain primarily to website development. If you would like to learn more about my experience and qualifications, please refer to my resume. Thank you for your consideration.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/New_Power_BI_Logo.svg/1200px-New_Power_BI_Logo.svg.png?20210102182532" alt="Power BI Logo" />
                                <h5>Power BI</h5>
                            </div>
                            <div className="item">
                                <img src="https://cdn.worldvectorlogo.com/logos/quickbooks-1.svg" alt="QuickBooks Logo" />
                                <h5>QuickBooks</h5>
                            </div>

                            <div className="item">
                                <img src="https://images.seeklogo.com/logo-png/34/1/sage-logo-png_seeklogo-342725.png?v=1957186798803271672" alt="Sage Logo" />
                                <h5>Sage</h5>
                            </div>

                            <div className="item">
                                <img src="https://images.g2crowd.com/uploads/product/image/large_detail/large_detail_606e614cda159a12a3c79e4ebaed94a5/acctivate-inventory-software.png" alt="Image" />
                                <h5>Acctivate</h5>
                            </div>

                            <div className="item">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg" alt="Image" />
                                <h5>Python</h5>
                            </div>

                            <div className="item">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg" alt="Image" />
                                <h5>HTML</h5>
                            </div>
                            <div className="item">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg" alt="Image" />
                                <h5>CSS</h5>
                            </div>
                            <div className="item">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="Image" />
                                <h5>Javascript</h5>
                            </div>
                            <div className="item">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" alt="Image" />
                                <h5>React</h5>
                            </div>
                            <div className="item">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg" alt="Image" />
                                <h5>Nextjs</h5>
                            </div>
                            {/* <div className="item">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg" alt="Image" />
                                <h5>nodejs</h5>
                            </div> */}
                            <div className="item">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original-wordmark.svg" alt="Image" />
                                <h5>Git</h5>
                            </div>
                            {/* <div className="item">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg" alt="Image" />
                                <h5>Npm</h5>
                            </div> */}
                            {/* <div className="item">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain-wordmark.svg" alt="Image" />
                                <h5>Bootstrap</h5>
                            </div>
                            <div className="item">
                                <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iNDgiIGhlaWdodD0iNDgiCnZpZXdCb3g9IjAgMCA0OCA0OCI+CjxwYXRoIGZpbGw9IiM1ZDQwMzciIGQ9Ik00MiwxNy4zQzQyLDM3LjgsMjQsNDQsMjQsNDRTNiwzNy44LDYsMTcuM2MwLTIuNSwwLjItNC42LDAuNC02LjNjMC4zLTIuNSwyLTQuNSw0LjQtNS4xIEMxMy45LDUsMTguOCw0LDI0LDRzMTAuMSwxLDEzLjMsMS45YzIuNCwwLjYsNC4xLDIuNyw0LjQsNS4xQzQxLjgsMTIuNyw0MiwxNC45LDQyLDE3LjN6Ij48L3BhdGg+PHBhdGggZmlsbD0iIzRjYWY1MCIgZD0iTTI0LDdjNC45LDAsOS41LDEsMTIuNSwxLjhjMS4yLDAuMywyLDEuMywyLjIsMi42YzAuMiwxLjksMC4zLDMuOSwwLjMsNS45YzAsMTUuNi0xMS41LDIxLjktMTUsMjMuNCBjLTMuNS0xLjYtMTUtNy45LTE1LTIzLjRjMC0yLDAuMS00LDAuMy01LjljMC4xLTEuMywxLTIuMywyLjItMi42QzE0LjUsOCwxOS4xLDcsMjQsNyBNMjQsNGMtNS4yLDAtMTAuMSwxLTEzLjMsMS45IEM4LjQsNi41LDYuNiw4LjYsNi40LDExQzYuMiwxMi43LDYsMTQuOSw2LDE3LjNDNiwzNy44LDI0LDQ0LDI0LDQ0czE4LTYuMiwxOC0yNi43YzAtMi41LTAuMi00LjYtMC40LTYuM2MtMC4zLTIuNS0yLTQuNS00LjQtNS4xIEMzNC4xLDUsMjkuMiw0LDI0LDRMMjQsNHoiPjwvcGF0aD48cGF0aCBmaWxsPSIjZGNlZGM4IiBkPSJNMjMgMjhIMjVWMzZIMjN6Ij48L3BhdGg+PHBhdGggZmlsbD0iIzRjYWY1MCIgZD0iTTI0LDEwYzAsMC02LDUtNiwxM2MwLDUuMiwzLjMsOC41LDUsMTBsMS0zbDEsM2MxLjctMS41LDUtNC44LDUtMTBDMzAsMTUsMjQsMTAsMjQsMTB6Ij48L3BhdGg+PHBhdGggZmlsbD0iIzgxYzc4NCIgZD0iTTI0LDEwYzAsMC02LDUtNiwxM2MwLDUuMiwzLjMsOC41LDUsMTBsMS0zVjEweiI+PC9wYXRoPgo8L3N2Zz4=" alt="Image" />
                                <h5>MongoDB</h5>
                            </div> */}
                            {/* <div className="item">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-plain-wordmark.svg" alt="Image" />
                                <h5>jQuery</h5>
                            </div>
                            <div className="item">
                                <img src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/96/null/external-redux-an-open-source-javascript-library-for-managing-application-state-logo-color-tal-revivo.png" alt="Image" />
                                <h5>Redux</h5>
                            </div> */}
                            {/* <div className="item">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg" alt="Image" />
                                <h5>Github</h5>
                            </div> */}
                          
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
