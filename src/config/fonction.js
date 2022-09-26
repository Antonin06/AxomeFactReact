const currentTime = new Date();

function currentYear() {
	return currentTime.getFullYear();
}

function getLastYear() {
	return currentTime.getFullYear()-1;
}

function currentMonth() {
	let monthDate = ["Janvier","Fevrier","Mars","Avril","Mai","Juin","Juillet","Aout","Septembre","Octobre","Novembre","Decembre"];
	let name = monthDate[currentTime.getMonth()];
	return name;
}

function getLast3Months() {
	let monthDate = ["Janvier","Fevrier","Mars","Avril","Mai","Juin","Juillet","Aout","Septembre","Octobre","Novembre","Decembre"];
	let name = monthDate[currentTime.getMonth()];
	let name1 = monthDate[currentTime.getMonth()-1];
	let name2 = monthDate[currentTime.getMonth()-2];

	return [name, name1, name2];
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
	currentYear,
	currentMonth,
	getLast3Months,
	getLastYear
};