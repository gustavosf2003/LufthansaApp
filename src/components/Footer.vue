<template>
    <footer class="main-footer">
        <div class="content-footer px-5">
            <div class="columns">
                <div class="column">
                    <h3 class="footer-title">Serviço do Cliente</h3>
                    <hr>
                    <ul>
                        <li>
                            <a href="https://www.lufthansa.com/br/pt/voos">Destinos</a>
                        </li>
                        <li>
                            <a href="https://www.lufthansa.com/br/pt/bagagem-visao-geral">Bagagem</a>
                        </li>
                        <li>
                            <a href="https://www.lufthansa.com/br/pt/mapas-de-assentos-da-frota-de-longo-curso">Aeronaves</a>
                        </li>
                        <li>
                            <a href="https://www.lufthansa.com/br/pt/on-board-overview">Serviços de bordo</a>
                        </li>
                    </ul>
                </div>
                <div class="column">
                    <h3 class="footer-title">Informações</h3>
                    <hr>
                    <ul>
                        <li>
                            <a href="https://www.lufthansa.com/br/en/flight-information">Covid</a>
                        </li>
                        <li>
                            <a href="https://www.lufthansa.com/br/pt/informacoes-passageiros">Direitos dos passageiros</a>
                        </li>
                        <li>
                            <a href="https://business.lufthansagroup.com/de/en/sustainability">Sustentabilidade</a>
                        </li>
                        <li>
                            <a href="https://your.lufthansa-group.com/pub/rf?_ri_=X0Gzc2X%3DWQpglLjHJlTQGlbj090d18v2jMszezbptpg8zg1EoNooIygVwjpnpgHlpgneHmgJoXX0Gzc2X%3DWQpglLjHJlTQGuTpc1k4KJEB1L6ezdBvK0Lzf1EoNooIyg&EMAIL_ADDRESS=new&LANGUAGE=P&COUNTRY_=BR">Newsletter</a>
                        </li>
                    </ul>
                </div>
                <div class="column">
                    <h3 class="footer-title">Lufthansa</h3>
                    <hr>
                    <ul>
                        <li>
                            <a @click="modal = true">Fale conosco</a>
                        </li>
                        <b-modal v-model="modal" :width="640" scroll="keep">
                            <div class="modal-card" style="width: auto">
                                <header class="modal-card-head">
                                    <p class="modal-card-title">Fale conosco</p>
                                    <button type="button" class="delete" @click="closeModal()"/>
                                </header>
                                <section class="modal-card-body">
                                    <div>
                                        <h5 class="city-name">São Paulo</h5>
                                            <span class="icon has-text-dark icon-footer">
                                                <i class="fas fa-phone-alt "></i>
                                            </span>
                                        <a class="mobile-number" href="tel:+551138788151">+55 (11) 3878-8151</a>
                                        <br>
                                            <span class="icon has-text-dark icon-footer">
                                                <i class="far fa-envelope"></i>
                                            </span>
                                        <span class="mobile-number" href="atendimento.brasil@lufthansa.com">atendimento.brasil@lufthansa.com</span>
                                        <br>
                                            <span class="icon has-text-dark icon-footer">
                                                <i class="fas fa-city"></i>
                                            </span>
                                        <span class="mobile-number">Guarulhos Terminal 3</span>
                                    </div>
                                    <div class="mt-5">
                                        <h5 class="city-name">Rio de Janeiro</h5>
                                            <span class="icon has-text-dark icon-footer">
                                                <i class="fas fa-phone-alt "></i>
                                            </span>
                                        <a class="mobile-number" href="tel:+552135001471">+55 (21) 3500-1471</a>
                                        <br>
                                            <span class="icon has-text-dark icon-footer">
                                                <i class="far fa-envelope"></i>
                                            </span>
                                        <span class="mobile-number" href="atendimento.brasil@lufthansa.com">atendimento.brasil@lufthansa.com</span>
                                        <br>
                                            <span class="icon has-text-dark icon-footer">
                                                <i class="fas fa-city"></i>
                                            </span>
                                        <span class="mobile-number">Av. Vinte de Janeiro s/n - Ilha do Governador - Terminal 2</span>
                                    </div>
                                </section>
                                <footer class="modal-card-foot is-justify-content-end">
                                    <b-button label="Sair" class="button is-danger is-outlined" @click="closeModal()" />
                                </footer>
                            </div>
                        </b-modal>
                        <li>
                            <a href="https://www.lufthansa.com/br/pt/parceiros">Parceiros</a>
                        </li>
                        <li>
                            <a href="https://www.lufthansagroup.careers/en">Trabalhe conosco</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="footer-logo container pb-5">
                <img class="img" src="/img/logo.png">
                <h3 class="">Lufthansa</h3>
            </div>
        </div>

    </footer>
</template>

<script>
export default {
    name:"Footer",
    data(){
        return{
            modal: false
        }
    },
    methods:{
        closeModal(){
        this.modal =  false
        }
    }
}
</script>

<style scoped>
.main-footer{
    margin-top: 7rem;
    background-color: #05164D;
    color: white;
    bottom: 0;
    width: 100%;
}
.content-footer{
    background-color: #05164D;
    text-align: justify;

}
div h3{
    font-size: 1.2rem;
    font-weight: 700;
    line-height: 0.1rem;
    margin-top: 10px;
    padding-left: 0.7rem;
}
div hr{
    width: 90%;
    background-color: #ccc;
    height: 1px;
    margin-bottom: 2px;
}
ul li{
    font-size: 0.9rem;
    line-height: 2.4rem;
    padding-left: 0.7rem;
}

li a{
    text-decoration: none;
    color: #dcdcdc;
}
li a:hover{
    color: white;
}
.container{
    display: flex;
    justify-content: center;
    align-items: center;
}
.img{
    width: 55px;
}
.city-name{
    color: #05164D;
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
}
.mobile-number{
    color: gray;
    font-size: 0.9rem;
}
.mobile-number:hover{
    font-size: 0.905rem;
}
.icon-footer{
margin-left: 0.6rem;
margin-right: 0.3rem;
}


</style>