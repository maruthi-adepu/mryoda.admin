import ViewMembersTable from '@/components/allMembersTable'
import TopBar from '@/components/topbar'
import ViewMemberDetails from '@/components/viewMember'
import React from 'react'

const page = () => {
  return (
    <div>
      <TopBar/>
      <ViewMembersTable/>
    </div>
  )
}

export default page
