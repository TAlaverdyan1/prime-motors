import { Metadata } from "next";
import Head from "next/head";
import { AboutUs } from "@/components/AboutUs";
import { aboutUsSection } from "@/lib/_data";
import { AboutUsInfoSection } from "@/models/models";

export const metadata: Metadata = {
    title: "About Us | Prime Motors",
};

if (typeof window !== "undefined") {
    const storedLanguage = localStorage.getItem("primeMotors-Language") || "en";
    const languageData = aboutUsSection[storedLanguage as keyof AboutUsInfoSection];
    
    if (languageData) {
        metadata.title = languageData.title;
    }
}


export default function AboutUsPage() {
    return (
        <div className=" flex-col items-center justify-center text-center pt-20">
            <AboutUs />
        </div>
    )
}
