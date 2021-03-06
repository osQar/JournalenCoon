var Coon = Coon || {} ;

Coon.RememberLastPage = (function(RememberLastPage, Navbar, Utils){
	// Private vars
	var _baseUrl = Utils.getBaseUrl(true);

	// Public Methods
	RememberLastPage.init = function(){
		logPage(interceptRelog);
	};

	// Private methods
	/*jshint unused:false*/
	var logPage = function(cb){
		chrome.runtime.sendMessage({ action : 'rememberThisPage', baseUrl: _baseUrl }, function( res ) {
			cb(res.lastPage);
		});
	};

	/*jshint unused:false*/
	var interceptRelog = function(url) {
		Navbar.afterLogin(function(){
			Navbar.redirectUrl = url;
		});
	};

	return RememberLastPage;

})( Coon.RememberLastPage || {} , Coon.Navbar, Coon.Utils);
