export default function subtract(a, b) {
	return a - b;
}
test("test subtraction", function(){ 
    expect(subtract(3,1)).toBe(2)
 })