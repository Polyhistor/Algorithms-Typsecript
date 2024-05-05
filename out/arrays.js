var a = new ArrayBuffer(6);
console.log(a);
var a8 = new Uint8Array(a);
a8[0] = 45;
a8[2] = 15;
console.log(a);
var a16 = new Uint16Array(a);
a16[0] = 0x4545;
console.log(a);
//# sourceMappingURL=arrays.js.map