import React from 'react'

function Home() {
    return (
        <div className='row justify-content-center'>
            <div id="carouselExampleFade" className="carousel slide carousel-fade col-md-9 mt-4" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://www.xtrafondos.com/wallpapers/rey-con-sable-de-luz-de-star-wars-el-ascenso-del-skywalker-4363.jpg" className="d-block w-100" alt="..."></img>
                    </div>
                    <div className="carousel-item">
                        <img src="https://www.xtrafondos.com/wallpapers/personajes-las-aventuras-de-mando-5264.jpg" className="d-block w-100" alt="..."></img>
                    </div>
                    <div className="carousel-item">
                        <img src="https://www.xtrafondos.com/wallpapers/baby-yoda-en-el-mandaloriano-4404.jpg" className="d-block w-100" alt="..."></img>
                    </div>
                    <div className="carousel-item">
                        <img src="https://www.xtrafondos.com/wallpapers/el-mandaloriano-temporada-2-5623.jpg" className="d-block w-100" alt="..."></img>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        </div>
    )
}

export default Home
