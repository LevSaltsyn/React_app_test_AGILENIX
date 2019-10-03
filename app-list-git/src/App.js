import React from "react";
import UsersList from "./redux/containers/userListContainer";
import Footer from "./components/Footer";
import store from "./redux/store.js";
import { Provider } from "react-redux";
import "./App.css";

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <UsersList />
        <Footer />
      </div>
    </Provider>
  );
};
export default App;
