
import dynamic from "next/dynamic";

const Home = dynamic(()=>import('@/app/components/ui/Home/Home'))
const Layout = dynamic(()=>import('@/app/layouts/layout'))

const page = () => {
  return (
    <Layout>
      <Home/>
    </Layout>
  )
}

export default page