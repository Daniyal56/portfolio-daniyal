import { Box, Text, Avatar, List, ListItem, UnorderedList, Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
import { useState,useEffect  } from 'react'
import Link from 'next/link';
import Image from 'next/image';
import Logo from 'public/logo.png'



const Header = () => {

    
    return (
        <>  
            <Box className='w-full px-16 flex justify-between flex-col items-center md:flex-row '>
                <Box className='flex justify-center w-[65px] my-3 rounded-full md:my-6'> 
                {/*   */}
                <Avatar size={['lg','lg','lg']} src='https://avatars.githubusercontent.com/u/49856315?v=4' className='img-logo'/>
                </Box>
                <Box className=' md:py-6 flex justify-center'>
                    <List className='flex items-center justify-center space-x-5'>
                        <ListItem></ListItem>
                        <ListItem className='cursor-pointer font-medium md:text-2xl hover:underline '> <a href='#work'>Work</a></ListItem>
                        <ListItem className='cursor-pointer font-medium md:text-2xl hover:underline'><a href='#services'>Services</a></ListItem>
                        <ListItem className='cursor-pointer font-medium md:text-2xl hover:underline'><a href='#contact'>Contact</a></ListItem>
                    </List>
                </Box>
            </Box>
            
        </>
    );
}

export default Header;