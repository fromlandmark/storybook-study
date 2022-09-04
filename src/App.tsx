import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Dropdown } from "./components/Dropdown/Dropdown.component";
import { DropdownList } from "./components/DropdownList/DropdownList.component";
import { DropdownMenu } from "./components/DropdownMenu/DropdownMenu.component";
import { Navbar } from "./components/Navbar/Navbar.component";
import { NavBarLink } from "./components/NavBarLink/NavBarLink.component";
import { AnalyticsPage } from "./pages/Analytics.page";
import { HomePage } from "./pages/Home.page";
import { OperationsPage } from "./pages/Operations.page";
import { SettingsPage } from "./pages/Settings.page";

function App() {
	return (
		<div className="App">
			<Navbar>
				<div className="navbar__logo">
					<img src="https://upload.wikimedia.org/wikipedia/commons/1/12/Binance_logo.svg" alt="" />
				</div>
				<div className="navbar__group">
					<NavBarLink label="Dashboard" path="/" />
					<NavBarLink label="Operations" path="/operations" />
					<NavBarLink label="Analytics" path="/analytics" />
					<NavBarLink label="Settings" path="/settings" />
				</div>
				<Dropdown>
					<DropdownMenu>
						<div>Cristian</div>
					</DropdownMenu>
					<DropdownList>
						<span>Item</span>
					</DropdownList>
				</Dropdown>
			</Navbar>
			<Routes>
				<Route path="/" element={<HomePage />}></Route>
				<Route path="/operations" element={<OperationsPage />}></Route>
				<Route path="/analytics" element={<AnalyticsPage />}></Route>
				<Route path="/settings" element={<SettingsPage />}></Route>
			</Routes>
		</div>
	);
}

export default App;
