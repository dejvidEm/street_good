
 export default function MenuSection() {
    return (
        <section className="w-full mb-44">
            <h1 className="font-bold text-3xl sm:text-4xl text-gray-950 text-center pt-10">Naše Menu</h1>
            <h2 className="text-lg sm:text-xl text-center p-1 sm:p-3 mb-10">Každý si príde na to svoje..</h2>
            <div className="max-w-[1024px] mx-auto">
                <div className="text-lg menu-list w-[90%] mx-auto mb-10">
                    <h1 className="text-center mt-5 p-3 text-2xl font-bold">Naše Bowls</h1>
                    <div className="flex justify-between sm:text-base"><p>Berry Bowl</p><p className="font-bold">11,50 €</p></div>
                    <div className="flex justify-between sm:text-base"><p>Tropicana Bowl</p><p className="font-bold">11,50 €</p></div>
                    <div className="flex justify-between sm:text-base"><p>Dragon Bowl</p><p className="font-bold">11,50 €</p></div>
                    <div className="flex justify-between sm:text-base"><p>Acai Bowl</p><p className="font-bold">11,50 €</p></div>
                    <div className="flex justify-between sm:text-base"><p>Ocean Bowl</p><p className="font-bold">11,50 €</p></div>
                    <div className="flex justify-between sm:text-base"><p>Septembrový špeciál</p><p className="font-bold">11,50 €</p></div>
                </div>
                <div className="text-lg menu-list w-[90%] mx-auto mb-10">
                    <h1 className="text-center mt-6 p-3 text-2xl font-bold">Naše Smoothies</h1>
                    <div className="flex justify-between"><p>Dragon Smoothie</p><p className="font-bold">11,50 €</p></div>
                    <div className="flex justify-between"><p>Tropical Smoothie</p><p className="font-bold">11,50 €</p></div>
                    <div className="flex justify-between"><p>Matcha Smoothie</p><p className="font-bold">11,50 €</p></div>
                    <div className="flex justify-between"><p>Berry Smoothie</p><p className="font-bold">11,50 €</p></div>
                </div>
                <div className="text-lg menu-list w-[90%] mx-auto mb-10">
                    <h1 className="text-center mt-6 p-3 text-2xl font-bold">Naše Zdravé dobroty</h1>
                    <div className="flex justify-between"><p>Zeleninový Wrap</p><p className="font-bold">11,50 €</p></div>
                    <div className="flex justify-between"><p>Obložený Chlebík</p><p className="font-bold">11,50 €</p></div>
                    <div className="flex justify-between"><p>Avokádový Toast</p><p className="font-bold">11,50 €</p></div>
                    <div className="flex justify-between"><p>Berry Smoothie</p><p className="font-bold">11,50 €</p></div>
                </div>
            </div>
        </section>
    )
}