import React ,  {Component } from 'react';
import {  Router , Route} from "react-router";

import { BrowserRouter , NavLink , Switch} from "react-router-dom";
import {Characters} from './Characters';
import {Formulario} from "./Form/Formulario";
import {FormularioSearch} from "./Form/FormularioSearch";
import Error404 from "./Errors/Error404";
import {SingleCharacter} from "./Pages/SingleCharacter";
export class Routes extends Component {
    render() {
        return(
        <BrowserRouter>
            <div>
            <ul className="menu">
                <li><NavLink  exact to={"/personajes"}>Chapters</NavLink> </li>
                <li><NavLink exact to={"/filter"}>Filter</NavLink> </li>
                <li><NavLink exact to={"/add"}>Filter</NavLink> </li>
            </ul>
            <Switch>
                <Route exact={["/" , "/personajes"]}   path={["/" , "/personajes"]} component={Characters}/>
                <Route path={"/character/:id"} component={SingleCharacter}/>
                <Route path={["/add" , "/personajes/add"]} component={Formulario}/>
                {/*<Route component={Error404}/>*/}
            </Switch>
            </div>
        </BrowserRouter>
        );}
}


