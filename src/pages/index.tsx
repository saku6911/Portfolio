import { Home } from "../components/pages/Top";
import type { WorkContent } from "@/api/work";
import { topic as getWork } from "@/api/work";
import type { GetStaticProps, NextPage } from "next";
import { NextSeo } from "next-seo";

type Props = {
  workContents: WorkContent[];
};

export const Top: NextPage<Props> = ({ workContents }) => {
  return (
    <div>
      <NextSeo title="Portfolio Site" titleTemplate="" />
      <Home workContents={workContents} />
    </div>
  );
};

export default Top;

export const getStaticProps: GetStaticProps<Props> = async () => {
  const workRes = await getWork();
  return {
    props: {
      workContents: workRes.contents,
    },
  };
};