
import { Container } from "@chakra-ui/react"
import Home from "./Home/Home"
import { Outlet } from "react-router"
import MainLayout from "./componet/Layout/MainLayout"

const App = () => {
  return (
   <Container>
     <MainLayout />
   </Container>
  )
}



export default App
