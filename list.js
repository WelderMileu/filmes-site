const list = [
	{
		"src":"video02.mp4",
		"star": 3.5,
		"description":"Um dia na Praia",
		"visu": 600000
	},
	{
		"src":"video03.mp4",
		"star": 1.5,
		"description":"Primavera no Recanto",
		"visu": 1330000
	},
	{
		"src":"video04.mp4",
		"star": 3.5,
		"description":"Ondas Infinitas",
		"visu": 10000000
	},
	{
		"src":"video05.mp4",
		"star": 2,
		"description":"Céu Nublado",
		"visu": 60000
	}
];

const listar = document.querySelector("#listar");

list.map(elem => {
	const validate = () => {
		switch(elem.star){
			case 1:
				return `
						<i class='fa fa-star'></i>
						<i class="fa fa-star-o"></i>
						<i class="fa fa-star-o"></i>
						<i class="fa fa-star-o"></i>
						<i class="fa fa-star-o"></i>
						
						`;
				break;
			case 1.5:
				return `
					<i class='fa fa-star'></i>
					<i class="fa fa-star-half-o"></i>
					<i class="fa fa-star-o"></i>
					<i class="fa fa-star-o"></i>
					<i class="fa fa-star-o"></i>
					
					`;
				break;
			case 2:
				return `
					<i class='fa fa-star'></i>
					<i class='fa fa-star'></i>
					<i class="fa fa-star-o"></i>
					<i class="fa fa-star-o"></i>
					<i class="fa fa-star-o"></i>
					
					`;
				break;
			case 2.5:
				return `
					<i class='fa fa-star'></i>
					<i class='fa fa-star'></i>
					<i class="fa fa-star-half-o"></i>
					<i class="fa fa-star-o"></i>
					<i class="fa fa-star-o"></i>
					
					`;
				break;
			case 3:
				return `
					<i class='fa fa-star'></i>
					<i class='fa fa-star'></i>
					<i class='fa fa-star'></i>
					<i class="fa fa-star-o"></i>
					<i class="fa fa-star-o"></i>
					
					`;
				break;
			case 3.5:
				return `
					<i class='fa fa-star'></i>
					<i class='fa fa-star'></i>
					<i class='fa fa-star'></i>
					<i class="fa fa-star-half-o"></i>
					<i class="fa fa-star-o"></i>
					
					`;
				break;
			case 4:
				return `
					<i class='fa fa-star'></i>
					<i class='fa fa-star'></i>
					<i class='fa fa-star'></i>
					<i class='fa fa-star'></i>
					<i class="fa fa-star-o"></i>
					
					`;
				break;
			case 4.5:
				return `
					<i class='fa fa-star'></i>
					<i class='fa fa-star'></i>
					<i class='fa fa-star'></i>
					<i class='fa fa-star'></i>
					<i class="fa fa-star-half-o"></i>
					
					`;
				break;
			case 5:
				return `
					<i class='fa fa-star'></i>
					<i class='fa fa-star'></i>
					<i class='fa fa-star'></i>
					<i class='fa fa-star'></i>
					<i class='fa fa-star'></i>
					
					`;
				break;
			default:
				return `
					<i class="fa fa-star-o"></i>
					<i class="fa fa-star-o"></i>
					<i class="fa fa-star-o"></i>
					<i class="fa fa-star-o"></i>
					<i class="fa fa-star-o"></i>
				`;
		}
	}
	listar.innerHTML += `
				<div class="fun" id="${elem.visu}" onClick="addFilm('${elem.src}')">
					<video width="100" height="100">
						<source src="${elem.src}" type="video/mp4">
					</video>
					<div>
						<p>${elem.description}</p>
						<span>
							${validate()}
						</span>
						<p>${elem.visu.toLocaleString()} visulizações</p>
					</div>
				</div>`
});

// <i class="fa fa-star"></i>
// <i class="fa fa-star"></i>
// <i class="fa fa-star"></i>
// <i class="fa fa-star-half-o"></i>
// <i class="fa fa-star-o"></i>