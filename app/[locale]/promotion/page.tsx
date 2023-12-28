import { getTranslations } from "next-intl/server";
import { SITE_SUFFIX } from "../layout";
import { Promotion } from "../components/Promotion";


export async function generateMetadata() {
    const t = await getTranslations('promotion');

    return {
        title: t('title') + SITE_SUFFIX,
    };
}

export default function PromotionPage() {
    return (
        <div className=" flex flex-col items-center justify-center text-center pt-20">
            <Promotion />
        </div>
    )
}
