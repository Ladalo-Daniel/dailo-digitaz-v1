import MaxWrapper from "@/components/MaxWrapper"
import { Metadata } from "next";
import DashboardComponent from "./DashboardComponent";
import MobileSidebar from "./components/MobileSidebar";
import { User, getProfile } from "../../../supabase/user";

export const metadata: Metadata = {
  title: "Dashboard | Profile",
  description: "Dashboard | Welcome"
}


export default async function Dashboard() {
  const profile = await getProfile()
  return (
      <MaxWrapper className="bg-gray-100 md:mt-[5px] mt-12 px-0 md:px-2  flex-1 max-w-7xl">
        <div className="md:py-5 py-2">
          <DashboardComponent />
          <MobileSidebar profile ={profile?.data as User} isNeeded />
        </div>
      </MaxWrapper>
  )
}
