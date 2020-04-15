import React from 'react';
import './ContactComponnent.css'

export default class ContactComponnent extends React.Component {
    render(){
        return (
            <div className={"contacts"}>
                <ul>
                    <li> <i class="fa fa-whatsapp" aria-hidden="true"></i> <a href="https://wa.me/558195096505"> <code>(81)99509-6505</code> </a> </li>
                    <li> <i class="fa fa-phone" aria-hidden="true"></i> <a href="tel:08130121248"> <code>(81) 3012-1248</code> </a></li>
                    <li> <i class="fa fa-envelope" aria-hidden="true"></i> <a href="mailto:trenamentos@britoeassociados.com.br"> <code> trenamentos@britoeassociados.com.br</code></a></li>
                    <li> <i class="fa fa-linkedin" aria-hidden="true"> </i> <a href="https://www.linkedin.com/company/brito-associados/"> <code>linkedin.com/company/brito-associados</code></a></li>
                </ul>
            </div>
        );
    }
}