<template>
    <div class="content-dyn-form"> 
        <label :for="item.id">{{item.label}}</label>
        <select 
            class="form-control" 
            :name="item.id" 
            :id="item.id" 
            v-model="item.value"
            @change="checkRules"
        >
            <option value="" disabled >Seleciona um item...</option>
            <option :key="i" v-for="(option,i) in item.options" v-bind:value="option.value" >
                {{option.label}}
            </option>
        </select>
        {{item.value}}

        <component v-if="has_son_component" :is="son_component.field + 'Field'" :item="son_component"></component>

    </div>
</template>

<script>

    import selectField from './select'
    import texteareaField from './textearea'
    import inputField from './input'

    export default { 
        components : {
            selectField,
            texteareaField,
            inputField
        }, 
        data() {
            return {
                has_son_component : false,
                son_component : {
                    id : 'console_04',
                    field : 'input',
                    type: 'text',
                    label : "Qual seu nome?",
                    rows : 5,
                    cols : 35
                }
            }            
        },   
        props : {
            item : {
                type : Object,
                required : true
            }
        },
        methods : {
            checkRules(){
                if(this.item.has_rule){
                    //console.log(this.item);]
                    this.has_son_component = true;
                    console.log("son_component",this.has_son_component);

                    // tentar pegar o form do component pai
                    //console.log("Component Pai",this.$root.form_root);
                }
                return false;                
            }
        }
    }
</script>