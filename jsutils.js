/**
 * random function
 */
export function random(chars) {
	if (!chars) chars = 5;
	var res = "1";
	for (var i = 0; i < chars; i++) {
		res += 1;
	}
	return Math.floor(Math.random() * parseInt(res));
}
