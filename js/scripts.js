const objs = [
    {
        nome: 'Davi',
        idade: 36,
        esta_trabalhando: true,
        work_details: {
            profissao: 'Programador',
            empresa: 'Empresa X'
        },
        hobbies: ['Academia', 'Games']
    },
    {
        nome : 'Rafael',
        idade: 26,
        esta_trabalhando: false,
        work_details: {
            profisssao : null,
            empresa: null 
        },
        hobbies: ['Corrida','Futebol']
    },
]

// JSON
// converter objeto para json
const jsonData = JSON.stringify(objs)
console.log(jsonData)
console.log(typeof jsonData)


// converter json para objeto
const objData = JSON.parse(jsonData);
console.log(objData)
console.log(typeof objData)

objData.map((pessoa) => {
    console.log(pessoa.nome)
})
