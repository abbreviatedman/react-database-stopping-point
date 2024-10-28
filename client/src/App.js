import AllCharacters from "./AllCharacters";
import CreateCharacter from "./CreateCharacter";
import OneCharacter from "./OneCharacter";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div>
      <h1>See what year each hero debuted!</h1>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/mcu'>All Debuts</Link></li>
        <li><Link to='/create'>Add a Character Debut</Link></li>
      </ul>
      <Routes>
        <Route path='/mcu' element={<AllCharacters />} />
        <Route path="/create" element={<CreateCharacter />} />
        <Route path='/' element={<h3>Click "All Debuts" to see them!</h3>} />
        <Route path='/mcu/:name' element={<OneCharacter />} />
      </Routes>
    </div>
  )
}

export default App;
