import React, { Fragment } from "react";
import Epps from "./components/Epps";


export function App(){
    return (
        <Fragment>
            <br />
            <h1 className="text-center fw-bold">Catalogo de EPPs</h1>
            <br />
            <br />
            <div className="container">
                <Epps />
            </div>
        </Fragment>
    );
}
