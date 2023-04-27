
import './cadastro.css'
export default  function Cadastro(){
    return(
        <><div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
            <h1 className="display-6">Cadastro de assinante</h1>
        </div>
        <div class="form-group col-md-6 text-align-center">
                <form class="needs-validation">
                    <h4>Dados pessoais</h4>
                    <label>
                        Nome:
                        <input type="text" />
                    </label>
                    <br />
                    <label>
                        Endereço:
                        <input type="text" />
                    </label>
                    <br />
                    <label>
                        Telefone:
                        <input type="text" placeholder='(00) 0000-0000' />
                    </label>
                    <br />
                    <h4>Plano Escolhido</h4>
                    <div class="btn-group" role="group" aria-label="Exemplo básico">
                        
                    <button type="button" class="btn btn-secondary">Free</button>
                    <button type="button" class="btn btn-secondary">Plus</button>
                    </div>
                    <br />
                    <br />
                    <button type="submit" class="btn btn-dark">Assinar</button>
                </form>

            </div></>
        
    )
}