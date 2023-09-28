import React from 'react'

const ProfileCard = () => {
  return (
    <div className='flex flex-col  hover:bg-background_posts_hover'>
    <div className='w-full flex gap-2' >
      <div className='h-full'>
        Image
      </div>
      <div className='h-auto flex-col'>
          <div>
                Username
          </div>
          <div>
                Email
          </div>
      </div>
    </div>
    <div className="w-full text-borderLight border-b-2 h-1 mr-2"></div>
    </div>
  )
}

export default ProfileCard