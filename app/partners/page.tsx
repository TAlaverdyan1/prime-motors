import { Metadata } from "next";
import { Partners } from "@/components/Partners";

export const metadata: Metadata = {
  title: "Partners | Prime Motors",
};


export default function PartnersPage() {
  return (
    <div className=" flex-col items-center justify-center text-center pt-20">
        <Partners />
    </div>
  )
}
