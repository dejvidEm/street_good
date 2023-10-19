
export default function Footer() {
    return (
        <footer className="w-full h-auto bg-blue-200">
            <div className="sm:max-w-[1424px] max-w-[300px] flex flex-row justify-between flex-wrap mx-auto">
                <div className=" my-4 sm:my-10 mx-auto">
                    <img src="/logo-main.png" alt="logo" />
                </div>
                <div className="flex flex-col gap-2 my-4 sm:my-10 mx-auto sm:items-start items-center">
                    <h2 className="font-bold text-lg pb-2 text-center">Otváracie hodiny</h2>
                    <p>Str - Ne <span className="font-bold ml-4 text-blue-950">9:00 - 17-00</span></p>
                    <p>Pon - Ut <span className="font-bold ml-4 text-red-950">Zatvorené</span></p>
                </div>
                <div className="flex flex-col gap-2 my-4 sm:my-10 mx-auto sm:items-start items-center">
                    <h2 className="font-bold text-lg pb-2 text-center">Doplňujúce informácie</h2>
                    <a href="/">Zoznam alergénov</a>
                    <a href="/">Často kladené otázky</a>
                    <a href="/">Kde nás nájdete</a>
                </div>
            </div>
        </footer>
    )
}