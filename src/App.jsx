import { useState } from "react";
import Compteur from "./components/Compteur";
import "./App.css";
import Navbar from "./components/Navbar";
import Post from "./components/Post";

function App() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      titre: "Amani Kaso",
      description:
        "Voici un exemple de texte qui vient juste de remplacer ce texte ici",
      liker: false,
    },
    {
      id: 2,
      titre: "Moune Kaso",
      description:
        "Voici un exemple de texte qui vient juste de remplacer ce texte ici",
      liker: false,
    },
    {
      id: 3,
      titre: "Amama Kaso",
      description:
        "Voici un exemple de texte qui vient juste de remplacer ce texte ici",
      liker: false,
    },
    {
      id: 4,
      titre: "Mouz Kaso",
      description:
        "Voici un exemple de texte qui vient juste de remplacer ce texte ici",
      liker: false,
    },
  ]);

  const liker = (data) => {
    const donneeCopier = [...posts];
    const index = posts.indexOf(data);
    donneeCopier[index] = { ...posts[index], liker: !posts[index].liker };
    setPosts(donneeCopier);
    console.log(donneeCopier);
  };

  const effacerPost = (id) => {
    const nouvelleDonner = posts.filter((p) => p.id != id);
    setPosts(nouvelleDonner);
  };
  const nmbreLiker = posts.filter((p) => p.liker)
  return (
    <div className="App">
      <Navbar  nombreLiker = {nmbreLiker.length} />
      {posts.map((p) => (
        <Post
          data={p}
          key={p.id}
          liker={liker}
          suppressionDonner={effacerPost}
        />
      ))}
    </div>
  );
}
export default App;
