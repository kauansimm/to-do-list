import { Button, Grid, Typography } from "@mui/material";
import useHandleNavigation from "../../hooks/useHandleNavigation";
import NavBar from "../../components/content/nav-bar";
import ThemeSettings from "../../themes/themeSettings";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { TextPlugin } from "gsap/all";

gsap.registerPlugin(TextPlugin)

export default function Page() {

    const { handleNavigationClick } = useHandleNavigation()
    const textRef = useRef(null)
    const textRef2 = useRef(null)

    useGSAP(() => {
        gsap.from(`.text-animation-home`, {
            y: 80,
            opacity: 0,
            duration: 1,
            delay: .4
        })
        gsap.to(textRef.current, {
            text: `Encontre um equilíbrio entre funcionalidades e`,
            duration: 2.5,
            ease: `none`,
            delay: .8
        }).then(() => {
            gsap.to(textRef2.current, {
                text: `facilidade de uso para focar nos objetivos.`,
                duration: 2,
            })
        })
    })

    return (
        <Grid container position={`relative`} alignContent={`start`} overflow={`hidden`} height={`100vh`}>
            <Grid container height={`15vh`}>
                <NavBar />
            </Grid>
            <Grid container height={`85vh`} sx={{ background: `linear-gradient(to top, ${ThemeSettings.THEME_COLORS.primary}88 15%, transparent 100%)` }}>
                <Grid container justifyContent={`center`} gap={{ xs: ThemeSettings.THEME_SPACING.extraSmall, sm: ThemeSettings.THEME_SPACING.verySmall, xl: ThemeSettings.THEME_SPACING.small }} alignContent={`center`}>
                    <Grid container className="text-animation-home">
                        <Grid container justifyContent={`center`}>
                            <Typography color={ThemeSettings.THEME_COLORS.primary} fontSize={{ xs: `6vw`, sm: `6vw`, md: `5vw` }} component={`strong`}>
                                Aumente sua Produtividade
                            </Typography>
                        </Grid>
                        <Grid container justifyContent={`center`}>
                            <Typography color={ThemeSettings.THEME_COLORS.primary} fontSize={{ xs: `6vw`, sm: `6vw`, md: `5vw` }} component={`strong`}>
                                Com mais Praticidade
                            </Typography>
                        </Grid>
                        <Grid container>
                            <Grid container position={`relative`} justifyContent={`center`}>
                                <Typography ref={textRef} fontSize={{ xs: `2vw` }} position={`absolute`} />
                                <Typography sx={{ opacity: 0 }} fontSize={{ xs: `2vw` }} zIndex={-1}>
                                    Encontre um equilíbrio entre funcionalidades e
                                </Typography>
                            </Grid>
                            <Grid container justifyContent={`center`}>
                                <Typography ref={textRef2} fontSize={{ xs: `2vw` }} position={`absolute`}  />
                                <Typography sx={{ opacity: 0 }} fontSize={{ xs: `2vw` }} zIndex={-1}>
                                    facilidade de uso para focar nos objetivos.
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid container width={`auto`} className="text-animation-home">
                        <Button variant="contained" onClick={() => handleNavigationClick(`/todolist`)}>
                            Começar
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}