# PDF Generator

A simple yet powerful PDF generation tool written in TypeScript.

## Installation

```bash
npm install pdf-generator
```

## Usage

```javascript
const PDFGenerator = require("pdf-generator");

// Create a new PDFGenerator instance
const pdfGenerator = new PDFGenerator();

// Add content to the PDF
pdfGenerator
  .addText("Hello, this is a PDF generated using PDFGenerator!", {
    fontSize: 20,
    align: "center",
  })
  .addPage()
  .addText("This is page 2 of the PDF.", {
    y: 100,
    align: "center",
  });

// Save the PDF
pdfGenerator.save();
```

## API

### `PDFGenerator(options?: PDFGeneratorOptions)`

Creates a new instance of PDFGenerator with optional options.

- `options.filename`: Specify the filename for the generated PDF. Default is `'output.pdf'`.

### `addText(text: string, options?: TextOptions): PDFGenerator`

Adds text to the PDF document.

- `text`: The text content to add.
- `options`: Optional parameters for text formatting, such as fontSize, font, alignment, etc.

### `addPage(): PDFGenerator`

Adds a new page to the PDF document.

### `save(): void`

Saves the PDF document to the specified filename.

## Example

Check the `example` directory for an example usage of the PDFGenerator.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
# Utility Library

This is a JavaScript utility library that provides various functions for common tasks such as handling dates and times, generating random data, and manipulating strings.

## Installation

You can install this package via npm:

```bash
npm install utility-library-js
```

## Usage

```javascript
const utility = require('utility-library-js');

// Get current date in YYYY-MM-DD format
const currentDate = utility.getCurrentDate();
console.log(currentDate); // Output: '2024-03-07'

// Generate a random integer between 1 and 100
const randomInt = utility.getRandomInt(1, 100);
console.log(randomInt);

// Generate a random string of length 10
const randomString = utility.getRandomString();
console.log(randomString);

// Capitalize the first letter of a string
const capitalizedString = utility.capitalize('hello');
console.log(capitalizedString); // Output: 'Hello'

// Trim whitespace from both ends of a string
const trimmedString = utility.trim('   example   ');
console.log(trimmedString); // Output: 'example'

// Check if a string contains a substring
const containsSubstring = utility.contains('javascript', 'script');
console.log(containsSubstring); // Output: true
```

## Functions

- `getCurrentDate(format)`: Get the current date in the specified format (default: 'YYYY-MM-DD').
- `getRandomInt(min, max)`: Generate a random integer within the specified range.
- `getRandomString(length)`: Generate a random string of specified length (default: 10).
- `capitalize(str)`: Capitalize the first letter of a string.
- `trim(str)`: Trim whitespace from both ends of a string.
- `contains(str, substring)`: Check if a string contains a substring.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
