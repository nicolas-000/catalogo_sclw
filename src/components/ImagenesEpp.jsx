import React from "react";


export const ImagenesEpp = ({ imagenes }) => (
    <div className = "carousel-inner">
        {imagenes.map((imagen, index) => {
            const { id_imagen, url_imagen } = imagen;
            return (
                <div className={(index === 0) ? "carousel-item active": "carousel-item"}>
                    <img src={url_imagen} className="d-block w-100" alt={"Imagen " + id_imagen}></img>

                </div>
            )
        })}
    </div>
);