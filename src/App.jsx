import Navbar from "./components/Navbar";
import PriceCard from "./components/PriceCard";
import Toggle from "./components/Toggle";
import { ChevronRight } from 'lucide-react';
import FAQ from "./layout/FAQ";

export default function App() {
  return (
    <>
      <Navbar />

      <main>
        <div className="px-4 flex flex-col items-center mt-12">
          <h2 className="text-grey-custom font-amerigo text-2xl w-full mb-12">Plans & Pricing</h2>
          <Toggle />
        </div>

        <div className="h-[2420px] flex flex-col justify-between">
          <PriceCard category='Starter' />
          <PriceCard category='Professional' />
          <PriceCard category='Business' />
        </div>

        <div className="px-8 mt-32 font-proximanova text-grey-custom">
          <h3 className="text-center font-amerigo text-grey-custom text-2xl ">Super charge your work with add-ons</h3>
          
          <div className="mb-16 mt-20 px-4">
            <p className="text-2xl font-bold mb-4">Free</p>
            <div className="leading-5">
              <h4 className="font-bold">Collaborators</h4>
              <p className="text-lgrey-custom">Invite other users to specific projects for limited access and functionality.</p>
            </div>
          </div>
          
          <div className="px-4 mb-16">
            <p className="text-4xl font-bold mb-4 flex flex-col">$9<span className="text-sm font-normal uppercase mt-1 tracking-wider">/month</span></p>
            <div className="leading-5">
              <h4 className="font-bold">Partners</h4>
              <p className="text-lgrey-custom">Invite other users for full account access and company management.</p>
            </div>
          </div>
          
          <div className="px-4">
            <p className="text-4xl font-bold mb-4 flex flex-col">$10<span className="text-sm font-normal uppercase mt-1 tracking-wider">/month</span></p>
            <div className="leading-5">
              <h4 className="font-bold">Bonsai Tax</h4>
              <p className="text-lgrey-custom">Track expenses, identify write-offs, and estimate quarterly taxes easily.</p>
              <a href="#" className="uppercase text-mint-custom tracking-wide font-bold text-sm flex pt-2">Learn more<ChevronRight className="h-4.5" /></a>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center mt-42">
          <h4 className="text-center font-amerigo text-4xl w-52 text-grey-custom leading-12 mb-4">It&apos;s <span className="text-mint-custom">your</span> business. We&apos;re here to help it grow.</h4>
          <button type="button" className="bg-mint-custom py-3 px-5 rounded-sm text-white uppercase font-proximanova font-semibold tracking-widest text-xs items-end">
            Start free
          </button>
        </div>

        <FAQ />
      </main>
    </>
  )
}