import React from "react";
import { Grid, View } from "@adobe/react-spectrum";
import Aside from "./Aside";
import ViewContent from "./ViewContent";
import ContentHead from "./ContentHead";
import { ASIDE_MENU } from "../../../settings";
import { IAsideMenuElement } from "../../../interfaces";
import style from '../styles/index.module.scss'


const MainContent: React.FC = ({ }) => {
  const [currentCategory, setCategory] = React.useState<IAsideMenuElement>(ASIDE_MENU[0])

  const handleChangeCategory = (idCategory: number): void => {
    const newCategory = ASIDE_MENU.find(el => el.id === idCategory)
    if (newCategory !== undefined) {
      setCategory(newCategory)
    }
  }

  return (
    <>
      <ContentHead currentCategory={currentCategory} />
      <Grid
        areas={[
          'aside content',
          'aside  content'
        ]}
        columns={['300px', '1fr']}
        rows={['1fr']}
        UNSAFE_className={style.content_grid}>
        <View gridArea="aside" UNSAFE_className={style.aside_wrap}>
          <Aside currentCategory={currentCategory} menu={ASIDE_MENU} handleChangeCategory={handleChangeCategory} />
        </View>
        <View gridArea="content" UNSAFE_className={style.content_wrap}>
          <ViewContent />
        </View>
      </Grid>
    </>
  )
}

export default MainContent