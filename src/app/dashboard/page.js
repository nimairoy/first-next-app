import Container from "@/components/Container";
import React from "react";

export const metadata = {
  title: "Dashboard || Next App",
  description: "Dashboard Description",
};

const Dashboard = () => {
  return (
    <div>
      <Container>
        <h3 className="text-3xl text-center">This is Dashboard Home Page</h3>
      </Container>
    </div>
  );
};

export default Dashboard;
