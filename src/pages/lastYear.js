import { useQuery } from "@apollo/client";
import {LASTYEAR} from "../config/graphql";
import functionAPI from "../config/fonction";
import CardFact from "../components/cardFact";

const last3months = functionAPI.getLast3Months();
const lastyear = functionAPI.getLastYear().toString();
// console.log(last3months)
// console.log(lastyear)

function LastYear() {
	const { loading, error, data } = useQuery(LASTYEAR, {
		variables: {
			lastyear: lastyear,
			last3months: last3months
		}
	})

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
						{loading && <div className="loader" />}
						{error && <div className="errors">...</div>}

						{!loading && !data.axomefacts.data.length &&
							<span className="none">
								Aucun résultat pour
									{last3months.map((month,index) => (
										{month}
									))}
								!
							</span>
						}

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

export default LastYear;