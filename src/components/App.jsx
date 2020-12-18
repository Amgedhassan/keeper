import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import Register from "./Register";
import Login from "./Login";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { useSpring, animated } from "react-spring";
import axios from "axios";
import {reactLocalStorage} from 'reactjs-localstorage';

function App() {
  const [notes, setNotes] = useState([]);
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [userID, setUserID] = useState(null);

  function addNote(newNote) {
    setNotes(prevNotes => {
      return [...prevNotes, newNote];
    });
    axios.post("http://localhost:5000/notes", newNote)
    .then(response => {
      console.log(response.data);
    });
  }

  function deleteNote(id) {
    setNotes(prevNotes => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
    let h = "5f23d1fe3737b20de82b5de5"
    axios.delete("http://localhost:5000/notes", { data: { id: h }})
    .then(response => {
      console.log(response.data);
    });
    
  }

  return (<Router>
      <div>
        <Header />

        <Route path="/" exact component={Home} />
        <Route path="/notes" component={myNotes} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />

        <Footer />
      </div>
    </Router>
  );
  function myNotes() {
    return (
      <div>
        <CreateArea onAdd={addNote} />
        {notes.map((noteItem, index) => {
          return (
            <Note
              key={index}
              id={index}
              title={noteItem.title}
              content={noteItem.content}
              onDelete={deleteNote}
            />
          );
        })}
      </div>
    );
  }
  function Home() {
    const fade = useSpring({
      opacity: 1,
      from: {
        opacity: 0
      },
      transition: "all 1s",
      fontSize : "24px",
      textAlign: "center",
      fontFamily: " McLaren, cursive",
      fontWeight: 200,
      marginTop : "150px",
      color: "#5d5d5a",
      backgroundColor: "#ccc",
      padding: "15px",
      boxShadow: "0 2px 5px #ccc",
      marginBottom: "20px"
    });
    return (
      <div>
        <animated.div style={fade}>
          <h1>Keep Your Notes , Never Miss Anything</h1>
          </animated.div>
      </div>
    )
  }
}

export default App;
