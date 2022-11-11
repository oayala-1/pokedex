let textBox = document.getElementById("pokeName");

textBox.addEventListener("keydown", function(event){
    if(event.keyCode == 13){
        fetchPokemon();
    }
})

const fetchPokemon = () => {
    const pokeNameInput = document.getElementById("pokeName");
    let pokeName = pokeNameInput.value;
    pokeName = pokeName.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
    fetch(url).then((res) => {
        if (res.status != "200") {
            console.log(res);
            pokeImage("./pikachu-sad.gif")
            hpStats(0);
            attackStats(0);
            defenseStats(0);
            speedStats(0);
        }
        else {
            return res.json();
        }
    }).then((data) => {
        if (data) {
            console.log(data);
            let pokeImg = data.sprites.front_default;
            pokeImage(pokeImg);
            console.log(pokeImg);
            let hpStat = data.stats[0].base_stat;
            hpStats(hpStat);
            let attackStat = data.stats[1].base_stat;
            attackStats(attackStat);
            let defenseStat = data.stats[2].base_stat;
            defenseStats(defenseStat);
            let speedStat = data.stats[5].base_stat;
            speedStats(speedStat);
            let name = data.forms[0].name;
            name = name.charAt(0).toUpperCase() + name.slice(1);
            nameChange(name);
            
        }
    });
}




const pokeImage = (url) => {
    const pokePhoto = document.getElementById("pokeImg");
    pokePhoto.src = url;
}

const hpStats = (hpStat) =>{
    const hpValue = document.getElementById("hp-value");
    hpValue.innerHTML = hpStat;
}

const attackStats = (attackStat) =>{
    const attackValue = document.getElementById("attack-value");
    attackValue.innerHTML = attackStat;
}

const defenseStats = (defenseStat) =>{
    const defenseValue = document.getElementById("defense-value");
    defenseValue.innerHTML = defenseStat;
}

const speedStats = (speedStat) =>{
    const speedValue = document.getElementById("speed-value");
    speedValue.innerHTML = speedStat;
    console.log(`${speedValue.innerHTML}`)
}

const nameChange = (name) => {
    const nameStat = document.getElementById("name");
    nameStat.innerHTML = name;
}

