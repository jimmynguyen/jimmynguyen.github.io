$(document).ready(() => {
	$('.sectionBody').hide();
	$('.sectionHeader').click((e) => {
		$('#'.concat(e.currentTarget.id.replace('Header', 'Body'))).toggle();
	});
	$('#invertColors').click((e) => {
		$('body').toggleClass('backgroundColorBlack');
		$('body').toggleClass('colorWhite');
		$('.fa').toggleClass('filterInvert100Percent');
	});
});