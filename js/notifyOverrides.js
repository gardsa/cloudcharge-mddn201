$.notify.defaults({
	className: "success",
	autoHide: false,
	autoHideDelay: 3000,
	arrowShow: false,
	showAnimation: 'slideDown',
	showDuration: 300,
	hideAnimation: 'slideUp',
	hideDuration: 300,
	gap: 10
});

$.notify.addStyle('addBankSuccess', {
	html: "<div><span data-notify-text/></div>",
	classes: {
		base: {
			"font-family" : "'Gill Sans', sans-serif",
			"font-weight" : "100",
			"width" : "150px",
			"padding": "10px 20px 10px 20px",
		  "background-color": "#84c441",
		  "color": "#fff",
		  "border": "solid 2px #fff",
		  "border-radius": "15px"
		}
	}
});
