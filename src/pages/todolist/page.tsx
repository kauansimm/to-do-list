import { useState, useEffect } from "react";
import Menu from "../../components/content/menu";
import ThemeSettings from "../../themes/themeSettings";
import Movie from "../../components/content/movie";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import useCatalogo from "../../hooks/useFecth";
import { Grid, Typography } from "@mui/material";

type ObjType = {
    id: number,
    thumbUrl: string,
    url: string,
    title: string,
}

export default function Page() {
  const { catalogo, adicionarFilme, removerFilme, editarFilme } = useCatalogo();
  const [filmes, setFilmes] = useState(catalogo);
  const [showEditMovie, setShowEditMovie] = useState(false);
  const [filmeSelecionado, setFilmeSelecionado] = useState<ObjType | null>(null);

  useEffect(() => {
    setFilmes(catalogo);
  }, [catalogo]);

  const openEditMovie = (movie: { id: number; thumbnailUrl: string; url: string; title: string }) => {
    
    setFilmeSelecionado({
      id: movie.id,
      thumbUrl: movie.thumbnailUrl,
      url: movie.url,
      title: movie.title,
    });
    setShowEditMovie(true);
  };

  const closeEditMovie = () => {
    setShowEditMovie(false);
    setFilmeSelecionado(null);
  };

  useGSAP(() => {
    gsap.to(".menu-animation-todolist", {
      left: 0,
      delay: 0.6,
      duration: 1.6,
      ease: "power4.out"
    });
    gsap.to(".animation-tasks-todolist", {
      right: 0,
      duration: 1.8,
      delay: 0.6,
      stagger: 0.2,
      ease: "power4.out"
    });
    gsap.to(".animation-text-todolist", {
      top: 0,
      duration: 2,
      ease: "power4.out",
      delay: 0.4
    });
  });

  return (
    <Grid container overflow="hidden" paddingY={{ xs: ThemeSettings.THEME_SPACING.mini, sm: ThemeSettings.THEME_SPACING.extraSmall, xl: ThemeSettings.THEME_SPACING.verySmall }}>
      <Grid container className="menu-animation-todolist" left="-100%" height="100%" justifyContent="center" position="relative" xs={3.5}>
        <Menu 
          array={[]} 
          showEditMovie={showEditMovie} 
          closeEditMovie={closeEditMovie} 
          adicionarFilme={adicionarFilme} 
          editarFilme={editarFilme}
          obj={filmeSelecionado} 
        />
      </Grid>
      <Grid container xs={8.2} alignContent="start" gap={{ xs: ThemeSettings.THEME_SPACING.extraSmall, sm: ThemeSettings.THEME_SPACING.verySmall }}>
        <Grid container position="relative" top="-100%" className="animation-text-todolist">
          <Typography variant="h1" fontWeight={ThemeSettings.THEME_FONT_WEIGHTS.bold}>
            Mural de filmes
          </Typography>
        </Grid>
        <Grid container justifyContent="space-between" rowGap={{ xs: ThemeSettings.THEME_SPACING.extraSmall, sm: ThemeSettings.THEME_SPACING.verySmall }}>
          {(filmes.slice(0, 40) ?? []).map((movie) => (
            <Grid container key={movie.id} xs={3.8} position="relative" className="animation-tasks-todolist">
              <Movie 
                openMenuEditMovie={() => openEditMovie(movie)} 
                id={movie.id} 
                url={movie.url} 
                removerFilme={removerFilme} 
                thumbnailUrl={movie.thumbnailUrl} 
                title={movie.title} 
              />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}
