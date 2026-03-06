window.onload = function() {
    const display = document.forms.ans.result;

    function safeEval(expr) {
        expr = expr.replace(/[^0-9+\-*/.()]/g, '');
        try {
            if (expr === '' || expr === null) return '';
            const result = Function('"use strict";return (' + expr + ')')();
            if (!isFinite(result) || isNaN(result)) return 'Error';
            return Math.round(result * 100000000) / 100000000;
        } catch (e) {
            return 'Error';
        }
    }

    const numButtons = {
        'on': '1', 'tw': '2', 'th': '3',
        'fou': '4', 'fiv': '5', 'si': '6',
        'se': '7', 'ei': '8', 'ni': '9',
        'ze': '0', 'do': '.', 'bro': '(',
        'brc': ')'
    };

    for (let [id, value] of Object.entries(numButtons)) {
        const btn = document.getElementById(id);
        if (btn) {
            btn.onclick = function() {
                if (display.value === 'Error') display.value = '';
                if (value === '.' && display.value.includes('.')) return;
                display.value += value;
            };
        }
    }

    const ops = {
        'mi': '-', 'pl': '+', 'div': '/', 'mul': '*'
    };

    for (let [id, value] of Object.entries(ops)) {
        const btn = document.getElementById(id);
        if (btn) {
            btn.onclick = function() {
                if (display.value === 'Error') display.value = '';
                display.value += value;
            };
        }
    }

    document.getElementById('eq').onclick = function() {
        display.value = safeEval(display.value);
    };

    document.getElementById('clear').onclick = function() {
        display.value = '';
    };

    document.getElementById('sine').onclick = function() {
        const val = safeEval(display.value);
        if (val !== 'Error') {
            display.value = Math.sin(val * Math.PI / 180);
        } else {
            display.value = 'Error';
        }
    };

    document.getElementById('cos').onclick = function() {
        const val = safeEval(display.value);
        if (val !== 'Error') {
            display.value = Math.cos(val * Math.PI / 180);
        } else {
            display.value = 'Error';
        }
    };

    document.getElementById('tan').onclick = function() {
        const val = safeEval(display.value);
        if (val !== 'Error') {
            display.value = Math.tan(val * Math.PI / 180);
        } else {
            display.value = 'Error';
        }
    };

    document.getElementById('asin').onclick = function() {
        const val = safeEval(display.value);
        if (val >= -1 && val <= 1 && val !== 'Error') {
            display.value = Math.asin(val) * 180 / Math.PI;
        } else {
            display.value = 'Error';
        }
    };

    document.getElementById('acos').onclick = function() {
        const val = safeEval(display.value);
        if (val >= -1 && val <= 1 && val !== 'Error') {
            display.value = Math.acos(val) * 180 / Math.PI;
        } else {
            display.value = 'Error';
        }
    };

    document.getElementById('atan').onclick = function() {
        const val = safeEval(display.value);
        if (val !== 'Error') {
            display.value = Math.atan(val) * 180 / Math.PI;
        } else {
            display.value = 'Error';
        }
    };

    document.addEventListener('keydown', function(e) {
        const key = e.key;
        if (key >= '0' && key <= '9' || key === '.' || key === '(' || key === ')' || key === '-') {
            if (display.value === 'Error') display.value = '';
            display.value += keyack;
        } else if (key === '+' || key === '*' || key === '/') {
            if (display.value === 'Error') display.value = '';
            display.value += key;
        } else if (key === 'Enter' || key === '=') {
            e.preventDefault();
            display.value = safeEval(display.value);
        } else if (key === 'Backspace') {
            display.value = display.value.slice(0, -1);
        } else if (key === 'Escape') {
            display.value = '';
        }
    });
};
