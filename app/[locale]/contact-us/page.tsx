import { getTranslations } from "next-intl/server";
import { SITE_SUFFIX } from "../layout";
import { ContactUs } from "../components/ContactUs";


export async function generateMetadata() {
  const t = await getTranslations('contact-us');

  return {
    title: t('title') + SITE_SUFFIX,
  };
}

export default function ContactUsPage() {
  return (
    <div className=" flex items-center min-h-screen justify-center pt-20">
      <ContactUs />
    </div>
  )
}
