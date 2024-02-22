import React from 'react'
import AuthForm from '../auth-form'
import { Card } from '@/components/ui/card'
import Image from 'next/image'

const SignUpPage = () => {
  return (
    <section className=' flex flex-col items-center justify-center mt-[20%] md:mt-[10%]'>
      <Card className=' flex flex-col   px-4 py-1 w-[90vw] md:w-[400px]'>
          <Image alt='logo image' src="/logos/logo2.png" height={100} width={100} className=' self-center' />
          <h1 className=' text-center text-gray-600 mt-2'>Hi there, Sign up to shop!</h1>

          <div className="col-6 auth-widget">
          <AuthForm />
          </div>
      </Card>
    </section>
  )
}

export default SignUpPage