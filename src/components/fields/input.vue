<template>
    <div class="content-dyn-form"> 
        <label  :for="item.id">{{ item.label }}</label>
        <input class="form-control" :id="item.id" :name="item.id" :type="item.type" v-model="item.value">
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