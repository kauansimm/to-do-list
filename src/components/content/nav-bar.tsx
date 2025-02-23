import { Button, Grid, Typography } from "@mui/material";
import ThemeSettings from "../../themes/themeSettings";
import image from '../../assets/img/logo/logo.png'
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useLocation } from "react-router-dom";

interface NavBarI {
    loginFunction?: () => void
}

export default function NavBar({ loginFunction } : NavBarI) {

    const location = useLocation()

    useGSAP(() => {
        gsap.from(`.nav-bar-animation`, {
            y: -200,
            delay: .3,
            duration: 1.4,
            ease: `power4.out`
        })
    })

    return (
        <Grid container className="nav-bar-animation" position={`sticky`} justifyContent={`space-around`} paddingY={{ xs: ThemeSettings.THEME_SPACING.mini, sm: ThemeSettings.THEME_SPACING.extraSmall }} sx={{ willChange: `transform` }} >
            <Grid container xs={11}>
                <Grid container xs sx={{ '& img': { objectFit: `contain`, width: `100%` } }}>
                    <img src={image} alt="" />
                </Grid>
                <Grid container xs={11} justifyContent={`end`} alignItems={`center`} gap={{ xs: ThemeSettings.THEME_SPACING.verySmall, sm: ThemeSettings.THEME_SPACING.small, xl: ThemeSettings.THEME_SPACING.medium }}>
                    <Grid container display={location.pathname === `/singup` ? `none` : `flex`}  width={`auto`}>
                        <Typography fontWeight={ThemeSettings.THEME_FONT_WEIGHTS.regular} color={ThemeSettings.THEME_COLORS.primary} sx={{ opacity: .9, '&:hover': { opacity: 1 }, cursor: `pointer` }}>
                            Recursos
                        </Typography>
                    </Grid>
                    <Grid container display={location.pathname === `/singup` ? `none` : `flex`} width={`auto`}>
                        <Typography onClick={() => loginFunction && loginFunction()} fontWeight={ThemeSettings.THEME_FONT_WEIGHTS.regular} color={ThemeSettings.THEME_COLORS.primary} sx={{ opacity: .9, '&:hover': { opacity: 1 }, cursor: `pointer` }}>
                            Entrar
                        </Typography>
                    </Grid>
                    <Grid container display={location.pathname !== `/singup` ? `none` : `flex`} width={`auto`}>
                        <Typography fontWeight={ThemeSettings.THEME_FONT_WEIGHTS.regular} color={ThemeSettings.THEME_COLORS.primary}>
                            Já possui uma conta?
                        </Typography>
                    </Grid>
                    <Grid container width={`auto`}>
                        <Button datatype="secondary" variant="contained" onClick={() => location.pathname === `/singup` && loginFunction ? loginFunction() : () => {}}>
                            {location.pathname === `/singup` ? `Entrar` : `Criar conta`}
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}