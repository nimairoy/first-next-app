import Container from "@/components/Container";
import Link from "next/link";
import React from "react";

const SegmentsBlog = ({ params }) => {
  const [year, id] = params.segments || [];
  console.log(params);
  return (
    <div className="h-screen">
      <Container>
        <div
          key={id}
          className="border border-cyan-400 px-4 py-6 mt-5 rounded-md"
        >
          <h3 className="text-2xl font-semibold">
            This is the blog details page
          </h3>
          <p className="my-5"></p>
        </div>
      </Container>
    </div>
  );
};

export default SegmentsBlog;
