    
       function getParameterByName(name, url) {
        if (!url) url = window.location.href;
        name = name.replace(/[\[\]]/g, '\\$&');
        var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
            results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return '';
        return decodeURIComponent(results[2].replace(/\+/g, ' '));
    }
    
   
    const personalityParam = getParameterByName('personality');
    

    const personalityContainer = document.getElementById('personality');
    if (personalityParam) {
        personalityContainer.innerHTML = `<p>Tu personalidad es: ${personalityParam}</p>`;
    } else {
        personalityContainer.innerHTML = `<p>No se pudo determinar la personalidad.</p>`;
    }
    