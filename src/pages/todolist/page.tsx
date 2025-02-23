import { Grid, Typography } from "@mui/material";
import Menu from "../../components/content/menu";
import ThemeSettings from "../../themes/themeSettings";
import Task from "../../components/content/task";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function Page() {

    useGSAP(() => {
        gsap.to(`.menu-animation-todolist`, {
            left: 0,
            delay: .6,
            duration: 1.6,
            ease: `power4.out`
        })

        gsap.to(`.animation-tasks-todolist`, {
            right: 0,
            duration: 1.8,
            delay: .6,
            stagger: .2,
            ease: `power4.out`
        })

        gsap.to(`.animation-text-todolist`, {
            top: 0,
            duration: 2,
            ease: `power4.out`,
            delay: .4
        })
    })

    return (
        <Grid container overflow={`hidden`} paddingY={{ xs: ThemeSettings.THEME_SPACING.mini, sm: ThemeSettings.THEME_SPACING.extraSmall, xl: ThemeSettings.THEME_SPACING.verySmall }}>
            <Grid container className="menu-animation-todolist" left={`-100%`} height={`100%`} justifyContent={`center`} position={`relative`} xs={3.5} >
                <Menu />
            </Grid>
            <Grid container xs={8.2} alignContent={`start`} gap={{ xs: ThemeSettings.THEME_SPACING.extraSmall, sm: ThemeSettings.THEME_SPACING.verySmall }}>
                <Grid container position={`relative`} top={`-100%`} className="animation-text-todolist">
                    <Typography variant="h1" fontWeight={ThemeSettings.THEME_FONT_WEIGHTS.bold}>
                        Parede de tarefas
                    </Typography>
                </Grid>
                <Grid container gap={{ xs: ThemeSettings.THEME_SPACING.extraSmall, sm: ThemeSettings.THEME_SPACING.verySmall }}>
                    <Grid container position={`relative`} className={`animation-tasks-todolist`} right={`-120%`} xs={3.8}>
                        <Task />
                    </Grid>
                    <Grid container position={`relative`} className={`animation-tasks-todolist`} right={`-120%`} xs={3.8}>
                        <Task />
                    </Grid>
                    <Grid container position={`relative`} className={`animation-tasks-todolist`} right={`-120%`} xs={3.8}>
                        <Task />
                    </Grid>
                    <Grid container position={`relative`} className={`animation-tasks-todolist`} right={`-120%`} xs={3.8}>
                        <Task />
                    </Grid>
                    <Grid container position={`relative`} className={`animation-tasks-todolist`} right={`-120%`} xs={3.8}>
                        <Task />
                    </Grid>
                    <Grid container position={`relative`} className={`animation-tasks-todolist`} right={`-120%`} xs={3.8}>
                        <Task />
                    </Grid>
                    <Grid container position={`relative`} className={`animation-tasks-todolist`} right={`-120%`} xs={3.8}>
                        <Task />
                    </Grid>
                    <Grid container position={`relative`} className={`animation-tasks-todolist`} right={`-120%`} xs={3.8}>
                        <Task />
                    </Grid>
                    <Grid container position={`relative`} className={`animation-tasks-todolist`} right={`-120%`} xs={3.8}>
                        <Task />
                    </Grid>
                    <Grid container position={`relative`} className={`animation-tasks-todolist`} right={`-120%`} xs={3.8}>
                        <Task />
                    </Grid>
                    <Grid container position={`relative`} className={`animation-tasks-todolist`} right={`-120%`} xs={3.8}>
                        <Task />
                    </Grid>
                    <Grid container position={`relative`} className={`animation-tasks-todolist`} right={`-120%`} xs={3.8}>
                        <Task />
                    </Grid>
                    <Grid container position={`relative`} className={`animation-tasks-todolist`} right={`-120%`} xs={3.8}>
                        <Task />
                    </Grid>
                    <Grid container position={`relative`} className={`animation-tasks-todolist`} right={`-120%`} xs={3.8}>
                        <Task />
                    </Grid>
                    <Grid container position={`relative`} className={`animation-tasks-todolist`} right={`-120%`} xs={3.8}>
                        <Task />
                    </Grid>
                    <Grid container position={`relative`} className={`animation-tasks-todolist`} right={`-120%`} xs={3.8}>
                        <Task />
                    </Grid>
                    <Grid container position={`relative`} className={`animation-tasks-todolist`} right={`-120%`} xs={3.8}>
                        <Task />
                    </Grid>
                    <Grid container position={`relative`} className={`animation-tasks-todolist`} right={`-120%`} xs={3.8}>
                        <Task />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}