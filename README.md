# dms-to-decimal
A JavaScript library for converting degrees, minutes, and seconds to decimal

# Installation

```
    npm install dms-to-decimal
```

or 

```
    yarn add dms-to-decimal
```

# Example

```
    import dms2Decimal from 'dms-to-decimal';

    const degree = 46;
    const minutes = 59;
    const seconds = 5;
    const direction = 'N';

    const converDms2Decimal = dms2Decimal(degree, minutes, seconds, direction);

    console.log(converDms2Decimal); // Output: 46.984722222222224
```