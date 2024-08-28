import * as css from "./styles.module.scss";
import { Main } from "@/components/pages/News/Article/Main";
import { BreadcrumbsContainer } from "@/components/shared/Breadcrumbs";
import { DetailLink } from "@/components/shared/Link";
import { routes } from "@/components/shared/LinkRouting/const";
import type { FC } from "react";

type Props = {
  title: string;
  content: string;
  label: string;
  thumbnail: string;
};
export const Article: FC<Props> = ({ title, content, thumbnail }) => {
  return (
    <div className={css.gridStyle}>
      <Main title={title} thumbnail={thumbnail} alt="News詳細の画像" />
      <div className={css.area}>
        <BreadcrumbsContainer />
        <div>
          <div dangerouslySetInnerHTML={{ __html: `${content}` }} />
        </div>
        <div className={css.linkArea}>
          <DetailLink href={routes.news.href}>一覧に戻る</DetailLink>
        </div>
      </div>
    </div>
  );
};