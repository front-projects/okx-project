import { URLS } from "../util/URLS";
import Form from "./Form";

const Home = ({ onView }) => {
    return <section className="w-full flex items-center justify-center py-[84px]">
        <div className="w-[1248px] flex px-[104px] relative">
            <div className="px-[12px]">
                <h1 className="text-[64px] leading-[82px] pt-[50px] max-w-[90%] mb-[16px]">Comprar USDT en pocos pasos</h1>
                <p className="text-[24px] leading-[33px]">Bitcoin, Ethereum, Tether, Solana y más criptos populares</p>
            </div>
            <Form onView={onView} />
            <div className="absolute top-0 left-0 w-[214px] h-[214px]">
                <img src={URLS.homeBg} alt="" className="w-full h-full" />
            </div>
        </div>
        <img src={URLS.support} alt="" className="fixed bottom-4 right-4" />
    </section>
}

export default Home;