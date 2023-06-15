// sorted linked list, value:1,3,4,5 function to accept a value, 
// check if value is in linked list or not, 
// if present present, print value
// else find where value should be

// INCOMPLETE, WILL NOT PRODUCE CORRECT ANSWER ALWAYS

function createNode(values, next = null) {
    return { values, next }
}

function createLinkedList() {
    let head = null
    let tail = null

    function insert(values) {
        const node = createNode(values)
        if (!head) {
            head = node
            tail = node
            return node
        }
        tail.next = node
        tail = node
        return node
    }

    function check(value) {
        let currentNode = head
        let i = 0
        while (currentNode) {
            // console.log(i);
            if (value === i) {
                console.log('it should be in this position: ', i);
            }
            if (value === currentNode.values) {
                console.log('value is in linked list and it is: ', currentNode.values);
            }
            currentNode = currentNode.next
            i++
        }
    }

    return {
        insert, head, tail, check
    }
}

const x = createLinkedList()
x.insert(1)
x.insert(3)
x.insert(5)
x.insert(6)
x.insert(8)

x.check(25)