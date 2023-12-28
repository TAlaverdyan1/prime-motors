import { getTranslations } from "next-intl/server";
import { SITE_SUFFIX } from "../layout";
import { Branches } from "../components/Branches";

export async function generateMetadata() {
    const t = await getTranslations('branches');

    return {
        title: (t('title')).toUpperCase() + SITE_SUFFIX,
    };
}

export default function BranchesPage() {
    return (
        <div className=" flex-col items-center justify-center text-center pt-20">
            <Branches />
        </div>
    )
}
