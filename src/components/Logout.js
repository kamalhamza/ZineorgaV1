import React from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { Link} from "react-router-dom";

function Logout() {
    return (
        <>
        <div className='navbarlogin'>
        </div>
        <div className="auth-wrapper" style={{marginTop:-80,marginBottom:-50}}>
            <div className="auth-inner">
                <h1 style={{fontSize:32,color:'#18A4BC'}}>Déconnexion réussie.</h1>
                <p style={{fontSize:12}}> Vous vous êtes déconnecté(e) du Service .</p>
                <p style={{fontSize:12,marginTop:-12}}>Pour des raisons de sécurité, veuillez fermer votre navigateur,où vous rediriger vers la page de connexion.</p>
                <Link to={`/`}   class="btn btn-info btn-large  " role="button" aria-pressed="true" style={{marginTop:0}}>Page de connexion</Link>
            </div>
            </div>
            </>
    )
}

export default Logout
