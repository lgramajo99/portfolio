import Bar from "./components/Bar"
// import AboutMe from "./pages/AboutMe"
import Home from "./pages/Home"
// import TabBar from "./components/TabBar"

function App() {
  return (
    <div >
      <Bar />
      <section className="p-10">
        <Home />
      </section>
    </div>
  )
}

export default App
