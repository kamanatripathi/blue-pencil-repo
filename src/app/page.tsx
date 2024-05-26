import Footer from "@/components/ui/footer";
import Header from "@/components/ui/header";
import Section1 from "@/components/ui/section-1";
import Section2 from "@/components/ui/section-2";
import Section3 from "@/components/ui/section-3";
import Section4 from "@/components/ui/section-4";
import Section5 from "@/components/ui/section-5";
import Section6 from "@/components/ui/section-6";

export default function Home() {
  return (
    <>
          <main className="flex min-h-screen  flex-col items-center  pt-6">
            <Header/>
                  <Section1/>
                  <Section2/>
                  <Section3/>
                  <Section4/>
                  <Section5/>
                  <Section6/>
            <Footer/>
          </main>
       
    </>
    
  );
}
