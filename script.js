fetch("https://api.github.com/emojis").then(
	function (data){
		return data.json()
	}
	).then(
	function(data){
		let b = document.querySelector("body")
		for (let i in data){
			let x = document.createElement("img")
			x.setAttribute("src",data[i])
			b.appendChild(x)
		}
	}
	)


