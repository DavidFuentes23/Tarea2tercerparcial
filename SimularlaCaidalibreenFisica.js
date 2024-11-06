const g=9.81; //Constante
var y=12; //Variable inicialmentes 12
var t=0;
let dt=0.1;
while (y>0){
    y = yo - 0.5*9.81*t**2;
    t += dt;
    console.log("y(t=", t, ") = ", y);

}