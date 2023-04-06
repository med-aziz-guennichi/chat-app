import './App.css'
import {Route} from 'react-router-dom'
import ChatPage from './Pages/ChatPage';
import Homepage from './Pages/Homepage';
function App() {
  
  return (
    <div className="App">
      <Route path="/" component={Homepage} exact/>
      <Route path="/chats" component={ChatPage} exact />
    </div>
  );
}

export default App;
