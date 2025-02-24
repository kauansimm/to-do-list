import { Grid, InputAdornment, Link, TextField, Typography } from "@mui/material";
import ThemeSettings from "../../themes/themeSettings";
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import EventIcon from '@mui/icons-material/Event';
import AddIcon from '@mui/icons-material/Add';
import LogoutIcon from '@mui/icons-material/Logout';
import { useState } from "react";
import NewMovie from "./new-movie";
import netflix from '../../assets/img/logo/netflix.png'
import hbo from '../../assets/img/logo/hbo.png'
import prime from '../../assets/img/logo/prime.png'
import useHandleNavigation from "../../hooks/useHandleNavigation";

interface MenuProps {
    adicionarFilme: (novoFilme: Omit<Filme, 'id'>) => Promise<void>;
}

interface Filme {
    albumId: number;
    id: number;
    title: string;
    url: string;
    thumbnailUrl: string;
}

export default function Menu({ adicionarFilme }: MenuProps) {

    const [showNewTask, setShowNewTask] = useState(false);
    const { handleNavigationClick } = useHandleNavigation()

    const handleToggleNewTask = () => {
        setShowNewTask((prev) => !prev);
    };

    return (
        <Grid container xs={3} position={`fixed`} justifyContent={`center`} height={`93vh`} paddingY={{ xs: ThemeSettings.THEME_SPACING.mini, sm: ThemeSettings.THEME_SPACING.extraSmall, xl: ThemeSettings.THEME_SPACING.verySmall }} bgcolor={`#F2F2F2`} borderRadius={`20px`}>
            {showNewTask && <NewMovie onClose={handleToggleNewTask} adicionarFilme={adicionarFilme} />}
            <Grid container display={showNewTask ? `none` : `flex`} xs={11} alignContent={`space-between`} >
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
                                Lista
                            </Typography>
                        </Grid>
                        <Grid container>
                            <Grid container alignItems={`center`} padding={`.5vw`} borderRadius={`10px`} sx={{ '&:hover': { backgroundColor: ThemeSettings.THEME_COLORS.gray }, transition: `.3s`, cursor: `pointer` }}>
                                <Grid container xs>
                                    <KeyboardDoubleArrowRightIcon />
                                </Grid>
                                <Grid container xs={10} alignContent={`center`}>
                                    <Typography>
                                        Para assistir
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
                                        Filmes assistidos
                                    </Typography>
                                </Grid>
                                <Grid container xs justifyContent={`center`} bgcolor={ThemeSettings.THEME_COLORS.gray} borderRadius={`5px`}>
                                    <Typography component={`strong`} fontSize={{ xs: `1vw` }}>
                                        3
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Grid container>
                                <Grid container alignItems={`center`} onClick={handleToggleNewTask} padding={`.5vw`} borderRadius={`10px`} sx={{ '&:hover': { backgroundColor: ThemeSettings.THEME_COLORS.gray }, transition: `.3s`, cursor: `pointer` }}>
                                    <Grid container xs>
                                        <AddIcon />
                                    </Grid>
                                    <Grid container xs={11} alignContent={`center`}>
                                        <Typography>
                                            Adicionar novo filme
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid container alignContent={`center`} >
                        <Grid container>
                            <Typography fontWeight={ThemeSettings.THEME_FONT_WEIGHTS.medium}>
                                Streaming
                            </Typography>
                        </Grid>
                        <Grid container gap={{ xs: ThemeSettings.THEME_SPACING.mini, sm: ThemeSettings.THEME_SPACING.extraSmall }}>
                            <Grid container xs alignItems={`center`} justifyContent={`center`} padding={`.5vw`} sx={{ cursor: `pointer`, '& img': { objectFit: `cover`, width: `100%`, borderRadius: `10px` } }}>
                                <Link target={`_blank`} href={`https://www.max.com/br/pt`}>
                                    <img src={hbo} alt="" />
                                </Link>
                            </Grid>
                            <Grid container xs alignItems={`center`} justifyContent={`center`} padding={`.5vw`} sx={{ cursor: `pointer`, '& img': { objectFit: `cover`, width: `100%`, borderRadius: `10px` } }}>
                                <Link target={`_blank`} href={`https://www.netflix.com/br/`}>
                                    <img src={netflix} alt="" />
                                </Link>
                            </Grid>
                            <Grid container xs alignItems={`center`} justifyContent={`center`} padding={`.5vw`} sx={{ cursor: `pointer`, '& img': { objectFit: `cover`, width: `100%`, borderRadius: `10px` } }}>
                                <Link target={`_blank`} href={`https://www.primevideo.com/offers/nonprimehomepage/ref=dvm_pds_amz_br_dc_s_g_mkw_s2Hv03IvM-dc_pcrid_620438871494?gad_source=1&gclid=CjwKCAiAzvC9BhADEiwAEhtlN4VdBXPGClnzTtP8mmrQOCb8df7M8edxyvguj1uHgvdo2LDqwHZzzRoC9d8QAvD_BwE&mrntrk=slid__pgrid_62046161446_pgeo_1001686_x__adext__ptid_kwd-296527732991`}>
                                    <img src={prime} alt="" />
                                </Link>
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
                    <Grid container onClick={() => handleNavigationClick(`/home`)} alignItems={`center`} padding={`.5vw`} borderRadius={`5px`} sx={{ '&:hover': { backgroundColor: ThemeSettings.THEME_COLORS.gray }, transition: `.3s`, cursor: `pointer` }}>
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