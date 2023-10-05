

export default function Main() {
    return (
        <section className="w-full h-full sm:my-36 max-w-[90%] sm:max-w-[800px] mx-auto sm:ml-[40vw] relative">
            <h1 className="font-bold text-3xl text-pink-950 p-5 mb-4">Zdravé a chutné: Základ pre život plný vitamínov</h1>
            <img src="/img-main2.svg" alt="main-img" className="sm:absolute sm:-left-[90%] sm:-top-48 mxl-20 sm:mx-0"/>
            <div className="flex flex-col gap-6">
                <div className="flex">
                    <img src="/icon3.png" alt="icon_health" className="sm:w-24 sm:h-24 w-16 h-16 my-auto"/>
                    <div className="my-auto pl-5 pr-3 sm:px-10">
                        <h2 className="font-bold text-md sm:text-xl">Lorem Ipsum Dummy Header text</h2>
                        <p className="text-sm sm:text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro fuga ex aspernatur beatae suscipit accusantium veritatis</p>
                    </div>
                </div>
                <div className="flex">
                    <img src="/icon2.png" alt="icon_health" className="sm:w-24 sm:h-24 w-16 h-16 my-auto"/>
                    <div className="my-auto pl-5 pr-3 sm:px-10">
                        <h2 className="font-bold text-md sm:text-xl">Lorem Ipsum Dummy Header text</h2>
                        <p className="text-sm sm:text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro fuga ex aspernatur beatae suscipit accusantium veritatis</p>
                    </div>
                </div>
                <div className="flex">
                    <img src="/icon1.png" alt="icon_health" className="sm:w-24 sm:h-24 w-16 h-16 my-auto"/>
                    <div className="my-auto pl-5 pr-3 sm:px-10">
                        <h2 className="font-bold text-md sm:text-xl">Lorem Ipsum Dummy Header text</h2>
                        <p className="text-sm sm:text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro fuga ex aspernatur beatae suscipit accusantium veritatis</p>
                    </div>
                </div>
            </div>
        </section>
    )
}