import Image from "next/image";
import React from "react";

const offers = [
    {
        id: 1,
        title: "Hasmukha Farnisaics at Hasmukha Farnisar Mall. Limited ti 20% off on all er Mall",
        desc: "Get 20% off on all electronics aics at Hasmukha Farnisar Mall. Limited ti 20% off on all eics at Hasmukha Farnisar Mall. Limited ti 20% off on all eics at Hasmukha Farnisar Mall. Limited ti 20% off on all e Hasmukha Farnisar Mall. Limited ti 20% off on all electronics at Hasmukha Farnisar Mall. Limited time offer!",
        valid: "30th June 2024",
        phone: "7046613120",
        img: "/image/of3.jpg",
    },
    {
        id: 2,
        title: "Hasmukha Farnisar ics at Hasmukha Farnisar Mall. Limited ti 20% off on all eMall",
        desc: "Get 20% off on all ics at Hasmukha Farnisar Mall. Limited ti 20% off on all eics at Hasmukha Farnisar Mall. Limited ti 20% off on all eics at Hasmukha Farnisar Mall. Limited ti 20% off on all e at Hasmukh 20% off on all electronics at Hasmukha Farnisar Mall. Limited tia Farnisar Mall. Limited time offer!",
        valid: "30th June 2024",
        phone: "7046613120",
        img: "/image/of2.jpg",
    },
    {
        id: 3,
        title: "Hasmukha Farnisar Malics at Hasmukha Farnisar Mall. Limited ti 20% off on all el",
        desc: "Get 20% off on all electronics at Hasmukha Farnisar Mall. Limited ti 20% off on all eics at Hasmukha Farnisar Mall. Limited ti 20% off on all eics at Hasmukha Farnisar Mall. Limited ti 20% off on all eics  20% off on all electronics at Hasmukha Farnisar Mall. Limited tiat Hasmukha Farnisar Mall. Limited time offer!",
        valid: "30th June 2024",
        phone: "7046613120",
        img: "/image/of1.jpg",
    },
    {
        id: 4,
        title: "Hasmukha Farnisics at Hasmukha Farnisar Mall. Limited ti 20% off on all ear Mall",
        desc: "Get 20% off on all electrics at Hasmukha Farnisar Mall. Limited ti 20% off on all eics at Hasmukha Farnisar Mall. Limited ti 20% off on all eonics at Has 20% off on all electronics at Hasmukha Farnisar Mall. Limited timukha Farnisar Mall. Limited time offer!",
        valid: "30th June 2024",
        phone: "7046613120",
        img: "/image/of4.jpg",
    },
    {
        id: 5,
        title: "Hasmukha Farnics at Hasmukha Farnisar Mall. Limited ti 20% off on all eisar Mall",
        desc: "Get 20% off on all electronics at H 20% off on all electronics at Hasmukha Farnisar Mall. Limited tiasmukha Farnisar Mall. Limited time offer!",
        valid: "30th June 2024",
        phone: "7046613120",
        img: "/image/of1.jpg",
    },
    {
        id: 6,
        title: "Hasmukha Farnisarukha Farnisar Mall",
        desc: "Get 20% off on all electronics at Hasmu 20% off on all elecasmukha Farnisar Mall. Limited ti 20% off on all electronics at Hasmukha Farnisar Mall. Limited tielectronics at Hasmukha Farnisar Mall. Limited tiha Farnisar Mall. Limited time offer!",
        valid: "30th June 2024",
        phone: "7046613120",
        img: "/image/of3.jpg",
    },
];

function OffersCard() {
    return (
   
             <div className="w-full overflow-hidden">  
            <div className="grid grid-flow-col auto-cols-[minmax(300px,50vw)]
                overflow-x-auto overflow-y-hidden no-scrollbar
                max-w-full gap-8 px-9 py-5">
                {offers.map((offer) => (
                    <div
                        key={offer.id}
                        className="grid grid-flow-col grid-rows-[1fr_0.5fr] gap-2 border rounded-lg overflow-hidden shadow-lg p-4 bg-[var(--color-bg-light)] hover:bg-[var(--color-border)]  transition-transform duration-300"
                    >
                        <div className="flex justify-center items-center bg-[var(--color-border)]  rounded-[10px]">
                            <Image
                                src={offer.img}
                                alt={offer.title}
                                width={1000}
                                height={1000}
                                className="w-full h-auto object-contain object-center rounded-[10px] "
                            />
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold mb-2 text-[var(--color-text)]  hover:text-[var(--color-primary)] hover:underline cursor-pointer line-clamp-2">
                                {offer.title}
                            </h3>

                            <p className="text-sm text-[var(--color-secondary)] line-clamp-5">{offer.desc}</p>

                            <time className="text-xs text-[var(--color-text-light)]">
                                Valid until: {offer.valid}
                            </time>

                            <div className="mt-3 flex items-center gap-2">
                                <a
                                    href={`tel:${offer.phone}`}
                                    aria-label={`Call ${offer.phone}`}
                                    className="inline-flex items-center px-3 py-1.5 bg-blue-600 text-white text-sm font-medium rounded hover:bg-blue-700 transition"
                                >
                                    Call: {offer.phone}
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            
        </div>
        </div>
    );
}

export default OffersCard;
