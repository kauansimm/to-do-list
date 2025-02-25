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

    useGSAP(() => {
        gsap.from(`.text-animation-home`, {
            y: 80,
            opacity: 0,
            duration: 1,
            delay: .4
        })
        gsap.to(textRef.current, {
            text: `Explore um catálogo repleto de clássicos, lançamentos e surpresas imperdíveis – tudo em um só lugar!`,
            duration: 2.5,
            ease: `none`,
            delay: .8
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
                            <Typography color={ThemeSettings.THEME_COLORS.primary} fontSize={{ xs: `6vw`, sm: `6vw`, md: `3vw` }} component={`strong`}>
                                Encontre, organize e aproveite
                            </Typography>
                        </Grid>
                        <Grid container justifyContent={`center`}>
                            <Typography color={ThemeSettings.THEME_COLORS.primary} fontSize={{ xs: `6vw`, sm: `6vw`, md: `3vw` }} component={`strong`}>
                                seus filmes favoritos com praticidade.
                            </Typography>
                        </Grid>
                        <Grid container justifyContent={`center`}>
                            <Grid container xs={6} position={`relative`} justifyContent={`center`}>
                                <Typography textAlign={`center`} ref={textRef} fontSize={{ xs: `1.5vw` }} position={`absolute`} />
                                <Typography textAlign={`center`} sx={{ opacity: 0 }} fontSize={{ xs: `1.5vw` }} zIndex={-1}>
                                    Explore um catálogo repleto de clássicos, lançamentos e surpresas imperdíveis – tudo em um só lugar!
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