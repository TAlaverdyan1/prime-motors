import { Blog } from "@/components/Blog";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Blog | Prime Motors",
};

export default function BlogPage() {
    return (
        <div className=" flex-col items-center justify-center text-center pt-20">
            <Blog />
        </div>
    )
}
