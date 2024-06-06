import { URLS } from "../util/URLS";
import { useEffect, useRef, useState } from "react";
import axios from "axios";

const Form = ({ onView }) => {
    const [isFocused, setIsFocused] = useState(false);
    const [isFocused2, setIsFocused2] = useState(false);
    const [isFocused3, setIsFocused3] = useState(false);
    const [data, setData] = useState([]);
    const [activeCurrency, setActiveCurrency] = useState({});
    const [openChange, setOpenChange] = useState(false);
    const inputRef1 = useRef(null);
    const inputRef2 = useRef(null);

    useEffect(() => {
        const getData = async () => {
            const response = await axios.get('https://min-api.cryptocompare.com/data/price?fsym=USDT&tsyms=MXN,ARS,COP,USD,PEN')
            const dataFromBack = response.data;
            setActiveCurrency({
                name: "MXN",
                price: dataFromBack.MXN,
                image: URLS.mxn,
            },)
            setData([
                {
                    name: "MXN",
                    price: dataFromBack.MXN,
                    image: URLS.mxn,
                },
                {
                    name: "ARS",
                    price: dataFromBack.ARS,
                    image: URLS.ars,
                },
                {
                    name: "COP",
                    price: dataFromBack.COP,
                    image: URLS.cop,
                },
                {
                    name: "USD",
                    price: dataFromBack.USD,
                    image: URLS.usd,
                },
                {
                    name: "PEN",
                    price: 3.75,
                    image: URLS.pen,
                }
            ])
        }
        getData();

    }, []);

    useEffect(() => {
        inputHandler()
    }, [activeCurrency]);

    const submitForm = () => {
        onView();
    }

    const inputHandler = () => {
        if (parseInt(inputRef1.current.value) >= 0) {
            const result = parseInt(inputRef1.current.value) * activeCurrency.price;
            inputRef2.current.value = result.toFixed(2);
        }
    }
    const inputHandler2 = () => {
        if (parseInt(inputRef2.current.value) >= 0) {
            const result = parseInt(inputRef2.current.value) / activeCurrency.price;
            inputRef1.current.value = result.toFixed(4);
        }
    }
    const changeInput = (el) => {
        const result = parseInt(inputRef1.current.value) * activeCurrency.price;
        inputRef2.current.value = result.toFixed(2);
        setActiveCurrency(el)
    }
    // inputHandler();

    return <form className="min-w-[449px] shadow-[0_24px_64px_rgba(0,0,0,.06),0_2px_6px_rgba(0,0,0,.08)]  rounded-[16px] border-[1px] border-[#efefef]">
        <div className="flex items-center w-full text-[24px] rounded-t-[16px] bg-white">
            <h1 className="w-full text-center h-[70px] flex items-center justify-center shadow-r-xl">
                Comprar
            </h1>
            <h1 className="w-full text-center h-[70px] flex items-center justify-center rounded-bl-3xl rounded-tr-[16px] bg-[#F7F7F7] text-[#929292]">
                Vender
            </h1>
        </div>
        <div className="pt-[38px] px-[31px] pb-[42px] w-full">
            {/* FIRST INPUT */}

            <div className={`rounded-[12px] ${isFocused ? 'border-[1px] border-[#004cff] shadow-[0_0_0_3.5px_rgba(32,95,236,.25)]' : 'border-[1px] border-[#d8d8d8]'} py-[5px] px-[12px] flex items-center justify-between w-full`}>
                <div className="px-[8px] pt-[4px]">
                    <div className="text-[14px]">Pagarás</div>
                    <input placeholder="0,00" min={0} className="mb-[5px]" type="number" onFocus={() => setIsFocused(true)} onBlur={() => setIsFocused(false)} ref={inputRef1} onChange={inputHandler} />
                </div>
                <div className="bg-[#F7F7F7] py-[10px] px-[16px] rounded-[8px] flex items-center cursor-pointer h-[56px] min-w-[132.36px]">
                    <img src={URLS.usdt} alt="" className="w-[24px] h-[24px]" />
                    <h1 className="text-[18px] px-[8px]">USDT</h1>
                    <img src={URLS.dropDown} alt="" className="w-[10px] h-[6px]" />
                </div>
            </div>
            <h3 className="text-[14px] mt-[10px] pl-[18px]">
                1 USDT ≈ {activeCurrency.price} {activeCurrency.name}
            </h3>
            {/* SECOND INPUT */}
            <div className={`rounded-[12px] mt-[16px] ${isFocused2 ? 'border-[1px] border-[#004cff] shadow-[0_0_0_3.5px_rgba(32,95,236,.25)]' : 'border-[1px] border-[#d8d8d8]'} py-[5px] px-[12px] flex items-center justify-between w-full`}>
                <div className="px-[8px] pt-[4px]">
                    <div className="text-[14px]">Pagarás</div>
                    <input placeholder="0,00" className="mb-[5px]" type="number" onFocus={() => setIsFocused2(true)} onBlur={() => setIsFocused2(false)} ref={inputRef2} onChange={inputHandler2} />
                </div>
                <div className="relative bg-[#F7F7F7] py-[10px] px-[16px] rounded-[8px] flex items-center cursor-pointer h-[56px] min-w-[132.36px]" onClick={() => setOpenChange(!openChange)}>
                    <img src={activeCurrency.image} alt="" className="w-[24px] h-[24px] rounded-[50%]" />
                    <h1 className="text-[18px] px-[8px]">{activeCurrency.name}</h1>
                    <img src={URLS.dropDown} alt="" className="w-[10px] h-[6px]" />


                    {/* CURRENCY CHANGE */}

                    {openChange && <div className="absolute top-[120%] right-0 bg-white flex flex-col shadow-xl pt-6 rounded-md w-[234px] h-[276px]">{data.map(el => {
                        return <div key={el.name} className="flex gap-4 p-3 hover:bg-[#f9f9f9]" onClick={() => {
                            changeInput(el)
                        }}>
                            <img src={el.image} alt="" className="w-[24px] h-[24px]" />
                            <div className="text-[14px] text-[#3d3d3d]">{el.name}</div>
                        </div>
                    })}</div>}
                </div>

            </div>
            <h3 className="text-[14px] mt-[10px] pl-[18px]">
                52-362.950 {activeCurrency.name}
            </h3>

            {/* ThIRD INPUT */}
            <div className={`rounded-[12px] mt-[16px] ${isFocused3 ? 'border-[1px] border-[#004cff] shadow-[0_0_0_3.5px_rgba(32,95,236,.25)]' : 'border-[1px] border-[#d8d8d8]'} py-[5px] px-[12px] flex items-center justify-between w-full`}>
                <div className="px-[8px] pt-[4px]">
                    <div className="text-[14px]">Número de cuenta</div>
                    <input maxLength={16} placeholder="Número de cuenta" className="mb-[5px]" type="text" onFocus={() => setIsFocused3(true)} onBlur={() => setIsFocused3(false)} />
                </div>

            </div>
            <button className="w-full text-[18px] bg-main text-white py-[18px] rounded-[36px] mt-[46px] hover:text-[#9e9e9e]" type="button" onClick={submitForm}>
                <h1>Comprar USDT</h1>
            </button>

        </div>

    </form>
}

export default Form;