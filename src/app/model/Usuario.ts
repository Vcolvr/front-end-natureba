import { Produto } from "./Produto";

export class Usuario{
    public cpf: string;
    public nomeSocial: string;
    public nomeCompletoUsuario: string;
    public dataAniversario: Date;
    public emailUsuario: string;
    public senhaUsuario: string;
    public contadorArvore: number;
    public produtosUsuario: Produto[];
    public meusFavoritos: Produto[];
    public minhasCompras: Produto[];
}