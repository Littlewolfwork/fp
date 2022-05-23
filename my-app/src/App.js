import './App.css';
import Header from './components/Header/Header.js';
import Nav from './components/Nav/Nav.js';
import Profile from './components/Profile/Profile.js';

const App = () => {
  return (
      <div className='app-wrapper'>
        <Header />
        <Nav />
        <Profile />
      </div>
  );
}

export default App;
