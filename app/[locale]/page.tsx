import { Slider } from '@/app/[locale]/components/Slider';
import { InfoSection } from '@/app/[locale]/components/InfoSection';
import { ScrollTop } from '@/app/[locale]/components/ScrollTop';


export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center text-center">
      <Slider />
      <InfoSection />
      <ScrollTop />
    </div>
  )
}
