/**
 * Filter the array by the given value.
 * Returns the array if no value is given.
 *
 * @param array {Array<any>}
 * @param prop {string}
 * @param value {string}
 */
function filterBy(array, prop, value) {
	if (!value) return array;

	return array.filter((item) => {
		let searchValue = value.toLowerCase().trim();
		let itemValue = item[prop].toLowerCase().trim();
		return itemValue.includes(searchValue);
	});
}

export { filterBy };
