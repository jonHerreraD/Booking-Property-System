import { useState } from "react"
import type { Property } from "../../constants";
import PropertyCard from "./PropertyCard";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Section = ({title, properties}: {title: string, properties: Property[]}) => {
    const [startIndex, setStartIndex] = useState(0);
    const [showCount, setShowCount] = useState(4);

    const itemsPerView = 4;
    const canGoNext = startIndex + itemsPerView < properties.length;
    const canGoPrev = startIndex > 0;

    const handleNext = () =>{
        if (canGoNext){
            setStartIndex(prev => prev + 1);
        }
    };

    const handlePrev = () => {
        if (canGoPrev){
            setStartIndex(prev => prev - 1);
        }
    };

    const handleShowMore = () => {
        setShowCount(prev => Math.min(prev + 4, properties.length));
    };

    const visiblePropertiesDesktop = properties.slice(startIndex, startIndex + itemsPerView);
    const visiblePropertiesMobile = properties.slice(0, showCount);

    return (
        <div className="w-full px-4 py-8 lg:px-8 lg:py-12">
            <div className="font-bold mb-6 text-2xl text-center lg:text-left lg:text-3xl">
                <h2>{title}</h2>
            </div>

            {/*Desktop view*/}
            <div className="hidden lg:block relative">
                <div className="flex gap-6 overflow-hidden">
                    {visiblePropertiesDesktop.map((property) => (
                        <div key={property.id} className="flex-shrink-0 w-[calc(25%-18px)]">
                            <PropertyCard property = {property}/>
                        </div>
                    ))}
                </div>
            

                {canGoPrev && (
                    <button
                        onClick={handlePrev}
                        className="absolute left-0 top-1/2 translate-y-1/2 -translate-x-4 bg-purple-300
                        border border-purple-300 rounded-full p-2 shadow-lg hover:bg-purple-600 tracking-colors text-white hover:cursor-pointer"
                        aria-label="Previous properties"
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </button>
                )}

                {canGoNext && (
                    <button
                        onClick={handleNext}
                        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-purple-300 
                        border border-purple-300 rounded-full p-2 shadow-lg hover:bg-purple-600 transition-colors text-white hover:cursor-pointer"
                        aria-label="Next properties"
                    >
                            <ChevronRight className="w-6 h-6" />
                    </button>
                )}
            </div>

            {/*Mobile view*/}
            <div className="lg:hidden">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {visiblePropertiesMobile.map((property) => (
                        <PropertyCard key={property.id} property={property} />
                    ))}
                </div>

                {showCount < properties.length && (
                    <div className="text-center mt-6">
                        <button
                            onClick={handleShowMore}
                            className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-800 transition-colors font-medium"
                        >
                            Show More
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};
export default Section;