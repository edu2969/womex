export default function About() {
    return (
        <div className="w-screen h-screen flex justify-center items-center animate-entrance">
            <div className="flex">
                <img src="/brand.png"/>
                <span>v1.0</span>
            </div>
            <div className="ml-6">
                <p>Todos los derechos reservados.</p>
                <p>Contáctenos vía e-mail a <a href="#">contacto@womex.cl</a></p>
            </div>            
        </div>
    )
}