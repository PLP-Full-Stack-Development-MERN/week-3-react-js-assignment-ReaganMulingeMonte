

// src/App.js
import Header from './components/Header';
import Profile from './components/Profile';
import Counter from './components/Counter';

function App() {
  return (
    <div className="container mx-auto p-4">
      <Header />
      <div className="mt-4">
        <Profile name="Reagan Mulinge" email="reaganmulinge@example.com" />
      </div>
      <div className="mt-4">
        <Counter />
      </div>
    </div>
  );
}

export default App;