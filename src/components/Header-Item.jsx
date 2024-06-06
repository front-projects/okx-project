import { IoIosArrowDown } from "react-icons/io";


const HeaderItem = ({ children,arrowOff,className }) => {
    return <div className={`flex items-center font-['HarmonyOs_Sans_Regular'] px-[10px] gap-[4px] text-[14px] ${className}`}>
        <div>
            {children}
        </div>
        {!arrowOff && <div>
            <IoIosArrowDown />
        </div>}
    </div>
}

export default HeaderItem;