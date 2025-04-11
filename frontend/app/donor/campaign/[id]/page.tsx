"use client";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import RecentDonors from "./recentDonors";
import Updates from "./updatesCampaign";
import Link from "next/link";

// Static campaign list for demo purposes
const campaignList = [
  {
    id: "1",
    name: "Masjid Al-Ikhsan",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    goal: 4000,
    raised: 2000,
  },
  {
    id: "2",
    name: "Flood Relief",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    goal: 4000,
    raised: 200,
  },
  {
    id: "3",
    name: "Masjid Al-Ikhsan",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    goal: 4000,
    raised: 2000,
  },
];

interface CampaignDetailsProps {
  params: { id: string };
}

export default function CampaignDetails({ params }: CampaignDetailsProps) {
  const router = useRouter();

  const goBack = () => {
    router.back();
  };

  // Find the campaign based on the id from params
  const campaign = campaignList.find((campaign) => campaign.id === params.id);

  // If no campaign is found, handle the "not found" case
  if (!campaign) {
    return <div>Campaign not found</div>;
  }

  return (
    <>
      {/* Back Button */}
      <Button
        onClick={goBack}
        className="absolute top-6 left-6 z-10 text-white py-2 px-4 rounded-md shadow-md"
      >
        Back
      </Button>

      {/* Content wrapper with padding to prevent overlap */}
      <div className="pt-16">
        <Card className="gap-3 cursor-pointer transition-all shadow-none border-none outline-none ring-0">
          <CardHeader>
            <div className="w-full h-32 border-1 border-black rounded-lg flex items-center justify-center">
              Image
            </div>
          </CardHeader>
          <CardContent>
            <CardTitle className="text-lg">{campaign.name}</CardTitle>
            <CardDescription className="mb-3 h-10 overflow-hidden">
              {campaign.description}
            </CardDescription>
            <Progress
              className="h-4"
              value={Math.min((campaign.raised / campaign.goal) * 100, 100)}
            />
          </CardContent>
          <CardFooter>
            <div className="flex w-full">
              <p className="font-semibold flex mb-auto">
                RM{campaign.raised} of RM{campaign.goal}
              </p>
            </div>
          </CardFooter>
        </Card>

        <RecentDonors campaignId={campaign.id} />
        <Updates campaignId={campaign.id} />

        {/* Fixed Donate Button */}
        <Link href={`/donor/campaign/${campaign.id}/payment`}>
          <Button className="fixed bottom-6 left-6 right-6 w-auto text-white py-4 px-6 text-center font-semibold shadow-md">
            Donate Now
          </Button>
        </Link>
      </div>
    </>
  );
}
