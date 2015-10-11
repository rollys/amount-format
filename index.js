'use strict';

var toLocaleStringSupportsOptions =
	typeof Intl === 'object'
	&& typeof Intl.NumberFormat === 'function';

module.exports = format;

function format( locale, amount, currency ){
	var currency = amount.currency || currency;
	var figure = (amount.minor || amount.amount || amount) / 100;

	return (currency ? currency+' ' : '')+figureToLocaleString(figure, locale)
}

function figureToLocaleString( n, locale ){
	if (n.toLocaleString && toLocaleStringSupportsOptions)
		return n.toLocaleString(locale, {
			minimumFractionDigits: 2,
			style: 'decimal',
		});

	return n.toFixed(2);
}