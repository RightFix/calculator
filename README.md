# Calculator

A modern, responsive calculator web app with basic arithmetic, trigonometric functions, and unit converters.

## Features

### Basic Calculator
- Addition, subtraction, multiplication, division
- Parentheses support for order of operations

### Advanced Operations
| Button | Function |
|--------|----------|
| X² | Square |
| √x | Square Root |
| X³ | Cube |
| 3√x | Cube Root |
| % | Percentage |
| ! | Factorial |

### Trigonometric Calculator
- sin, cos, tan (input in degrees)
- sin⁻¹, cos⁻¹, tan⁻¹ (inverse functions, output in degrees)

### Unit Converters
- **Temperature**: Celsius, Fahrenheit, Kelvin
- **Length**: Millimeter, Centimeter, Decimeter, Meter, Kilometer
- **Time**: Seconds, Minutes, Hours, Days, Weeks, Months, Years

### Additional Features
- Keyboard support
- Error handling for invalid operations
- Responsive design (mobile & desktop)
- Dark/Light theme based on screen size

## Usage

Open `index.html` in a web browser.

### Keyboard Shortcuts
| Key | Action |
|-----|--------|
| 0-9 | Enter numbers |
| + - * / | Operators |
| ( ) | Parentheses |
| . | Decimal point |
| Enter or = | Calculate |
| Backspace | Delete last character |
| Escape | Clear all |

### Project Structure
```
Calculator(JS)/
├── index.html          # Main calculator
├── jquery-3.6.3.js     # jQuery library
├── README.md           # This file
├── css/
│   ├── style.css       # Main styles
│   └── converter.css   # Converter styles
├── js/
│   ├── calculator.js   # Main calculator logic
│   ├── trig.js        # Trigonometric functions
│   ├── temp.js        # Temperature converter
│   ├── lengthconverter.js
│   └── timeconverter.js
└── pages/
    ├── trig.html
    ├── tempconverter.html
    ├── lengthconverter.html
    └── timeconverter.html
```

## Error Handling

The calculator handles various error cases:
- Division by zero → "Error"
- Negative square root → "Error"
- Factorial of negative numbers → "Error"
- Factorial of decimals → "Error"
- Invalid expressions → "Error"

## Browser Support

- Chrome
- Firefox
- Safari
- Edge

## License

MIT
