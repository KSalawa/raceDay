const CRYSTAL_SIZE = 500
const SIDES = 6
let PALETTE = []

function setup(){
    createCanvas(530, 530, SVG)

    PALETTE = [
        color(255, 52, 154), //pink
        color(4, 0, 152), //blue
        'limegreen'
    ]

    noLoop()
    angleMode(DEGREES)
    rectMode(CENTER)
}

function draw(){
    const simpleLines = new SimpleLines()
    simpleLines.render()

    const circles = new Circles()
    circles.render()

    const outlineShape = new OutlineShape()
    outlineShape.render()

    //testLines()
}

