window.onload = function() {
    let mi = document.getElementById("mm");
    let ce = document.getElementById("cm");
    let de = document.getElementById("dm");
    let met = document.getElementById("me");
    let ki = document.getElementById("km");
    
    function isEmpty(val) {
        return val === '' || val === null || isNaN(val);
    }
    
    mi.oninput = function() {
        if (isEmpty(mi.value)) {
            ce.value = de.value = met.value = ki.value = '';
            return;
        }
        let v = parseFloat(mi.value);
        ce.value = v / 10;
        de.value = v / 100;
        met.value = v / 1000;
        ki.value = v / 1000000;
    };
    
    ce.oninput = function() {
        if (isEmpty(ce.value)) {
            mi.value = de.value = met.value = ki.value = '';
            return;
        }
        let v = parseFloat(ce.value);
        mi.value = v * 10;
        de.value = v / 10;
        met.value = v / 100;
        ki.value = v / 100000;
    };
    
    de.oninput = function() {
        if (isEmpty(de.value)) {
            mi.value = ce.value = met.value = ki.value = '';
            return;
        }
        let v = parseFloat(de.value);
        ce.value = v * 10;
        mi.value = v * 100;
        met.value = v / 10;
        ki.value = v / 10000;
    };
    
    met.oninput = function() {
        if (isEmpty(met.value)) {
            mi.value = ce.value = de.value = ki.value = '';
            return;
        }
        let v = parseFloat(met.value);
        ce.value = v * 100;
        de.value = v * 10;
        mi.value = v * 1000;
        ki.value = v / 1000;
    };
    
    ki.oninput = function() {
        if (isEmpty(ki.value)) {
            mi.value = ce.value = de.value = met.value = '';
            return;
        }
        let v = parseFloat(ki.value);
        ce.value = v * 10000;
        de.value = v * 100000;
        met.value = v * 1000;
        mi.value = v * 1000000;
    };
};
