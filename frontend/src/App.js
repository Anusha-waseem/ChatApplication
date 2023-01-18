//import "./App.css";
import main from "./Pages/main";
import Homepage from "./Pages/Homepage";
import { Switch,Route } from "react-router-dom";
import Chatpage from "./Pages/Chatpage";


function App() {
  return (
    <Switch>
      <Route exact path="/" component={main} />
      <Route path="/home" component={Homepage} />
      <Route path="/chats" component={Chatpage} />
    </Switch>
  );
}

export default App;