import { useQuery } from "@apollo/client";
import {ALLFACTS} from "../config/graphql";
import parse from 'html-react-parser';
import functionAPI from "../config/fonction";

function Homepage() {
	const month = functionAPI.currentMonth();
	const year = functionAPI.currentYear().toString();

	const { loading, error, data } = useQuery(ALLFACTS, {
		variables: {
			month: month,
			year: year
		}
	})

	if (loading) return <div className="container">Zeubi, ça charge!</div>
	if (error) return <p>Error :(</p>
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
						{data.axomefacts.data.map((fact, index) => (
							<div className="axomefactdezinzin" key={index} axfact-id={fact.id}>
								<div className="fact">{parse(fact.attributes.Texte)}</div>
								{/*<div className="date">{fact.attributes.Mois} {fact.attributes.Annee}</div>*/}
							</div>
						))}
					</div>
				</div>
			</div>
		</main>
	);
}

export default Homepage;