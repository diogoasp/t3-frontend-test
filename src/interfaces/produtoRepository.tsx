export interface IProdutoRepository {
  getAll(): { "nome": string, "descricao": string, "valor": number, "_id": number }[];
  getProduto(_id: number): object;
  setProduto(produto: { "nome": string, "descricao": string, "valor": number, "_id": number }): boolean;
  deleteProduto(_id: number): void;
}
