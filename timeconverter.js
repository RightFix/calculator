window.onload = function()
{
let s = document.getElementById("sec");
let m = document.getElementById("min");
let h = document.getElementById("hr");
let d = document.getElementById("day");
let w = document.getElementById("week");
let mth = document.getElementById("mth");
let y = document.getElementById("year");
s.oninput = function(){
    m.value=s.value / 60;
    h.value= s.value / 3600;
    d.value= s.value / (60 * 60 * 24);
    w.value= s.value / (60 * 60 * 24 * 7);
    mth.value= (s.value/(365 * 60 *60 *24)) *12;
    y.value= s.value / (60 * 60 * 24 * 365);};
    m.oninput = function(){
    s.value= m.value * 60;
    h.value= m.value / 60;
    d.value= m.value / (60 * 24);
    w.value= m.value / (60 * 24 * 7);
    mth.value= (m.value /(60 *24 * 365))*12;
    y.value= m.value/ (60 * 24 * 365);};
    h.oninput = function(){
    m.value= h.value * 60;
    s.value= h.value * 60 * 60;
    d.value= h.value /24;
    w.value= h.value / (24*7);
    mth.value= (h.value/( 24 * 365))* 12;
    y.value= h.value/ ( 24 * 365);};
    d.oninput = function(){
    m.value= d.value * 24 *60;
    h.value= d.value * 24;
    s.value= d.value *60 *60 *24;
    w.value= d.value / 7;
    mth.value= (d.value /365) *12;
    y.value= d.value / 365;};
    w.oninput = function(){
    m.value= w.value * 7 * 24 * 60;
    h.value= w.value * 7 *24;
    s.value= w.value * 7 * 24 * 3600;
    d.value= w.value * 7;
    mth.value= w.value * 0.231;
    y.value=  w.value / 52;};
    mth.oninput = function(){
    m.value= (mth.value * 60 * 24 * 365) / 12;
    h.value= (mth.value * 24 * 365) / 12;
    d.value= (mth.value * 365  ) / 12;
    w.value=  mth.value * 4.3333333334;
    s.value= (mth.value * 60 *60 *24 *365 ) / 12;
    y.value= mth.value / 12;};
    y.oninput = function(){
    m.value= y.value * 60 * 24 *365;
    h.value= y.value * 24 * 365;
    d.value= y.value * 365;
    w.value= y.value * 52;
    mth.value= y.value * 12;
    s.value= y.value * 60 *60 *24 * 365;};
};