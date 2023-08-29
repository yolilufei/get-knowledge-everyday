const path = require('path');
const winJoin = path.win32.join;
const posixJoin = path.posix.join;


// join 语法: declare function join(...paths: string[]): string;
// 函数解析：join 函数接收多个字符串类型参数，然后将多个参数按照当前运行的宿主操作系统指定的路径分隔符拼接在一起，最后返回规范化的路径
// example
console.log(path.join('a', 'b', 'c')); 
console.log(posixJoin('a', 'b', 'c')); 
// result: unix: a/b/c，由于我是在 unix 系统下操作的，unix 操作系统的路径分隔符是 /，所以返回结果就是 a + / + b + / + c: a/b/c 
// 如果想要测试在 Windows 系统上的效果，可以使用 path.win32.join，关于 ptah.win32 详细信息，可以查看
console.log(winJoin('a', 'b', 'c'), path.win32.sep);
// result: windows: a\b\c \

// 注意：通常情况下我们不需要过于关注操作系统的区别，因为 node 已经帮我们适配了不同的操作系统，所以可以直接使用 path.join

// 2. path.sep 返回当前程序运行所在宿主操作系统指定的路径分隔符，unix 系统是：/（正斜杠），Windows操作系统是：\（反斜杠）,
// 如果想要获取特定操作系统的路径分隔符，可以使用 path.win32 和 path.posix

// 3. 返回规范化的路径，要注意规范化这个词，path 同样提供了方法适配操作系统。path.normalize



// path.normalize 语法：declare function normalize(path: string): string;
console.log(path.normalize('/foo/bar/\e\w\s\\r\baz/asdf/quux/..'));