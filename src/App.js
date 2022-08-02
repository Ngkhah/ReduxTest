import "./App.css";
import Navbar from "./component/Navbar";
import Todos from "./component/Todos";
import { Provider } from "react-redux";
import store from "./store/store";
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Navbar />

        <Todos />
      </div>
    </Provider>
  );
}

export default App;
