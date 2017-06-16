'use strict'

var hasHover

if (typeof global.matchMedia === 'function') {
	hasHover = global.matchMedia('(hover: hover)').matches || global.matchMedia('(any-hover: hover)').matches
}
else {
	hasHover = false
}

module.exports = hasHover
