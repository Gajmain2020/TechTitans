// import Search from '@mui/icons-material/Search';
// import React from 'react'
// import { useParams } from 'react-router-dom';
// import { Link } from 'react-router-dom';
// import ArrowBackIcon from '@mui/icons-material/ArrowBack';




// const MessageCard = () => {
//   const messages  = [{
//     id:'1',
//     msg:'Hello'},
//     {id:'2',
//     msg:'nice'},
//     {id:'1',
//     msg:'verynice'},
//   ]
  
//   // const handleBack = handleBack();

//   const params = useParams();
//   const {userid} = params;
//   console.log()
//   return (
//     <div className=" w-full flex flex-col bg-background_posts_hover rounded-md">
//       <div>
//         {!userid ? (
//           <>
//             <Search />
//             <p className="font-extrabold">Find people to message...</p>
//           </>
//         ) : (
//           <div className='flex flex-col gap-2 w-full'>
//             <div className=' p-2 h-10 w-full gap-10 flex items-start'>
//               <Link to='/message' >
//               <ArrowBackIcon />
//               </Link>
//               <p className='font-bold'>
//                   Name
//               </p>
//             </div>
//             <div className='h-full flex flex-col bg-background justify-end'>
//                 {messages.map((message)=>
//                    (<div className='w-full'>
//                    {message.id==='1'? (<p className='w-full justify-end flex'>{message.msg}</p>) : (<p className='w-full justify-start flex'>{message.msg}</p> )}
//                     </div>) 
//       )}

                    
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default MessageCard;