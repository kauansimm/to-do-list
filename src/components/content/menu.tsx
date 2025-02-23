import { Grid, InputAdornment, TextField, Typography } from "@mui/material";
import ThemeSettings from "../../themes/themeSettings";
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import EventIcon from '@mui/icons-material/Event';
import AddIcon from '@mui/icons-material/Add';
import LogoutIcon from '@mui/icons-material/Logout';

export default function Menu() {

    return (
        <Grid container xs={3} position={`fixed`} justifyContent={`center`} height={`93vh`} paddingY={{ xs: ThemeSettings.THEME_SPACING.mini, sm: ThemeSettings.THEME_SPACING.extraSmall, xl: ThemeSettings.THEME_SPACING.verySmall }} bgcolor={`#F2F2F2`} borderRadius={`20px`}>
            <Grid container xs={11} alignContent={`space-between`} >
                <Grid container gap={{ xs: ThemeSettings.THEME_SPACING.mini, sm: ThemeSettings.THEME_SPACING.extraSmall, xl: ThemeSettings.THEME_SPACING.verySmall - 1 }}>
                    <Grid container alignContent={`center`} justifyContent={`space-between`}>
                        <Grid container xs>
                            <Typography variant="h3" component={`strong`}>
                                Menu
                            </Typography>
                        </Grid>
                        <Grid container xs={2} alignContent={`center`} >
                            <MenuIcon sx={{ fontSize: `2.5vw` }} />
                        </Grid>
                    </Grid>
                    <Grid container>
                        <TextField placeholder="Pesquisar"
                            sx={{

                                '& .MuiOutlinedInput-root': {
                                    '& fieldset': {
                                        borderColor: ThemeSettings.THEME_COLORS.primary,
                                        borderRadius: `5px`,
                                    },
                                    '&:hover fieldset': {
                                        borderColor: ThemeSettings.THEME_COLORS.primary,
                                    },
                                    '&.Mui-focused fieldset': {
                                        borderColor: ThemeSettings.THEME_COLORS.primary,
                                        border: `1px solid ${ThemeSettings.THEME_COLORS.primary}`,
                                    },
                                },
                                '& .MuiInputLabel-root': {
                                    color: '#white',

                                },
                                '& .MuiInputLabel-root.Mui-focused': {
                                    color: '#1976d2',
                                    bgcolor: `trasnparent`,

                                },
                                '& .MuiInputBase-input': {
                                    fontFamily: ThemeSettings.THEME_FONTS.primary,
                                    fontSize: `1vw`,
                                    color: ThemeSettings.THEME_COLORS.primary,
                                    textAling: `center`
                                },
                            }}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <SearchIcon />
                                    </InputAdornment>
                                ),
                            }}
                        />
                    </Grid>
                    <Grid container alignContent={`center`} >
                        <Grid container>
                            <Typography fontWeight={ThemeSettings.THEME_FONT_WEIGHTS.medium}>
                                Tarefas
                            </Typography>
                        </Grid>
                        <Grid container>
                            <Grid container alignItems={`center`} padding={`.5vw`} borderRadius={`10px`} sx={{ '&:hover': { backgroundColor: ThemeSettings.THEME_COLORS.gray }, transition: `.3s`, cursor: `pointer` }}>
                                <Grid container xs>
                                    <KeyboardDoubleArrowRightIcon />
                                </Grid>
                                <Grid container xs={10} alignContent={`center`}>
                                    <Typography>
                                        Pendentes
                                    </Typography>
                                </Grid>
                                <Grid container xs justifyContent={`center`} bgcolor={ThemeSettings.THEME_COLORS.gray} borderRadius={`5px`}>
                                    <Typography component={`strong`} fontSize={{ xs: `1vw` }}>
                                        10
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Grid container alignItems={`center`} padding={`.5vw`} borderRadius={`10px`} sx={{ '&:hover': { backgroundColor: ThemeSettings.THEME_COLORS.gray }, transition: `.3s`, cursor: `pointer` }}>
                                <Grid container xs>
                                    <EventIcon />
                                </Grid>
                                <Grid container xs={10} alignContent={`center`}>
                                    <Typography>
                                        Hoje
                                    </Typography>
                                </Grid>
                                <Grid container xs justifyContent={`center`} bgcolor={ThemeSettings.THEME_COLORS.gray} borderRadius={`5px`}>
                                    <Typography component={`strong`} fontSize={{ xs: `1vw` }}>
                                        3
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid container alignContent={`center`} >
                        <Grid container>
                            <Typography fontWeight={ThemeSettings.THEME_FONT_WEIGHTS.medium}>
                                Lista
                            </Typography>
                        </Grid>
                        <Grid container>
                            <Grid container alignItems={`center`} padding={`.5vw`} borderRadius={`10px`} sx={{ '&:hover': { backgroundColor: ThemeSettings.THEME_COLORS.gray }, transition: `.3s`, cursor: `pointer` }}>
                                <Grid container xs>
                                    <AddIcon />
                                </Grid>
                                <Grid container xs={11} alignContent={`center`}>
                                    <Typography>
                                        Adicionar nova lista
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid container alignContent={`center`} >
                        <Grid container>
                            <Typography fontWeight={ThemeSettings.THEME_FONT_WEIGHTS.medium}>
                                Tags
                            </Typography>
                        </Grid>
                        <Grid container gap={{ xs: ThemeSettings.THEME_SPACING.mini, sm: ThemeSettings.THEME_SPACING.extraSmall }}>
                            <Grid container xs alignItems={`center`} justifyContent={`center`} padding={`.5vw`} bgcolor={`red`} borderRadius={`5px`} sx={{ cursor: `pointer` }}>
                                <Grid container xs={11} alignContent={`center`} justifyContent={`center`}>
                                    <Typography>
                                        Tag 1
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Grid container xs alignItems={`center`} justifyContent={`center`} padding={`.5vw`} bgcolor={`blue`} borderRadius={`5px`} sx={{ cursor: `pointer` }}>
                                <Grid container xs={11} alignContent={`center`} justifyContent={`center`}>
                                    <Typography>
                                        Tag 1
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Grid container xs alignItems={`center`} justifyContent={`center`} padding={`.5vw`} bgcolor={`yellow`} borderRadius={`5px`} sx={{ cursor: `pointer` }}>
                                <Grid container xs={11} alignContent={`center`} justifyContent={`center`}>
                                    <Typography>
                                        Tag 1
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid container alignContent={`center`} >
                    <Grid container alignItems={`center`} padding={`.5vw`} borderRadius={`5px`} sx={{ '&:hover': { backgroundColor: ThemeSettings.THEME_COLORS.gray }, transition: `.3s`, cursor: `pointer` }}>
                        <Grid container xs>
                            <MenuIcon />
                        </Grid>
                        <Grid container xs={11} alignContent={`center`} >
                            <Typography>
                                Configurações
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid container alignItems={`center`} padding={`.5vw`} borderRadius={`5px`} sx={{ '&:hover': { backgroundColor: ThemeSettings.THEME_COLORS.gray }, transition: `.3s`, cursor: `pointer` }}>
                        <Grid container xs>
                            <LogoutIcon />
                        </Grid>
                        <Grid container xs={11} alignContent={`center`} >
                            <Typography>
                                Sair
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}