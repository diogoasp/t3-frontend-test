import { model, Schema, SchemaType } from "mongoose";
import { IItemCarrinho } from "../../interfaces/IItemCarrinho";

const itemCarrinhoEsquema = new Schema({
    produto: {type: Object, require: true, ref: "produtos"},
    quantidade: {type: Number},
    valor: {type: Number, default: 0}
});

const ItemCarrinho = model<IItemCarrinho>("item_carrinhos", itemCarrinhoEsquema);

export default ItemCarrinho;