import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchFromAPI } from '../utils/fetchfromAPI'
import { Box } from '@mui/material'
import ChannelCard from './ChannelCard'
import {Videos} from './index1'
 const ChannelDetail = () => {
  const [channelDetail,setChannelDetail]=useState(null)

  const [videos,setVideos]=useState([])
  const {id}=useParams()

  useEffect(()=>{
    fetchFromAPI(`channel?part=snippet&id=${id}`)
    .then((data)=>setChannelDetail(data?.items[0]))

    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`)
    .then((data)=>setVideos(data?.items))
  },[id])
  return (
    <Box minHeight={"95vh"}>
    <Box>
   <div
   style={{
    background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 0%, rgba(0,212,255,1) 0%, rgba(0,212,255,1) 74%, rgba(3,138,206,1) 100%)',
    zIndex:10,
    height:'300px'
   }}/>

    <ChannelCard channelDetail={channelDetail}
    marginTop='-110px'/>
    </Box>
    <Box display="flex" p='2'>
      <Box
      sx={{mr:{sm:'100px'}}}/>
      <Videos videos={videos}/>
    
    
    </Box>
    </Box>
  )
}

export default ChannelDetail
