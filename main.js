(function(){
	const $ = (elem) => document.querySelector(elem);

	const pause = () => {
		if($("#video").paused){
			$("#video").play();
			$("#pause").innerHTML = "<i class='fa fa-pause'></i>";
		}else{
			$("#video").pause();
			$("#pause").innerHTML = "<i class='fa fa-play'></i>";
		}
	}

	const tempo = () => {
		const loop = $("#video").currentTime / $("#video").duration;
		
		$(".transi").style.width = loop * 100 + "%";

		if ($("#video").currentTime.toFixed(0) < 10) {
			$(".init").innerHTML = `00:0${$("#video").currentTime.toFixed(0)}`;
		}else{
			$(".init").innerHTML = `00:${$("#video").currentTime.toFixed(0)}`;
		}
		
		$(".fin").innerHTML = `00:${$("#video").duration.toFixed(0)}`;
		
		if ($("#video").ended) {
			$("#pause").innerHTML = "<i class='fa fa-play'></i>";
		} 
	}

	const volume = (e) => {
		$("#video").volume = e.currentTarget.value / 100;
	}

	const addFilm = (elem) => {
		const film = document.querySelectorAll("video source");
		film.forEach(elem => {
			alert(elem.src);
		})
	}

	$("#pause").addEventListener("click", pause);
	$("#video").addEventListener("timeupdate", tempo);
	// $(".fun"). addEventListener("click", addFilm);
	// $("#vol").addEventListener("change", volume);	
})();









