import { model, Schema } from "mongoose";
import { IUsuario } from "../../interfaces/IUsuario";

const tabelaUsuario = new Schema<IUsuario>({
    nome: {type: String},
    email: {type: String, required: true, unique: true},
    senha: {type: Number, required: true},
    permissao: {type: Number}
});

const Usuario = model<IUsuario>("usuarios", tabelaUsuario);

export default Usuario;