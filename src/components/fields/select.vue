<template>
    <div class="content-dyn-form"> 
        <label :for="item.id">{{item.label}}</label>
        <select class="form-control" :name="item.id" :id="item.id" v-model="item.value">
            <option value="" disabled >Seleciona um item...</option>
            <option :key="i" v-for="(option,i) in item.options" v-bind:value="option.value" >
                {{option.label}}
            </option>
        </select>
        {{item.value}}
    </div>
</template>

<script>
    export default {        
        props : {
            item : {
                type : Object,
                required : true
            }
        }
    }
</script>