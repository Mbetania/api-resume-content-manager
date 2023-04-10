import { useEffect, useState } from 'react';

interface ApiResponse {
    message: string;
}

export default function Page() {
    const [data, setData] = useState<ApiResponse | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('/api/myEndpoint');
            const data = await response.json() as ApiResponse;
            setData(data);
        };

        fetchData();
    }, []);

    return (
        <div>
            {data ? (
                <div>{data.message}</div>
            ) : (
                <div>Loading...</div>
            )}
        </div>
    );
}
