const Footer = () => {
    return (
        <div className="container-fluid bg-dark text-white d-flex justify-content-center">
            <div className="row">
                <div className="col-8">
                    <h2 style={{fontSize:"25px"}}>Nuestros Locales</h2>
                    <ul className="lista" style={{fontSize:"15px", textDecoration:"none"}}>
                        <li >Recoleta: Av.Santa Fe 1234</li>
                        <li>Alamagro: Salguero 5687</li>
                        <li>Caballito: Av. La Plata 7895</li>
                        <li>Boedo: Av. Boedo 5632</li>
                    </ul>
                </div>
                <div className="col-4">
                    <h2 style={{fontSize:"25px"}}>Contacto</h2>
                    <ul  style={{fontSize:"15px"}}>
                        <li>Teléfono: 12345678</li>
                        <li>Mail: react@cafe.com</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
    
    
export default Footer;