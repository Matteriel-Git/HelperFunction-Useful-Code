// **** Code ****


// TIMER CODE TO RUN A SPECIFIC JOB AT DESIRED TIME EVERY DAY
// in Coordinated Universal Time (UTC).

const msInSecond = 1000;
const msInMinute = 60 * msInSecond;
const msInHour = 60 * msInMinute;
const msInDay = 24 * msInHour;

const desiredTimeInHoursInUTC = 18; // fill out your desired hour in UTC!
const desiredTimeInMinutesInUTC = 30; // fill out your desired minutes in UTC!
const desiredTimeInSecondsInUTC = 0; // fill out your desired seconds in UTC!

const currentDate = new Date();

const controlDate = new Date(currentDate.getUTCFullYear(), currentDate.getUTCMonth(), currentDate.getUTCDate(), desiredTimeInHoursInUTC, desiredTimeInMinutesInUTC, desiredTimeInSecondsInUTC);
let desiredDate;

if (currentDate.getTime() <= controlDate.getTime()) {
    desiredDate = controlDate;
}
else {
    desiredDate = new Date(controlDate.getTime() + msInDay);
}

const msDelta = desiredDate.getTime() - currentDate.getTime();

setTimeout(setupInterval, msDelta);

function setupInterval() {
    actualJob();

    setInterval(actualJob, msInDay);
}

function actualJob() {
    console.log('test');
}

// End timer 

















// ****SERIALIZE & DESERIALIZE BINARY TREE****

// Definition for a binary tree node.
function TreeNode(val, left = null, right = null) {
    this.val = val;      // Value of the node
    this.left = left;    // Left child node
    this.right = right;  // Right child node
}

// Serialize function: Converts the binary tree to a string
var serialize = function(root) {
    const result = []; // Array to store the serialized result

    // Helper function to perform DFS traversal
    const dfs = (node) => {
        if (!node) {
            // If the node is null, add 'null' to the result
            result.push('null');
            return;
        }
        // Add the current node's value to the result
        result.push(node.val.toString());
        
        // Recursively call dfs on left and right children
        dfs(node.left);
        dfs(node.right);
    };
    
    // Start DFS traversal from the root node
    dfs(root);
    
    // Join the result array into a comma-separated string
    return result.join(',');
};

// Deserialize function: Converts a string back to a binary tree
var deserialize = function(data) {
    const nodes = data.split(','); // Split the string into an array of nodes
    let index = 0; // To keep track of the current node during traversal
    
    // Helper function to reconstruct the tree using DFS
    const dfs = () => {
        if (nodes[index] === 'null') {
            // If the current node is 'null', return null and move to the next node
            index++;
            return null;
        }
        
        // Create a new TreeNode with the current value
        const node = new TreeNode(parseInt(nodes[index]));
        index++; // Move to the next node
        
        // Recursively build the left and right subtrees
        node.left = dfs();
        node.right = dfs();
        
        // Return the constructed node
        return node;
    };
    
    // Start DFS to reconstruct the tree from the serialized data
    return dfs();
};

// END CODE