import { isMobile } from '../utils/isMobile';
import { PracticeContent } from './PracticeContent';

function NoSupport() {
  return <p>Mobile is currently not supported</p>;
}

function App() {
  if (isMobile()) {
    return <NoSupport />;
  }
  return <PracticeContent />;
}

export default App;
