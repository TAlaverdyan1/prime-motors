import { Metadata } from "next";
import { Branches } from "@/components/Branches";

export const metadata: Metadata = {
    title: "Branches | Prime Motors",
};


export default function BranchesPage() {
    return (
        <div className=" flex-col items-center justify-center text-center pt-20">
            <Branches />
        </div>
    )
}
