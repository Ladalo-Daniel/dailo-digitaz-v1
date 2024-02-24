import AccountForm from '../account-form'
import { getUserSession } from '../../../../supabase/session'
import { getProfile } from '../../../../supabase/user'
import MaxWrapper from '@/components/MaxWrapper'
import { Card } from '@/components/ui/card'
import { redirect } from 'next/navigation'
import Image from 'next/image'

export default async function Account() {
  const session = await getUserSession()
  const profile = await getProfile()

  if (profile?.data?.onboarded) redirect("/")
  if (!session?.user) redirect("/sign-up")

  return <MaxWrapper noOverflow className='flex flex-col gap-3 max-w-7xl min-h-screen bg-slate-200'> 
          <Card className='max-w-[600px] flex flex-col mx-auto p-9'>
          <Image alt='logo image' src="/logos/logo2.png" height={100} width={100} className=' self-center md:w-[150px] md:h-[50px]' />


            <div className='space-y-5 mb-4 mt-2'>
              <h2 className="md:text-2xl font-medium text-primary"> Kindly Complete your profile so we can serve you better.</h2>
            </div>
            <AccountForm session={session} profile={profile?.data as any}/>
            </Card>
         </MaxWrapper>
}