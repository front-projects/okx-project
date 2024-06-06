import { URLS } from "../util/URLS";

const SubHeader = () => {
    return <div className="w-full flex items-center justify-center shadow-[0_0_0_1px_rgba(0,0,0,.05)]">
        <div className="w-[1248px] flex items-center justify-between pt-[30px] pb-[15px] pl-[4px] pr-[52px]">
            <h1 className="text-[18px]">Compra Express</h1>
            <div className="flex items-center text-[14px]">
                <div className="min-w-[24px] h-[24px] flex items-center gap-2">
                    <img src={URLS.history} alt=""/>
                </div>
                <div>
                    Historial de órdenes
                </div>
            </div>
        </div>
    </div>
}

export default SubHeader;