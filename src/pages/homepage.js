import { useQuery } from "@apollo/client";
import {ALLFACTS} from "../config/graphql";
import functionAPI from "../config/fonction";
import CardFact from "../components/cardFact";

function Homepage() {
	const month = functionAPI.currentMonth();
	const year = functionAPI.currentYear().toString();

	const { loading, error, data } = useQuery(ALLFACTS, {
		variables: {
			month: month,
			year: year
		}
	})

	// console.log(data.axomefacts.data);

	return (
		<main id="home">
			<div className="container">
				<div className="grid">
					<div className="left">
						<div className="date">
							<div className="inf">Axome</div>
							<div className="month">Facts!</div>
						</div>
					</div>
					<div className="right">
						{loading && <div className="loader" />}
						{error && <div className="errors">...</div>}

						{!loading && !data.axomefacts.data.length && <span className="none">Aucun résultat pour {month} !</span>}

						{!loading && data.axomefacts.data.length &&
							data.axomefacts.data.map((fact,index) => (
								<CardFact {...fact} key={index}/>
							))
						}
					</div>
				</div>
			</div>
		</main>
	);
}

export default Homepage;