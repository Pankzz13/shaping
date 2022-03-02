
import ReactDOM from 'react-dom';
import App from './App';
import { store } from "./state/store";
import { Provider } from "react-redux";
import LoginForm from "./components/LoginForm";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserForm } from "./components/UserForm";
import { Assessment } from "./components/Assessment";
import { EditStAssessForm } from "./components/EditStAssessForm";
import { StAssessmentForm } from "./components/stAssessmentForm";







ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/userform" element={<UserForm />} />
        <Route path="/assessment" element={<Assessment />} />
        <Route path="/editstassessform" element={<EditStAssessForm />} />
        <Route path="/stassessmentform" element={<StAssessmentForm />} />
      </Routes>
    </BrowserRouter>

  </Provider>,
  document.getElementById('root')
);
