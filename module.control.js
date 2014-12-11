




function control(run){

	var T, 
		w_hash, 
		run = run;

	function get_hashTexte(){
		var that = window.location.hash,
			i = that.indexOf("#"); // FIREFOX
		return i < 0 ? that : that.slice(i+1);
	}


	function control(texte, callback){
		clearTimeout(T);
		
		var that = typeof texte === "string" ? texte.trim() : "",
			new_w_hash = that; 

		if ( w_hash !== new_w_hash ) {
			run(that);
			w_hash = new_w_hash;	
			window.location.hash = new_w_hash;
			typeof callback === "function" && (callback());
		}
		
		return that;
	}


	control.delai = function(texte, delai){
		clearTimeout(T);
		var delai = typeof delai === "number" ? delai : 200;
		T = setTimeout(function(){control(texte); }, delai);
	};

	control.hash = function(){
		var that = get_hashTexte();
		if(that !== w_hash){return control(decodeURIComponent(that)); }
		else{return false; }
	}

	control.stop = function(){clearTimeout(T); };
	
	
	control.get_hashTexte = get_hashTexte;


  return control;
}


 exports.control = control;
 
 
 
 
