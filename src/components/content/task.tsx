import { Grid, Typography } from "@mui/material";
import ThemeSettings from "../../themes/themeSettings";

export default function Task() {
    return (
        <Grid container bgcolor={`blue`} justifyContent={`center`} borderRadius={`10px`} alignContent={`start`} sx={{ aspectRatio: 1 / 1, willChange: `transform` }} boxShadow={`0px 5px 5px ${ThemeSettings.THEME_COLORS.black}88`}>
            <Grid container xs={11} paddingY={{ xs: ThemeSettings.THEME_SPACING.extraSmall, sm: ThemeSettings.THEME_SPACING.verySmall - 1 }} gap={{ xs: ThemeSettings.THEME_SPACING.mini, sm: ThemeSettings.THEME_SPACING.extraSmall }}>
                <Grid container>
                    <Typography variant="h3" component={`strong`}>
                        Titulo
                    </Typography>
                </Grid>
                <Grid container>
                    <Typography >
                        descricao
                    </Typography>
                </Grid>
            </Grid>
        </Grid>
    )
}