import { useState, useEffect } from 'react';

interface Filme {
    albumId: number;
    id: number;
    title: string;
    url: string;
    thumbnailUrl: string;
}

interface CatalogoHook {
    catalogo: Filme[];
    adicionarFilme: (novoFilme: Omit<Filme, 'id'>) => Promise<void>;
    removerFilme: (id: number) => Promise<void>;
    editarFilme: (id: number, dadosAtualizados: Partial<Filme>) => Promise<void>;
}

const API_URL = 'https://jsonplaceholder.typicode.com/photos';
const LOCAL_STORAGE_KEY = 'catalogo_filmes';

const useCatalogo = (): CatalogoHook => {
    const [catalogo, setCatalogo] = useState<Filme[]>([]);
    const [carregando, setCarregando] = useState<boolean>(true);

    useEffect(() => {
        const carregarCatalogoInicial = async () => {
            try {
                // Tenta carregar do localStorage
                const storedFilmes = localStorage.getItem(LOCAL_STORAGE_KEY);
                let filmesDoLocalStorage: Filme[] = [];

                if (storedFilmes) {
                    filmesDoLocalStorage = JSON.parse(storedFilmes) as Filme[];
                    console.log("useEffect: Carregando do localStorage:", filmesDoLocalStorage);
                }

                // Carrega da API
                console.log("useEffect: Carregando da API...");
                const response = await fetch(API_URL);
                const data = await response.json() as Filme[];
                console.log("useEffect: Dados da API:", data);

                // Combina os dados da API com os dados do localStorage
                const catalogoCompleto = [...filmesDoLocalStorage, ...data];
                setCatalogo(catalogoCompleto);
            } catch (error) {
                console.error("useEffect: Erro ao carregar dados:", error);
            } finally {
                setCarregando(false);
            }
        };

        carregarCatalogoInicial();
    }, []);

    useEffect(() => {
        console.log("useEffect: Salvando no localStorage:", catalogo);
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(catalogo));
    }, [catalogo]);

    const adicionarFilme = async (novoFilme: Omit<Filme, 'id'>): Promise<void> => {
        try {
            const novoId = catalogo.length > 0 ? Math.max(...catalogo.map(f => f.id)) + 1 : 1;
            const filmeCompleto: Filme = { id: novoId, ...novoFilme };

            setCatalogo(prevCatalogo => [filmeCompleto, ...prevCatalogo]);
        } catch (error) {
            console.error("Erro ao adicionar filme:", error);
        }
    };

    const removerFilme = async (id: number): Promise<void> => {
        try {
            setCatalogo(prevCatalogo => prevCatalogo.filter(filme => filme.id !== id));
        } catch (error) {
            console.error("Erro ao remover filme:", error);
        }
    };

    const editarFilme = async (id: number, dadosAtualizados: Partial<Filme>): Promise<void> => {
        try {
            setCatalogo(prevCatalogo =>
                prevCatalogo.map(filme => (filme.id === id ? { ...filme, ...dadosAtualizados } : filme))
            );
        } catch (error) {
            console.error("Erro ao editar filme:", error);
        }
    };

    return { catalogo, adicionarFilme, removerFilme, editarFilme };
};

export default useCatalogo;