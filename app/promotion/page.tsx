import { Metadata } from "next";
import { Promotion } from "@/components/Promotion";

export const metadata: Metadata = {
    title: "Promotion | Prime Motors",
};


export default function PromotionPage() {
    return (
        <div className=" flex flex-col items-center justify-center text-center pt-20">
            <Promotion />
        </div>
    )
}
