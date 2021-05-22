export const ucTitle = string => {
	const articles = ['a', 'an', 'and', 'the', 'of', 'all', 'in']
	let text = string.toLowerCase().split(' ')

	for (let i = 0; i < text.length; i++) {
		if (text[0] || !inArray(text[i], articles)) {
			text[i] = text[i][0].toUpperCase() + text[i].substr(1)
		}
	}

	return text.join(' ')
}

export const inArray = (needle, haystack) => {
	const length = haystack.length
	for (var i = 0; i < length; i++) {
		if (haystack[i] == needle) return true
	}
	return false
}
