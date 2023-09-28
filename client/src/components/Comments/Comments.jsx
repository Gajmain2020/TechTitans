import React from 'react'
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import CommentIcon from '@mui/icons-material/Comment';

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

const Comments = (props) => {
  return (
    <div className='flex-col bg-background  hover:bg-background_posts_hover  h-auto pt-2 xsm:w-full flex gap-2 md:ml-20'>
              <div className="flex-col bg-background  hover:bg-background_posts_hover  h-auto pt-2 xsm:w-full flex gap-2">
              <p>Replied to {'@'}{props.repliedto}</p>
        <div className="flex justify-start items-center gap-2 px-2">
          <div className="h-full">
            <Avatar {...stringAvatar("Gitesh Sarvaiya")} />
          </div>
          <div className="flex flex-col w-full items-start  gap-2">
            <div className="flex justify-start gap-2">
              <p className='text-sm font-bold'>{props.name}</p>
            </div>
            <div className="h-auto w-full flex flex-col">
              <p>{props.comment}</p>
              {/* <p>Amount:</p>
              <p className="">Desired Interest:</p> */}
            </div>
          </div>
        </div>
        <div className="w-full text-borderLight border-b-2 h-1 mt-2"></div>
      </div>
    </div>
  )
}

export default Comments