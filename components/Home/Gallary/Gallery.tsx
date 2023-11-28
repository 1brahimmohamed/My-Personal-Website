import React from "react";
import ArrowIcon from "../../Icons/ArrowIcon";
import ImageGallery from "react-image-gallery";

const images = [
    {
        original: "/gallery/esyp_alone.webp",
        thumbnail: "/gallery/thumbnails/esyp_alone.jpg",
        description: `IEEE ESYP 2022: after winning IEEE Regional Exemplary Student Branch Award as IEEE Cairo University SB Chairperson with
        (from left to right) 
        Dr Mohamed Saeed Darwish, IEEE YP Egypt Chair.
        Prof. Ahmed Hassan, IEEE Egypt Section Chairman.
        Dr Tamer El Batt, IEEE Egypt Section Vice Chair.
        `,
    },
    {
        original: "/gallery/saifur.webp",
        thumbnail: "/gallery/thumbnails/saifur.jpg",
        description: `With Prof. Saifur Rahman, IEEE 2022 President & CEO`,
    },
    {
        original: "/gallery/nasyp_madian.webp",
        thumbnail: "/gallery/thumbnails/nasyp_madian.jpg",
        description: "Closing Ceremony of IEEE R8 NASYP 2023: with Prof. Ahmed Madian, IEEE Egypt Section 2023 Chair-elect, IEEE CASS Egypt Chair",
    },
    {
        original: "/gallery/esyp_group.webp",
        thumbnail: "/gallery/thumbnails/esyp_group.jpg",
        description: "Closing Ceremony of IEEE ESYP 2022: with IEEE Egypt Section ExCom & AAST Professors after winning the local poster session competition",
    },
    {
        original: "/gallery/undergrad_math.webp",
        thumbnail: "/gallery/thumbnails/undergrad_math.jpg",
        description: `Undergraduate Engineering Mathematics Forum: Runners up with Dean of Engineering, Cairo University
         & Head of the Egyptian Engineers Syndicate and faculty professors`,
    },
    {
        original: "/gallery/nasyp_single.webp",
        thumbnail: "/gallery/thumbnails/nasyp_single.jpg",
        description: "Speech at IEEE R8 NASYP 2023 as the branding director of the congress",
    },
];

const Gallery = () => {
    return (
        <div
            id="GallerySection"
            className="flex flex-col space-y-7 w-100 h-100 items-center bg-AAprimary mb-10"
            style={{marginTop: "7rem"}}>

            <section className="flex flex-row items-center">
                <div className="flex flex-row items-center">
                    <ArrowIcon className={"flex-none h-4 md:h-6 w-4 md:w-5 text-AAsecondary"}/>
                    <span className="text-AAsecondary font-sans text-sm  sm:text-xl"> 06.</span>
                </div>

                <span className="text-gray-200 opacity-85 font-bold tracking-wider text-lg md:text-2xl px-3">
                    Special Moments
                </span>
                <div className="bg-gray-400 h-[0.2px] w-16 sm:w-44 md:w-80"></div>
            </section>

            <section className={"bg-AAtertiary w-full md:px-28 sm:px-2 text-amber-50 space-x-6 py-10"}>

                <div className={"flex justify-center"}>
                    <div className={"lg:w-1/2 sm: w-full"}>
                        <ImageGallery items={images} showPlayButton={false}/>
                    </div>
                </div>
            </section>


        </div>
    );
};

export default Gallery;
