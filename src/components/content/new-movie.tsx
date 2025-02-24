import { Button, Grid, TextField, Typography } from "@mui/material";
import ThemeSettings from "../../themes/themeSettings";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import useCatalogo from "../../hooks/useFecth";
import { useState } from "react";

interface NewMovieProps {
    onClose: () => void;
    adicionarFilme: (novoFilme: Omit<Filme, 'id'>) => Promise<void>; // Adicione a prop
}

interface Filme {
    albumId: number;
    id: number;
    title: string;
    url: string;
    thumbnailUrl: string;
}

export default function NewMovie({ onClose, adicionarFilme }: NewMovieProps) {

    const [title, setTitle] = useState("");
    const [url, setUrl] = useState("");
    const [thumbnailUrl, setThumbnailUrl] = useState("");

    const handleSubmit = async () => {
        if (!title || !url || !thumbnailUrl) {
            alert("Por favor, preencha todos os campos!");
            return;
        }

        const novoFilme = {
            albumId: 1,
            title,
            url,
            thumbnailUrl,
        };

        console.log("Novo filme:", novoFilme);

        await adicionarFilme(novoFilme); // Adiciona ao catálogo

        setTitle("");
        setUrl("");
        setThumbnailUrl("");
    };

    return (
        <Grid container xs={11} alignContent={`start`} gap={{ xs: ThemeSettings.THEME_SPACING.mini + .5, sm: ThemeSettings.THEME_SPACING.extraSmall + .5, xl: ThemeSettings.THEME_SPACING.extraSmall + 1 }}>
            <Grid container alignItems={`center`} justifyContent={`space-between`}>
                <Grid container xs>
                    <Typography fontSize={{ xs: '1.5vw' }} component={`strong`}>
                        Adicionar novo filme
                    </Typography>
                </Grid>
                <Grid container xs={1} sx={{ cursor: `pointer` }} onClick={onClose}>
                    <ArrowBackIosIcon />
                </Grid>
            </Grid>
            <Grid container gap={{ xs: ThemeSettings.THEME_SPACING.mini, sm: ThemeSettings.THEME_SPACING.extraSmall }}>
                <Grid container>
                    <Grid container>
                        <Typography>
                            Título do filme:
                        </Typography>
                    </Grid>
                    <Grid container>
                        <TextField placeholder="Insira o título do filme" value={title} onChange={(e) => setTitle(e.target.value)} />
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid container>
                        <Typography>
                            Url:
                        </Typography>
                    </Grid>
                    <Grid container>
                        <TextField multiline placeholder="Insira sua url" value={url} onChange={(e) => setUrl(e.target.value)} />
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid container>
                        <Typography>
                            Thumb:
                        </Typography>
                    </Grid>
                    <Grid container>
                        <TextField multiline placeholder="Insira sua thumb" value={thumbnailUrl} onChange={(e) => setThumbnailUrl(e.target.value)} />
                    </Grid>
                </Grid>
            </Grid>
            <Grid container>
                <Button variant={`contained`} sx={{ width: `100%` }} onClick={handleSubmit}>
                    Adicionar Filme
                </Button>
            </Grid>
        </Grid>
    )
}