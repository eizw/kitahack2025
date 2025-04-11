"use client";

import CampaignCard from "@/app/donor/campaignCard"; // adjust path as needed
import { useEffect, useState } from "react";

const loremIpsum =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt...";

// Dummy campaign data
let allCampaigns = [
  {
    id: "1",
    orgId: "1",
    name: "Masjid Al-Ikhsan",
    description: loremIpsum,
    goal: 4000,
    raised: 2000,
    balance: 564.0,
  },
  {
    id: "2",
    orgId: "1",
    name: "Flood Relief",
    description: loremIpsum,
    goal: 4000,
    raised: 200,
    balance: 564.0,
  },
  {
    id: "3",
    orgId: "1",
    name: "Masjid Al-Ikhsan",
    description: loremIpsum,
    goal: 4000,
    raised: 2000,
    balance: 564.0,
  },
];

export default function OrgLandingPage({
  params,
}: {
  params: { orgId: string };
}) {
  const { orgId } = params;
  const [campaigns, setCampaigns] = useState<any[]>([]);

  useEffect(() => {
    // Simulate fetching filtered campaigns
    const orgCampaigns = allCampaigns.filter(
      (campaign) => campaign.orgId === orgId
    );
    setCampaigns(orgCampaigns);
  }, [orgId]);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">Campaigns</h1>

      <div className="flex flex-col gap-4">
        {campaigns.length > 0 ? (
          campaigns.map((campaign) => (
            <CampaignCard key={campaign.id} campaign={campaign} />
          ))
        ) : (
          <p className="text-muted-foreground">No campaigns found.</p>
        )}
      </div>
    </div>
  );
}
