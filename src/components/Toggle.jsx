import { useState } from "react";

function Toggle() {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <div className="flex flex-wrap w-full justify-evenly">
      <h3 className="text-mint-custom uppercase font-bold w-full text-right mb-4 text-xs">2 months free!</h3>
      <p className={`uppercase font-medium ${ isYearly ? 'text-lgrey-custom' : 'text-grey-custom' } transition-all`}>Monthly</p>
      <div className="bg-mint-custom h-8 w-14 rounded-full p-0.5">
        <div className={`bg-white h-7 w-7 rounded-full ${ isYearly ? 'ml-6' : 'ml-0' } transition-all cursor-pointer`} onClick={() => setIsYearly(!isYearly)}>
        </div>
      </div>
      <p className={`uppercase font-medium ${ !isYearly ? 'text-lgrey-custom' : 'text-grey-custom' } transition-all`}>Yearly</p>
    </div>
  )
}

export default Toggle;