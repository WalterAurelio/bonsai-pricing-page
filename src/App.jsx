import Navbar from "./components/Navbar";
import PriceCard from "./components/PriceCard";
import Toggle from "./components/Toggle";

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
      </main>
    </>
  )
}