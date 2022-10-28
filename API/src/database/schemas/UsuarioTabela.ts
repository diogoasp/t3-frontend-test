import { model, Schema } from "mongoose";
import { IUsuario } from "../../interfaces/IUsuario";

const tabelaUsuario = new Schema<IUsuario>({
    nome: {type: String},
    email: {type: String, required: true, unique: true},
    senha: {type: String, required: true},
    permissao: {type: Number, default: 1}
});

const Usuario = model<IUsuario>("usuarios", tabelaUsuario);

export default Usuario;