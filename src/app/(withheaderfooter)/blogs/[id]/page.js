import Container from "@/components/Container";
import SingleBlogDataLoader from "@/utils/singleBlogDataLoader";
import React from "react";

export const generateMetadata = async({params}) => {
    const {title} = await SingleBlogDataLoader(params.id);
    return {
        title: title,
    }
}
const SegmentsBlog = async ({ params }) => {
    
    const {title, body} = await SingleBlogDataLoader(params.id);

  return (
    <div className="h-[450px]">
      <Container>
        <div className="border border-cyan-400 px-4 py-6 mt-5 rounded-md">
          <h3 className="text-2xl font-semibold">
            {title}
          </h3>
          <p className="my-5">{body}</p>
        </div>
      </Container>
    </div>
  );
};

export default SegmentsBlog;