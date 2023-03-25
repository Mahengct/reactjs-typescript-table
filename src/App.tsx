import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import axios from 'axios';

function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: 'Alice', body: 'Austria',userId: 1},
    {id: 2, title: 'Alice', body: 'Austria', userId: 2}
  ]);
  useEffect(() => {
  //    axios('https://jsonplaceholder.typicode.com/posts').then(data =>{setPosts(data.data)})
    fetch('https://jsonplaceholder.typicode.com/posts')
     .then(data => data.json())
     .then(data => {
      setPosts(data);
    } );
  }, [])
  console.log(posts);

  return (
    <table className="table">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">userId</th>
        <th scope="col">title</th>
        <th scope="col">body</th>
      </tr>
    </thead>
    <tbody>

      
        {posts.map(post => {
        return (
          <tr>
            <th scope="row">{post.id}</th>
            <td>{post.userId}</td>
            <td>{post.title}</td>
            <td>{post.body}</td>
          </tr>
        );
        })}

    </tbody>
  </table>
  );
  
}

export default App;
