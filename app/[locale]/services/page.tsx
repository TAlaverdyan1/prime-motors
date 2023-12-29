import { getTranslations } from "next-intl/server";
import { SITE_SUFFIX } from "../layout";
import { Services } from "../components/Services";

export async function generateMetadata() {
  const t = await getTranslations('services');

  return {
    title: (t('title')).toUpperCase() + SITE_SUFFIX,
  };
}


export default function ServicesPage() {
  return (
    <div className=" flex-col items-center justify-center text-center pt-20">
      <Services />
    </div>
  )
}
