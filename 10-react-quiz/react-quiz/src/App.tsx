import { Error } from './components/Error';
import { FinishScreen } from './components/FinishScreen';
import { Footer } from './components/Layout/Footer';
import { Header } from './components/Layout/Header';
import { Main } from './components/Layout/Main';
import { Loader } from './components/Loader';
import { NextBtn } from './components/NextBtn';
import { ProgressBar } from './components/ProgressBar';
import { Question } from './components/Question';
import { StartScreen } from './components/StartScreen';
import { Timer } from './components/Timer';
import { useQuizContext } from './context/QuizContext';

function App(): React.JSX.Element {
  const { status } = useQuizContext();

  return (
    <div className="app">
      <Header />

      <Main>
        {status === 'Loading' && <Loader />}
        {status === 'Error' && <Error />}
        {status === 'Ready' && <StartScreen />}
        {status === 'Active' && (
          <>
            <ProgressBar />
            <Question />
            <Footer>
              <Timer />
              <NextBtn />
            </Footer>
          </>
        )}
        {status === 'Finished' && <FinishScreen />}
      </Main>
    </div>
  );
}

export default App;
