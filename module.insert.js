


  function basicView(that, html){
		var h = document.createElement("span");
		h.className = "fade_out";
		h.innerHTML = that;
		html.appendChild(h);
		setTimeout(function(){h.className = "fade_in"; }, 1);		
	};

 exports.insert = basicView;


