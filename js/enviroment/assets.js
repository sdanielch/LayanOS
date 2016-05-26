function change_icon(str2,ico) {
   $( str2 ).append('<img src="'+ico+'" style="width: 64px; height: 64px; text-align: center;" />')
}

function Router() {
	var history = [];
	var route = '/';
	var position = 0;

	var addHistory = function(route) {
		this.history.push(route);
	};

	var removeHistory = function(index) {
		var left = this.history.slice(0, index);
		var right = this.history.slice(index, this.history.length - 1);
		this.history = left + right;
	};

	var setRoute = function(route) {
		this.route = route;
	};

	var getRoute = function() {
		return this.route;
	};

	var setPosition = function(pos) {
		this.position = pos;
	};
	
	var getPosition = function() {
		return this.position;
	};

	var incrementPosition = function() {
		this.position++;
	};

	var getFragment = function(pos) {
		var fragments = this.getRoute().split('/');
		if(pos <= fragments.length) {
			return fragments[pos];
		}
	};

	var addFolder = function(folder) {
		var route = this.getRoute();
		this.setRoute(route +'/'+ folder);
	};

	var deleteLastFolder = function() {
		if(this.getRoute() === '/') {
			return;
		}

		var fragments = this.getRoute().split('/');
		this.setRoute(fragments.slice(0, fragments.length - 1).join('/'));
	};

}

var ruta = new Router();
// al hacer click se añade el nombre de la carpeta
//ruta.addFolder('nombreCarpeta');

