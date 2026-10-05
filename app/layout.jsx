import './globals.css';
import { Header, Footer } from '@/components/site';
export const metadata = { title: 'RCB Holdings | Machinery & Building Solutions Sri Lanka', description: 'Explore construction machinery, steel construction, interlock paving and cement blocks. Plan your paving with our quantity calculator.' };
export default function Layout({ children }) { return <html lang="en"><head><link rel="preconnect" href="https://fonts.googleapis.com"/><link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"/><link href="https://fonts.googleapis.com/css2?family=Google+Sans+Flex:wght@400;500;600;700;800&display=swap" rel="stylesheet"/></head><body><Header/>{children}<Footer/></body></html>; }
