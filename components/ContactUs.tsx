"use client";
import { useState, useEffect } from "react";
import { contactUsSection } from "@/lib/_data";
import { ContactUsInfoSection, ContactUsSectionItem } from "@/models/models";

const ContactUs = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const [successMsg, setSuccessMsg] = useState<boolean>(false);
    const [errorMsg, setErrorMsg] = useState<boolean>(false);
    const [currentLanguage, setCurrentLanguage] = useState<string>('en');

    const currentContactUsSection = contactUsSection[currentLanguage as keyof ContactUsInfoSection];

    useEffect(() => {
        const storedLanguage = localStorage.getItem('primeMotors-Language');
        setCurrentLanguage(storedLanguage || 'en');
    }, []);

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        setLoading(true);

        try {
            const response = await fetch("https://formsubmit.co/e8f00972d6bd044b941ed4bd14737f49", {
                method: "POST",
                body: new FormData(e.target),
            });

            if (response.ok) {
                setTimeout(() => {
                    e.target.reset();
                    setLoading(false);
                    setSuccessMsg(true);
                }, 5000);
            } else {
                setErrorMsg(true);
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            setErrorMsg(true);
        }
    };


    return (
        <div className=" py-8 px-4 max-w-md w-full text-center md:px-6">
            <div className=" text-red font-bold text-[30px] uppercase text-center px-4 mb-5">{currentContactUsSection?.title}</div>

            {successMsg && (
                <div className="text-green-600">{currentContactUsSection?.content[0]?.successMsg}</div>
            )}
            {errorMsg && (
                <div className="text-red">{currentContactUsSection?.content[0]?.errorMsg}</div>
            )}

            <form onSubmit={handleSubmit} className=" flex flex-col gap-1">
                <div>
                    <input type="text" name="name" placeholder={currentContactUsSection?.content[0]?.name} className="mt-1 p-2 w-full border border-red rounded-md" required />
                </div>
                <div>
                    <input type="email" name="email" placeholder={currentContactUsSection?.content[0]?.email} className="mt-1 p-2 w-full border border-red rounded-md" required />
                </div>
                <div>
                    <textarea name="message" placeholder={`${currentContactUsSection?.content[0]?.message}...`} rows={10} className="mt-1 p-2 w-full border border-red rounded-md" />
                </div>
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="table" />

                {loading ? (
                    <div className="text-gray-600">{currentContactUsSection?.content[0]?.message_dispatch}</div>
                ) : (
                    <button
                        type="submit"
                        className="p-3 text-red font-bold border-2 border-red md:px-8 md:text-[20px]"
                    >
                        <span className=" hover:border-b-2 hover:border-b-red duration-300">{currentContactUsSection?.content[0]?.btn_text}</span>
                    </button>
                )}
            </form>
        </div>
    )
}

export { ContactUs };