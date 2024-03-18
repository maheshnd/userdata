import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Provider } from "react-redux";

import { UserData } from "./containers/user";
import store from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <UserData />
      </div>
    </Provider>
  );
}

export default App;
