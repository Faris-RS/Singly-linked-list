// Array to linked list

const arr = [3,5,8,2,6,1]

function createNode (value, next = null) {
    return {value, next}
}

function createLinkedList () {
    let head = null
    let tail = null

    function insert (value) {
        const node = createNode(value)
        if(!head) {
            head = node
            tail = node
            return node
        }
        tail.next = node
        tail = node
        return node
    }

    function log(){
        console.log(JSON.stringify(head));
    }

    return {head, tail, insert, log}
}

const x = createLinkedList()

for(let i =0; i<arr.length; i++) {
    x.insert(arr[i])
}
// x.log()

// linked list to array


