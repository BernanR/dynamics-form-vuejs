<template>
    <div class="content">
        <form>

            formulario:

            <ul id="example-1">
                <li :key="i" v-for="(field,i) in form">               
                    <component :is="field.field + 'Field'" :item="field"></component>
                </li>
            </ul>
        </form>
    </div>
</template>

<script>

    import selectField from './fields/select'
    import texteareaField from './fields/textearea'
    import inputField from './fields/input'

    export default{
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
        created(){
            console.log(this.form)
        }
    }
</script>
