

export default function Main() {
    return (
        <section id="uvod" className="w-full h-full sm:my-36 max-w-[90%] sm:max-w-[800px] mx-auto sm:ml-[5vw] md:ml-[40vw] relative pb-24">
            <h1 className="w-full font-semibold text-center sm:text-left text-xl sm:text-3xl text-pink-950 p-2 sm:p-5 sm:pt-0 pt-10 mb-6 sm:mb-4"><span className="text-2xl sm:text-4xl text-[#a5b33e] font-extrabold">Zdravé a chutné</span><br/>Základ pre život plný vitamínov</h1>
            <img src="/img-main2.svg" alt="main-img" className="hidden md:inline md:absolute md:-left-[90%] md:-top-48 mxl-20 sm:mx-0"/>
            <div className="flex flex-col gap-7 w-full">
                <div className="flex">
                    <img src="/icon3.png" alt="icon_health" className="sm:w-20 sm:h-20 w-16 h-16 my-auto"/>
                    <div className="my-auto pl-5 pr-3 sm:px-10">
                        <h2 className="font-bold text-sm sm:text-xl">Lorem Ipsum Dummy Header text</h2>
                        <p className="text-xs sm:text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro fuga ex aspernatur beatae suscipit accusantium veritatis</p>
                    </div>
                </div>
                <div className="flex">
                    <img src="/icon2.png" alt="icon_health" className="sm:w-20 sm:h-20 w-16 h-16 my-auto"/>
                    <div className="my-auto pl-5 pr-3 sm:px-10">
                        <h2 className="font-bold text-sm sm:text-xl">Lorem Ipsum Dummy Header text</h2>
                        <p className="text-xs sm:text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro fuga ex aspernatur beatae suscipit accusantium veritatis</p>
                    </div>
                </div>
                <div className="flex">
                    <img src="/icon1.png" alt="icon_health" className="sm:w-20 sm:h-20 w-16 h-16 my-auto"/>
                    <div className="my-auto pl-5 pr-3 sm:px-10">
                        <h2 className="font-bold text-sm sm:text-xl">Lorem Ipsum Dummy Header text</h2>
                        <p className="text-xs sm:text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro fuga ex aspernatur beatae suscipit accusantium veritatis</p>
                    </div>
                </div>
            </div>
        </section>
    )
}