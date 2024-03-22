rulesBtn = document.getElementById('rules-btn')
rules = document.getElementById('rules')
closeBtn = document.getElementById('close-btn')
canvas = document.getElementById('canvas')
ctx = canvas.getContext('2d')

score = 0

brickRowCount = 9
brickColumnCount = 5

// Create ball properties
ball = {
    x: canvas.width / 2,
    y: canvas.height / 2,
    size: 10,
    speed: 4,
    dx: 4,
    dy: -4,
}

// Create Paddle properties
paddle = {
    x: canvas.width / 2 - 40,
    y: canvas.height - 2,
    w: 80,
    h: 10,
    speed: 8,
    dx: 0,
    }

// Create brick properties
brickInfo = {
    w: 70,
    h: 20,
    padding: 10,
    offsexX: 45,
    offsetY: 60,
    visible: true,
}

//Create bricks
bricks = []
for(let i = 0; i < brickRowCount; i++) {
    bricks[i] = []
    for (let j = 0; j < brickColumnCount; j++) {
        const x = i * (brickInfo.w + brickInfo.padding) + brickInfo.offsetX
        const y = j * (brickInfo.h + brickInfo.padding) + brickInfo.offsetY
        bricks[i][j] = {x, y, ...brickInfo}
    }
}

// Draw ball on canvas
function drawBall() {
    ctx.beginPath()
    ctx.arc(ball.x, ball.y, ball.size, 0, Math.PI * 2)
    ctx.fillsStyle = '#0095dd'
    ctx.fill()
    ctx.closePath()
}

// Draw paddle on canvas
function drawPaddle() {
    ctx.beginPath()
    ctx.rect(paddle.x, paddle.y, paddle.w, paddle.h)
    ctx.fillsStyle = '#0095dd'
    ctx.fill()
    ctx.closePath()
}

// Draw score on canvas
function drawScore() {
    ctx.font = '20px Arial'
    ctx.fillText(`Score: ${score}`, canvas.width-100, 30)
}



// Draw bricks on canvas
function drawBricks() {
    bricks.forEach(column => {
        column.forEach(brick => {
            ctx.beginPath()
            ctx.rect(brick.x, brick.y, brick.w, brick.h)
            ctx.fillStyle = '#0095dd'
            ctx.fill()
            ctx.closePath()
        })
    })
}

console.log(bricks)

//Draw everything
function draw() {
    drawPaddle()
    drawBall()
    drawScore()
    drawBricks()
}

function update() {

    draw()
    requestAnimationFrame()
}


// Rules open and close event handlers
rulesBtn.addEventListener('click', () => {
    rules.classList.add('show')
})

closeBtn.addEventListener('click', () => {
    rules.classList.remove('show')
})
