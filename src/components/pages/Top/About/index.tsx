import * as css from "./styles.module.scss";
import type { FC } from "react";
import Img from "next/image";
import { Title } from "@/components/shared/Title";


export const About: FC = () => {

  return (
			<section className={css.wrapper} id="about">
        <Title>ABOUT</Title>
        <div className={css.gridStyle}>
				<div className={css.imgArea}>
					<div className={css.imgAreabox}>
						<div className={css.img}>
							<Img
								src="/about.webp"
								alt="株式会社 要のエントリー"
								width={300}
								height={300}
							/>
						</div>
					</div>
				</div>
				<div className={css.textArea}>
					<div>
          <p className={css.nameText}>白取 優花 <span className={css.nameTextEn}>Shiratori Yuka</span></p>
		  <div className={css.textArea}>
              <p>2022年から中小企業のWEBデザイナー/コーダーとして業務に従事。
               それまでは約5年間人事・広報・総務などの事務業務を行なっていた。一児の母。</p>
            <p>【使用ツール】</p>
              <p>HTML/CSS/JavaScript/TypeScript/React/Remix/Adobe Illustrator/Adobe Photoshop/Figma</p>
           <p>【趣味】</p>
			<p>ゲーム、アニメ鑑賞、麻雀</p></div>
					</div>
				</div>
		</div>
    </section>
  );
};
