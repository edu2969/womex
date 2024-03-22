import Link from 'next/link';
import { AiOutlineInbox } from 'react-icons/ai'
import { TbAlertSquareRoundedFilled } from "react-icons/tb";
import { FaClipboardQuestion } from "react-icons/fa6";
import { LiaFileContractSolid } from "react-icons/lia";

export default function HomeOperador() {
    return (
        <div className="w-full columns-2 p-2 md:p-6 max-w-lg mx-auto mt-14 text-gray-400">
            <div className="relative">
            <Link href="/modulos/operador/contratos">
                <div className="relative w-full shadow-lg rounded-lg py-4 hover:scale-105 border-2 hover:border-blue-100 mb-4 text-center">
                    <div className="w-full inline-flex text-center text-slate-500 p-4 relative">
                        <LiaFileContractSolid className="mx-auto mb-1" size="6rem"/>                        
                    </div>
                    <span className="font-bold">Contratos</span>
                    <div className="absolute -ml-12 -mt-32 bg-blue-500 text-white text-sm px-2 py-0.5 rounded-full">
                        <span><b>6</b>x firmados</span>
                    </div>
                    <div className="absolute  -ml-12 -mt-24 bg-indigo-200 text-gray-500 text-sm px-2 py-0.5 rounded-full">
                        <span><b>2</b>x Borradores</span>
                    </div>
                </div>
            </Link>
            </div>
            <Link href="/modulos/operador/alertas">
                <div className="w-full shadow-lg rounded-lg py-4 hover:scale-105 border-2 hover:border-blue-100 mb-4 text-center">
                    <div className="w-full inline-flex text-center text-slate-500 p-4 relative">
                        <TbAlertSquareRoundedFilled className="mx-auto mb-1" size="6rem"/>
                        <div className="bg-orange-700 rounded-full w-8 h-8 text-white text-center pt-1 absolute left-1/2 translate-x-5">9+</div>
                    </div>
                    <span className="font-bold">Alertas</span>
                </div>
            </Link>
        </div>
        );

}