window.onload = function() {
    const display = document.forms.ans.result;
    
    function safeEval(expr) {
        expr = expr.replace(/[^0-9+\-*/.()]/g, '');
        try {
            if (expr === '' || expr === null) return '';
            if (!/^[0-9+\-*/.()]+$/.test(expr)) return 'Error';
            const result = Function('"use strict";return (' + expr + ')')();
            if (!isFinite(result) || isNaN(result)) {
                return 'Error';
            }
            return Math.round(result * 100000000) / 100000000;
        } catch (e) {
            return 'Error';
        }
    }

    function factorial(n) {
        if (!Number.isInteger(n)) return 'Error';
        if (n < 0) return 'Error';
        if (n > 170) return 'Error';
        if (n === 0 || n === 1) return 1;
        let result = 1;
        for (let i = 2; i <= n; i++) result *= i;
        return result;
    }

    const buttons = {
        'on': '1', 'tw': '2', 'th': '3',
        'fou': '4', 'fiv': '5', 'si': '6',
        'se': '7', 'ei': '8', 'ni': '9',
        'ze': '0', 'do': '.', 'bro': '(',
        'brc': ')', 'mi': '-', 'pl': '+',
        'div': '/', 'mul': '*'
    };

    for (let [id, value] of Object.entries(buttons)) {
        const btn = document.getElementById(id);
        if (btn) {
            btn.onclick = function() {
                if (display.value === 'Error') display.value = '';
                if (value === '.' && display.value.includes('.')) return;
                display.value += value;
            };
        }
    }

    document.getElementById('eq').onclick = function() {
        display.value = safeEval(display.value);
    };

    document.getElementById('squ').onclick = function() {
        const val = safeEval(display.value);
        if (val !== 'Error') {
            display.value = val ** 2;
        } else {
            display.value = 'Error';
        }
    };

    document.getElementById('root').onclick = function() {
        const val = safeEval(display.value);
        if (val >= 0 && val !== 'Error') {
            display.value = Math.sqrt(val);
        } else {
            display.value = 'Error';
        }
    };

    document.getElementById('per').onclick = function() {
        const val = safeEval(display.value);
        if (val !== 'Error') {
            display.value = val * 0.01;
        } else {
            display.value = 'Error';
        }
    };

    document.getElementById('fac').onclick = function() {
        const val = safeEval(display.value);
        display.value = factorial(val);
    };

    document.getElementById('cu').onclick = function() {
        const val = safeEval(display.value);
        if (val !== 'Error') {
            display.value = val ** 3;
        } else {
            display.value = 'Error';
        }
    };

    document.getElementById('curoot').onclick = function() {
        const val = safeEval(display.value);
        if (val >= 0 && val !== 'Error') {
            display.value = Math.round(Math.cbrt(val) * 100000) / 100000;
        } else {
            display.value = 'Error';
        }
    };

    document.getElementById('clear').onclick = function() {
        display.value = '';
    };

    document.addEventListener('keydown', function(e) {
        const key = e.key;
        if (key >= '0' && key <= '9' || key === '.' || key === '(' || key === ')') {
            if (display.value === 'Error') display.value = '';
            display.value += key;
        } else if (key === '+' || key === '-' || key === '*' || key === '/') {
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
