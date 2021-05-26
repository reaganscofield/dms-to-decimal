# dms-to-decimal
A JavaScript library for converting degrees, minutes, and seconds to decimal

# Installation

```
    $ npm install dms-to-decimal
```

or 

```
    $ yarn add dms-to-decimal
```

# Example

```JavaScript
    import { Decimal2DMS, DMS2Decimal } from 'dms-to-decimal';
    
    // Converting Degrees Minutes Seconds to Decimal 
    const degree = 46;
    const minutes = 59;
    const seconds = 5;
    const direction = 'N';

    const converDms2Decimal = DMS2Decimal(degree, minutes, seconds, direction);
    console.log(converDms2Decimal); // Output: 46.984722222222224

    // Converting Decimal to Degrees Minutes Seconds
    const type = 'longitude';
    const decimal = -122.90222222222222;

    const converDecimal2DMS = Decimal2DMS(decimal, type);
    console.log(converDecimal2DMS) // Output: 122°54'7"W
```