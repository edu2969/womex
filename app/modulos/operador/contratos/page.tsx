'use client'
import { useState } from "react"
import { FaRegEdit, FaSortAmountDownAlt, FaSortAmountUp } from "react-icons/fa"
import { FaAngleDown, FaAngleUp, FaFilter, FaFilterCircleXmark, FaSort, FaTruckMoving } from "react-icons/fa6"
import { numberWithDots } from "@/lib/formatters"
import { SlDocs } from "react-icons/sl"
import { TbClockDollar } from "react-icons/tb"
import { RiMoneyDollarCircleLine } from "react-icons/ri"
import dayjs from "dayjs"
import Link from "next/link"

export default function Contratos() {
    const [indexOpened, setIndexOpened] = useState(0)
    const [filter, setFilter] = useState(false)
    const [sort, setSort] = useState(false);
    const [nacionales, setNacionales] = useState(true);

    const handleExpand = (index: number) => {
        setIndexOpened(index == indexOpened ? 0 : index)
    }

    const toggleFilter = () => {
        if(sort == true && filter == false) setSort(false);
        setFilter(!filter);
    }

    const toggleSort = () => {
        if(sort == false && filter == true) setFilter(false);
        setSort(!sort);
    }

    const toggleNacionales = () => {
        setNacionales(!nacionales);
    }

    return (
        <div className="w-full">
            <div className={`absolute w-full p-4 h-${(!sort && !filter) ? '12' : (sort && !filter) ? '24' : '24'} overflow-hidden z-10 bg-white`}>
                <div className="flex">
                    <div className={`flex ${!filter ? 'bg-gray-300' : 'bg-gray-700'} text-white rounded-md px-2 cursor-pointer`} onClick={() => toggleFilter()}>
                        <FaFilter className="relative top-0.5" /><span>Filtro</span>
                    </div>
                    <div className={`flex ml-4 ${!sort ? 'bg-gray-300' : 'bg-gray-700'} text-white rounded-md px-2 cursor-pointer`} onClick={() => toggleSort()}>
                        <FaSort className="relative top-0.5" /><span>Orden</span>
                    </div>
                    <div className="flex ml-8">
                        <label className="relative inline-flex cursor-pointer items-center">
                            <input id="switch" type="checkbox" className="peer sr-only" onChange={toggleNacionales}/>
                            <label htmlFor="switch" className="hidden"></label>
                            <div className="peer h-6 w-11 rounded-full border bg-yellow-600 after:absolute after:left-[2px] after:top-0.5 after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-green-400 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:ring-green-300"></div>
                        </label>
                        <span className={`${nacionales ? 'bg-yellow-500' : 'bg-green-600'} px-2 rounded-xl -ml-[44px] pl-12 text-white`}>{nacionales ? 'N' : 'Intern'}acionales</span>
                    </div>
                </div>
                {filter && <div className="relative flex pt-4 text-gray-600 space-x-4">
                    <div className="relative border-2 rounded-md border-gray-300 focus:border-blue-600">
                        <select id="estado"
                            className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" ">
                            <option>Activo</option>
                            <option>Por firmar</option>
                            <option>Sin respuesta</option>
                            <option>Cerrados</option>
                        </select>
                        <label htmlFor="estado" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">
                            Estado</label>
                    </div>
                    <div className="relative border-2 rounded-md border-gray-300 focus:border-blue-600">
                        <input
                            type="number" id="numeroContrato"
                            className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                        <label htmlFor="cantidad" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">
                            N° contrato</label>
                    </div>
                    <div className="relative border-2 rounded-md border-gray-300 focus:border-blue-600">
                        <input
                            id="proveedor"
                            className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                        <label htmlFor="cantidad" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">
                            Proveedor</label>
                    </div>
                    <div className="flex pt-3 space-x-4">
                        <button type="submit"
                            className="flex w-full justify-center rounded-md bg-blue-600 px-5 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">
                            <FaFilter className="relative top-1 mr-1" /><span>Aplicar</span></button>
                        <button type="submit"
                            className="flex w-full justify-center rounded-md bg-orange-600 px-5 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600">
                            <FaFilterCircleXmark className="relative top-1 mr-1" /><span>Quitar</span></button>
                    </div>
                </div>}
                {sort && <div className="relative flex text-gray-600 space-x-4 pt-4">
                    <div className="flex bg-gray-400 rounded-lg px-4 py-0.5 text-white space-x-4 cursor-pointer">
                        <div>N° Contrato</div>
                        <FaSortAmountUp className="relative top-1" />
                    </div>
                    <div className="flex bg-gray-400 rounded-lg px-4 py-0.5 text-white space-x-4 cursor-pointer">
                        <div>ETA</div>
                        <FaSortAmountUp className="relative top-1" />
                    </div>
                    <div className="flex bg-gray-400 rounded-lg px-4 py-0.5 text-white space-x-4 cursor-pointer">
                        <div>Días libres</div>
                        <FaSortAmountDownAlt className="relative top-1" />
                    </div>
                    <div className="flex bg-gray-400 rounded-lg px-4 py-0.5 text-white space-x-4 cursor-pointer">
                        <div>Monto</div>
                        <FaSort className="relative top-1" />
                    </div>
                </div>}
            </div>
            <div className="overflow-x-hidden overflow-y-scroll scroll h-[642px] pb-4 pt-10 z-0">
                {CONTRATOS_DATA.map(c => <article key={`row_${c.numeroContrato}`}
                        className="overflow-hidden cursor-pointer hover:scale-[102%] h-30 w-[calc(100% - 2rem)] shadow-lg rounded-lg mt-4 mx-4 p-2 text-gray-600 space-x-4 bg-gradient-to-r from-slate-100 from-0% via-slate-200 via-70% to-gray-300 to-100%">
                        <div className="relative h-0">
                            <div className="relative bg-gradient-to-t from-gray-300 to-gray-50 rounded-lg rounded-tr-none rounded-bl-none w-fit px-2 font-bold -top-2 -left-2">
                                {c.empresa}
                            </div>
                        </div>
                        <div className="w-full overflow-hidden h-30">
                            <div className="relative flex w-full h-30">
                                <div className="pr-4 pt-6 w-[180px]">
                                    <div className="relative text-4xl ml-2 -top-1 dosis"><span className="text-sm dosis">n° </span><b>000000{c.numeroContrato}</b></div>
                                </div>
                                <div className="pr-4 w-[210px]">
                                    <div className="text-sm ml-2">{c.producto}</div>
                                    <div className="text-md text-gray-400 ml-2 -mt-1">{c.proveedor}</div>
                                    <div className="relative text-md ml-2 -top-1"><b>{c.toneladas}</b>x <span className="text-sm">USD $ </span><b>{c.precio}</b>/Tons.</div>
                                </div>
                                <div className="pr-4 w-[210px]">
                                    <div><span className="font-extrabold text-4xl">{numberWithDots(c.precio)}</span><span className="text-sm"> Tons.</span></div>
                                    <div className="text-lg"><span className="text-sm">ETA </span>{dayjs(c.eta).format("DD/MM/YYYY")}</div>
                                </div>
                                <div className="absolute right-40 top-5 text-left">
                                    <div className="z-10">
                                        <span className="text-sm">USD $ </span>
                                        <b><span className="text-4xl">{numberWithDots(c.precio * c.toneladas)}</span></b>
                                    </div>
                                </div>
                                <Link href={`/modulos/operador/contratos/${c.numeroContrato}`}>
                                    <div className="absolute right-20 top-5 hover:text-white">
                                        <FaRegEdit size="2rem" />
                                    </div>
                                </Link>
                                <div className="absolute right-6 top-5 hover:text-white" onClick={() => handleExpand(c.numeroContrato)}>
                                    {(c.numeroContrato == indexOpened) ? <FaAngleDown size="2rem" /> : <FaAngleUp size="2rem" />}
                                </div>
                            </div>
                            {c.numeroContrato == indexOpened && <div className={`flex transition-all duration-200 h-10`}>
                                <button type="submit"
                                    className="flex justify-center rounded-md bg-blue-600 px-5 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">
                                    <FaTruckMoving size="1.5rem" className="relative top-0 mr-2" /><span>Fletes</span></button>
                                <button type="submit"
                                    className="ml-4 flex justify-center rounded-md bg-blue-600 px-5 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">
                                    <SlDocs size="1.5rem" className="relative top-0 mr-2" /><span>Docs</span></button>
                                <button type="submit"
                                    className="ml-4 flex justify-center rounded-md bg-blue-600 px-5 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">
                                    <TbClockDollar size="1.5rem" className="relative top-0 mr-2" /><span>Almacén</span></button>
                                <button type="submit"
                                    className="ml-4 flex justify-center rounded-md bg-blue-600 px-5 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">
                                    <RiMoneyDollarCircleLine size="1.5rem" className="relative top-0 mr-2" /><span>Pagos</span></button>
                            </div>}
                        </div>
                    </article>)}
            </div>
        </div>
    )
}

const CONTRATOS_DATA = [{
    numeroContrato: 1,
    empresa: "sacyr",
    producto: "Arena silicia",
    proveedor: "Unimin Canada Ltd.",
    precio: 30,
    moneda: "USD",
    toneladas: 705,
    eta: new Date("2024-03-02T00:00:00"),
}, {
    numeroContrato: 2,
    empresa: "fosfoquim",
    producto: "Aceite Vegetal",
    proveedor: "Quimioder S.A.",
    precio: 27,
    moneda: "USD",
    toneladas: 333,
    eta: new Date("2024-03-02T00:00:00"),
}, {
    numeroContrato: 3,
    empresa: "sherwood",
    producto: "Aceite Vegetal",
    proveedor: "Trader-G",
    precio: 47,
    moneda: "USD",
    toneladas: 189,
    eta: new Date("2024-03-02T00:00:00"),
}, {
    numeroContrato: 4,
    empresa: "sacyr",
    producto: "Arena silicia",
    proveedor: "Unimin Canada Ltd.",
    precio: 70,
    moneda: "USD",
    toneladas: 56,
    eta: new Date("2024-03-02T00:00:00"),
}, {
    numeroContrato: 5,
    empresa: "sacyr",
    producto: "Arena silicia",
    proveedor: "Unimin Canada Ltd.",
    precio: 62,
    moneda: "USD",
    toneladas: 75,
    eta: new Date("2024-03-02T00:00:00"),
}, {
    numeroContrato: 6,
    empresa: "sacyr",
    producto: "Corrosor ET-10",
    proveedor: "Tommy Yard Ltd.",
    precio: 92,
    moneda: "USD",
    toneladas: 25,
    eta: new Date("2024-03-02T00:00:00"),
}, {
    numeroContrato: 7,
    empresa: "sacyr",
    producto: "Fibra Acero M4",
    proveedor: "Quimix S.A.",
    precio: 110,
    moneda: "USD",
    toneladas: 100,
    eta: new Date("2024-03-02T00:00:00"),
}]