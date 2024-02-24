import { getProfile } from "../../../supabase/user"


const UserDashBoardComponent = async () => {
  const profile = await getProfile()


  return (
    <section className='flex flex-col gap-3 bg-red-100 p-4'>
      <h2 className='text-3xl font-semibold py-3 flex-1'>Welcome back <span className="text-primary">{profile?.data?.username || "Guest"}</span>!</h2>
      <p className='py-2 flex-1 tracking-tighter'>Hi <span className="text-primary">{profile?.data?.username || "Guest"}</span>, You are most welcome back. Now jump right in!</p>

      <div className='flex flex-wrap gap-4 w-auto py-5 md:flex-row max-xs:flex-col '>
        
      </div>
    </section>
  )
}

export default UserDashBoardComponent