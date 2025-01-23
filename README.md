# Currency Genie

Currency Genie is a web application that allows users to convert between different currencies using live exchange rates. The application is built with React and uses custom hooks for fetching and managing currency data.

## Demo

Check out the live demo of the app: [Currency Genie](https://currencygenie.netlify.app/)

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
- [Installation](#installation)
- [Usage](#usage)
- [Custom Hook](#custom-hook)
- [Optimization](#optimization)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

## Features

- Convert between multiple currencies
- Fetches live exchange rates from Open Exchange Rates API
- Swap currency options with ease
- User-friendly interface

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine.

### Prerequisites

- Node.js and npm (Node Package Manager) installed on your machine

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/danishshariff/CurrencyConverterApp.git
    ```

2. Navigate to the project directory:
    ```bash
    cd CurrencyConverterApp
    ```

3. Install the dependencies:
    ```bash
    npm install
    ```

## Usage

Start the development server:
```bash
npm start
 ```

Open http://localhost:3000 in your browser to view the app.

## Custom Hook

The `useCurrencyInfo` hook fetches the latest currency rates from the Open Exchange Rates API and provides the data along with any error encountered.

```jsx
import { useEffect, useState } from "react";

function useCurrencyInfo() {
    const [data, setData] = useState({});
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(`https://openexchangerates.org/api/latest.json?app_id=YOUR_APP_ID`)
            .then((res) => res.json())
            .then((res) => setData(res.rates))
            .catch((err) => setError(err.message));
    }, []);

    return { data, error };
}

export default useCurrencyInfo;
 ```

## Optimization

### Performance

- **Memoization**: Used hooks like `useEffect` to fetch data only when necessary, reducing unnecessary re-renders.
- **Lazy Loading**: Implemented lazy loading for components where applicable.
- **State Management**: Managed state effectively to avoid redundant state updates.

### Code Quality

- **Modular Code**: Organized the code into reusable components and custom hooks.
- **Consistent Naming**: Followed consistent naming conventions for files and variables.
- **Linting**: Used ESLint for maintaining code quality and catching potential issues early.

## Technologies Used

- React
- CSS for styling
- Open Exchange Rates API

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.


