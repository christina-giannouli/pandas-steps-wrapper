import Wizard, { useWizardContext, WizardCtx } from '../wizard/Wizard';

const Step1 = () => <div>Content One</div>;
const Step2 = () => <div>Content Two</div>;
const Step3 = () => <div>Content Three</div>;

const ProgressBar = () => {
  const { activeStepIndex, steps } = useWizardContext() as WizardCtx;

  return (
    <span className="font-bold">
      Step {activeStepIndex + 1} of {steps}
    </span>
  );
};

function CustomWizard(): JSX.Element {
  return (
    <div className="bg-[#fff] text-[#fff] flex justify-center items-center">
      <div className="container py-10">
        <h1 className="text-xl font-bold pb-6 text-black">
          Custom Wizard Example (with progress bar and UI modifications)
        </h1>
        <Wizard>
          <div className="px-8 py-4 bg-purple rounded-t-md">
            <ProgressBar />
          </div>
          <div className="bg-black p-8 h-80 overflow-y-auto rounded-b-md">
            <Wizard.Content>
              <Step1 />
              <Step2 />
              <Step3 />
            </Wizard.Content>
          </div>
          <div className="flex items-center justify-between pt-6 bg-[#fff]">
            <Wizard.PrevStep>
              <button
                type="button"
                className="bg-purple hover:bg-[#fff] text-black hover:text-purple rounded-full border-2 border-purple px-3 py-2 font-bold ease-in-out duration-300 disabled:opacity-50 disabled:pointer-events-none disabled:cursor-not-allowed">
                &larr;
              </button>
            </Wizard.PrevStep>
            <Wizard.NextStep>
              <button
                type="button"
                className="bg-purple hover:bg-[#fff] text-black hover:text-purple rounded-full border-2 border-purple px-3 py-2 font-bold ease-in-out duration-300 disabled:opacity-50 disabled:pointer-events-none disabled:cursor-not-allowed">
                &rarr;
              </button>
            </Wizard.NextStep>
          </div>
        </Wizard>
      </div>
    </div>
  );
}

export default CustomWizard;
