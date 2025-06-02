import { IAuthData } from "./authData";

export function product(a: number, b: number): number {
    return a * b;
}


// the function simulates an authentication process
export function authenticateUser(username: string, password: string): IAuthData {
    const authStatus = username === "deveLOPER" && password === "dev"

    return {
        usernameToLower: username.toLowerCase(),
        usernameCharacters: username.split(''),
        userDetails: {
            email: "dev@email.com",
            username: username,
            password: password
        },
        isAuthenticated: authStatus
    }

}


export class UserNameToLowerCase {
    public toLowerCase(username: string): string {
        if (username === "") {
            throw new Error("Username cannot be empty");
        }
        return username.toLowerCase();
    }
}
