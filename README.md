# Round Progress Bar component for angular

No additional dependencies are required for this component.

## Installation

### Install the package

```npm

npm install bear-round-progress --save

```

### Import BearRoundProgressModule module in your module:
```ts

import { BearRoundProgressModule } from 'bear-round-progress';

@NgModule({
	imports: [
		BearRoundProgressModule
	]
})

```

### Use

```html

<br-bear-round-progress></br-bear-round-progress>

```

### Available configurations

```ts

// This are the default configurations of the component. You can make your own config object with following parameters and pass them as input.
const config = {
    currentNumber: 60, // Current number out of total number
    maxNumber: 100, // Total number which represents the maximum of the bar
    radius: 100, // Radius of the circle
    gradientStart: '#833ab4', // Gradient start color
    gradientEnd: '#fcb045' // Gradient end color
}

```

```html

<br-bear-round-progress [config]="config"></br-bear-round-progress>

```
