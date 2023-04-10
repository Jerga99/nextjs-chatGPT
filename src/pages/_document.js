import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <div className="h-full max-w-5xl mx-auto pt-10">
          <Main />
          <NextScript />
        </div>
      </body>
    </Html>
  )
}
