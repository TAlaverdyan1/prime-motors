import { Slider } from '@/components/Slider';
import { InfoSection } from '@/components/InfoSection';
import { ScrollTop } from '@/components/ScrollTop';


export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center text-center">
      <Slider />
      <InfoSection />
      <ScrollTop />
    </div>
  )
}
