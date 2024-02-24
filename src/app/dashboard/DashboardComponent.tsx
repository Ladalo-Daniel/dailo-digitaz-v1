import React, { Suspense } from 'react'
import AdminComponent from './AdminComponent'
import { getProfile } from '../../../supabase/user'
import SellerDashBoardComponent from './SellerDashBoardComponent'
import UserDashBoardComponent from './UserDashBoardComponent'

const DashboardComponent = async () => {
  const profile = await getProfile()
  return (
    <div className='flex flex-col gap-3 md:px-8 max-sm:w-full px-3'>
        {
            profile?.data?.role === "admin" && (
                <AdminComponent />
            )
        }
        {
          profile?.data?.role === "user" && (
              <UserDashBoardComponent />
          )
        }
        {
          !profile && (
              <UserDashBoardComponent />
          )
        }
        {
          profile?.data?.role === "seller" && (
              <SellerDashBoardComponent />
          )
        }
    </div>
  )
}

export default DashboardComponent