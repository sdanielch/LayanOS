requirejs.config({
baseUrl: "js",
paths: {
	jquery: [
    "https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min",
    "lib/jquery-2.1.1.min"
	],
	pace: "lib/pace.min",
	jqueryui: [
    "https://ajax.googleapis.com/ajax/libs/jqueryui/1.11.2/jquery-ui.min",
    "lib/jquery-ui.min"
	]
} ,
shim: {
	jqueryui: {
		exports: "$",
		deps: ["jquery"]
	}
}
});