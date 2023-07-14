import React from "react";
import { CarouselEpp } from "./CarouselEpp";


export function CardEpp({ epp }) {
    const { id_epp, nombre, marca, stock, id_cargo, descripcion } = epp;
    return (
        <div className="card border-primary mb-3" style={{ maxWidth: "540px" }}>
            <div className="row g-0">
                <div className="col-md-4">
                    <CarouselEpp id_epp={id_epp} />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h3 className="card-title">{nombre}</h3>
                        <h6 className="card-subtitle mb-2 text-body-secondary">{marca}</h6>
                        <p className="card-text">{descripcion}</p>
                        <p className="card-text"><small className="text-body-secondary">Stock: {stock}</small></p>
                    </div>
                </div>
            </div>
        </div>
    );
}
