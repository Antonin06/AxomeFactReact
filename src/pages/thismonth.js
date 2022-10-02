import { useQuery } from "@apollo/client";
import {HOME} from "../config/graphql";
import functionAPI from "../config/fonction";
import CardFact from "../components/cardFact";
const month = functionAPI.currentMonth();
const year = functionAPI.currentYear().toString();

function ThisMonth() {
	const { loading, error, data } = useQuery(HOME, {
		variables: {
			month: month,
			year: year
		}
	})

	return (
		<main id="all-facts">
			<div className="container">
				<div className="grid">
					<div className="left">
						<div className="date">
							<div className="inf">Ce mois</div>
							<div className="month">{month}</div>
							<div className="year">{year}</div>
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

export default ThisMonth;