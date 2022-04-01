import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './components/Home/Home';
import NoMatch from './components/NoMatch/NoMatch';
import FriendDetail from './components/FriendDetail/FriendDetail';

function App() {

  return (
    <Routes>
      <Route path="/home" element={<Home></Home>}></Route>
      <Route path="/friend/:friendId" element={<FriendDetail></FriendDetail>}></Route>
      <Route exact path="/" element={<Home></Home>}></Route>
      <Route path="*" element={<NoMatch></NoMatch>} />
    </Routes>
  );
}

export default App;
