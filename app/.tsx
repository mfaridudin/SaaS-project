
import Script from "next/script"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="keywords" content="" />
        <meta name="author" content="" />
        <meta name="robots" content="" />
        <meta name="description" content="Pexp - Creative agency HTML template" />
        <meta property="og:title" content="Pexp - Creative agency HTML template" />
        <meta property="og:description" content="Pexp - Creative agency HTML template" />
        <meta property="og:image" content="" />
        <meta name="format-detection" content="telephone=no" />


        <link rel="icon" href="/images/favicon.ico" />
        <link rel="shortcut icon" href="/images/favicon.png" />

        <title>Pexp - Html Template</title>
        <link rel="stylesheet" type="text/css" href="css/plugins.css" />
        <link rel="stylesheet" type="text/css" href="css/style.css" />
        <link rel="stylesheet" type="text/css" href="css/templete.css" />
        <link className="skin" rel="stylesheet" type="text/css" href="css/skin/skin-1.css" />

        {/* <!-- REVOLUTION SLIDER CSS --> */}
        <link rel="stylesheet" type="text/css" href="plugins/revolution/revolution/css/revolution.min.css" />
      </head>

      <body>
        {children}

        {/* ================= JS FILES ================= */}

        {/* JQUERY HARUS PALING AWAL */}
        <Script src="/js/jquery.min.js" strategy="beforeInteractive" />

        <Script src="/plugins/wow/wow.js" strategy="afterInteractive" />
        <Script src="/plugins/bootstrap/js/popper.min.js" strategy="afterInteractive" />
        <Script src="/plugins/bootstrap/js/bootstrap.min.js" strategy="afterInteractive" />
        <Script src="/plugins/owl-carousel/owl.carousel.js" strategy="afterInteractive" />

        <Script src="/js/custom.js" strategy="afterInteractive" />
        <Script src="/js/dz.carousel.js" strategy="afterInteractive" />
        <Script src="/js/dz.ajax.js" strategy="afterInteractive" />

        {/* REVOLUTION */}
        <Script src="/plugins/revolution/revolution/js/jquery.themepunch.tools.min.js" strategy="afterInteractive" />
        <Script src="/plugins/revolution/revolution/js/jquery.themepunch.revolution.min.js" strategy="afterInteractive" />
        <Script src="/js/rev.slider.js" strategy="afterInteractive" />

        {/* Inline Script harus pakai Script juga */}
        <Script id="rev-slider-init" strategy="afterInteractive">
          {`
            jQuery(document).ready(function() {
            if (typeof dz_rev_slider_1 !== 'undefined') {
                dz_rev_slider_1();
            }
            });
        `}
        </Script>

      </body>
    </html>
  )
}
