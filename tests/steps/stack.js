const {Given,When,Then}=require("@cucumber/cucumber")
const { chromium, expect } = require("@playwright/test");
Given('The user clicks on Get started button of Stack after logged in', async function () {
    
    await this.stack.clickOnlinks(this.stack.GetstartedStack);
    await expect(this.page).toHaveURL("https://dsportalapp.herokuapp.com/stack/");
  await expect(this.page).toHaveTitle('Stack');
});


When('The user try to click the {string} button', async function (string) {
    switch(string){
        case "Operations in Stack":
            await this.stack.clickOnlinks(this.stack.operationsinStack);
            break;
        case "Implementation":
            await this.stack.clickOnlinks(this.stack.implementation);
            break;
        case "Applications":
            await this.stack.clickOnlinks(this.stack.applications);
            break; 
         
        //Linkedlist    
        case "Introduction":
            await this.stack.clickOnlinks(this.linkedlist.LLIntroductionLink);
            break;
            
        case "Creating Linked LIst":
            await this.stack.clickOnlinks(this.linkedlist.LLcreation);
            break; 
         
        case "Types of Linked List":
            await this.stack.clickOnlinks(this.linkedlist.LLtypesOf);
            break;   
            
        case "Implement Linked List in Python":
            await this.stack.clickOnlinks(this.linkedlist.ImpelementLL);
            break;   
            
        case "Traversal":
            await this.stack.clickOnlinks(this.linkedlist.TraversLL);
            break;  
        case "Insertion":
            await this.stack.clickOnlinks(this.linkedlist.InsertLL);
            break;  
            
        case "Deletion":
                await this.stack.clickOnlinks(this.linkedlist.DeleteLL);
                break; 
        //Queue        
                
        case "Implementation of Queue in Python":
                    await this.stack.clickOnlinks(this.queue.implementationQPython);
                    break; 
        case "Implementation using collections.deque":
                        await this.stack.clickOnlinks(this.queue.implementationDeque);
                        break;  
        case "Implementation using array":
                        await this.stack.clickOnlinks(this.queue.implementaionArray);
                        break;  
                        
        case "Queue Operations":
                            await this.stack.clickOnlinks(this.queue.queueOperations);
                            break;  
                            
        //Tree
        
        case "Overview of Trees":
            await this.stack.clickOnlinks(this.tree.overviewTree);
            break;
        case "Terminologies":
            await this.stack.clickOnlinks(this.tree.terminologies);
            break;
        case "Types of Trees":
            await this.stack.clickOnlinks(this.tree.typesOfTrees);
            break; 
        case "Tree Traversals":
            await this.stack.clickOnlinks(this.tree.treeTraversals);
            break; 
        case "Traversals-Illustration":
            await this.stack.clickOnlinks(this.tree.traversalsIllustration);
            break; 
        case "Binary Trees":
            await this.stack.clickOnlinks(this.tree.binaryTrees);
            break; 
        case "Types of Binary Trees":
            await this.stack.clickOnlinks(this.tree.typesOfBinaryTrees);
            break;
        case "Implementation in Python":
            await this.stack.clickOnlinks(this.tree.implementationPythonTree);
            break; 
        case "Binary Tree Traversals":
            await this.stack.clickOnlinks(this.tree.binaryTreeTravers);
            break;
        case "Implementation of Binary Trees":
            await this.stack.clickOnlinks(this.tree.implementationOfBinaryTrees);
            break;
         case "Applications of Binary trees":
            await this.stack.clickOnlinks(this.tree.applicationsBinaryTrees);
            break;  
            
        case "Binary Search Trees":
                await this.stack.clickOnlinks(this.tree.binarySearchTrees);
                break;
        case "Implementation Of BST":
                await this.stack.clickOnlinks(this.tree.implementationOfBST);
                break;  
                
        //Graph 
        
        case "Graph":
                await this.stack.clickOnlinks(this.graph.graphLink);
                break;
        case "Graph Representations":
                await this.stack.clickOnlinks(this.graph.graphrepresentation);
                break;

        //Array
        
        case "Arrays in Python":
             await this.stack.clickOnlinks(this.array.arraysInPython);
             break; 
         case "Arrays Using List":
             await this.stack.clickOnlinks(this.array.arraysUsingList);
             break; 
         case "Basic Operations in Lists":
            await this.stack.clickOnlinks(this.array.arraysBasicOperationsList);
            break; 
        case "Applications of Array":
            await this.stack.clickOnlinks(this.array.arrayApplication);
            break;
    }

    
});


Then('The user should be directed to {string} Page', async function (string) {
    switch(string){
        case "Operations in Stack":
            await expect(this.page).toHaveURL("https://dsportalapp.herokuapp.com/stack/operations-in-stack/");
            await expect(this.page).toHaveTitle(string);
            break;
        case "Implementation":
            await expect(this.page).toHaveURL("https://dsportalapp.herokuapp.com/stack/implementation/");
            await expect(this.page).toHaveTitle(string);
            break;
        case "Applications":
            await expect(this.page).toHaveURL("https://dsportalapp.herokuapp.com/stack/stack-applications/");
            await expect(this.page).toHaveTitle(string);
            break;
        case "Introduction":
            await expect(this.page).toHaveURL("https://dsportalapp.herokuapp.com/linked-list/introduction/");
            await expect(this.page).toHaveTitle(string);
                break;
                
        case "Creating Linked LIst":
            await expect(this.page).toHaveURL("https://dsportalapp.herokuapp.com/linked-list/creating-linked-list/");
            await expect(this.page).toHaveTitle(string);
                break; 
             
        case "Types of Linked List":
            await expect(this.page).toHaveURL("https://dsportalapp.herokuapp.com/linked-list/types-of-linked-list/");
            await expect(this.page).toHaveTitle(string);
                break;   
                
        case "Implement Linked List in Python":
            await expect(this.page).toHaveURL("https://dsportalapp.herokuapp.com/linked-list/implement-linked-list-in-python/");
            await expect(this.page).toHaveTitle(string);
                break;   
                
        case "Traversal":
            await expect(this.page).toHaveURL("https://dsportalapp.herokuapp.com/linked-list/traversal/");
            await expect(this.page).toHaveTitle(string);
                break;  
        case "Insertion":
            await expect(this.page).toHaveURL("https://dsportalapp.herokuapp.com/linked-list/insertion-in-linked-list/");
            await expect(this.page).toHaveTitle(string);
                break;  
                
        case "Deletion":
            await expect(this.page).toHaveURL("https://dsportalapp.herokuapp.com/linked-list/deletion-in-linked-list/");
            await expect(this.page).toHaveTitle(string);
                 break;  
                 
        //Queue        
                
        case "Implementation of Queue in Python":
            await expect(this.page).toHaveURL("https://dsportalapp.herokuapp.com/queue/implementation-lists/");
            await expect(this.page).toHaveTitle(string);
                    break; 
        case "Implementation using collections.deque":
            await expect(this.page).toHaveURL("https://dsportalapp.herokuapp.com/queue/implementation-collections/");
            await expect(this.page).toHaveTitle(string);
                        break;  
        case "Implementation using array":
            await expect(this.page).toHaveURL("https://dsportalapp.herokuapp.com/queue/Implementation-array/");
            await expect(this.page).toHaveTitle(string);
                        break;  
                        
        case "Queue Operations":
            await expect(this.page).toHaveURL("https://dsportalapp.herokuapp.com/queue/QueueOp/");
            await expect(this.page).toHaveTitle(string);
                            break;   
                            
       //Tree
        
       case "Overview of Trees":
        await expect(this.page).toHaveURL("https://dsportalapp.herokuapp.com/tree/overview-of-trees/");
            await expect(this.page).toHaveTitle(string);
        break;
    case "Terminologies":
        await expect(this.page).toHaveURL("https://dsportalapp.herokuapp.com/tree/terminologies/");
            await expect(this.page).toHaveTitle(string);
        break;
    case "Types of Trees":
        await expect(this.page).toHaveURL("https://dsportalapp.herokuapp.com/tree/types-of-trees/");
        await expect(this.page).toHaveTitle(string);
        break; 
    case "Tree Traversals":
        await expect(this.page).toHaveURL("https://dsportalapp.herokuapp.com/tree/tree-traversals/");
            await expect(this.page).toHaveTitle(string);
        break; 
    case "Traversals-Illustration":
        await expect(this.page).toHaveURL("https://dsportalapp.herokuapp.com/tree/traversals-illustration/");
            await expect(this.page).toHaveTitle(string);
        break; 
    case "Binary Trees":
        await expect(this.page).toHaveURL("https://dsportalapp.herokuapp.com/tree/binary-trees/");
            await expect(this.page).toHaveTitle(string);
        break; 
    case "Types of Binary Trees":
        await expect(this.page).toHaveURL("https://dsportalapp.herokuapp.com/tree/types-of-binary-trees/");
            await expect(this.page).toHaveTitle(string);
        break;
    case "Implementation in Python":
        await expect(this.page).toHaveURL("https://dsportalapp.herokuapp.com/tree/implementation-in-python/");
            await expect(this.page).toHaveTitle(string);
        break; 
    case "Binary Tree Traversals":
        await expect(this.page).toHaveURL("https://dsportalapp.herokuapp.com/tree/binary-tree-traversals/");
            await expect(this.page).toHaveTitle(string);
        break;
    case "Implementation of Binary Trees":
        await expect(this.page).toHaveURL("https://dsportalapp.herokuapp.com/tree/implementation-of-binary-trees/");
        await expect(this.page).toHaveTitle(string);
        break;
     case "Applications of Binary trees":
        await expect(this.page).toHaveURL("https://dsportalapp.herokuapp.com/tree/applications-of-binary-trees/");
        await expect(this.page).toHaveTitle(string);
        break;  
        
    case "Binary Search Trees":
        await expect(this.page).toHaveURL("https://dsportalapp.herokuapp.com/tree/binary-search-trees/");
        await expect(this.page).toHaveTitle(string);
            break;
    case "Implementation Of BST":
        await expect(this.page).toHaveURL("https://dsportalapp.herokuapp.com/tree/implementation-of-bst/");
        await expect(this.page).toHaveTitle(string);
            break;  
            
     //Graph 
        
     case "Graph":
        await expect(this.page).toHaveURL("https://dsportalapp.herokuapp.com/graph/graph/");
        await expect(this.page).toHaveTitle(string);
        break;
    case "Graph Representations":
        await expect(this.page).toHaveURL("https://dsportalapp.herokuapp.com/graph/graph-representations/");
        await expect(this.page).toHaveTitle(string);
        break; 
        
    //Array    
        
        case "Arrays in Python":
            await expect(this.page).toHaveURL("https://dsportalapp.herokuapp.com/array/arrays-in-python/");
        await expect(this.page).toHaveTitle(string);
            break; 
        case "Arrays Using List":
            await expect(this.page).toHaveURL("https://dsportalapp.herokuapp.com/array/arrays-using-list/");
        await expect(this.page).toHaveTitle(string);
            break; 
        case "Basic Operations in Lists":
            await expect(this.page).toHaveURL("https://dsportalapp.herokuapp.com/array/basic-operations-in-lists/");
            await expect(this.page).toHaveTitle(string);
           break; 
       case "Applications of Array":
        await expect(this.page).toHaveURL("https://dsportalapp.herokuapp.com/array/applications-of-array/");
        await expect(this.page).toHaveTitle(string);
           break;    
    }
    
});


When('The user clicks {string} button', async function (string) {
    await this.stack.clickOnlinks(this.dsPOM.DSTryEditor);
});
