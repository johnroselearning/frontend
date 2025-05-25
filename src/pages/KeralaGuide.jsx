import React from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import DestinationCard from "@/components/DestinationCard";
import { destinations, keralaDestinations, keralaExperiences  } from "../data/keralaData";

const KeralaGuide = () => {
  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold mb-6 text-center text-green-800">
        Discover Kerala: Food, Shopping & Attractions
      </h1>
      <ScrollArea className="h-[80vh]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {destinations.map((place) => (
            <DestinationCard key={place.name} place={place} />
          ))}
        </div>
      </ScrollArea>
       {/* <TopDestinations title="Top Backwater Destinations in Kerala" destinations={keralaDestinations} />
      <CulturalExperiences experiences={keralaExperiences} /> */}
    </div>
  );
};

export default KeralaGuide;
