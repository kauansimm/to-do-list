import { useState } from "react";

export default function useFetch() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const request = async (url: string, method: string = "GET", body?: any) => {
        console.log("URL:", url); // Adicione isso
        console.log("Método:", method); // Adicione isso
        console.log("Corpo:", body); // Adicione isso
        setLoading(true);
        setError(null);

        try {
            const response = await fetch(url, {
                method,
                headers: {
                    "Content-Type": "application/json",
                },
                body: body ? JSON.stringify(body) : null,
            });

            const data = await response.json();
            if (!response.ok) throw new Error(data.message || "Erro desconhecido");

            return data;
        } catch (err: any) {
            setError(err.message);
            return null;
        } finally {
            setLoading(false);
        }
    };

    return { request, loading, error };
}
