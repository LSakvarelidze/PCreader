import pcData from './pcData.json' assert {type: 'json'};
let infolist = document.querySelector('ul');
let inpfld = document.querySelector('input')

inpfld.addEventListener('input', e => {
    let val = e.target.value;

    if(val.length === 12) {
        let varArr = val.split('')
        varArr.forEach((el, idx) => {
            drawList(el, pcData[`Position${idx+1}`].info, pcData[`Position${idx+1}`][el])
        });
    } else {
        infolist.innerHTML = ''
    }
})

const drawList = (value, info, content) => {
    let li = document.createElement('li')
    let pos = document.createElement('div')
    let posval = document.createElement('div')
    let desc = document.createElement('div')
    pos.classList.add('pos')
    posval.classList.add('posval')
    desc.classList.add('desc')
    pos.innerText = info
    posval.innerText = `${info.split(' ')[0]} value: ${value}`
    desc.innerText = content
    infolist.appendChild(li)
    li.appendChild(pos)
    li.appendChild(posval)
    li.appendChild(desc)
}
