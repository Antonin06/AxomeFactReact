import { useQuery } from "@apollo/client";
import {LASTYEAR} from "../config/graphql";
import parse from "html-react-parser";
import functionAPI from "../config/fonction";

const last3months = functionAPI.getLast3Months();
const lastyear = functionAPI.getLastYear();
console.log(last3months)
console.log(lastyear)

function LastYear() {
	const { loading, error, data } = useQuery(LASTYEAR, {
		variables: {
			lastyear: lastyear,
			last3months: last3months
		}
	})

	if (loading) return <div className="container">Zeubi, ça charge!</div>
	if (error) return <p>Error :(</p>
	// console.log(data)

	return (
		<main id="lastyear">
			<div className="container">
				<div className="grid">
					<div className="left">
						<div className="date">
							<div className="inf">Il y a un an</div>
							{last3months.map((month,index) => (
								<div className="month" key={index}>{month}</div>
							))}
							<div className="year">{lastyear}</div>
						</div>
					</div>
					<div className="right">
						{data.axomefacts.data.map((fact, index) => (
							<div className="axomefactdezinzin" key={index} axfact-id={fact.id}>
								<div className="fact">{parse(fact.attributes.Texte)}</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</main>
	);
}

export default LastYear;