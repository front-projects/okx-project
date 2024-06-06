import { URLS } from "../util/URLS";
import HeaderItem from "./Header-Item";
import { CiSearch } from "react-icons/ci";
import HeaderIcon from "./Header-Icon";




const Header = () => {
    return <header className="h-[48px] bg-header text-headerText flex items-center justify-between px-[24px] max-w-screen">
        {/* Left part */}
        <div className="flex items-center">
            {/* logo */}
            <div className="min-w-[82px] h-[36px]">
                <img src={URLS.logo} alt="" className="w-full h-full" />
            </div>
            {/* Switcher */}
            <div className="flex font-['HarmonyOs_Sans_Regular'] items-center text-[12px] rounded-[4px]  ml-[25px] border-[1px] border-[hsla(0,0%,100%,.25)]">
                <div className="py-[4px] px-[12px] bg-white text-main rounded-[3px] shadow-[0_4px_4px_rgba(0,0,0,.1)]">
                    Exchange
                </div>
                <div className="py-[4px] px-[12px] bg-[hsla(0,0%,100%,.15)]  rounded-[3px]">
                    Wallet
                </div>
            </div>
            {/* Line vertical */}
            <div className="border-r-[1px] h-[16px] ml-[20px] mr-[10px] border-gray/30">
            </div>

            {/* Navigation */}

            <nav className="flex text-[14px] max-lg:hidden">
                <HeaderItem>
                    Comprar criptos
                </HeaderItem>
                <HeaderItem>
                    Descubre
                </HeaderItem>
                <HeaderItem>Trade</HeaderItem>
                <HeaderItem>Earn</HeaderItem>
                <HeaderItem>Crear</HeaderItem>
                <HeaderItem>Institucional</HeaderItem>
                <HeaderItem arrowOff className='max-[1280px]:hidden'>Academia</HeaderItem>
                <HeaderItem>Más</HeaderItem>
            </nav>

        </div>


        {/* Right Part */}
        <div className="flex items-center">
            <div className="max-[1630px]:hidden mr-[10px] w-[210px] gap-1 bg-[hsla(0,0%,100%,.06)] flex items-center text-[12px] py-[7px] px-[8px] font-['HarmonyOs_Sans_Regular'] rounded-[4px] text-[#909090]/90">
                <CiSearch className="text-[16px]" />
                <p>
                    Buscar criptos, productos
                </p>
            </div>
            <CiSearch className="text-[16px] 2xl:hidden" />
            <HeaderItem>
                Activos
            </HeaderItem>
            <HeaderIcon src={URLS.user} className='ml-[20px]' />
            <div className="border-r-[1px] h-[16px] mx-[20px] border-gray/30">
            </div>
            <img src={URLS.burger} alt="" className="xl:hidden" />
            <div className="flex max-xl:hidden">
                <HeaderIcon src={URLS.downolad} className='mr-[10px]'></HeaderIcon>
                <HeaderIcon src={URLS.notice} className='mx-[10px]'></HeaderIcon>
                <HeaderIcon src={URLS.question} className='mx-[10px]'></HeaderIcon>
                <HeaderIcon src={URLS.language} className='ml-[10px]'></HeaderIcon>
            </div>

        </div>


    </header>
}

export default Header;