import { Metadata } from "next";
import { OurMission } from "@/components/OurMission";

export const metadata: Metadata = {
  title: "Our Mission and Vision | Prime Motors",
};

export default function OurMissionandVisionPage() {
  return (
    <div className=" flex-col items-center justify-center text-center pt-20">
        <OurMission />
    </div>
  )
}
