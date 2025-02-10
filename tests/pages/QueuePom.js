exports.QueuePom=class QueuePom{
    constructor(page){
        this.page=page;
        this.GetstartedQueue="//a[@href='queue']";
        this.implementationQPython="//a[text()='Implementation of Queue in Python']"
        this.implementationDeque="//a[text()='Implementation using collections.deque']"
        this.implementaionArray="//a[text()='Implementation using array']"

        this.queueOperations="//a[text()='Queue Operations']"
        
        

    }
   
}