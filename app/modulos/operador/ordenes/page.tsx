'use client'
import { AiOutlineUser, AiFillEdit, AiFillSafetyCertificate } from 'react-icons/ai'
import Datepicker from 'react-tailwindcss-datepicker'
import dayjs from 'dayjs'
import { useEffect, useState } from 'react';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

export default function OrdenesHome() {
    const [purchaseOrders, setPurchaseOrders] = useState<IPurchaseOrderListDTO[]>([]);
    const [state, setState] = useState<boolean | any>([]);

    const toggleState = (index: number) => {
        let newState = new Array(purchaseOrders.length).fill(false);        
        newState[index] = !state[index];
        console.log("SET", newState);
        setState(newState);
    }

    async function getPurchaseOrders() {
        console.log("Working..");
        const res = await fetch(`/api/purchaseOrders`)
        res.json().then((data: IPurchaseOrderListDTO[] | any) => {
            console.log("DATA", data.purchaseOrders);
            setPurchaseOrders(data.purchaseOrders);
            setState(new Array(data.purchaseOrders.length).fill(false));
        });
    }

    useEffect(() => {
        getPurchaseOrders();
    }, []);


    let now = dayjs().subtract(18, 'year').startOf('month').toDate();
    let startDate = dayjs().year(1900).startOf('year').toDate();
    let endDate = dayjs().toDate();

    const [fechaNacimiento, setFechaNacimiento] = useState({
        startDate: null, endDate: null
    })

    const handleFechaNacimientoChange = (newValue: any) => {
        console.log("NewValue", newValue);
        setFechaNacimiento(newValue);
    }

    const guardar = () => {
        return true;
    }

    return (
        <div className="w-full p-6">
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <div className="flex items-center justify-between flex-column flex-wrap md:flex-row space-y-4 md:space-y-0 pb-4 bg-white dark:bg-gray-900">
                    <div>
                        <div id="dropdownAction" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                            <ul className="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownActionButton">
                                <li>
                                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Reward</a>
                                </li>
                                <li>
                                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Promote</a>
                                </li>
                                <li>
                                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Activate account</a>
                                </li>
                            </ul>
                            <div className="py-1">
                                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Delete User</a>
                            </div>
                        </div>
                    </div>
                    <label htmlFor="table-search" className="sr-only">Search</label>
                    <div className="relative">
                        <div className="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
                            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                            </svg>
                        </div>
                        <input type="text" id="table-search-users" className="block p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Codigo/Nombre" />
                    </div>
                </div>
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Descripción
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Fecha requerido
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Estado
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Acción
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {purchaseOrders && purchaseOrders.map((po, indice) => (
                            <>
                                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                    <th scope="row" className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                                        <div className="ps-3">
                                            <div className="text-base font-semibold">{po.identifier}</div>
                                            <div className="font-normal text-gray-500">{po.totalItems} unidades x {po.currency} ${po.totalAmount}</div>
                                        </div>
                                    </th>
                                    <td className="px-6 py-4">
                                        {po.requestDate}
                                    </td>
                                    <td className="px-6 py-4">
                                        {po.status == 0 ?
                                            <div className="flex items-center">
                                                <div className="h-2.5 w-2.5 rounded-full bg-orange-500 me-2"></div> Sin aprobación
                                            </div> :
                                            <div className="flex items-center">
                                                <div className="h-2.5 w-2.5 rounded-full bg-green-500 me-2"></div> Aprobado
                                            </div>}
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex font-medium text-blue-600">Revisar
                                            {state[indice] == false ? <IoIosArrowUp onClick={() => { toggleState(indice) }} className="mt-0.5 ml-1 cursor-pointer" size="1.2rem" />
                                                : <IoIosArrowDown onClick={() => { toggleState(indice) }} className="mt-0.5 ml-1 cursor-pointer" size="1.2rem" />}
                                        </div>
                                    </td>
                                </tr>
                                <tr className={`bg-white border-b block overflow-hidden ${state[indice] == false ? 'max-h-0' : 'max-h-72'} transition-all duration-500 ease`}>
                                    <td className="col-span-7">
                                        <div className="p-6">
                                            <table className="bg-slate-200 border-slate-500 rounded-lg text-lg border-4">
                                                <tr className="text-center bg-blue-600 text-white">
                                                    <th className="p-2 border-slate-500 border-2">n&deg;</th>
                                                    <th className="p-2 border-slate-500 border-2">Código</th>
                                                    <th className="p-2 border-slate-500 border-2">Descripción</th>
                                                    <th className="p-2 border-slate-500 border-2">Cantidad</th>
                                                    <th className="p-2 border-slate-500 border-2">Costo</th>
                                                </tr>
                                                {po.items.map(item => (
                                                    <tr>
                                                        <td className="p-2 border-slate-500 border-2">{item.lineNumber}</td>
                                                        <td className="p-2 border-slate-500 border-2">{item.identifier}</td>
                                                        <td className="p-2 border-slate-500 border-2">{item.productName}</td>
                                                        <td className="p-2 border-slate-500 border-2 text-center">{item.quantity} {item.unit}</td>
                                                        <td className="p-2 border-slate-500 border-2 text-right">{po.currency}$ {item.netAmount}</td>
                                                    </tr>                                                
                                                ))}
                                                <tr>
                                                    <td className="p-2 border-slate-500 border-2 col-span-4 text-right" colSpan={4}><b>TOTAL</b></td>
                                                    <td className="p-2 border-slate-500 border-2 text-right">${po.totalAmount}</td>
                                                </tr>
                                            </table>
                                        </div>
                                    </td>
                                </tr>
                            </>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}