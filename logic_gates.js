const ps = require("prompt-sync");

const prompt = ps();

// AND Gate
function AndGate(input1, input2) {
    return (input1 === 1 && input2 === 1) ? 1 : 0;
}

// OR Gate
function OrGate(input1, input2) {
    return (input1 === 0 && input2 === 0) ? 0 : 1;
}

// NOT Gate
function NotGate(input1) {
    return (input1 === 0) ? 1 : 0;
}

// NOR Gate
function NorGate(input1, input2) {
    return (input1 === 0 && input2 === 0) ? 1 : 0;
}

// NAND Gate
function NandGate(input1, input2) {
    return (input1 === 1 && input2 === 1) ? 0 : 1;
}

// XNOR Gate
function XnorGate(input1, input2) {
    return (input1 === input2) ? 1 : 0;
}

// XOR Gate
function XorGate(input1, input2) {
    return (input1 !== input2) ? 1 : 0;
}


// Function to simulate logic circuit
function simulateLogicCircuit(input1, input2, gate) {
    if (gate.toUpperCase() === 'AND') {
        const andResult = AndGate(input1, input2);
        console.log(`AND(${input1}, ${input2}) = ${andResult}`);

    } else if (gate.toUpperCase() === 'OR') {
        const orResult = OrGate(input1, input2);
        console.log(`OR(${input1}, ${input2}) = ${orResult}`);

    } else if (gate.toUpperCase() === 'NOT') {
        const notResult = NotGate(input1, input2);
        console.log(`NOT(${input1}, ${input2}) = ${notResult}`);

    } else if (gate.toUpperCase() === 'NOR') {
    const norResult = NorGate(input1, input2);
    console.log(`NOR(${input1}, ${input2}) = ${norResult}`);

    } else if (gate.toUpperCase() === 'XOR') {
    const xorResult = XorGate(input1, input2);
    console.log(`XOR(${input1}, ${input2}) = ${xorResult}`);

    } else if (gate.toUpperCase() === 'XNOR') {
        const xnorResult = XnorGate(input1, input2);
        console.log(`XNOR(${input1}, ${input2}) = ${xnorResult}`);
    } else if (gate.toUpperCase() === 'NAND') {
        const nandResult = NandGate(input1, input2);
        console.log(`NAND(${input1}, ${input2}) = ${nandResult}`);
    } else {
        console.log('Please select a valid gate!')
    }
    return
}

// Function to handle user input and output results
function runSimulation() {
    const gate = prompt("Select the logic gate (AND, OR, NOT, NOR, XOR, XNOR, NAND: ");
    //const gate2 = prompt("Select the second logic gate (0 (AND), 1 (OR), 2 (NOT), 3 (NOR), 4 (XOR), 5 (XNOR), 6 (NAND): ")


    const input1 = parseInt(prompt("Enter the first input value (0 or 1):"), 10);
    const input2 = parseInt(prompt("Enter the second input value (0 or 1):"), 10);

    simulateLogicCircuit(input1, input2, gate);
}

// Run the simulation
runSimulation();
