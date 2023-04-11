import './App.css';
import ProfilePhoto from './component/profile/ProfilePhoto';
import FullName from './component/profile/FullName';
import Adress from './component/profile/Address';

function App() {
  return (
    <div className="App">
    <FullName/>
    <Adress/>
    <ProfilePhoto className='photo' alt =''/>
    
    </div>
  );
}

export default App;
