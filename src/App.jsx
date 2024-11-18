import { Outlet } from "react-router-dom";
import SignInForm from "./components/auth/signinform";
import MainComponent from "./pages/maincomponent";

function App() {
  return (
    <div>
      <Outlet />
    </div>
  );
}
export default App;
