import React from "react";


export function ImagenesEpp({imagenes}) {
    return (
        <div className="carousel-inner">
            {imagenes.map((imagen, index) => {
            const { id_imagen, url_imagen } = imagen;
            <div className={'carousel-item ' + (index === 0) ? "active" : "" }>
               <img src={url_imagen} className="d-block w-100" alt={"Imagen " + id_imagen} />
            </div>
        })}
        </div>
    );
}