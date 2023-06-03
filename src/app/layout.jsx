import Footer from './components/Footer';
import Navbar from './components/Navbar';
import './globals.css'
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: 'BMI Calculator',
  description: 'A small web app as a project by Mihir Gala',
  themeColor: '#DAA520'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`text-white bg-gray-900 ${poppins.className}`}>
        <Navbar/>
        {children}
        <Footer/>
        </body>
    </html>
  )
}
