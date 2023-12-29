import { getTranslations } from "next-intl/server";
import { SITE_SUFFIX } from "../layout";
import { AboutUs } from "../components/AboutUs";


export async function generateMetadata() {
    const t = await getTranslations('about-us');

    return {
        title: (t('title')).toUpperCase() + SITE_SUFFIX,
    };
}

export default function AboutUsPage() {

    return (
        <div className="flex-col items-center justify-center text-center pt-20">
            <AboutUs />
        </div>
    )
}
