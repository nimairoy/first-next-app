import Sidebar from "@/components/Sidebar";
import "../globals.css";

export const metadata = {
  title: "Next.js",
  description: "Generated by Next.js",
};

const DashboardLayout = ({ children }) => {
  return (
    <div className="container mx-auto flex">
      <Sidebar />
      <div className="flex justify-center mt-6">{children}</div>
    </div>
  );
};

export default DashboardLayout;
