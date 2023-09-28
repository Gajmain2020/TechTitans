import React from 'react'
import Post from "./components/Post/Post";
import SideBar from "./components/SideBar/SideBar";
import Timeline from "./components/Timeline/Timeline";
import ProfileComp from './components/ProfileComp/ProfileComp';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Comments from './components/Comments/Comments';
import { useParams } from 'react-router-dom';



function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 1 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const Profile = () => {

  const params = useParams();
  const {name} = params;

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className="flex">
    <SideBar />
    <div className=" flex flex-col mt-24 xsm:w-full md:w-[50%] justify-center align-middle">
        <ProfileComp name={name}/>
        <Box sx={{ width: '100%' }}>
          <div className='flex justify-center md:ml-20 w-full'>
      <Box sx={{ borderBottom: 1, borderColor: 'divider', display:'flex', justifyContent:'center' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Posts" {...a11yProps(0)} />
          <Tab label="Comments" {...a11yProps(1)}/>
        </Tabs>
      </Box>
      </div>
      </Box>
      <CustomTabPanel value={value} index={0}>
      <Post name="Divyanshi Srivastava" date="12 dec" />
      <Post name="Devdeep Goyal" date="12 dec" />
      <Post name="Divyanshi Srivastava" date="12 dec" />
      <Post name="Divyanshi Srivastava" date="12 dec" />
      <Post name="Divyanshi Srivastava" date="12 dec" />
      <Post name="Divyanshi Srivastava" date="12 dec" />
      <Post name="Divyanshi Srivastava" date="12 dec" />
      <Post name="Divyanshi S" date="12 dec" />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <Comments name="Gajendra Sahu" comment="Nice Post Dear"/>
        <Comments name="Divyanshi Srivastava" comment="Very Nice"/>
        <Comments name="DevDeep Goyal" comment="Woww"/>
      </CustomTabPanel>

    </div>
    <div className=" mt-24">
      <Timeline />
    </div>
    <button class=" sm:hidden  bg-primary text-textdarkmode  fixed bottom-0 right-0 p-4 m-4 bg-blue-500 text-white rounded-full shadow-lg">
          Create Post
      </button>
  </div>

  )
}

export default Profile