const HeaderIcon = ({ src,className }) =>{
    return <div className={`min-w-[20px] h-[20px] ${className}`}>
        <img src={src} alt="" className="w-full h-full"/>
    </div>
}

export default HeaderIcon;