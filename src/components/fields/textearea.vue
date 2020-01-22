<template>
    <div class="content-dyn-form"> 
        <label :for="item.id">{{item.label}}</label>
        <textarea class="form-control" :name="item.id" :id="item.id" :cols="item.cols" :rows="item.rows"></textarea>
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