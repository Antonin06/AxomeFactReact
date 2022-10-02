import React from 'react';
import parse from "html-react-parser";

function CardFact(props) {
	return (
		<div className="axomefactdezinzin" id={props.id}>
			<div className="fact">{parse(props.attributes.Texte)}</div>
		</div>
	);
}
export default CardFact;