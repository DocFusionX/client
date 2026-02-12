const BASE_URL = "http://localhost:8000/api/v1";

export async function uploadFile(file: File): Promise<void> {
    const formData = new FormData();
    formData.append("file", file);

    const response = await fetch(`${BASE_URL}/rag/upload`, {
        method: "POST",
        body: formData,
    });

    if (!response.ok) {
        let errorMessage = "Failed to upload file";
        try {
            const errorData = await response.json();
            errorMessage = errorData.detail || JSON.stringify(errorData);
        } catch {
            const text = await response.text();
            if (text) errorMessage = text;
        }
        throw new Error(`Upload failed (${response.status}): ${errorMessage}`);
    }
}

export async function queryRag(question: string): Promise<string> {
    const response = await fetch(`${BASE_URL}/rag/query`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ question }),
    });

    if (!response.ok) {
        let errorMessage = "Failed to query RAG";
        try {
            const errorData = await response.json();
            errorMessage = errorData.detail || JSON.stringify(errorData);
        } catch {
            const text = await response.text();
            if (text) errorMessage = text;
        }
        throw new Error(`Query failed (${response.status}): ${errorMessage}`);
    }

    const data = await response.json();
    return data.answer || data.response || data.text || JSON.stringify(data);
}

export async function clearDatabase(): Promise<void> {
    const response = await fetch(`${BASE_URL}/rag/clear`, {
        method: "POST",
    });

    if (!response.ok) {
        throw new Error(`Clear failed (${response.status})`);
    }
}
