import { Grid, Typography } from "@mui/material";
import Menu from "../../components/content/menu";
import ThemeSettings from "../../themes/themeSettings";
// import Task from "../../components/content/movie";
// import { useEffect, useState } from "react";
// import useFetch from "../../hooks/useFecth";
// import NewTask from "../../components/content/new-movie";
import Movie from "../../components/content/movie";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import useCatalogo from "../../hooks/useFecth";
import { useEffect } from "react";

export default function Page() {

    const { catalogo, adicionarFilme } = useCatalogo();

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

    useEffect(() => {
        function tamanhoEmBytes(objeto : object) {
            const str = JSON.stringify(objeto);
            const bytes = new TextEncoder().encode(str).length;
            return bytes;
          }
          
          const catalogo1 = catalogo
          const tamanho = tamanhoEmBytes(catalogo1);
          console.log(`Tamanho do array serializado: ${tamanho} bytes`);
    }, [])

    return (
        <Grid container overflow={`hidden`} paddingY={{ xs: ThemeSettings.THEME_SPACING.mini, sm: ThemeSettings.THEME_SPACING.extraSmall, xl: ThemeSettings.THEME_SPACING.verySmall }}>
            <Grid container className="menu-animation-todolist" left={`-100%`} height={`100%`} justifyContent={`center`} position={`relative`} xs={3.5} >
                <Menu adicionarFilme={adicionarFilme} />
            </Grid>
            <Grid container xs={8.2} alignContent={`start`} gap={{ xs: ThemeSettings.THEME_SPACING.extraSmall, sm: ThemeSettings.THEME_SPACING.verySmall }}>
                <Grid container position={`relative`} top={`-100%`} className="animation-text-todolist">
                    <Typography variant="h1" fontWeight={ThemeSettings.THEME_FONT_WEIGHTS.bold}>
                        Mural de filmes
                    </Typography>
                </Grid>
                <Grid container justifyContent={`space-between`} rowGap={{ xs: ThemeSettings.THEME_SPACING.extraSmall, sm: ThemeSettings.THEME_SPACING.verySmall }}>
                    {(catalogo.slice(0, 40) ?? []).map((movie) => (
                        <Grid container key={movie.id} xs={3.8} position={`relative`} className={`animation-tasks-todolist`} >
                            <Movie url={movie.url} thumbnailUrl={movie.thumbnailUrl} title={movie.title} />
                        </Grid>
                    ))}
                </Grid>
            </Grid>
        </Grid>
    )
}