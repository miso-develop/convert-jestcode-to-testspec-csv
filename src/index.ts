import * as ts from "typescript";

const testList: { depth: number, identifierText: string, text: string }[] = []
let identifierText = ""
let depth = 0

const forEachChildAll = async (parent) => {
	depth++
	ts.forEachChild(parent, node => {
		if (ts.isStringLiteralLike(node) && identifierText !== "") {
			testList.push({ depth, identifierText, text: node.text })
			identifierText = ""
		}
		
		if (ts.isIdentifier(node) && (node.text === "describe" || node.text === "test")) {
			identifierText = node.text
		}
		
		forEachChildAll(node)
	})
	depth--
}

const makeColumnList = testList => {
	const columnList: number[] = []
	testList.forEach(test => columnList.push(test.depth))
	return Array.from(new Set(columnList))
}

const makeCsv = (testList) => {
	const columnList = makeColumnList(testList)
	const maxDepth = columnList.reduce((a, b) => Math.max(a, b))
	const maxColumn = columnList.indexOf(maxDepth)
	
	const header = `${"*,".repeat(maxColumn)}test\n`
	let csv = header
	testList.forEach(test => {
		const line = `${",".repeat(maxColumn)}"${test.identifierText === "test" ? test.text : ""}"\n`
		const columnNum = columnList.indexOf(test.depth)
		csv += `${line.slice(0, columnNum)}${test.identifierText === "describe" ? "\"" + test.text + "\"" : ""}${line.slice(columnNum)}`
	})
	
	return csv
}

; (async () => {
	const sourceFile = process.argv[2]
	const program = ts.createProgram([sourceFile], {});
	const source = program.getSourceFile(sourceFile);
	if (!source) return console.error("Error: Could not get source!")
	
	forEachChildAll(source)
	if (testList.length === 0) return console.error("Error: Not a test file!")
	
	const csv = makeCsv(testList)
	console.log(csv)
})()
