import { Dispatch, MouseEvent, SetStateAction, useState } from 'react';

const messages = ['Learn React ⚛️', 'Apply for jobs 💼', 'Invest your new income 🤑'];

function App() {
  const [close, setClose] = useState(false);
  const [step, setStep] = useState(1);

  const handleCloseClick = () => setClose(cl => !cl);

  return (
    <>
      <button onClick={handleCloseClick} className="close">
        &times;
      </button>
      {!close && <Steps step={step} onChange={setStep} />}
    </>
  );
}

type PropsType = {
  step: number;
  onChange: Dispatch<SetStateAction<number>>;
};
function Steps({ step, onChange }: PropsType) {
  const handleStepClick = (e: MouseEvent<HTMLButtonElement>) => {
    switch (e.currentTarget.innerHTML) {
      case 'Previous':
        onChange(s => (s > 1 ? s - 1 : s));
        break;
      case 'Next':
        onChange(s => (s < 3 ? s + 1 : s));
        break;
    }
  };

  return (
    <div className="container">
      <div className="container-box">
        <div className={`step ${step >= 1 ? 'active' : ''}`}>1</div>
        <div className={`step ${step >= 2 ? 'active' : ''}`}>2</div>
        <div className={`step ${step >= 3 ? 'active' : ''}`}>3</div>
      </div>

      <p className="step-text">{`Step${step}: ${messages[step - 1]}`}</p>

      <div className="container-box">
        <button onClick={handleStepClick} className="btn previous">
          Previous
        </button>
        <button onClick={handleStepClick} className="btn next">
          Next
        </button>
      </div>
    </div>
  );
}

export default App;
