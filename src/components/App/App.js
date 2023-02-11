import './App.css';
import { Routes, Route } from 'react-router-dom';
import Layout from '../Layout/Layout';
import Main from '../Main/Main';
import Login from '../Login/Login';
import Chat from '../Chat/Chat';
import PageNotFound from '../PageNotFound/PageNotFound';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/'>
          <Route element={<Layout />}>
            <Route index element={<Main />} />
            <Route path='login' element={<Login />} />
            <Route path='chat' element={<Chat />} />
          </Route>
          <Route path='*' element={<PageNotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
