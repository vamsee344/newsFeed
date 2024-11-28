# React Native News App

This is a React Native project that fetches and displays news articles from an external API. Users can view article details and share them with others.

## Table of Contents

1. [Setup Instructions](#setup-instructions)
2. [API Configuration Steps](#api-configuration-steps)
3. [Third-Party Libraries Setup](#third-party-libraries-setup)
   - [React Query](#react-query)
   - [Redux Toolkit](#redux-toolkit)
   - [Net Info](#NetInfo)
4. [Key Implementation Notes](#key-implementation-notes)
5. [Troubleshooting](#troubleshooting)
6. [License](#license)



### Prerequisites

Before getting started, make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v14.x or higher)
- [React Native CLI](https://reactnative.dev/docs/environment-setup) (or you can use Expo for easier setup)
- [Android Studio](https://developer.android.com/studio) for Android development (optional if you're using a physical device)
- [Xcode](https://developer.apple.com/xcode/) for iOS development (optional if you're using a physical device)

Make sure to complete the setup instructions in the [React Native Environment Setup](https://reactnative.dev/docs/environment-setup) guide before proceeding.

## Setup Instructions
### Step 1: Clone the Repository

First, clone the repository to your local machine:

```bash
git clone https://github.com/vamsee344/newsFeed.git
cd newsFeed
```

### Step 2: Install Dependencies

# using npm

npm install

# OR using Yarn

yarn install

### Step 3: Run the Application

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

## Step 4: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

## API Configuration Steps

This project leverages the [News API](https://newsapi.org/) for fetching news articles. Below is the step-by-step process to configure and integrate the API:

1. **Obtain an API Key**  
   Register on the News API website to obtain an API key. This key allows you to make authenticated requests to fetch news articles.

2. **Set Up Environment Variables**  
   ```plaintext
   API_KEY=your_news_api_key


## Third-Party Libraries Setup

This project uses several third-party libraries to enhance functionality, simplify development, and manage state. Below are the key libraries and their roles:

### React Query

- **Purpose**: Efficiently fetch, cache, and update data from the News API.
- **Highlight Features**:
  - Automatic caching and background data updates.
  - Built-in error handling and retry mechanisms.
- **Setup**:
  1. Install using:
     ```bash
     npm install @tanstack/react-query
     ```
  2. Wrap your app with `QueryClientProvider` and use `useQuery` to fetch data.
  - More details in the section: [React Query](#react-query).

---

### Redux Toolkit

- **Purpose**: Simplifies global state management and ensures predictable state changes.
- **Highlight Features**:
  - Built-in support for creating reducers, actions, and slices.
  - Eliminates boilerplate code for state updates.
- **Setup**:
  1. Install Redux Toolkit:
     ```bash
     npm install @reduxjs/toolkit react-redux
     ```
  2. Create slices, configure the store, and integrate with `Provider`.
  - More details in the section: [Redux Toolkit](#redux-toolkit).

---

### NetInfo

- **Purpose**: Monitor the device's network connectivity status.
- **Highlight Features**:
  - Detects online/offline status and network type (WiFi, mobile data, etc.).
  - Can trigger actions or UI changes based on connectivity state.
- **Setup**:
  1. Install the library:
     ```bash
     npm install @react-native-community/netinfo
     ```
  2. Import and use the hook to monitor network status:
     ```javascript
     import NetInfo from '@react-native-community/netinfo';

     const checkConnectivity = () => {
       NetInfo.fetch().then(state => {
         console.log('Is connected?', state.isConnected);
       });
     };
     ```

**Additional Notes**:  
- NetInfo can be combined with React Query or Redux Toolkit to pause API requests when offline or notify users about connectivity changes.

## Key Implementation Notes

This project incorporates several key features and best practices to ensure robust, scalable, and maintainable code:

- **API Integration**:  
  - Leveraged **React Query** for API calls, caching, and background synchronization.  
  - Ensured proper error handling with retry mechanisms and fallbacks for offline users using **NetInfo**.  

- **State Management**:  
  - Used **Redux Toolkit** to simplify and streamline global state management.  
  - Organized the store using slices for better modularity and scalability.

- **Offline Functionality**:  
  - Integrated **NetInfo** to detect connectivity changes and adapt app behavior dynamically (e.g., displaying "No Internet" messages or pausing API calls).  

- **Reusable Components**:  
  - Designed UI components to be highly reusable and customizable, adhering to **React Native** best practices.

- **Accessibility & Performance**:  
  - Ensured compliance with **WCAG** guidelines for accessibility.
  - Optimized rendering and performance by memoizing components and using proper hooks like `useMemo` and `useCallback`.

---

## Troubleshooting

### Common Issues and Resolutions
- **Metro Bundler Not Starting**:
  - Make sure you’ve installed all dependencies using `npm install` or `yarn install`.
  - Run the command:
    ```bash
    npm start --reset-cache
    ```

- **Network Errors**:
  - Use **NetInfo** to debug network connectivity issues.

- **Redux State Not Updating**:
  - Ensure the reducer is correctly added to the store.
  - Check for any immutability violations when updating state.

- **React Query Issues**:
  - Ensure your queries use unique keys to avoid caching conflicts.
  - Use `staleTime` and `refetchOnWindowFocus` options for better control of data fetching.

---

## License

This project is licensed under the **MIT License**. You are free to use, modify, and distribute this project under the terms of the MIT license. For more details, refer to the `LICENSE` file.
