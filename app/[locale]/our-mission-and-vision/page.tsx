import { getTranslations } from "next-intl/server";
import { SITE_SUFFIX } from "../layout";
import { OurMission } from "../components/OurMission";


export async function generateMetadata() {
  const t = await getTranslations('our-mision-and-vision');

  return {
    title: t('title') + SITE_SUFFIX,
  };
}


export default function OurMissionandVisionPage() {
  return (
    <div className=" flex-col items-center justify-center text-center pt-20">
      <OurMission />
    </div>
  )
}
