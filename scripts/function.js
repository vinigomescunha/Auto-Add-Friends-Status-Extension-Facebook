injectSource = function( s ) {

	var elem = document.createElement("script");
	elem.type = "text/javascript";
	elem.innerHTML = s;
	return document.head.appendChild(elem);
}

function AutoAccept( l ) {

	if ( l == 'url' ) {
		var url = "https://www.facebook.com/reqs.php";
		window.location = url;
	}

	for ( i = 0; i < document.getElementsByName("actions[accept]").length; i++ ) {
		document.getElementsByName("actions[accept]")[i].click();
		void(0);
	}
}

injectSource( AutoAccept );

function loadAutoAccept() {

	if ( window.location.pathname == '/reqs.php' ) {
		AutoAccept();
	}

	var e = document.createElement('div');
	e.innerHTML = "<div style='max-width:100px;width:100%;bottom: 5px;position:fixed;left: 5px;text-align:left;z-index:999999;color:#fff;opacity: 0.7;background: #3B5998;color: #fff;border: 1px solid #3B5998;cursor: pointer;margin: 0px 4px 0px 4px;text-align:center'><button style='background:#3B5998;color:#fff;border:1px solid #3B5998;cursor:pointer;padding: 7px;' onclick='AutoAccept(\"url\");'>Accept All Friends</button></div>";
	document.body.appendChild(e);
}

window.onload = loadAutoAccept();

