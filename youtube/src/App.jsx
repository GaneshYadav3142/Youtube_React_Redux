import './App.css';
import {Box} from '@mui/material'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import { Navbar,Feed,SearchFeed,VideoDetail,ChannelDetail } from './Components/index1';
const App=()=> {
   return(
      <BrowserRouter>
      <Box >
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Feed/>}/>
          <Route path="/video/:id"  element={<VideoDetail/>}/>
          <Route path="/channel/:id" element={<ChannelDetail/>}/>
          <Route path="/search/:searchTerm" element={<SearchFeed/>}/>
     
          </Routes>
          </Box>
          </BrowserRouter>
    
)
   }

export default App;
