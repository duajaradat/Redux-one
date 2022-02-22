import { Route, Switch, Redirect } from "react-router-dom";
import Home from "./components/Home";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={LoginForm} />
        <Route exact path="/register" component={RegisterForm} />
        <Redirect from="/articles" exact to="/" />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
