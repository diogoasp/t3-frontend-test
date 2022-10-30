import { model, Schema } from "mongoose";
import { IProduto } from "../../interfaces/IProduto";

const esquemaProduto = new Schema({
    nome: {type: String, required: true},
    descricao: {type: String, required: true},
    valor: {type: Number, required: true},
})

const Produto = model<IProduto>("produtos", esquemaProduto);

export default Produto