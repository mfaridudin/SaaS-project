import RevSliderScripts from "./components/RevSliderScripts";
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Landing Page - Meetova', description: 'Landing page meetova',
}

export default function LandingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {/* CSS */}
      <link rel="stylesheet" type="text/css" href="/landingpage/css/plugins.css" />
      <link rel="stylesheet" type="text/css" href="/landingpage/css/style.css" />
      <link rel="stylesheet" type="text/css" href="/landingpage/css/templete.css" />
      <link className="skin" rel="stylesheet" type="text/css" href="/landingpage/css/skin/skin-2.css" />

      {children}
      <RevSliderScripts />
    </>
  )
}