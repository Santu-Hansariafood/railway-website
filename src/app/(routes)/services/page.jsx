import dynamic from "next/dynamic";
const Layout = dynamic(() => import("@/app/layouts/layout"));
const Services = dynamic(() => import("@/app/components/ui/Services/Services"));

const page = () => {
  return (
    <Layout>
      <Services />
    </Layout>
  );
};

export default page;
