import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { Property } from "../../constants";

const PropertyCard = ({property}: {property: Property}) => {
    return (
        <div className="border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md tracking-shadow cursor-pointer hover:-translate-y-1 transition-all duration-300 tramsform">
            <img
            src={property.image}
            alt={property.title}
            className="w-full h-48 object-cover"
            />
            <div className="p-4">
                <h3 className="font-semibold text-lg mb-2">{property.title}</h3>
                <p className="text-xl font-bold text-purple-500 mb-2">{property.price}</p>
                <p className="text-sm text-gray-600">{property.beds} beds • {property.baths} baths</p>
            </div>
        </div>
    );
};
export default PropertyCard;