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

let child = document.createElement('div')
child.className = "deptchild"


let child1 = document.createElement('div')
child1.className = 'deptchild1'

let div1 = document.createElement('div')
div1.className = 'deptinfo'
let depth1 = document.createElement('h1')
depth1.textContent = 'Cardiology'
let deptp1 = document.createElement('p')
deptp1.textContent = 'Quis excepturi porro totam sint earum quo nulla perspiciatis eius.'
div1.append(depth1)
div1.append(deptp1)


let div2 = document.createElement('div')
div2.className = 'deptinfo'
let depth2 = document.createElement('h1')
depth2.textContent = 'Neurology'
let deptp2 = document.createElement('p')
deptp2.textContent = 'Voluptas vel esse repudiandae quo excepturi.'
div2.append(depth2)
div2.append(deptp2)


let div3 = document.createElement('div')
div3.className = 'deptinfo'
let depth3 = document.createElement('h1')
depth3.textContent = 'Hepatology'
let deptp3 = document.createElement('p')
deptp3.textContent = 'Velit veniam ipsa sit nihil blanditiis mollitia natus.'
div3.append(depth3)
div3.append(deptp3)


let div4 = document.createElement('div')
div4.className = 'deptinfo'
let depth4 = document.createElement('h1')
depth4.textContent = 'Pediatrics'
let deptp4 = document.createElement('p')
deptp4.textContent = 'Ratione hic sapiente nostrum doloremque illum nulla praesentium id'
div4.append(depth4)
div4.append(deptp4)


child1.append(div1)
child1.append(div2)
child1.append(div3)
child1.append(div4)

child.append(child1)

dept.append(child)



let child2 = document.createElement('div')
child2.className = "deptchild2"