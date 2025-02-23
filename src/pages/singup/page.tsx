import { Button, Grid, TextField, Typography } from "@mui/material";
import useHandleNavigation from "../../hooks/useHandleNavigation";
import NavBar from "../../components/content/nav-bar";
import ThemeSettings from "../../themes/themeSettings";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function Page() {

    const { handleNavigationClick } = useHandleNavigation()

    useGSAP(() => {
        gsap.to(`.container-singup-animation`, {
            bottom: 0,
            delay: .3,
            duration: 1.5,
            ease: `power4.out`
        })
    })

    return (
        <Grid container alignContent={`start`} overflow={`hidden`}>
            <Grid container height={`15vh`}>
                <NavBar />
            </Grid>
            <Grid container >
                <Grid container height={`85vh`} justifyContent={`center`} gap={{ xs: ThemeSettings.THEME_SPACING.extraSmall, sm: ThemeSettings.THEME_SPACING.verySmall, xl: ThemeSettings.THEME_SPACING.small }} sx={{ background: `linear-gradient(to top, ${ThemeSettings.THEME_COLORS.primary}88 15%, transparent 100%)` }} alignContent={`center`}>
                    <Grid container xs={3.5} bgcolor={ThemeSettings.THEME_COLORS.white} className="container-singup-animation" position={`relative`} bottom={`-100%`} justifyContent={`center`} borderRadius={`10px`} paddingY={{ xs: ThemeSettings.THEME_SPACING.extraSmall, sm: ThemeSettings.THEME_SPACING.verySmall }} border={`1px solid ${ThemeSettings.THEME_COLORS.primary}`} boxShadow={`1px 6px 5px ${ThemeSettings.THEME_COLORS.black}88`} sx={{ willChange: `transform` }}>
                        <Grid container xs={11} justifyContent={`center`} gap={{ xs: ThemeSettings.THEME_SPACING.mini + 1, sm: ThemeSettings.THEME_SPACING.extraSmall + .5, xl: ThemeSettings.THEME_SPACING.verySmall }}>
                            <Grid container justifyContent={`center`}>
                                <Typography variant="h2">
                                    Cadastre-se
                                </Typography>
                            </Grid>
                            <Grid container xs={10} gap={{ xs: ThemeSettings.THEME_SPACING.mini, sm: ThemeSettings.THEME_SPACING.extraSmall }}>
                                <Grid container justifyContent={`center`}>
                                    <TextField placeholder="Email" type="email" />
                                </Grid>
                                <Grid container justifyContent={`center`}>
                                    <TextField placeholder="Senha" type="password" />
                                </Grid>
                                <Grid container>
                                    <Button variant="contained" sx={{ width: `100%` }}>
                                        Cadastrar
                                    </Button>
                                </Grid>
                                <Grid container justifyContent={`center`}>
                                    <Typography>
                                        Já possui uma conta?
                                        <Typography display={`inline`} component={`strong`} color={ThemeSettings.THEME_COLORS.primary} sx={{ cursor: `pointer`, opacity: .8, transition: `.3s`, '&:hover': { opacity: 1 } }}>
                                            { } Entrar
                                        </Typography>
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}