let dept = document.getElementById('dept')
let h1 = document.createElement('h1')
h1.textContent = ('DEPARTMENTS')
let hr = document.createElement('hr')
let p = document.createElement('p')
p.textContent = (`Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid 
fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui 
impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.`)

dept.append(h1)
dept.append(hr)
dept.append(p)



let detalis = [{
        heading: 'Cardiolog',
        para: 'Quis excepturi porro totam sint earum quo nulla perspiciatis eius.'
    },
    {
        heading: 'Neurology',
        para: "Voluptas vel esse repudiandae quo excepturi."
    },
    {
        heading: 'Hepatology',
        para: ' Velit veniam ipsa sit nihil blanditiis mollitia natus.'
    },
    {
        heading: 'Pediatrics',
        para: ' Ratione hic sapiente nostrum doloremque illum nulla praesentium id'
    }
]

let deptchild = document.createElement('div')
deptchild.className = ("deptchild")
deptchild.id = ('deptchildid')

dept.append(deptchild)

let deptchildinfo = document.createElement('div')
deptchildinfo.id = 'deptchildinfo'

deptchild.append(deptchildinfo)

detalis.map(element => {
    return deptchildinfo.innerHTML +=
        ` 
           <div class="para1">
   <h1>${element.heading}</h1>
   <p>${element.para}</p>
   </div>
    `
})


let display = document.createElement('div')