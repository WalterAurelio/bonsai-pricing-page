import { useState } from "react"

function QuestionAnswer({ question, answer }) {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="text-grey-custom mb-4">
      <h4 className="font-proximanova text-2xl font-semibold hover:text-mint-custom cursor-pointer" onClick={() => setIsActive(!isActive)}>{question}</h4>
      {
        isActive &&
        <p className="mt-3 text-sm leading-6">{answer}</p>
      }
    </div>
  )
}
export default QuestionAnswer