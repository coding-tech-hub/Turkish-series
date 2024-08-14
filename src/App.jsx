import TurkishSeries from "./components/TurkishSeries"
import "./App.css"
import "./components/Series.css"
const App = () => {
  return (
    <>
    <div className="heading">
     <h1 id="title">top 12 turkish series with urdu subtitle</h1>
     </div>
     <div className="body">
    <div className="container">
      <TurkishSeries />
    </div>
    </div>
    </>
  )
}

export default App
