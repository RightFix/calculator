window.onload = function() {
    let c = document.getElementById("celcius");
    let f = document.getElementById("fahrenheit");
    let k = document.getElementById("kelvin");
    
    function isEmpty(val) {
        return val === '' || val === null || isNaN(val);
    }
    
    c.oninput = function() {
        if (isEmpty(c.value)) {
            f.value = '';
            k.value = '';
            return;
        }
        let cv = parseFloat(c.value);
        k.value = cv + 273;
        f.value = (cv * 9/5) + 32;
    };
    
    k.oninput = function() {
        if (isEmpty(k.value)) {
            c.value = '';
            f.value = '';
            return;
        }
        let kv = parseFloat(k.value);
        c.value = kv - 273;
        f.value = ((kv - 273) * 9/5) + 32;
    };
    
    f.oninput = function() {
        if (isEmpty(f.value)) {
            c.value = '';
            k.value = '';
            return;
        }
        let fv = parseFloat(f.value);
        k.value = ((fv - 32) * 5/9) + 273;
        c.value = (fv - 32) * 5/9;
    };
};
