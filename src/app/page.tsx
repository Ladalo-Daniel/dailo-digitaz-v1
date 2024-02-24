import AdvertsBanner from "@/components/home/AdvertsBanner";
import CategoriesSection from "@/components/home/CategoriesSection";
import IntroSection from "@/components/home/IntroSection";
import { MobileMenu } from "@/components/topnav/MobileMenu";
import TopNavbar from "@/components/topnav/TopNavbar";

export default function HomePage() {
  return (
    <main className=" flex flex-col">
       <TopNavbar />
        <IntroSection />
        <CategoriesSection />
        <AdvertsBanner />
       <MobileMenu isNeeded />
    </main>
  );
}
