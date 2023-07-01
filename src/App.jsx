import "./App.scss"
import Header from "./components/Header/Header"
import Home from "./components/Home/Home"

function App() {
	return (
		<div className="App">
			<Header />
			<main>
				<div className="page" id="page">
					<Home />
				</div>
			</main>
		</div>
	)
}

export default App
