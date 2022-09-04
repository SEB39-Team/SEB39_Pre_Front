import { Route, Routes } from 'react-router';
import { Home, SignUp, Login, Question, QuestionDetail } from './pages';

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:id" element={<QuestionDetail />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/ask" element={<Question />} />
    </Routes>
  );
}
