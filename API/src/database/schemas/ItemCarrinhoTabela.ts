import { model, Schema } from "mongoose";
import { IItemCarrinho } from "../../interfaces/IItemCarrinho";

const itemCarrinhoEsquema = new Schema({
    produto: {type: Schema.Types.ObjectId, require: true, ref: "produtos"},
    quantidade: {type: Number} 
});

const ItemCarrinho = model<IItemCarrinho>("item_carrinhos", itemCarrinhoEsquema);

export default ItemCarrinho;