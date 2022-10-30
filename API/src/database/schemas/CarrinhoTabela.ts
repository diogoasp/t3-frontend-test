import { model, Schema } from "mongoose";
import { ICarrinho } from "../../interfaces/ICarrinho";

const carrinhoEsquema = new Schema({
    usuario: {type: Schema.Types.ObjectId, require: true, ref: "usuarios"},
    itens: [{type: Schema.Types.ObjectId, require: true, ref: "item_carrinhos"}],
    total: {type: Number, default: 0}
})

const Carrinho = model<ICarrinho>("carrinhos", carrinhoEsquema);

export default Carrinho;