import { BrowserRouter, Route, Switch } from "react-router-dom";
import BlogCreation from "./components/BlogCreation";
import BlogDetails from "./components/BlogDetails";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import NotFoundPage from "./components/404";

function App() {
	return (
		<BrowserRouter>
			<div className="App">
				<Navbar />
				<div className="content">
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route exact path="/create">
							<BlogCreation />
						</Route>
						<Route exact path="/blogs/:id">
							<BlogDetails />
						</Route>
						<Route path="*">
							<NotFoundPage />
						</Route>
					</Switch>
				</div>
			</div>
		</BrowserRouter>
	);
}

export default App;
