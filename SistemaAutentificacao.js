/*
    Ser autenticavel significa ter um metodo "autenticar"
*/
export class SistemaAutentificacao {
    static login (autenticavel, senha) {
        if (SistemaAutentificacao.ehAutenticavel(autenticavel)) {
            return autenticavel.autenticar(senha)
        }
        return 'Objeto declado não tem metodo autenticar'
    }

    static ehAutenticavel(autenticavel) {
        return 'autenticar' in autenticavel && autenticavel.autenticar instanceof Function
    }
}