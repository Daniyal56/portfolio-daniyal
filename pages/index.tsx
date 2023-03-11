import { Box, Text, Button,CardBody,Card, Stack,Heading,CardFooter,Image, ButtonGroup, Avatar, List, ListItem, UnorderedList, Tabs, TabList, TabPanels, Tab, TabPanel, CardHeader } from '@chakra-ui/react';
// import Image from 'next/image'
import {ArrowForwardIcon} from '@chakra-ui/icons'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { useState } from 'react'

const inter = Inter({ subsets: ['latin'] })
const details = [
  {
    id:1,
    title:'Developing AI-powered chatbots',
    desc:'Chatbots are becoming increasingly popular for businesses looking to provide 24/7 customer support. As an AI web developer, you can develop chatbots that use natural language processing (NLP) to understand user queries and provide relevant responses.'
  },
  {
    id:2,
    title:'Implementing image and speech recognition',
    desc:'AI-powered image and speech recognition can be used in a wide range of applications, from facial recognition for security purposes to voice-activated assistants. As an AI web developer, you can work on implementing these technologies into web applications to enhance user experience.'
  },
  {
    id:3,
    title:'Building recommendation engines',
    desc:'Recommendation engines are widely used by e-commerce websites and streaming services to provide personalized recommendations to users. As an AI web developer, you can develop recommendation engines that use machine learning algorithms to analyze user behavior and provide relevant recommendations.'
  },
  {
    id:4,
    title:'Developing predictive analytics tools',
    desc:'Predictive analytics can be used in a wide range of industries, from finance to healthcare. As an AI web developer, you can develop predictive analytics tools that use machine learning algorithms to analyze data and make predictions about future trends.'
  },
  {
    id:5,
    title:'Implementing natural language processing',
    desc:'Natural language processing (NLP) is used in a wide range of applications, from sentiment analysis for social media to language translation. As an AI web developer, you can work on implementing NLP technologies into web applications to enhance user experience.'
  },
  {
    id:6,
    title:'Building intelligent search engines',
    desc:'Intelligent search engines can use AI and machine learning algorithms to provide more accurate search results. As an AI web developer, you can work on building search engines that use these technologies to provide more relevant search results.'
  },
]
export default function Home() {

  return (
    <>

      <main className='px-2 md:px-16  py-5 flex flex-col items-center md:items-start'>

      <h1 className='font-extrabold text-3xl md:text-7xl py-20 '> 
        Creative Innovative
        <br></br>
        Web Development
        </h1>
        <div className='text-1xl md:text-2xl  '>
          <Text className='text-center md:text-start py-4 px-8 md:px-0'>
          we specialize in building interactive websites that engage and delight users. We believe that a website should be more than just a static online presence - it should be an immersive experience that captures the user's attention and keeps them engaged.
          </Text>
          </div>
      </main>
      <Box id="work">
        <Heading className='text-center  font-semibold text-5xl py-20 underline'>Work</Heading>
        <Box className='flex flex-wrap justify-evenly px-2'>
          {
            details.map((d) =>{
              return(
                <Card maxW={['xs','sm','sm']} className=' my-2 hover:bg-green-900 hover:text-white'>
                  <CardHeader>
                  <Heading size={['sm','md','md']}>{d.title}</Heading>
                  </CardHeader>
                <CardBody>
                  <Stack mt='6' spacing='3'>
                    
                    <Text>
                    {d.desc}
                    </Text>
                  </Stack>
                </CardBody>
                <CardFooter>
                  <ButtonGroup spacing='2'>
                    <Button variant='outline' colorScheme='green'>
                      See Project  <ArrowForwardIcon />
                    </Button>
              
                  </ButtonGroup>
                </CardFooter>
              </Card>
              )
            })
          }
        
        </Box>
      </Box>
      <Box id="services">
        <Heading className='text-center  font-semibold text-5xl py-20 underline '>Services</Heading>
        <Box className='flex flex-wrap justify-evenly px-2'></Box>
        <Box className='flex flex-wrap justify-evenly px-2'>
        {
            details.map((d) =>{
              return(
                <Card maxW={['xs','sm','sm']} className=' my-2 grid content-between hover:bg-green-900 hover:text-white'>
                  <CardHeader>
                  <Heading size={['sm','md','md']}>{d.title}</Heading>
                  </CardHeader>
                <CardBody>
                  <Stack mt='6' spacing='3'>
                    
                    <Text>
                    {d.desc}
                    </Text>
                  </Stack>
                </CardBody>
                <CardFooter className='bg-green-900 '>
                  <Text className=' font-semibold font-2xl cursor-pointer text-white '> Book Now</Text>
                </CardFooter>
              </Card>
              )
            })
          }
        </Box>
      </Box>
          <Box className=' py-20'>
          <Heading className='text-center  font-semibold text-5xl py-4 '>Our Team</Heading>
            <Box>
              <Text className=' text-center px-2 md:px-16'>
              Software developers are responsible for designing, developing, and maintaining software applications, while system administrators ensure that the organization's computer systems are running efficiently and securely. Network engineers design and maintain the organization's computer network, while database administrators manage the organization's databases.

Security experts are responsible for ensuring that the organization's systems and data are protected from unauthorized access, hacking, and other security threats. They may also be responsible for developing security policies and procedures and conducting security audits.

In addition to these technical roles, a technical team in IT may also include project managers, business analysts, and quality assurance professionals. Project managers oversee the planning, execution, and delivery of IT projects, while business analysts gather and analyze requirements for IT systems and applications. Quality assurance professionals are responsible for ensuring that software and systems meet the organization's quality standards and requirements.

Overall, a technical team in IT is made up of individuals with specialized skills and expertise who work together to design, develop, implement, and maintain IT systems and applications. Their ultimate goal is to help the organization achieve its business objectives and stay competitive in the marketplace.





              </Text>
            </Box>
            <Box id="contact">
            <Heading className='text-center  py-8'>Contact</Heading>
            <Text className='text-center  cursor-pointer text-2xl'>scdaniyalalam@gmail.com</Text>
            <List className='flex justify-around flex-wrap md:flex-row md:justify-center space-x-6  py-4 px-2'   >
              <ListItem className='cursor-pointer hover:font-extrabold hover:underline font-medium'>Twitter</ListItem>
              <ListItem className='cursor-pointer hover:font-extrabold hover:underline font-medium'>LinkedIn</ListItem>
              <ListItem className='cursor-pointer hover:font-extrabold hover:underline font-medium'>Dribbble</ListItem>
              <ListItem className='cursor-pointer hover:font-extrabold hover:underline font-medium'>YouTube</ListItem>
              <ListItem className='cursor-pointer hover:font-extrabold hover:underline font-medium'>Instagram</ListItem>
              <ListItem className='cursor-pointer hover:font-extrabold hover:underline font-medium'>Facebook</ListItem>
            </List>
          </Box>
          </Box>
          <Box as='footer' className='w-full py-10 px-16 flex justify-between flex-col items-center md:flex-row bg-white h-20'>
            <Box className='font-semibold'>
            2023 Daniyal Alam
            </Box>

            <Box className='font-semibold py-10'>
              <List className='flex space-x-10 justify-center '>
                <ListItem className='whitespace-pre'>Privacy Policy</ListItem>
                <ListItem className='whitespace-pre'>Terms and Conditions</ListItem>
              </List>
            </Box>
            
          </Box>
    </>
  )
}
