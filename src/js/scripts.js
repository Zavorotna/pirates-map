function teoremPifagor (x1, x2, y1, y2) {
    const dx = x2 - x1,
        dy = y2 - y1
    return Math.sqrt(dx * dx + dy * dy)
}

function rand (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

window.addEventListener('load', function() {
    const mapImage = document.querySelector('#mapImage'),
        prizeX = rand(0, mapImage.width - 80),
        prizeY = rand(0, mapImage.height - 80),
        coordinate = document.querySelector('#coordinate'),
        coordinateClick = document.querySelector('#click'),
        prize = document.querySelector("#prize"),
        symbolsContainer = document.querySelector('#symbolsContainer')

    let click = 0
        
        prize.style.top = prizeY + "px"
        prize.style.left = prizeX + "px"
        
        // console.log('Координати скарбу: x=' + prizeX + ', y=' + prizeY)

    mapImage.addEventListener ('click', function(event) { 
        click++
        if (click >= 15) {
            alert ("Гру закінено, тобі не вдалося знайти скарб")
            return
        }
        const imgCoordinate = mapImage.getBoundingClientRect(),
            x = (event.clientX - imgCoordinate.left).toFixed(0),
            y = (event.clientY - imgCoordinate.top).toFixed(0),
            symbolClick = document.createElement('span')
        symbolClick.className = 'map-symbol'
        console.log(symbolClick)
        symbolClick.style.top = y + "px"
        symbolClick.style.left = x + "px"
        symbolClick.textContent = 'X'
        coordinateClick.innerHTML += `<p>Координати кліка: x= ${x}, y= ${y}</p>`
        const distancePrize = teoremPifagor(prizeX, x, prizeY, y)
        coordinate.innerHTML = `Вiдстань до скарбу  ${distancePrize.toFixed(0)} m`
        if (distancePrize <= 25) {
            prize.style.display = "block"
            alert("Вітаю! Ти справжній пірат, ти знайшов скарб")
        }
        symbolsContainer.appendChild(symbolClick)

        function calculateAngle(x1, y1, x2, y2) {
            const dx = x2 - x1;
            const dy = y2 - y1;
        
            // Обчислення арктангенса та перетворення в градуси
            let angleDeg = (Math.atan2(dy, dx) * 180) / Math.PI;
        
            // Забезпечення кута від 0 до 360 градусів
            if (angleDeg < 0) {
                angleDeg += 360;
            }
        
            return angleDeg;
        }
        

        // Виклик функції та виведення результату
        const angle = calculateAngle(prizeX, prizeY, x, y);
        console.log(`Кут між скарбом і кліком: ${angle} градусів`);

    })
    // console.log(document.body.childNodes)
    // console.log(document.body.children)
})

