export default [
    {
        path: '/form', 
        name : 'form',
        component : () => import("./List-field"),
        meta: {
            showNavbar : true,
            title: 'Form',
            icon: 'speaker_notes',
            label: 'Dynamic Form'            

        }
    }
]
  