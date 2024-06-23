import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Main() {
  const [data, setData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('posts');

  useEffect(() => {
    fetchData(selectedCategory);
  }, [selectedCategory]);

  function fetchData(endpoint) {
    axios
      .get(`https://jsonplaceholder.typicode.com/${endpoint}`)
      .then(function (response) {
        setData(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <div className="flex justify-center items-center gap-2 flex-col">
      <div className="flex gap-2">
        <button
          className="btn btn-primary"
          onClick={() => setSelectedCategory('posts')}
        >
          Posts
        </button>

        <button
          className="btn btn-primary"
          onClick={() => setSelectedCategory('comments')}
        >
          Comments
        </button>

        <button
          className="btn btn-primary"
          onClick={() => setSelectedCategory('users')}
        >
          Users
        </button>
      </div>
      <div className="">
        {selectedCategory === 'posts' &&
          data.map((item) => <div key={item.id}>{item.title}</div>)}
      </div>
      <div className="">
        {selectedCategory === 'users' &&
          data.map((item) => <div key={item.id}>{item.name}</div>)}
      </div>
      <div className="">
        {selectedCategory === 'comments' &&
          data.map((item) => <div key={item.id}>{item.body}</div>)}
      </div>
    </div>
  );
}

export default Main;
