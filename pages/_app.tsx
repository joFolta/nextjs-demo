// In Next.js, you can add global CSS files by importing them from pages/_app.js. You cannot import global CSS anywhere else.
import '../styles/global.css';
import { AppProps } from 'next/app';

// The default export of _app.js is a top-level React component that wraps all the pages in your application
// You can use this component:
// -- to keep state when navigating between pages, 
// -- or to add global styles

// https://nextjs.org/docs/pages/building-your-application/routing/custom-app

export default function App({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />
}