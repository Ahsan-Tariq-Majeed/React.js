import "./App.css";
import Card from "./components/Card";
import food from "./assets/zizu.jpg";

function App() {
  const recipeAuthor = "Efecan";
  const recipeItem = {
    title: "Zinedine Zidane",
    date: "23 June 1972",
    image: food,
    description:
    <div className="dis"> "Zidane started his career at Cannes before establishing himself as one of the best players in the French Ligue 1 at Bordeaux. In 1996, he moved to Italian team Juventus",
    </div>
       };

  const like= 1980;
  const isLiked = true;

  return (
    <div className="App">
      <header className="App-header">
        <Card
          author={recipeAuthor}
          title={recipeItem.title}
          date={recipeItem.date}
          description={recipeItem.description}
          liked={isLiked}
          likeCount={like}
        />
      </header>
    </div>
  );
}

export default App;
