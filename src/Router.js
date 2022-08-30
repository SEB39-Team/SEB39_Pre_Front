import { Route, Routes } from 'react-router';
import { Home, SignUp, Login } from './pages';
import Question from 'pages/Question';

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/ask" element={<Question />} />
    </Routes>
  );
}
