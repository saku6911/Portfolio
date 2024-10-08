import type { FC } from "react";
import * as css from "./styles.module.scss";
import { Header } from "@/components/shared/Header";
import { Main } from "@/components/pages/Top/Main";
import { About } from "@/components/pages/Top/About";
import { Work } from "@/components/pages/Top/Work";
import { Contact } from "@/components/pages/Top/Contact";
import { Footer } from "@/components/shared/Footer";
import { WorkContent } from "@/api/work";

type Props = {
  workContents: WorkContent[];
};

export const Home: FC<Props> = ({ workContents }) => {
  return (
    <>
      <Header />
      <div className={css.wrapper}>
      <Main />
      <About />
      <Work posts={workContents} />
      <Contact />
      <Footer />
      </div>
      </>
  );
};