<template>
    <div class="content">
        <div class="row">
            <div class="col-8">
                <form>
                    formulario:
                    <ul id="example-1">
                        <li :key="i" v-for="(field,i) in form">               
                            <component :is="field.field + 'Field'" :item="field"></component>
                        </li>
                    </ul>
                    <button type="button" @click="salveForm" class="btn btn-primary" >Enviar pesquisa</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>

    import selectField from './fields/select'
    import texteareaField from './fields/textearea'
    import inputField from './fields/input'

    export default{
        data(){
            return {
                form_root : this.form
            }
        },
        components : {
            selectField,
            texteareaField,
            inputField
        },
        props : {
            form : {
                type : Array,
                required : true
            }
        },
        methods : {
            salveForm : function(){
                console.log("Resultado: ", this.form );
                return false;
            }
        },
        created(){
            console.log(this.form)
        }
    }
</script>

<style  scoped >
    form {
        margin-bottom:45px;
    }
</style>