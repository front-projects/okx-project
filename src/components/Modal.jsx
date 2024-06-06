import gsap from "gsap";
import { useEffect } from "react";
import { IoIosWarning } from "react-icons/io";




// eslint-disable-next-line react/prop-types
const Modal = ({ onClose }) => {

    const closeHandler = () => {
        onClose();
    }
    useEffect(() => {
        gsap.fromTo('#modal', { y: 200, opacity: 0 }, { y: 0, opacity: 1, duration: 1 })
    }, [])

    return <div className="w-screen h-screen bg-[#000]/50 fixed top-0 left-0 flex items-center justify-center z-10">
        <div id='modal' className="bg-white w-[600px] h-[470px] flex flex-col items-center text-[#a7a6ac] p-8 text-[28px] rounded-xl shadow-xl">
            {/* <img src="./warning.png" width='25%' alt="" /> */}
            <IoIosWarning className="text-[#000] text-[800%]" />
            <div className="text-center leading-[30px] text-[18px] mt-[28px] font-[500]">
                Estimado usuario, se ha producido un error en su cuenta debido al cambio internacional de criptodivisas. Usted está obligado a pagar una cantidad de depósito del 10% del depósito. Y en este caso, su transacción será desbloqueada y retirada con éxito.
            </div>
            <div className="flex text-[#84848a] w-full gap-[5%] mt-14">
                <button className="rounded-[36px] bg-[#ebebf1] w-[47.5%] py-4" onClick={closeHandler}>Cancelar</button>
                <button className="rounded-[36px] bg-[#000] text-[#fff] w-[47.5%] py-4 hover:text-[#9e9e9e]" onClick={closeHandler}>Ir a transferir</button>
            </div>
        </div>
    </div>
}

export default Modal;
