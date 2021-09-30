import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Form,Button} from 'react-bootstrap';
import Address from './Profile/Address';
import FullName from './Profile/FullName';
import ProfilePhoto from './Profile/ProfilePhoto';

function App() {
  return (
    <div className="App">
      <FullName/><Address/><ProfilePhoto/></div>
  );
}
export default App;
