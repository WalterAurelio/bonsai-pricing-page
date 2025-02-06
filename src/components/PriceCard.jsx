import plansAndPricing from "../assets/plansAndPricing";
import { Check } from 'lucide-react';
import { useIsMonthly } from "../store/isMonthlyStore";

function PriceCard({ category }) {
  const { isMonthly } = useIsMonthly();
  const plan = plansAndPricing.find(plan => plan.category === category);

  return (
    <div className="border border-llgrey-custom rounded font-proximanova text-grey-custom px-6 py-12 mx-4 relative overflow-clip">
      {
        plan.mostPopular &&
        <div className="bg-mint-custom text-white uppercase font-proximanova font-bold tracking-wider py-1.5 absolute w-60 pl-13 rotate-45 -right-18 text-sm">
          Most popular
        </div>
      }
      <h3 className="text-2xl font-semibold tracking-wide">{plan.category}</h3>
      <p className="mt-1 mb-6">{plan.description}</p>
      <div className="flex h-20 border-b-2 border-mint-custom pb-0.5">
        <p className="text-3xl flex items-center">$</p>
        <p className="text-7xl font-bold ml-2 mr-4 flex items-center">{ isMonthly ? plan.monthlyPrice : plan.yearlyPrice}</p>
        <p className="text-2xl uppercase flex items-end">/month</p>
      </div>
      <div className="mt-8 leading-11">
        {
          plan.benefits.map((benefit, index) =>
            <div key={index} className="flex items-center">
              <Check className="text-mint-custom mr-1 h-4" />
              <p className="w-fit">{benefit}</p>
            </div>
          )
        }
      </div>

      <button type='button' className='font-proximanova bg-mint-custom text-white w-full rounded-sm mt-7 py-6 uppercase font-bold text-sm tracking-widest'>Start free</button>
    </div>
  )
}
export default PriceCard