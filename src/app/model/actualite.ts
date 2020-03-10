export interface Actualite {
    id: string;
    titre: string;
    contenu: string;
    date: { seconds: number, nanoseconds: number };
}
