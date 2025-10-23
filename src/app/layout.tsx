import './global.css';
import { Poppins } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <body className={poppins.className}>{children}</body>
      </ThemeProvider>
    </html>
  )
}