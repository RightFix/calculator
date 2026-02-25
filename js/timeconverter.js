window.onload = function() {
    let s = document.getElementById("sec");
    let m = document.getElementById("min");
    let h = document.getElementById("hr");
    let d = document.getElementById("day");
    let w = document.getElementById("week");
    let mth = document.getElementById("mth");
    let y = document.getElementById("year");
    
    function isEmpty(val) {
        return val === '' || val === null || isNaN(val);
    }
    
    function clearAll() {
        m.value = h.value = d.value = w.value = mth.value = y.value = '';
    }
    
    s.oninput = function() {
        if (isEmpty(s.value)) {
            clearAll();
            return;
        }
        let v = parseFloat(s.value);
        m.value = v / 60;
        h.value = v / 3600;
        d.value = v / (60 * 60 * 24);
        w.value = v / (60 * 60 * 24 * 7);
        mth.value = (v / (365 * 60 * 60 * 24)) * 12;
        y.value = v / (60 * 60 * 24 * 365);
    };
    
    m.oninput = function() {
        if (isEmpty(m.value)) {
            clearAll();
            return;
        }
        let v = parseFloat(m.value);
        s.value = v * 60;
        h.value = v / 60;
        d.value = v / (60 * 24);
        w.value = v / (60 * 24 * 7);
        mth.value = (v / (60 * 24 * 365)) * 12;
        y.value = v / (60 * 24 * 365);
    };
    
    h.oninput = function() {
        if (isEmpty(h.value)) {
            clearAll();
            return;
        }
        let v = parseFloat(h.value);
        m.value = v * 60;
        s.value = v * 60 * 60;
        d.value = v / 24;
        w.value = v / (24 * 7);
        mth.value = (v / (24 * 365)) * 12;
        y.value = v / (24 * 365);
    };
    
    d.oninput = function() {
        if (isEmpty(d.value)) {
            clearAll();
            return;
        }
        let v = parseFloat(d.value);
        m.value = v * 24 * 60;
        h.value = v * 24;
        s.value = v * 60 * 60 * 24;
        w.value = v / 7;
        mth.value = (v / 365) * 12;
        y.value = v / 365;
    };
    
    w.oninput = function() {
        if (isEmpty(w.value)) {
            clearAll();
            return;
        }
        let v = parseFloat(w.value);
        m.value = v * 7 * 24 * 60;
        h.value = v * 7 * 24;
        s.value = v * 7 * 24 * 3600;
        d.value = v * 7;
        mth.value = v * 0.231;
        y.value = v / 52;
    };
    
    mth.oninput = function() {
        if (isEmpty(mth.value)) {
            clearAll();
            return;
        }
        let v = parseFloat(mth.value);
        m.value = (v * 60 * 24 * 365) / 12;
        h.value = (v * 24 * 365) / 12;
        d.value = (v * 365) / 12;
        w.value = v * 4.3333333334;
        s.value = (v * 60 * 60 * 24 * 365) / 12;
        y.value = v / 12;
    };
    
    y.oninput = function() {
        if (isEmpty(y.value)) {
            clearAll();
            return;
        }
        let v = parseFloat(y.value);
        m.value = v * 60 * 24 * 365;
        h.value = v * 24 * 365;
        d.value = v * 365;
        w.value = v * 52;
        mth.value = v * 12;
        s.value = v * 60 * 60 * 24 * 365;
    };
};
