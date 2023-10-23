export interface Users{
    id: Number;
    usuario: String;
    email: String;
    password: String;
    carreras: String;
    sede: String;
    role: String;
    isactive: boolean;
    asig1: String;
    asig2: String;
    anno: String;
    semestre: String;
    horas: String;
}

export interface User{
    usuario: String;
    email: String;
    password: String;
    carreras: String;
    sede: String;
    role: String;
    isactive: boolean;
    asig1: String;
    asig2: String;
    anno: String;
    semestre: String;
    horas: String;
}

export interface IEscuelas{
    nombre: String;
}