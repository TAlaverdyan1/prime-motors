import { getTranslations } from "next-intl/server";
import { SITE_SUFFIX } from "../layout";
import { Blog } from "../components/Blog";

export async function generateMetadata() {
    const t = await getTranslations('blog');

    return {
        title: (t('title')).toUpperCase() + SITE_SUFFIX,
    };
}

export default function BlogPage() {
    return (
        <div className=" flex-col items-center justify-center text-center pt-20">
            <Blog />
        </div>
    )
}
