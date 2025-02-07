import QuestionAnswer from "../components/QuestionAnswer"
import { FAQ as faqArray } from '../assets/frequentlyAskedQuestions';

function FAQ() {
  return (
    <section className="px-14 mt-40">
      <h3 className="font-proximanova text-mint-custom text-2xl font-semibold capitalize">Frequently asked questions</h3>

      <ul className="mt-10">
        {
          faqArray.map((item, index) => 
            <QuestionAnswer key={index} question={item.question} answer={item.answer} />
          )
        }
      </ul>
    </section>
  )
}
export default FAQ;