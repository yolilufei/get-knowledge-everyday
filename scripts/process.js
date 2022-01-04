import process from 'process';

// 1. cpu 内存
console.log(process.memoryUsage());
console.log(process.arch);
process.env.NODE_ENV = 2;
console.log(process.platform);