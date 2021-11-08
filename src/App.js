import './App.css';
import {route, routes} from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { useEffect, useState } from 'react';

function App() {
  const [post, setPosts] = useState({posts: []});

  const getPosts = async () => {
    try {
      const posts = await fetch('http://localhost:3000/posts').then(response => response.json())
      console.log(posts)
    } catch (error) {
      console.log(error)
    }
  };

  useEffect(() => {
    getPosts()
  }, []);

  return (
    <div className="App">
      <Header />
      <Footer />
    </div>
  );
}

export default App;
