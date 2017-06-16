'use strict'

const hasHover = require('./')

console.log(hasHover)

if (hasHover) throw Error('Node should not have hover')
