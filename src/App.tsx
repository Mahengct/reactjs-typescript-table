import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import axios from 'axios';

interface TableProps {
  data: any[];
}

const Table: React.FC<TableProps> = ({ data }) => {
  return (
    <table className="table">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">applicant_id</th>
        <th scope="col">title</th>
        <th scope="col">body</th>
      </tr>
    </thead>
    <tbody>

      
        {data.map(post => {
        return (
          <tr key={post.id}>
            <th scope="row">{post.userId}</th>
            <td>{post.title}</td>
            <td>{post.body}</td>
            <td>{post.userId}</td>
          </tr>
        );
        })}

    </tbody>
  </table>

  );
};


function App() {
  const [selectedValue, setSelectedValue] = useState("");

  const [posts, setPosts] = useState([
    {
      "userId": 1,
      "id": 1,
      "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    }
  ]);

  let headers = new Headers();

  headers.append('Content-Type', 'application/json');
  headers.append('Accept', 'application/json');

  headers.append('Access-Control-Allow-Origin', '*');
  headers.append('Access-Control-Allow-Credentials', 'true');
  headers.append('Authorization', 'Basic ay1lZDdjZDUxYS05ZTgwLTRlNGYtYTE1MC1kNGVmZTljYjhkNjI6cy0wNTJkNzU4YS05ZWU2LTRjNDQtYmU5Ny1kNGQzZGQxNDY3NDQ=');


  
  useEffect(() => {
    let url:string;
    if (selectedValue == "")
    {
      url = "https://jsonplaceholder.typicode.com/posts";
    }
     else{

      url = "https://jsonplaceholder.typicode.com/posts?userId="+selectedValue;
     }
      

  //    axios('https://jsonplaceholder.typicode.com/posts').then(data =>{setPosts(data.data)})
    fetch(url,{
     // mode: 'no-cors',
      credentials: 'include',
      method: 'GET',
      headers: headers
    })
     .then(data => data.json())
     .then(data => {
      setPosts(data);
      console.log('Dropdown value is selected');
     // console.log(data);
    } )
    .catch(error => console.log('Authorization failed : ' + error.message));
    ;
  }, [selectedValue])

  //console.log(posts);

  return (
    <div>
      <select
        value={selectedValue}
        onChange={(e) => setSelectedValue(e.target.value)}
      >
        <option value="">Select a value</option>
        <option value="1">Value 1</option>
        <option value="2">Value 2</option>
        <option value="3">Value 3</option>
        <option value="4">Value 4</option>
        <option value="5">Value 5</option>
        <option value="6">Value 6</option>
        <option value="7">Value 7</option>
        <option value="8">Value 8</option>
        <option value="9">Value 9</option>
        <option value="10">Value 10</option>
      </select>
      {posts.length > 0 && <Table data={posts} />}
    </div>
    
  );
  
}

export default App;
