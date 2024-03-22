import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import HomeAdministrador from "./administrador/page";
import HomeOperador from "./operador/page";
import HomeOrdenes from "./ordenes/page";
import HomeGerencia from "./gerencia/page";

export default async function Modulos({ children }) {
    const session = await getServerSession(authOptions);
    return (
        <>
            {session.user?.role == 1 ?
                (<HomeAdministrador></HomeAdministrador>)
                : session.user?.role == 2 ?
                    (<HomeGerencia></HomeGerencia>)
                    : session.user?.role == 3 ?
                        (<HomeOrdenes></HomeOrdenes>)
                        : session.user?.rol == 4 ?
                            (<HomeOperador></HomeOperador>)
                            : (<HomeOperador></HomeOperador>)}
        </>
    );
}