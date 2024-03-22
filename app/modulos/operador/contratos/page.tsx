'use client'
import { useState } from "react"
import { FaSortAmountDownAlt, FaSortAmountUp } from "react-icons/fa"
import { FaFilter, FaSort } from "react-icons/fa6"

export default function Contratos() {
    const [isChecked, setIsChecked] = useState(true)

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked)
        console.log("CHANGE", isChecked);
    }

    return (
        <div className="w-full p-2">
            <div className="shadow-lg rounded-lg p-4">
                <div className="flex">
                    <div className="flex bg-gray-300 text-white rounded-md px-2 cursor-pointer">
                        <FaFilter className="relative top-0.5" /><span>Filtro</span>
                    </div>
                    <div className="flex ml-4 bg-gray-300 text-white rounded-md px-2 cursor-pointer">
                        <FaSort className="relative top-0.5" /><span>Orden</span>
                    </div>
                    <div className="flex ml-8">
                        <label className="relative inline-flex cursor-pointer items-center">
                            <input id="switch" type="checkbox" className="peer sr-only" />
                            <label htmlFor="switch" className="hidden"></label>
                            <div className="peer h-6 w-11 rounded-full border bg-slate-200 after:absolute after:left-[2px] after:top-0.5 after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-slate-800 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:ring-green-300"></div>
                        </label>
                        <span className="bg-yellow-500 px-2 rounded-md -ml-5 pl-6 text-white">Nacionales</span>
                    </div>
                </div>
                <div className="relative flex shadow-lg rounded-lg p-4 text-gray-600">
                    <div>
                        <div>
                            <p>Estado</p>
                            <select>
                                <option>Pendiente firma</option>
                                <option>Firmado</option>
                                <option>Cerrado</option>
                                <option>Anulado</option>
                            </select>
                        </div>
                    </div>

                    <div>
                        <label className="relative">
                            <input type="text" className="px-4 py-2 text-lg outline-none border-2 border-gray-400 rounded hover:border-gray-600 duration-200 peer focus:border-indigo-600 bg-inherit"/>
                            <span className="absolute left-0 top-2 px-1 text-lg tracking-wide peer-focus:text-indigo-600 pointer-events-none duration-200 peer-focus:text-sm peer-focus:-translate-y-5 bg-gray-200 ml-2 peer-valid:text-sm peer-valid:-translate-y-5">Etiqueta</span>
                        </label>
                    </div>


                    <div>
                        <div>Producto: <input /></div>
                    </div>
                    <div>
                        <div>Proveedor: <input /></div>
                    </div>
                </div>
                <div className="flex">
                    <div className="flex">
                        <div>N° Contrato</div>
                        <FaSortAmountUp />
                    </div>
                    <div className="flex">
                        <div>ETA</div>
                        <FaSortAmountUp />
                    </div>
                    <div className="flex">
                        <div>Días libres</div>
                        <FaSortAmountDownAlt />
                    </div>
                    <div className="flex">
                        <div>Monto</div>
                        <FaSort />
                    </div>
                </div>
            </div>
            <article>
                <div>n° 0000001</div>
                <div>SACYR</div>
                <div>Arena Silicia</div>
                <div>Unimin Canada Ltd</div>
                <div>10 Tons.</div>
                <div>ETA: 18/04/2023</div>
                <div><span className="text-sm">USD </span>$2.790</div>
            </article>
        </div>
    )
}