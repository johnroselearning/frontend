import React from "react";
import PageLayout from "../components/PageLayout";
import TopDestinations from "../components/TopDestinations";
import CulturalExperiences from "../components/CulturalExperiences";

import { keralaDestinations, keralaExperiences } from "../data/keralaData";

export default function Kerala() {
  return (
    <PageLayout title="Kerala – God's Own Country">
      <TopDestinations title="Top Backwater Destinations in Kerala" destinations={keralaDestinations} />
      <CulturalExperiences experiences={keralaExperiences} />
    </PageLayout>
  );
}
