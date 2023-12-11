import { InfoSection } from '@/components/InfoSection';
import { Slider } from '@/components/Slider';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center text-center">
      <Slider />
      <InfoSection />
    </div>
  )
}
