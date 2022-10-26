import { model, Schema } from "mongoose";
import { IProduto } from "../../interfaces/IProduto";

const tabelaEsquema = new Schema<IProduto>({
    nome: {type: String, required: true},
    descricao: {type: String, required: true},
    valor: {type: Number, required: true},
})

const Produto = model<IProduto>("produtos", tabelaEsquema);

export default Produto