import { Magasin } from './Magasin';
export interface Produit {
    id: number;
    description: string;
    prixAchat: number;
    prixVente: number;
    dateEnregistrement: string;
    quantiteStock: number;
    mag:Magasin;


}