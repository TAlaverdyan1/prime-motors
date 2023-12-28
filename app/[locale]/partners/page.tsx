import { getTranslations } from "next-intl/server";
import { SITE_SUFFIX } from "../layout";
import { Partners } from "../components/Partners";

export async function generateMetadata() {
  const t = await getTranslations('partners');

  return {
    title: t('title') + SITE_SUFFIX,
  };
}

export default function PartnersPage() {
  return (
    <div className=" flex-col items-center justify-center text-center pt-20">
      <Partners />
    </div>
  )
}
