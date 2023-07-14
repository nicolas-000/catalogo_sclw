import React from "react";


export function CarouselEpp({id_epp}){
    return (
        <div id={"carouselEpp" + id_epp} className="carousel slide">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="..." className="d-block w-100" alt={"Imagen 1 EPP " + id_epp} />
                </div>
                <div className="carousel-item">
                    <img src="..." className="d-block w-100" alt={"Imagen 2 EPP " + id_epp} />
                </div>
                <div className="carousel-item">
                    <img src="..." className="d-block w-100" alt={"Imagen 3 EPP " + id_epp} />
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target={"#carouselEpp" + id_epp} data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target={"#carouselEpp" + id_epp} data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
}
