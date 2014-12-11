



	function iteratorDuff(that, data){
	
		var that = that,
			data = data,
			l = data.length, 
			i = l % 8;
			
		while(i--){that(data[i]); }

		i = Math.floor(l / 8);
		l -= 1;
		
		while(i--){
			that(data[l--]);that(data[l--]);
			that(data[l--]);that(data[l--]);
			that(data[l--]);that(data[l--]);
			that(data[l--]);that(data[l--]);
		}
		
		return iteratorDuff;
	}

exports.duff = iteratorDuff;


