// import Link from "next/link";

// export default function AboutPage() {
//   return (
//     <div>
//       <h1>About Page</h1>
//       <Link href="/">
//         <a>Home Page</a>
//       </Link>
//     </div>
//   );
// }


import Footer from '@/components/ui/footer'
import Header2 from '@/components/ui/header2'
import Section7 from '@/components/ui/section-7'
import React from 'react'

export default function Page() {
  return (
    <main className="flex min-h-screen  flex-col items-center  pt-6">
    <Header2/>         
    <Section7/>     
    <Footer/>
  </main>
  )
}
