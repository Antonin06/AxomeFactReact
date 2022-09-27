import logoAx from './../assets/images/logo-axome-1.svg';
import {Link} from "react-router-dom";


function Header() {

	return (
		<header id="header">
			<div className="container">
				<div className="main-menu">
					<a href="/" className="logo">
						<img src={logoAx} alt="axome"/>
					</a>
					<div className="nav">
						<nav>
							<Link to="/">Home</Link>
							<Link to="lastyear">Last Year</Link>
							<Link to="thismonth">This Month</Link>
						</nav>
					</div>
				</div>
			</div>
		</header>
	);

}
export default Header;