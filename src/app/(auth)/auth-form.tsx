'use client'
import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { Database } from '../../../types/supabase'

export default function AuthForm() {
  const supabase = createClientComponentClient<Database>()

  return (
    <Auth
      supabaseClient={supabase}
      view="magic_link"
      appearance={{ theme: ThemeSupa,
        extend: false,

        className: {
          button: "w-full hover:bg-red-300 bg-red-400 flex items-center gap-2 justify-center rounded-md transition-all p-2 space-y-4 mt-2 mb-2 block text-accent shadow border-none",
          label: "block space-y-2 mt-4 text-gray-500 mb-1 text-2xl",
          input: "p-2 ring-1  ring-gray-50 outline-none  rounded-md shadow focus:ring-gray-200 mt-2 transition-all mb-2 w-full",
          container: "flex flex-col gap-4",
          message: "p-4 rounded-md  border border-green-500 shadow text-green-700 mt-2 w-full",
        }
      }}
      theme="dark"
      showLinks={false}
      redirectTo={`${process.env.NEXT_PUBLIC_SITE_URL!}/auth/callback`}
      
      providers={['google']}
      queryParams={{
        access_type: 'offline',
        prompt: 'consent',
      }}
    />
  )
}