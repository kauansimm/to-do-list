import { Grid, Typography } from "@mui/material";
import ThemeSettings from "../../themes/themeSettings";
import { useState } from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

interface MovieProps {
    thumbnailUrl: string;
    title: string;
    url: string;
    id: number;
    removerFilme: (id: number) => Promise<void>;
    openMenuEditMovie: (movie: { id: number; thumbnailUrl: string; url: string; title: string }) => void;
}


export default function Movie({ thumbnailUrl, title, url, id, removerFilme, openMenuEditMovie }: MovieProps) {

    const [imageError, setImageError] = useState(false);
    const [isEnter, setIsEnter] = useState(false)

    const handleMouseEnter = () => {
        setIsEnter(!isEnter)
    }

    const handleDelete = async () => {
        await removerFilme(id);
    };

    return (
        <Grid container overflow={`hidden`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseEnter} position={`relative`} justifyContent={`center`} borderRadius={`10px`} alignContent={`start`} sx={{ aspectRatio: 1 / 1, willChange: `transform`, background: imageError ? `#44474D` : `url(${thumbnailUrl})`, backgroundSize: `cover`, backgroundPosition: `center` }} boxShadow={`0px 5px 5px ${ThemeSettings.THEME_COLORS.black}88`}>
            <img
                src={thumbnailUrl}
                alt={title}
                onError={() => setImageError(true)}
                style={{ display: "none" }}
            />
            <Grid container xs={11} paddingY={{ xs: ThemeSettings.THEME_SPACING.extraSmall, sm: ThemeSettings.THEME_SPACING.verySmall - 1 }} gap={{ xs: ThemeSettings.THEME_SPACING.mini, sm: ThemeSettings.THEME_SPACING.extraSmall }}>
                <Grid container>
                    <Typography color={ThemeSettings.THEME_COLORS.white} fontSize={{ xs: `1.3vw` }} variant="h3" component={`strong`}>
                        {title}
                    </Typography>
                </Grid>
                <Grid container>
                    <Typography color={ThemeSettings.THEME_COLORS.white} fontSize={{ xs: `.8vw` }}>
                        Url: {url}
                    </Typography>
                </Grid>
            </Grid>

            <Grid container width={`auto`} position={`absolute`} zIndex={1} right={`5%`} bottom={isEnter ? `5%` : `-100%`} sx={{ transition: `.4s` }}>
                <EditIcon
                    onClick={() => openMenuEditMovie({
                        id,
                        thumbnailUrl,
                        url,
                        title
                    })}
                    sx={{ width: "2vw", height: "2vw", '&:hover': { color: "#DDFDC0" }, cursor: "pointer", transition: ".3s", color: ThemeSettings.THEME_COLORS.white }}
                />

                <DeleteIcon onClick={handleDelete} sx={{ width: `2vw`, height: `2vw`, '&:hover': { color: `#FD5361` }, cursor: `pointer`, transition: `.3s`, color: ThemeSettings.THEME_COLORS.white }} />
            </Grid>

        </Grid>
    )
}