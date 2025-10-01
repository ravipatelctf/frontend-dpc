
export const baseUrl = `http://localhost:3000`;

export async function signupUser(userData) {
    try {
        const response = await fetch(`${baseUrl}/auth/signup`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userData)
        })

        if (!response.ok) {
            throw new Error("Failed to signup!");
        }
        const data = await response.json();
        return data;
    } catch (error) {
        throw error;
    }
}

export async function loginUser(userData) {
    try {
        const response = await fetch(`${baseUrl}/auth/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userData)
        })

        if (!response) {
            throw new Error("Failed to login!");
        }
        const {token} = await response.json();
        sessionStorage.setItem("token", token);
        sessionStorage.setItem("email", userData["email"]);
        return token;
    } catch (error) {
        throw error;
    }
}