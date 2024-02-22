import IntroSection from "@/components/home/IntroSection";
import { MobileMenu } from "@/components/topnav/MobileMenu";
import TopNavbar from "@/components/topnav/TopNavbar";

export default function HomePage() {
  return (
    <main className=" flex flex-col bg-red-600">
       <TopNavbar />
        <IntroSection />
       <MobileMenu isNeeded />
    </main>
  );
}
