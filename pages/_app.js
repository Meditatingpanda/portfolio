import Layout from '../components/layouts/main'
import Fonts from '../components/fonts'
import { AnimatePresence } from 'framer-motion'
import Chakra from '../components/chakra'
import Script from 'next/script'
import { Analytics } from '@vercel/analytics/react';
if (typeof window !== 'undefined') {
  window.history.scrollRestoration = 'manual'
}

function Website({ Component, pageProps, router }) {
  return (
    <>
      <Script
        strategy="lazyOnload"
        id="google-analytics"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />

      <Script id="gtag-data" strategy="lazyOnload">
        {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
        page_path: window.location.pathname,
        });
    `}
      </Script>
      <Chakra cookies={pageProps.cookies}>
        <Fonts />
        {
          router.asPath === '/resume' ? (
            <div>
              <iframe src={`/resume.pdf`} width="100%" height="800px" />
            </div>
          ) : null
        }
        {
          router.asPath === '/resume' ? null : (
            <Layout router={router}>
              <AnimatePresence
                exitBeforeEnter
                initial={true}
                onExitComplete={() => {
                  if (typeof window !== 'undefined') {
                    window.scrollTo({ top: 0 })
                  }
                }}
              >
                <Component {...pageProps} key={router.route} />
                <Analytics />
              </AnimatePresence>
            </Layout>
          )
        }
      </Chakra>
    </>
  )
}

export default Website
