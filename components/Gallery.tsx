
export default function Gallery() {
    return (
        <section id="kontakt" className="w-full pb-28">
            <h1 className="font-bold text-xl sm:text-4xl text-pink-950 text-center mt-10">Podeľ sa o zážitok z jedla</h1>
            <h2 className="text-md sm:text-xl text-center p-2 sm:p-3 mb-10">V našej kamennej prevádzke nájdeš Instax Fotoaparát, odfoť sa a fotku zaves na našu fotostenu!</h2>
            <div className="max-w-[1024px] h-auto flex flex-row flex-wrap mx-auto gap-5">
                <div className="flex flex-col mx-auto sm:mx-0 gap-5">
                    <div className="bg-gradient-to-r from-stone-200 to-stone-200 rounded-xl p-2 pb-8"><img src="galeria1.png" alt="/"/></div>
                    <div className="bg-gradient-to-r from-stone-200 to-stone-200 rounded-xl p-2 pb-8"><img src="galeria2.png" alt="/"/></div>
                </div>
                <div className="flex flex-col mx-auto sm:mx-0 gap-5">
                    <div className="bg-gradient-to-r from-stone-200 to-stone-200 rounded-xl p-2 pb-8"><img src="galeria2.png" alt="/"/></div>
                    <div className="bg-gradient-to-r from-stone-200 to-stone-200 rounded-xl p-2 pb-8"><img src="galeria1.png" alt="/"/></div>
                </div>
                <div className="flex flex-col mx-auto sm:mx-0 gap-5">
                    <div className="bg-gradient-to-r from-stone-200 to-stone-200 rounded-xl p-2 pb-8"><img src="galeria1.png" alt="/"/></div>
                    <div className="bg-gradient-to-r from-stone-200 to-stone-200 rounded-xl p-2 pb-8"><img src="galeria2.png" alt="/"/></div>
                </div>
            </div>
        </section>
    )
}