var jPanelMenu = {};
$(function() {
	$('pre').each(function(i, e) {hljs.highlightBlock(e)});
	jPanelMenu = $.jPanelMenu({
		menu: 'header.main nav'
	});
	jPanelMenu.on();
	$(document).on('click',jPanelMenu.menu + ' li a',function(e){
		if ( jPanelMenu.isOpen() ) { jPanelMenu.close(); }
	});
	// var jR = jRespond([
	// 	{
	// 		label: 'small',
	// 		enter: 0,
	// 		exit: 800
	// 	},{
	// 		label: 'medium',
	// 		enter: 800,
	// 		exit: 1000
	// 	},{
	// 		label: 'large',
	// 		enter: 1000,
	// 		exit: 10000
	// 	}
	// ]);
	// jR.addFunc({
	// 	breakpoint: 'small',
	// 	enter: function() {
	// 		jPanelMenu.on();
	// 	},
	// 	exit: function() {
	// 		jPanelMenu.off();
	// 	}
	// });
});