import React, { cloneElement, createContext, useContext, useEffect, useState } from 'react';

export type WizardCtx = {
  activeStepIndex: number;
  goNextStep: () => void;
  goPrevStep: () => void;
  steps: number;
  setSteps: React.Dispatch<React.SetStateAction<number>>;
};

const WizardContext = createContext<WizardCtx | null>(null);

export const useWizardContext = (): Error | WizardCtx | null => {
  const context = useContext(WizardContext);
  /*
   * If the component is not being composed properly throw an error
   * (e.g. if one of the compound components is being rendered outside the main component).
   */
  if (!context) {
    throw new Error(`Child components of Wizard cannot be rendered outside the Wizard component`);
  }
  return context;
};

const Wizard = ({ children }: { children: React.ReactNode }): JSX.Element => {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const [steps, setSteps] = useState(0);

  const goNextStep = (): void => {
    setActiveStepIndex((index) => index + 1);
  };

  const goPrevStep = (): void => {
    setActiveStepIndex((index) => index - 1);
  };

  const context = {
    activeStepIndex,
    goNextStep,
    goPrevStep,
    steps,
    setSteps,
  };

  return <WizardContext.Provider value={context}>{children}</WizardContext.Provider>;
};

const Content = ({ children }: { children: React.ReactNode }): JSX.Element => {
  const { activeStepIndex, setSteps } = useWizardContext() as WizardCtx;

  // The total number of steps based on the given children
  const steps: React.ReactNode = React.Children.count(children);
  // The child component to be rendered based on the current step index
  const currentStep: React.ReactNode = React.Children.toArray(children)[activeStepIndex];

  useEffect(() => {
    setSteps(steps);
  }, [steps, setSteps]);

  return <>{currentStep}</>;
};

const PrevStep = ({ children }: { children: React.ReactElement }): JSX.Element => {
  const { activeStepIndex, goPrevStep } = useWizardContext() as WizardCtx;
  return cloneElement(children, { onClick: goPrevStep, disabled: activeStepIndex <= 0 });
};
const NextStep = ({ children }: { children: React.ReactElement }): JSX.Element => {
  const { activeStepIndex, goNextStep, steps } = useWizardContext() as WizardCtx;
  return cloneElement(children, { onClick: goNextStep, disabled: activeStepIndex >= steps - 1 });
};

Wizard.Content = Content;
Wizard.PrevStep = PrevStep;
Wizard.NextStep = NextStep;

export default Wizard;
