export interface RegisterData extends User {
    contrasenia: string,
}

export interface User{
    nameDeUsuario: string,
    name: string,
    lastName: string,
}

export interface LoginData {
    nameDeUsuario: string,
    contrasenia: string
}