function traduc(i){

	switch(i) {
	    case 1:
	        
	        window.location="index-es.html";

	        localStorage.removeItem('language');

	        break;
	    case 2:

	         window.location="index.html";

	         localStorage.removeItem('language');

	        break;

	    case 3:
	        
	        window.location="index-por.html";

	        localStorage.removeItem('language');

	        break;

	}
}

