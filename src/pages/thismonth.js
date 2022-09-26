import { useQuery } from "@apollo/client";
import {HOME} from "../config/graphql";
import parse from "html-react-parser";
import functionAPI from "../config/fonction";
const month = functionAPI.currentMonth();
const year = functionAPI.currentYear().toString();

function ThisMonth() {
	const { loading, error, data } = useQuery(HOME, {
		variables: {
			month: month,
			year: year
		}
	})

	if (loading) return <div className="container">Zeubi, ça charge!</div>
	if (error) return <p>Error :(</p>
	console.log('inshallah ça marche en octobre zbi');

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
						{data.axomefacts.data.map((fact, index) => (
							<div className="axomefactdezinzin" key={index}>
								<div className="fact">{parse(fact.attributes.Texte)}</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</main>
	);
}

export default ThisMonth;