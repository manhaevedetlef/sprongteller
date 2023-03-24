//variablen
let aantalsprongen = 0
let versnelling =0
let aantalSprongen=0

//functie
input.onButtonPressed(Button.A,()=>{
    aantalsprongen=0
    basic.showString("go")
})
input.onButtonPressed(Button.B,()=>{
    basic.showString("aantal")
    basic.showNumber(aantalSprongen)

})

basic.forever(function () {
versnelling=input.acceleration(Dimension.Y)
if (versnelling>1000){
    aantalSprongen = aantalSprongen+1
    basic.showIcon(IconNames.Yes)
    basic.pause(100)
    basic.clearScreen()
}	
})
