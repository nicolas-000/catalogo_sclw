import React from "react";
import { ImagenesEpp } from "./ImagenesEpp";


export function CarouselEpp({id_epp, imagenes}){
    return (
        <div id={"carouselEpp" + id_epp} className="carousel slide">
            <ImagenesEpp imagenes={imagenes}/>
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
