import dynamic from "next/dynamic";
const Layout = dynamic(() => import("@/app/layouts/layout"));
const About = dynamic(() => import("@/app/components/ui/About/About"));

const page = () => {
  return (
    <Layout>
      <About />
    </Layout>
  );
};

export default page;
