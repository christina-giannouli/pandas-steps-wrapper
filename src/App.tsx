import DefaultWizard from './examples/DefaultWizard';
import CustomWizard from './examples/CustomWizard';

function App(): JSX.Element {
  return (
    <>
      <section>
        <DefaultWizard />
      </section>
      <section>
        <CustomWizard />
      </section>
    </>
  );
}

export default App;
