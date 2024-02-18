import React, { useState } from "react";
import "./App.css";
import Deleted from "./components/Deleted";
import ChangeContent from "./components/ChangeContent";
import Modal from "./components/Modal";

const deves = [
  {
    title: "React",
    author: "Jordan Walke",
    rating: 5,
    id: 1,
  },
  {
    title: "Redux",
    author: "Dan Abramov",
    rating: 4.5,
    id: 2,
  },
  {
    title: "Javascript",
    author: "Brandon Eich",
    rating: 5.5,
    id: 3,
  },
  {
    title: "Java",
    author: "Toshmat",
    rating: 4,
    id: 4,
  },
  {
    title: "Phyton",
    author: "Eshmat",
    rating: 5.5,
    id: 5,
  },
];
const App = () => {
  const [text, setText] = useState("Rustam");
  const [list, setList] = useState(deves);
  const [showContent, setShowContent] = useState(true);
  const [showModal, setShowModal] = useState(true)
  
  const whereModal = () => {
    setShowModal(false)
  }

  const handleDelete = (id) => {
    setList(list.filter((elem) => elem.id !== id));
  };
  return (
    <div className="App">
      <h2>My name is {text}</h2>
      {/* <Modal>
        <h2>My Modal😁</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
          tempore sint eaque maxime beatae sed officiis consequuntur incidunt,
          dignissimos tenetur praesentium inventore quos explicabo quasi.
        </p>
      </Modal> */}
      {showModal && <Modal data = {whereModal}>
        <h2>My Second Modal😁</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
          tempore sint eaque maxime beatae sed officiis consequuntur incidunt,
          dignissimos tenetur praesentium inventore quos explicabo quasi.
        </p>
        <a href="">Subscribe</a>
        
      </Modal>}

      {!showModal && <button onClick={()=>setShowModal(true)}>Show Modal</button>}
     
      <button onClick={() => setText("Abu Khadija")}>Change my name</button>
      <button onClick={() => setText("Rustam")}>Change my name</button>

      <hr />
      {showContent && (
        <button onClick={() => setShowContent(false)}>Hide Content</button>
      )}
      {!showContent && (
        <button onClick={() => setShowContent(true)}>show Content</button>
      )}

      <ul>
        {showContent && (
          <div>
            {list.length === 0 && <h4>No data yet :(</h4>}
            {list.map((item) => {
              return (
                <li key={item.id}>
                  {item.title} - {item.author}
                  <button onClick={() => handleDelete(item.id)}>Delete</button>
                </li>
              );
            })}
          </div>
        )}
      </ul>
      <br />
      <hr />
      <Deleted list={list} setList={setList} />
      <ChangeContent />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default App;
