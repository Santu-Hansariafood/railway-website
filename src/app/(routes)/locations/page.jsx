import dynamic from "next/dynamic";
const Locations = dynamic(()=>import("@/app/components/ui/Locations/Locations"));
const Layout = dynamic(()=>import("@/app/layouts/layout"));

const page = () => {
  return (
    <Layout>
      <Locations />
    </Layout>
  );
};

export default page;
