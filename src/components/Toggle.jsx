import { useIsMonthly } from "../store/isMonthlyStore";

function Toggle() {
  const { isMonthly, setIsMonthly } = useIsMonthly();

  return (
    <div className="flex flex-wrap w-full justify-evenly items-center mb-10">
      <h3 className="font-proximanova tracking-wide text-mint-custom uppercase font-bold w-full text-right mb-4 text-sm">2 months free!</h3>
      <p className={`font-proximanova tracking-widest uppercase font-bold ${ !isMonthly ? 'text-lgrey-custom' : 'text-grey-custom' } transition-all`}>Monthly</p>
      <div className="bg-mint-custom h-8 w-14 rounded-full p-0.5">
        <div className={`bg-white h-7 w-7 rounded-full ${ !isMonthly ? 'ml-6' : 'ml-0' } transition-all cursor-pointer`} onClick={() => setIsMonthly(!isMonthly) }>
        </div>
      </div>
      <p className={`font-proximanova tracking-widest uppercase font-bold ${ isMonthly ? 'text-lgrey-custom' : 'text-grey-custom' } transition-all`}>Yearly</p>
    </div>
  )
}

export default Toggle;