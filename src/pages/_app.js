import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <div className="h-full max-w-5xl mx-auto pt-10">
      <Component {...pageProps} />
    </div>
  )
}
