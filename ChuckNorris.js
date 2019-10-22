function fetchChuckJSON() {
    const url = `https://api.chucknorris.io/jokes/random`;
    axios.get(url)
      .then(function(res) {
        return res.data; 
      })
      .then(function(joke) {
        console.log('data decoded from JSON:', joke);
  
        const ChuckHtml = `
          <p><strong>${joke.value}</strong></p>
          <img src="${joke.icon_url}" />
        `;
        document.querySelector('#chuck-norris').innerHTML = ChuckHtml;
      });
  }

  fetchChuckJSON();