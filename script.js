fetch("https://api.github.com/emojis").then(
	function (data){
		return data.json()
	}
	).then(
	function(data){
		let b = document.querySelector("body")
		for (let i in data){
			let x = document.createElemet("img")
			x.setAttribute("scr",data[i])
			b.appendChild(x)
		}
	}
	)


