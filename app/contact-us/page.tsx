import { Metadata } from "next";
import { ContactUs } from "@/components/ContactUs";


export const metadata: Metadata = {
  title: "Contact Us | Prime Motors",
};

export default function ContactUsPage() {
  return (
    <div className=" flex items-center min-h-screen justify-center pt-20">
        <ContactUs />
    </div>
  )
}
