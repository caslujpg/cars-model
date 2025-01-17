# Car Models
![car-models-preview](https://github.com/user-attachments/assets/934179d1-177f-4a16-b55f-358730ed208b)
A modern and attractive React Native application built with Expo. This app allows users to search and filter car data from the FIPE table, including details such as price, fuel type, vehicle type, model, brand, and FIPE code. It also integrates with a FIPE API ([Paralellum](https://github.com/parallelum/fipe-go)).

## Features
- Search and filter by brand, model and year.
- Display detailed information for selected car.
- Modern and user-friendly UI design.

## Technologies Used
### Core
- [React Native](https://reactnative.dev/)
- [Expo](https://expo.dev/)

### Libraries
- [styled-components/native](https://styled-components.com/docs/basics#react-native)
- [React Hook Form](https://react-hook-form.com/)
- [Async Storage](https://react-native-async-storage.github.io/async-storage/)
- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [React Navigation](https://reactnavigation.org/)
- [Expo Fonts](https://docs.expo.dev/guides/using-custom-fonts/)

## Installation
1. Clone the repository:
   ```bash
   git clone (http or ssh method)
   cd car-models
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the project:
   ```bash
   npm run ios 
   ```
   ```bash
   npm run android
   ```

## API Configuration
### Login
- user: teste
- password: 123

## Usage
1. Open the app on your device or emulator.
2. Log in using credentials.
3. Search for car data by selecting brand, model, and year.
4. View detailed information about the selected car.

## Project Structure
- `src/assets`: The assets application as images and icons.
- `src/components`: Reusable UI components.
- `src/contexts`: All context implementations of application.
- `src/hooks`: Reusable custom hooks.
- `src/lib`: Abstractions for other codes.
- `src/navigation`: Routes configurations and screens for different app views (Login, Home...).
- `src/services`: API integrations.
- `src/utils`: Utility functions.

## License
This project is licensed under the MIT License.

## Autor
### Lucas Leonardo
[Linkedin](https://www.linkedin.com/in/caslujpg/)</br>
[Email](caslujpg@gmail.com)

## Acknowledgements
Special thanks to the developers and maintainers of the APIs and libraries used in this project.