import { Metadata } from "next";
import { Services } from "@/components/Services";

export const metadata: Metadata = {
  title: "Services | Prime Motors",
};

export default function ServicesPage() {
  return (
    <div className=" flex-col items-center justify-center text-center pt-20">
      <Services />
    </div>
  )
}
