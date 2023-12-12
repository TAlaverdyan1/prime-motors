import { Metadata } from "next";
import { AboutUs } from "@/components/AboutUs";

export const metadata: Metadata = {
    title: "About Us | Prime Motors",
};

export default function AboutUsPage() {
    return (
        <div className=" flex-col items-center justify-center text-center pt-20">
            <AboutUs />
        </div>
    )
}
