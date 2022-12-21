import { useState } from 'react';
import { ChatCard } from './components/ChatCard';
import Header from './components/Header';
import { UserLogin } from './components/UserLogin';
import { useAppDispatch, useAppSelector } from "./store/hooks";
import './styles/App.css';
import { v4 as uid } from "uuid";
import { addUser } from "./store/usersSlice";

function App() {
  const dispatch = useAppDispatch();
  const { users } = useAppSelector((state) => state);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({});

  const handleLogin = (name) => {
    if (name.trim() !== "") {
      const user = users.find((user) => user.name === name);
      let requestedUser = { name };

      if (user) {
        requestedUser.id = user.id;
      } else {
        requestedUser.id = uid();
        dispatch(addUser(requestedUser));
      }
      setUser(requestedUser);
      setIsLoggedIn(true);
    }
  };
  return (
    <div className="App">
      <Header />
      <div className="container">
        {isLoggedIn ? (
          <ChatCard user={user} />
        ) : (
          <UserLogin onLogin={handleLogin} />
        )}
      </div>
    </div>
  );
}

export default App;
