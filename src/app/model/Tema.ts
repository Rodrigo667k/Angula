import { Postagem } from "./Postagem"

export class Tema{
    postTema(tema: Tema) {
      throw new Error('Method not implemented.')
    }

    public id: number
    public descricao: string
    public postagem: Postagem[]

}