import './App.css';
import { Routes, Route } from 'react-router-dom';
import Layout from '../Layout/Layout';
import Main from '../Main/Main';
import Login from '../Login/Login';
import PageNotFound from '../PageNotFound/PageNotFound';
import ChatPage from '../ChatPage/ChatPage';

function App() {
  const users = [
    {
      name: 'Aleksei Smirnov',
      about: 'JS Developer',
      avatar:
        'https://bitfilms.smirnov.nomoredomains.icu/static/media/student-photo.cad54e2754cc673747f1.jpg',
    },
    {
      name: 'Alex',
      about: 'Student',
      avatar:
        'https://sun9-23.userapi.com/impg/EQHWxW_0YhmYb-2j87fzwb-OU-k9HV5MMAxaOA/SKd829vutHw.jpg?size=1280x1280&quality=96&sign=b35e3a8ed01f21c801a010b657d9a56d&type=album',
    },
    {
      name: 'Smirnoff The Electrician',
      about: 'Electrician',
      avatar:
        'https://sun9-7.userapi.com/impg/c855424/v855424919/250d68/yLixoVlbHhU.jpg?size=1045x1045&quality=96&sign=8b3e6021281d710907eb9f716e00418c&type=album',
    },
    {
      name: 'Dasha',
      about: 'Female alter ego',
      avatar:
        'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=461&q=80',
    },
    {
      name: 'Dasha',
      about: 'Female alter ego',
      avatar:
        'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=461&q=80',
    },
    {
      name: 'Dasha',
      about: 'Female alter ego',
      avatar:
        'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=461&q=80',
    },
    {
      name: 'Dasha',
      about: 'Female alter ego',
      avatar:
        'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=461&q=80',
    },
    {
      name: 'Dasha',
      about: 'Female alter ego',
      avatar:
        'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=461&q=80',
    },
    {
      name: 'User without Avatar',
      about: 'Male alter ego',
    },
    {
      name: 'User without Avatar',
      about: 'Male alter ego',
    },
  ];

  const messages = [
    {
      time: '12345',
      text: 'Археологические раскопки подтверждают, что люди на территории современной Грузии жили ещё 1,7 миллионов лет назад. Самые древние человеческие останки обнаружены в 1991 году именно в Грузии, в Дманиси.',
    },
    {
      time: '123456',
      text: 'На территории Грузии археологи нашли самую древнюю виноградную лозу и остатки сосудов для вина. Это говорит о том, что Грузию можно считать родиной виноградарства и виноделия. А в Кахетии найдена бронзовая фигурка мужчины, который держит в руке чашу с вином. И датируется эта находка VII веком до нашей эры.',
    },
    {
      time: '1234567',
      text: 'Для угощения гостя на стол ставят всё, что есть в доме. Это могут быть и самые последние запасы, если семья не очень состоятельная. Но гость голодным не останется никогда. И ночлег при необходимости ему гарантирован.',
    },
    {
      time: '12345678',
      text: 'К X веку, в основном, сложилась грузинская народность, а картли стали ядром будущего Грузинского государства.',
    },
    {
      time: '123456789',
      text: 'В Грузии много долгожителей. Сами грузины считают, что причина тому их гостеприимство. Время, которое хозяин посвятит гостю, не идёт в зачёт прожитого возраста. Вполне возможно, что именно поэтому в Грузии вас настойчиво зазывают в гости сразу после знакомства.',
    },
    {
      time: '1234567810',
      text: 'Если грузинский ребёнок зовёт папу, он произносит «мама». Такое обращение к папе часто сильно удивляет туристов, которые слышат такое обращение детей на улицах грузинских сёл и городов. А мама — это «дэда». Ещё есть «бабуа» и «бебуа» — что, соответственно, переводится как дедушка и бабушка.',
    },
    {
      time: '1234567811',
      text: 'Грузинское застолье невозможно без тамады и длинных тостов. Тост — это зачастую целая история, а не просто предложение выпить за здоровье или за любовь.',
    },
    {
      time: '1234567812',
      text: 'Иногда считается, что грузины плохо относятся к русским, но в большинстве своём это не так. Политика и отношения простых людей — это две большие разницы. Национальность хорошего человека не имеет значения.',
    },
  ];

  return (
    <div className='App'>
      <Routes>
        <Route path='/'>
          <Route element={<Layout />}>
            <Route index element={<Main />} />
            <Route path='login' element={<Login />} />
          </Route>
          <Route
            path='chat'
            element={<ChatPage users={users} messages={messages} />}
          />
          <Route path='*' element={<PageNotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
