import React from 'react'
import Avatar from '@mui/material/Avatar';

function stringToColor(string) {
  let hash = 0;
  let i;

  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = '#';

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }
  /* eslint-enable no-bitwise */

  return color;
}

function stringAvatar(name) {
  return {
    sx: {
      bgcolor: stringToColor(name),
    },
    children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
  };
}


const ProfileComp = () => {
  return (
    <div className='flex flex-col md:ml-20 w-full justify-center gap-2  items-center'>

      <Avatar {...stringAvatar('Gitesh Sarvaiya')} />
      <div className='flex flex-col justify-center items-center'>
      <p>
        Gitesh Sarvaiya
      </p>
      <p>
        gitesh.sarvaia28@gmail.com
      </p>
      <p>
        Total posts: 20
      </p>
      </div>
      <div className='flex w-full justify-center'>
        <button className='bg-secondary p-2 rounded-xl mt-2 xsm:mb-4 md:mb-4'> Edit your Profile</button>
      </div>
    </div>
  )
}

export default ProfileComp