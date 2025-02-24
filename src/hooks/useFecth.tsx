import { useState, useEffect } from "react";

export interface Filme {
    albumId: number;
    id: number;
    title: string;
    url: string;
    thumbnailUrl: string;
}

export default function useCatalogo() {
    const [catalogo, setCatalogo] = useState<Filme[]>([]);

    const updateLocalStorage = (data: Filme[]) => {
        localStorage.setItem("catalogo", JSON.stringify(data));
    };

    useEffect(() => {
        const dadosLocal = localStorage.getItem("catalogo");
        if (dadosLocal) {
            setCatalogo(JSON.parse(dadosLocal));
        } else {
            fetch("https://jsonplaceholder.typicode.com/photos")
                .then((res) => res.json())
                .then((data: Filme[]) => {
                    const filmesLimitados = data.slice(0, 100);
                    setCatalogo(filmesLimitados);
                    updateLocalStorage(filmesLimitados);
                })
                .catch((error) =>
                    console.error("Erro ao buscar dados da API:", error)
                );
        }
    }, []);

    const adicionarFilme = async (novoFilme: Omit<Filme, "id">): Promise<void> => {
        const newId = catalogo.length > 0 ? Math.max(...catalogo.map(f => f.id)) + 1 : 1;
        const filme: Filme = { ...novoFilme, id: newId };
        const novoCatalogo = [filme, ...catalogo];
        setCatalogo(novoCatalogo);
        updateLocalStorage(novoCatalogo);
    };

    const removerFilme = async (id: number): Promise<void> => {
        console.log("Removendo ID:", id);

        const novoCatalogo = catalogo.filter(filme => filme.id !== id);
        setCatalogo([...novoCatalogo]);

        localStorage.setItem("catalogo", JSON.stringify(novoCatalogo));
    };

    const editarFilme = async (id: number, filmeAtualizado: Partial<Omit<Filme, "id">>): Promise<void> => {
        const novoCatalogo = catalogo.map(filme =>
            filme.id === id ? { ...filme, ...filmeAtualizado } : filme
        );
        setCatalogo(novoCatalogo);
        updateLocalStorage(novoCatalogo);
    };

    return { catalogo, adicionarFilme, removerFilme, editarFilme };
}
