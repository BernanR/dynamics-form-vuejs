<template>
    <div class="container-fluid">
        <h1>Dynamic Form</h1>
        <div>
            <form-content :form="form"></form-content>
        </div>
    </div>
    
</template>

<script>

    import FormContent from '@/components/FormContent'

    export default {
        components : {
            FormContent
        },
        data() {
            return {
                form : [
                    {
                        id : 'console_01',
                        field : 'select',
                        label : "Consoles",
                        value : "",
                        options : [{value:1,label:'Play Station'},{value:2, label: "x-box"}],
                        rules : {}
                    },
                    {
                        id : 'console_02',
                        field : 'textearea',
                        label : "O que você mais gosta de fazer?",
                        rows : 5,
                        cols : 35,
                        rules : {}
                    },
                    {
                        id : 'console_03',
                        field : 'input',
                        type: 'number',
                        label : "Quantos Anos você tem?",
                        rows : 5,
                        cols : 35,
                        rules : {}
                    },
                    {
                        id : 'console_04',
                        field : 'input',
                        type: 'text',
                        label : "Qual seu nome?",
                        rows : 5,
                        cols : 35,
                        rules : {}
                    }
                ]
            }
        },
        create() {
            console.log('formulário:',this.form)
        }
    }

</script>