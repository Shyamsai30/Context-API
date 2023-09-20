import HomePage from "./pages/HomePage";
import { PostProvider } from "./context/PostContext";
import "./styles.css";

export default function App() {
  // const [posts, setPosts] = useState([
  //   { id: 1, title: "Post One" },
  //   { id: 2, title: "Post Two" },
  //   { id: 3, title: "Post Three" },
  //   { id: 4, title: "Post Four" }
  // ]);
  return (
    <PostProvider>
      <div className="App">
        <h1>Navbar Section</h1>
        <HomePage />
        <h1>Footer Section</h1>
      </div>
    </PostProvider>
  );
}
