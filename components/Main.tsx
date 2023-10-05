import Image from "next/image";

export default function Main() {
    return (
        <section className="w-full h-full bg-gray-500 my-28 max-w-[90%] sm:max-w-[800px] mx-auto">
            <div className="flex flex-col gap-5">
                <div className="flex">
                    <img src="/icon3.png" alt="icon_health" className="sm:w-28 sm:h-28 w-20 h-20 my-auto"/>
                    <div className="my-auto px-3 sm:px-10">
                        <h2 className="font-bold text-md sm:text-2xl">Lorem Ipsum Dummy Header text</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro fuga ex aspernatur beatae suscipit accusantium veritatis voluptas temporibus accusamus quo.</p>
                    </div>
                </div>
                <div className="flex">
                    <img src="/icon2.png" alt="icon_health" className="sm:w-28 sm:h-28 w-20 h-20 my-auto"/>
                    <div className="my-auto px-3 sm:px-10">
                        <h2 className="font-bold text-md sm:text-2xl">Lorem Ipsum Dummy Header text</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro fuga ex aspernatur beatae suscipit accusantium veritatis voluptas temporibus accusamus quo.</p>
                    </div>
                </div>
                <div className="flex">
                    <img src="/icon1.png" alt="icon_health" className="sm:w-28 sm:h-28 w-20 h-20 my-auto"/>
                    <div className="my-auto px-3 sm:px-10">
                        <h2 className="font-bold text-md sm:text-2xl">Lorem Ipsum Dummy Header text</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro fuga ex aspernatur beatae suscipit accusantium veritatis voluptas temporibus accusamus quo.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}