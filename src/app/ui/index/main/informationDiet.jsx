import React from 'react';
import bg from "../../../../../public/img/bg/features_bg.jpg"
import bgGora from "../../../../../public/img/bg/features_shape01.png"
import bgDol from "../../../../../public/img/bg/features_shape02.png"
import kolko from "../../../../../public/img/others/features_img.png"
import { FaAppleAlt, FaWineBottle, FaDumbbell } from "react-icons/fa";
import { TbRulerMeasure } from "react-icons/tb";
import Image from 'next/image';

const FeatureItem = ({ icon, title, description }) => (
    <div className="flex flex-col ml-4 mb-4 lg:mr-20 mt-20 lg:mt-0" >
        <div className="text-yellow-300 ml-4">{icon}</div>
        <strong className="text-2xl mt-2 ml-4 ">{title}</strong>
        <p className="max-w-[280px] mt-2 ml-4">{description}</p>
    </div>
);

const InformationDiet = () => {
    return (
        <div className="mt-20 relative w-full ">
            <Image className="w-full" src={bgGora} />
            <div className="relative flex justify-center">

                <Image className="w-full h-[1200px] xl:h-full " src={bg} />

                <div className="absolute top-1/2 left-[50%] transform -translate-y-1/2 lg:w-1/2 transition duration-500 ease-in-out sm:flex hidden">
                    <Image src={kolko} />
                </div>

                <div className="absolute top-1/2 left-1/3 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center text-white font-franklin-gothic-medium ">
                    <div className="flex flex-col lg:flex-row lg:mb-4  ">
                        <FeatureItem
                            icon={<FaAppleAlt size={40} />}
                            title="MULTI FRUITS FLAVOUR"
                            description="A thing added to something else in order to complete or enhance it."
                        />
                        <FeatureItem
                            icon={<FaWineBottle size={40} />}
                            title="FLOWER FORMULA"
                            description="A thing added to something else in order to complete or enhance it."
                        />
                    </div>
                    <div className="flex flex-col lg:flex-row">
                        <FeatureItem
                            icon={<FaDumbbell size={40} />}
                            title="FISHBONE DIAGRAM"
                            description="A thing added to something else in order to complete or enhance it."
                        />
                        <FeatureItem
                            icon={<TbRulerMeasure size={40} />}
                            title="100% FAT BLASTING"
                            description="A thing added to something else in order to complete or enhance it."
                        />
                    </div>
                </div>

            </div>
            <Image src={bgDol} />
        </div>
    );
};

export default InformationDiet;
