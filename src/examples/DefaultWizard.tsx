import Wizard from '../wizard/Wizard';

const Step1 = () => <div>Content One</div>;
const Step2 = () => <div>Content Two</div>;
const Step3 = () => <div>Content Three</div>;
const Step4 = () => <div>Content Four</div>;

function DefaultWizard(): JSX.Element {
  return (
    <div className="bg-dark text-[#fff] flex justify-center items-center">
      <div className="container py-10">
        <h1 className="text-xl font-bold pb-6">Default Wizard Example</h1>
        <Wizard>
          <div className="bg-black p-10 h-80 overflow-y-auto rounded-md">
            <Wizard.Content>
              <Step1 />
              <Step2 />
              <Step3 />
              <Step4 />
            </Wizard.Content>
          </div>
          <div className="flex items-center justify-between pt-6 bg-dark">
            <Wizard.PrevStep>
              <button
                type="button"
                className="bg-teal hover:bg-dark text-black hover:text-teal text-sm rounded-md border-2 border-teal px-3 py-2 font-bold ease-in-out duration-300 disabled:opacity-50 disabled:pointer-events-none disabled:cursor-not-allowed">
                Previous
              </button>
            </Wizard.PrevStep>
            <Wizard.NextStep>
              <button
                type="button"
                className="bg-teal hover:bg-dark text-black hover:text-teal text-sm rounded-md border-2 border-teal px-3 py-2 font-bold ease-in-out duration-300 disabled:opacity-50 disabled:pointer-events-none disabled:cursor-not-allowed">
                Next
              </button>
            </Wizard.NextStep>
          </div>
        </Wizard>
      </div>
    </div>
  );
}

export default DefaultWizard;
